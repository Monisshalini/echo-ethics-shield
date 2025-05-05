
// Common terms often used in hate speech (very simplified for demo purposes)
const OFFENSIVE_TERMS = [
  'hate', 'stupid', 'idiot', 'dumb', 'ugly', 'kill',
  'awful', 'terrible', 'worst', 'offensive', 'attack'
];

// This is a very basic text analysis - in a real application, 
// you would use a proper ML model or API
export const analyzeText = (text: string): {
  score: number;
  flaggedWords: string[];
  categories: { [key: string]: number };
  confidence: number;
} => {
  const lowerText = text.toLowerCase();
  const words = lowerText.split(/\s+/);
  
  // Find potentially offensive words
  const flaggedWords = words.filter(word => 
    OFFENSIVE_TERMS.some(term => word.includes(term))
  );
  
  // Calculate a simple hate speech score (0-1)
  const score = Math.min(flaggedWords.length / 5, 1);
  
  // Generate fake category scores for demo
  const categories = {
    hate: Math.random() * score,
    harassment: Math.random() * score,
    violence: Math.random() * score,
    selfHarm: Math.random() * score,
    sexual: Math.random() * score,
    profanity: Math.random() * score,
  };
  
  // Generate a fake confidence score
  const confidence = 0.5 + (Math.random() * 0.5);
  
  return {
    score,
    flaggedWords,
    categories,
    confidence
  };
};

// Anonymize text by replacing potentially personally identifiable information
export const anonymizeText = (text: string): string => {
  // Very simplified - would use more sophisticated techniques in production
  return text
    .replace(/[A-Z][a-z]+ [A-Z][a-z]+/g, "[NAME]") // Simple name detection
    .replace(/\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}/g, "[PHONE]") // Phone numbers
    .replace(/\d+\s+[A-Z][a-z]+\s+[A-Za-z]+/g, "[ADDRESS]") // Simple address
    .replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i, "[EMAIL]"); // Email
};

// Get risk level from score
export const getRiskLevel = (score: number): {
  level: 'low' | 'medium' | 'high' | 'critical';
  color: string;
} => {
  if (score < 0.3) {
    return { level: 'low', color: 'bg-green-500' };
  } else if (score < 0.6) {
    return { level: 'medium', color: 'bg-yellow-500' };
  } else if (score < 0.8) {
    return { level: 'high', color: 'bg-orange-500' };
  } else {
    return { level: 'critical', color: 'bg-red-500' };
  }
};

// Mock performance metrics
export const getPerformanceMetrics = () => {
  return {
    accuracy: 0.92,
    precision: 0.87,
    recall: 0.84,
    f1Score: 0.85,
    falsePositives: 0.13,
    falseNegatives: 0.16,
    latency: 120, // ms
  };
};

// Generate suggestions to improve text
export const generateSuggestions = (text: string, flaggedWords: string[]): string[] => {
  if (flaggedWords.length === 0) return [];
  
  const suggestions = [];
  
  if (flaggedWords.length > 0) {
    suggestions.push("Consider revising terms that might be perceived as negative");
  }
  
  if (flaggedWords.length > 2) {
    suggestions.push("Your message contains several potentially harmful terms");
  }
  
  suggestions.push("Try using more neutral language to express your opinion");
  
  return suggestions;
};
