// More comprehensive list of terms often used in hate speech and offensive content
// Note: This is still simplified for demonstration purposes
const OFFENSIVE_TERMS = [
  // Original terms
  'hate', 'stupid', 'idiot', 'dumb', 'ugly', 'kill',
  'awful', 'terrible', 'worst', 'offensive', 'attack',
  
  // Additional offensive terms (moderate)
  'loser', 'jerk', 'fool', 'moron', 'worthless', 'useless',
  'incompetent', 'pathetic', 'disgusting', 'horrible', 'trash',
  'garbage', 'failure', 'reject', 'freak', 'creep',
  
  // Profanity (common offensive words)
  'damn', 'hell', 'ass', 'crap', 'suck', 'screw',
  
  // Additional severe terms would be included in a real system
  // but are intentionally omitted here
  
  // Bad word variations with common obfuscations
  'b@d', 'ba d', 'b a d', 'b-a-d', 'baad', 'baaad',
  
  // Common prefixes and patterns
  'anti', 'against', 'no to', 'death to', 'eliminate',
  'destroy', 'hurt', 'harmful', 'die', 'dead', 'evil'
];

// Enhanced text analysis with better detection capabilities
export const analyzeText = (text: string): {
  score: number;
  flaggedWords: string[];
  categories: { [key: string]: number };
  confidence: number;
} => {
  const lowerText = text.toLowerCase();
  const words = lowerText.split(/\s+/);
  const sentences = lowerText.split(/[.!?]+/);
  
  // Find potentially offensive words with more comprehensive check
  let flaggedWords: string[] = [];
  
  // Check individual words
  words.forEach(word => {
    if (OFFENSIVE_TERMS.some(term => word.includes(term))) {
      flaggedWords.push(word);
    }
  });
  
  // Check for phrases and context (simple implementation)
  sentences.forEach(sentence => {
    OFFENSIVE_TERMS.forEach(term => {
      if (sentence.includes(term)) {
        // Add context words around the term
        const index = sentence.indexOf(term);
        const contextPhrase = sentence.substring(
          Math.max(0, index - 10),
          Math.min(sentence.length, index + term.length + 10)
        ).trim();
        
        if (!flaggedWords.includes(contextPhrase)) {
          flaggedWords.push(contextPhrase);
        }
      }
    });
  });
  
  // Remove duplicates
  flaggedWords = [...new Set(flaggedWords)];
  
  // Calculate a more nuanced hate speech score
  // Base score on number of flagged words with diminishing returns
  const rawScore = flaggedWords.length / Math.max(words.length / 10, 3);
  const score = Math.min(Math.tanh(rawScore) * 0.8 + (rawScore > 0 ? 0.2 : 0), 1);
  
  // Generate category scores with slightly more sophisticated logic
  const randomFactor = 0.3; // Reduce randomness for more consistent results
  const categories = {
    hate: Math.min(score + (Math.random() * randomFactor * score), 1),
    harassment: Math.min(score + (Math.random() * randomFactor * score), 1),
    violence: Math.min(score + (Math.random() * randomFactor * score), 1),
    selfHarm: Math.min(score * 0.5 + (Math.random() * randomFactor * score), 1),
    sexual: Math.min(score * 0.4 + (Math.random() * randomFactor * score), 1),
    profanity: Math.min(score * 1.2 + (Math.random() * randomFactor * score), 1),
  };
  
  // Generate a more consistent confidence score
  const confidence = 0.7 + (score * 0.3);
  
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

// Enhanced risk level assessment with more granular thresholds
export const getRiskLevel = (score: number): {
  level: 'low' | 'medium' | 'high' | 'critical';
  color: string;
} => {
  if (score < 0.2) {
    return { level: 'low', color: 'bg-green-500' };
  } else if (score < 0.4) {
    return { level: 'medium', color: 'bg-yellow-500' };
  } else if (score < 0.7) {
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

// Enhanced suggestions with more specific feedback
export const generateSuggestions = (text: string, flaggedWords: string[]): string[] => {
  if (flaggedWords.length === 0) return [];
  
  const suggestions = [];
  
  if (flaggedWords.length > 0) {
    suggestions.push("Consider revising terms that might be perceived as negative or harmful");
  }
  
  if (flaggedWords.length === 1) {
    suggestions.push(`Your message contains a potentially problematic term: "${flaggedWords[0]}"`);
  } else if (flaggedWords.length > 1) {
    suggestions.push(`Your message contains ${flaggedWords.length} potentially harmful terms`);
  }
  
  suggestions.push("Try using more neutral language to express your opinion");
  
  if (flaggedWords.length > 3) {
    suggestions.push("This content may violate community guidelines. Consider a complete revision.");
  }
  
  return suggestions;
};
