export interface MethodData {
  id: string;
  name: string;
  type: 'ours' | 'baseline' | 'gt';
  hasNegativeValues: boolean;
  pccScore: number;
  gpuHours: number;
  description: string;
  imageUrl: string; // Placeholder for the actual heatmap
}

export interface ChartDataPoint {
  name: string;
  x: number; // GPU Hours
  y: number; // PCC Accuracy
  z: number; // Bubble size (optional)
  fill: string;
}

export interface NegativeValueData {
  name: string;
  value: number; // Percentage of negative values
  fill: string;
}