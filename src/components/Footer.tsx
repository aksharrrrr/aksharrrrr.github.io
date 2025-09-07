import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 md:px-12">
      <div className="flex flex-col items-center max-w-6xl mx-auto">
        <div className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Akshar Rughani. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
