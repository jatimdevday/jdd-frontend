"use client";

import React, { useState, useEffect } from "react";
import { QRScanResult, AttendeeTicket } from "@/types/admin";
import adminService from "@/services/admin.service";
import QRScanner from "@/components/qr-scanner";
import ScanResultModal from "@/components/scan-result-modal";
import { Button } from "@/components/ui/button";
import {
  Camera,
  CameraOff,
  Users,
  UserCheck,
  UserX,
  TrendingUp,
  RefreshCw,
  History,
  BarChart3,
} from "lucide-react";

const AdminScanPage = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<QRScanResult | null>(null);
  const [showResultModal, setShowResultModal] = useState(false);
  const [lastScannedData, setLastScannedData] = useState<string>("");
  const [stats, setStats] = useState({
    total: 0,
    attended: 0,
    remaining: 0,
    cancelled: 0,
    attendanceRate: 0,
  });
  const [recentScans, setRecentScans] = useState<AttendeeTicket[]>([]);
  const [isLoadingStats, setIsLoadingStats] = useState(false);
  const [currentEventId] = useState("EVT-001"); // Mock event ID

  // Load initial stats and recent scans
  useEffect(() => {
    loadStats();
    loadRecentScans();
  }, []);

  const loadStats = async () => {
    setIsLoadingStats(true);
    try {
      const statsData = await adminService.getAttendeeStats(currentEventId);
      setStats(statsData);
    } catch (error) {
      console.error("Error loading stats:", error);
    } finally {
      setIsLoadingStats(false);
    }
  };

  const loadRecentScans = async () => {
    try {
      const scans = await adminService.getRecentScans(currentEventId, 5);
      setRecentScans(scans);
    } catch (error) {
      console.error("Error loading recent scans:", error);
    }
  };

  const handleStartScanning = () => {
    setIsScanning(true);
    setLastScannedData("");
  };

  const handleStopScanning = () => {
    setIsScanning(false);
  };

  const handleScan = async (data: string) => {
    // Prevent duplicate scans
    if (data === lastScannedData) return;

    setLastScannedData(data);
    setIsScanning(false);

    try {
      const result = await adminService.validateQRCode(data, currentEventId);
      setScanResult(result);
      setShowResultModal(true);

      // Refresh stats and recent scans if successful
      if (result.success) {
        await loadStats();
        await loadRecentScans();
      }
    } catch (error) {
      console.error("Error validating QR code:", error);
      setScanResult({
        success: false,
        error: "Terjadi kesalahan saat memvalidasi QR code",
        errorType: "invalid_qr",
      });
      setShowResultModal(true);
    }
  };

  const handleScanError = (error: string) => {
    console.error("Scanner error:", error);
    setScanResult({
      success: false,
      error,
      errorType: "invalid_qr",
    });
    setShowResultModal(true);
  };

  const handleCloseModal = () => {
    setShowResultModal(false);
    setScanResult(null);
  };

  const handleContinueScanning = () => {
    setShowResultModal(false);
    setScanResult(null);
    setLastScannedData("");
    setIsScanning(true);
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "short",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin QR Scanner
          </h1>
          <p className="text-gray-600">
            Scan QR code tiket peserta untuk melakukan check-in
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Tiket</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.total}
                </p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Sudah Hadir</p>
                <p className="text-2xl font-bold text-green-600">
                  {stats.attended}
                </p>
              </div>
              <UserCheck className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Belum Hadir</p>
                <p className="text-2xl font-bold text-orange-600">
                  {stats.remaining}
                </p>
              </div>
              <UserX className="w-8 h-8 text-orange-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Tingkat Kehadiran
                </p>
                <p className="text-2xl font-bold text-purple-600">
                  {stats.attendanceRate}%
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Scanner Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                QR Code Scanner
              </h2>
              <Button
                onClick={isLoadingStats ? undefined : loadStats}
                variant="outline"
                size="sm"
                disabled={isLoadingStats}
              >
                <RefreshCw
                  className={`w-4 h-4 mr-2 ${
                    isLoadingStats ? "animate-spin" : ""
                  }`}
                />
                Refresh
              </Button>
            </div>

            {/* Scanner Container */}
            <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
              {isScanning ? (
                <QRScanner
                  onScan={handleScan}
                  onError={handleScanError}
                  isActive={isScanning}
                  className="w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">
                      Klik tombol di bawah untuk mulai memindai QR code
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Scanner Controls */}
            <div className="flex space-x-3">
              {!isScanning ? (
                <Button onClick={handleStartScanning} className="flex-1">
                  <Camera className="w-4 h-4 mr-2" />
                  Mulai Scan
                </Button>
              ) : (
                <Button
                  onClick={handleStopScanning}
                  variant="destructive"
                  className="flex-1"
                >
                  <CameraOff className="w-4 h-4 mr-2" />
                  Stop Scan
                </Button>
              )}
            </div>
          </div>

          {/* Recent Scans Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Check-in Terbaru
              </h2>
              <History className="w-5 h-5 text-gray-400" />
            </div>

            <div className="space-y-3">
              {recentScans.length > 0 ? (
                recentScans.map((scan, index) => (
                  <div
                    key={scan.id}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <UserCheck className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {scan.holderName}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {scan.ticketCode} • {scan.ticketTypeName}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-xs text-gray-500">
                      {scan.attendedAt && formatDateTime(scan.attendedAt)}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <BarChart3 className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">Belum ada check-in hari ini</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scan Result Modal */}
        <ScanResultModal
          result={scanResult}
          isOpen={showResultModal}
          onClose={handleCloseModal}
          onContinueScanning={handleContinueScanning}
        />
      </div>
    </div>
  );
};

export default AdminScanPage;
