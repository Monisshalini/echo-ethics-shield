
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Shield } from 'lucide-react';
import { analyzeText, anonymizeText } from '@/utils/moderationUtils';
import { useToast } from '@/hooks/use-toast';

interface ContentAnalyzerProps {
  onAnalysisComplete: (result: {
    text: string;
    score: number;
    flaggedWords: string[];
    categories: { [key: string]: number };
    confidence: number;
  }) => void;
}

const ContentAnalyzer: React.FC<ContentAnalyzerProps> = ({ onAnalysisComplete }) => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPrivacyEnabled, setIsPrivacyEnabled] = useState(true);
  const { toast } = useToast();

  const handleAnalyze = () => {
    if (!text.trim()) {
      toast({
        title: "Empty Content",
        description: "Please enter some text to analyze",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const result = analyzeText(text);
      
      // Process with privacy preservation if enabled
      const processedText = isPrivacyEnabled ? anonymizeText(text) : text;
      
      onAnalysisComplete({
        text: processedText,
        ...result
      });
      
      setIsLoading(false);
      
      toast({
        title: "Analysis Complete",
        description: "Content has been analyzed successfully",
      });
    }, 1000);
  };

  const handleClear = () => {
    setText('');
    toast({
      title: "Content Cleared",
      description: "Text area has been cleared",
    });
  };

  return (
    <Card className="w-full animate-fadeIn">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-shield-600" />
          <CardTitle>Content Analyzer</CardTitle>
        </div>
        <CardDescription>
          Enter content to detect potentially harmful language
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Textarea
          placeholder="Type or paste content to analyze..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-32 mb-4"
          disabled={isLoading}
        />
        
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="checkbox"
            id="privacy-toggle"
            checked={isPrivacyEnabled}
            onChange={() => setIsPrivacyEnabled(!isPrivacyEnabled)}
            className="rounded border-gray-300 text-shield-500 focus:ring-shield-500"
          />
          <label htmlFor="privacy-toggle" className="text-sm text-gray-600">
            Enable privacy preservation (anonymize personal information)
          </label>
        </div>
        
        <Alert className="bg-accent">
          <Shield className="h-4 w-4" />
          <AlertTitle>Privacy First</AlertTitle>
          <AlertDescription>
            Your content is analyzed locally and never stored on our servers.
          </AlertDescription>
        </Alert>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleClear} disabled={isLoading}>
          Clear
        </Button>
        <Button 
          onClick={handleAnalyze} 
          disabled={isLoading || !text.trim()} 
          className="bg-shield-600 hover:bg-shield-700"
        >
          {isLoading ? 'Analyzing...' : 'Analyze Content'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContentAnalyzer;
