import HeroSection from "@/components/HeroSection";
import ColorPaletteSwitcher from "@/components/ColorPaletteSwitcher";

const Index = () => {
  return (
    <div className="h-screen overflow-hidden">
      <ColorPaletteSwitcher />
      <HeroSection />
    </div>
  );
};

export default Index;
