import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function SalihStory() {
    return (
        <div className="mb-12 mt-6 md:mt-10">
            {/* Header Image */}
            <div className="w-full mb-8">
                <img 
                    src="/images/prophets/salih.png" 
                    alt="সালেহ (আঃ)-এর গল্প" 
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-10">
                <span className="text-amber-600 dark:text-amber-500">নবী সালেহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর গল্প
            </h1>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6 md:space-y-8">
                
                {/* Section: Introduction */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophets/salih.png" 
                                alt="নবী সালেহের ক্যালিগ্রাফি" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                নবী সালেহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) ছিলেন মহান নবী নূহের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) বংশধর। <strong>তিনি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) দ্বারা থামুদ লোকদের পথনির্দেশ করতে সাহায্য করার জন্য নির্বাচিত হয়েছিলেন।</strong> এটি একটি প্রাচীন গোত্র ছিল যারা আল-হিজরে বসতি স্থাপন করেছিল, এখন যা মাদাইন সালেহ (সালেহের শহর) নামে পরিচিত, যা উত্তর-পশ্চিম আরবে অবস্থিত।
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        থামুদ লোকেরা পূর্ববর্তী সম্প্রদায় আদের উত্তরসূরি ছিল। যেমন আমরা নবী হুদের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) গল্পে আরও বিস্তারিতভাবে আচ্ছাদিত করেছি, আদের লোকেরা ছিল অত্যন্ত শক্তিশালী এবং ধনী জাতি। তারা শারীরিকভাবে শক্তিশালী এবং লম্বা ছিল। তারা চমৎকার নির্মাতাও ছিল, উচ্চ টাওয়ার নির্মাণ করত। কিন্তু আল্লাহ (<span className="font-arabic">سُبْحَٰনَهُۥ وَتَعَٰلَىٰ</span>) তাদের পতন ঘটিয়েছিলেন তাদের অহংকারের কারণে যখন তারা বারবার নবী হুদের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) সতর্কতা প্রত্যাখ্যান করেছিল।
                    </p>

                    {/* Quran Verse 1 */}
                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardHeader>
                            <CardTitle className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                فَأَمَّا عَادٞ فَٱسۡتَكۡبَرُواْ فِي ٱلۡأَرۡضِ بِغَيۡرِ ٱلۡحَقِّ وَقَالُواْ مَنۡ أَشَدُّ مِنَّا قُوَّةٗۖ أَوَلَمۡ يَرَوۡاْ أَنَّ ٱللَّهَ ٱلَّذِي خَلَقَهُمۡ هُوَ أَشَدُّ مِنۡهُمۡ قُوَّةٗۖ وَكَانُواْ بِـَٔايَٰتِنَا يَجۡحَدُونَ
                            </CardTitle>
                            <CardDescription className="text-sm md:text-base font-semibold">রোমানীকরণ:</CardDescription>
                            <CardAction className="text-xs md:text-sm text-emerald-700 dark:text-emerald-400">(সূরা ফুসসিলাত, ৪১:১৫)</CardAction>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>বাংলা অনুবাদ:</strong> "আদের ক্ষেত্রে, তারা পৃথিবীতে অহংকার করেছিল সত্য ছাড়া এবং বলেছিল, 'আমাদের চেয়ে শক্তিতে কে বড়?' তারা কি ভেবে দেখেনি যে আল্লাহ যিনি তাদের সৃষ্টি করেছেন তিনি তাদের চেয়ে শক্তিতে বড়? কিন্তু তারা আমাদের নিদর্শন প্রত্যাখ্যান করছিল।"
                            </p>
                        </CardContent>
                    </Card>

                    {/* Quran Verse 2 */}
                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardHeader>
                            <CardTitle className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                أَلَمۡ تَرَ كَيۡفَ فَعَلَ رَبُّكَ بِعَادٍ إِرَمَ ذَاتِ ٱلۡعِمَادِ ٱلَّتِي لَمۡ يُخۡلَقۡ مِثۡلُهَا فِي ٱلۡبِلَٰدِ وَثَمُودَ ٱلَّذِينَ جَابُواْ ٱلصَّخۡرَ بِٱلۡوَادِ وَفِرۡعَوۡنَ ذِي ٱلۡأَوۡتَادِ ٱلَّذِينَ طَغَوۡاْ فِي ٱلۡبِلَٰدِ فَأَكۡثَرُواْ فِيهَا ٱلۡفَسَادَ فَصَبَّ عَلَيۡهِمۡ رَبُّكَ سَوۡطَ عَذَابٍ
                            </CardTitle>
                            <CardDescription className="text-sm md:text-base font-semibold">রোমানীকরণ:</CardDescription>
                            <CardAction className="text-xs md:text-sm text-emerald-700 dark:text-emerald-400">(সূরা আল-ফজর, ৮৯:৬-১৩)</CardAction>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>বাংলা অনুবাদ:</strong> "তুমি কি ভেবে দেখনি তোমার রব কীভাবে আদের সাথে আচরণ করেছিলেন — <strong>(৬)</strong> [যাদের ছিল] ইরাম — যাদের ছিল উচ্চ স্তম্ভ, <strong>(৭)</strong> যাদের মতো কখনও জমিতে সৃষ্টি করা হয়নি? <strong>(৮)</strong> এবং [যাদের ছিল] থামুদ, যারা উপত্যকায় পাথর খোদাই করেছিল? <strong>(৯)</strong> এবং [যাদের ছিল] ফেরাউন, খুঁটির মালিক? — <strong>(১০)</strong> [সকলেই] যারা জমিতে অত্যাচার করেছিল <strong>(১১)</strong> এবং সেখানে দুর্নীতি বৃদ্ধি করেছিল। <strong>(১২)</strong> তাই তোমার রব তাদের উপর শাস্তির একটি আঘাত ঢেলে দিয়েছিলেন। <strong>(১৩)</strong>"
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        তদুপরি, কুরআনের ১৫তম সূরা তাদের গল্পের পরে "সূরা আল-হিজর" শিরোনামে উৎসর্গীকৃত, যার অর্থ 'পাথর' বা 'পাথরের জমি'। এটি একটি রেফারেন্স যে তারা কীভাবে বড় পাথরের পাহাড়ে তাদের বাড়ি, মন্দির এবং সমাধি খোদাই করত। আদের লোকদের উত্তরসূরি হিসেবে তারা আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সম্পর্কে জানত, এবং বিশ্বাস করা হয় যে তারা মূলত একজন ঈশ্বরের উপাসনা করত।
                    </p>

                    <p className="mb-4">
                        কিন্তু সমাজ সমৃদ্ধ হওয়ার সাথে সাথে এবং তারা বস্তুগত সাফল্য অর্জন করার সাথে সাথে, তারাও তাদের শ্রেষ্ঠত্বে বিশ্বাসের শিকার হয়েছিল। তাদের সাফল্য তাদের পথভ্রষ্ট করেছিল। তারা দুর্গ, মূর্তি এবং অবশেষে তাদের ক্ষমতার প্রতীক হিসেবে মূর্তি তৈরি করেছিল। তারা যে প্রাচুর্য তৈরি করেছিল তা ভাগ করার পরিবর্তে, তারা লোভী হয়ে পড়েছিল এবং দরিদ্রদের প্রতি নিষ্ঠুর হয়ে উঠেছিল। কুরআন সূরা আশ-শুআরা আয়াত ১২৮-১২৯-এ তাদের পার্থিব জীবনের প্রতি আকর্ষণ উল্লেখ করেছে, পরকালের জীবনকে অবহেলা করে:
                    </p>

                    {/* Quran Verse 3 */}
                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardHeader>
                            <CardTitle className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                أَتَبۡنُونَ بِكُلِّ رِيعٍ ءَايَةٗ تَعۡبَثُونَ وَتَتَّخِذُونَ مَصَانِعَ لَعَلَّكُمۡ تَخۡلُدُونَ
                            </CardTitle>
                            <CardDescription className="text-sm md:text-base font-semibold">রোমানীকরণ:</CardDescription>
                            <CardAction className="text-xs md:text-sm text-emerald-700 dark:text-emerald-400">(সূরা আশ-শুআরা, ২৬:১২৮-১২৯)</CardAction>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>বাংলা অনুবাদ:</strong> "তোমরা কি প্রতিটি উচ্চতায় একটি নিদর্শন তৈরি কর, নিজেদের বিনোদন করছ," <strong>(১২৮)</strong> এবং তোমরা কি নিজেদের জন্য প্রাসাদ এবং দুর্গ নিচ্ছ যাতে তোমরা চিরকাল থাকতে পার? <strong>(১২৯)</strong>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: About Prophet Saleh */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4">
                        <span className="text-amber-600 dark:text-amber-500">নবী সালেহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>)</span> সম্পর্কে:
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                এখন, নবী সালেহ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) কেবল থামুদ লোকদের মধ্যে বসবাসকারী আরেকজন মানুষ ছিলেন না। তিনি নিজের জন্য একটি নাম তৈরি করেছিলেন, সমাজে উচ্চ মর্যাদায় পৌঁছেছিলেন। তাঁর একটি স্বতন্ত্র ব্যক্তিত্ব ছিল এবং সততার একটি খ্যাতি তৈরি করেছিলেন। থামুদ লোকেরা তাঁর প্রজ্ঞা এবং গুণাবলীর জন্য তাঁকে সম্মান করত এবং তাঁকে তাদের নেতা হিসেবে নিয়োগ করার জন্য প্রস্তুত ছিল। এই সময়কালে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সালেহকে নবুওয়ত দান করেছিলেন।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophets/salih.png" 
                                alt="নবী সালেহ" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-l-4 border-emerald-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                এই ওহী দিয়ে, নবী সালেহ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তাঁর লোকদের জন্য তারা যা উপাসনা করত তার সমালোচনা করতে শুরু করেছিলেন, তাদের তাওহীদ (ঈশ্বরের একত্ব) সম্পর্কে শেখানোর চেষ্টা করেছিলেন, বলেছিলেন,<br />
                                <span className="text-emerald-700 dark:text-emerald-400 font-semibold"><em>"হে আমার লোকেরা! আল্লাহর উপাসনা কর; তাঁর ছাড়া তোমাদের অন্য কোনও দেবতা নেই। তিনি তোমাদেরকে পৃথিবী থেকে সৃষ্টি করেছেন, এবং তোমাদেরকে এতে বসবাস করতে দিয়েছেন। তাই তাঁর কাছে ক্ষমা চাও, এবং তাঁর দিকে তওবা কর। নিশ্চয়ই আমার রব নিকটবর্তী, প্রার্থনার প্রতি সাড়া দেন।"</em></span><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা হুদ, আয়াত ৬১)</span>
                            </p>

                            <p className="text-sm md:text-base leading-relaxed">
                                লোকেরা এই বক্তৃতায় হতাশ হয়েছিল। তারা নবী সালেহকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সম্মান করত কিন্তু তাঁর নতুন বার্তা পছন্দ করত না।<br /><br />
                                <strong>তারা বলেছিল,</strong><br />
                                <em>"হে সালেহ, তুমি এর আগে আমাদের মধ্যে একজন প্রতিশ্রুতিশীল মানুষ ছিলে। তুমি কি আমাদের আমাদের পিতারা যা উপাসনা করত তা উপাসনা করতে নিষেধ করছ? এবং নিশ্চয়ই আমরা যা তোমাকে আমন্ত্রণ জানাচ্ছ তার সম্পর্কে আমরা উদ্বেগজনক সন্দেহে আছি।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা হুদ, আয়াত ৬২)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        নবী মুহাম্মদের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) জীবন চাপের মতো, আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাঁর নির্বাচিত নবীদের ছোটবেলা থেকেই ভাল নৈতিকতা দিয়ে লালন-পালন করেছিলেন যাতে তারা চমৎকার আচরণের মডেল হতে পারে। যারা তাদের ওহীর আগে জানত তারা তাদের ভালবাসত এবং সম্মান করত। নবী মুহাম্মদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>), নবুওয়তের আগে, সম্পূর্ণ সম্প্রদায়ের কাছে তাঁর ডাকনাম আল-আমিন দ্বারা পরিচিত ছিলেন, যার অর্থ "বিশ্বস্ত ব্যক্তি।" মুহূর্তে তারা লোকদের তাদের অন্যায় থেকে মুখ ফিরিয়ে নিতে উৎসাহিত করতে শুরু করেছিল, শত্রুতা দেখা দিয়েছিল।
                    </p>

                    <p className="mb-4">
                        এটি ছিল নবী সালেহের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ক্ষেত্রে, যিনি শীঘ্রই লোকদের দ্বারা নির্বাচিত একজন নিযুক্ত নেতা হতে যাচ্ছিলেন। কিন্তু যখন তিনি আল্লাহর বার্তা পেয়েছিলেন, তারা হতাশ হয়েছিল। লোকেরা তারপর তাঁর বিরুদ্ধে ফিরে গিয়েছিল, "তুমি আমাদের মধ্যে একজন প্রতিশ্রুতিশীল মানুষ ছিলে।"
                    </p>

                    <p className="mb-4">
                        কিন্তু সবাই নবী সালেহের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বিরুদ্ধে মুখ ফিরিয়ে নেয়নি। কিছু নম্র উপায়ের মানুষ ছিল যারা তাঁর বার্তার আন্তরিকতায় স্পর্শ পেয়েছিল। তারা সত্য দেখেছিল, অভিজাতদের মতো নয়, উচ্চ জীবনযাত্রা এবং মর্যাদার চাকচিক্য দ্বারা অন্ধ হয়ে। তাদের ক্ষেত্রে, সম্পদ এবং ক্ষমতা আসলে একটি বাধা হিসেবে কাজ করেছিল, তাদের পরিবর্তনের প্রতি প্রতিরোধী করে তুলেছিল। নবী সালেহকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) পাগল বা আচ্ছন্ন হিসেবে খারিজ করা তাদের নিজস্ব অনৈতিক জীবনধারার মুখোমুখি হওয়ার চেয়ে অনেক সহজ ছিল।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: The Continued Dawah */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4">
                        অব্যাহত <span className="text-amber-600 dark:text-amber-500">দাওয়াহ:</span>
                    </h2>

                    <p className="mb-4">
                        সালেহ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) থামুদ লোকদের কাছে প্রচার করতে থাকেন। তিনি যুক্তি এবং বুদ্ধি দিয়ে তর্ক করেছিলেন, এবং ধীরে ধীরে কিন্তু নিশ্চিতভাবে, আরও কয়েকজন তাঁর বার্তা অনুসরণ করতে শুরু করেছিল। এটি অন্যদের উদ্বিগ্ন করেছিল; তারা ভয় করেছিল যে নবী সালেহের অনুসারীরা যদি অপ্রতিদ্বন্দ্বী রেখে দেওয়া হয় তবে সংখ্যায় বৃদ্ধি পাবে। তাই, তাঁকে বিরত রাখার জন্য, তারা তাঁর কাছে এসে বলেছিল যে আমরা আমাদের পিতাদের মতো একই দেবতাদের উপাসনা করতে চাই, কিন্তু যদি তুমি একটি মুজিজা তৈরি করতে পার, তাহলে আমরা বিশ্বাস করব যে তুমি সত্যিই আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) একজন রাসূল।
                    </p>

                    <p className="mb-4">
                        তাদের জন্য, এটি স্পষ্টতই একটি মজা ছিল। তারা মুজিজাটিকে এত হাস্যকর করতে চেয়েছিল যে এটি তাঁর পক্ষে পূরণ করা অসম্ভব হবে। তাই, নেতারা সালেহকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বসিয়ে দাবি করেছিলেন, একটি বিশাল পাথরের দিকে ইঙ্গিত করে, এটিকে দুভাগে ভাগ কর, এবং এর ভিতর থেকে একটি অত্যন্ত বড়, উলের, এবং আকর্ষণীয় উট আসবে। তারা আরও উদ্ভাবন করেছিল, যোগ করেছিল যে এটি অবশ্যই একটি স্ত্রী হতে হবে, দশ মাস গর্ভবতী, এবং সমগ্র শহরের জন্য দুধ উৎপাদন করতে সক্ষম হতে হবে।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophets/salih.png" 
                                alt="নেতারা" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                তারা হেসেছিল কারণ তারা ভেবেছিল যে কাজটি অসম্ভব হবে, কিন্তু নবী সালেহ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) হতাশ এবং দৃঢ়প্রতিজ্ঞ ছিলেন তাঁর লোকদের আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) পথে নিয়ে আসতে। তাই, তিনি তাঁর রবের কাছে লোকদের অনুরোধ মঞ্জুর করার জন্য আবেদন করেছিলেন। এবং সেই দিন এসেছিল যখন সালেহ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তাঁর লোকদের মুজিজার আগমনের সাক্ষী হতে একত্রিত করেছিলেন।
                            </p>
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: The She Camel */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4">
                        <span className="text-amber-600 dark:text-amber-500">আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>)</span> উটনী:
                    </h2>

                    <div className="w-full my-6">
                        <img 
                            src="/images/prophets/salih.png" 
                            alt="উট" 
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সেই পাথরটিকে দুভাগে ভাগ করার নির্দেশ দিয়েছিলেন, এবং এর থেকে একটি লাল, বিশাল, দশ মাস গর্ভবতী উটনী বেরিয়ে এসেছিল, লোকদের বিস্ময় এবং বিস্ময়ের জন্য। এটি তাদের মধ্যে স্পষ্ট প্রমাণ ছিল যে অনেক লোক তখনই তাদের বিশ্বাস ঘোষণা করেছিল।
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                যাইহোক, বিশাল সংখ্যাগরিষ্ঠ অপ্রভাবিত রয়ে গিয়েছিল এবং তাদের অবিশ্বাস অব্যাহত রেখেছিল, বলেছিল যে এটি বিশুদ্ধ জাদু ছাড়া আর কিছুই নয়।
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-l-4 border-emerald-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                "এবং থামুদের কাছে [আমরা পাঠিয়েছিলাম] তাদের ভাই সালেহকে। তিনি বলেছিলেন, 'হে আমার লোকেরা, আল্লাহর উপাসনা কর; তাঁর ছাড়া তোমাদের অন্য কোনও দেবতা নেই। তোমাদের রবের কাছ থেকে তোমাদের কাছে স্পষ্ট প্রমাণ এসেছে। এটি আল্লাহর উটনী [তোমাদের কাছে পাঠানো] একটি নিদর্শন হিসেবে। তাই তাকে আল্লাহর জমিতে খেতে দাও এবং তাকে ক্ষতি করো না, নতুবা তোমাদের উপর একটি বেদনাদায়ক শাস্তি আসবে।'"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আ'রাফ, আয়াত ৭৩)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        উটনী ছিল একটি জীবন্ত মুজিজা যা প্রতিদিন লোকদের ইসলামে রূপান্তরিত করেছিল। থামুদ লোকেরা নবী সালেহের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) কাছে একটি বিশাল উটের মুজিজা চেয়েছিল একটি বড় ক্ষুধা সহ, এবং এখন এটি উপস্থিত ছিল।
                    </p>

                    <p className="mb-4">
                        <span className="text-amber-600 dark:text-amber-500 font-semibold"><strong>একটি শর্ত যা নবী সালেহ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সতর্ক করেছিলেন তা হল আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) নিদর্শনকে ক্ষতি না করা।</strong></span> উটটিকে জমিতে অবাধে খেতে দাও এবং পুকুর থেকে পান করতে দাও। আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাঁর নবীকে বলেছিলেন, "আমরা তাদের জন্য একটি পরীক্ষা হিসেবে উটনী পাঠাচ্ছি; তাই তাদের দেখ (হে সালেহ) এবং ধৈর্য ধরে রাখ, এবং তাদের বল যে জল (কুয়োর) তাদের মধ্যে ভাগ করা হবে (এবং উটনীর মধ্যে), যাতে জল পাওয়ার অধিকার প্রত্যেকের দ্বারা (বিকল্পভাবে) উপস্থিত হবে।"<br />
                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-কামার, আয়াত ২৮)</span>
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: The Planned Attack */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4">
                        পরিকল্পিত <span className="text-amber-600 dark:text-amber-500">আক্রমণ:</span>
                    </h2>

                    <p className="mb-4">
                        অবিশ্বাসীরা আর এটি সহ্য করতে পারছিল না। তারা আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছ থেকে একটি নিদর্শন চেয়েছিল এবং এখন এর উপস্থিতিতে বিরক্ত হয়েছিল। উটনীর আগমন মানে তাদের প্রাণীদের খাওয়া এবং পান করার সময়সূচী বিকল্প করতে হবে, যা তারা বিরক্তিকর মনে করেছিল। তারা একটি বিশাল উট চেয়েছিল কিন্তু যখন এটি তাদের নিজস্ব পালের চেয়ে বেশি চরত এবং পান করত তখন অভিযোগ করেছিল। যখন উটনী অন্যান্য প্রাণীদের কাছে হাঁটত, তারা তার আকার এবং রঙে ভীত হয়ে পালিয়ে যেত। কিন্তু গভীরভাবে, উটের প্রতি তাদের ঘৃণা এই অগভীর কারণগুলির বাইরে ছিল। মূলত, উট ছিল একটি জীবন্ত প্রতীক। তাদের অবিরাম অন্যায়ের একটি ধ্রুবক স্মরণিকা।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>কুরআন তারপর উল্লেখ করেছে,</strong><br />
                                <em>"যখন তাদের মধ্যে সবচেয়ে দুষ্ট ব্যক্তি উটনীকে হত্যা করার জন্য উত্তেজিত হয়েছিল। কিন্তু আল্লাহর রাসূল তাদের সতর্ক করেছিলেন, 'আল্লাহর উট এবং তার পান করার পালাকে বিরক্ত করো না!'"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আশ-শামস, আয়াত ১২-১৩)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        শহরের একজন অবিশ্বাসী অনুপ্রাণিত হয়েছিল এবং উটটিকে নিচে আনার জন্য ষড়যন্ত্র করতে শুরু করেছিল। তাঁর কারণের জন্য আরও আটজন সহযোগীকে একত্রিত করে, তিনি সমগ্র শহরের সমর্থনও নিশ্চিত করেছিলেন। নবী সালেহের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ভয়াবহ শাস্তির সতর্কতা সম্পূর্ণরূপে উপেক্ষা করে, তারা তাদের মিশনে রওনা হয়েছিল。
                    </p>

                    <div className="w-full my-6">
                        <img 
                            src="/images/prophets/salih.png" 
                            alt="উট হত্যা" 
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-l-4 border-red-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                পুরুষরা একটি বড় পাথরের পিছনে লুকিয়ে ছিল, উটনীটিকে ঘনিষ্ঠভাবে দেখছিল।
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                সে কুয়োর থেকে পান করতে এগিয়ে আসার সাথে সাথে, একজন পুরুষ তার পায়ে একটি তীর দিয়ে গুলি করেছিল, যার ফলে সে পালাতে বাধা পেয়েছিল। অন্যদের অবিলম্বে এগিয়ে এসেছিল, এবং অন্যদের তাদের তরোয়াল দিয়ে তার পা কেটে তার পা কেটে ফেলেছিল। <span className="text-amber-600 dark:text-amber-500 font-semibold">এইভাবে, তারা উটনীকে হত্যা করেছিল।</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        শহরের লোকেরা এটি একটি স্পষ্ট বিজয় হিসেবে দেখেছিল এবং পুরুষদের জন্য জোরে চিৎকার করেছিল। তারা উটনীকে জবাই করে এবং তার মাংস খেয়েছিল। যখন সালেহ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এটি শুনেছিলেন, তিনি লোকদের সতর্ক করতে তাড়াহুড়ো করেছিলেন, কিন্তু এটি খুব দেরি হয়ে গিয়েছিল।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>লোকেরা তাঁকে উপহাস করে বলেছিল,</strong><br />
                                <em>"হে সালেহ, আমাদের কাছে যা তুমি আমাদের প্রতিশ্রুতি দিয়েছ তা নিয়ে এস, যদি তুমি রাসূলদের মধ্যে হও।"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>সালেহ উত্তর দিয়েছিলেন,</strong><br />
                                <em>"তোমাদের বাড়িতে তিন দিন উপভোগ কর। এটি একটি প্রতিশ্রুতি যা অস্বীকার করা হবে না।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা হুদ, ১১:৬৫)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        অবিশ্বাসীরা সালেহকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) উপহাস করেছিল এবং তাঁকে শাস্তি তাড়াতাড়ি করতে বলেছিল। নবী সালেহ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বলেছিলেন, <span className="text-amber-600 dark:text-amber-500 font-semibold"><em>"হে আমার লোকেরা, কেন তুমি ভালোর আগে মন্দকে তাড়াতাড়ি চাও? কেন তুমি আল্লাহর কাছে ক্ষমা চাও না, যাতে তোমাদের সাথে রহম করা হয়?"</em></span>
                    </p>

                    <p className="mb-4">
                        <strong>তারা উত্তর দিয়েছিল,</strong><br />
                        "<em>আমরা তোমাকে এবং তোমার সাথে যারা আছে তাদেরকে খারাপ লক্ষণ হিসেবে বিবেচনা করি।"</em> সালেহ বলেছিলেন, <em>"তোমাদের লক্ষণ আল্লাহর সাথে, কিন্তু তোমরা একটি পরীক্ষার লোক।"</em><br />
                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আন-নামল, আয়াত ৪৬-৪৭)</span>
                    </p>

                    <p className="mb-4">
                        লোকেরা কোনও মনোযোগ দেয়নি। তারা তাদের দুর্নীতির কারণের প্রতি সম্পূর্ণরূপে প্রতিশ্রুতিবদ্ধ ছিল। নয়জন ষড়যন্ত্রকারী পরবর্তীতে নবীকে হত্যা করার জন্য একত্রিত হয়েছিল।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <Card className="flex-1 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                            <CardContent className="pt-6">
                                <p className="text-sm md:text-base leading-relaxed">
                                    "<em>আল্লাহর দ্বারা পারস্পরিক শপথ নাও যে আমরা রাতে তাঁকে হত্যা করব, তিনি এবং তাঁর পরিবার। তারপর আমরা তাঁর নির্বাহককে বলব, 'আমরা তাঁর পরিবারের ধ্বংসের সাক্ষী ছিলাম না, এবং নিশ্চয়ই আমরা সত্যবাদী।'"</em><br />
                                    <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আন-নামল, ২৭:৪৯)</span>
                                </p>
                            </CardContent>
                        </Card>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophets/salih.png" 
                                alt="পুরুষরা আলোচনা করছে" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: Allah's Plan */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4">
                        <span className="text-amber-600 dark:text-amber-500">আল্লাহর</span> পরিকল্পনা:
                    </h2>

                    <p className="mb-4">
                        <strong className="text-amber-600 dark:text-amber-500">এদিকে আল্লাহর থামুদ লোকদের জন্য একটি পরিকল্পনা ছিল,</strong><br />
                        <em>"এবং তারা একটি পরিকল্পনা করেছিল, এবং আমরা একটি পরিকল্পনা করেছিলাম, যখন তারা উপলব্ধি করেনি"</em><br />
                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আন-নামল, ২৭:৫০)</span>
                    </p>

                    <p className="mb-4">
                        তাই, তিনি সালেহকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তাঁর অনুসারীদের সংগ্রহ করতে এবং শহর ছেড়ে যেতে নির্দেশ দিয়েছিলেন।
                    </p>

                    <div className="w-full my-6">
                        <img 
                            src="/images/prophets/salih.png" 
                            alt="থামুদ ধ্বংস" 
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-l-4 border-red-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                নবী সালেহের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) গুরুতর সতর্কতার তিন দিন পর, আকাশ বজ্রপাতের সাথে গর্জন করেছিল, তারপর ভয়াবহ ভূমিকম্প যা জমিকে সহিংসভাবে কাঁপিয়ে দিয়েছিল, সমগ্র গোত্র এবং তার জন্মভূমি ধ্বংস করেছিল।
                            </p>
                            <p className="text-sm md:text-base leading-relaxed mt-4">
                                একটি একক চিৎকার প্রতিধ্বনিত হয়েছিল যখন তারা সবাই একসাথে চূর্ণবিচূর্ণ হয়েছিল। প্রতিটি জীবন্ত প্রাণী যারা অবিশ্বাস করেছিল তাদের ভাগ্য সিল করা হয়েছিল। কোনও কাঠামো, যতই শক্তিশালী হোক না কেন বা এটি কী উপাদান দিয়ে তৈরি করা হয়েছিল, এই প্রতিশোধ থেকে তাদের রক্ষা করতে পারেনি।
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        এটি তাদের সকলের জন্য যারা মুজিজা চায়, এবং যখন সেগুলি প্রকাশিত হয় এবং তারা তাদের অবাধ্যতা অব্যাহত রাখে, তখন তাদের ধ্বংস করা হয়।
                    </p>

                    <p className="mb-4">
                        মনে কর যখন লোকেরা ঈসাকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) জিজ্ঞাসা করেছিল, "হে ঈসা, মারিয়ামের পুত্র! তোমার রব কি আমাদের কাছে আকাশ থেকে খাবারের একটি টেবিল পাঠাতে ইচ্ছুক?" (সূরা মায়িদাহ, আয়াত ১১২) ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) উত্তর দিয়েছিলেন, "আল্লাহকে ভয় কর, যদি তুমি বিশ্বাসী হও।" তিনি তারপর আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে ফিরে গিয়েছিলেন, আকাশ থেকে সেরা খাবার চেয়েছিলেন, তারপর আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) উত্তর দিয়েছিলেন,
                    </p>

                    {/* Quran Verse 4 */}
                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardHeader>
                            <CardTitle className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                قَالَ ٱللَّهُ إِنِّي مُنَزِّلُهَا عَلَيۡكُمۡۖ فَمَن يَكۡفُرۡ بَعۡدُ مِنكُمۡ فَإِنِّيٓ أُعَذِّبُهُۥ عَذَابٗا لَّآ أُعَذِّبُهُۥٓ أَحَدٗا مِّنَ ٱلۡعَٰلَمِينَ
                            </CardTitle>
                            <CardDescription className="text-sm md:text-base font-semibold">রোমানীকরণ:</CardDescription>
                            <CardAction className="text-xs md:text-sm text-emerald-700 dark:text-emerald-400">(সূরা মায়িদাহ, ৫:১১৫)</CardAction>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>বাংলা অনুবাদ:</strong> "নিশ্চয়ই, আমি এটি তোমাদের কাছে পাঠাব, কিন্তু তোমাদের মধ্যে যারা এর পরে অবিশ্বাস করবে — তাহলে নিশ্চয়ই আমি তাঁকে এমন একটি শাস্তি দেব যার দ্বারা আমি বিশ্বজগতের মধ্যে কাউকে শাস্তি দিইনি।"
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        থামুদের অবিশ্বাসীদের সেই দিন কোনও মিত্র ছিল না। তারা আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ক্রোধ অর্জন করেছিল।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-l-4 border-emerald-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                এদিকে, আল্লাহর অনুগ্রহ নবী সালেহকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এবং বিশ্বাসীদের রক্ষা করেছিল। <strong>তিনি একদিন আল-হিজরে ফিরে এসেছিলেন তাঁর লোকদের ধ্বংস দেখতে এবং ভারী হৃদয়ে বলেছিলেন,</strong><br />
                                <em>"হে আমার লোকেরা, আমি অবশ্যই তোমাদের কাছে আমার রবের বার্তা পৌঁছে দিয়েছি এবং তোমাদের পরামর্শ দিয়েছি, কিন্তু তোমরা পরামর্শদাতাদের পছন্দ করো না।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আ'রাফ, আয়াত ৭৯)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: Modern-Day Al-Hijr */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4">
                        আধুনিক দিনের <span className="text-amber-600 dark:text-amber-500">আল-হিজর:</span>
                    </h2>

                    <p className="mb-4">
                        আবদুল্লাহ ইবনে উমর (রা) থেকে বর্ণিত: (যখন আমরা তাবুকের যুদ্ধের জন্য যাচ্ছিলাম এবং যখন আমরা আল-হিজরের বাসিন্দাদের জায়গায় পৌঁছেছিলাম), আল্লাহর রাসূল (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আল-হিজরের বাসিন্দাদের সম্পর্কে (আমাদের) বলেছিলেন। "তোমরা এই লোকদের (বাসস্থান) প্রবেশ করো না যদি না তোমরা কাঁদতে কাঁদতে প্রবেশ কর, কিন্তু যদি তুমি কাঁদো না, তাহলে তাদের উপর প্রবেশ করো না, নতুবা তোমরা তাদের সাথে যা আক্রান্ত হয়েছিল তা দ্বারা আক্রান্ত হবে।"
                    </p>

                    <p className="mb-4">
                        আজ, এই নিদর্শনগুলি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছ থেকে রয়ে গেছে, আমাদের জন্য ছুটি উপভোগ করার জন্য নয়। বরং, আমাদের এই জায়গাগুলিতে ফিরে আসা উচিত, "কাঁদতে" অর্থে এটি একটি স্মরণিকা হওয়া উচিত, তাদের ভুল থেকে শেখার একটি পাঠ।
                    </p>

                    <p className="mb-4">
                        আয়েশা (আল্লাহ তাঁর উপর সন্তুষ্ট হন) থেকে বর্ণিত: "যখন নবী (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ঝড়ের মেঘ দেখতেন তখন তিনি এদিক-ওদিক হাঁটতেন। এবং যখন বৃষ্টি হত, তিনি শিথিল হতেন।" তিনি বলেছিলেন: "আমি তাঁর সম্পর্কে কিছু বলেছিলাম, এবং তিনি বলেছিলেন: 'আমি কী জানি?' হয়তো এটি যেমন আল্লাহ, সর্বোচ্চ বলেছেন: "এবং যখন তারা এটিকে তাদের উপত্যকায় আসা একটি মেঘ হিসেবে দেখেছিল, তারা বলেছিল, 'এটি একটি মেঘ যা আমাদের বৃষ্টি আনছে!' কিন্তু হুদ উত্তর দিয়েছিলেন 'বরং, এটি যা তুমি অধৈর্য ছিলে: একটি বাতাস, যার মধ্যে একটি বেদনাদায়ক শাস্তি,'" (৪৬:২৪ এবং সহিহ (দারুসসালাম) জামি আত-তিরমিযি ৩২৫৭)
                    </p>
                </section>

            </div>
        </div>
    );
}
