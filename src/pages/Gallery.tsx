import Layout from "@/components/Layout";
import { withBase } from "@/lib/utils";

const Gallery = () => {
  // Gallery items - easy to add new pictures by adding objects to this array
  const galleryItems = [
    {
      id: 0,
      image: withBase("/image_0.jpg"),
      caption: "Ctrl + S: Life milestone saved. DAIICT, Convocation day, 2023"
    },
    {
      id: 1,
      image: withBase("/image_1.jpg"),
      caption: "The Mighty Gonbo Rangjon: No words needed. Zanskar, 2025"
    },
    {
      id: 2,
      image: withBase("/image_2.jpg"),
      caption: "From backend systems to Himalayan rhythms - Manali Bike Trip, 2023"
    },
    {
      id: 3,
      image: withBase("/image_3.jpg"),
      caption: "Throwing colors, catching snow - Sangla diaries, 2024."
    },
    {
      id: 4,
      image: withBase("/image_4.jpg"),
      caption: "Caught in a rabbit-hole, literally. Nainital Bike Ride, 2025"
    },
    {
      id: 5,
      image: withBase("/image_5.jpg"),
      caption: "Frozen fingers, full throttle – Sinkula Pass, 5091 meters"
    },
    {
      id: 6,
      image: withBase("/image_6.jpg"),
      caption: "Camping gear, cold mist, and Beatles bliss. Indrahar Pass, August, 2024"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Main Content */}
        <div className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            {/* Gallery Description */}
            <p className="text-center text-[#47392b]/90 font-inter-variable text-sm md:text-base mb-16 leading-relaxed">
              A collection of my adventures, achievements, and the moments that define my journey through life and career.
            </p>
            
            {/* Gallery Items - Single Column Layout */}
            <div className="space-y-16">
              {galleryItems.map((item, index) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image Container - No Frame */}
                  <div className="w-full max-w-2xl">
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  
                  {/* Caption */}
                  <div className="mt-4">
                    <p className="text-sm text-[#47392b]/90 font-inter-variable text-center">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
