import { Copy, Download, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Copy,
      title: "Copy URL",
      description: "Copy the YouTube video URL you want to convert",
      step: "01"
    },
    {
      icon: Zap,
      title: "Convert",
      description: "Paste the URL and click convert - we'll do the magic",
      step: "02"
    },
    {
      icon: Download,
      title: "Download",
      description: "Download your high-quality MP3 file instantly",
      step: "03"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Convert your favorite YouTube videos to MP3 in just three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-card rounded-xl p-8 text-center shadow-card hover:shadow-elegant transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Step number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-elegant">
                {step.step}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="h-8 w-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;