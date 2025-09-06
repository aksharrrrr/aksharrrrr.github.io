import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: "About", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <header className="w-full bg-white">
      {/* Navigation Brand - responsive spacing */}
      <div className="pt-6 md:pt-12 pb-4 px-4 md:px-6">
        <nav className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto space-y-4 md:space-y-0">
          <Link 
            to="/" 
            className="text-2xl md:text-4xl text-[#47392b] focus-visible font-neue-haas tracking-[-2px] leading-none"
          >
            Akshar
          </Link>
          
          {/* Navigation menu - responsive layout */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-1 md:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-xs md:text-sm font-inter-variable-thin transition-colors focus-visible px-2 py-1 ${
                  location.pathname === item.path
                    ? "text-[#47392b]"
                    : "text-[#47392b]/70 hover:text-[#47392b]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;