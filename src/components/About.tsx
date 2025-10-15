import React from 'react';
import { Code2, Palette, Zap, Users, Award, Coffee } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', level: 95, icon: Code2 },
    { name: 'UI/UX Design', level: 90, icon: Palette },
    { name: 'Performance Optimization', level: 85, icon: Zap },
    { name: 'Team Collaboration', level: 92, icon: Users },
  ];

  const stats = [
    { number: '10+', label: 'Projects Completed', icon: Award },
    { number: '3+', label: 'Years Experience', icon: Coffee },
    { number: '8+', label: 'Happy Clients', icon: Users },
    { number: '100%', label: 'Client Satisfaction', icon: Zap },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Web-developer with a keen eye for design and a love for creating 
              exceptional digital experiences. With over 3 years of experience in web development, 
              I specialize in building modern, responsive applications that not only look great but 
              perform flawlessly.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My approach combines technical expertise with creative problem-solving, ensuring every 
              project I work on delivers both aesthetic appeal and functional excellence. I believe 
              in the power of clean code, intuitive design, and continuous learning.
            </p>
            
            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Technical Skills</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <skill.icon className="h-5 w-5 text-blue-800" />
                      <span className="text-foreground font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                      <stat.icon className="h-6 w-6 text-blue-800" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;