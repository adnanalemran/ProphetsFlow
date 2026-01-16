import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function YunusStory() {
    return (
        <div className="mb-12 mt-6 md:mt-10">
            {/* Header Image */}
            <div className="w-full mb-8">
                <img 
                    src="/images/prophet-stories/yunus/the-story-of-prophet-yunus-as.png" 
                    alt="নবী ইউনুস (আঃ)-এর গল্প" 
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-10">
                <span className="text-amber-600 dark:text-amber-500">নবী ইউনুস (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর গল্প
            </h1>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6 md:space-y-8">
                
                {/* Introduction */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">ভূমিকা</h2>
                    
                    <p className="mb-4">
                        নবী ইউনুস (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>), যাকে কুরআনে যুন-নুন (মাছওয়ালা) হিসাবেও উল্লেখ করা হয়েছে, ছিলেন একজন সম্মানিত নবী যিনি নিনেভেহ শহরের লোকদের কাছে পাঠানো হয়েছিলেন। তিনি ইহুদি-খ্রিস্টান ঐতিহ্যে জোনাহ হিসাবে পরিচিত।
                    </p>

                    <p className="mb-4">
                        নবী ইউনুস (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ছিলেন একজন ধার্মিক এবং নিবেদিত নবী যিনি তার লোকদের আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) পথে আহ্বান করেছিলেন। তার গল্পটি ধৈর্য, তওবা, এবং আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) করুণার একটি শক্তিশালী উদাহরণ।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* The Saved City */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        <span className="text-amber-600 dark:text-amber-500">রক্ষিত শহর</span>
                    </h2>

                    <p className="mb-4">
                        নবী ইউনুস (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) নিনেভেহ শহরের লোকদের কাছে পাঠানো হয়েছিলেন, যারা আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) পথ থেকে বিচ্যুত হয়ে গিয়েছিল। তিনি তাদের সতর্ক করেছিলেন এবং তাদের তওবা করার আহ্বান জানিয়েছিলেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>ইংরেজি অনুবাদ:</strong><br />
                                "এবং নিনেভেহ শহরে একজন [রাসূল] পাঠান। তিনি বলেছিলেন, 'হে আমার লোকেরা! আল্লাহর উপাসনা করুন; আপনার কাছে তিনি ছাড়া কোনো উপাস্য নেই।' কিন্তু তারা অবিশ্বাস করেছিল, তাই আমরা তাদের উপর একটি দুর্দশা পাঠিয়েছিলাম।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-yunus/" className="text-blue-600 dark:text-blue-400">সূরা ইউনুস</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <strong>নিনেভেহের লোকেরা প্রথমে ইউনুসের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বার্তা গ্রহণ করতে অস্বীকার করেছিল।</strong> তারা তাদের পাপী জীবনযাপন চালিয়ে যাচ্ছিল এবং আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সতর্কীকরণ উপেক্ষা করছিল। ইউনুস (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তাদের জন্য নির্ধারিত শাস্তির কথা বলেছিলেন, কিন্তু তারা তওবা করলে আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) করুণা পেতে পারে।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Yunus and the Whale */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        ইউনুস (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) এবং <span className="text-amber-600 dark:text-amber-500">তিমি</span>
                    </h2>

                    <p className="mb-4">
                        যখন নিনেভেহের লোকেরা ইউনুসের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বার্তা গ্রহণ করতে অস্বীকার করেছিল, তিনি হতাশ হয়ে পড়েছিলেন। <strong>তিনি শহর ছেড়ে চলে যাওয়ার সিদ্ধান্ত নিয়েছিলেন, আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) অনুমতি ছাড়াই।</strong>
                    </p>

                    <p className="mb-4">
                        ইউনুস (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) একটি জাহাজে উঠেছিলেন, কিন্তু সমুদ্রে একটি ভয়াবহ ঝড় শুরু হয়েছিল। নাবিকরা বুঝতে পেরেছিল যে এটি একটি বিশেষ পরিস্থিতি, এবং তারা লট নিক্ষেপ করেছিল যাতে জানা যায় কে এই দুর্দশার কারণ। ইউনুসের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) নাম বারবার উঠে আসছিল।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>কুরআন এই ঘটনাটি বর্ণনা করে:</strong><br />
                                <em>"এবং স্মরণ কর ইউনুসকে, যখন তিনি রাগান্বিত হয়ে চলে গিয়েছিলেন এবং মনে করেছিলেন যে আমরা তাকে শাস্তি দেব না। তিনি অন্ধকারে ডাক দিয়েছিলেন: 'আপনি ছাড়া কোনো উপাস্য নেই, আপনি মহান! নিশ্চয়ই আমি অত্যাচারীদের মধ্যে একজন ছিলাম।'"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-al-anbiya/ayat-87/" className="text-blue-600 dark:text-blue-400">সূরা আল-আনবিয়া, আয়াত ৮৭</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        ইউনুস (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সমুদ্রে নিক্ষিপ্ত হয়েছিলেন, এবং একটি বিশাল মাছ (তিমি) তাকে গিলে ফেলেছিল। তিনি মাছের পেটে অন্ধকারে ছিলেন, কিন্তু তিনি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে প্রার্থনা করতে থাকেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                لَّآ إِلَٰهَ إِلَّآ أَنتَ سُبۡحَٰنَكَ إِنِّي كُنتُ مِنَ ٱلظَّٰلِمِينَ
                            </p>
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>রোমানীকরণ:</strong> Laa ilaaha illaa Anta Subhaanaka innee kuntu minaz zaalimeen
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>ইংরেজি অনুবাদ:</strong> "আপনি ছাড়া কোনো উপাস্য নেই, আপনি মহান! নিশ্চয়ই আমি অত্যাচারীদের মধ্যে একজন ছিলাম।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-al-anbiya/ayat-87/" className="text-blue-600 dark:text-blue-400">সূরা আল-আনবিয়া, আয়াত ৮৭</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <strong>এই প্রার্থনা ছিল ইউনুসের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) হৃদয় থেকে আসা একটি আন্তরিক তওবা।</strong> তিনি স্বীকার করেছিলেন যে তিনি ভুল করেছিলেন এবং আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে ক্ষমা প্রার্থনা করেছিলেন। আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তার প্রার্থনা গ্রহণ করেছিলেন এবং মাছকে তাকে নিরাপদে তীরে ফেলে দেওয়ার নির্দেশ দিয়েছিলেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>কুরআন বলে:</strong><br />
                                <em>"সুতরাং আমরা তার প্রার্থনা গ্রহণ করেছিলাম এবং তাকে দুঃখ থেকে উদ্ধার করেছিলাম। এবং এইভাবে আমরা বিশ্বাসীদের উদ্ধার করি।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-al-anbiya/ayat-88/" className="text-blue-600 dark:text-blue-400">সূরা আল-আনবিয়া, আয়াত ৮৮</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        ইউনুস (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) মাছের পেট থেকে মুক্তি পেয়েছিলেন এবং একটি নিরাপদ স্থানে ফিরে এসেছিলেন। আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাকে একটি লাউ গাছ দিয়ে আশ্রয় দিয়েছিলেন যাতে তিনি সুস্থ হতে পারেন।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Return to Nineveh */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        নিনেভেহে <span className="text-amber-600 dark:text-amber-500">ফিরে আসা</span>
                    </h2>

                    <p className="mb-4">
                        ইউনুস (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সুস্থ হওয়ার পর, আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাকে নিনেভেহে ফিরে যাওয়ার নির্দেশ দিয়েছিলেন। যখন তিনি ফিরে এসেছিলেন, তিনি দেখতে পেয়েছিলেন যে <strong className="text-amber-600 dark:text-amber-500">নিনেভেহের লোকেরা তওবা করেছিল এবং আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে ফিরে এসেছিল।</strong>
                    </p>

                    <p className="mb-4">
                        আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাদের তওবা গ্রহণ করেছিলেন এবং তাদের উপর নির্ধারিত শাস্তি প্রত্যাহার করেছিলেন। এটি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) করুণার একটি শক্তিশালী উদাহরণ — যখন লোকেরা আন্তরিকভাবে তওবা করে, আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাদের ক্ষমা করেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>কুরআন বলে:</strong><br />
                                <em>"তাহলে কেন এমন কোনো শহর ছিল না যা বিশ্বাস করেছিল এবং তাদের বিশ্বাস তাদের উপকার করেছিল, ইউনুসের লোকদের ছাড়া? যখন তারা বিশ্বাস করেছিল, আমরা তাদের এই জীবনের অপমান থেকে রক্ষা করেছিলাম এবং তাদের কিছু সময় উপভোগ করতে দিয়েছিলাম।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-yunus/ayat-98/" className="text-blue-600 dark:text-blue-400">সূরা ইউনুস, আয়াত ৯৮</a>)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Lessons from the Story */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        গল্প থেকে <span className="text-amber-600 dark:text-amber-500">শিক্ষা</span>
                    </h2>

                    <p className="mb-4">
                        নবী ইউনুসের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) গল্প আমাদের অনেক গুরুত্বপূর্ণ শিক্ষা দেয়:
                    </p>

                    <div className="space-y-4">
                        <p className="mb-4">
                            <strong>১. ধৈর্য:</strong> নবী ইউনুস (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আমাদের দেখিয়েছেন যে ধৈর্য ধারণ করা এবং আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) উপর বিশ্বাস রাখা কতটা গুরুত্বপূর্ণ, এমনকি সবচেয়ে কঠিন পরিস্থিতিতেও।
                        </p>

                        <p className="mb-4">
                            <strong>২. তওবা:</strong> ইউনুসের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) প্রার্থনা আমাদের দেখায় যে আন্তরিক তওবা আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) করুণা অর্জন করতে পারে, এমনকি সবচেয়ে কঠিন পরিস্থিতিতেও।
                        </p>

                        <p className="mb-4">
                            <strong>৩. আল্লাহর করুণা:</strong> নিনেভেহের লোকদের গল্প আমাদের দেখায় যে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কতটা করুণাময় — যখন লোকেরা আন্তরিকভাবে তওবা করে, তিনি তাদের ক্ষমা করেন।
                        </p>

                        <p className="mb-4">
                            <strong>৪. আল্লাহর নির্দেশ মান্য করা:</strong> ইউনুসের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) গল্প আমাদের মনে করিয়ে দেয় যে আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) নির্দেশ মান্য করা এবং ধৈর্য ধারণ করা কতটা গুরুত্বপূর্ণ।
                        </p>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>নবী মুহাম্মদ (<span className="font-arabic">ﷺ</span>) বলেছেন:</strong><br />
                                <em>"যখন কোনো মুসলিম বিপদে পড়ে এবং বলে: 'আপনি ছাড়া কোনো উপাস্য নেই, আপনি মহান! নিশ্চয়ই আমি অত্যাচারীদের মধ্যে একজন ছিলাম,' তখন আল্লাহ তাকে উত্তর দেন।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (তিরমিজী)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

            </div>
        </div>
    )
}
