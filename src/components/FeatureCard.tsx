import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  icon: LucideIcon;
  description?: string;
  onClick?: () => void;
}

export const FeatureCard = ({ title, icon: Icon, description, onClick }: FeatureCardProps) => {
  return (
    <div 
      onClick={onClick}
      className="group glass-card p-6 rounded-2xl cursor-pointer transition-spring hover:scale-105 hover:shadow-2xl animate-fade-in"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 gradient-primary rounded-xl group-hover:scale-110 transition-spring">
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        {description && (
          <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};