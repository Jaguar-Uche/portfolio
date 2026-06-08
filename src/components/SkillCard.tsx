interface SkillCardProps {
  name: string;
  // Using a Union Type ensures only these exact strings can be passed in
  level: "Learning" | "Comfortable" | "Experienced"; 
  category: string;
}

export const SkillCard = ({ name, level, category }: SkillCardProps) => {
  // Helper function to assign different colors based on proficiency
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Learning":
        return "bg-blue-400"; // Blue for learning
      case "Comfortable":
        return "bg-emerald-400"; // Green for comfortable
      case "Experienced":
        return "bg-purple-500"; // Purple/Primary for experienced
      default:
        return "bg-muted-foreground";
    }
  };

  return (
    <div className="glass-card p-4 rounded-xl group hover:scale-105 transition-spring flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-4">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground uppercase tracking-wide">
          {category}
        </span>
      </div>
      
      {/* Replaced the progress bar with a status indicator */}
      <div className="flex items-center gap-2 justify-end mt-auto">
        <div className={`w-2 h-2 rounded-full ${getLevelColor(level)}`} />
        <span className="text-xs text-muted-foreground font-medium">
          {level}
        </span>
      </div>
    </div>
  );
};