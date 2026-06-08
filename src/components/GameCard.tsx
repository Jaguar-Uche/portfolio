import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const GameCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  liveUrl, 
  githubUrl 
}: GameCardProps) => {
  // Add state to track if the image fails to load
  const [imgError, setImgError] = useState(false);

  return (
    <div className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-spring">
      <div className="aspect-video bg-gradient-secondary relative overflow-hidden">
        
        {/* Conditional rendering for the image vs the fallback span */}
        {image && !imgError ? (
          <img 
            src={image} 
            alt={`${title} preview`}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/80 font-medium">{title} Preview</span>
          </div>
        )}

        {/* Added pointer-events-none so the overlay doesn't block the image */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 bg-primary/20 text-primary rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-2">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1"
            >
              <Button size="sm" className="gradient-primary text-white w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            </a>
          )}
          {githubUrl && (
          <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button size="sm" variant="outline" className="border-white/20 w-full">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};