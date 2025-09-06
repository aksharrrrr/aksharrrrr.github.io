import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 md:px-12">
      <div className="flex flex-col items-center max-w-6xl mx-auto">
        <div className="flex items-center space-x-6 mb-4">
          <a
            href="https://github.com/aksharrrrr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/akshar-rughani-5086731b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
        <div className="text-sm text-muted-foreground text-center">
          © 2025 Akshar Rughani. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;