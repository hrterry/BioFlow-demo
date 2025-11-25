import { MethodData, ChartDataPoint, NegativeValueData } from './types';

// Based on Table 1, Table 3, and Figure 2 from the PDF
export const SCATTER_DATA: ChartDataPoint[] = [
  { name: 'BioFlow (Ours)', x: 0.3, y: 0.287, z: 100, fill: '#3b82f6' }, // Blue
  { name: 'STFlow', x: 17, y: 0.226, z: 80, fill: '#10b981' }, // Emerald
  { name: 'TRIPLEX', x: 223, y: 0.177, z: 60, fill: '#f59e0b' }, // Amber
  { name: 'MERGE', x: 10.5, y: 0.209, z: 60, fill: '#64748b' }, // Slate
  // STEM is an outlier in time (4000 hours), usually plotted with a broken axis or log scale. 
  // We represent it here for relative positioning in a local chart context or exclude/note it.
];

// Based on Figure 5
export const NEGATIVE_VALUES_DATA: NegativeValueData[] = [
  { name: 'BioFlow', value: 0, fill: '#3b82f6' },
  { name: 'STEM', value: 32, fill: '#ef4444' },
  { name: 'STFlow', value: 67, fill: '#ef4444' },
  { name: 'TRIPLEX', value: 42, fill: '#ef4444' },
  { name: 'MERGE', value: 39, fill: '#ef4444' },
];

export const VIS_CONFIG = {
  // Updated to match user's specific file naming convention
  // File format: demo/MEND157_PLA2G2A_BioFlow.png
  slides: [
    { id: 'MEND157', label: 'MEND157', name: 'MEND157' }
  ],
  genes: [
    { id: 'PLA2G2A', label: 'PLA2G2A' }
  ],
  methods: [
    // filename_suffix matches the exact part of the filename provided by the user
    { id: 'gt', label: 'Ground Truth', role: 'reference', filename_suffix: 'ground_truth' },
    { id: 'bioflow', label: 'BioFlow (Ours)', role: 'ours', filename_suffix: 'BioFlow' },
    { id: 'merge', label: 'MERGE', role: 'baseline', filename_suffix: 'MERGE' },
    { id: 'stem', label: 'STEM', role: 'baseline', filename_suffix: 'STEM' },
    { id: 'stflow', label: 'STFlow', role: 'baseline', filename_suffix: 'STFlow' },
    { id: 'triplex', label: 'TRIPLEX', role: 'baseline', filename_suffix: 'TRIPLEX' },
  ]
};

// Legacy array kept for type compatibility if needed
export const METHODS: MethodData[] = [
  {
    id: 'gt',
    name: 'Ground Truth',
    type: 'gt',
    hasNegativeValues: false,
    pccScore: 1.0,
    gpuHours: 0,
    description: 'Actual spatial transcriptomics data (reference).',
    imageUrl: 'https://picsum.photos/id/10/800/800', 
  },
];