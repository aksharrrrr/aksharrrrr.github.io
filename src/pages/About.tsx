import Layout from "@/components/Layout";
import { withBase } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  const navItems = [
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Navigation Brand */}
        <div className="pt-4 pb-2 px-4">
          <nav className="flex justify-between items-center max-w-2xl mx-auto">
            <Link 
              to="/" 
              className="text-[21px] font-light text-[#5A90C3] hover:text-[#4A7BA8] transition-colors focus-visible font-roberto"
            >
            </Link>
            
            <div className="flex space-x-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm transition-colors focus-visible ${
                    location.pathname === item.path
                      ? "text-[#5A90C3] font-medium"
                      : "text-[#5A90C3] hover:text-[#4A7BA8]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="px-4 py-2">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-1 items-start">
              {/* Profile image */}
              <div className="flex justify-center md:justify-start mb-6 md:mb-0 w-full">
                <div className="w-64 h-64 md:w-80 md:h-80">
                  <img 
                    src={withBase("/pp.png")} 
                    alt="Akshar Rughani profile picture"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
              
              {/* Introduction text */}
              <div className="text-center w-full">
                <p className="text-[13px] md:text-[15px] leading-relaxed text-[#47392b]/90 font-inter-variable md:mt-20">
                  Hello! I'm Akshar Rughani, a Product Manager at Delhivery with a unique blend of technical expertise and product leadership. I specialize in building and scaling SaaS solutions that improve efficiency, and delight customers. Outside of work, I enjoy camping, hiking, and going on long bike rides through the mountains.
                </p>
              </div>
            </div>
            
            {/* Social links */}
            <div className="flex justify-center mt-20">
              <div className="text-sm text-gray-600 font-inter">
                <a href="#" className="hover:text-blue-600 transition-colors">linkedin</a>
                <span className="mx-2">|</span>
                <a href="#" className="hover:text-blue-600 transition-colors">github</a>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="flex justify-center mt-1">
              <div className="flex items-center space-x-4 text-sm text-gray-600 font-inter">
                <a href="tel:+918866331809" className="hover:text-blue-600 transition-colors">
                  +91 8866331809
                </a>
                <span>|</span>
                <a href="mailto:aksharrughani@gmail.com" className="hover:text-blue-600 transition-colors">
                  aksharrughani@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;