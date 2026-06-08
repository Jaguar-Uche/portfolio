import { Calendar, MapPin } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export const ExperienceCard = ({ 
  title, 
  company, 
  location, 
  period, 
  description, 
  technologies 
}: ExperienceCardProps) => {
  return (
    <div className="glass-card p-6 rounded-2xl border-l-4 border-primary hover:scale-105 transition-spring group">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-lg text-muted-foreground">{company}</p>
        </div>
        
        <div className="flex flex-col md:items-end mt-2 md:mt-0 space-y-1">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-1" />
            {period}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
        </div>
      </div>
      
      <ul className="space-y-2 mb-4">
        {description.map((item, index) => (
          <li key={index} className="text-muted-foreground text-sm flex items-start">
            <span className="w-2 h-2 gradient-primary rounded-full mt-2 mr-3 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      
      {technologies && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 bg-accent text-accent-foreground rounded-md text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};