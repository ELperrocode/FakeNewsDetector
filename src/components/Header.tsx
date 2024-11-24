import React from 'react';
import { Newspaper } from 'lucide-react';

export const Header = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center items-center gap-2 mb-4">
        <Newspaper className="w-8 h-8 text-indigo-600" />
        <h1 className="text-4xl font-bold text-gray-900">Detector de Noticias Falsas</h1>
      </div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Analiza artículos de noticias utilizando IA avanzada para determinar su autenticidad.
      </p>
    </div>
  );
};