import React, { useEffect, useRef, useState } from "react";
import QRCodeLib from "qrcode";

interface QRCodeProps {
  value: string;
  size?: number;
  className?: string;
  clickable?: boolean;
}

const QRCode: React.FC<QRCodeProps> = ({
  value,
  size = 64,
  className = "",
  clickable = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modalCanvasRef = useRef<HTMLCanvasElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Generate QR code untuk display utama
  useEffect(() => {
    if (canvasRef.current && value) {
      QRCodeLib.toCanvas(
        canvasRef.current,
        value,
        {
          width: size,
          margin: 1,
          color: {
            dark: "#000000",
            light: "#ffffff",
          },
        },
        (error) => {
          if (error) {
            console.error("QR Code generation error:", error);
          }
        }
      );
    }
  }, [value, size]);

  // Generate QR code untuk modal dengan ukuran lebih besar
  useEffect(() => {
    if (modalCanvasRef.current && value && showModal) {
      const modalSize = size * 3; // 3x lebih besar untuk modal
      QRCodeLib.toCanvas(
        modalCanvasRef.current,
        value,
        {
          width: modalSize,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#ffffff",
          },
        },
        (error) => {
          if (error) {
            console.error("Modal QR Code generation error:", error);
          }
        }
      );
    }
  }, [value, size, showModal]);

  // Keyboard event listener untuk tombol Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && showModal) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  const handleQRClick = () => {
    if (clickable) {
      setShowModal(true);
      setZoomLevel(1); // Reset zoom level saat modal dibuka
    }
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 0.5));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <>
      <div
        className={`bg-white p-2 rounded-lg border border-gray-200 ${className} ${
          clickable ? "cursor-pointer hover:shadow-md transition-shadow" : ""
        }`}
        style={{ width: size + 16, height: size + 16 }}
        onClick={handleQRClick}
      >
        <canvas
          ref={canvasRef}
          className="rounded"
          style={{ width: size, height: size }}
        />
        {clickable && (
          <p className="text-xs text-gray-500 mt-1">Klik untuk zoom</p>
        )}
      </div>

      {/* QR Code Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                QR Code Tiket
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex justify-center mb-4">
              <div
                className="bg-white p-4 rounded-lg border border-gray-200 overflow-hidden"
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: "center",
                  transition: "transform 0.2s ease-in-out",
                }}
              >
                <canvas
                  ref={modalCanvasRef}
                  className="rounded"
                  style={{
                    width: size * 3,
                    height: size * 3,
                    display: "block",
                  }}
                />
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 mb-4">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.5}
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Zoom Out"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
                  />
                </svg>
              </button>

              <button
                onClick={handleResetZoom}
                className="px-4 py-3 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors text-sm font-medium"
              >
                Reset Zoom
              </button>

              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3}
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Zoom In"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">
                Kode Tiket: <span className="font-mono font-bold">{value}</span>
              </p>
              <p className="text-xs text-gray-500 mb-2">
                Gunakan aplikasi scanner QR code untuk memverifikasi tiket
              </p>
              <p className="text-xs text-blue-600 font-medium">
                Zoom Level: {zoomLevel}x
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QRCode;
