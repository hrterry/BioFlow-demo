import React, { useState, useEffect } from 'react';
import { VIS_CONFIG } from '../constants';

// Sub-component to handle individual image loading states with auto-retry for extensions
const MethodImage = ({ basePath, alt, role }: { basePath: string; alt: string; role: string }) => {
  const [error, setError] = useState(false);
  const [tryIndex, setTryIndex] = useState(0);
  
  // Supported extensions to try in order
  const EXTENSIONS = ['.png', '.PNG', '.jpg', '.jpeg'];

  // Reset state when the base path changes (i.e. different slide/gene selected)
  useEffect(() => {
    setError(false);
    setTryIndex(0);
  }, [basePath]);

  const currentSrc = `${basePath}${EXTENSIONS[tryIndex]}`;

  const handleError = () => {
    const nextIndex = tryIndex + 1;
    if (nextIndex < EXTENSIONS.length) {
      // Try next extension
      setTryIndex(nextIndex);
    } else {
      // All extensions failed
      setError(true);
    }
  };

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 text-slate-500 text-xs p-4 text-center border-2 border-dashed border-red-200 rounded-lg">
        <svg className="w-8 h-8 text-red-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span className="font-bold text-slate-700 mb-1">Image Not Found</span>
        <div className="flex flex-col gap-1 mt-1 w-full">
          <span className="text-[10px] text-slate-400">Tried:</span>
          {EXTENSIONS.map(ext => (
            <span key={ext} className="font-mono text-[9px] bg-white p-0.5 rounded border border-slate-100 truncate text-left">
              ...{basePath.split('/').pop()}{ext}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className="w-full h-full object-contain"
      onError={handleError}
    />
  );
};

const VisualizationComparisons: React.FC = () => {
  // Initialize with the first available slide/gene from constants
  const [activeSlide, setActiveSlide] = useState(VIS_CONFIG.slides[0]?.id || 'MEND157');
  const [activeGene, setActiveGene] = useState(VIS_CONFIG.genes[0]?.id || 'PLA2G2A');

  // Generates the base filename (without extension)
  // Using import.meta.env.BASE_URL to support GitHub Pages deployment
  const getImageBasePath = (suffix: string) => {
    // Ensure base URL starts with / and ends with /
    let baseUrl = import.meta.env.BASE_URL || '/';
    if (!baseUrl.startsWith('/')) {
      baseUrl = '/' + baseUrl;
    }
    if (!baseUrl.endsWith('/')) {
      baseUrl = baseUrl + '/';
    }
    return `${baseUrl}demo/${activeSlide}_${activeGene}_${suffix}`;
  };

  return (
    <section id="visualization" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Qualitative Comparison & Failure Modes
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-6">
            Visual comparison across samples and marker genes.
            <br />
            BioFlow consistently prevents negative expression values while preserving spatial structure.
          </p>
          
          <div className="inline-flex items-center bg-red-50 border border-red-100 rounded-lg px-4 py-2 text-sm text-red-800">
            <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
            <strong>Legend:</strong>&nbsp;Red regions in the plots indicate negative values (biologically impossible).
          </div>
        </div>

        {/* Controls Container */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-10 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Slide Selector */}
            <div className="flex-1">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Select Sample
              </label>
              <div className="flex flex-wrap gap-2">
                {VIS_CONFIG.slides.map((slide) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlide(slide.id)}
                    className={`py-2 px-4 rounded-md text-sm font-bold transition-all duration-200 border ${
                      activeSlide === slide.id
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {slide.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Gene Selector */}
            <div className="md:w-1/3">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Select Marker Gene
              </label>
              <div className="flex flex-col gap-2">
                {VIS_CONFIG.genes.map((gene) => (
                  <button
                    key={gene.id}
                    onClick={() => setActiveGene(gene.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 border text-left flex justify-between items-center ${
                      activeGene === gene.id
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600'
                    }`}
                  >
                    <span>{gene.label}</span>
                    {activeGene === gene.id && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIS_CONFIG.methods.map((method) => {
            const isOurs = method.role === 'ours';
            const isRef = method.role === 'reference';
            const suffix = method.filename_suffix;
            const basePath = getImageBasePath(suffix);
            
            const cardClasses = `group relative flex flex-col rounded-xl overflow-hidden border-2 bg-white ${
              isOurs 
                ? 'border-blue-500 shadow-xl shadow-blue-50 order-2 lg:order-2' 
                : isRef 
                  ? 'border-green-500 shadow-md order-1 lg:order-1' 
                  : 'border-slate-100 shadow-sm hover:border-slate-300 order-3'
            }`;

            const headerClasses = `px-4 py-3 border-b flex justify-between items-center ${
               isOurs ? 'bg-blue-600 text-white' : isRef ? 'bg-green-600 text-white' : 'bg-slate-50 text-slate-700'
            }`;

            return (
              <div 
                key={method.id} 
                className={cardClasses}
              >
                {/* Method Label Header */}
                <div className={headerClasses}>
                  <span className="font-bold text-sm tracking-wide">{method.label}</span>
                  {isOurs && <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded uppercase tracking-wider font-bold">Ours</span>}
                  {isRef && <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded uppercase tracking-wider font-bold">Target</span>}
                </div>

                {/* Visualization Image */}
                <div className="aspect-square relative bg-slate-100">
                  {/* Using key={basePath} ensures the component resets state when the slide changes */}
                  <MethodImage 
                    basePath={basePath} 
                    alt={`${method.label} result`}
                    role={method.role}
                    key={basePath} 
                  />
                  
                  {/* Hover Overlay for Context */}
                  {method.role === 'baseline' && (
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-medium border border-red-200">
                        Baseline
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Caption / Stats Placeholder */}
                <div className="px-4 py-2 bg-white text-xs text-slate-400 border-t border-slate-100 flex justify-between">
                   <span>PCC: --</span> 
                   {method.role === 'baseline' && <span className="text-red-400">Contains negative values</span>}
                   {method.role === 'ours' && <span className="text-blue-600 font-medium">Valid Support</span>}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-slate-400 text-sm italic">
          <p>
            Loading images from: <span className="font-mono bg-slate-100 px-1 py-0.5 rounded mx-1 text-slate-600">{import.meta.env.BASE_URL || '/'}demo/</span> folder.
          </p>
        </div>

      </div>
    </section>
  );
};

export default VisualizationComparisons;