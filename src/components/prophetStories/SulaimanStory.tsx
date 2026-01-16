import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function SulaimanStory() {
    return (
        <div className="mb-12 mt-6 md:mt-10">
            {/* Header Image */}
            <div className="w-full mb-8">
                <img 
                    src="/images/prophet-stories/sulaiman/the-story-of-prophet-sulaiman-as.png" 
                    alt="সুলাইমান (আঃ)-এর গল্প" 
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-10">
                <span className="text-amber-600 dark:text-amber-500">নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর গল্প
            </h1>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6 md:space-y-8">
                
                {/* Introduction */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/sulaiman/Prophet Sulaiman Calligraphy.png" 
                                alt="নবী সুলাইমানের ক্যালিগ্রাফি" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="mb-4">
                                নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>), যাকে ইহুদি-খ্রিস্টান ঐতিহ্যে সলোমন হিসাবে পরিচিত, ছিলেন নবী দাউদের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ১৯ জন পুত্রের মধ্যে একজন। নবী দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ছিলেন ইসরায়েলের জ্ঞানী রাজা এবং আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) একজন মহান নবী এবং রাসূল।
                            </p>
                            <p className="mb-4">
                                তাই, যখন দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) মারা গিয়েছিলেন, তিনি সুলাইমান দ্বারা উত্তরসূরি হয়েছিলেন, যাকে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তার বাবার নবুওয়তের উত্তরাধিকার বহন করার জন্য নির্বাচিত করেছিলেন। <strong>তাকে অনেক উপহার দেওয়া হয়েছিল এবং তিনি ইসরায়েলি জাতির উপর একজন ন্যায়পরায়ণ এবং জ্ঞানী শাসক হিসাবে রয়ে গিয়েছিলেন।</strong>
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        কুরআনে, এটি উল্লেখ করে, "<em className="text-amber-600 dark:text-amber-500">এবং সুলাইমান দাউদের উত্তরাধিকারী হয়েছিলেন</em>" (<a href="https://myislam.org/surah-naml/ayat-16/" className="text-blue-600 dark:text-blue-400">সূরা আন-নামল, আয়াত ১৬</a>) কিন্তু, মনে রাখবেন এটি সম্পদ বা সম্পত্তির উত্তরাধিকার বোঝায় না।
                    </p>

                    <p className="mb-4">
                        সহীহ বুখারী ৬৭২৫-এ একটি বর্ণনায়, আল্লাহর রাসূল (<span className="font-arabic">ﷺ</span>) বলেছেন,<br /> <em className="text-amber-600 dark:text-amber-500">'আমাদের সম্পত্তি (অর্থাৎ নবীদের বস্তুগত সম্পত্তি) উত্তরাধিকারসূত্রে পাওয়া যায় না, এবং আমরা যা রেখে যাই তা দান-খয়রাতে ব্যয় করতে হবে।</em>"<br /><br /> বরং, নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) যা উত্তরাধিকারসূত্রে পেয়েছিলেন তা ছিল তার বাবার আধিপত্য এবং জ্ঞান।<em className="text-amber-600 dark:text-amber-500"> "নিশ্চয়ই উলামা (পণ্ডিতরা) নবীদের উত্তরাধিকারী, এবং নবীরা দীনার বা দিরহাম রেখে যান না।"</em> (জামি আত-তিরমিজি ২৬৮২)
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Prophet Sulaiman's Humility */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">নবী সুলাইমানের</span> নম্রতা:
                    </h2>

                    <p className="mb-4">
                        নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এই দুনিয়ায় অনেক সাফল্য এবং সুখ উপভোগ করেছিলেন।
                    </p>

                    <p className="mb-4">
                        তাকে অন্যান্য নবীদের তুলনায় একটি অনন্য অবস্থানে রাখা হয়েছিল যার একটি সম্পূর্ণ সাম্রাজ্যের উপর কর্তৃত্ব ছিল। এই সাম্রাজ্য ইতিহাসে অন্য কোনো সাম্রাজ্যের মতো ছিল না। তিনি কেবল মানুষের উপরই নয়, জিন এবং বিভিন্ন প্রাণীর উপরও শাসন করেছিলেন। তিনি তাদের নেতা হিসাবে সবাই দ্বারা প্রশংসিত এবং প্রিয় ছিলেন। তদুপরি, আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সূরা আন-নামল আয়াত ১৫-১৭-এ উল্লেখ করেছেন, কীভাবে তিনি তার নবীকে বিশেষ প্রতিভা দান করেছিলেন,
                    </p>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <em>"<strong className="text-amber-600 dark:text-amber-500">নিশ্চয়ই, আমরা জ্ঞান</strong> দাউদ এবং সুলাইমানকে দান করেছিলাম। এবং তারা স্বীকারোক্তি দিয়ে বলেছিল, 'সমস্ত প্রশংসা আল্লাহর জন্য যিনি আমাদের অনেক বিশ্বস্ত বান্দার উপর বিশেষাধিকার দিয়েছেন। এবং দাউদ সুলাইমান দ্বারা উত্তরসূরি হয়েছিলেন, যিনি বলেছিলেন, 'হে লোকেরা! আমাদের পাখির ভাষা শেখানো হয়েছে এবং আমাদের প্রয়োজনীয় সবকিছু দেওয়া হয়েছে। এটি নিশ্চয়ই একটি মহান বিশেষাধিকার। সলোমনের জিন, মানুষ এবং পাখির বাহিনী তার জন্য একত্রিত হয়েছিল, নিখুঁতভাবে সংগঠিত।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— <a href="https://myislam.org/surah-naml/ayat-15/" className="text-blue-600 dark:text-blue-400">সূরা আন-নামল আয়াত ১৫-১৭</a></span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <strong>নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) যেভাবে আশীর্বাদপ্রাপ্ত হয়েছিলেন <span className="text-amber-600 dark:text-amber-500">সব উপায় বর্ণনা করার সময়,</span> তিনি যেভাবে প্রতিক্রিয়া দেখান তা অসাধারণ।</strong> ক্ষমতা এবং সাফল্য তার পদে থাকা বেশিরভাগ মানুষকে দুর্নীতিগ্রস্ত করবে।
                    </p>

                    <p className="mb-4">
                        তবুও, তাকে দেওয়া এই শ্রেষ্ঠত্ব কেবল তার নম্রতাকে বাড়িয়েছিল। তাকে যা দেওয়া হয়েছিল তা তার স্রষ্টার কাছ থেকে সরাসরি উপহার হিসাবে বিবেচনা করা হয়েছিল, এবং তাই, আয়াতটি আমাদের বলে, তিনি উত্তর দিয়েছিলেন বলছিল, <strong>"<em>আলহামদুলিল্লাহ</em>," সমস্ত প্রশংসা এবং ধন্যবাদ আল্লাহর।</strong>
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                এছাড়াও, এই সমস্ত অনুগ্রহ বর্ণনা করার সময়, অন্য সবকিছুর উপরে প্রথম যে জিনিসটি উল্লেখ করা হয়েছে তা হল জ্ঞানের উপহার। কিছু ভাষ্যকার পরামর্শ দিয়েছেন যে এই গুণটি জ্ঞানের শ্রেষ্ঠত্ব দেখায় যা মানুষ এবং জিনের উপর শাসক হওয়ার পাশাপাশি পাখি এবং অন্যান্য প্রাণীর ভাষা বলার চেয়ে শ্রেষ্ঠ।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/sulaiman/Prophet Dawud.png" 
                                alt="নবী দাউদ লেখা করছেন" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        এখানে জ্ঞান বিশ্বাস করা হয় যে এর অর্থ হল দুনিয়ার জীবন এবং নবুওয়ত বোঝার জ্ঞান। <em>তাফহীম উল-কুরআন</em>-এ, লেখক লিখেছেন যে এটি বোঝায়
                    </p>

                    <p className="mb-4 ml-4 md:ml-6 italic">
                        <em>"বাস্তবতার জ্ঞান, সেই জ্ঞান যে তাদের যা আছে তা তাদের নয় বরং আল্লাহর উপহার এবং তাদের উপর যে অধিকার দেওয়া হয়েছে তা কঠোরভাবে আল্লাহর ইচ্ছা অনুযায়ী ব্যবহার করা উচিত। কারণ, তারা আল্লাহর, প্রকৃত মালিকের সামনে সেই অধিকারগুলির সঠিক এবং ভুল ব্যবহারের জন্য জবাবদিহি করতে হবে। এই জ্ঞান হল সেই অজ্ঞতার বিপরীত যেখানে ফেরাউন জড়িত ছিল।"</em>
                    </p>

                    <p className="mb-4">
                        ফেরাউনকে আধিপত্য এবং শাসন দেওয়া হয়েছিল, কিন্তু তার অজ্ঞতা তাকে একটি ভিন্ন পথে গঠন করেছিল। <strong>এটিকে নবী সুলাইমানের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সাথে তুলনা করুন, যার চরিত্র সঠিক জ্ঞানের উপর নির্মিত হয়েছিল, যা একটি সম্পূর্ণ ভিন্ন ফলাফলের দিকে নিয়ে যায়।</strong>
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Prophet Sulaiman's Test */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">নবী সুলাইমানের</span> পরীক্ষা:
                    </h2>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>যখন নবী মুহাম্মদ (<span className="font-arabic">ﷺ</span>) জিজ্ঞাসা করা হয়েছিল যে কোন লোকেরা সবচেয়ে কঠোরভাবে পরীক্ষা করা হয়েছে, তিনি উত্তর দিয়েছিলেন,</strong><br />
                                <em>"তারা হলেন নবীরা, তারপর পরবর্তী শ্রেষ্ঠ, তারপর পরবর্তী শ্রেষ্ঠ। একজন ব্যক্তিকে তার ধর্ম অনুযায়ী পরীক্ষা করা হয়। যদি সে তার ধর্মে দৃঢ় হয়, তার পরীক্ষা আরও কঠোর হবে। যদি সে তার ধর্মে দুর্বল হয়, তাকে ধর্মে তার শক্তি অনুযায়ী পরীক্ষা করা হয়।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (জামি আত-তিরমিজি ২৩৯৮)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/sulaiman/Prophet Sulaiman answer.png" 
                                alt="নবী সুলাইমান নেতা হিসাবে দায়িত্ব" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                <strong>যদিও কাগজে, মনে হয় যে নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এর কাছে সবকিছু ছিল, এটি প্রতিকূলতা বা পরীক্ষা ছাড়া ছিল না।</strong> আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কুরআনে বলেছেন যে আমরা সুলাইমানকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) পরীক্ষা করেছি। তার সম্পদ এবং রাজত্ব একটি আশীর্বাদ মনে হতে পারে, কিন্তু সত্যিই, এটি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছ থেকে একটি কঠিন পরীক্ষা। এই অবস্থানে কতজন মনে করবে যে তারা লটারি জিতেছে কিন্তু, হিসাবের দিনে, বুঝতে পারবে যে এটি তাদের ঈমানের (বিশ্বাস) জন্য সবচেয়ে খারাপ জিনিস ছিল?
                            </p>

                            <p className="mb-4">
                                নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) একজন নেতা এবং একজন নবী হিসাবে অনেক দায়িত্ব বহন করেছিলেন। প্রথম, এবং সবচেয়ে গুরুত্বপূর্ণ, আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) একজন বান্দা হওয়ার কারণে, তিনি ক্রমাগত যিকির এবং আল্লাহর স্মরণে নিযুক্ত ছিলেন। কুরআন তাকে প্রশংসা করে বলছে, "এবং আমরা দাউদকে সুলাইমান দিয়ে আশীর্বাদ করেছিলাম। তিনি ছিলেন একজন উৎকৃষ্ট বান্দা। নিশ্চয়ই, তিনি (আমাদের দিকে, অনুতাপ এবং প্রশংসায়) ফিরে আসায় মহান ছিলেন"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-sad/ayat-30/" className="text-blue-600 dark:text-blue-400">সূরা সাদ, আয়াত ৩০</a>)</span>
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        একদিন, রাত দ্রুত আসার সাথে সাথে, তার সেরা, সবচেয়ে ভাল প্রশিক্ষিত ঘোড়াগুলি একটি অভিযানের জন্য প্রস্তুত করা হয়েছিল এবং তাকে একটি চূড়ান্ত পরিদর্শনের জন্য আনা হয়েছিল।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                এখানে, তিনি তাদের সৌন্দর্যে মুগ্ধ হয়ে পড়েছিলেন এবং তাদের প্রতি তার ভালবাসা।<br /><br />
                                <strong>কুরআন এই ঘটনার একটি বিবরণ দেয়, বলছে,</strong><br />
                                <em>"এক সন্ধ্যায় মহৎ জাতের সুপ্রশিক্ষিত এবং দৌড়ানো ঘোড়া তার কাছে আনা হয়েছিল তিনি বলেছিলেন: 'দেখ! আমি আমার রবের স্মরণের কারণে এই ভাল জিনিসগুলিকে ভালবাসতে শুরু করেছি।' যতক্ষণ না এটি পর্দার পিছনে চলে গিয়েছিল।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-sad/ayat-30/" className="text-blue-600 dark:text-blue-400">সূরা সাদ, আয়াত ৩০-৩২</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) (ٱلْخَيْرِ) <strong><em className="text-amber-600 dark:text-amber-500">আল-খায়র</em></strong> এর প্রতি তার ভালবাসা দ্বারা মুহূর্তের জন্য বিভ্রান্ত হয়ে পড়েছিলেন যাকে <strong className="text-amber-600 dark:text-amber-500">ভাল জিনিসের ভালবাসা</strong> হিসাবে অনুবাদ করা হয়েছে, এই ক্ষেত্রে, তার ঘোড়া। আয়াতটি অব্যাহত রয়েছে, "যতক্ষণ না <em>এটি</em> পর্দার পিছনে চলে গিয়েছিল," এবং এখানে, <em>'এটি'</em> ভাষ্যকারদের দ্বারা বোঝা যায় যে সূর্য দিগন্তের পিছনে অস্ত যাওয়া বোঝায়। তাই, নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) অনিচ্ছাকৃতভাবে আসরের নামাজের সময় হারিয়ে ফেলেছিলেন। এটি ইচ্ছাকৃত ছিল না বরং ভুলে যাওয়ার কারণে।
                    </p>

                    <p className="mb-4">
                        এছাড়াও, এই জিনিসগুলির প্রতি তার ভালবাসার প্রকাশ অহংকারে মূলবদ্ধ ছিল না। আয়াতটি যেমন স্পষ্ট করে, <strong className="text-amber-600 dark:text-amber-500"><em>"আমার রবের স্মরণের কারণে।"</em></strong> সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সবকিছুতেই আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ভালবাসা খুঁজে পেয়েছিলেন, কেবল একজন পর্যবেক্ষক হিসাবে সব সৃষ্টিতে আল্লাহর মহিমা এবং মহত্ত্ব দেখছিলেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>আয়াতটি অব্যাহত রয়েছে,</strong><br />
                                <em>"'তাদের আমার কাছে ফিরিয়ে আন' - এবং তিনি তাদের পা এবং ঘাড়ের উপর তার হাত চালানো শুরু করেছিলেন।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-sad/ayat-33/" className="text-blue-600 dark:text-blue-400">সূরা সাদ, আয়াত ৩৩</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <strong>তাই, নামাজ হারানোর পর এবং ঘোড়াগুলি পাঠানোর পর, তিনি অনুশোচনা অনুভব করতে শুরু করেছিলেন।</strong>
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                তিনি চলে যাওয়া ঘোড়াগুলিকে ফিরিয়ে ডেকেছিলেন এবং তাদের ঘাড় এবং পায়ের উপর তার হাত ঘষেছিলেন। এখন, এখানে মতপার্থক্য রয়েছে। কিছু ভাষ্যকার বলেছেন যে আরবি শব্দ (مَسْحًۢا) <em className="text-amber-600 dark:text-amber-500">মাশান</em>, এর অর্থ <strong className="text-amber-600 dark:text-amber-500">তরোয়াল দিয়ে আঘাত করা</strong>। এটি পরামর্শ দেয় যে নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰলَىٰ</span>) স্মরণ অবহেলা করার পর, তিনি নিজের উপর একটি শাস্তি আরোপ করেছিলেন।
                            </p>
                            <p className="mb-4">
                                তিনি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) নামে সেই ঘোড়াগুলিকে কুরবানি করেছিলেন যাদের তিনি ভালবাসতেন এবং সদকার জন্য মাংস বিতরণ করেছিলেন। অন্যদিকে, ইমাম ইবনে জারিরের মতো পণ্ডিতরা লিখেছেন যে তিনি ঘোড়াগুলিকে ফিরিয়ে ডেকেছিলেন তাদের প্যাট করতে এবং আরও তার ভালবাসা দেখাতে। এই দৃষ্টিভঙ্গি ধারণ করে যে একজন নবীর চরিত্রের জন্য কারও ত্রুটির জন্য একটি প্রাণীকে শাস্তি দেওয়া নয়। এই ঘটনা সম্পর্কে এই দুটি ব্যাখ্যা প্রায়ই উদ্ধৃত করা হয়।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/sulaiman/prophet-sulaiman-horses.png" 
                                alt="নবী সুলাইমানের ঘোড়া" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>তারপর আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) বলেছেন,</strong><br />
                                <em>"এবং নিশ্চয়ই আমরা সুলাইমানকে পরীক্ষা করেছিলাম যখন আমরা তার সিংহাসনের উপর একটি দেহ নিক্ষেপ করেছিলাম যার পর তিনি (আমাদের দিকে) ফিরে এসেছিলেন।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-sad/ayat-34/" className="text-blue-600 dark:text-blue-400">সূরা সাদ, আয়াত ৩৪</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        আমাদের এই আয়াতের ব্যাখ্যা সম্পর্কে সতর্ক থাকতে হবে। অনেক ইসরাইলিয়াত বর্ণনা রয়েছে (এগুলি হিব্রু ধর্মগ্রন্থ থেকে উদ্ভূত বর্ণনা)।
                    </p>

                    <p className="mb-4">
                        যাইহোক, এগুলি প্রায়ই উদ্ভাবিত গল্প এবং আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) নবীকে অসম্মান করে। এর সাথে, নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) যে পরীক্ষার মধ্য দিয়ে গিয়েছিলেন তা নিশ্চিতভাবে বোঝা কঠিন। আমাদের কৌতূহল আমাদের একটি উত্তর তৈরি করতে চায়, এবং তাই এটি এই ঘটনার অনেক কল্পনাপ্রসূত উদ্ভাবনের দিকে নিয়ে গেছে।
                    </p>

                    <p className="mb-4">
                        <strong>ইবনে কাথিরের পদ্ধতি আরও উপযুক্ত, <span className="text-amber-600 dark:text-amber-500">কুরআন যা অস্পষ্ট রেখেছে তা যেমন আছে তেমনই রেখে দেওয়া উচিত, এর বিশদ বিবরণে খনন না করে।</span></strong> আমাদের জন্য আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) এবং তার রাসূল যা উল্লেখ করেছেন তার বাইরে আরও বিশদ জানতে না চাওয়া ভাল। আমরা যা সংগ্রহ করতে পারি তা হল যে নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আবারও পরীক্ষা করা হয়েছিল, এবং এটি তাকে আরও বেশি ভক্তির অনুভূতি সহ আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) দিকে ফিরিয়ে দিয়েছিল।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* The Winds and The Jinns */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        বাতাস এবং <span className="text-amber-600 dark:text-amber-500">জিন</span>
                    </h2>

                    <p className="mb-4">
                        এই ঘটনার পর, নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) নিম্নলিখিত দুআ করেছিলেন বলে রেকর্ড করা হয়েছে:
                    </p>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                رَبِّ ٱغۡفِرۡ لِي وَهَبۡ لِي مُلۡكٗا لَّا يَنۢبَغِي لِأَحَدٖ مِّنۢ بَعۡدِيٓۖ إِنَّكَ أَنتَ ٱلۡوَهَّابُ
                            </p>
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>রোমানীকরণ:</strong> Rabbigh fir lee wa hab lee mulkal laa yambaghee li ahadin min ba'dee innaka Antal Wahhaab (35)
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>বাংলা অনুবাদ:</strong> "আমার রব, আমাকে ক্ষমা করুন এবং আমাকে এমন একটি রাজত্ব দিন যা আমার পরে কারও হবে না। নিশ্চয়ই, আপনি হলেন দাতা। (৩৫)"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-sad/ayat-35/" className="text-blue-600 dark:text-blue-400">সূরা সাদ আয়াত ৩৫</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        যেকোনো নবীর লক্ষ্য হল নিজেকে বস্তুগত এবং পার্থিব জীবনের সাথে উদ্বিগ্ন না করা। নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ক্ষমতা-সন্ধানের জন্য শুধু অন্য কোনো রাজত্ব চান না। এটি লক্ষ্য করে স্পষ্ট করা হয়েছে যে তিনি কীভাবে দুআ শুরু করেন। তার হৃদয় এবং মনে, তিনি তার আত্মাকে শুদ্ধ করে শুরু করেন, ক্ষমা চেয়ে। তার উদ্বেগ এই দুনিয়ার নয় বরং আখিরাত দিয়ে শুরু হয়। তদুপরি, আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তার নবীকে জানেন, তিনি জানেন সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সব স্বার্থপর ইচ্ছা থেকে মুক্ত ছিলেন এবং তার কাজে ভালত্ব ছড়িয়ে দেওয়ার জন্য এই সম্পদ চেয়েছিলেন।
                    </p>

                    <img 
                        src="/images/prophet-stories/sulaiman/Castle-interior.png" 
                        alt="নবী সুলাইমানের দুআ উত্তর দেওয়া হয়েছে" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) এই আহ্বানে সাড়া দিয়েছিলেন। তিনি সুলাইমানকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বাতাসের উপর আধিপত্য দান করেছিলেন, তাকে সমুদ্র দ্রুত এবং সহজে ভ্রমণ করতে সক্ষম করেছিলেন। সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বাতাসকে তার জাহাজ চালাতে এবং যে দিকেই তাকে খুশি করে সেই দিকে পাল তোলার নির্দেশ দিতে পারতেন।
                    </p>

                    <p className="mb-4">
                        তদুপরি, আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সমগ্র শয়তান (বিদ্রোহী এবং মন্দ জিন) তার নিয়ন্ত্রণে রেখেছিলেন। এই ক্ষমতা দিয়ে, তিনি তাদের নির্মাতা এবং ডাইভার হিসাবে নির্দেশ দিতে পারতেন, সমুদ্রের গভীরতা থেকে সবচেয়ে বিরল সম্পদ সংগ্রহ করে তার রাজ্যের জন্য সবচেয়ে বড় ভবন নির্মাণ করতে।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <em>"তারপর আমরা তার জন্য বাতাসকে বশীভূত করেছিলাম যা তার নির্দেশে যেখানে তিনি ইচ্ছা করতেন সেখানে মসৃণভাবে প্রবাহিত হয়েছিল, এবং (আমরা তাকে বশীভূত করেছিলাম) শয়তানদের (জিনদের মধ্যে), সব নির্মাতা এবং ডাইভার, এবং আরও অনেকগুলি শৃঙ্খলে আবদ্ধ। এটি আমাদের উপহার। তাই, (কারও প্রতি) অনুগ্রহ করুন বা (এটি) আটকান, (দেওয়ার) কোনো (প্রয়োজন) হিসাব ছাড়াই।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-sad/ayat-36/" className="text-blue-600 dark:text-blue-400">সূরা সাদ, আয়াত ৩৬-৩৯</a>)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* The Ants */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">পিঁপড়া</span>
                    </h2>

                    <p className="mb-4">
                        একদিন, নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আসকালন দেশে যাত্রা করার জন্য তার সেনাবাহিনীকে একত্রিত করেছিলেন। তার বিভিন্ন ব্যাটালিয়ন ছিল, যার মধ্যে জিন, মানুষ, পাখি এবং সব ধরনের প্রাণী একসাথে মার্চ করছিল। যখন তারা একটি উপত্যকার মধ্য দিয়ে যাচ্ছিল, একজন পর্যবেক্ষক পিঁপড়া দূর থেকে আসা সেনাবাহিনী লক্ষ্য করেছিল। সে অন্যদের সতর্ক করে চিৎকার করে চিৎকার করেছিল, <em>"হে পিঁপড়া, তোমাদের বাসস্থানে প্রবেশ কর যাতে সুলাইমান এবং তার সৈন্যরা তোমাদের চূর্ণ না করে যখন তারা বুঝতে পারে না।"</em> (<a href="https://myislam.org/surah-naml/ayat-18/" className="text-blue-600 dark:text-blue-400">সূরা আন-নামল, আয়াত ১৮</a>)
                    </p>

                    <p className="mb-4">
                        <strong className="text-amber-600 dark:text-amber-500">নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) পিঁপড়ার বক্তব্য শুনেছিলেন, এবং তিনি হাসতে এবং হাসতে শুরু করেছিলেন।</strong> তিনি তার স্রষ্টার ভালবাসায় এত পরিপূর্ণ ছিলেন যে তিনি আরেকটি দুআ করেছিলেন, "<em>আমার রব, আমাকে আপনার অনুগ্রহের জন্য কৃতজ্ঞ হতে সক্ষম করুন যা আপনি আমার উপর এবং আমার পিতামাতার উপর দান করেছেন এবং সৎ কাজ করতে যা আপনি অনুমোদন করেন। এবং আপনার রহমত দিয়ে আমাকে [আপনার ধার্মিক বান্দাদের] সারিতে প্রবেশ করান।</em>" (<a href="https://myislam.org/surah-naml/ayat-19/" className="text-blue-600 dark:text-blue-400">সূরা আন-নামল, আয়াত ১৯</a>)
                    </p>

                    <p className="mb-4">
                        তিনি যে শব্দগুলি ব্যবহার করেন তা নবী সুলাইমানের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) অন exemplary চরিত্র দেখায়। তিনি কৃতজ্ঞতার মূর্ত প্রতীক, সর্বদা খুশি এবং তার সাফল্যকে আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে আরোপ করেন স্ব-মহিমান্বিত করার পরিবর্তে। তার কৃতজ্ঞতা কেবল শব্দের বাইরে যায়; তিনি তার দুআতে জিজ্ঞাসা করেন, "<em>আমাকে আপনার অনুগ্রহের জন্য কৃতজ্ঞ হতে সক্ষম করুন।</em>" এই অনুরোধটি তার কৃতজ্ঞতা প্রদর্শনের ইচ্ছা প্রতিফলিত করে, তাকে দেখানো বা নির্দেশ দেওয়ার উপায় যেখানে তিনি সেবা এবং ভাল কাজের মাধ্যমে তার কৃতজ্ঞতা প্রদর্শন করতে পারেন।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* The Hoopoe Bird */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">হুদহুদ পাখি</span>
                    </h2>

                    <p className="mb-4">
                        <strong>মহান নেতাদের দ্বারা দেখানো একটি গুণ হল তাদের সঙ্গীদের সুস্থতা সম্পর্কে জানা।</strong> এটি এমন কিছু যা নবী মুহাম্মদ (<span className="font-arabic">ﷺ</span>) করতে পরিচিত ছিলেন। তিনি তার সঙ্গীদের দেখতে যেতেন যদি তিনি শুনতেন যে তারা অসুস্থ। যদি কিছু লোক সমস্যায় আক্রান্ত হয়, তিনি এটি সরানোর চেষ্টা করতেন। নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এমন একটি স্কেলে এই গুণটি ধারণ করেছিলেন যা আমরা কল্পনাও করতে পারি না।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                তিনি তার সেনাবাহিনী পরিদর্শন করছিলেন এবং হুদহুদ পাখিদের মধ্যে লক্ষ্য করেছিলেন যে একটি অনুপস্থিত ছিল।<br /><br />
                                <strong>তিনি বলেছিলেন,</strong><br />
                                <em>"কেন আমি হুদহুদ দেখতে পাচ্ছি না - নাকি সে অনুপস্থিতদের মধ্যে?"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-naml/ayat-20/" className="text-blue-600 dark:text-blue-400">সূরা আন-নামল, আয়াত ২০</a>)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার সমস্ত বিষয় সম্পর্কে সচেতন ছিলেন, একটি পাখি পর্যন্ত। এর অনুপস্থিতি তাকে উদ্বিগ্ন করেছিল এবং লক্ষ্য করা যায়নি,<br />
                                <em>"আমি তার উপর একটি গুরুতর শাস্তি আরোপ করব বা হয়তো তাকে হত্যা করব যদি না সে একটি যুক্তিসঙ্গত কারণ (তার অনুপস্থিতির জন্য) নিয়ে আসে।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-naml/ayat-21/" className="text-blue-600 dark:text-blue-400">সূরা আন-নামল, আয়াত ২১</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                সবকিছুর একটি ভূমিকা রয়েছে, কিছু ভাষ্যকার বলেছেন যে হুদহুদ পাখি আগে নবী সুলাইমানকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) পানি দেখাতে পথনির্দেশ করেছিল। অন্যরা পরামর্শ দিয়েছেন যে এই পাখিগুলি সূর্য থেকে ছায়া প্রদান করেছিল। <strong>যাইহোক, একক পাখির অনুপস্থিতি অনুভূত এবং জানা ছিল।</strong> কিছু নেতা সরাসরি রাগ এবং শাস্তিতে ডিফল্ট করবে, অনুপস্থিতিকে তাদের কর্তৃত্বের জন্য একটি চ্যালেঞ্জ হিসাবে দেখে। কিন্তু নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) শান্ত ছিলেন, তিনি প্রথমে কারণ খুঁজে বের করতে বলেছিলেন।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/sulaiman/Bird.png" 
                                alt="হুদহুদ পাখি" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <img 
                        src="/images/prophet-stories/sulaiman/bilqis-kingdom-according-to-hoopoe.png" 
                        alt="হুদহুদ পাখি বিলকিসের রাজ্য সম্পর্কে বলে" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>হুদহুদ পাখি তখন উপস্থিত হয়েছিল,</strong><br />
                                <em>"আমি এমন জ্ঞান আয়ত্ত করেছি যা আপনি জানেন না।"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                কীভাবে এটি হতে পারে নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) নিজের কাছে ভেবেছিলেন? তার জিন, প্রাণী এবং মানুষের মাধ্যমে তার চোখ এবং কান সর্বত্র ছিল। এটি তার কাছে অবাক করা ছিল যে একটি ছোট পাখি অজানা খবর আনতে পারে। তাই, তিনি মনোযোগ সহকারে শুনেছিলেন যখন পাখিটি অব্যাহত রেখেছিল,<br />
                                <em>"আমি আপনাকে সাবা' (শেবা) থেকে একটি নিশ্চিত তথ্য এনেছি। নিশ্চয়ই, আমি সেখানে একজন মহিলাকে তাদের শাসন করতে দেখেছি, এবং তাকে সবকিছু দেওয়া হয়েছে, এবং তার একটি মহান সিংহাসন রয়েছে। আমি তাকে এবং তার লোকদের সূর্যের কাছে সিজদা করতে দেখেছি আল্লাহর পরিবর্তে, এবং শয়তান তাদের কাজকে তাদের কাছে আনন্দদায়ক করেছে এবং তাদের [তার] পথ থেকে সরিয়ে দিয়েছে, তাই তারা পথনির্দেশিত নয়, [এবং] তাই তারা আল্লাহর কাছে সিজদা করে না, যিনি আসমান এবং জমিনে যা লুকানো আছে তা প্রকাশ করেন এবং জানেন আপনি যা গোপন করেন এবং যা প্রকাশ করেন - আল্লাহ - তিনি ছাড়া কোন উপাস্য নেই, মহান সিংহাসনের রব।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-naml/ayat-22/" className="text-blue-600 dark:text-blue-400">সূরা আন-নামল, আয়াত ২২-২৬</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <strong>হুদহুদ পাখি যা বলেছিল তা সত্য কিনা তা দেখতে, তিনি পাখিটিকে বলেছিলেন,</strong><br />
                        <em>"আমার এই চিঠিটি নিয়ে যাও এবং তাদের কাছে পৌঁছে দাও। তারপর তাদের ছেড়ে যাও এবং দেখ [উত্তর] তারা কী ফিরিয়ে দেবে।"</em><br />
                        <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-naml/ayat-28/" className="text-blue-600 dark:text-blue-400">সূরা আন-নামল, আয়াত ২৮</a>)</span>
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* The Queen of Sheba */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">শেবার রানী</span>
                    </h2>

                    <p className="mb-4">
                        <strong>শেবার রানী এখন যা ইয়েমেন হিসাবে পরিচিত, বা কুরআন যেমন উল্লেখ করে, সাবা (শেবা) এর উপর শাসন করতেন</strong>। যদিও কুরআন এটি স্পষ্টভাবে উল্লেখ করে না, এটি বিশ্বাস করা হয় যে তার নাম ছিল বিলকিস।
                    </p>

                    <p className="mb-4">
                        আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) বলেছেন যে তাকে ক্ষমতা, কর্তৃত্ব এবং একটি মহান সিংহাসন দেওয়া হয়েছিল। তবুও, তার সাম্রাজ্য নবী সুলাইমানের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আকার এবং মহত্ত্বের সাথে মিল ছিল না, কিন্তু এটি নিজের অধিকারে উল্লেখযোগ্য ছিল। তার কাছে তার প্রয়োজনীয় সবকিছু ছিল।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তিনি (রানী) চিঠি পাওয়ার পর তার কর্মকর্তাদের বলেছিলেন,</strong><br />
                                <em>"হে নেতারা, আমার কাছে একটি সম্মানিত চিঠি পৌঁছানো হয়েছে। এটি সুলাইমানের কাছ থেকে, এবং এটি পড়ে 'আল্লাহর নামে, সর্বদয়ালু, অত্যন্ত দয়ালু। আমার বিরুদ্ধে বিদ্রোহ করো না, এবং আমার কাছে আত্মসমর্পণে আসো।'"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-naml/ayat-29/" className="text-blue-600 dark:text-blue-400">সূরা আন-নামল, আয়াত ২৯-৩১</a>)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>রানী খুবই উদ্বিগ্ন হয়ে পড়েছিলেন</strong>, এই চিঠিটিকে যুদ্ধের ইঙ্গিত হিসাবে দেখে, তিনি তার বিশ্বস্ত উপদেষ্টাদের সাহায্য পরামর্শের জন্য ডেকেছিলেন,<br />
                                <em>"হে নেতারা, এই বিষয়ে আমাকে আপনার পরামর্শ দিন কারণ আমি আপনার ছাড়া কোনো দৃঢ় সিদ্ধান্ত নিই না।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-naml/ayat-32/" className="text-blue-600 dark:text-blue-400">সূরা আন-নামল, আয়াত ৩২</a>)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তারা উত্তর দিয়েছিল,</strong><br />
                                <em>"আমরা শক্তি এবং মহান সামরিক শক্তির মানুষ, কিন্তু সিদ্ধান্ত আপনার, তাই আপনি যা নির্দেশ করবেন তা সিদ্ধান্ত নিন।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-naml/ayat-33/" className="text-blue-600 dark:text-blue-400">সূরা আন-নামল, আয়াত ৩৩</a>)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>তিনি বিষয়টিতে বেশ বাস্তবসম্মতভাবে সাড়া দিয়েছিলেন,</strong><br />
                                <em>"শান্তি এবং বন্ধুত্ব ভাল এবং জ্ঞানী; যুদ্ধ কেবল অপমান আনে, মানুষকে দাসত্ব করে এবং ভাল জিনিস ধ্বংস করে। আমি সুলাইমানের কাছে উপহার পাঠানোর সিদ্ধান্ত নিয়েছি, আমাদের সবচেয়ে মূল্যবান ধন থেকে নির্বাচিত। উপহার পৌঁছে দেওয়া দরবারীরাও সুলাইমান এবং তার সামরিক শক্তি সম্পর্কে জানার সুযোগ পাবে"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <img 
                        src="/images/prophet-stories/sulaiman/prophet-sulaiman-kingdom.png" 
                        alt="নবী সুলাইমানের রাজ্য এবং সেনাবাহিনী" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) দল তাকে খবর এনেছিল যে বিলকিসের বার্তাবাহকরা একটি উপহার নিয়ে পথে ছিল। <strong className="text-amber-600 dark:text-amber-500">তিনি বুদ্ধিমত্তার সাথে তার সেনাবাহিনীকে জড়ো করেছিলেন তার শক্তি দেখাতে এবং দেখাতে।</strong> তিনি জানতেন যে তারা সম্ভবত বিলকিসের জন্য গোয়েন্দা সংগ্রহ করার চেষ্টা করবে। যখন তারা পৌঁছেছিল, তারা তার সেনাবাহিনী জরিপ করেছিল এবং অবিলম্বে জানতে পেরেছিল যে তারা একটি অপ্রতিরোধ্য সেনাবাহিনীর সামনে দাঁড়িয়ে আছে।
                    </p>

                    <p className="mb-4">
                        তারা কখনই সিংহ, বাঘ, পাখি এবং সৈন্যদের এমন আদেশ এবং গৃহপালিত দেখেনি।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                তারা তারপর সুলাইমানকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) উপহার উপস্থাপন করেছিল, কিন্তু এটি তাকে সামান্যতম আগ্রহী করেনি। তার সততা কয়েকটি উপহার দিয়ে কেনা যায়নি। <strong><span className="text-amber-600 dark:text-amber-500">তার কেবল একটি উদ্দেশ্য ছিল এবং তা ছিল তাওহীদের বিশ্বাস ছড়িয়ে দেওয়া</span>, বা আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) একত্ব।</strong>
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/sulaiman/Gift.png" 
                                alt="বিলকিসের উপহার" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>তিনি বলেছিলেন,</strong><br />
                                <em>"তুমি কি আমাকে সম্পদ প্রদান কর? কিন্তু আল্লাহ আমাকে যা দিয়েছেন তা তোমাকে যা দিয়েছেন তার চেয়ে ভাল। বরং, তুমি তোমার উপহারে আনন্দ কর। তাদের কাছে ফিরে যাও, কারণ আমরা অবশ্যই সৈন্যদের সাথে তাদের কাছে আসব যাদের সাথে তারা মোকাবিলা করতে অক্ষম হবে, এবং আমরা অবশ্যই তাদের অপমানের সাথে সেখান থেকে বের করে দেব, এবং তারা হীন হবে।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-naml/ayat-36/" className="text-blue-600 dark:text-blue-400">সূরা আন-নামল, আয়াত ৩৬-৩৭</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <strong>বার্তাবাহকরা তারপর উপহার নিয়ে বিলকিসের কাছে ফিরে গিয়েছিল এবং তাকে নবী সুলাইমানের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এবং তার রাজ্যের মহত্ত্বের রিপোর্ট করেছিল।</strong> রানী তার দ্বারা মুগ্ধ হয়েছিলেন এবং সিদ্ধান্ত নিয়েছিলেন যে তিনি তার আমন্ত্রণ গ্রহণ করবেন কিন্তু তার সাথে সরাসরি কথা বলতে চেয়েছিলেন। তিনি তারপর নিজেকে প্রস্তুত করেছিলেন এবং জেরুজালেমে ভ্রমণের জন্য রওনা হয়েছিলেন।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* The Throne of Bilqis */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        বিলকিসের <span className="text-amber-600 dark:text-amber-500">সিংহাসন</span>
                    </h2>

                    <p className="mb-4">
                        নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) কৌশলগতভাবে তার শক্তি প্রদর্শন করতে চেয়েছিলেন বাস্তবে এটি ব্যবহার করার পরিবর্তে। রানীর ইসলাম গ্রহণের প্রবণতা বোঝার সাথে, তিনি তার বিশ্বাসকে শক্তিশালী করার জন্য একটি অলৌকিক ঘটনা সহজতর করতে চেয়েছিলেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/sulaiman/Ifrit.png" 
                                alt="সুলাইমান জিনদের সিংহাসন ধরতে বলে" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>তিনি তার জিনদের চ্যালেঞ্জ করেছিলেন, কুরআনে বলা হয়েছে,</strong><br />
                                        <em>"হে জিনদের সমাবেশ, তোমাদের মধ্যে কে তাদের আমার কাছে আত্মসমর্পণে আসার আগে তার সিংহাসন আমার কাছে আনবে?"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-naml/ayat-38/" className="text-blue-600 dark:text-blue-400">সূরা আন-নামল, আয়াত ৩৮</a>)</span>
                                    </p>
                                </CardContent>
                            </Card>
                            <p className="mb-4">
                                <strong>এই মিশনটি সহজ কাজ ছিল না:</strong> তার প্রাসাদে লক্ষ্য না করে প্রবেশ করা, সিংহাসন সুরক্ষিত করা, এবং রানীর আগমনের আগে এটি পরিবহন করা। কিন্তু এটি সম্পন্ন করা, তিনি বিশ্বাস করেছিলেন, তাকে আল্লাহর সীমাহীন শক্তি এবং নিয়ন্ত্রণ দেখতে সাহায্য করবে। তিনি ব্যাখ্যা করতে পারতেন যে কীভাবে আল্লাহর সক্ষমতা, তার নিজের শক্তি নয়, এমন অলৌকিক ঘটনাগুলি সম্ভব করেছিল।
                            </p>
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>জিনদের মধ্যে একজন শক্তিশালী বলেছিল,</strong><br />
                                <em>"আমি আপনার স্থান থেকে উঠার আগে এটি আপনার কাছে নিয়ে আসব, এবং নিশ্চয়ই, আমি এই [কাজের] জন্য শক্তিশালী এবং বিশ্বস্ত।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-naml/ayat-39/" className="text-blue-600 dark:text-blue-400">সূরা আন-নামল, আয়াত ৩৯</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এই জিনকে উত্তর দেননি। তারপর আরেকটি জিন, যাকে বলা হয়েছিল যে তার কাছে বইয়ের জ্ঞান ছিল, বলেছিল যে সে এর চেয়ে আরও দ্রুত এটি আনতে পারে। নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) চোখের পলক ফেলার আগেই, হুদহুদ পাখি যে মহান সিংহাসনের কথা বলেছিল তা তার সামনে রাখা হয়েছিল।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/sulaiman/Jinn & Throne.png" 
                                alt="জিন সিংহাসন নিয়ে আসছে" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>তিনি আবারও আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) আশীর্বাদে বিস্মিত হয়েছিলেন এবং অবিলম্বে <span className="text-amber-600 dark:text-amber-500">দুআতে ফিরে গিয়েছিলেন,</span></strong><br />
                                <em>"এটি আমার রবের অনুগ্রহ, যাতে তিনি আমাকে পরীক্ষা করতে পারেন যে আমি কৃতজ্ঞ নাকি অকৃতজ্ঞ। যে কৃতজ্ঞ সে তার নিজের সুবিধার জন্য কৃতজ্ঞ, এবং যে অকৃতজ্ঞ, তাহলে আমার রব প্রয়োজন-মুক্ত, উদার"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-naml/ayat-40/" className="text-blue-600 dark:text-blue-400">সূরা আন-নামল, আয়াত ৪০</a>)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* The Queen Arrives */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">রানী</span> আসে
                    </h2>

                    <p className="mb-4">
                        যখন বিলকিস নবী সুলাইমানের প্রাসাদে পৌঁছেছিল, তাকে একটি অনুষ্ঠানে স্বাগত জানানো হয়েছিল। আগে, নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার প্রতিক্রিয়া পরীক্ষা করার জন্য সিংহাসনটি সামান্য ছদ্মবেশ করতে বলেছিলেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/sulaiman/Bilqis Throne move.png" 
                                alt="বিলকিসের সিংহাসন সরানো হয়েছে" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>তিনি তাকে বলেছিলেন</strong>,<br />
                                        <em>"তোমার সিংহাসন কি এর মতো?"</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        তিনি জ্ঞানী এবং ধৈর্যশীল ছিলেন। তিনি বেশিরভাগ লোকের মতো এই দাবিকে প্রত্যাখ্যান করতে তাড়াহুড়ো করেননি, দেখে যে এটি অকল্পনীয় হবে যে সিংহাসন যা তিনি এইমাত্র ছেড়ে গিয়েছিলেন এখন তার উপস্থিতিতে রয়েছে। পরিবর্তে, তিনি এটির দিকে তাকিয়ে রইলেন, সমস্ত বিশদ মূল্যায়ন করছিলেন এবং লক্ষ্য করছিলেন যে আকর্ষণীয় মিল।
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>তিনি উত্তর দিয়েছিলেন,</strong><br />
                                        <em>"এটি একই বলে মনে হয়।"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-naml/ayat-42/" className="text-blue-600 dark:text-blue-400">সূরা আন-নামল, আয়াত ৪২</a>)</span>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        এই সহজ মিথস্ক্রিয়া থেকে, সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) দেখে মুগ্ধ হয়েছিলেন যে তিনি তার পদ্ধতিতে খুব কূটনৈতিক ছিলেন।<br /><br />
                                        <strong>তিনি তারপর বলতে থাকেন,</strong><br />
                                        <em>"আমাদের এই আগেও সত্য চিনতে দেওয়া হয়েছে, এবং আমরা ইতিমধ্যে আত্মসমর্পণ করেছি।"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) রানীকে তার প্রাসাদের মধ্য দিয়ে নিয়ে যাওয়ার সময়, তিনি তাকে একটি মহান হলের মধ্যে নিয়ে গিয়েছিলেন যা জিনদের দ্বারা নির্মিত হয়েছিল। মেঝেটি স্বচ্ছ কাচের একটি পুরু স্তর দিয়ে তৈরি করা হয়েছিল, এবং এর নীচে পানি প্রবাহিত হচ্ছিল। মেঝেটিকে পানির একটি পুল হিসাবে ভুল করে, রানী তার পোশাক তুলে ধরেছিলেন এটিকে শুকনো রাখতে। সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) স্পষ্ট করেছিলেন, "নিশ্চয়ই, এটি একটি প্রাসাদ [যার মেঝে] কাচ দিয়ে মসৃণ করা হয়েছে।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-naml/ayat-44/" className="text-blue-600 dark:text-blue-400">সূরা আন-নামল, আয়াত ৪৪</a>)</span>
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/sulaiman/bilqis-walks-on-glass-floor.png" 
                                alt="বিলকিস কাচের উপর হাঁটছে" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        তার হৃদয়ে, তিনি ইতিমধ্যে ইসলামের দিকে আকৃষ্ট হয়েছিলেন, কিন্তু এই অভিজ্ঞতা তাকে আরও কিছু উপলব্ধি করিয়েছিল - বাহ্যিক চেহারা মানুষের বোঝাপড়াকে প্রতারিত করতে পারে। তিনি সুলাইমানের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) পাঠ থেকে সংযোগ করতে শুরু করেছিলেন এবং দেখেছিলেন যে তাদের বিশিষ্টতার কারণে সূর্য এবং চাঁদের উপাসনা করা কতটা বোকামি ছিল।
                    </p>

                    <p className="mb-4">
                        <strong>এটি দৃশ্যমান বাস্তবতা, কিন্তু সত্যিই, কেবল আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাদের চেহারাকে বিশিষ্ট করতে পারতেন।</strong> সেই মুহূর্তে, তিনি বহুঈশ্বরবাদের ধর্ম ত্যাগ করেছিলেন এবং ইসলাম গ্রহণ করেছিলেন, বলছিলেন, "<strong><em className="text-amber-600 dark:text-amber-500">আমার রব, আমি নিশ্চয়ই নিজেকে ক্ষতি করেছি, এবং এখন আমি সুলাইমানের সাথে, সমস্ত বিশ্বের রব আল্লাহর কাছে আত্মসমর্পণ করছি।</em></strong>"<br />
                        <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-naml/ayat-44/" className="text-blue-600 dark:text-blue-400">সূরা আন-নামল, আয়াত ৪৪</a>)</span>
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Jinns and Their Magic */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">জিন</span> এবং তাদের জাদু
                    </h2>

                    <p className="mb-4">
                        নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) জিনদের উপর আধিপত্য অর্জনের আগে, তাদের মধ্যে কিছু সঠিক পথ থেকে বিচ্যুত হয়েছিল এবং তাদের জাদুর বই দিয়ে মানুষকে প্রতারিত করতে সময় ব্যয় করেছিল।
                    </p>

                    <p className="mb-4">
                        <strong>তারা মিথ্যা দাবি করেছিল যে ভবিষ্যত বলার এবং অদৃশ্য দেখার ক্ষমতা রয়েছে, যা অনেককে ভুল বিশ্বাসের দিকে নিয়ে যায়।</strong> আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সমর্থনে, নবী সুলাইমান এই অনুশীলনের অবসান ঘটিয়েছিলেন। তিনি জিনদের বশীভূত করেছিলেন, thereby মানুষকে মিথ্যা উপাসনা থেকে রক্ষা করেছিলেন। তাদের শাস্তির জন্য, জিনদের জনসেবক করা হয়েছিল নবী সুলাইমানের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) যে কোনো কাজ সম্পাদন করতে সাহায্য করছিল।
                    </p>

                    <p className="mb-4">
                        কুরআন সূরা সাবা আয়াত ১২-১৩-এ গল্পের এই অংশটি উল্লেখ করে,
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <em>"এবং সলোমনের কাছে [আমরা বশীভূত করেছিলাম] বাতাস - এর সকাল [যাত্রা ছিল] এক মাসের - এবং এর বিকাল [যাত্রা ছিল] এক মাসের, এবং আমরা তার জন্য [তরল] তামার একটি ঝরনা প্রবাহিত করেছিলাম। এবং জিনদের মধ্যে এমন ছিল যারা তার রবের অনুমতি দ্বারা তার জন্য কাজ করত। এবং তাদের মধ্যে যে আমাদের আদেশ থেকে বিচ্যুত হয়েছিল - আমরা তাকে জ্বলন্ত আগুনের শাস্তির স্বাদ দেব। তারা তার জন্য যা ইচ্ছা করেছিল তা তৈরি করেছিল: উঁচু কক্ষ, মূর্তি, জলাধারের মতো বাটি, এবং স্থির কেটল। [আমরা বলেছিলাম], 'কাজ কর, হে দাউদের পরিবার, কৃতজ্ঞতায়।' এবং আমার বান্দাদের মধ্যে অল্পই কৃতজ্ঞ।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— <a href="https://myislam.org/surah-saba/ayat-12/" className="text-blue-600 dark:text-blue-400">সূরা সাবা, আয়াত ১২-১৩</a></span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Prophet Sulaiman's Death */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">নবী সুলাইমানের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span> মৃত্যু
                    </h2>

                    <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/sulaiman/Prophet Sulaiman last.png" 
                                alt="নবী সুলাইমানের মৃত্যু" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="mb-4">
                                <strong><span className="text-amber-600 dark:text-amber-500">আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সময় কাছে আসার সাথে সাথে তার বিশ্বস্ত বান্দাকে তার কাছে ফিরিয়ে নেওয়ার জন্য</span>, সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) একটি চূড়ান্ত অনুরোধ করেছিলেন।</strong> তিনি জিজ্ঞাসা করেছিলেন যে মৃত্যুর ফেরেশতা তার আত্মা নিতে পারে কিনা যখন তিনি তার লাঠির দ্বারা সমর্থিত, সোজা, বসে ছিলেন। আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তার অনুরোধ মঞ্জুর করেছিলেন। সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) জিনদের পরিশ্রম করতে দেখার সময়, ফেরেশতা নিঃশব্দে এসে তার আত্মা নিয়েছিল। তার দেহ সমর্থিত রয়ে গিয়েছিল, এই দুনিয়া থেকে প্রস্থানের কোনো লক্ষণ দেখাচ্ছিল না।
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        নবীর মৃত্যু সম্পর্কে অজ্ঞ, জিন দিনের পর দিন নিরলসভাবে কাজ করতে থাকল। <strong>কিছু উইপোকা এসে তার লাঠি খেয়ে ফেলার পরেই নবী সুলাইমানের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) <span className="text-amber-600 dark:text-amber-500">দেহ মেঝেতে পড়ে গিয়েছিল।</span></strong>
                    </p>

                    <p className="mb-4">
                        শুধুমাত্র তখনই লোকেরা তার মৃত্যুর কথা জানতে পেরেছিল। তারা চারপাশে জড়ো হয়েছিল এবং প্রশ্ন করেছিল যে তিনি কতক্ষণ এমন ছিলেন।
                    </p>

                    <p className="mb-4">
                        তারা ভাবছিল যে কীভাবে জিনরা তার মৃত্যু সম্পর্কে অজ্ঞ রয়ে গিয়েছিল। এই ঘটনাটি তার লোকদের দেখানোর জন্য একটি শক্তিশালী প্রদর্শন হিসাবে কাজ করেছিল যে মন্দ জিনরা সত্যিই অদৃশ্য দেখতে এবং ভবিষ্যত জানতে অক্ষম। যদি তারা নবীর মৃত্যুর কথা জানত, তাহলে তারা তাদের স্টেশন ছেড়ে দিত এবং অবিলম্বে কাজ বন্ধ করত।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>কুরআন এই মুহূর্তটি ধারণ করে, বলছে,</strong><br />
                                <em>"তাই, যখন আমরা সিদ্ধান্ত নিয়েছিলাম (যে) মৃত্যু (আসা উচিত) তার উপর, কিছুই তাদের তার মৃত্যুর কোনো ইঙ্গিত দেয়নি, একটি ভূমির প্রাণী ছাড়া যা তার রাজদণ্ড খেয়ে ফেলেছিল। তাই, যখন তিনি পড়ে গিয়েছিলেন, জিনরা জানতে পেরেছিল যে যদি তাদের অদৃশ্যের জ্ঞান থাকত, তাহলে তারা (এত দীর্ঘ) অপমানজনক শাস্তিতে থাকত না।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-saba/ayat-14/" className="text-blue-600 dark:text-blue-400">সূরা সাবা, আয়াত ১৪</a>)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

            </div>
        </div>
    )
}
