"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send, Bot, User, ArrowLeft, HelpCircle, Calendar, Package } from "lucide-react"
import Link from "next/link"

interface Message {
  id: number
  type: "user" | "bot"
  content: string
  timestamp: Date
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      content:
        "Hi! I'm your CleanWave AI assistant. I can help you with equipment usage, upcoming events, FAQs, and more. What would you like to know?",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const quickQuestions = [
    "How do I use the litter grabbers?",
    "What events are coming up?",
    "How do I earn more Wave Points?",
    "What should I bring to an event?",
    "How do I check my volunteer hours?",
    "What's the weather forecast?",
  ]

  const sendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now(),
      type: "user",
      content,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(content)
      const botMessage: Message = {
        id: Date.now() + 1,
        type: "bot",
        content: botResponse,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)

    setInputMessage("")
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("grabber") || input.includes("equipment")) {
      return "🔧 **Using Litter Grabbers:**\n\n1. Extend the grabber to your comfortable reach\n2. Squeeze the handle to open the claws\n3. Position over the litter and release to grab\n4. Place items directly into your collection bag\n5. Clean the grabber tips if they get sticky\n\n**Safety tip:** Never use grabbers for sharp objects like glass or needles - use gloves and pick up carefully instead."
    }

    if (input.includes("event") || input.includes("upcoming")) {
      return "📅 **Upcoming Events:**\n\n• **Santa Monica Beach Cleanup**\n  Dec 28, 2024 at 9:00 AM\n  45 volunteers registered\n  +100 Wave Points (2x multiplier active!)\n\n• **Malibu Coastal Cleanup**\n  Jan 5, 2025 at 8:00 AM\n  23 volunteers registered\n  +100 Wave Points\n\nWould you like me to help you register for any of these events?"
    }

    if (input.includes("wave points") || input.includes("points")) {
      return "🏆 **Earning Wave Points:**\n\n• **Event Attendance:** 100 points per event\n• **Shore Guardian Bonus:** 2x multiplier when active\n• **Consistency Bonus:** Extra points for monthly participation\n• **Special Events:** Up to 200 points for large cleanups\n• **Referrals:** 50 points per new volunteer you bring\n\n**Your current status:** Shore Guardian (2x active)\n**Points needed for next level:** 550 more for Ocean Champion"
    }

    if (input.includes("bring") || input.includes("what to bring")) {
      return "🎒 **What to Bring:**\n\n**Required:**\n• Closed-toe shoes (no sandals!)\n• Reusable water bottle\n• Sun protection (hat, sunscreen)\n\n**Recommended:**\n• Light snack\n• Small towel\n• Phone for check-in QR code\n\n**We provide:**\n• Gloves and trash bags\n• Litter grabbers\n• Data collection sheets\n• First aid supplies\n\nDon't worry if you forget something - we usually have extras!"
    }

    if (input.includes("hours") || input.includes("volunteer hours")) {
      return "⏰ **Your Volunteer Hours:**\n\n• **This year:** 54 hours\n• **Total lifetime:** 127 hours\n• **Average per event:** 3.2 hours\n\n**Recent activity:**\n• Santa Monica Beach - Dec 20: 3 hours\n• Venice Beach - Dec 15: 4 hours\n• Malibu Beach - Dec 8: 2.5 hours\n\nYou can download an official volunteer certificate from your dashboard once you reach 50+ hours. You're already qualified!"
    }

    if (input.includes("weather")) {
      return "🌤️ **Weather Forecast:**\n\n**Next Event (Santa Monica - Dec 28):**\n• Temperature: 68-72°F\n• Conditions: Partly cloudy\n• Wind: 8-12 mph from west\n• UV Index: Moderate\n• Chance of rain: 10%\n\n**Perfect beach cleanup weather!** Remember to bring sun protection and stay hydrated."
    }

    // Default response
    return "I'd be happy to help! I can assist you with:\n\n• Equipment usage and safety tips\n• Upcoming event information\n• Wave Points and rewards system\n• What to bring to events\n• Volunteer hours tracking\n• Weather forecasts\n• General cleanup guidelines\n\nJust ask me anything, or click one of the quick questions below!"
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      sendMessage(inputMessage.trim())
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
            <h1 className="text-2xl font-bold text-gray-900">AI Assistant</h1>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Online
          </Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Chat Interface */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat with AI Assistant
                </CardTitle>
                <CardDescription>Get instant help with equipment, events, and cleanup guidelines</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Messages */}
                <ScrollArea className="h-96 w-full border rounded-lg p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`flex items-start space-x-2 max-w-[80%] ${message.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${message.type === "user" ? "bg-blue-100" : "bg-gray-100"}`}
                          >
                            {message.type === "user" ? (
                              <User className="w-4 h-4 text-blue-600" />
                            ) : (
                              <Bot className="w-4 h-4 text-gray-600" />
                            )}
                          </div>
                          <div
                            className={`rounded-lg p-3 ${message.type === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"}`}
                          >
                            <div className="whitespace-pre-line text-sm">{message.content}</div>
                            <div
                              className={`text-xs mt-1 ${message.type === "user" ? "text-blue-100" : "text-gray-500"}`}
                            >
                              {message.timestamp.toLocaleTimeString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                {/* Quick Questions */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Quick Questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => sendMessage(question)}
                        className="text-xs"
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask me anything about beach cleanups..."
                    className="flex-1"
                  />
                  <Button type="submit" disabled={!inputMessage.trim()}>
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Help Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Help Categories</CardTitle>
                <CardDescription>Common topics I can help with</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => sendMessage("How do I use the equipment?")}
                  >
                    <Package className="w-4 h-4 mr-2" />
                    Equipment Guide
                  </Button>

                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => sendMessage("What events are coming up?")}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Upcoming Events
                  </Button>

                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => sendMessage("How do Wave Points work?")}
                  >
                    <HelpCircle className="w-4 h-4 mr-2" />
                    Wave Points System
                  </Button>

                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => sendMessage("What should I bring to events?")}
                  >
                    <HelpCircle className="w-4 h-4 mr-2" />
                    Event Preparation
                  </Button>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-2">Need More Help?</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Can't find what you're looking for? Contact our support team.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
