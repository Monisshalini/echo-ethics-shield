
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContentAnalyzer from '@/components/ContentAnalyzer';
import ResultsDisplay from '@/components/ResultsDisplay';
import EthicalAIInfo from '@/components/EthicalAIInfo';
import PerformanceMetrics from '@/components/PerformanceMetrics';
import PrivacyExplainer from '@/components/PrivacyExplainer';
import { ShieldCheck } from 'lucide-react';

const Index = () => {
  const [analysisResult, setAnalysisResult] = useState(null);
  
  const handleAnalysisComplete = (result: any) => {
    setAnalysisResult(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pb-12">
      <header className="py-8 px-4 md:px-8 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-shield-600 p-2 rounded-lg">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight gradient-text">Echo Ethics Shield</h1>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">v1.0 • Ethical AI Content Moderation</p>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <ContentAnalyzer onAnalysisComplete={handleAnalysisComplete} />
          </div>
          
          <div className="lg:col-span-2">
            {analysisResult ? (
              <ResultsDisplay analysisResult={analysisResult} />
            ) : (
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 h-full flex flex-col items-center justify-center text-center animate-fadeIn">
                <div className="p-4 bg-shield-100 rounded-full mb-4">
                  <ShieldCheck className="h-10 w-10 text-shield-600" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Content Moderation with Privacy</h2>
                <p className="text-gray-600 max-w-md mb-6">
                  Enter text in the analyzer to detect potentially harmful content
                  while preserving privacy and ensuring ethical AI practices.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-md">
                  <div className="p-3 bg-white rounded-lg border shadow-sm">
                    <p className="font-medium text-shield-700">Privacy-First</p>
                    <p className="text-xs text-gray-500">Data never leaves your device</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border shadow-sm">
                    <p className="font-medium text-shield-700">Ethical AI</p>
                    <p className="text-xs text-gray-500">Transparent processing</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border shadow-sm">
                    <p className="font-medium text-shield-700">Self-Moderation</p>
                    <p className="text-xs text-gray-500">Stay informed of content risk</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-12">
          <Tabs defaultValue="ethics" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="ethics">Ethical AI Framework</TabsTrigger>
              <TabsTrigger value="privacy">Privacy Preservation</TabsTrigger>
              <TabsTrigger value="performance">Model Performance</TabsTrigger>
            </TabsList>
            <TabsContent value="ethics" className="mt-6">
              <EthicalAIInfo />
            </TabsContent>
            <TabsContent value="privacy" className="mt-6">
              <PrivacyExplainer />
            </TabsContent>
            <TabsContent value="performance" className="mt-6">
              <PerformanceMetrics />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <footer className="mt-16 border-t pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-between">
            <div>
              <h3 className="flex items-center text-lg font-medium mb-4">
                <ShieldCheck className="h-5 w-5 mr-2 text-shield-600" />
                Echo Ethics Shield
              </h3>
              <p className="text-sm text-gray-500 max-w-md">
                Promoting ethical content moderation with privacy-preserving 
                technology and transparent AI practices.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <h4 className="font-medium mb-2">Resources</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="text-shield-600 hover:underline">Documentation</a></li>
                <li><a href="#" className="text-shield-600 hover:underline">Ethics Statement</a></li>
                <li><a href="#" className="text-shield-600 hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t text-sm text-gray-500">
            <p>© 2025 Echo Ethics Shield. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
