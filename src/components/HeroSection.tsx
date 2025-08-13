import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Music, PlayCircle } from "lucide-react";
import heroIcon from "@/assets/hero-icon.jpg";

const HeroSection = () => {
  const [url, setUrl] = useState("");

  const handleConvert = () => {
    if (url) {
      // Conversion logic would go here
      console.log("Converting:", url);
    }
  };

  return (
    <section className="relative h-screen bg-gradient-secondary flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Animated background orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse-gentle"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-xl animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 container max-w-4xl mx-auto px-6 text-center">
        {/* Hero icon */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={heroIcon} 
            alt="YouTube to MP3 converter" 
            className="w-24 h-24 mx-auto rounded-2xl shadow-elegant animate-pulse-gentle"
          />
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
          YouTube to{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            MP3
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
          Convert your favorite YouTube videos to high-quality MP3 files instantly. 
          Fast, free, and incredibly simple.
        </p>

        {/* Converter form */}
        <div className="bg-card rounded-2xl p-8 shadow-card backdrop-blur-sm border border-border/50 max-w-2xl mx-auto animate-slide-up">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="url"
                placeholder="Paste your YouTube URL here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="h-14 text-lg border-2 focus:border-primary transition-colors"
              />
            </div>
            <Button 
              variant="converter" 
              size="lg" 
              onClick={handleConvert}
              className="h-14 px-8 text-lg min-w-[140px]"
            >
              <Download className="mr-2 h-5 w-5" />
              Convert
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-8 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <PlayCircle className="h-4 w-4 text-primary" />
              High Quality
            </div>
            <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <Music className="h-4 w-4 text-primary" />
              Fast Conversion
            </div>
            <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <Download className="h-4 w-4 text-primary" />
              Free Forever
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;