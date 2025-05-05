
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Save } from 'lucide-react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Settings</h1>
        
        <Tabs defaultValue="general" className="mb-8">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="moderation">Moderation</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Configure the general behavior of the moderation system
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">User Interface</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="theme-mode">Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable dark mode for the application interface
                      </p>
                    </div>
                    <Switch id="theme-mode" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="compact-view">Compact View</Label>
                      <p className="text-sm text-muted-foreground">
                        Use a more compact layout to fit more content on screen
                      </p>
                    </div>
                    <Switch id="compact-view" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="animations">Interface Animations</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable subtle animations in the user interface
                      </p>
                    </div>
                    <Switch id="animations" defaultChecked />
                  </div>
                </div>
                
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">Language & Region</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="language">Interface Language</Label>
                    <select
                      id="language"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="en-US">English (US)</option>
                      <option value="en-GB">English (UK)</option>
                      <option value="fr">French</option>
                      <option value="es">Spanish</option>
                      <option value="de">German</option>
                      <option value="zh">Chinese (Simplified)</option>
                      <option value="ja">Japanese</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <select
                      id="timezone"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="UTC">UTC (Coordinated Universal Time)</option>
                      <option value="America/New_York">Eastern Time (ET)</option>
                      <option value="America/Chicago">Central Time (CT)</option>
                      <option value="America/Denver">Mountain Time (MT)</option>
                      <option value="America/Los_Angeles">Pacific Time (PT)</option>
                      <option value="Europe/London">British Time (GMT/BST)</option>
                      <option value="Europe/Paris">Central European Time (CET)</option>
                      <option value="Asia/Tokyo">Japan Standard Time (JST)</option>
                    </select>
                  </div>
                </div>
                
                <div className="pt-6 flex justify-end">
                  <Button className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Save General Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="moderation">
            <Card>
              <CardHeader>
                <CardTitle>Moderation Settings</CardTitle>
                <CardDescription>
                  Configure how the content moderation system behaves
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Sensitivity Settings</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="sensitivity">Moderation Sensitivity</Label>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Less strict</span>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        defaultValue="60"
                        className="flex-1"
                        id="sensitivity"
                      />
                      <span className="text-sm text-muted-foreground">More strict</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Current setting: Medium (60%)
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <Label className="mb-2 block">Categories to Monitor</Label>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cat-hate" defaultChecked />
                        <Label htmlFor="cat-hate">Hate Speech</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cat-harass" defaultChecked />
                        <Label htmlFor="cat-harass">Harassment</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cat-violence" defaultChecked />
                        <Label htmlFor="cat-violence">Violence</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cat-self-harm" defaultChecked />
                        <Label htmlFor="cat-self-harm">Self-harm</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cat-sexual" defaultChecked />
                        <Label htmlFor="cat-sexual">Sexual Content</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cat-profanity" defaultChecked />
                        <Label htmlFor="cat-profanity">Profanity</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cat-disinformation" />
                        <Label htmlFor="cat-disinformation">Disinformation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cat-spam" />
                        <Label htmlFor="cat-spam">Spam</Label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">Automatic Actions</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="auto-suggestions">Show Improvement Suggestions</Label>
                      <p className="text-sm text-muted-foreground">
                        Provide suggestions for improving flagged content
                      </p>
                    </div>
                    <Switch id="auto-suggestions" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="auto-filter">Auto-Filter Severe Content</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically filter content with severe violations
                      </p>
                    </div>
                    <Switch id="auto-filter" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="auto-reporting">Enable Anonymous Reporting</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow privacy-preserving reports of problematic content
                      </p>
                    </div>
                    <Switch id="auto-reporting" />
                  </div>
                </div>
                
                <div className="pt-6 flex justify-end">
                  <Button className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4" />
                    Save Moderation Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>
                  Configure your privacy and data usage preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Data Processing</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="local-processing">Local-only Processing</Label>
                      <p className="text-sm text-muted-foreground">
                        Process all content locally without sending data to external servers
                      </p>
                    </div>
                    <Switch id="local-processing" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="data-retention">Store Moderation History</Label>
                      <p className="text-sm text-muted-foreground">
                        Keep records of content moderation decisions
                      </p>
                    </div>
                    <Switch id="data-retention" defaultChecked />
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <Label htmlFor="retention-period">History Retention Period</Label>
                    <select
                      id="retention-period"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="7">7 days</option>
                      <option value="30" selected>30 days</option>
                      <option value="90">90 days</option>
                      <option value="180">180 days</option>
                      <option value="365">1 year</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">Data Sharing & Privacy</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="anon-telemetry">Anonymous Usage Statistics</Label>
                      <p className="text-sm text-muted-foreground">
                        Share anonymous data to improve the moderation system
                      </p>
                    </div>
                    <Switch id="anon-telemetry" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="model-improvement">Help Improve AI Models</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow anonymous content samples to improve detection models
                      </p>
                    </div>
                    <Switch id="model-improvement" />
                  </div>
                </div>
                
                <div className="pt-6 flex justify-end">
                  <Button className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Save Privacy Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Configure when and how you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notification Types</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="high-severity">High Severity Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive alerts for high-risk content detections
                      </p>
                    </div>
                    <Switch id="high-severity" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="medium-severity">Medium Severity Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive alerts for medium-risk content detections
                      </p>
                    </div>
                    <Switch id="medium-severity" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="low-severity">Low Severity Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive alerts for low-risk content detections
                      </p>
                    </div>
                    <Switch id="low-severity" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="system-updates">System Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications about system updates and new features
                      </p>
                    </div>
                    <Switch id="system-updates" defaultChecked />
                  </div>
                </div>
                
                <div className="pt-6 flex justify-end">
                  <Button className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Save Notification Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
