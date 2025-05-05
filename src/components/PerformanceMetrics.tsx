
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Database, Shield, Settings } from 'lucide-react';
import { getPerformanceMetrics } from '@/utils/moderationUtils';

const PerformanceMetrics = () => {
  const metrics = getPerformanceMetrics();
  
  return (
    <Card className="animate-fadeIn">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-shield-600" />
          Model Performance
        </CardTitle>
        <CardDescription>
          Current AI model performance metrics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <MetricCard 
            title="Accuracy" 
            value={metrics.accuracy} 
            description="Overall prediction accuracy"
            icon={<Shield className="h-4 w-4" />} 
          />
          <MetricCard 
            title="Precision" 
            value={metrics.precision} 
            description="True positives / predicted positives"
            icon={<Database className="h-4 w-4" />}
          />
          <MetricCard 
            title="Recall" 
            value={metrics.recall} 
            description="True positives / actual positives"
            icon={<Database className="h-4 w-4" />}
          />
          <MetricCard 
            title="F1 Score" 
            value={metrics.f1Score} 
            description="Harmonic mean of precision and recall"
            icon={<Settings className="h-4 w-4" />}
          />
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">False Positives</span>
              <span className="text-sm text-gray-500">{(metrics.falsePositives * 100).toFixed(1)}%</span>
            </div>
            <Progress value={metrics.falsePositives * 100} className="bg-amber-500" />
            <p className="text-xs text-gray-500 mt-1">
              Content incorrectly flagged as harmful
            </p>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">False Negatives</span>
              <span className="text-sm text-gray-500">{(metrics.falseNegatives * 100).toFixed(1)}%</span>
            </div>
            <Progress value={metrics.falseNegatives * 100} className="bg-red-500" />
            <p className="text-xs text-gray-500 mt-1">
              Harmful content incorrectly missed by the system
            </p>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Average Latency</span>
              <span className="text-sm text-gray-500">{metrics.latency}ms</span>
            </div>
            <Progress value={Math.min(metrics.latency / 5, 100)} className="bg-shield-500" />
            <p className="text-xs text-gray-500 mt-1">
              Average processing time per content analysis
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-border">
          <h4 className="text-sm font-medium mb-2">Understanding Model Performance</h4>
          <p className="text-xs text-gray-600">
            These metrics are based on benchmark tests across diverse content types.
            Regular updates and retraining help improve accuracy over time. Our goal is
            to minimize both false positives (incorrect flags) and false negatives (missed violations).
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

interface MetricCardProps {
  title: string;
  value: number;
  description: string;
  icon: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, description, icon }) => {
  return (
    <div className="metric-card flex flex-col items-center text-center">
      <div className="p-2 rounded-full bg-shield-100 mb-2">
        <div className="text-shield-700">
          {icon}
        </div>
      </div>
      <p className="text-xl font-bold text-shield-800">{(value * 100).toFixed(0)}%</p>
      <h4 className="text-sm font-medium">{title}</h4>
      <p className="text-xs text-gray-500 mt-1">{description}</p>
    </div>
  );
};

export default PerformanceMetrics;
