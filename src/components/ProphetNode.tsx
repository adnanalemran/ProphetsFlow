import { memo } from 'react';
import { Handle, Position, type NodeProps, type Node } from '@xyflow/react';
import type { ProphetInfo } from '../data/prophets';

type ProphetNode = Node<ProphetInfo>;

function ProphetNode({ data }: NodeProps<ProphetNode>) {
    const prophet = data;

    // Determine node color based on significance
    const getNodeStyle = () => {
        // Special prophets with unique titles
        if (prophet.id === '25') { // Muhammad (SAW)
            return 'from-amber-400 to-amber-600 ring-4 ring-amber-300 dark:ring-amber-700';
        }
        if (prophet.id === '6') { // Ibrahim
            return 'from-emerald-400 to-emerald-600 ring-2 ring-emerald-300 dark:ring-emerald-700';
        }
        if (prophet.id === '14') { // Musa
            return 'from-blue-400 to-blue-600 ring-2 ring-blue-300 dark:ring-blue-700';
        }
        if (prophet.id === '24') { // Isa
            return 'from-purple-400 to-purple-600 ring-2 ring-purple-300 dark:ring-purple-700';
        }
        if (prophet.id === '1') { // Adam
            return 'from-rose-400 to-rose-600 ring-2 ring-rose-300 dark:ring-rose-700';
        }

        // Default style
        return 'from-cyan-400 to-cyan-600';
    };

    return (
        <div className="group relative">
            <Handle
                type="target"
                position={Position.Top}
                className="w-3 h-3 !bg-emerald-500 border-2 border-white dark:border-gray-800"
            />

            <div className={`
        relative bg-gradient-to-br ${getNodeStyle()}
        rounded-3xl 
        shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.2)]
        transition-all duration-300 ease-out
        hover:scale-105 hover:-translate-y-1
        cursor-pointer
        min-w-[280px] max-w-[280px]
        backdrop-blur-sm
      `}>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative p-4">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold font-bangla text-white drop-shadow-md mb-0 leading-tight">
                                {prophet.banglaName}
                            </h3>
                            <p className="text-2xl font-arabic text-white/95 drop-shadow leading-tight">
                                {prophet.arabicName}
                            </p>
                        </div>
                        <div className="relative w-10 h-10 flex items-center justify-center">
                            <div className="absolute inset-0 bg-white/20 backdrop-blur-md border border-white/40 rotate-45 rounded-md shadow-sm group-hover:rotate-180 transition-transform duration-700"></div>
                            <span className="relative z-10 text-xs font-bold text-white drop-shadow-md">
                                {Number(prophet.id).toLocaleString('bn-BD')}
                            </span>
                        </div>
                    </div>

                    {/* Title */}
                    {prophet.title && (
                        <div className="bg-white/25 backdrop-blur-sm rounded-lg px-3 py-1.5 mb-2">
                            <p className="text-xs font-semibold font-bangla text-white text-center">
                                {prophet.title}
                            </p>
                        </div>
                    )}

                    {/* Era */}
                    {prophet.era && (
                        <div className="flex items-center gap-1.5 mb-2">
                            <svg className="w-3.5 h-3.5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-xs text-white/90 font-medium font-bangla">
                                {prophet.era}
                            </p>
                        </div>
                    )}

                    {/* Quran mentions */}
                    <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <p className="text-xs text-white/90 font-medium font-bangla">
                            কুরআনে উল্লেখ: {prophet.mentioned.toLocaleString('bn-BD')} বার
                        </p>
                    </div>

                    {/* Hover tooltip */}
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap">
                            বিস্তারিত জানতে ক্লিক করুন
                            <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-gray-900 rotate-45"></div>
                        </div>
                    </div>
                </div>
            </div>

            <Handle
                type="source"
                position={Position.Bottom}
                className="w-3 h-3 !bg-emerald-500 border-2 border-white dark:border-gray-800"
            />
        </div>
    );
}

export default memo(ProphetNode);
