
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, AlertTriangle, ShieldAlert } from 'lucide-react';
import { getRiskLevel, generateSuggestions } from '@/utils/moderationUtils';

interface ResultsDisplayProps {
  analysisResult: {
    text: string;
    score: number;
    flaggedWords: string[];
    categories: { [key: string]: number };
    confidence: number;
  } | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ analysisResult }) => {
  if (!analysisResult) return null;
  
  const { text, score, flaggedWords, categories, confidence } = analysisResult;
  const { level, color } = getRiskLevel(score);
  const suggestions = generateSuggestions(text, flaggedWords);
  
  // Format score as percentage
  const scorePercent = Math.round(score * 100);
  
  const getCategoryIcon = (score: number) => {
    if (score < 0.3) return <ShieldCheck className="h-4 w-4 text-green-500" />;
    if (score < 0.7) return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
    return <ShieldAlert className="h-4 w-4 text-red-500" />;
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2 animate-fadeIn">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-shield-600" />
            Analysis Results
          </CardTitle>
          <CardDescription>
            Detection results and confidence score
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Risk Score: {scorePercent}%</span>
              <Badge className={`${color} text-white`}>
                {level.charAt(0).toUpperCase() + level.slice(1)} Risk
              </Badge>
            </div>
            <Progress value={scorePercent} className={color} />
          </div>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-2">Model Confidence: {Math.round(confidence * 100)}%</h4>
            <Progress value={confidence * 100} className="bg-shield-500" />
          </div>
          
          {flaggedWords.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-2">Flagged Terms</h4>
              <div className="flex flex-wrap gap-2">
                {flaggedWords.map((word, index) => (
                  <Badge key={index} variant="outline" className="border-orange-300 bg-orange-50 text-orange-700">
                    {word}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          <div>
            <h4 className="text-sm font-medium mb-2">Analyzed Content</h4>
            <p className="text-sm p-3 bg-gray-50 rounded border">{text}</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Category Analysis</CardTitle>
          <CardDescription>
            Breakdown by content category
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(categories).map(([category, value]) => (
              <div key={category} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {getCategoryIcon(value)}
                    <span className="ml-2 text-sm font-medium capitalize">
                      {category}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {Math.round(value * 100)}%
                  </span>
                </div>
                <Progress value={value * 100} className={`${value > 0.7 ? 'bg-red-500' : value > 0.3 ? 'bg-yellow-500' : 'bg-green-500'}`} />
              </div>
            ))}
          </div>
          
          {suggestions.length > 0 && (
            <div className="mt-6 p-4 rounded-md bg-blue-50 border border-blue-100">
              <h4 className="text-sm font-medium text-blue-700 mb-2">Suggestions for Improvement</h4>
              <ul className="space-y-1">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="text-sm text-blue-600">
                    • {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsDisplay;
