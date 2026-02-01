import React, { useState } from "react";
import { ExternalLink, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce solution with advanced filtering, cart management, and payment integration.",
      image: project3,
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://coolharvestfarms.com/",
    },
    {
      id: 2,
      title: "Pet Care App",
      description:
        "Smart and secure pet care mobile app offering seamless pet management, instant appointment booking, and real-time pet health monitoring.",
      image: project2,
      category: "mobile",
      technologies: ["React Native", "Firebase", "Node.js"],
      liveUrl: "#",
    },
    {
      id: 3,
      title: "JCLEMENTS ENGINEERING DASHBOARD",
      description:
        "Engineering project management platform with real-time tracking, team collaboration, and comprehensive analytics for streamlined workflows and improved productivity.",
      image: project1,
      category: "web",
      technologies: ["Next.js", "TypeScript", "SuperBase"],
      liveUrl: "https://jclementsengineering.com/",
    },
    {
      id: 4,
      title: "UI/UX Design",
      description:
        "Comprehensive UI/UX brand identity solution featuring logo design, business cards, and user-focused marketing materials.",
      image: project4,
      category: "design",
      technologies: ["Figma", "Illustrator", "Photoshop"],
      liveUrl:
        "https://www.figma.com/proto/BZBCIuY7OOaa0hn5cSWBWc/Practice-7?node-id=9-100&t=ubW9CeA0wHEI45Rx-1",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: Filter },
    { id: "web", label: "Web Development", icon: ExternalLink },
    { id: "mobile", label: "Mobile Apps", icon: ExternalLink },
    { id: "design", label: "UI/UX Design", icon: ExternalLink },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            My Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and projects. Each piece represents my
            commitment to quality, innovation, and user experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "portfolio" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className="gap-2"
            >
              <category.icon className="h-4 w-4" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.liveUrl}
              target={project.liveUrl !== "#" ? "_blank" : undefined}
              rel={project.liveUrl !== "#" ? "noopener noreferrer" : undefined}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button
                      variant="hero"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                    ></Button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent/10 text-accent rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  <Button
                    variant="portfolio"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <span>
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </span>
                  </Button>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button variant="hero" size="lg" className="px-8 py-6">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
