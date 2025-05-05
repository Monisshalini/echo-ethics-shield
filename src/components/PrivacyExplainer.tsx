
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Shield } from 'lucide-react';

const PrivacyExplainer = () => {
  return (
    <Card className="animate-fadeIn">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <EyeOff className="h-5 w-5 text-shield-600" />
          Privacy Preservation
        </CardTitle>
        <CardDescription>
          How your data is protected during content moderation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-shield-100 flex items-center justify-center">
                <Eye className="h-5 w-5 text-shield-600" />
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium mb-1">Data Minimization</h3>
              <p className="text-sm text-gray-600">
                We only process the text you specifically submit for analysis, 
                and no additional data is collected during the process.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-shield-100 flex items-center justify-center">
                <EyeOff className="h-5 w-5 text-shield-600" />
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium mb-1">Local Processing</h3>
              <p className="text-sm text-gray-600">
                Content analysis is performed directly in your browser when possible,
                keeping your data on your device rather than our servers.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-shield-100 flex items-center justify-center">
                <Shield className="h-5 w-5 text-shield-600" />
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium mb-1">Anonymization</h3>
              <p className="text-sm text-gray-600">
                Personal identifiers like names, emails, and locations are automatically
                detected and anonymized before any processing occurs.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-shield-50 to-blue-50 p-4 rounded-lg border border-shield-100">
            <h4 className="font-medium text-shield-700 mb-2">Our Privacy Commitment</h4>
            <ul className="space-y-2">
              <li className="flex gap-2 items-start">
                <div className="h-5 w-5 rounded-full bg-shield-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 bg-shield-600 rounded-full"></div>
                </div>
                <p className="text-sm text-shield-700">No persistent storage of analyzed content</p>
              </li>
              <li className="flex gap-2 items-start">
                <div className="h-5 w-5 rounded-full bg-shield-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 bg-shield-600 rounded-full"></div>
                </div>
                <p className="text-sm text-shield-700">No tracking or profiling across sessions</p>
              </li>
              <li className="flex gap-2 items-start">
                <div className="h-5 w-5 rounded-full bg-shield-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 bg-shield-600 rounded-full"></div>
                </div>
                <p className="text-sm text-shield-700">Transparent processing with no hidden analysis</p>
              </li>
              <li className="flex gap-2 items-start">
                <div className="h-5 w-5 rounded-full bg-shield-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 bg-shield-600 rounded-full"></div>
                </div>
                <p className="text-sm text-shield-700">Optional anonymization for extra protection</p>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PrivacyExplainer;
