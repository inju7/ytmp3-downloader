import { Shield, Zap, Heart, Download, Music, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Convert videos to MP3 in seconds with our optimized conversion engine"
    },
    {
      icon: Music,
      title: "High Quality Audio",
      description: "Get crystal clear MP3 files with up to 320kbps quality"
    },
    {
      icon: Shield,
      title: "100% Safe & Secure",
      description: "Your privacy matters. No data stored, no registration required"
    },
    {
      icon: Download,
      title: "Unlimited Downloads",
      description: "Convert as many videos as you want, completely free forever"
    },
    {
      icon: Heart,
      title: "No Watermarks",
      description: "Clean, pure audio files without any annoying watermarks"
    },
    {
      icon: Smartphone,
      title: "Works Everywhere",
      description: "Compatible with all devices - desktop, mobile, and tablet"
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Our Converter?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the best YouTube to MP3 conversion with these amazing features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 group animate-fade-in border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;