"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Trash2, Save, ArrowLeft, Scale, Camera } from "lucide-react"
import Link from "next/link"

export default function WasteLogging() {
  const [wasteEntries, setWasteEntries] = useState([
    { id: 1, type: "plastic-bottles", weight: 2.5, count: 45, notes: "" },
    { id: 2, type: "cigarette-butts", weight: 0.8, count: 120, notes: "" },
  ])

  const wasteTypes = [
    { value: "plastic-bottles", label: "Plastic Bottles", category: "Plastic" },
    { value: "plastic-bags", label: "Plastic Bags", category: "Plastic" },
    { value: "food-wrappers", label: "Food Wrappers", category: "Plastic" },
    { value: "cigarette-butts", label: "Cigarette Butts", category: "Other" },
    { value: "glass-bottles", label: "Glass Bottles", category: "Glass" },
    { value: "aluminum-cans", label: "Aluminum Cans", category: "Metal" },
    { value: "paper", label: "Paper/Cardboard", category: "Paper" },
    { value: "fishing-gear", label: "Fishing Gear", category: "Other" },
    { value: "clothing", label: "Clothing/Textiles", category: "Textile" },
    { value: "electronics", label: "Electronics", category: "Electronic" },
  ]

  const addWasteEntry = () => {
    const newEntry = {
      id: Date.now(),
      type: "",
      weight: 0,
      count: 0,
      notes: "",
    }
    setWasteEntries([...wasteEntries, newEntry])
  }

  const removeWasteEntry = (id: number) => {
    setWasteEntries(wasteEntries.filter((entry) => entry.id !== id))
  }

  const updateWasteEntry = (id: number, field: string, value: any) => {
    setWasteEntries(wasteEntries.map((entry) => (entry.id === id ? { ...entry, [field]: value } : entry)))
  }

  const getTotalWeight = () => {
    return wasteEntries.reduce((total, entry) => total + (entry.weight || 0), 0)
  }

  const getTotalCount = () => {
    return wasteEntries.reduce((total, entry) => total + (entry.count || 0), 0)
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
            <h1 className="text-2xl font-bold text-gray-900">Waste Data Logging</h1>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="secondary">Santa Monica Beach Cleanup</Badge>
            <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
              <Save className="w-4 h-4 mr-2" />
              Save Data
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="logging" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="logging">Data Entry</TabsTrigger>
            <TabsTrigger value="summary">Summary</TabsTrigger>
          </TabsList>

          <TabsContent value="logging" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Weight</CardTitle>
                  <Scale className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{getTotalWeight().toFixed(1)} kg</div>
                  <p className="text-xs text-muted-foreground">{wasteEntries.length} waste types</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Items</CardTitle>
                  <Trash2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{getTotalCount()}</div>
                  <p className="text-xs text-muted-foreground">Individual pieces</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Data Quality</CardTitle>
                  <Badge variant="secondary">Good</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">85%</div>
                  <p className="text-xs text-muted-foreground">Completion rate</p>
                </CardContent>
              </Card>
            </div>

            {/* Waste Entry Form */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Waste Data Entry</CardTitle>
                  <CardDescription>Log waste collected by type and quantity</CardDescription>
                </div>
                <Button onClick={addWasteEntry} size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Entry
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {wasteEntries.map((entry, index) => (
                  <div key={entry.id} className="p-4 border rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Entry #{index + 1}</h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeWasteEntry(entry.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="space-y-2">
                        <Label>Waste Type</Label>
                        <Select value={entry.type} onValueChange={(value) => updateWasteEntry(entry.id, "type", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            {wasteTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Weight (kg)</Label>
                        <Input
                          type="number"
                          step="0.1"
                          value={entry.weight || ""}
                          onChange={(e) => updateWasteEntry(entry.id, "weight", Number.parseFloat(e.target.value) || 0)}
                          placeholder="0.0"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Count (pieces)</Label>
                        <Input
                          type="number"
                          value={entry.count || ""}
                          onChange={(e) => updateWasteEntry(entry.id, "count", Number.parseInt(e.target.value) || 0)}
                          placeholder="0"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Photo</Label>
                        <Button variant="outline" size="sm" className="w-full">
                          <Camera className="w-4 h-4 mr-2" />
                          Take Photo
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Notes (optional)</Label>
                      <Textarea
                        value={entry.notes}
                        onChange={(e) => updateWasteEntry(entry.id, "notes", e.target.value)}
                        placeholder="Additional observations, condition, location details..."
                        rows={2}
                      />
                    </div>
                  </div>
                ))}

                {wasteEntries.length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                    <Trash2 className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>No waste entries yet</p>
                    <p className="text-sm">Click "Add Entry" to start logging waste data</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="summary" className="space-y-6">
            {/* Summary Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Waste by Category</CardTitle>
                  <CardDescription>Breakdown by material type</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Plastic</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">2.5 kg</span>
                        <Badge variant="secondary">76%</Badge>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "76%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Other</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">0.8 kg</span>
                        <Badge variant="secondary">24%</Badge>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-teal-600 h-2 rounded-full" style={{ width: "24%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Completeness</CardTitle>
                  <CardDescription>Quality of collected data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Weight Data</span>
                      <span className="text-green-600">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Count Data</span>
                      <span className="text-green-600">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Photos</span>
                      <span className="text-yellow-600">0%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "0%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Notes</span>
                      <span className="text-yellow-600">0%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "0%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Event Summary Report</CardTitle>
                <CardDescription>Complete waste collection summary for this event</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{getTotalWeight().toFixed(1)} kg</div>
                    <p className="text-sm text-gray-600">Total Weight</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600">{getTotalCount()}</div>
                    <p className="text-sm text-gray-600">Total Items</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{wasteEntries.length}</div>
                    <p className="text-sm text-gray-600">Waste Types</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Detailed Breakdown</h4>
                  {wasteEntries.map((entry, index) => {
                    const wasteType = wasteTypes.find((type) => type.value === entry.type)
                    return (
                      <div key={entry.id} className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{wasteType?.label || "Unknown Type"}</p>
                          <p className="text-sm text-gray-600">{wasteType?.category}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{entry.weight} kg</p>
                          <p className="text-sm text-gray-600">{entry.count} pieces</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
