import React, { useEffect, useState } from "react";
import {
  Code,
  Palette,
  Smartphone,
  Wrench,
  Globe,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const Services = () => {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Icon mapping for database stored services
  const iconMap: Record<string, any> = {
    Code,
    Palette,
    Smartphone,
    Wrench,
    Globe,
    Zap,
    Users,
  };

  const fallbackServices = [
    {
      icon: "Code",
      title: "Web Development",
      description:
        "Full-stack web applications built with modern technologies and best practices.",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO Friendly",
        "Cross-browser Compatibility",
      ],
      price_range: "Starting at ₦150,000",
    },
    {
      icon: "Smartphone",
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "React Native",
        "Flutter Development",
        "Native Performance",
        "App Store Publishing",
      ],
      price_range: "Starting at ₦100,000",
    },
    {
      icon: "Palette",
      title: "UI/UX Design",
      description:
        "User-centered design solutions that create engaging digital experiences.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
      price_range: "Starting at ₦100,000",
    },
    {
      icon: "Wrench",
      title: "Hardware Repairs/Consultation",
      description:
        "Professional computer and laptop repair services to get your devices running smoothly.",
      features: [
        "Diagnostic & Troubleshooting",
        "Component Replacement",
        "Performance Upgrades",
        "Data Recovery Services",
      ],
      price_range: "Starting at ₦15,000",
    },
  ];

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .order("order_index", { ascending: true });

      if (error) {
        console.error("Error fetching services:", error);
        setServices(fallbackServices);
      } else if (data && data.length > 0) {
        setServices(data);
      } else {
        setServices(fallbackServices);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
      setServices(fallbackServices);
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <section id="services" className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-48 mx-auto mb-4"></div>
              <div className="h-6 bg-muted rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I offer comprehensive digital solutions to help your business grow
            and succeed in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent =
              typeof service.icon === "string"
                ? iconMap[service.icon]
                : service.icon;
            const features = service.features || [
              "Responsive Design",
              "Performance Optimization",
              "Modern Technologies",
              "Best Practices",
            ];

            return (
              <div
                key={service.id || service.title}
                className="group bg-card rounded-xl p-6 shadow-card hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  {IconComponent && (
                    <IconComponent className="h-6 w-6 text-blue-800" />
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {features.map((feature: string) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-800 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-foreground">
                    {service.price_range || service.pricing}
                  </span>
                </div>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300"
                  onClick={() => scrollToSection("contact")}
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card rounded-xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Something Custom?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific requirements
              and create a tailored solution that fits your needs and budget.
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-6"
            >
              Let's Talk About Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
