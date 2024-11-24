import React from 'react';
import { ShieldCheck, ShieldX, AlertCircle } from 'lucide-react';

interface ResultDisplayProps {
  result: 'real' | 'fake' | null;
  confidence: number;
  details?: {
    sensationalism: number;
    credibility: number;
    emotionalLanguage: number;
  };
}

export const ResultDisplay = ({ result, confidence, details }: ResultDisplayProps) => {
  if (!result) return null;

  const getIndicatorColor = (value: number) => {
    if (value < 0.3) return 'text-green-500';
    if (value < 0.6) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className={`rounded-xl p-6 ${
      result === 'real' 
        ? 'bg-green-50 border border-green-200' 
        : 'bg-red-50 border border-red-200'
    }`}>
      <div className="flex items-start gap-3">
        {result === 'real' ? (
          <ShieldCheck className="w-8 h-8 text-green-500 flex-shrink-0" />
        ) : (
          <ShieldX className="w-8 h-8 text-red-500 flex-shrink-0" />
        )}
        <div className="flex-grow">
          <h3 className={`text-lg font-semibold ${
            result === 'real' ? 'text-green-800' : 'text-red-800'
          }`}>
            {result === 'real' ? 'Probablemente Noticia Verdadera' : 'Posible Noticia Falsa'}
          </h3>
          <p className={`mt-1 ${
            result === 'real' ? 'text-green-700' : 'text-red-700'
          }`}>
            {result === 'real' 
              ? 'Este artículo parece provenir de una fuente legítima con información creíble.'
              : 'Este artículo muestra características comúnmente asociadas con la desinformación.'}
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Nivel de confianza: {(confidence * 100).toFixed(1)}%
          </p>

          {details && (
            <div className="mt-4 border-t border-gray-200 pt-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Análisis Detallado
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Sensacionalismo:</span>
                  <span className={`text-sm font-medium ${getIndicatorColor(details.sensationalism)}`}>
                    {(details.sensationalism * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Credibilidad:</span>
                  <span className={`text-sm font-medium ${getIndicatorColor(1 - details.credibility)}`}>
                    {(details.credibility * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Lenguaje Emocional:</span>
                  <span className={`text-sm font-medium ${getIndicatorColor(details.emotionalLanguage)}`}>
                    {(details.emotionalLanguage * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};