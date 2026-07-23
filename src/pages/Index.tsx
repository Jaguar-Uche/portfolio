import { useEffect, useState } from "react";
import { Download, Mail, Github, Linkedin, Code, Palette, Rocket, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { GameCard } from "@/components/GameCard";
import { FloatingAI } from "@/components/FloatingAI";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import heroBackground from "@/assets/hero-background.jpg";
import { skills, games, experiences, projects } from "@/data/portfolio";

const Index = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
  let ticking = false;

  const handleScroll = () => {
    // Only queue a state update if we aren't already waiting for the next frame
    if (!ticking) {
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        ticking = false; // Reset the lock once the update is complete
      });
      ticking = true; // Lock further updates until the frame fires
    }
  };

  const checkScreen = () => setIsSmallScreen(window.innerWidth < 1024); // lg breakpoint

  // Initial checks
  checkScreen();
  setScrollY(window.scrollY); // Safe to call directly on mount

  // Attach listeners
  // Adding { passive: true } tells the browser this listener won't cancel the scroll, improving scroll smoothness
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", checkScreen);

  // Cleanup both on unmount
  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", checkScreen);
  };
}, []);

  const handleContactClick = () => {
    toast({
      title: "Let's connect!",
      description: "Email client opened! Feel free to also reach me on LinkedIn.",
    });
  };


  const displayedProjects = isSmallScreen ? projects.slice(0, 3) : projects;
  const displayedGames = isSmallScreen ? null : games;

  // Calculate overlay opacity based on scroll
  const overlayOpacity = Math.min(scrollY / 800, 0.85);
  const contentOffset = Math.max(0, scrollY / 2);

  return (
    <div className="min-h-screen relative">
      {/* Fixed Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          transform: `translateY(${contentOffset * 0.5}px)`
        }}
      />
      
      {/* Scroll Overlay */}
      <div 
        className="fixed inset-0 bg-background"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-20 px-4 min-h-screen flex items-center">
          <div className="container mx-auto text-center">
            <div 
              className="animate-fade-in"
              style={{ transform: `translateY(${contentOffset * 0.3}px)` }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                Hi, I'm
                <span className="gradient-primary bg-clip-text block">
                  Alex Uche
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Full Stack Developer & Cybersecurity Enthusiast
                Building web applications, networking tools, and security-focused software with React, Node.js, and Python.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="https://mail.google.com/mail/?view=cm&to=alexuduma50@gmail.com&su=Job%20Offer&body=Hello%20buddy,%20I%20saw%20your%20portfolio%20and%20i%20am%20impressed" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="gradient-primary text-white hover:opacity-90 transition-opacity"
                  onClick={handleContactClick}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
                </a>

                <a
                  href="/Alex-Uche-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="secondary">
                    <Eye className="w-5 h-5 mr-2" />
                    View Resume
                  </Button>
                </a>

                <a
                  href="/Alex-Uche-Resume.pdf"
                  download="Alex-Uche-Resume.pdf"
                >
                  <Button
                    size="lg"
                    variant="outline"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </Button>
                </a>
              </div>
              
              <div className="flex justify-center space-x-6 mt-8">
                <a href="https://github.com/Jaguar-Uche" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/alex-uche/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-12 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
                About Me
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    I'm a full-stack developer who enjoys building things from scratch and figuring out how systems work under the hood. 
                    My interests range from web development and backend engineering to networking and cybersecurity. 
                    When I'm not coding, you'll probably find me playing chess, learning something new, or catching up on sleep.
                  </p>
                  
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="glass-card p-4 rounded-xl">
                      <Code className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">20+</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                    <div className="glass-card p-4 rounded-xl">
                      <Palette className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">{new Date().getFullYear() - 2023}+</div>
                      <div className="text-sm text-muted-foreground">Years</div>
                    </div>
                    <div className="glass-card p-4 rounded-xl">
                      <Rocket className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">10+</div>
                      <div className="text-sm text-muted-foreground">Happy Clients</div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Quick Facts</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 gradient-primary rounded-full mr-3" />
                      Based in Ikeja, Lagos State, Nigeria
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 gradient-primary rounded-full mr-3" />
                      Fluent in English, JavaScript & chess
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 gradient-primary rounded-full mr-3" />
                      Open to remote opportunities
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 gradient-primary rounded-full mr-3" />
                      Available for freelance work
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
                Skills & Technologies
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    className="animate-fade-in"
                  >
                    <SkillCard {...skill} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
                Projects
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.title}
                    style={{ animationDelay: `${index * 0.2}s` }}
                    className="animate-fade-in"
                  >
                    <ProjectCard {...project} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Games Section */}
        <section id="games" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
                Games
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedGames?.map((game, index) => (
                  <div
                    key={game.title}
                    style={{ animationDelay: `${index * 0.2}s` }}
                    className="animate-fade-in"
                  >
                    <GameCard {...game} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Experience Section */}
        <section id="experience" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
                Work Experience
              </h2>
              
              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <div
                    key={experience.title}
                    style={{ animationDelay: `${index * 0.2}s` }}
                    className="animate-fade-in"
                  >
                    <ExperienceCard {...experience} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Let's Work Together
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Let's discuss how we can bring your ideas to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://mail.google.com/mail/?view=cm&to=alexuduma50@gmail.com&su=Connecting%20from%20your%20portfolio&body=Hi%20Alex%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20was%20really%20impressed%20by%20your%20projects.%20I%27d%20love%20to%20connect%20with%20you.%0A%0ABest%2C" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="gradient-primary text-white hover:opacity-90 transition-opacity"
                    onClick={handleContactClick}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Me
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <FloatingAI />
    </div>
  );
};

export default Index;
