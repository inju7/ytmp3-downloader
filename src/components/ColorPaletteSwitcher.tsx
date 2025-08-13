import { useState } from "react";
import { Palette } from "lucide-react";

const themes = [
  { name: "Purple Wave", class: "", color: "hsl(258 90% 66%)" },
  { name: "Neon Cyber", class: "theme-neon", color: "hsl(180 100% 50%)" },
  { name: "Sunset Vibes", class: "theme-sunset", color: "hsl(340 100% 60%)" },
  { name: "Ocean Depths", class: "theme-ocean", color: "hsl(200 100% 45%)" },
  { name: "Electric Lime", class: "theme-electric", color: "hsl(120 100% 50%)" },
];

const ColorPaletteSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const switchTheme = (index: number) => {
    setCurrentTheme(index);
    document.documentElement.className = themes[index].class;
    setIsOpen(false);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-card rounded-full shadow-elegant flex items-center justify-center border border-border hover:shadow-card transition-all duration-300 hover:scale-110 group"
        >
          <Palette className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
        </button>

        {isOpen && (
          <div className="absolute top-16 right-0 bg-card rounded-2xl shadow-elegant border border-border p-4 min-w-[200px] animate-fade-in">
            <h3 className="text-sm font-semibold text-foreground mb-3">Choose Theme</h3>
            <div className="grid gap-2">
              {themes.map((theme, index) => (
                <button
                  key={index}
                  onClick={() => switchTheme(index)}
                  className={`flex items-center gap-3 w-full p-3 rounded-xl text-left hover:bg-secondary transition-all duration-200 group ${
                    currentTheme === index ? 'bg-secondary ring-2 ring-primary' : ''
                  }`}
                >
                  <div 
                    className="w-6 h-6 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-200"
                    style={{ backgroundColor: theme.color }}
                  />
                  <span className="text-sm font-medium text-foreground">
                    {theme.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPaletteSwitcher;