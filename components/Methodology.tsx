import React from 'react';

const Methodology: React.FC = () => {
  return (
    <section id="method" className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Method: Non-Negative Velocity Fields</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">The Problem</h3>
              <p className="text-slate-600">
                Standard Flow Matching learns a velocity field <i>v<sub>&theta;</sub></i> that moves data from noise to target. Without constraints, the trajectory <i>x<sub>t</sub></i> often drifts into negative space (<i>x</i> &lt; 0), violating the biological reality of gene expression counts.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">The BioFlow Solution</h3>
              <p className="text-blue-800">
                 We re-parameterize the velocity field to ensure the trajectory stays within the non-negative orthant &#8477;<sub>&ge;0</sub> at all times <i>t</i> &in; [0, 1].
              </p>
              <div className="mt-4 bg-white/60 p-4 rounded text-center font-mono text-sm text-blue-900 overflow-x-auto">
                {`v_{\\theta}(x_t, t) \\ge -\\frac{x_t}{\\Delta t}`}
              </div>
            </div>
          </div>

          <div className="relative aspect-video bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col">
             {/* Schematic representation of Figure 1 */}
             <div className="flex-1 flex relative">
                <div className="w-1/2 border-r border-slate-100 p-4 flex flex-col items-center justify-center">
                    <span className="text-xs font-bold text-red-500 mb-2 uppercase tracking-wide">Standard Flow</span>
                    <div className="w-32 h-24 border-b-2 border-slate-300 relative">
                        {/* Trajectory dipping below line */}
                        <svg className="absolute inset-0 w-full h-full overflow-visible">
                            <path d="M 0 10 Q 50 120 128 50" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
                            <circle cx="0" cy="10" r="3" fill="#94a3b8" />
                            <circle cx="128" cy="50" r="3" fill="#3b82f6" />
                        </svg>
                        <div className="absolute -bottom-6 w-full text-center text-xs text-slate-400">Negative Space</div>
                    </div>
                </div>
                <div className="w-1/2 p-4 flex flex-col items-center justify-center bg-blue-50/30">
                    <span className="text-xs font-bold text-green-600 mb-2 uppercase tracking-wide">BioFlow (Ours)</span>
                    <div className="w-32 h-24 border-b-2 border-slate-300 relative">
                        {/* Trajectory bouncing or curving */}
                        <svg className="absolute inset-0 w-full h-full overflow-visible">
                             <path d="M 0 10 Q 60 80 128 50" fill="none" stroke="#10b981" strokeWidth="2" />
                             <circle cx="0" cy="10" r="3" fill="#94a3b8" />
                             <circle cx="128" cy="50" r="3" fill="#3b82f6" />
                        </svg>
                    </div>
                </div>
             </div>
             <div className="bg-slate-50 px-4 py-2 text-xs text-slate-500 text-center border-t border-slate-100">
                Figure 1: Comparison of Generative Probability Paths
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;