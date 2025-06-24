"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, Package, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CreateEvent() {
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([])

  const equipment = [
    { id: "trash-bags", name: "Trash Bags", available: 850, needed: 100 },
    { id: "gloves", name: "Disposable Gloves", available: 120, needed: 50 },
    { id: "grabbers", name: "Litter Grabbers", available: 15, needed: 20 },
    { id: "data-sheets", name: "Data Collection Sheets", available: 200, needed: 30 },
    { id: "first-aid", name: "First Aid Kit", available: 5, needed: 2 },
    { id: "scales", name: "Digital Scales", available: 3, needed: 1 },
  ]

  const toggleEquipment = (equipmentId: string) => {
    setSelectedEquipment((prev) =>
      prev.includes(equipmentId) ? prev.filter((id) => id !== equipmentId) : [...prev, equipmentId],
    )
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
            <h1 className="text-2xl font-bold text-gray-900">Create New Event</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <form className="space-y-8">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Event Details
                </CardTitle>
                <CardDescription>Basic information about your beach cleanup event</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="event-name">Event Name</Label>
                    <Input id="event-name" placeholder="e.g., Santa Monica Beach Cleanup" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-type">Event Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beach-cleanup">Beach Cleanup</SelectItem>
                        <SelectItem value="coastal-restoration">Coastal Restoration</SelectItem>
                        <SelectItem value="education-outreach">Education & Outreach</SelectItem>
                        <SelectItem value="data-collection">Data Collection</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your event, what volunteers can expect, and any special instructions..."
                    rows={4}
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="start-time">Start Time</Label>
                    <Input id="start-time" type="time" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration (hours)</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">2 hours</SelectItem>
                        <SelectItem value="3">3 hours</SelectItem>
                        <SelectItem value="4">4 hours</SelectItem>
                        <SelectItem value="6">6 hours</SelectItem>
                        <SelectItem value="8">Full day (8 hours)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Location
                </CardTitle>
                <CardDescription>Where will the cleanup take place?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="beach-name">Beach/Location Name</Label>
                    <Input id="beach-name" placeholder="e.g., Santa Monica State Beach" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="meeting-point">Meeting Point</Label>
                    <Input id="meeting-point" placeholder="e.g., Pier parking lot, Section A" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Full Address</Label>
                  <Input id="address" placeholder="Street address, city, state, zip code" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="coordinates">GPS Coordinates (optional)</Label>
                    <Input id="coordinates" placeholder="34.0195, -118.4912" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parking">Parking Information</Label>
                    <Input id="parking" placeholder="e.g., Free parking available, $5 fee" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Volunteer Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Volunteer Management
                </CardTitle>
                <CardDescription>Set capacity and requirements for volunteers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="max-volunteers">Maximum Volunteers</Label>
                    <Input id="max-volunteers" type="number" placeholder="50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="min-age">Minimum Age</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Age requirement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No age limit</SelectItem>
                        <SelectItem value="13">13+ (with guardian)</SelectItem>
                        <SelectItem value="16">16+ (independent)</SelectItem>
                        <SelectItem value="18">18+ (adults only)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="wave-points">Wave Points Reward</Label>
                    <Input id="wave-points" type="number" placeholder="100" />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Requirements & Recommendations</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="waiver" />
                      <Label htmlFor="waiver" className="text-sm">
                        Liability waiver required
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="closed-shoes" />
                      <Label htmlFor="closed-shoes" className="text-sm">
                        Closed-toe shoes required
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="sun-protection" />
                      <Label htmlFor="sun-protection" className="text-sm">
                        Sun protection recommended
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="water-bottle" />
                      <Label htmlFor="water-bottle" className="text-sm">
                        Bring water bottle
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Equipment Planning */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="w-5 h-5 mr-2" />
                  Equipment Planning
                </CardTitle>
                <CardDescription>Select and allocate equipment for this event</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  {equipment.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id={item.id}
                          checked={selectedEquipment.includes(item.id)}
                          onCheckedChange={() => toggleEquipment(item.id)}
                        />
                        <div>
                          <Label htmlFor={item.id} className="font-medium">
                            {item.name}
                          </Label>
                          <p className="text-sm text-gray-600">Available: {item.available}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {item.available < item.needed && <Badge variant="destructive">Low Stock</Badge>}
                        <div className="text-right">
                          <Label htmlFor={`${item.id}-quantity`} className="text-sm">
                            Needed:
                          </Label>
                          <Input
                            id={`${item.id}-quantity`}
                            type="number"
                            className="w-20 mt-1"
                            placeholder={item.needed.toString()}
                            disabled={!selectedEquipment.includes(item.id)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    <h4 className="font-medium text-yellow-800">Equipment Alerts</h4>
                  </div>
                  <p className="text-sm text-yellow-700 mt-1">
                    Some items are running low. Consider ordering more supplies or reducing event capacity.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
              <Link href="/dashboard">
                <Button variant="outline">Cancel</Button>
              </Link>
              <Button variant="outline">Save as Draft</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                Create Event
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
