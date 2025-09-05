progress = 0
from flask import Flask, request, send_from_directory, jsonify
from flask_cors import CORS
import os
import yt_dlp

app = Flask(__name__)
CORS(app)
DOWNLOAD_FOLDER = "downloads"
os.makedirs(DOWNLOAD_FOLDER, exist_ok=True)

# Function to download YouTube audio as MP3
def youtube_to_mp3(url, output_folder=DOWNLOAD_FOLDER):
    global progress
    progress = 0
    def hook(d):
        global progress
        if d['status'] == 'downloading':
            if d.get('total_bytes'):
                progress = int(d['downloaded_bytes'] / d['total_bytes'] * 100)
            elif d.get('total_bytes_estimate'):
                progress = int(d['downloaded_bytes'] / d['total_bytes_estimate'] * 100)
        elif d['status'] == 'finished':
            progress = 100
    ydl_opts = {
        'format': 'bestaudio/best',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }],
        'outtmpl': os.path.join(output_folder, '%(title)s.%(ext)s'),
        'quiet': False,
        'http_headers': {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        },
        'ffmpeg_location': r'C:\ffmpeg\bin\ffmpeg.exe',
        'progress_hooks': [hook],
    }
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(url, download=True)
        filename = ydl.prepare_filename(info)
        mp3_filename = os.path.splitext(filename)[0] + '.mp3'
        return mp3_filename
@app.route('/progress', methods=['GET'])
def get_progress():
    global progress
    return jsonify({'progress': progress})

@app.route('/download', methods=['POST'])
def download_audio():
    data = request.get_json()
    url = data.get('url')
    if not url:
        return jsonify({'error': 'No URL provided'}), 400
    try:
        mp3_path = youtube_to_mp3(url)
        filename = os.path.basename(mp3_path)
        return jsonify({'filename': filename})
    except Exception as e:
        error_message = str(e)
        if '403' in error_message or 'Forbidden' in error_message:
            return jsonify({'error': 'This YouTube video cannot be downloaded due to restrictions set by the video owner or YouTube.'}), 500
        return jsonify({'error': error_message}), 500

@app.route('/file/<filename>', methods=['GET'])
def get_file(filename):
    return send_from_directory(DOWNLOAD_FOLDER, filename, as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
