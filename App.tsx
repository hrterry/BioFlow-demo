import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Abstract from './components/Abstract';
import Methodology from './components/Methodology';
import VisualizationComparisons from './components/VisualizationComparisons';
import ResultsCharts from './components/ResultsCharts';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <Abstract />
      <Methodology />
      <VisualizationComparisons />
      <ResultsCharts />
      
      <footer className="bg-slate-900 py-12 text-slate-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">BioFlow</h3>
              <p className="text-sm max-w-xs">
                Biologically Valid Generative Flow for Histology-Conditioned Spatial Transcriptomics Prediction.
              </p>
            </div>
            <div className="text-sm">
              <h4 className="text-white font-bold mb-4">Citation</h4>
              <pre className="bg-slate-800 p-4 rounded overflow-x-auto text-xs font-mono">
{`@inproceedings{anonymous2026bioflow,
  title={BioFlow: Biologically Valid Generative Flow...},
  author={Anonymous},
  booktitle={CVPR},
  year={2026}
}`}
              </pre>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs">
            &copy; 2026 BioFlow Research Group. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;