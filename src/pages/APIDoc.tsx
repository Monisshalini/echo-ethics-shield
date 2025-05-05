
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy } from 'lucide-react';

const APIDoc = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, would add toast notification here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">API Documentation</h1>
        <p className="text-lg text-gray-600 mb-6">
          Integrate content moderation directly into your applications
        </p>
        
        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="authentication">Authentication</TabsTrigger>
            <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="sdks">SDKs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Echo Ethics Shield API</CardTitle>
                <CardDescription>
                  Privacy-focused content moderation API for your applications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  The Echo Ethics Shield API allows you to integrate ethical content moderation directly into your 
                  applications. Our API emphasizes privacy protection, offering both cloud-based and edge-based 
                  deployment options to meet your specific needs.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 p-5 rounded-lg border">
                    <h3 className="text-lg font-medium mb-2">Key Features</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>Privacy-preserving processing options</li>
                      <li>Multiple content types supported (text, images, audio)</li>
                      <li>Customizable moderation thresholds</li>
                      <li>Detailed content analysis with scoring</li>
                      <li>On-device SDK for client-side processing</li>
                      <li>Enterprise-grade security and reliability</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg border">
                    <h3 className="text-lg font-medium mb-2">API Versions</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">v1.0 (Current)</span>
                          <span className="text-green-600 font-medium">Stable</span>
                        </div>
                        <p className="text-gray-600">Released May 2025 - Full API with all features</p>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">v0.9 (Beta)</span>
                          <span className="text-amber-600 font-medium">Maintenance</span>
                        </div>
                        <p className="text-gray-600">Released January 2025 - Will be deprecated</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-3">Base URL</h3>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded-md flex justify-between items-center">
                    <code>https://api.echoethicsshield.com/v1</code>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-gray-300 hover:text-white"
                      onClick={() => copyToClipboard('https://api.echoethicsshield.com/v1')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-3">Rate Limits</h3>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-4">Plan</th>
                        <th className="text-left py-2 pr-4">Requests / Minute</th>
                        <th className="text-left py-2">Monthly Limit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 pr-4">Developer (Free)</td>
                        <td className="py-2 pr-4">10</td>
                        <td className="py-2">5,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4">Standard</td>
                        <td className="py-2 pr-4">60</td>
                        <td className="py-2">50,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4">Professional</td>
                        <td className="py-2 pr-4">300</td>
                        <td className="py-2">500,000</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">Enterprise</td>
                        <td className="py-2 pr-4">Custom</td>
                        <td className="py-2">Custom</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="authentication">
            <Card>
              <CardHeader>
                <CardTitle>API Authentication</CardTitle>
                <CardDescription>
                  Secure your API requests with proper authentication
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700">
                  All API requests require authentication using an API key that can be generated from your dashboard.
                  Your API key carries many privileges, so be sure to keep it secure.
                </p>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-3">API Key Authentication</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Pass your API key in the request header:
                  </p>
                  
                  <div className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto">
                    <pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-3">Example Request with Authentication</h3>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto">
                    <pre><code>{`curl -X POST \\
  https://api.echoethicsshield.com/v1/analyze/text \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "This is an example text to analyze",
    "options": {
      "threshold": 0.7,
      "categories": ["hate_speech", "harassment", "violence"]
    }
  }'`}</code></pre>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-3">Generating API Keys</h3>
                  <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
                    <li>Log in to your Echo Ethics Shield dashboard</li>
                    <li>Navigate to API Settings in your account menu</li>
                    <li>Click "Generate New API Key"</li>
                    <li>Name your key based on its intended use</li>
                    <li>Select the appropriate permission scope</li>
                    <li>Copy your key immediately (it won't be shown again)</li>
                  </ol>
                </div>
                
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-6">
                  <h4 className="text-amber-800 font-medium mb-1">Security Best Practices</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-amber-700">
                    <li>Never expose your API key in client-side code</li>
                    <li>Use environment variables to store your API keys</li>
                    <li>Implement proper key rotation procedures</li>
                    <li>Create separate API keys for different applications</li>
                    <li>Monitor your API usage for unusual activity</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="endpoints">
            <Card>
              <CardHeader>
                <CardTitle>API Endpoints</CardTitle>
                <CardDescription>
                  Available endpoints and their specifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium mb-3">Text Moderation</h3>
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 flex items-center px-4 py-2 border-b">
                        <span className="bg-green-600 text-white px-2 py-0.5 rounded-md text-xs font-medium">POST</span>
                        <code className="ml-3 text-sm">/analyze/text</code>
                      </div>
                      <div className="p-4 space-y-4">
                        <p className="text-sm text-gray-700">
                          Analyzes the provided text content for harmful, offensive, or policy-violating content.
                        </p>
                        
                        <div>
                          <h4 className="text-sm font-medium mb-2">Request Parameters</h4>
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2 pr-4">Parameter</th>
                                <th className="text-left py-2 pr-4">Type</th>
                                <th className="text-left py-2">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2 pr-4 font-medium">text</td>
                                <td className="py-2 pr-4 font-mono text-xs">string</td>
                                <td className="py-2">The text content to be analyzed</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 pr-4 font-medium">options.threshold</td>
                                <td className="py-2 pr-4 font-mono text-xs">float</td>
                                <td className="py-2">Minimum score to flag content (0.0 - 1.0)</td>
                              </tr>
                              <tr>
                                <td className="py-2 pr-4 font-medium">options.categories</td>
                                <td className="py-2 pr-4 font-mono text-xs">array</td>
                                <td className="py-2">Categories to check (optional)</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium mb-2">Response Format</h4>
                          <div className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto">
                            <pre><code>{`{
  "id": "mod_123456789",
  "timestamp": "2025-05-05T12:34:56Z",
  "status": "completed",
  "results": {
    "flagged": true,
    "categories": {
      "hate_speech": {
        "score": 0.82,
        "flagged": true
      },
      "harassment": {
        "score": 0.35,
        "flagged": false
      }
    },
    "overall_score": 0.82
  },
  "recommendations": {
    "should_block": true,
    "reasons": ["hate_speech"],
    "suggestions": [
      "Consider removing language targeting specific groups",
      "Rewrite to express disagreement without offensive terms"
    ]
  }
}`}</code></pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3">Image Moderation</h3>
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 flex items-center px-4 py-2 border-b">
                        <span className="bg-green-600 text-white px-2 py-0.5 rounded-md text-xs font-medium">POST</span>
                        <code className="ml-3 text-sm">/analyze/image</code>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-700">
                          Analyzes the provided image for harmful, offensive, or policy-violating content.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 text-sm text-blue-700">
                          See full documentation for request and response formats for this endpoint.
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3">Batch Analysis</h3>
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 flex items-center px-4 py-2 border-b">
                        <span className="bg-green-600 text-white px-2 py-0.5 rounded-md text-xs font-medium">POST</span>
                        <code className="ml-3 text-sm">/analyze/batch</code>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-700">
                          Process multiple content items in a single request for efficiency.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 text-sm text-blue-700">
                          See full documentation for request and response formats for this endpoint.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="examples">
            <Card>
              <CardHeader>
                <CardTitle>Code Examples</CardTitle>
                <CardDescription>
                  Integration examples for various programming languages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="javascript" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                    <TabsTrigger value="ruby">Ruby</TabsTrigger>
                    <TabsTrigger value="java">Java</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="javascript" className="mt-0">
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
                      <pre><code>{`// Using fetch API
const API_KEY = 'your_api_key_here';

async function analyzeText(text) {
  try {
    const response = await fetch('https://api.echoethicsshield.com/v1/analyze/text', {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${API_KEY}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text,
        options: {
          threshold: 0.7,
          categories: ['hate_speech', 'harassment', 'violence']
        }
      })
    });
    
    const data = await response.json();
    
    if (data.results.flagged) {
      console.log('Content was flagged:', data.results);
      return data.recommendations;
    } else {
      console.log('Content passed moderation checks');
      return null;
    }
  } catch (error) {
    console.error('Error during content moderation:', error);
    throw error;
  }
}

// Usage
analyzeText("Text to analyze")
  .then(recommendations => {
    if (recommendations) {
      console.log('Recommendations:', recommendations);
    }
  })
  .catch(err => {
    console.error('Failed to analyze text:', err);
  });`}</code></pre>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="python" className="mt-0">
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
                      <pre><code>{`# Using requests library
import requests
import json

API_KEY = 'your_api_key_here'

def analyze_text(text):
    try:
        headers = {
            'Authorization': f'Bearer {API_KEY}',
            'Content-Type': 'application/json'
        }
        
        payload = {
            'text': text,
            'options': {
                'threshold': 0.7,
                'categories': ['hate_speech', 'harassment', 'violence']
            }
        }
        
        response = requests.post(
            'https://api.echoethicsshield.com/v1/analyze/text',
            headers=headers,
            data=json.dumps(payload)
        )
        
        response.raise_for_status()  # Raise exception for HTTP errors
        data = response.json()
        
        if data['results']['flagged']:
            print('Content was flagged:', data['results'])
            return data['recommendations']
        else:
            print('Content passed moderation checks')
            return None
            
    except Exception as error:
        print('Error during content moderation:', error)
        raise
        
# Usage
try:
    recommendations = analyze_text("Text to analyze")
    if recommendations:
        print('Recommendations:', recommendations)
except Exception as e:
    print('Failed to analyze text:', e)`}</code></pre>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ruby" className="mt-0">
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
                      <pre><code>{`# Ruby example would be shown here`}</code></pre>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="java" className="mt-0">
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
                      <pre><code>{`// Java example would be shown here`}</code></pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sdks">
            <Card>
              <CardHeader>
                <CardTitle>Client SDKs</CardTitle>
                <CardDescription>
                  Official client libraries for various platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-5">
                    <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                      <div className="bg-blue-100 p-2 rounded">JS</div>
                      JavaScript / TypeScript
                    </h3>
                    <p className="text-sm text-gray-700 mb-4">
                      Official JavaScript SDK for browsers and Node.js applications.
                    </p>
                    <div className="bg-gray-100 p-3 rounded-md mb-4">
                      <code className="text-sm">npm install @echo-ethics-shield/js</code>
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="text-xs">
                        Documentation
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs">
                        GitHub
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-5">
                    <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                      <div className="bg-blue-100 p-2 rounded">Py</div>
                      Python
                    </h3>
                    <p className="text-sm text-gray-700 mb-4">
                      Official Python SDK for server-side integrations.
                    </p>
                    <div className="bg-gray-100 p-3 rounded-md mb-4">
                      <code className="text-sm">pip install echo-ethics-shield</code>
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="text-xs">
                        Documentation
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs">
                        GitHub
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-5">
                    <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                      <div className="bg-blue-100 p-2 rounded">Go</div>
                      Go
                    </h3>
                    <p className="text-sm text-gray-700 mb-4">
                      Official Go SDK for server-side applications.
                    </p>
                    <div className="bg-gray-100 p-3 rounded-md mb-4">
                      <code className="text-sm">go get github.com/echo-ethics-shield/go-sdk</code>
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="text-xs">
                        Documentation
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs">
                        GitHub
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-5">
                    <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                      <div className="bg-blue-100 p-2 rounded">PHP</div>
                      PHP
                    </h3>
                    <p className="text-sm text-gray-700 mb-4">
                      Official PHP SDK for web applications.
                    </p>
                    <div className="bg-gray-100 p-3 rounded-md mb-4">
                      <code className="text-sm">composer require echo-ethics-shield/php</code>
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="text-xs">
                        Documentation
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs">
                        GitHub
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border mt-8">
                  <h3 className="text-lg font-medium mb-3">On-Device SDK</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    For privacy-critical applications, our on-device SDK allows you to run content moderation
                    entirely on the client device without sending data to external servers.
                  </p>
                  <div className="flex gap-3">
                    <Button>Learn More</Button>
                    <Button variant="outline">Request Access</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default APIDoc;
