import React, { useState } from 'react';
import { Header } from './components/Header';
import { WarningBanner } from './components/WarningBanner';
import { NewsAnalyzer } from './components/NewsAnalyzer';
import { ResultDisplay } from './components/ResultDisplay';
import { analyzeNews } from './services/api';

function App() {
  const [newsText, setNewsText] = useState('');
  const [result, setResult] = useState<'real' | 'fake' | null>(null);
  const [confidence, setConfidence] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyzeNews = async () => {
    if (!newsText.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const analysisResult = await analyzeNews(newsText);
      console.log('Analysis Result:', analysisResult);
      setResult(analysisResult.result);
      setConfidence(analysisResult.confidence);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al analizar la noticia');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Header />
        <WarningBanner />
        
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        <NewsAnalyzer
          newsText={newsText}
          loading={loading}
          onNewsTextChange={setNewsText}
          onAnalyze={handleAnalyzeNews}
        />

        <ResultDisplay 
          result={result} 
          confidence={confidence}
        />
      </div>
    </div>
  );
}

export default App;