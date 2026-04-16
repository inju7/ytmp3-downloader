# YouTube to Audio Vibe

A full-stack web application that allows users to seamlessly download high-quality MP3 audio from YouTube videos. It features a modern, responsive user interface and a robust backend that tracks download progress in real-time.

## 🚀 Features
- **Fast Audio Extraction**: Converts YouTube videos to 192kbps MP3 audio streams.
- **Real-Time Progress Tracking**: Live progress bar updates as your video is reliably downloaded and converted.
- **Modern UI**: A sleek, accessible, and responsive user interface built with beautifully designed UI components.
- **CORS Enabled**: The API is configured to easily handle cross-origin requests, keeping the frontend and backend decoupled.

## 💻 Tech Stack
**Frontend:**
- [React (Vite)](https://vitejs.dev/) - Fast, modern frontend framework
- [TypeScript](https://www.typescriptlang.org/) - Static typing for robust code
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- [shadcn-ui](https://ui.shadcn.com/) - Beautifully designed, accessible UI components

**Backend:**
- [Python & Flask](https://flask.palletsprojects.com/) - Lightweight and powerful web API framework
- [yt-dlp](https://github.com/yt-dlp/yt-dlp) - Fork of youtube-dl for reliable video fetching
- **FFmpeg** - Used under the hood to extract and process the audio

## ⚙️ How It Works
1. The user inputs a YouTube URL into the frontend application.
2. A `POST` request is fired to the Flask backend's `/download` endpoint.
3. The server utilizes `yt-dlp` and `ffmpeg` to download the best audio format and process it into an MP3.
4. The client polls the `/progress` endpoint to keep the user updated during the process.
5. Once complete, the audio file is securely delivered back to the client as an attachment.

**FEATURES TO BE ADDED IN THE FUTURE**
- Able to download spotify songs (in best quality possible)
- Able to download soundcloud songs (in best quality possible)
- Multiple downloads at once (max 5 at a time, may look into the maximum threshold limit)

