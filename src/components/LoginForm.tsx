import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface LoginFormProps {
  onClose: () => void;
}

export const LoginForm = ({ onClose }: LoginFormProps) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSignUp && !acceptTerms) {
      toast({
        title: "Please accept the terms and conditions",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: isSignUp ? "Account created successfully!" : "Welcome back!",
      description: `You have successfully ${isSignUp ? "signed up" : "logged in"}.`,
    });
    
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-2">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="glass-card border-white/20 text-foreground"
          required 
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input 
          id="password" 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="glass-card border-white/20 text-foreground"
          required 
        />
      </div>
      
      {isSignUp && (
        <>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="newsletter" 
              checked={subscribeNewsletter}
              onCheckedChange={(checked) => setSubscribeNewsletter(checked as boolean)}
            />
            <Label htmlFor="newsletter" className="text-sm">
              Subscribe to our newsletter
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={acceptTerms}
              onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
            />
            <Label htmlFor="terms" className="text-sm">
              I accept the Terms and Conditions
            </Label>
          </div>
        </>
      )}
      
      <div className="flex flex-col space-y-2">
        <Button type="submit" className="gradient-primary text-white">
          {isSignUp ? "Sign Up" : "Login"}
        </Button>
        
        <Button 
          type="button" 
          variant="ghost" 
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-muted-foreground hover:text-foreground"
        >
          {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign up"}
        </Button>
      </div>
    </form>
  );
};