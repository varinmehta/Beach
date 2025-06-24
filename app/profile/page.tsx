"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Award,
  MapPin,
  Calendar,
  TrendingUp,
  Star,
  Gift,
  BadgeIcon as Certificate,
  ArrowLeft,
  Download,
} from "lucide-react"
import Link from "next/link"

export default function VolunteerProfile() {
  const beachesCleaned = [
    { name: "Santa Monica Beach", cleanups: 8, lastVisit: "2024-12-20" },
    { name: "Venice Beach", cleanups: 5, lastVisit: "2024-12-15" },
    { name: "Malibu Beach", cleanups: 3, lastVisit: "2024-12-08" },
    { name: "Manhattan Beach", cleanups: 2, lastVisit: "2024-11-25" },
  ]

  const achievements = [
    { title: "Shore Guardian", description: "Monthly consistency achieved", earned: "2024-12-01", active: true },
    { title: "First Cleanup", description: "Completed your first beach cleanup", earned: "2024-01-15", active: false },
    { title: "Team Player", description: "Participated in 10+ group cleanups", earned: "2024-06-10", active: false },
    { title: "Waste Warrior", description: "Collected 100+ kg of waste", earned: "2024-09-22", active: false },
  ]

  const rewards = [
    { name: "Eco Water Bottle", cost: 500, available: true },
    { name: "Reusable Tote Bag", cost: 800, available: true },
    { name: "Volunteer Certificate", cost: 1000, available: true },
    { name: "CleanWave T-Shirt", cost: 1200, available: false },
    { name: "Eco-Friendly Notebook", cost: 600, available: true },
  ]

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
            <h1 className="text-2xl font-bold text-gray-900">Volunteer Profile</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">JD</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
                  <p className="text-gray-600">Volunteer since January 2024</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <Badge className="bg-blue-100 text-blue-700">
                      <Award className="w-3 h-3 mr-1" />
                      Shore Guardian
                    </Badge>
                    <Badge variant="secondary">2,450 Wave Points</Badge>
                    <Badge variant="outline">18 Events</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download Certificate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="impact">Impact Map</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Wave Points</CardTitle>
                    <Award className="h-4 w-4 text-yellow-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-600">2,450</div>
                    <p className="text-xs text-muted-foreground">+150 this month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Events Attended</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">18</div>
                    <p className="text-xs text-muted-foreground">This year</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Volunteer Hours</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">54</div>
                    <p className="text-xs text-muted-foreground">127 total hours</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Beaches Cleaned</CardTitle>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">Unique locations</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Progress to Next Level</CardTitle>
                    <CardDescription>Ocean Champion - 550 more points needed</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Current: Shore Guardian</span>
                        <span>2,450 / 3,000 points</span>
                      </div>
                      <Progress value={82} className="h-3" />
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium">Benefits of Ocean Champion:</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li className="flex items-center space-x-2">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span>3x Wave Points multiplier</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span>Exclusive rewards access</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span>Priority event registration</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span>Leadership opportunities</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest cleanup contributions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">Santa Monica Beach</p>
                          <p className="text-xs text-gray-600">Dec 20, 2024 • 3 hours</p>
                        </div>
                        <Badge className="bg-yellow-500 text-white">+200 pts</Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-teal-50 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">Venice Beach</p>
                          <p className="text-xs text-gray-600">Dec 15, 2024 • 4 hours</p>
                        </div>
                        <Badge className="bg-yellow-500 text-white">+200 pts</Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">Malibu Beach</p>
                          <p className="text-xs text-gray-600">Dec 8, 2024 • 2.5 hours</p>
                        </div>
                        <Badge className="bg-yellow-500 text-white">+200 pts</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="impact" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Your Beach Impact Map
                  </CardTitle>
                  <CardDescription>Beaches you've helped clean in the past year</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Simulated Impact Map */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg relative overflow-hidden mb-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-300/20 to-transparent"></div>

                    {/* Beach markers with your contributions */}
                    {beachesCleaned.map((beach, index) => (
                      <div
                        key={index}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                        style={{
                          left: `${20 + index * 20}%`,
                          top: `${30 + index * 15}%`,
                        }}
                      >
                        <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg group-hover:scale-125 transition-transform flex items-center justify-center">
                          <span className="text-xs font-bold text-white">{beach.cleanups}</span>
                        </div>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-white p-3 rounded-lg shadow-lg border min-w-48">
                            <h4 className="font-semibold text-sm">{beach.name}</h4>
                            <p className="text-xs text-gray-600">Cleanups: {beach.cleanups}</p>
                            <p className="text-xs text-gray-600">
                              Last visit: {new Date(beach.lastVisit).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Your Beach Contributions</h4>
                      <div className="space-y-3">
                        {beachesCleaned.map((beach, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <p className="font-medium text-sm">{beach.name}</p>
                              <p className="text-xs text-gray-600">
                                Last visit: {new Date(beach.lastVisit).toLocaleDateString()}
                              </p>
                            </div>
                            <Badge variant="secondary">{beach.cleanups} cleanups</Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Impact Summary</h4>
                      <div className="space-y-4">
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-700">156 kg</div>
                          <p className="text-sm text-green-600">Total waste collected</p>
                        </div>

                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-700">2.8 km</div>
                          <p className="text-sm text-blue-600">Coastline cleaned</p>
                        </div>

                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-700">340</div>
                          <p className="text-sm text-purple-600">Marine animals helped</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className={achievement.active ? "border-yellow-200 bg-yellow-50" : ""}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center">
                          <Award
                            className={`w-5 h-5 mr-2 ${achievement.active ? "text-yellow-600" : "text-gray-400"}`}
                          />
                          {achievement.title}
                        </CardTitle>
                        {achievement.active && <Badge className="bg-yellow-500 text-white">Active</Badge>}
                      </div>
                      <CardDescription>{achievement.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Earned: {new Date(achievement.earned).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Next Achievements</CardTitle>
                  <CardDescription>Goals you're working towards</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Ocean Champion</p>
                        <p className="text-sm text-gray-600">Reach 3,000 Wave Points</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">2,450 / 3,000</p>
                        <Progress value={82} className="w-24 h-2 mt-1" />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Beach Explorer</p>
                        <p className="text-sm text-gray-600">Clean 15 different beaches</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">12 / 15</p>
                        <Progress value={80} className="w-24 h-2 mt-1" />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Consistency King</p>
                        <p className="text-sm text-gray-600">Attend events for 6 consecutive months</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">4 / 6</p>
                        <Progress value={67} className="w-24 h-2 mt-1" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rewards" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Gift className="w-5 h-5 mr-2" />
                      Available Rewards
                    </CardTitle>
                    <CardDescription>Redeem your Wave Points for eco-friendly rewards</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {rewards
                      .filter((reward) => reward.available)
                      .map((reward, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{reward.name}</p>
                            <p className="text-sm text-gray-600">{reward.cost} Wave Points</p>
                          </div>
                          <Button
                            size="sm"
                            disabled={2450 < reward.cost}
                            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
                          >
                            {2450 >= reward.cost ? "Redeem" : "Need More Points"}
                          </Button>
                        </div>
                      ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Certificate className="w-5 h-5 mr-2" />
                      Certificates & Skills
                    </CardTitle>
                    <CardDescription>Professional development opportunities</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-green-800">Volunteer Certificate</p>
                            <p className="text-sm text-green-600">54+ hours completed</p>
                          </div>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Environmental Leadership</p>
                            <p className="text-sm text-gray-600">Available at Ocean Champion level</p>
                          </div>
                          <Badge variant="outline">Locked</Badge>
                        </div>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Marine Conservation</p>
                            <p className="text-sm text-gray-600">Complete 25 beach cleanups</p>
                          </div>
                          <Badge variant="outline">18/25</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-medium mb-2">Skill Development</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Connect with partner organizations for professional growth opportunities.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Explore Programs
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
