import React, { useState, useEffect } from "react";
import { ArrowDown, Code, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import myCV from "@/assets/Habila Joel cv..pdf";

const Hero = () => {
  const jobTitles = [
    "Creative Developer",
    "UI/UX Designer",
    "Frontend Engineer",
    "Graphic Designer",
    "Web Enthusiast",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
        setIsAnimating(false);
      }, 300); // Half of transition duration for smooth effect
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(interval);
  }, [jobTitles.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Code className="h-8 w-8 text-accent opacity-60" />
        </div>
        <div
          className="absolute top-40 right-20 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Palette className="h-6 w-6 text-primary opacity-60" />
        </div>
        <div
          className="absolute bottom-32 left-20 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <Sparkles className="h-7 w-7 text-accent opacity-60" />
        </div>
        <div
          className="absolute top-60 left-1/2 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="w-3 h-3 bg-accent rounded-full opacity-60"></div>
        </div>
        <div
          className="absolute bottom-48 right-1/3 animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="w-2 h-2 bg-primary rounded-full opacity-60"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            <span
              className={`block bg-gradient-primary bg-clip-text text-transparent transition-all duration-600 ${
                isAnimating
                  ? "opacity-0 transform translate-y-4"
                  : "opacity-100 transform translate-y-0"
              }`}
            >
              {jobTitles[currentTitleIndex]}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting beautiful digital experiences with modern technologies.
            Passionate about clean code, elegant design, and user-centered
            solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("portfolio")}
              className="text-lg px-8 py-6"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-lg px-8 py-6"
            >
              Let's Talk
            </Button>

            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection(myCV)}
              className="text-lg px-8 py-6"
            >
              Download My CV
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="text-muted-foreground hover:text-accent transition-colors duration-200"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
