import React from 'react';

const Abstract: React.FC = () => {
  return (
    <section id="abstract" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Abstract</h2>
        <div className="prose prose-lg text-slate-600 mx-auto text-justify">
          <p className="mb-4">
            Spatial transcriptomics (ST) prediction from histology images has recently benefited from generative paradigms such as diffusion and flow-matching models, which capture the multimodal and stochastic nature of gene expression. However, we identify a critical biological failure mode shared by these approaches: <strong>unconstrained generative processes often produce negative gene expression values</strong>, which are biologically impossible and degrade downstream utility.
          </p>
          <p className="mb-4">
            This failure is intrinsic to unconstrained continuous-generation dynamics when applied to open-set, non-negative molecular counts. To address this problem, we introduce <strong>BioFlow (Biologically Valid Generative Flow)</strong>, a novel conditional velocity-field formulation that guarantees non-negative support throughout the entire generative trajectory, enabling faster convergence and meaningful generative probability paths.
          </p>
          <p>
            Extensive experiments demonstrate that BioFlow achieves an average PCC improvement of more than <strong>25%</strong> over the strongest baseline, while running <strong>4× to 100× faster</strong> than flow-based STFlow and over <strong>10,000× faster</strong> than diffusion-based STEM.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Abstract;