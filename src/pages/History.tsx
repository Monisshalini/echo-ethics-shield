
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { AlertCircle, CheckCircle, Clock, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mockHistory = [
  {
    id: "mod-1001",
    content: "This is an example of acceptable content that passed moderation checks.",
    timestamp: "2025-05-05T10:30:00Z",
    status: "safe",
    score: 0.12,
    category: "general"
  },
  {
    id: "mod-1002",
    content: "This content had some concerning language but was below the threshold.",
    timestamp: "2025-05-05T09:15:00Z",
    status: "warning",
    score: 0.42,
    category: "inappropriate language"
  },
  {
    id: "mod-1003",
    content: "This content was flagged for potentially harmful content.",
    timestamp: "2025-05-04T16:45:00Z",
    status: "flagged",
    score: 0.76,
    category: "harmful content"
  },
  {
    id: "mod-1004",
    content: "Regular content with no issues detected by the system.",
    timestamp: "2025-05-04T14:20:00Z",
    status: "safe",
    score: 0.08,
    category: "general"
  },
  {
    id: "mod-1005",
    content: "Content was flagged for review by the moderation system.",
    timestamp: "2025-05-03T11:05:00Z",
    status: "flagged",
    score: 0.82,
    category: "harassment"
  },
  {
    id: "mod-1006",
    content: "This content contained borderline material that was marked for review.",
    timestamp: "2025-05-03T09:30:00Z",
    status: "warning",
    score: 0.51,
    category: "discrimination"
  }
];

const History = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'safe': return 'bg-green-100 text-green-700';
      case 'warning': return 'bg-amber-100 text-amber-700';
      case 'flagged': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };
  
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'safe': return <CheckCircle className="h-4 w-4" />;
      case 'warning': return <Clock className="h-4 w-4" />;
      case 'flagged': return <AlertCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  const filteredHistory = activeFilter === 'all' 
    ? mockHistory 
    : mockHistory.filter(item => item.status === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Moderation History</h1>
        
        <Card className="mb-8">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Content Analysis History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-6">
              <Button 
                variant={activeFilter === 'all' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveFilter('all')}
              >
                All
              </Button>
              <Button 
                variant={activeFilter === 'safe' ? 'default' : 'outline'} 
                size="sm"
                className="flex items-center gap-2"
                onClick={() => setActiveFilter('safe')}
              >
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                Safe
              </Button>
              <Button 
                variant={activeFilter === 'warning' ? 'default' : 'outline'} 
                size="sm"
                className="flex items-center gap-2"
                onClick={() => setActiveFilter('warning')}
              >
                <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                Warning
              </Button>
              <Button 
                variant={activeFilter === 'flagged' ? 'default' : 'outline'} 
                size="sm"
                className="flex items-center gap-2"
                onClick={() => setActiveFilter('flagged')}
              >
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                Flagged
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="ml-auto flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Advanced Filters
              </Button>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="text-left p-3 text-sm font-medium text-gray-600">ID</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-600">Content</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-600">Time</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-600">Status</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-600">Score</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-600">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredHistory.map((item) => (
                    <tr key={item.id} className="border-b last:border-0 hover:bg-gray-50">
                      <td className="p-3 text-sm font-mono">{item.id}</td>
                      <td className="p-3 text-sm max-w-xs truncate">{item.content}</td>
                      <td className="p-3 text-sm text-gray-500">{formatDate(item.timestamp)}</td>
                      <td className="p-3">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                          {getStatusIcon(item.status)}
                          <span>{item.status.charAt(0).toUpperCase() + item.status.slice(1)}</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${
                                item.score < 0.3 ? 'bg-green-500' : 
                                item.score < 0.6 ? 'bg-amber-500' : 
                                'bg-red-500'
                              }`} 
                              style={{ width: `${item.score * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-600">{(item.score * 100).toFixed(0)}%</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">
                          {item.category}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default History;
