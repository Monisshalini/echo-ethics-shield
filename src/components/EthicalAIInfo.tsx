
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, ShieldAlert, Code } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const EthicalAIInfo = () => {
  return (
    <Card className="animate-fadeIn">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldAlert className="h-5 w-5 text-shield-600" />
          Ethical AI Framework
        </CardTitle>
        <CardDescription>
          Understanding our approach to responsible content moderation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Model Limitations</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600 mb-2">
                Our model is designed to detect obvious instances of harmful content but has several key limitations:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                <li>May miss subtle forms of harmful content or coded language</li>
                <li>May incorrectly flag benign content (false positives)</li>
                <li>Has biases from its training data that we continually work to address</li>
                <li>Often lacks cultural or contextual understanding</li>
              </ul>
              <div className="mt-3 p-3 bg-amber-50 border border-amber-100 rounded-md">
                <p className="text-xs text-amber-700">
                  Important: Always review AI-flagged content manually to ensure accuracy and fairness.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger>Privacy Preservation</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  Our platform prioritizes user privacy with these key measures:
                </p>
                <div className="pl-3 border-l-2 border-shield-300">
                  <p className="text-sm font-medium text-shield-700">Local Processing</p>
                  <p className="text-sm text-gray-600">
                    Content analysis happens directly in your browser whenever possible
                  </p>
                </div>
                <div className="pl-3 border-l-2 border-shield-300">
                  <p className="text-sm font-medium text-shield-700">Data Anonymization</p>
                  <p className="text-sm text-gray-600">
                    Personal identifiable information is automatically detected and removed
                  </p>
                </div>
                <div className="pl-3 border-l-2 border-shield-300">
                  <p className="text-sm font-medium text-shield-700">No Persistent Storage</p>
                  <p className="text-sm text-gray-600">
                    Analyzed content is never saved to servers or databases
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger>Fairness Considerations</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600 mb-2">
                Our commitment to fairness includes:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                <li>Regular bias audits of our models</li>
                <li>Diverse training data from multiple sources</li>
                <li>Human oversight and review capabilities</li>
                <li>Clear explanations for why content is flagged</li>
                <li>User feedback mechanisms to improve the system</li>
              </ul>
              <div className="mt-3 flex items-start gap-2">
                <Code className="h-4 w-4 text-shield-600 mt-0.5" />
                <p className="text-xs text-gray-500">
                  We continuously evaluate our models against industry fairness benchmarks
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Human-in-the-Loop Approach</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600">
                Our technology is designed to assist human decision-making, not replace it. We recommend:
              </p>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-shield-500"></div>
                  <p className="text-sm text-gray-600">
                    Using AI detection as a first-pass screening tool
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-shield-500"></div>
                  <p className="text-sm text-gray-600">
                    Considering context and intent before making moderation decisions
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-shield-500"></div>
                  <p className="text-sm text-gray-600">
                    Providing appeals processes for false positives
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-shield-500"></div>
                  <p className="text-sm text-gray-600">
                    Having diverse human reviewers for edge cases
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default EthicalAIInfo;
