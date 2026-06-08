export const Footer = () => {
  return (
    <footer className="glass-card border-t mt-20 cursor-default">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-muted-foreground">
            © {new Date().getFullYear()} Alex Uche. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
            className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </a>
            <a 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a  
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};