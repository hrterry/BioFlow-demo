import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  ZAxis,
  LabelList,
  Cell
} from 'recharts';
import { NEGATIVE_VALUES_DATA, SCATTER_DATA } from '../constants';

const ResultsCharts: React.FC = () => {
  return (
    <section id="results" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Quantitative Results</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Chart 1: Accuracy vs Efficiency */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Accuracy vs. Efficiency</h3>
            <p className="text-sm text-slate-500 mb-6">Trade-off between predictive accuracy (PCC) and computational cost. Top-left is better.</p>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    type="number" 
                    dataKey="x" 
                    name="GPU Hours" 
                    unit="h" 
                    label={{ value: 'Training Cost (GPU Hours) →', position: 'bottom', offset: 0, fontSize: 12 }}
                    domain={[0, 250]} // Cutting off STEM for readability
                  />
                  <YAxis 
                    type="number" 
                    dataKey="y" 
                    name="PCC" 
                    label={{ value: 'Accuracy (PCC) ↑', angle: -90, position: 'insideLeft' }}
                    domain={[0.15, 0.35]}
                  />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} 
                    content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                            <div className="bg-slate-800 text-white text-xs p-2 rounded shadow-lg">
                            <p className="font-bold">{data.name}</p>
                            <p>PCC: {data.y}</p>
                            <p>Time: {data.x}h</p>
                            </div>
                        );
                        }
                        return null;
                    }}
                  />
                  <Scatter name="Models" data={SCATTER_DATA} fill="#8884d8">
                    {SCATTER_DATA.map((entry, index) => (
                         <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                    <LabelList dataKey="name" position="top" style={{ fontSize: '10px', fill: '#64748b' }} />
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-400 mt-2 text-center">* Note: STEM (4000h) is omitted from X-axis for scale.</p>
          </div>

          {/* Chart 2: Negative Values */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Biological Validity Violation</h3>
            <p className="text-sm text-slate-500 mb-6">Percentage of generated values that are negative (biologically impossible).</p>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={NEGATIVE_VALUES_DATA}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                  <XAxis type="number" domain={[0, 100]} unit="%" />
                  <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 12}} />
                  <Tooltip 
                     cursor={{fill: 'transparent'}}
                     contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: 'white' }}
                     itemStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="value" name="% Negative Values" radius={[0, 4, 4, 0]} barSize={30}>
                    {NEGATIVE_VALUES_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.name === 'BioFlow' ? '#3b82f6' : '#ef4444'} />
                    ))}
                    <LabelList dataKey="value" position="right" formatter={(val: number) => `${val}%`} style={{ fill: '#64748b', fontSize: '12px', fontWeight: 'bold' }} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResultsCharts;