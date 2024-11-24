import React from 'react';
import { Loader2 } from 'lucide-react';

interface NewsAnalyzerProps {
  newsText: string;
  loading: boolean;
  onNewsTextChange: (text: string) => void;
  onAnalyze: () => void;
}

export const NewsAnalyzer = ({ newsText, loading, onNewsTextChange, onAnalyze }: NewsAnalyzerProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <textarea
        value={newsText}
        onChange={(e) => onNewsTextChange(e.target.value)}
        placeholder="Pega o escribe aquí el artículo de noticias..."
        className="w-full h-48 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
      />
      <button
        onClick={onAnalyze}
        disabled={loading || !newsText.trim()}
        className="mt-4 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Analizando...
          </>
        ) : (
          'Analizar Noticia'
        )}
      </button>
    </div>
  );
};