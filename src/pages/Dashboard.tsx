
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShieldCheck, BarChart2, Users, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Dashboard</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-shield-600" />
                Content Analyzed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">2,847</p>
              <p className="text-sm text-muted-foreground">+12% from last week</p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-500" />
                Flagged Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">184</p>
              <p className="text-sm text-muted-foreground">6.4% flag rate</p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                Safe Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">2,663</p>
              <p className="text-sm text-muted-foreground">93.6% pass rate</p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-secondary" />
                Active Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">346</p>
              <p className="text-sm text-muted-foreground">+24% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="trends">Content Trends</TabsTrigger>
            <TabsTrigger value="alerts">Alert History</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="p-4 bg-white rounded-lg border mt-2">
            <h3 className="text-lg font-medium mb-3">Content Moderation Overview</h3>
            <p className="text-gray-600">
              Your content moderation system has maintained a high accuracy rate of 98.2% over the past month.
              Most flagged content was related to inappropriate language (64%), followed by potential harassment (21%),
              and other policy violations (15%).
            </p>
            <div className="h-64 mt-4 bg-gray-50 rounded-lg border flex items-center justify-center text-gray-400">
              Chart visualization would appear here
            </div>
          </TabsContent>
          <TabsContent value="trends" className="p-4 bg-white rounded-lg border mt-2">
            <h3 className="text-lg font-medium mb-3">Content Trends Analysis</h3>
            <p className="text-gray-600">
              Weekly trend analysis shows a 5% reduction in flagged content after implementation
              of proactive moderation suggestions. Peak activity occurs between 2pm-8pm daily.
            </p>
            <div className="h-64 mt-4 bg-gray-50 rounded-lg border flex items-center justify-center text-gray-400">
              Trends chart would appear here
            </div>
          </TabsContent>
          <TabsContent value="alerts" className="p-4 bg-white rounded-lg border mt-2">
            <h3 className="text-lg font-medium mb-3">Recent Alert History</h3>
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-3 bg-gray-50 rounded-lg border">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
                      <span className="font-medium">Medium Risk Alert</span>
                    </div>
                    <span className="text-sm text-gray-500">Today, 14:{item}2</span>
                  </div>
                  <p className="text-sm mt-1 text-gray-600">
                    Content contained potentially offensive language that was flagged for review.
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest content moderation activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                    <div className={`mt-1 h-8 w-8 rounded-full flex items-center justify-center ${
                      item % 3 === 0 ? 'bg-amber-100 text-amber-700' : 
                      item % 2 === 0 ? 'bg-green-100 text-green-700' : 
                      'bg-shield-100 text-shield-700'
                    }`}>
                      {item % 3 === 0 ? '!' : '✓'}
                    </div>
                    <div>
                      <p className="font-medium">Content #{10045 + item}</p>
                      <p className="text-sm text-gray-500">
                        {item % 3 === 0 
                          ? 'Flagged for potential policy violation' 
                          : 'Passed all moderation checks'}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <a href="/history" className="text-shield-600 hover:underline text-sm">
                View all activity
              </a>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>System Performance</CardTitle>
              <CardDescription>Current AI model metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Accuracy</span>
                    <span className="text-sm font-medium">98.2%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-shield-600 rounded-full" style={{ width: '98.2%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Precision</span>
                    <span className="text-sm font-medium">96.5%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-shield-600 rounded-full" style={{ width: '96.5%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Recall</span>
                    <span className="text-sm font-medium">94.8%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-shield-600 rounded-full" style={{ width: '94.8%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Processing Time</span>
                    <span className="text-sm font-medium">124ms avg.</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-shield-600 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <a href="/performance" className="text-shield-600 hover:underline text-sm">
                View detailed metrics
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
