import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function IlyasStory() {
    return (
        <div className="mb-12 mt-6 md:mt-10">
            {/* Header Image */}
            <div className="w-full mb-8">
                <img 
                    src="/images/prophet-stories/ilyas/the-story-of-prophet-ilyas.png" 
                    alt="ইলিয়াস (আঃ)-এর গল্প" 
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4 md:mb-6">
                <span className="text-amber-600 dark:text-amber-500">নবী ইলিয়াস (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর গল্প
            </h1>
            <p className="text-center text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 md:mb-10">
                <strong>পটভূমি তথ্য:</strong>
            </p>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6 md:space-y-8">
                
                {/* Introduction */}
                <section className="my-8 md:my-12">
                    <p className="mb-4">
                        কুরআনে, নবীদের গল্পের বিশদ বিবরণের গভীরতা উল্লেখযোগ্যভাবে পরিবর্তিত হয়। উদাহরণস্বরূপ, <strong>নবী মুসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>);</strong> তিনি নামে সবচেয়ে বেশি উল্লেখিত নবী, <strong>১৩৬ বার উপস্থিত</strong>। অন্যরা, যেমন <strong>নবী ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>),</strong> তাদের সম্পূর্ণ জীবন শুরু থেকে শেষ পর্যন্ত নথিভুক্ত করার জন্য একটি সম্পূর্ণ সূরা উৎসর্গ করা হয়েছে।
                    </p>

                    <p className="mb-4">
                        তারপর, আরেকটি বিভাগের নবীরা রয়েছে যেখানে খুব বেশি বিশদ দেওয়া হয়নি। <strong>সূরা আন-নিসা, আয়াত ১৬৪-এ</strong>,
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <em>"আমরা রাসূলদের কাছে প্রকাশ করেছি যাদের সম্পর্কে আমরা ইতিমধ্যে আপনাকে বলেছি, এবং রাসূলদের কাছে যাদের সম্পর্কে আমরা আপনাকে বলিনি; এবং মুসার কাছে, আল্লাহ সরাসরি কথা বলেছেন।"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-an-nisa/ayat-164/" className="text-blue-600 dark:text-blue-400">সূরা আন-নিসা, আয়াত ১৬৪</a>)</span>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong className="text-amber-600 dark:text-amber-500">এই আয়াতটি একটি স্পষ্ট ইঙ্গিত যে কুরআন প্রতিটি উম্মাহতে পাঠানো প্রতিটি নবীর একটি সম্পূর্ণ ঐতিহাসিক রেকর্ড হওয়ার উদ্দেশ্যে নয়।</strong>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/ilyas/Asset-2 (Ilyas A.S mentioned in Quran).png" 
                                alt="কুরআনে নবী ইলিয়াস উল্লেখিত" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        তাই, আমরা অন্যান্য উৎসের উপর নির্ভর করি যেমন <strong>হাদিস, তাফসির, এবং কুরআনে উল্লেখিত পরিচিত নবীদের সম্পর্কে আরও তথ্যের জন্য অন্যান্য সাহিত্য</strong>। শেষ বিভাগে পড়া নবীদের মধ্যে রয়েছে যুল-কিফল, আল-ইয়াসা (ইলিশা), এবং নবী ইলিয়াস (ইলিয়াহ), তাদের সকলের উপর শান্তি বর্ষিত হোক।<br /><br />
                        নবী ইলিয়াস (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) <strong>কুরআনে দুটি স্থানে উল্লেখ করা হয়েছে</strong>, একবার সূরা আল-আনআমে এবং অন্যটি সূরা আস-সাফফাতে।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Prophet Ilyas Character */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">নবী ইলিয়াস (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span> চরিত্র
                    </h2>

                    <p className="mb-4">
                        সূরা আল-আনআমে, বিশেষভাবে আয়াত ৮৪-৮৮-এ, আমরা নবী ইলিয়াসের নামটি অন্যান্য নবীদের তালিকার মধ্যে উল্লেখিত খুঁজে পাই যেখানে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাদের গুণাবলীর জন্য তাদের প্রশংসা করেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/ilyas/Asset-4 (Anbiya mentioned in Quran).png" 
                                alt="কুরআনে নবীদের উল্লেখ" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <em>"আমরা তাকে ইসহাক এবং ইয়াকুব দান করেছিলাম। তাদের প্রত্যেককে আমরা সঠিক পথে পথনির্দেশ করেছিলাম। আগে, আমরা নূহকে পথনির্দেশ করেছিলাম এবং, তার বংশধরদের মধ্যে, (আমরা পথনির্দেশ করেছিলাম) দাউদ এবং সুলাইমান এবং আইয়ুব এবং ইউসুফ এবং মুসা এবং হারুন। এইভাবে, আমরা যারা ভাল কাজ করে তাদের পুরস্কৃত করি - এবং (আমরা পথনির্দেশ করেছিলাম) যাকারিয়া এবং ইয়াহিয়া এবং ঈসা এবং ইলিয়াস - তাদের প্রত্যেকেই ছিল ধার্মিকদের মধ্যে - এবং ইসমাঈল এবং ইয়াসা' এবং ইউনুস এবং লুত, এবং তাদের সবাইকে আমরা বিশ্বের সমস্ত মানুষের (তাদের নিজ নিজ সময়ে) উপর শ্রেষ্ঠত্ব দিয়েছিলাম। আমরা তাদের পিতাদের এবং তাদের সন্তানদের এবং তাদের ভাইদের মধ্যে অনেককে পথনির্দেশ করেছিলাম, এবং আমরা তাদের নির্বাচন করেছিলাম এবং তাদের সঠিক পথে পরিচালিত করেছিলাম।"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Prophet Ilyas Mission */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">নবী ইলিয়াস (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span> মিশন
                    </h2>

                    <p className="mb-4">
                        সূরা আস-সাফফাতে, এটি নবী ইলিয়াসের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) জীবনের আরও বিবরণ দেয়, তার মিশন, তার বার্তা এবং যাদের তিনি পথনির্দেশ করার জন্য পাঠানো হয়েছিলেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) বলেছেন,</strong><br />
                                <em>"এবং নিশ্চয়ই, ইলিয়াস রাসূলদের মধ্যে একজন। (স্মরণ করুন) যখন তিনি তার লোকদের বলেছিলেন: 'তোমরা কি আল্লাহকে ভয় কর না? তোমরা কি বাআল (একটি সুপরিচিত মূর্তির নাম যা তারা উপাসনা করত) আহ্বান কর, এবং সর্বোত্তম স্রষ্টাকে উপেক্ষা কর, অর্থাৎ আল্লাহ যিনি তোমাদের রব এবং তোমাদের পূর্বপুরুষদের রব?'" তারপর তারা তাকে প্রত্যাখ্যান করেছিল। তাই, তাদের বিচারের জন্য আনা হবে - আল্লাহর নির্বাচিত বান্দাদের ছাড়া। এবং আমরা তার জন্য (প্রশংসার একটি শব্দ) পরবর্তী লোকদের মধ্যে রেখেছি, (অর্থাৎ,) 'ইলিয়াসের উপর শান্তি বর্ষিত হোক। এইভাবে আমরা যারা তাদের কাজে ভাল তাদের পুরস্কৃত করি। নিশ্চয়ই, তিনি ছিলেন আমাদের বিশ্বাসী বান্দাদের মধ্যে।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-saffat/ayat-123/" className="text-blue-600 dark:text-blue-400">সূরা আস-সাফফাত, আয়াত ১২৩-১৩২</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        এ থেকে, আমরা জানতে পারি যে লোকেরা পথভ্রষ্ট হয়ে গিয়েছিল এবং বাআল নামে একটি মূর্তির উপাসনা শুরু করেছিল। নবী ইলিয়াস (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তাদের বিশ্বাসকে প্রশ্ন করেছিলেন, জিজ্ঞাসা করেছিলেন যে কীভাবে তারা আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ছেড়ে যেতে পারে, সবচেয়ে সুন্দর এবং সর্বোত্তম স্রষ্টা। কিন্তু তারা তাদের অবিশ্বাসে অবিচল ছিল এবং শাস্তি পেয়েছিল। যারা ইলিয়াস (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) অনুসরণ করেছিল তাদের পুরস্কৃত করা হয়েছিল, এবং এটি নবী ইলিয়াস (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এবং তার সম্প্রদায় সম্পর্কে কুরআন যা উল্লেখ করে।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Prophet Ilyas Expanded Edition */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">নবী ইলিয়াস (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span> বিস্তৃত সংস্করণ:
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                কুরআনের ভাষ্যকাররা এই দেওয়া তথ্যের উপর ভিত্তি করে কয়েকটি অনুমান করেছেন। এটি বিশ্বাস করা হয় যে নবী ইলিয়াস (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ছিলেন নবী হারুনের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বংশধর এবং আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) দ্বারা বনি ইসরাঈল (ইসরায়েলের সন্তানদের) তাওহীদ শেখানোর জন্য নিয়োগ করা হয়েছিল। তারা বিশ্বাস করেন যে এটি এমন একটি সময় ছিল যখন রাজা আহাবের শাসনকালে বাআলাবাক শহরে মূর্তি উপাসনা বৃদ্ধি পাচ্ছিল। এটি নবী ইলিয়াহের বাইবেলের বিবরণের সাথে মিলে যায়।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/ilyas/prophet-ilyas-descendant-of-harun.png" 
                                alt="নবী ইলিয়াস হারুনের বংশধর" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/ilyas/Asset-6 (gold baal idol worship).png" 
                                alt="পৌত্তলিক দেবতা বাআল" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="mb-4">
                                এখন, <strong>পৌত্তলিক দেবতা বাআলের</strong> উপাসনা সম্পর্কে, কিছু ইতিহাস রয়েছে। <strong>বাআল ছিল সেমিটিক ভাষায় ব্যবহৃত একটি উপাধি যা বিশ্বাস করা হয় "মালিক" বা "রব" অর্থ।</strong> অন্যান্য ঐতিহ্যগত রিপোর্ট পরামর্শ দেয় যে এটি সোনার তৈরি একটি মূর্তি ছিল, বিশ হাত (৯ মিটার) উঁচু, এবং চারটি মুখ ছিল। অনেক প্রাচীন মধ্যপ্রাচ্যের সম্প্রদায় (বিশেষ করে লেবানন, সিরিয়া এবং ফিলিস্তিন) বাআলের উপাসনা করত বলে বিশ্বাস করা হয়, এটিকে উর্বরতা এবং আবহাওয়ার দেবতা হিসাবে বিশ্বাস করত।
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        এটি সত্য হতে পারে বা নাও হতে পারে, কিন্তু যেকোনো কারণেই, তারা বিশ্বাস করত যে তাদের দেবতা অন্য সমস্ত স্রষ্টার চেয়ে অনেক শ্রেষ্ঠ। এই ধারণাটিই ছিল যে <strong>নবী ইলিয়াস (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) তার লোকদের সম্বোধন করেছিলেন, <span className="text-amber-600 dark:text-amber-500">ব্যাখ্যা করেছিলেন যে কীভাবে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ছিলেন সর্বোত্তম স্রষ্টা, মিথ্যা মূর্তি নয় যা তারা উপাসনা করত।</span></strong>
                        <br /><br />
                        নবী ইলিয়াস (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তাদের শিখিয়েছিলেন যে কেবল আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ছিলেন যিনি শূন্যতা থেকে কিছু তৈরি করতে সক্ষম।
                    </p>

                    <p className="mb-4">
                        <strong className="text-amber-600 dark:text-amber-500">তিনি কেবল বলেছেন,</strong>
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-l-4 border-blue-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed text-center">
                                <strong>"'হও,' এবং এটি হয়"</strong><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— <a href="https://myislam.org/surah-yaseen/ayat-82/" className="text-blue-600 dark:text-blue-400">সূরা ইয়াসিন, আয়াত ৮২</a></span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        অন্যান্য সমস্ত জীবন রূপ কেবল এক রূপ থেকে অন্য রূপে উপাদান রূপান্তর করছে। আমরা কাঠ নিই যা আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) আমাদের দিয়েছেন এবং এটিকে একটি চেয়ার করি। <strong><span className="text-amber-600 dark:text-amber-500">আমরা যা করতে পারি তা সীমিত, যেখানে আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সৃষ্টি সীমাহীন।</span> কেবল তারই সেই অন্তর্নিহিত ক্ষমতা বা শক্তি রয়েছে যা নেই তা হতে পারে।</strong>
                    </p>

                    <p className="mb-4">
                        এখন, লোকেরা কীভাবে শাস্তি পেয়েছিল তা অজানা। বাইবেলের বিবরণ বলে যে তিন বছর ধরে খরা এবং দুর্ভিক্ষ ছিল, এবং ইলিয়াহ লোকদের প্রশ্ন করেছিলেন যে কেন তাদের বাআল আবহাওয়া পরিবর্তন করতে এবং শুষ্ক সময়কাল শেষ করতে সক্ষম হয়নি। তিনি জিজ্ঞাসা করেছিলেন যে বাআল ঘুমিয়ে আছে কিনা এবং তাকে জাগাতে হবে। অথবা হয়তো সে ভ্রমণ করছে এবং সাড়া দিতে অক্ষম? ইলিয়াহ তারপর তার রবকে আহ্বান করেছিলেন এই শর্তে যে যদি খরা শেষ হয়, তাহলে তারা তাদের পৌত্তলিক উপাসনা বন্ধ করবে।
                    </p>

                    <p className="mb-4">
                        <strong className="text-amber-600 dark:text-amber-500">যাই হোক না কেন তাদের শাস্তি, আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সর্বোত্তম জানেন।</strong> ভাষ্যকাররা পরামর্শ দেন যে শাস্তি এই দুনিয়ার হতে পারে, যেমন আদ', সামুদ, বা ফেরাউনের লোকেরা। এটি আখিরাতের শাস্তির দিকেও নির্দেশ করতে পারে।
                    </p>
                </section>

            </div>
        </div>
    )
}
