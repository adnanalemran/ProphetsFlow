import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function IdrisStory() {
    return (
        <div className="mb-12 mt-6 md:mt-10">
            {/* Header Image */}
            <div className="w-full mb-8">
                <img 
                    src="/images/prophets/idris.png" 
                    alt="ইদ্রিস (আঃ)-এর গল্প" 
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-10">
                <span className="text-amber-600 dark:text-amber-500">ইদ্রিস (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর গল্প
            </h1>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6 md:space-y-8">
                
                {/* Section: Who is Prophet Idris */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4">
                        <span className="text-amber-600 dark:text-amber-500">নবী ইদ্রিস (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span> কে?
                    </h2>

                    <p className="mb-4">
                        নবী ইদ্রিস (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>), বাইবেলে যিনি এনোক নামে পরিচিত, ইসলামে দ্বিতীয় বা তৃতীয় নবী হিসেবে বিবেচিত হন। কুরআনে নামে উল্লিখিত পঁচিশজন নবী রয়েছেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                কিছু ইতিহাসবিদ এবং আলেম যেমন ইবনে কাসির নবী আদমের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) তৃতীয় পুত্র শীথ (শীথ) কে তাঁর উত্তরসূরি এবং নবুওয়তের দায়িত্ব বহনকারী হিসেবে বিবেচনা করেন।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophets/idris.png" 
                                alt="নবী ইদ্রিস" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        যাইহোক, ইসলামে তাঁর নবুওয়তের অবস্থান সুনির্দিষ্টভাবে নিশ্চিত নয়। তাঁর জীবনের বিবরণ প্রাচীন ধর্মগ্রন্থ থেকে এসেছে যা বিকৃত এবং দূষিত হয়েছে। ইসলামী ঐতিহ্যে, তাঁর গল্প পড়া এবং শেখা অনুমোদিত, তবে শর্ত থাকে যে কুরআনের শিক্ষার সাথে সাংঘর্ষিক না হয়। তবুও, আমাদের সতর্ক থাকতে হবে কারণ এটি সত্য হিসেবে বিবেচনা করা উচিত নয় বা ধর্মীয় রায়ের ভিত্তিতে ব্যবহার করা উচিত নয়।
                    </p>

                    <p className="mb-4">
                        নবী ইদ্রিস (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) সম্পর্কে আমরা যা বলতে পারি তা হল তিনি নবী নূহের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) পূর্বপুরুষ ছিলেন। আমরা দুটি পৃথক আয়াতে নবী ইদ্রিসের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) গুণাবলী সম্পর্কে জানতে পারি যা আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) দৃষ্টিতে তাঁর অবস্থানকে উন্নীত করেছিল।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: Quran Verses */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4">
                        কুরআনের আয়াত যেখানে <span className="text-amber-600 dark:text-amber-500">ইদ্রিস (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span> উল্লিখিত:
                    </h2>

                    {/* Quran Verse 1 */}
                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardHeader>
                            <CardTitle className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                وَإِسۡمَٰعِيلَ وَإِدۡرِيسَ وَذَا ٱلۡكِفۡلِۖ كُلّٞ مِّنَ ٱلصَّـٰبِرِينَ
                            </CardTitle>
                            <CardDescription className="text-sm md:text-base font-semibold">রোমানীকরণ:</CardDescription>
                            <CardAction className="text-xs md:text-sm text-emerald-700 dark:text-emerald-400">(কুরআন ২১:৮৫)</CardAction>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm md:text-base leading-relaxed mb-2">
                                <strong>Wa Ismaa'eela wa Idreesa wa Zal Kifli kullum minas saabireen</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>বাংলা অনুবাদ:</strong> "এবং [উল্লেখ কর] ইসমাঈল এবং ইদ্রিস এবং যুল-কিফল; সকলেই ধৈর্যশীলদের অন্তর্ভুক্ত ছিলেন।"
                            </p>
                        </CardContent>
                    </Card>

                    {/* Quran Verse 2 */}
                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardHeader>
                            <CardTitle className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                وَٱذۡكُرۡ فِي ٱلۡكِتَٰبِ إِدۡرِيسَۚ إِنَّهُۥ كَانَ صِدِّيقٗا نَّبِيّٗا
                            </CardTitle>
                            <CardDescription className="text-sm md:text-base font-semibold">রোমানীকরণ:</CardDescription>
                            <CardAction className="text-xs md:text-sm text-emerald-700 dark:text-emerald-400">(কুরআন ১৯:৫৬-৫৭)</CardAction>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm md:text-base leading-relaxed mb-2">
                                <strong>Wazkur fil Kitaabi Idrees; innahoo kaana siddeeqan Nabiyyaa</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>বাংলা অনুবাদ:</strong> "এবং কিতাবে ইদ্রিসের কথা উল্লেখ কর: তিনি ছিলেন সত্যবাদী এবং নবী। এবং আমরা তাঁকে উচ্চ মর্যাদায় উন্নীত করেছিলাম।"
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: Physical Attributes and Knowledge */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophets/idris.png" 
                                alt="লেখার শিল্প" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                নবী ইদ্রিস (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) ছিলেন সুগঠিত দেহের অধিকারী, শক্তিশালী, প্রশস্ত বক্ষ এবং নিম্ন স্বরে কথা বলতেন। <span className="text-amber-600 dark:text-amber-500 font-semibold">এটাও বলা হয় যে তিনি লম্বা এবং সুদর্শন ছিলেন এবং সর্বদা তাঁর আচরণে শান্তি দেখাতেন।</span> তাঁর শারীরিক বৈশিষ্ট্যের বাইরে, তিনি বুদ্ধিবৃত্তিকভাবে কৌতূহলীও ছিলেন। তিনি তাঁর স্রষ্টার তৈরি মহাবিশ্বের বিশালতা নিয়ে চিন্তা করতেন — আকাশ, পৃথিবী, চাঁদ, তারকা এবং মেঘ থেকে। মাআরিফুল কুরআনের তাফসীরে ইদ্রিসকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَامُ</span>) প্রথম মানুষ হিসেবে উল্লেখ করা হয়েছে যিনি কলম দিয়ে লেখা শিখেছিলেন। তাঁর জ্যোতিষশাস্ত্র এবং গণিতের জ্ঞান ছিল এবং তিনি অনেক কিছুর উদ্ভাবক হিসেবে স্বীকৃত ছিলেন।
                            </p>
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: Birth and Prophethood */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4">
                        <span className="text-amber-600 dark:text-amber-500">জন্ম এবং নবুওয়ত:</span>
                    </h2>

                    <p className="mb-4">
                        তিনি নবী আদমের (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) জীবদ্দশায় জন্মগ্রহণ করেছিলেন। বিশ্বাস করা হয় যে তিনি শীথের অনুসারীদের মধ্যে ছিলেন এবং শীথের মৃত্যুর পর আদমের (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) বংশধরদের শাসন করেছিলেন।
                    </p>

                    <p className="mb-4">
                        ইদ্রিস (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) ছিলেন আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) আন্তরিক বান্দা। তাই, আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাঁকে নবী এবং রাসূল হিসেবে নির্বাচিত করেছিলেন এবং আদমের সন্তানদের উপর শাসক হিসেবে নির্বাচিত করেছিলেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                শীথের মৃত্যুর পর যা শুরু হয়েছিল তা হল কাবিল (কাবিল) এর লোকেরা পথনির্দেশ হারিয়ে ফেলেছিল, এবং পাপ ও দুর্নীতি দ্রুত বৃদ্ধি পেতে শুরু করেছিল এবং ছড়িয়ে পড়েছিল। ইদ্রিস (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) তাঁর নিজের লোকদের শয়তানের প্রভাবের শিকার হতে দেখতে পারছিলেন না।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophets/idris.png" 
                                alt="প্রথম জিহাদ" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        তাই আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) নবী ইদ্রিসকে কাবিলের দুর্নীতিগ্রস্ত অনুসারীদের বিরুদ্ধে জিহাদ (পবিত্র যুদ্ধ) করার আহ্বান জানাতে নির্দেশ দিয়েছিলেন — ইদ্রিস ছিলেন ইসলামের ইতিহাসে দুর্নীতির বিরুদ্ধে জিহাদ সম্পাদনকারী প্রথম নবী এবং রাসূল।
                    </p>

                    <p className="mb-4">
                        <span className="text-amber-600 dark:text-amber-500 font-semibold">আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) আদেশ অনুযায়ী</span>, ইদ্রিস পুরুষদের একটি সেনাবাহিনী সংগ্রহ করেছিলেন এবং আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) নামে সীমালঙ্ঘনকারীদের বিরুদ্ধে যুদ্ধ করেছিলেন এবং বিজয়ী হয়েছিলেন।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: Victory over Transgressors */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4">
                        নবী ইদ্রিস (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) <span className="text-amber-600 dark:text-amber-500">সীমালঙ্ঘনকারীদের উপর বিজয়:</span>
                    </h2>

                    <p className="mb-4">
                        আহলে কিতাবের একটি বর্ণনা থেকে, যা অনেক কুরআন ব্যাখ্যাকারও উল্লেখ করেছেন, এবং আল্লাহ সর্বোত্তম জানেন — একদিন, নবী ইদ্রিসকে (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) একটি অসাধারণ প্রতিশ্রুতি সম্পর্কে জানিয়েছিলেন। তাঁকে বলা হয়েছিল যে তিনি প্রতিটি মানুষের শেষ নিঃশ্বাস পর্যন্ত সম্পাদিত সমস্ত ভাল কাজের পুরস্কার পাবেন। এর অর্থ হল তিনি দ্বিগুণ পুরস্কার পাবেন।
                    </p>

                    <p className="mb-4">
                        নবী ইদ্রিস (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) এই সংবাদে অত্যন্ত আনন্দিত হয়েছিলেন এবং আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে তাঁর সমস্ত আশীর্বাদের জন্য অত্যন্ত কৃতজ্ঞতা প্রকাশ করেছিলেন। কিন্তু ইদ্রিস (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) বেশ বয়স্ক ছিলেন, এবং তিনি জানতেন যে মৃত্যু নিকটবর্তী। তিনি এই পৃথিবী থেকে চলে যেতে প্রস্তুত ছিলেন না কারণ তিনি পৃথিবীতে ভালোতা ছড়াতে উপভোগ করতেন। তাঁর ফেরেশতাদের মধ্যে একজন বন্ধু ছিলেন যাকে তিনি জিজ্ঞাসা করেছিলেন যে তিনি মৃত্যুর ফেরেশতার সাথে কথা বলতে পারেন কিনা এবং দেখতে পারেন যে এটি বিলম্বিত করা যায় কিনা। ফেরেশতা তাঁকে বলেছিলেন যে এটি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সাথে একটি বিষয় কিন্তু চেষ্টা করতে কোনও ক্ষতি নেই। এইভাবে, ইদ্রিস (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) ফেরেশতার ডানায় উঠে স্বর্গে আরোহণ করেছিলেন। তিনি প্রথম, দ্বিতীয় এবং তৃতীয় স্বর্গের মধ্য দিয়ে গিয়েছিলেন। যাইহোক, চতুর্থ স্তরে পৌঁছানোর পর, আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) মৃত্যুর ফেরেশতাকে তাঁর জীবন গ্রহণ করতে নির্দেশ দিয়েছিলেন।
                    </p>

                    <div className="w-full my-6">
                        <img 
                            src="/images/prophets/idris.png" 
                            alt="নবী ইদ্রিস মৃত্যুর ফেরেশতার সাথে দেখা করেছেন" 
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>ইদ্রিসের প্রিয় সঙ্গী মৃত্যুর ফেরেশতাকে বলেছিলেন,</strong><br />
                                <em>"নবী ইদ্রিস জানতে চান যে আপনি তাঁর জীবন দীর্ঘায়িত করতে পারেন কিনা।"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>মৃত্যুর ফেরেশতা বিস্মিত হয়েছিলেন; তিনি উত্তর দিয়েছিলেন,</strong><br />
                                <em>"এবং ইদ্রিস কোথায়?"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <em>"তিনি আমার পিঠে,"</em><br />
                                <strong>ফেরেশতা উত্তর দিয়েছিলেন।</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>মৃত্যুর ফেরেশতা উত্তর দিয়েছিলেন,</strong><br />
                                <em>"কি আশ্চর্য! আমাকে পাঠানো হয়েছিল এবং বলা হয়েছিল যে চতুর্থ স্বর্গে ইদ্রিসের আত্মা গ্রহণ করতে। আমি ভাবছিলাম যে আমি কীভাবে চতুর্থ স্বর্গে এটি গ্রহণ করতে পারি যখন তিনি পৃথিবীতে ছিলেন। সুবহানাল্লাহ (আল্লাহর মহিমা), তিনি এটি ঘটিয়েছেন!"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <span className="text-amber-600 dark:text-amber-500 font-semibold">ইদ্রিস (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) বিতর্ক করেননি</span>; তিনি কেবল স্বীকার করেছিলেন যে যদি এটি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) নির্ধারিত হয়, তবে তাই হোক।
                    </p>

                    <p className="mb-4">
                        এবং আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) নির্দেশ অনুযায়ী, মৃত্যুর ফেরেশতা চতুর্থ স্বর্গে ইদ্রিসের আত্মা গ্রহণ করেছিলেন।
                    </p>

                    <p className="mb-4">
                        নবী ইদ্রিসের (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) এই অসাধারণ ঘটনাটি সহিহ বুখারি হাদিস নম্বর ৭৫১৭ এবং আত-তিরমিযি ৩১৫৭-এ উল্লিখিত হিসাবে নিশ্চিত করা হয়েছে। যখন নবী মুহাম্মদ (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) ইসরা এবং মিরাজ (রাতের যাত্রা) এর সময় স্বর্গে আরোহণ করেছিলেন, তিনি তাঁর আগে আসা বিভিন্ন নবীদের দ্বারা অভিবাদন পেয়েছিলেন। প্রথম স্বর্গে, তিনি আদমের সাথে দেখা করেছিলেন; দ্বিতীয়তে, ঈসা এবং ইয়াহইয়ার সাথে; তৃতীয়তে, ইউসুফের সাথে; এবং চতুর্থতে, ইদ্রিসের (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) সাথে (তাদের সকলের উপর শান্তি বর্ষিত হোক)।
                    </p>

                    <p className="mb-4">
                        এই প্রসঙ্গটি সেই আয়াতটিতে গভীর অর্থ আনে যেখানে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) বলেন যে ইদ্রিস (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) উচ্চ মর্যাদায় উন্নীত হয়েছিলেন। এই উন্নতি কেবল তাঁর নৈতিক চরিত্র এবং ধার্মিকতাকে বোঝায় না বরং তাঁর আক্ষরিক আরোহণকেও বোঝায়, যেখানে তাঁকে চতুর্থ স্বর্গে নিয়ে যাওয়া হয়েছিল।
                    </p>

                    <p className="mb-4">
                        নবী ইদ্রিসের (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) মৃত্যুর পর, দুর্নীতি আবার দ্রুত বৃদ্ধি পেতে শুরু করেছিল। কয়েক প্রজন্ম পরে, কোনও নবুওয়তের নির্দেশনা ছাড়াই, শয়তান আদমের সন্তানদের প্রভাবিত করতে সফল হয়েছিল তাদের প্রথম শিরক (বহুঈশ্বরবাদ) কাজ করতে।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: Teachings */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4">
                        নবী ইদ্রিসের (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) <span className="text-amber-600 dark:text-amber-500">শিক্ষা:</span>
                    </h2>

                    <p className="mb-6">
                        যিনি প্রথম কলম দিয়ে লিখেছিলেন, কিছু উক্তি এবং বাণী রয়েছে যা নবী ইদ্রিসের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) শিক্ষা থেকে আসা বলে উল্লেখ করা হয়। এবং এখানে সেগুলি রয়েছে:
                    </p>

                    <Card className="my-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                "সুখী সেই ব্যক্তি যে তার নিজের কাজগুলি দেখে এবং সেগুলিকে তার রবের কাছে তার পক্ষে কথা বলার জন্য নিযুক্ত করে।"
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                "আল্লাহর অনুগ্রহের জন্য কৃতজ্ঞতা দেখানোর চেয়ে ভাল আর কেউ দেখাতে পারে না যে ব্যক্তি সেগুলি অন্যদের সাথে ভাগ করে নেয়।"
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                "লোকদের যা আছে তার জন্য তাদের প্রতি ঈর্ষা করবেন না, কারণ তারা এটি অল্প সময়ের জন্য উপভোগ করবে।"
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                "যে ব্যক্তি অতিরিক্ততায় লিপ্ত হয় সে এ থেকে উপকৃত হবে না।"
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                "জীবনের প্রকৃত আনন্দ হল প্রজ্ঞা থাকা।"
                            </p>
                        </CardContent>
                    </Card>
                </section>

            </div>
        </div>
    );
}
