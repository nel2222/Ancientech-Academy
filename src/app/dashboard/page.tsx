"use client"

import { useState } from "react"
import Link from "next/link"
import { Shield, User, LogOut, CreditCard, BookOpen, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { formatCurrency, calculateProgress } from "@/lib/utils"

// Mock data - will be replaced with real Supabase data
const mockEnrollment = {
  course: "Cybersecurity",
  totalAmount: 100,
  amountPaid: 60,
  paymentType: "ONE_TIME" as const,
  enrollmentStatus: "ENROLLED" as const
}

const mockPaymentHistory = [
  { id: 1, date: "2024-02-15", amount: 30, status: "SUCCESS", reference: "PAY-XXX-001" },
  { id: 2, date: "2024-02-01", amount: 30, status: "SUCCESS", reference: "PAY-XXX-002" }
]

export default function DashboardPage() {
  const progress = calculateProgress(mockEnrollment.amountPaid, mockEnrollment.totalAmount)
  const remainingBalance = mockEnrollment.totalAmount - mockEnrollment.amountPaid

  return (
    <div className="min-h-screen bg-deep-void">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-electric-teal/20 bg-deep-void/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-electric-teal" />
            <span className="text-xl font-bold">
              <span className="text-electric-teal">Ancientech</span> Academy
            </span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <User className="h-4 w-4 text-electric-teal" />
              <span>Student Dashboard</span>
            </div>
            <Button variant="ghost" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
          <p className="text-light-gray">Track your progress and manage your enrollment</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Dashboard Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-electric-teal" />
                  Course Progress
                </CardTitle>
                <CardDescription>
                  Enrolled in: {mockEnrollment.course}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Payment Progress</span>
                    <span className="text-sm font-medium text-electric-teal">{progress}%</span>
                  </div>
                  <Progress value={progress} />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-dark-slate/50">
                    <p className="text-sm text-light-gray mb-1">Total Amount</p>
                    <p className="text-xl font-bold text-electric-teal">
                      {formatCurrency(mockEnrollment.totalAmount)}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-dark-slate/50">
                    <p className="text-sm text-light-gray mb-1">Amount Paid</p>
                    <p className="text-xl font-bold text-success-green">
                      {formatCurrency(mockEnrollment.amountPaid)}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-dark-slate/50">
                    <p className="text-sm text-light-gray mb-1">Remaining</p>
                    <p className="text-xl font-bold text-cyber-violet">
                      {formatCurrency(remainingBalance)}
                    </p>
                  </div>
                </div>

                {remainingBalance > 0 && (
                  <Button className="w-full">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Make Payment
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Payment History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-electric-teal" />
                  Payment History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockPaymentHistory.map((payment) => (
                    <div 
                      key={payment.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-dark-slate/50 border border-electric-teal/10"
                    >
                      <div>
                        <p className="font-medium">{formatCurrency(payment.amount)}</p>
                        <p className="text-sm text-light-gray">{payment.date}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-green/20 text-success-green">
                          {payment.status}
                        </span>
                        <p className="text-xs text-light-gray mt-1">{payment.reference}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enrollment Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Enrollment Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-light-gray">Status</span>
                  <span className="px-3 py-1 rounded-full bg-electric-teal/20 text-electric-teal text-xs font-medium">
                    {mockEnrollment.enrollmentStatus}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-light-gray">Payment Type</span>
                  <span className="text-sm font-medium">{mockEnrollment.paymentType.replace('_', ' ')}</span>
                </div>
              </CardContent>
            </Card>

            {/* Certificate */}
            <Card className="border-cyber-violet/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Award className="h-5 w-5 mr-2 text-cyber-violet" />
                  Certificate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-cyber-violet/10 flex items-center justify-center mb-3">
                    <Award className="h-8 w-8 text-cyber-violet" />
                  </div>
                  <p className="text-sm text-light-gray mb-4">
                    Complete 100% payment to unlock your certificate
                  </p>
                  <Button variant="outline" disabled className="w-full">
                    Coming Soon
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/#courses" className="block">
                  <Button variant="ghost" className="w-full justify-start">
                    Browse Courses
                  </Button>
                </Link>
                <Link href="/cyber-awakening" className="block">
                  <Button variant="ghost" className="w-full justify-start">
                    Cyber Awakening
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
