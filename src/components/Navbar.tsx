import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { LoginForm } from "./LoginForm";

export const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-default">
          <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-bold text-foreground">Alex Uche</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
          <a href="#games" className="text-foreground hover:text-primary transition-colors">Games</a>
          <a href="#experience" className="text-foreground hover:text-primary transition-colors">Experience</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
            <DialogTrigger asChild>
              <Button className="gradient-primary text-white hover:opacity-90 transition-opacity">
            Message
          </Button>
            </DialogTrigger>
            <DialogContent className="glass-card border">
              <DialogHeader>
                <DialogTitle className="text-foreground">Chat on Whatsapp</DialogTitle>
              </DialogHeader>
              <div className="p-4 text-center">
                <p className="text-muted-foreground mb-4">
                  Message me now to bring your beautiful website ideas to life
                </p>
                <Button className="gradient-primary text-white">
                  <a href="https://api.whatsapp.com/send?phone=2348069637395&text=Alex%2C%20I%27d%20like%20to%20connect%20with%20you" target="_blank" rel="noopener">
                    Message
                  </a>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};