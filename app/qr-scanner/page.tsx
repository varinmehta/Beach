"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { QrCode, MapPin, Clock, CheckCircle, Camera, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function QRScanner() {
  const [isScanning, setIsScanning] = useState(false)
  const [scanResult, setScanResult] = useState<any>(null)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const handleScan = () => {
    setIsScanning(true)
    // Simulate QR code scanning
    setTimeout(() => {
      setScanResult({
        eventName: "Santa Monica Beach Cleanup",
        location: "Santa Monica State Beach",
        checkInTime: new Date().toLocaleTimeString(),
        coordinates: { lat: 34.0195, lng: -118.4912 },
        wavePoints: 100,
        multiplier: 2,
      })
      setIsScanning(false)
    }, 2000)
  }

  const resetScanner = () => {
    setScanResult(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Event Check-in</h1>
          </div>
          <div className="text-sm text-gray-600">{currentTime.toLocaleString()}</div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {!scanResult ? (
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <QrCode className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Scan QR Code</CardTitle>
                <CardDescription>
                  Scan the QR code at the event location to check in and start earning Wave Points
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* QR Scanner Viewport */}
                <div className="relative">
                  <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {isScanning ? (
                      <div className="text-center text-white">
                        <Camera className="w-12 h-12 mx-auto mb-4 animate-pulse" />
                        <p>Scanning QR Code...</p>
                        <div className="absolute inset-4 border-2 border-white rounded-lg animate-pulse"></div>
                      </div>
                    ) : (
                      <div className="text-center text-gray-400">
                        <QrCode className="w-12 h-12 mx-auto mb-4" />
                        <p>Position QR code within the frame</p>
                        <div className="absolute inset-4 border-2 border-gray-600 rounded-lg"></div>
                      </div>
                    )}
                  </div>
                </div>

                <Button
                  onClick={handleScan}
                  disabled={isScanning}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
                >
                  {isScanning ? "Scanning..." : "Start Scanning"}
                </Button>

                <div className="text-center text-sm text-gray-600">
                  <p>Make sure you're at the event location</p>
                  <p>GPS location will be verified automatically</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Check-in Successful!</CardTitle>
                <CardDescription>You've successfully checked in to the event</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-blue-900">{scanResult.eventName}</p>
                        <p className="text-sm text-blue-700">{scanResult.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gray-600" />
                      <div>
                        <p className="font-medium">Check-in Time</p>
                        <p className="text-sm text-gray-600">{scanResult.checkInTime}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div>
                      <p className="font-medium text-yellow-800">Wave Points Earned</p>
                      <p className="text-sm text-yellow-700">Base points + Shore Guardian bonus</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{scanResult.wavePoints} pts</Badge>
                        <Badge className="bg-yellow-500 text-white">{scanResult.multiplier}x</Badge>
                      </div>
                      <p className="text-sm font-bold text-yellow-800">
                        Total: {scanResult.wavePoints * scanResult.multiplier} points
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Next Steps:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Attend the safety briefing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Collect your equipment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Join your assigned cleanup area</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Don't forget to check out when leaving!</span>
                    </li>
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <Button onClick={resetScanner} variant="outline" className="flex-1">
                    Scan Another
                  </Button>
                  <Link href="/dashboard" className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                      Go to Dashboard
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
