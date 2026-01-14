import { useParams, Link } from 'react-router-dom';
import { prophets } from '../data/prophets';
import { useState, useEffect } from 'react';
import { prophetStories } from '../components/prophetStories';

export default function ProphetDetails() {
    const { id } = useParams<{ id: string }>();
    const prophet = prophets.find(p => p.id === id);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!prophet) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-bangla">
                <h1 className="text-3xl font-bold mb-4">নবী খুঁজে পাওয়া যায়নি</h1>
                <Link to="/" className="text-emerald-600 hover:text-emerald-700 underline">
                    টাইমলাইনে ফিরে যান
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bangla pb-20 bg-islamic-pattern">
            {/* Sticky Header - Shows on scroll */}
            <div
                className={`fixed mx-4  top-0 left-0 right-0 z-50 bg-white/75 dark:bg-gray-800/75 backdrop-blur-md  border-b border-l border-r border-amber-500/20 transition-all duration-300 ${isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                    }`}
            >

                <div className="container mx-auto px-4 py-1.5 ">
                    <div className="text-center flex items-center justify-center gap-4">
                        <h2 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                            {prophet.banglaName}
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-arabic">
                            {prophet.arabicName}
                        </p>

                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="relative h-[40vh]  bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>

                <div className=" top-[-35px] relative z-10 text-center text-white px-4 animate-in fade-in zoom-in duration-500">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                        {prophet.banglaName}
                    </h1>
                    <p className="text-4xl md:text-4xl font-arabic mb-4 opacity-90">
                        {prophet.arabicName}
                    </p>
                    {prophet.title && (
                        <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/30">
                            <p className="text-xl md:text-2xl font-semibold">
                                {prophet.title}
                            </p>
                        </div>
                    )}
                </div>

                {/* Back Button */}
                <Link
                    to="/"
                    className="absolute top-6 left-6 flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-4 py-2 rounded-full transition-all border border-white/30 z-20"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span>ফিরে যান</span>
                </Link>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-4 -mt-20 relative z-10">
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-t-[40px] rounded-b-3xl shadow-2xl p-6 md:p-10 border-2 border-amber-500/30 dark:border-amber-500/30   mx-auto">

                    {/* Key Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        {/* Era */}
                        <div className="flex items-center gap-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800/30">
                            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center text-2xl text-emerald-600 dark:text-emerald-400">
                                ⏳
                            </div>
                            <div>
                                <h3 className="text-emerald-800 dark:text-emerald-300 font-semibold mb-1 opacity-75 text-sm">সময়কাল</h3>
                                <p className="text-gray-900 dark:text-white font-medium text-lg">
                                    {prophet.era}
                                </p>
                            </div>
                        </div>

                        {/* Mentions */}
                        <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/30">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center text-2xl text-blue-600 dark:text-blue-400">
                                📖
                            </div>
                            <div>
                                <h3 className="text-blue-800 dark:text-blue-300 font-semibold mb-1 opacity-75 text-sm">পবিত্র কুরআনে উল্লেখ</h3>
                                <p className="text-gray-900 dark:text-white font-medium text-lg">
                                    মোট <span className="font-bold text-2xl">{prophet.mentioned.toLocaleString('bn-BD')}</span> বার
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-l-4 border-amber-500 pl-4">
                            সংক্ষিপ্ত পরিচিতি
                        </h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                            {prophet.description}
                        </p>
                    </div>

                    {/* Key Events */}
                    {prophet.keyEvents && prophet.keyEvents.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-amber-500 pl-4">
                                জীবনের প্রধান ঘটনাবলী
                            </h2>
                            <div className="space-y-4">
                                {prophet.keyEvents.map((event, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-4 group p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl transition-colors"
                                    >
                                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-full font-bold shadow-md">
                                            {Number(index + 1).toLocaleString('bn-BD')}
                                        </div>
                                        <p className="text-lg text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                            {event}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Full Story */}
                    {(() => {
                        const StoryComponent = prophetStories[prophet.id];
                        return StoryComponent ? <StoryComponent /> : null;
                    })()}

                    {/* References Section */}
                    {(prophet.quranRefs || prophet.hadithRefs) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700">

                            {/* Quran Refs */}
                            {prophet.quranRefs && (
                                <div>
                                    <h3 className="flex items-center gap-2 text-xl font-bold text-emerald-800 dark:text-emerald-400 mb-4">
                                        <span className="text-2xl">📖</span> আল-কুরআন
                                    </h3>
                                    <div className="space-y-4">
                                        {prophet.quranRefs.map((ref, i) => (
                                            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border-l-4 border-emerald-500">
                                                <p className="font-bold text-emerald-700 dark:text-emerald-500 text-sm mb-2 font-bangla">
                                                    {ref.surah}, আয়াত {ref.verse}
                                                </p>
                                                {ref.text && (
                                                    <p className="text-gray-600 dark:text-gray-300 italic text-sm font-serif">
                                                        "{ref.text}"
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Hadith Refs */}
                            {prophet.hadithRefs && (
                                <div>
                                    <h3 className="flex items-center gap-2 text-xl font-bold text-blue-800 dark:text-blue-400 mb-4">
                                        <span className="text-2xl">📜</span> আল-হাদিস
                                    </h3>
                                    <div className="space-y-4">
                                        {prophet.hadithRefs.map((hadith, i) => (
                                            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border-l-4 border-blue-500">
                                                <div className="flex gap-2">
                                                    <span className="text-blue-500 text-xl font-serif">❝</span>
                                                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-serif">
                                                        {hadith}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 z-50 bg-gradient-to-br from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
                    isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
                }`}
                aria-label="Scroll to top"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </div>
    );
}
