"use client";

import React, { useRef, useEffect, useState } from "react";
import { BrowserMultiFormatReader, NotFoundException } from "@zxing/library";
import { Button } from "./ui/button";
import { Camera, CameraOff, RotateCcw } from "lucide-react";

interface QRScannerProps {
  onScan: (data: string) => void;
  onError?: (error: string) => void;
  isActive: boolean;
  className?: string;
}

const QRScanner: React.FC<QRScannerProps> = ({
  onScan,
  onError,
  isActive,
  className = "",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const codeReader = useRef<BrowserMultiFormatReader | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [availableCameras, setAvailableCameras] = useState<MediaDeviceInfo[]>(
    []
  );
  const [selectedCameraId, setSelectedCameraId] = useState<string>("");

  useEffect(() => {
    if (isActive) {
      initializeScanner();
    } else {
      stopScanner();
    }

    return () => {
      stopScanner();
    };
  }, [isActive]);

  const initializeScanner = async () => {
    try {
      // Request camera permission
      await navigator.mediaDevices.getUserMedia({ video: true });
      setHasPermission(true);

      // Get available cameras
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(
        (device) => device.kind === "videoinput"
      );
      setAvailableCameras(videoDevices);

      // Use back camera if available, otherwise use first available camera
      const backCamera = videoDevices.find(
        (device) =>
          device.label.toLowerCase().includes("back") ||
          device.label.toLowerCase().includes("rear") ||
          device.label.toLowerCase().includes("environment")
      );
      const cameraId = backCamera?.deviceId || videoDevices[0]?.deviceId;
      setSelectedCameraId(cameraId);

      if (cameraId) {
        startScanning(cameraId);
      }
    } catch (error) {
      console.error("Error initializing scanner:", error);
      setHasPermission(false);
      onError?.(
        "Tidak dapat mengakses kamera. Pastikan izin kamera telah diberikan."
      );
    }
  };

  const startScanning = async (cameraId: string) => {
    if (!videoRef.current) return;

    try {
      codeReader.current = new BrowserMultiFormatReader();
      setIsScanning(true);

      const constraints = {
        deviceId: cameraId,
        facingMode: { ideal: "environment" }, // Prefer back camera
        width: { ideal: 1280 },
        height: { ideal: 720 },
      };

      await codeReader.current.decodeFromConstraints(
        constraints,
        videoRef.current,
        (result, error) => {
          if (result) {
            const scannedText = result.getText();
            onScan(scannedText);
          }

          if (error && !(error instanceof NotFoundException)) {
            console.error("Scanning error:", error);
          }
        }
      );
    } catch (error) {
      console.error("Error starting scanner:", error);
      setIsScanning(false);
      onError?.("Gagal memulai pemindaian QR code.");
    }
  };

  const stopScanner = () => {
    if (codeReader.current) {
      codeReader.current.reset();
      codeReader.current = null;
    }
    setIsScanning(false);
  };

  const switchCamera = () => {
    if (availableCameras.length > 1) {
      const currentIndex = availableCameras.findIndex(
        (camera) => camera.deviceId === selectedCameraId
      );
      const nextIndex = (currentIndex + 1) % availableCameras.length;
      const nextCameraId = availableCameras[nextIndex].deviceId;

      stopScanner();
      setSelectedCameraId(nextCameraId);
      setTimeout(() => startScanning(nextCameraId), 100);
    }
  };

  if (hasPermission === false) {
    return (
      <div
        className={`flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg ${className}`}
      >
        <CameraOff className="w-16 h-16 text-gray-400 mb-4" />
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Izin Kamera Diperlukan
        </h3>
        <p className="text-gray-600 text-center mb-4">
          Untuk memindai QR code, aplikasi memerlukan akses ke kamera perangkat
          Anda.
        </p>
        <Button onClick={initializeScanner} className="mt-2">
          <Camera className="w-4 h-4 mr-2" />
          Berikan Izin Kamera
        </Button>
      </div>
    );
  }

  if (hasPermission === null) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Meminta izin kamera...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-lg"
        autoPlay
        muted
        playsInline
      />

      {/* Scanning overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          {/* Scanning frame */}
          <div className="w-64 h-64 border-2 border-white rounded-lg relative">
            {/* Corner indicators */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-blue-500 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-blue-500 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-blue-500 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-blue-500 rounded-br-lg"></div>

            {/* Scanning line animation */}
            {isScanning && (
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 animate-pulse"></div>
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {availableCameras.length > 1 && (
          <Button
            variant="secondary"
            size="sm"
            onClick={switchCamera}
            className="bg-black bg-opacity-50 text-white hover:bg-opacity-70"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Status indicator */}
      <div className="absolute top-4 left-4">
        <div
          className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
            isScanning ? "bg-green-500 text-white" : "bg-gray-500 text-white"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              isScanning ? "bg-white animate-pulse" : "bg-gray-300"
            }`}
          ></div>
          <span>{isScanning ? "Memindai..." : "Tidak Aktif"}</span>
        </div>
      </div>
    </div>
  );
};

export default QRScanner;
