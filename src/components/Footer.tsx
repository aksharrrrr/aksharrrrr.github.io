import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 md:px-12">
      <div className="flex flex-col items-center max-w-6xl mx-auto">
        <div className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Akshar Rughani. All rights reserved.
        </div>
        <div className="mt-2 text-xs text-muted-foreground/80 text-center">
          Design inspired by{' '}
          <a
            href="https://stephwang.github.io/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            Stephanie Wang
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
