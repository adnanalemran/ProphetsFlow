import { Link } from 'react-router-dom';
import { getProphetUrlName } from '../lib/utils';
import SEO from '../components/SEO';

export default function NotFound() {
    return (
        <>
            <SEO
                title="পৃষ্ঠা খুঁজে পাওয়া যায়নি - 404"
                description="দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা বিদ্যমান নেই। ইসলামের নবীগণের মূল পৃষ্ঠায় ফিরে যান।"
                canonicalUrl="/404"
                noindex={true}
                nofollow={true}
            />
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 font-bangla">
            <div className="text-center max-w-2xl w-full">
                {/* 404 Number */}
                <div className="mb-8">
                    <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-400 leading-none">
                        404
                    </h1>
                </div>

                {/* Main Message */}
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                        দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা বিদ্যমান নেই। 
                        এটি মুছে ফেলা হতে পারে, URL পরিবর্তন হতে পারে, 
                        অথবা আপনি ভুল লিঙ্ক ব্যবহার করেছেন।
                    </p>
                </div>

                {/* Decorative Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-full flex items-center justify-center">
                        <svg 
                            className="w-16 h-16 md:w-20 md:h-20 text-emerald-600 dark:text-emerald-400" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                            />
                        </svg>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        to="/"
                        className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span>মূল পৃষ্ঠায় ফিরে যান</span>
                    </Link>
                    
                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>পিছনে যান</span>
                    </button>
                </div>

                {/* Helpful Links */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        আপনি এখানে যেতে পারেন:
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/"
                            className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 underline text-sm"
                        >
                            নবীগণের তালিকা
                        </Link>
                        <span className="text-gray-300 dark:text-gray-600">•</span>
                        <Link
                            to={`/নবী/${getProphetUrlName('আদম (আঃ)')}`}
                            className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 underline text-sm"
                        >
                            আদম(আঃ)
                        </Link>
                        <span className="text-gray-300 dark:text-gray-600">•</span>
                        <Link
                            to="/নবী/মুহাম্মদ"
                            className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 underline text-sm"
                        >
                            মুহাম্মদ
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
