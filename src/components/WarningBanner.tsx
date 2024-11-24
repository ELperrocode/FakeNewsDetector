import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const WarningBanner = () => {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
        <div>
          <h2 className="text-sm font-semibold text-amber-800">Aviso Importante</h2>
          <p className="text-sm text-amber-700 mt-1">
            Esta herramienta utiliza IA para analizar el contenido de las noticias. Los resultados pueden tener sesgos y limitaciones.
            Siempre verifica la información con múltiples fuentes confiables.
          </p>
        </div>
      </div>
    </div>
  );
};