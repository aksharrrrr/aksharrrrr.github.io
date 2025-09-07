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
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const Resume = () => {
  const [zoom, setZoom] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(1);
  const [rotation, setRotation] = useState(0);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 25, 200));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 25, 50));
  const handleRotateLeft = () => setRotation(prev => prev - 90);
  const handleRotateRight = () => setRotation(prev => prev + 90);



  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">


        {/* Document Viewer Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                  <Menu className="h-5 w-5 text-gray-600 cursor-pointer" />
                  <span className="text-sm text-gray-600">akshar_rughani.pdf</span>
                  <span className="text-sm text-gray-500">{currentPage} / {totalPages}</span>
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
              className="p-2 hover:bg-gray-100 rounded"
              title="More Options"
            >
              <MoreHorizontal className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Document Viewer Content */}
        <div className="flex h-[calc(100vh-120px)]">
          {/* Left Pane - Thumbnail Navigation */}
          <div className="w-48 bg-white border-r border-gray-200 p-4">
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-32 h-40 mx-auto border-2 border-blue-300 rounded bg-gray-50 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">PDF Preview</span>
                </div>
                <div className="mt-2 text-sm text-gray-600">1</div>
              </div>
            </div>
          </div>

          {/* Right Pane - Main Document */}
          <div className="flex-1 bg-gray-100 p-4">
            <div className="bg-white rounded-lg shadow-sm h-full overflow-auto">
              <div 
                className="min-h-full flex items-center justify-center"
                style={{ transform: `scale(${zoom / 100}) rotate(${rotation}deg)` }}
              >
                {/* PDF Viewer */}
                <iframe
                  src={withBase("/akshar_rughani.pdf")}
                  width="100%"
                  height="100%"
                  title="Resume PDF"
                  className="border-0"
                  style={{ minHeight: '800px' }}
                >
                  <p className="p-8 text-center text-muted-foreground">
                    Your browser doesn't support PDF viewing. 
                    <a 
                      href={withBase("/akshar_rughani.pdf")} 
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
    </Layout>
  );
};

export default Resume;