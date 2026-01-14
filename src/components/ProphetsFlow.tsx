import { useCallback, useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ReactFlow,
    type Node,
    type Edge,
    Controls,
    Background,
    MiniMap,
    useNodesState,
    useEdgesState,
    BackgroundVariant,
    Panel,
    type NodeTypes,
    MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { prophets, relationships, type ProphetInfo } from '../data/prophets';
import ProphetNode from './ProphetNode';

const nodeTypes: NodeTypes = {
    prophetNode: ProphetNode,
};

// Calculate positions using a hierarchical layout
// Calculate positions using a fixed grid layout for better tree structure
const calculateNodePositions = (): Node[] => {
    const horizontalSpacing = 400;
    const verticalSpacing = 300;

    // Define explicit grid positions { col, row }
    // col 0 = Center (Main/Ibrahim)
    // col -1 = Left (Ismail line)
    // col 1 = Right (Ishaq line)
    const layout: Record<string, { col: number; row: number }> = {
        '1': { col: 0, row: 0 },   // Adam
        '2': { col: 0, row: 1 },   // Idris
        '3': { col: 0, row: 2 },   // Nuh
        '4': { col: 0, row: 3 },   // Hud
        '5': { col: 0, row: 4 },   // Salih
        '6': { col: 0, row: 5 },   // Ibrahim
        '7': { col: 1.5, row: 5 }, // Lut (Nephew, side)

        // Split
        '8': { col: -1, row: 6 },  // Ismail (Left)
        '9': { col: 1, row: 6 },   // Ishaq (Right)

        // Ishaq line continues on Right
        '10': { col: 1, row: 7 },  // Yaqub
        '11': { col: 1, row: 8 },  // Yusuf
        '12': { col: 2.5, row: 8 }, // Ayyub (Relative/Side)
        '13': { col: 2.5, row: 9 }, // Shuayb (Madyan/Side)

        // Musa Era
        '14': { col: 1, row: 10 }, // Musa
        '15': { col: 2, row: 10 }, // Harun

        // Kings / Later Israelites
        '16': { col: 1, row: 11 }, // Dhul-Kifl
        '17': { col: 1, row: 12 }, // Dawud
        '18': { col: 1, row: 13 }, // Sulayman

        '19': { col: 1, row: 14 }, // Ilyas
        '20': { col: 2, row: 14 }, // Al-Yasa
        '21': { col: 1, row: 15 }, // Yunus

        '22': { col: 1, row: 16 }, // Zakariya
        '23': { col: 1, row: 17 }, // Yahya
        '24': { col: 1, row: 18 }, // Isa

        // Final Prophet - Back to Center/Left connection
        '25': { col: 0, row: 20 }, // Muhammad (SAW)
    };

    return prophets.map(prophet => {
        const pos = layout[prophet.id] || { col: 0, row: 0 };
        return {
            id: prophet.id,
            type: 'prophetNode',
            position: {
                x: pos.col * horizontalSpacing,
                y: pos.row * verticalSpacing,
            },
            data: prophet,
        };
    });
};

const createEdges = (): Edge[] => {
    return relationships.map((rel, index) => {
        const edgeColors = {
            'father-son': '#10b981',
            'brothers': '#3b82f6',
            'uncle-nephew': '#8b5cf6',
            'chronological': '#6b7280',
            'same-era': '#f59e0b',
        };

        return {
            id: `edge-${index}`,
            source: rel.source,
            target: rel.target,
            type: 'smoothstep',
            animated: rel.type !== 'chronological',
            style: {
                stroke: edgeColors[rel.type],
                strokeWidth: 3,
                opacity: 0.7,
            },
            markerEnd: {
                type: MarkerType.ArrowClosed,
                color: edgeColors[rel.type],
            },
            label: rel.label,
            labelStyle: {
                fill: edgeColors[rel.type],
                fontWeight: 600,
                fontSize: 12,
            },
            labelBgStyle: {
                fill: 'rgba(255, 255, 255, 0.9)',
            },
        };
    });
};

export default function ProphetsFlow() {
    const navigate = useNavigate();
    const initialNodes = useMemo(() => calculateNodePositions(), []);
    const initialEdges = useMemo(() => createEdges(), []);

    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);
    const [selectedProphet, setSelectedProphet] = useState<ProphetInfo | null>(null);

    // Responsive states
    const [isMobile, setIsMobile] = useState(false);
    const [isLegendOpen, setIsLegendOpen] = useState(true);

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            // Auto-collapse legend on mobile
            if (mobile) setIsLegendOpen(false);
            else setIsLegendOpen(true);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const onNodeClick = useCallback((_event: React.MouseEvent, node: Node) => {
        setSelectedProphet(node.data as ProphetInfo);
    }, []);

    return (
        <div className="w-full h-[100dvh] bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <ReactFlow
                nodesDraggable={false}
                nodesConnectable={false}
                elementsSelectable={true}
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onNodeClick={onNodeClick}
                nodeTypes={nodeTypes}
                onInit={(instance) => {
                    // Start focused on the top (Adam)
                    // Move content LEFT (Center X positive) and UP (Center Y positive/large)
                    instance.setCenter(150, 300, { zoom: 0.75 });
                }}
                minZoom={0.1}
                maxZoom={1.5}
                className="font-sans"
            >
                <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
                <Controls showInteractive={!isMobile} />
                <MiniMap
                    nodeStrokeWidth={3}
                    zoomable
                    pannable
                    position={isMobile ? "top-right" : "bottom-right"}
                    className="!bg-white/90 dark:!bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl m-4 overflow-hidden"
                    nodeColor="#059669"
                    maskColor="rgba(6, 78, 59, 0.5)"
                    nodeStrokeColor="#d97706"
                />

                <Panel position="top-left" className="m-2 md:m-4 font-bangla">
                    <div className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-2xl transition-all duration-300 overflow-hidden ${isLegendOpen ? 'p-4 md:p-6 max-w-[280px] md:max-w-md' : 'p-2 w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-white dark:hover:bg-gray-800'}`}>
                        {isLegendOpen ? (
                            <>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg text-white">
                                            <span className="text-xl md:text-2xl">📖</span>
                                        </div>
                                        <div>
                                            <h1 className="text-lg md:text-2xl font-bold text-emerald-900 dark:text-emerald-100 leading-tight">
                                                ইসলামের নবীগণ
                                            </h1>
                                            <p className="text-[10px] md:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                                                ২৫ জন নবীর তালিকা
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsLegendOpen(false)}
                                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                                    </button>
                                </div>

                                <div className="space-y-2 text-xs md:text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-0.5 md:w-8 bg-emerald-500"></div>
                                        <span className="text-gray-700 dark:text-gray-300">পিতা-পুত্র</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-0.5 md:w-8 bg-blue-500"></div>
                                        <span className="text-gray-700 dark:text-gray-300">ভাই</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-0.5 md:w-8 bg-purple-500"></div>
                                        <span className="text-gray-700 dark:text-gray-300">চাচা-ভাতিজা</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-0.5 md:w-8 bg-gray-500"></div>
                                        <span className="text-gray-700 dark:text-gray-300">কালানুক্রমিক</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-0.5 md:w-8 bg-amber-500"></div>
                                        <span className="text-gray-700 dark:text-gray-300">সমসাময়িক</span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <button onClick={() => setIsLegendOpen(true)} className="w-full h-full flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                <span className="text-2xl">📖</span>
                            </button>
                        )}
                    </div>
                </Panel>

                {selectedProphet && (
                    <Panel position={isMobile ? "bottom-center" : "top-right"} className="w-[95%] md:w-auto m-2 md:m-4 font-bangla z-50">
                        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-3xl shadow-2xl p-4 md:p-6 md:max-w-md animate-in fade-in slide-in-from-bottom md:slide-in-from-right duration-300 max-h-[60vh] md:max-h-[85vh] overflow-y-auto">
                            <div className="flex items-start justify-between mb-3 md:mb-4">
                                <div className="flex-1">
                                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-0">
                                        {selectedProphet.banglaName}
                                    </h2>

                                    <p className="text-2xl md:text-3xl font-arabic text-emerald-600 dark:text-emerald-400 mb-1 md:mb-2">
                                        {selectedProphet.arabicName}
                                    </p>
                                    {selectedProphet.title && (
                                        <p className="text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1 md:mb-2">
                                            {selectedProphet.title}
                                        </p>
                                    )}
                                    {selectedProphet.era && (
                                        <p className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400">
                                            সময়কাল: {selectedProphet.era}
                                        </p>
                                    )}
                                </div>
                                <button
                                    onClick={() => setSelectedProphet(null)}
                                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors p-1"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3 md:mb-4 leading-relaxed">
                                {selectedProphet.description}
                            </p>

                            {selectedProphet.keyEvents && selectedProphet.keyEvents.length > 0 && (
                                <div className="mb-3 md:mb-4">
                                    <h3 className="text-xs md:text-sm font-semibold text-gray-900 dark:text-white mb-1 md:mb-2">
                                        প্রধান ঘটনাবলী:
                                    </h3>
                                    <ul className="space-y-1">
                                        {selectedProphet.keyEvents.map((event, index) => (
                                            <li key={index} className="text-xs md:text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                                                <span className="text-emerald-500 mt-1">•</span>
                                                <span>{event}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="pt-3 md:pt-4 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400 mb-3">
                                    কুরআনে উল্লেখ: <span className="font-bold text-emerald-600 dark:text-emerald-400">{selectedProphet.mentioned.toLocaleString('bn-BD')} বার</span>
                                </p>
                                <button
                                    onClick={() => navigate(`/prophet/${selectedProphet.id}`)}
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-2.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group"
                                >
                                    <span>আরও বিস্তারিত জানুন</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </Panel>
                )}
            </ReactFlow>
        </div>
    );
}
