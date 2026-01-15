import { useParams, Link } from 'react-router-dom';
import { prophets } from '../data/prophets';
import { useState, useEffect } from 'react';
import { prophetStories } from '../components/prophetStories';
import { normalizeProphetName, getProphetUrlName, getProphetLikes, isProphetLiked, toggleProphetLike } from '../lib/utils';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

export default function ProphetDetails() {
    const { name } = useParams<{ name: string }>();
    const decodedName = name ? decodeURIComponent(name) : '';
    const normalizedName = normalizeProphetName(decodedName);
    const prophet = prophets.find(p => normalizeProphetName(p.banglaName) === normalizedName);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (prophet) {
            setIsLiked(isProphetLiked(prophet.id));
            setLikeCount(getProphetLikes(prophet.id));
        }
    }, [prophet]);

    const handleLikeToggle = () => {
        if (!prophet) return;
        const newLikedState = toggleProphetLike(prophet.id);
        setIsLiked(newLikedState);
        setLikeCount(getProphetLikes(prophet.id));
    };

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

    const prophetUrl = `/নবী/${getProphetUrlName(prophet.banglaName)}`;
    const keywords = [
        prophet.banglaName,
        prophet.arabicName,
        prophet.name,
        'ইসলাম',
        'নবী',
        'রাসূল',
        prophet.title || '',
        prophet.era || '',
    ].filter(Boolean).join(', ');

    const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const fullUrl = `${siteUrl}${prophetUrl}`;

    return (
        <>
            <SEO
                title={`${prophet.banglaName} - ${prophet.arabicName}`}
                description={`${prophet.description} ${prophet.era ? `সময়কাল: ${prophet.era}` : ''} ${prophet.title ? `উপাধি: ${prophet.title}` : ''} কুরআনে ${prophet.mentioned} বার উল্লেখিত।`}
                keywords={keywords}
                canonicalUrl={prophetUrl}
                ogType="article"
            />
            <StructuredData
                type="Person"
                data={{
                    name: prophet.banglaName,
                    alternateName: prophet.arabicName,
                    description: prophet.description,
                    jobTitle: prophet.title || 'নবী',
                    ...(prophet.era && { birthDate: prophet.era }),
                }}
            />
            <StructuredData
                type="Article"
                data={{
                    headline: `${prophet.banglaName} - ${prophet.arabicName}`,
                    description: prophet.description,
                    author: {
                        '@type': 'Organization',
                        name: 'ইসলামের নবীগণ',
                    },
                    publisher: {
                        '@type': 'Organization',
                        name: 'ইসলামের নবীগণ',
                    },
                    datePublished: prophet.era || '',
                    mainEntityOfPage: {
                        '@type': 'WebPage',
                        '@id': fullUrl,
                    },
                    inLanguage: 'bn-BD',
                }}
            />
            <StructuredData
                type="BreadcrumbList"
                data={{
                    itemListElement: [
                        {
                            '@type': 'ListItem',
                            position: 1,
                            name: 'হোম',
                            item: siteUrl,
                        },
                        {
                            '@type': 'ListItem',
                            position: 2,
                            name: prophet.banglaName,
                            item: fullUrl,
                        },
                    ],
                }}
            />
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bangla pb-20  ">
            {/* Sticky Header - Shows on scroll */}
            <div
                className={`container mx-auto fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                    }`}
            >
                <div className="bg-white/75 dark:bg-gray-800/75 backdrop-blur-md border-l border-r border-amber-500/20 mx-2 md:mx-4 py-2 md:py-3">
                    <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 px-2">
                        <h2 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
                            {prophet.banglaName}
                        </h2>
                        <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 font-arabic">
                            {prophet.arabicName}
                        </p>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="relative h-[35vh] sm:h-[40vh] bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>

                <div className="top-[-20px] sm:top-[-35px] relative z-10 text-center text-white px-3 sm:px-4 animate-in fade-in zoom-in duration-500">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 drop-shadow-lg">
                        {prophet.banglaName}
                    </h1>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-arabic mb-3 sm:mb-4 opacity-90">
                        {prophet.arabicName}
                    </p>
                    {prophet.title && (
                        <div className="inline-block bg-white/20 backdrop-blur-md px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-white/30">
                            <p className="text-base sm:text-xl md:text-2xl font-semibold">
                                {prophet.title}
                            </p>
                        </div>
                    )}
                </div>

                {/* Back Button */}
                <Link
                    to="/"
                    className="absolute top-3 left-3 sm:top-6 sm:left-6 flex items-center gap-1 sm:gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all border border-white/30 z-20 text-sm sm:text-base"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span className="hidden sm:inline">ফিরে যান</span>
                </Link>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-3 sm:px-4 -mt-12 sm:-mt-16 md:-mt-20 relative z-10">
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-t-[30px] sm:rounded-t-[40px] rounded-b-2xl sm:rounded-b-3xl shadow-2xl p-4 sm:p-6 md:p-10 border-2 border-amber-500/30 dark:border-amber-500/30 mx-auto">

                    {/* Key Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                        {/* Era */}
                        <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl sm:rounded-2xl border border-emerald-100 dark:border-emerald-800/30">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center text-xl sm:text-2xl text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                                ⏳
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-emerald-800 dark:text-emerald-300 font-semibold mb-1 opacity-75 text-xs sm:text-sm">সময়কাল</h3>
                                <p className="text-gray-900 dark:text-white font-medium text-base sm:text-lg break-words">
                                    {prophet.era}
                                </p>
                            </div>
                        </div>

                        {/* Mentions */}
                        <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl sm:rounded-2xl border border-blue-100 dark:border-blue-800/30">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center text-xl sm:text-2xl text-blue-600 dark:text-blue-400 flex-shrink-0">
                                📖
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-blue-800 dark:text-blue-300 font-semibold mb-1 opacity-75 text-xs sm:text-sm">পবিত্র কুরআনে উল্লেখ</h3>
                                <p className="text-gray-900 dark:text-white font-medium text-base sm:text-lg">
                                    মোট <span className="font-bold text-xl sm:text-2xl">{prophet.mentioned.toLocaleString('bn-BD')}</span> বার
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Like Button */}
                    <div className="flex justify-center mb-8 sm:mb-10">
                        <button
                            onClick={handleLikeToggle}
                            className={`group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                                isLiked
                                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-2 border-pink-300 dark:border-pink-600 hover:border-pink-400 dark:hover:border-pink-500'
                            }`}
                            aria-label={isLiked ? 'Unlike' : 'Like'}
                        >
                            <svg
                                className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${isLiked ? 'fill-current animate-pulse' : 'stroke-current fill-none'}`}
                                viewBox="0 0 24 24"
                                strokeWidth={isLiked ? 0 : 2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                            <span className="font-semibold text-sm sm:text-base">
                                {isLiked ? 'লাইক করা হয়েছে' : 'লাইক করুন'}
                            </span>
                            {likeCount > 0 && (
                                <span className={`text-xs sm:text-sm font-bold px-2 py-0.5 rounded-full ${
                                    isLiked
                                        ? 'bg-white/30 text-white'
                                        : 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400'
                                }`}>
                                    {likeCount.toLocaleString('bn-BD')}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Description */}
                    <div className="mb-8 sm:mb-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 border-l-4 border-amber-500 pl-3 sm:pl-4">
                            সংক্ষিপ্ত পরিচিতি
                        </h2>
                        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                            {prophet.description}
                        </p>
                    </div>

                    {/* Key Events */}
                    {prophet.keyEvents && prophet.keyEvents.length > 0 && (
                        <div className="mb-8 sm:mb-10">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 border-l-4 border-amber-500 pl-3 sm:pl-4">
                                জীবনের প্রধান ঘটনাবলী
                            </h2>
                            <div className="space-y-3 sm:space-y-4">
                                {prophet.keyEvents.map((event, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-3 sm:gap-4 group p-3 sm:p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg sm:rounded-xl transition-colors"
                                    >
                                        <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-full font-bold shadow-md text-sm sm:text-base">
                                            {Number(index + 1).toLocaleString('bn-BD')}
                                        </div>
                                        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12 bg-gray-50 dark:bg-gray-900/50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700">

                            {/* Quran Refs */}
                            {prophet.quranRefs && (
                                <div>
                                    <h3 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-emerald-800 dark:text-emerald-400 mb-3 sm:mb-4">
                                        <span className="text-xl sm:text-2xl">📖</span> আল-কুরআন
                                    </h3>
                                    <div className="space-y-3 sm:space-y-4">
                                        {prophet.quranRefs.map((ref, i) => (
                                            <div key={i} className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border-l-4 border-emerald-500">
                                                <p className="font-bold text-emerald-700 dark:text-emerald-500 text-xs sm:text-sm mb-2 font-bangla">
                                                    {ref.surah}, আয়াত {ref.verse}
                                                </p>
                                                {ref.text && (
                                                    <p className="text-gray-600 dark:text-gray-300 italic text-xs sm:text-sm font-serif">
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
                                    <h3 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-blue-800 dark:text-blue-400 mb-3 sm:mb-4">
                                        <span className="text-xl sm:text-2xl">📜</span> আল-হাদিস
                                    </h3>
                                    <div className="space-y-3 sm:space-y-4">
                                        {prophet.hadithRefs.map((hadith, i) => (
                                            <div key={i} className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border-l-4 border-blue-500">
                                                <div className="flex gap-2">
                                                    <span className="text-blue-500 text-lg sm:text-xl font-serif flex-shrink-0">❝</span>
                                                    <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed font-serif">
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
                className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-gradient-to-br from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white p-2.5 sm:p-3 rounded-full shadow-lg transition-all duration-300 ${
                    isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
                }`}
                aria-label="Scroll to top"
            >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </div>
        </>
    );
}
