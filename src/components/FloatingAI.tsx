import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const FloatingAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    toast({
      title: "Message sent to AI",
      description: "Our AI assistant will respond shortly!",
    });
    
    setMessage("");
  };

  return (
    <>
      {/* Floating AI Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full gradient-primary text-white shadow-lg hover:scale-110 transition-spring animate-float"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Chat Bubble */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 z-50 animate-scale-in">
          <div className="glass-card rounded-2xl h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold text-foreground">AI Assistant</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Chat Content */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                <div className="bg-primary/20 rounded-lg p-3 text-center">
                  <p className="text-sm text-foreground">
                    Click the button below to visit ur chatbot
                  </p>
                  <Button>
                    <a href="https://chatbot-two-steel-64.vercel.app/" target="_blank">JagBot</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/20">
              <div className="flex space-x-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="glass-card border-white/20 text-foreground"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="gradient-primary text-white"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};