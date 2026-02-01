import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: 'hero' },
        { name: 'About', href: 'about' },
        { name: 'Portfolio', href: 'portfolio' },
        { name: 'Services', href: 'services' },
        { name: 'Contact', href: 'contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: 'services' },
        { name: 'Mobile Apps', href: 'services' },
        { name: 'UI/UX Design', href: 'services' },
        { name: 'Consulting', href: 'services' },
      ]
    },
    {
      title: 'Contact',
      links: [
        { name: 'joelhabila1000@gmail.com', href: 'mailto:joelhabila1000@gmail.com' },
        { name: '09124352139, 09159386520', href: 'tel:+2349124352139' },
        { name: 'Lagos Nigeria', href: '#' },
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/joelhabila1000', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/joelhabila1000/', label: 'LinkedIn' },
    
    { icon: Mail, href: 'mailto:joelhabila1000@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                JOEL HABILA
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Creating exceptional digital experiences through innovative development 
                and thoughtful design.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => {
                          if (link.href.startsWith('#') || !link.href.includes('@') && !link.href.includes('tel:')) {
                            scrollToSection(link.href);
                          } else {
                            window.open(link.href, '_blank');
                          }
                        }}
                        className="text-muted-foreground hover:text-accent transition-colors duration-200"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© 2026 Made by Joel Habila</span>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-accent/10"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;