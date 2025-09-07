import Layout from "@/components/Layout";
import { withBase } from "@/lib/utils";
import { useState } from "react";
import { 
  Menu, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  RotateCw, 
  Download, 
  Printer, 
  MoreHorizontal,
  FileText,
  X
} from "lucide-react";

const Portfolio = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 25, 200));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 25, 50));
  const handleRotateLeft = () => setRotation(prev => prev - 90);
  const handleRotateRight = () => setRotation(prev => prev + 90);
  const closePdfViewer = () => setSelectedPdf(null);

  const projects = [
    {
      title: "Product Requirements Document 1",
      description: "Comprehensive PRD outlining project specifications, requirements, and technical details.",
      link: withBase("/PRD_1.pdf"),
      isPdf: true
    },
    {
      title: "Product Requirements Document 2", 
      description: "Detailed PRD covering system architecture, user flows, and implementation guidelines.",
      link: withBase("/PRD_2.pdf"),
      isPdf: true
    },
    {
      title: "Product Requirements Document 3",
      description: "Advanced PRD with comprehensive feature specifications and technical requirements.",
      link: withBase("/PRD_3.pdf"),
      isPdf: true
    },
    {
      title: "Product Requirements Document 4",
      description: "Strategic PRD focusing on business objectives, user needs, and technical solutions.",
      link: withBase("/PRD_4.pdf"),
      isPdf: true
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white">


        {/* Main Content */}
        <div className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      {project.isPdf && <FileText className="h-5 w-5 text-blue-600" />}
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <button
                      onClick={() => project.isPdf ? setSelectedPdf(project.link) : window.open(project.link, '_blank')}
                      className="inline-block text-accent hover:text-accent/80 text-sm font-medium transition-colors focus-visible"
                    >
                      {project.isPdf ? 'View PRD →' : 'View Project →'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PDF Viewer Modal */}
        {selectedPdf && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl h-[90vh] flex flex-col">
              {/* PDF Viewer Header */}
              <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Menu className="h-5 w-5 text-gray-600 cursor-pointer" />
                  <span className="text-sm text-gray-600">{selectedPdf?.split('/').pop()}</span>
                </div>
                
                {/* Zoom Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleZoomOut}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <ZoomOut className="h-4 w-4 text-gray-600" />
                  </button>
                  <span className="text-sm text-gray-600 min-w-[3rem] text-center">
                    {zoom}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <ZoomIn className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                
                {/* Document Controls */}
                <div className="flex items-center space-x-1">
                  <button
                    onClick={handleRotateLeft}
                    className="p-2 hover:bg-gray-100 rounded"
                    title="Rotate Left"
                  >
                    <RotateCcw className="h-4 w-4 text-gray-600" />
                  </button>
                  <button
                    onClick={handleRotateRight}
                    className="p-2 hover:bg-gray-100 rounded"
                    title="Rotate Right"
                  >
                    <RotateCw className="h-4 w-4 text-gray-600" />
                  </button>
                  <button
                    className="p-2 hover:bg-gray-100 rounded"
                    title="Download"
                  >
                    <Download className="h-4 w-4 text-gray-600" />
                  </button>
                  <button
                    className="p-2 hover:bg-gray-100 rounded"
                    title="Print"
                  >
                    <Printer className="h-4 w-4 text-gray-600" />
                  </button>
                  <button
                    onClick={closePdfViewer}
                    className="p-2 hover:bg-gray-100 rounded"
                    title="Close"
                  >
                    <X className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer Content */}
              <div className="flex-1 bg-gray-100 p-4">
                <div className="bg-white rounded-lg shadow-sm h-full overflow-auto">
                  <div 
                    className="min-h-full flex items-center justify-center"
                    style={{ transform: `scale(${zoom / 100}) rotate(${rotation}deg)` }}
                  >
                    {/* PDF Viewer */}
                    <iframe
                      src={selectedPdf}
                      width="100%"
                      height="100%"
                      title="PRD PDF"
                      className="border-0"
                      style={{ minHeight: '800px' }}
                    >
                      <p className="p-8 text-center text-muted-foreground">
                        Your browser doesn't support PDF viewing. 
                        <a 
                          href={selectedPdf} 
                          className="text-blue-600 hover:text-blue-800 ml-1 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download the PDF
                        </a>
                        instead.
                      </p>
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Portfolio;