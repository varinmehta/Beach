import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Calendar,
  Users,
  MapPin,
  Award,
  TrendingUp,
  AlertTriangle,
  Plus,
  QrCode,
  MessageCircle,
  Recycle,
} from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <Recycle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              CleanWave
            </span>
          </div>
          <nav className="flex items-center space-x-6">
            <Link href="/dashboard" className="text-blue-600 font-medium">
              Dashboard
            </Link>
            <Link href="/events" className="text-gray-600 hover:text-blue-600">
              Events
            </Link>
            <Link href="/map" className="text-gray-600 hover:text-blue-600">
              Impact Map
            </Link>
            <Link href="/inventory" className="text-gray-600 hover:text-blue-600">
              Inventory
            </Link>
            <Link href="/volunteers" className="text-gray-600 hover:text-blue-600">
              Volunteers
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              AI Assistant
            </Button>
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-blue-600">JD</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Here's what's happening with your beach cleanup events</p>
        </div>

        <Tabs defaultValue="organizer" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="organizer">Organizer View</TabsTrigger>
            <TabsTrigger value="volunteer">Volunteer View</TabsTrigger>
          </TabsList>

          <TabsContent value="organizer" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Events</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Volunteers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,247</div>
                  <p className="text-xs text-muted-foreground">+180 this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Waste Collected</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.4 tons</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Equipment Alerts</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-500">3</div>
                  <p className="text-xs text-muted-foreground">Low stock items</p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Upcoming Events */}
              <Card className="lg:col-span-2">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Manage your scheduled beach cleanups</CardDescription>
                  </div>
                  <Link href="/events/create">
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      New Event
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Santa Monica Beach Cleanup</h3>
                        <p className="text-sm text-gray-600">Dec 28, 2024 • 9:00 AM</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary">45 volunteers</Badge>
                          <Badge variant="outline">Equipment ready</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <QrCode className="w-4 h-4 mr-2" />
                        QR Code
                      </Button>
                      <Button size="sm">Manage</Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Malibu Coastal Cleanup</h3>
                        <p className="text-sm text-gray-600">Jan 5, 2025 • 8:00 AM</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary">23 volunteers</Badge>
                          <Badge variant="destructive">Low stock alert</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <QrCode className="w-4 h-4 mr-2" />
                        QR Code
                      </Button>
                      <Button size="sm">Manage</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Equipment Status */}
              <Card>
                <CardHeader>
                  <CardTitle>Equipment Status</CardTitle>
                  <CardDescription>Current inventory levels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Trash Bags</span>
                      <span>850/1000</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Gloves</span>
                      <span className="text-orange-600">120/500</span>
                    </div>
                    <Progress value={24} className="h-2 bg-orange-100" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Grabbers</span>
                      <span className="text-red-600">15/100</span>
                    </div>
                    <Progress value={15} className="h-2 bg-red-100" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Data Sheets</span>
                      <span>200/300</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>

                  <Link href="/inventory">
                    <Button variant="outline" className="w-full mt-4">
                      Manage Inventory
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="volunteer" className="space-y-6">
            {/* Volunteer Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <CardTitle className="text-sm font-medium">Beaches Cleaned</CardTitle>
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">Unique locations</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Current Title</CardTitle>
                  <Award className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold text-blue-600">Shore Guardian</div>
                  <p className="text-xs text-muted-foreground">2x points active</p>
                </CardContent>
              </Card>
            </div>

            {/* Volunteer Content */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Available Events */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Available Events</CardTitle>
                  <CardDescription>Join upcoming beach cleanup events</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Santa Monica Beach Cleanup</h3>
                        <p className="text-sm text-gray-600">Dec 28, 2024 • 9:00 AM</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary">+100 Wave Points</Badge>
                          <Badge variant="outline">2x multiplier</Badge>
                        </div>
                      </div>
                    </div>
                    <Button size="sm">Join Event</Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Malibu Coastal Cleanup</h3>
                        <p className="text-sm text-gray-600">Jan 5, 2025 • 8:00 AM</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary">+100 Wave Points</Badge>
                          <Badge variant="outline">2x multiplier</Badge>
                        </div>
                      </div>
                    </div>
                    <Button size="sm">Join Event</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Rewards & Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Rewards & Progress</CardTitle>
                  <CardDescription>Your achievements and rewards</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg">
                    <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-blue-900">Shore Guardian</h3>
                    <p className="text-sm text-blue-700">Monthly consistency achieved!</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Next Title Progress</span>
                      <span className="text-sm text-gray-600">7/10 events</span>
                    </div>
                    <Progress value={70} className="h-2" />
                    <p className="text-xs text-gray-600">3 more events to Ocean Champion</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Available Rewards</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-sm">Eco Water Bottle</span>
                        <Badge variant="outline">500 pts</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-sm">Reusable Tote Bag</span>
                        <Badge variant="outline">800 pts</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-sm">Volunteer Certificate</span>
                        <Badge variant="outline">1000 pts</Badge>
                      </div>
                    </div>
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
