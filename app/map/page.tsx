"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, TrendingUp, Calendar, Filter, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ImpactMap() {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [selectedTimeframe, setSelectedTimeframe] = useState("year")

  const beachData = [
    {
      id: 1,
      name: "Versova Beach",
      coordinates: { lat: 30.0195, lng: -118.4912 },
      totalWaste: 2400,
      events: 12,
      lastCleaned: "2024-12-20",
      pollutionLevel: "medium",
      volunteers: 340,
    },
    {
      id: 1.6,
      name: "Juhu Beach",
      coordinates: { lat: 30.0195, lng: -118.4912 },
      totalWaste: 1800,
      events: 8,
      lastCleaned: "2024-12-15",
      pollutionLevel: "low",
      volunteers: 220,
    },
    {
      id: 4,
      name: "Girgaon Chowpatty",
      coordinates: { lat: 30.0195, lng: -118.4912 },
      totalWaste: 3200,
      events: 15,
      lastCleaned: "2024-12-22",
      pollutionLevel: "high",
      volunteers: 450,
    },
  ]

  const wasteTypes = [
    { type: "Plastic Bottles", amount: 3200, percentage: 35 },
    { type: "Cigarette Butts", amount: 2800, percentage: 31 },
    { type: "Food Wrappers", amount: 1500, percentage: 16 },
    { type: "Plastic Bags", amount: 900, percentage: 10 },
    { type: "Other", amount: 700, percentage: 8 },
  ]

  const getPollutionColor = (level: string) => {
    switch (level) {
      case "high":
        return "bg-red-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
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
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Impact Map</h1>
          </div>
          <div className="flex items-center space-x-3">
            <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="map" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="map">Map View</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="waste-types">Waste Types</TabsTrigger>
          </TabsList>

          <TabsContent value="map" className="space-y-6">
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Map */}
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Beach Cleanup Impact Map
                  </CardTitle>
                  <CardDescription>Interactive map showing cleaned beaches and pollution hotspots</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Simulated Map */}
                  <div
                    className="aspect-[4/3] bg-cover bg-center rounded-lg relative overflow-hidden"
                    style={{ backgroundImage: "url('/Mumbai-map.png')" }}
                  >
                    {/* Beach Markers */}
                    {beachData.map((beach) => (
                      <div
                        key={beach.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                        style={{
                          left: `${38.5}%`,
                          top: `${30 + beach.id * 15}%`,
                        }}
                      >
                        <div
                          className={`w-4 h-4 rounded-full ${getPollutionColor(beach.pollutionLevel)} border-2 border-white shadow-lg group-hover:scale-125 transition-transform`}
                        ></div>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-white p-3 rounded-lg shadow-lg border min-w-48">
                            <h4 className="font-semibold text-sm">{beach.name}</h4>
                            <p className="text-xs text-gray-600">Waste collected: {beach.totalWaste}kg</p>
                            <p className="text-xs text-gray-600">Events: {beach.events}</p>
                            <p className="text-xs text-gray-600">Volunteers: {beach.volunteers}</p>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Legend */}
                    <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg">
                      <h4 className="font-semibold text-sm mb-2">Pollution Level</h4>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-xs">Low</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="text-xs">Medium</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="text-xs">High</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Beach List */}
              <Card>
                <CardHeader>
                  <CardTitle>Beach Status</CardTitle>
                  <CardDescription>Recent cleanup activities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {beachData.map((beach) => (
                    <div key={beach.id} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-sm">{beach.name}</h4>
                        <div className={`w-3 h-3 rounded-full ${getPollutionColor(beach.pollutionLevel)}`}></div>
                      </div>
                      <div className="space-y-1 text-xs text-gray-600">
                        <p>Waste: {beach.totalWaste}kg</p>
                        <p>Events: {beach.events}</p>
                        <p>Last cleaned: {new Date(beach.lastCleaned).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Waste Collected</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">9.1 tons</div>
                  <p className="text-xs text-muted-foreground">+15% from last period</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Beaches Cleaned</CardTitle>
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">41</div>
                  <p className="text-xs text-muted-foreground">+8 new locations</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">127</div>
                  <p className="text-xs text-muted-foreground">This year</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. per Event</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">71.7kg</div>
                  <p className="text-xs text-muted-foreground">Per cleanup event</p>
                </CardContent>
              </Card>
            </div>

            {/* Charts would go here */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Waste Collection</CardTitle>
                  <CardDescription>Waste collected over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Chart visualization would be rendered here</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Beach Impact Comparison</CardTitle>
                  <CardDescription>Waste collected by location</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Chart visualization would be rendered here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="waste-types" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Waste Type Distribution</CardTitle>
                  <CardDescription>Breakdown of collected waste by category</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {wasteTypes.map((waste, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{waste.type}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">{waste.amount}kg</span>
                          <Badge variant="secondary">{waste.percentage}%</Badge>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${waste.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Environmental Impact</CardTitle>
                  <CardDescription>Estimated environmental benefits</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-700">2,847</div>
                    <p className="text-sm text-green-600">Marine animals protected</p>
                  </div>

                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700">15.2 km</div>
                    <p className="text-sm text-blue-600">Coastline cleaned</p>
                  </div>

                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-700">4.1 tons</div>
                    <p className="text-sm text-purple-600">CO₂ emissions prevented</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
