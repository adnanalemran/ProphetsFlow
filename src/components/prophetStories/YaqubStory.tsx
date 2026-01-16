import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function YaqubStory() {
    return (
        <div className="mb-12 mt-6 md:mt-10">
            {/* Header Image */}
            <div className="w-full mb-8">
                <img 
                    src="/images/prophet-stories/yaqub/the-story-of-prophet-yaqub-as.png" 
                    alt="ইয়াকুব (আঃ)-এর গল্প" 
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-10">
                <span className="text-amber-600 dark:text-amber-500">নবী ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর গল্প
            </h1>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6 md:space-y-8">
                
                {/* Introduction */}
                <section className="my-8 md:my-12">
                    <p className="mb-4">
                        <strong>নবী ইয়াকুব (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ধার্মিক নবীদের একটি বংশধারা থেকে এসেছিলেন</strong> এবং তার বংশধরের মাধ্যমে একত্বের বার্তা বহন করতে থাকেন। তিনি ছিলেন নবী ইসহাকের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) পুত্র, এবং তার দাদা ছিলেন নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>)।
                    </p>

                    <img 
                        src="/images/prophet-stories/yaqub/prophet-yaqub-and-prophet-yusuf.png" 
                        alt="নবী ইয়াকুব ও নবী ইউসুফ" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        ইসলামী সাহিত্যে উল্লিখিত নবী ইয়াকুবের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) গল্প প্রায়ই নবী ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) গল্পের সাথে জড়িত।
                    </p>

                    <p className="mb-4">
                        <span className="text-amber-600 dark:text-amber-500">কুরআন</span> নবী ইসহাকের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এবং, পরবর্তীতে, ইয়াকুবের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) জীবনের বিবরণে গভীরভাবে যায় না। তাই, ইয়াকুবের প্রাথমিক জীবন সম্পর্কে যা জানা যায় তা প্রায়ই নির্ভরযোগ্য কুরআন ভাষ্যকারদের দ্বারা কিতাবের লোকদের কাছ থেকে অভিযোজিত হয়।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* The Origin of Banu Israel */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">বনু ইসরায়েল</span> (ইসরায়েলের সন্তানদের) উৎপত্তি
                    </h2>

                    <p className="mb-4">
                        নবী ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বারো পুত্রের পিতা ছিলেন। প্রথম দশজন তার প্রথম স্ত্রীর কাছে জন্মগ্রহণ করেছিলেন, যখন নবী ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এবং তার ভাই বিনইয়ামিন তার দ্বিতীয় স্ত্রীর কাছে জন্মগ্রহণ করেছিলেন। বারো পুত্র বনু ইসরায়েলের মূল বারো গোত্র গঠন করেছিল।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>কুরআন উল্লেখ করে,</strong><br />
                                <em>"বল, [হে বিশ্বাসীরা], 'আমরা আল্লাহ এবং আমাদের কাছে যা প্রকাশ করা হয়েছে এবং ইব্রাহিম এবং ইসমাইল এবং ইসহাক এবং ইয়াকুব এবং বংশধরদের [আল-আসবাত] কাছে যা প্রকাশ করা হয়েছে এবং মুসা এবং ঈসাকে যা দেওয়া হয়েছে এবং নবীদের কাছে তাদের রব থেকে যা দেওয়া হয়েছে তাতে বিশ্বাস করি। আমরা তাদের মধ্যে কোনটির মধ্যে কোন পার্থক্য করি না, এবং আমরা তাঁর কাছে মুসলিম [সমর্পণে]।'"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা বাকারা, আয়াত ১৩৬)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        এই আয়াত থেকে, এটি ইয়াকুবের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বংশধরদের উল্লেখ করে, তার বারো সন্তানকে নির্দেশ করে। ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) মিশরে প্রধানমন্ত্রী হয়ে ওঠার পর, তার সমগ্র পরিবার সেখানে চলে গিয়েছিল। তারা সেখানে শান্তিপূর্ণভাবে অনেক প্রজন্ম ধরে বাস করেছিল যতক্ষণ না তারা একজন ফেরাউনের অত্যাচারের অধীনে পড়েছিল। এখানে, তারা অনেক কষ্ট ভোগ করেছিল। নবী মুসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আসার পরই তারা মুক্তি পেয়েছিল।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        ইসরায়েলের সন্তানদের পালাতে সাহায্য করার পর, মুসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) একটি অলৌকিক ঘটনা করেছিলেন,<br /><br />
                                        <strong>"এবং [স্মরণ কর] যখন মুসা তার লোকদের জন্য পানি প্রার্থনা করেছিলেন, তাই আমরা বলেছিলাম,</strong><br />
                                        <em>'তোমার লাঠি দিয়ে পাথরটি আঘাত কর।'</em><br /><br />
                                        এবং সেখান থেকে বারোটি ঝরনা প্রবাহিত হয়েছিল, এবং প্রতিটি ব্যক্তি (বারো গোত্রকে নির্দেশ করে) তার জলাধারের স্থান জানত।<br />
                                        <em><strong><span className="text-amber-600 dark:text-amber-500">'আল্লাহর সরবরাহ থেকে খাও এবং পান কর,</span></strong> এবং পৃথিবীতে দুর্নীতি ছড়িয়ে দিয়ে অপব্যবহার করো না।'"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা বাকারা, আয়াত ৬০)</span>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/yaqub/prophet-musa-as-miracle-to-banu-israel.png" 
                                alt="নবী মুসা বনু ইসরায়েলের জন্য অলৌকিক ঘটনা" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Yaqub story in the Qur'an */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>)</span>-এর কুরআনে গল্প
                    </h2>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong><span className="text-amber-600 dark:text-amber-500">যখন ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এখনও একটি ছোট ছেলে ছিলেন</span>, তিনি এক সকালে জেগে উঠেছিলেন এবং তার পিতাকে একটি স্বপ্ন বর্ণনা করেছিলেন যা তিনি দেখেছিলেন।</strong><br />
                                <em>"হে আমার পিতা, নিশ্চয়ই আমি এগারোটি তারকা এবং সূর্য এবং চাঁদ দেখেছি; আমি তাদের দেখেছি আমার কাছে সিজদা করছে।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ৪)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        নবী ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>), স্বপ্ন ব্যাখ্যা করার ক্ষমতা দিয়ে আশীর্বাদপ্রাপ্ত, অপরিমেয় আনন্দে অভিভূত হয়েছিলেন। তিনি বুঝতে পেরেছিলেন যে স্বপ্নটি ছিল আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছ থেকে একটি নিদর্শন যে তিনি ইউসুফকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) একটি বিশেষ উদ্দেশ্যে নির্বাচন করেছিলেন, যা তার উত্তরাধিকার অব্যাহত রাখা এবং নবুওয়তে তার উত্তরসূরি হওয়া। স্বপ্নে, এটি বিশ্বাস করা হয় যে এগারোটি তারকা তার ভাইদের প্রতীক, এবং সূর্য এবং চাঁদ তার পিতামাতা।
                    </p>

                    <p className="mb-4">
                        ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ভাইদের প্রতিক্রিয়াও নিয়ে উদ্বিগ্ন ছিলেন, কারণ যদিও ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তাদের সমানভাবে আচরণ করেছিলেন, তারা ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) প্রতি ঈর্ষান্বিত বোধ করত। তিনি জানতেন যে ঈর্ষা একটি দুষ্ট আবেগ যা গুরুতর ক্ষতি করার ক্ষমতা রাখে। তাই তিনি ইউসুফকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার ভাইদের কাছে তার স্বপ্ন সম্পর্কে বলতে সতর্ক করেছিলেন।
                    </p>

                    <p className="mb-4">
                        ইয়াকুবের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) প্রচেষ্টা সত্ত্বেও, ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বিরুদ্ধে তার পুত্রদের হৃদয়ে বিদ্বেষ বছরের পর বছর ধরে বেড়ে উঠেছিল। একদিন, তার বড় পুত্ররা ইয়াকুবের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) কাছে এসেছিলেন এবং প্রস্তাব করেছিলেন যে তিনি ইউসুফকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তাদের সাথে একটি বেড়াতে যেতে অনুমতি দেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                "<em>হে আমাদের পিতা! আপনি কেন আমাদের সাথে ইউসুফকে বিশ্বাস করেন না, যদিও আমরা সত্যিই তার ভালো চাই? আগামীকাল তাকে আমাদের সাথে পাঠান যাতে সে উপভোগ করতে পারে এবং খেলতে পারে। এবং আমরা সত্যিই তার উপর নজর রাখব,</em>" <strong>তারা বলেছিল।</strong><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ১১-১২)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) অনিচ্ছুক ছিলেন।</strong><br />
                                <em>"নিশ্চয়ই, এটি আমাকে দুঃখিত করে যে তুমি তাকে নিয়ে যাবে, এবং আমি ভয় করি যে একটি নেকড়ে তোমাদের অজান্তে তাকে খেয়ে ফেলবে।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ১৩)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>পুত্ররা উত্তর দিয়েছিলেন:</strong><br />
                                <em>"যদি একটি নেকড়ে তাকে খেয়ে ফেলত, আমাদের শক্তিশালী দল সত্ত্বেও, তাহলে আমরা অবশ্যই পরাজিত হতাম!"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ১৪)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <span className="text-amber-600 dark:text-amber-500"><strong>তাই তিনি তাদের অনুরোধে সম্মত হয়েছিলেন।</strong></span><br /><br />
                                <strong>যেমন ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ভয় করেছিলেন, ভাইরা বেড়াতের সন্ধ্যায় কান্নাকাটি করে ফিরে এসেছিলেন।</strong><br />
                                <em>"আমাদের পিতা! আমরা দৌড়াচ্ছিলাম এবং ইউসুফকে আমাদের জিনিসপত্রের সাথে রেখে গিয়েছিলাম, এবং একটি নেকড়ে তাকে খেয়ে ফেলেছে! কিন্তু আপনি আমাদের বিশ্বাস করবেন না, আমরা যতই সত্যবাদী হই না কেন,"</em> তারা দাবি করেছিল, ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) রক্ত-দাগযুক্ত এবং ছেঁড়া শার্ট উপস্থাপন করে।
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <span className="text-amber-600 dark:text-amber-500">ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বুঝতে পেরেছিলেন যে তার পুত্ররা শয়তানের কানফুঁসিতে সমর্পণ করেছিল।</span> তিনি জানতেন যে তারা ইচ্ছাকৃতভাবে তাদের ভাই ইউসুফকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ক্ষতি করেছিল। কিন্তু ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এও বিশ্বাস করেছিলেন যে ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এখনও জীবিত ছিল এবং আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাকে রক্ষা করছিলেন। <em>"না! তোমাদের আত্মা অবশ্যই তোমাদের কিছু মন্দ করতে প্রলুব্ধ করেছে,"</em> তিনি রাগান্বিত হয়েছিলেন। <em>"তাই আমি কেবল সহ্য করতে পারি <strong>(ফা সাবরুন জামিল)</strong> সুন্দর ধৈর্য! এটি আল্লাহর সাহায্য যা আমি তোমাদের দাবি সহ্য করার জন্য চাই।"</em>
                    </p>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                وَجَآءُو عَلَىٰ قَمِيصِهِۦ بِدَمٖ كَذِبٖۚ قَالَ بَلۡ سَوَّلَتۡ لَكُمۡ أَنفُسُكُمۡ أَمۡرٗاۖ فَصَبۡرٞ جَمِيلٞۖ وَٱللَّهُ ٱلۡمُسۡتَعَانُ عَلَىٰ مَا تَصِفُونَ
                            </p>
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>রোমানীকরণ:</strong> Wa jaaa'oo 'alaa qameesi hee bidamin kazib qaala bal sawwalat lakum anfusukum amraa; fasabrun jameel; wallaahul musta'aanu 'alaa maatasifoon
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>বাংলা অনুবাদ:</strong> "এবং তারা ইউসুফের শার্ট নিয়ে এসেছিল, মিথ্যা রক্ত দিয়ে দাগযুক্ত। এটি দেখে তাদের পিতা চিৎকার করেছিলেন: 'না (এটি সত্য নয়); বরং তোমাদের মন্দ আত্মা তোমাদের জন্য একটি জঘন্য কাজ করা সহজ করে দিয়েছে। তাই আমি এটি ধৈর্য সহকারে, এবং ভালো অনুগ্রহে সহ্য করব। এটি আল্লাহর সাহায্য একা যা আমি তোমাদের মিথ্যা কথা বলার বিরুদ্ধে চাই।'"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ ১২:১৮)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/yaqub/yaqub-as-grief.png" 
                                alt="ইয়াকুব (আঃ) দুঃখ" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                বছর কেটে গিয়েছিল যখন <strong>ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) নীরবে ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) জন্য শোক করতে থাকেন।</strong> তার চোখ সাদা হয়ে গিয়েছিল যখন তিনি ধীরে ধীরে তার দৃষ্টিশক্তি হারিয়েছিলেন। <strong className="text-amber-600 dark:text-amber-500">কিন্তু আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ক্ষমতায় তার পুত্রকে তার কাছে ফিরিয়ে আনার প্রতি তার বিশ্বাস কখনই কমেনি।</strong>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Famine in Egypt */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                মিশর এবং প্রতিবেশী অঞ্চলগুলিতে একটি ভয়াবহ দুর্ভিক্ষ আঘাত করেছিল। নবী ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার পুত্রদের নির্দেশ দিয়েছিলেন, বিনইয়ামিন ছাড়া, সরবরাহ নিশ্চিত করার জন্য মিশরে রাজার প্রাসাদে ভ্রমণ করতে। তাদের ফিরে আসার পর, তারা তাদের পিতাকে জানিয়েছিল যে রাজার প্রাসাদের দোকানদার তাদের আরও সরবরাহ দিতে অস্বীকার করেছিল যদি তারা তাদের কনিষ্ঠ ভাইকে নিয়ে ফিরে না আসে।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/yaqub/yaqub-yusuf-famine-in-egypt.png" 
                                alt="মিশরে দুর্ভিক্ষ" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) খবরে সন্তুষ্ট ছিলেন না। ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সাথে তাকে হতাশ করার পর তিনি কীভাবে আবার তাদের বিশ্বাস করতে পারেন?<br /><br />
                                <strong>তিনি দাবি করেছিলেন:</strong><br />
                                <em>"আমি কি তাকে তোমাদের সাথে বিশ্বাস করব যেমন আমি একবার তার ভাই ইউসুফের সাথে তোমাদের বিশ্বাস করেছিলাম? কিন্তু কেবল আল্লাহই সর্বোত্তম রক্ষক, এবং তিনি দয়ালুদের মধ্যে সবচেয়ে দয়ালু।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ ১২:৬৪)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>ভাইয়েরাও তাদের ব্যাগ খোলার সময় আবিষ্কার করেছিলেন যে তাদের টাকা তাদের কাছে ফিরিয়ে দেওয়া হয়েছিল। এটি তাদের আরও তাদের পিতার কাছে অনুরোধ করতে চালিত করেছিল:</strong><br />
                                <em>"হে আমাদের পিতা! আমরা আর কী চাইতে পারি? এখানে আমাদের টাকা, সম্পূর্ণরূপে আমাদের কাছে ফিরিয়ে দেওয়া হয়েছে। এখন আমরা আমাদের পরিবারের জন্য আরও খাবার কিনতে পারি। আমরা আমাদের ভাইয়ের উপর নজর রাখব এবং একটি অতিরিক্ত উট-ভার শস্য পাব। সেই ভার সহজেই নিশ্চিত করা যেতে পারে।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ ১২:৬৫)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong><span className="text-amber-600 dark:text-amber-500">ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>)</span> আবার সম্মত হতে বাধ্য হয়েছিলেন। কিন্তু তিনি দাবি করেছিলেন:</strong><br />
                                <em>"আমি তোমাদের সাথে তাকে পাঠাব না যতক্ষণ না তুমি আমাকে আল্লাহর দ্বারা একটি গুরুতর শপথ দাও যে তুমি অবশ্যই তাকে আমার কাছে ফিরিয়ে আনবে যদি না তুমি সম্পূর্ণরূপে পরাজিত হও।"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>একবার পুত্ররা তাদের শপথ দিয়েছিল, তিনি বলেছিলেন:</strong><br />
                                <em>"আল্লাহ আমাদের যা বলেছি তার সাক্ষী।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ ১২:৬৬)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>তিনি তারপর নির্দেশ দিয়েছিলেন:</strong><br />
                                <em>"হে আমার পুত্রেরা! শহরে সবাই এক দরজা দিয়ে প্রবেশ করো না, কিন্তু পৃথক দরজা দিয়ে। আমি আল্লাহ দ্বারা নির্ধারিত ভাগ্যের বিরুদ্ধে তোমাদের সামান্যতম সাহায্য করতে পারি না। এটি কেবল আল্লাহই সিদ্ধান্ত নেন। তাঁর উপর আমি আমার বিশ্বাস রাখি। এবং তাঁর উপর, বিশ্বাসীদের তাদের বিশ্বাস রাখতে দিন।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ ১২:৬৭)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <img 
                        src="/images/prophet-stories/yaqub/yusufs-brother-return-from-egypt.png" 
                        alt="ইউসুফের ভাই মিশর থেকে ফিরে আসছে" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        পুত্ররা আবার গুরুতর খবর নিয়ে ফিরে এসেছিল। তারা তাদের পিতাকে জানিয়েছিল যে কনিষ্ঠ, বিনইয়ামিন, চুরির অভিযোগে অভিযুক্ত হয়েছিল এবং মিশরে আটক ছিল। <span className="text-amber-600 dark:text-amber-500">ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) রাগান্বিত হয়েছিলেন।</span>
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <em>"না! তোমাদের আত্মা অবশ্যই তোমাদের কিছু মন্দ করতে প্রলুব্ধ করেছে। তাই আমি কিছুই নই কিন্তু (ফা সাবরুন জামিল) সুন্দর ধৈর্য! আমি বিশ্বাস করি আল্লাহ তাদের সবাইকে আমার কাছে ফিরিয়ে আনবেন। নিশ্চয়ই তিনি একাই সর্বজ্ঞ, সর্বজ্ঞ।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ ১২:৮৩)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তিনি তারপর তাদের থেকে মুখ ফিরিয়ে নিয়েছিলেন এবং বিলাপ করেছিলেন:</strong> <em>"হায়, দরিদ্র ইউসুফ।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ ১২:৮৪)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>ভাইয়েরা তাদের দীর্ঘ-ভুলে যাওয়া ভাইয়ের প্রতি তাদের পিতার ভালোবাসায় ক্ষুব্ধ হয়েছিল।</strong><br />
                                <em>"আল্লাহর কসম! তুমি ইউসুফকে মনে রাখা বন্ধ করবে না যতক্ষণ না তুমি তোমার স্বাস্থ্য বা এমনকি তোমার জীবন হারাও।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ ১২:৮৫)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong className="text-amber-600 dark:text-amber-500">ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) উত্তর দিয়েছিলেন,</strong><br />
                                <em>"আমি আমার যন্ত্রণা এবং দুঃখের অভিযোগ কেবল আল্লাহর কাছে করি, এবং আমি আল্লাহর কাছ থেকে জানি যা তোমরা জানো না।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ ১২:৮৬)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* The Beautiful Lesson */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>)</span>-এর সুন্দর শিক্ষা
                    </h2>

                    <p className="mb-4">
                        <span className="text-amber-600 dark:text-amber-500">এ সম্পর্কে সবচেয়ে প্রশংসনীয় বিষয় হল ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) চ্যালেঞ্জিং পরিস্থিতিতে কীভাবে প্রতিক্রিয়া দেখিয়েছিলেন।</span> দুর্দশার সময়ে, তিনি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) দিকে ফিরে গিয়েছিলেন, বাক্যাংশটি মূর্ত করে, (فَصَبۡرٞ جَمِيلٞۖ) 'ফা সাবরুন জামিল', যার অর্থ "সুন্দর ধৈর্য"। এটি একটি বিশেষ ধরনের ধৈর্য যা একটি ইতিবাচক দৃষ্টিভঙ্গি বজায় রাখা এবং আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) পরিকল্পনায় অটল বিশ্বাস দ্বারা চিহ্নিত, বিশেষ করে কঠিন সময়ে।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>নবী (<span className="font-arabic">ﷺ</span>) বলেছেন,</strong><br />
                                <em>"সত্যিকারের ধৈর্য হল বিপর্যয়ের প্রথম আঘাতে।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">(সহীহ আল-বুখারী ১৩০২)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        এটি রাগ বা হতাশার কাছে হার না মানার পরিবর্তে শান্তি এবং বিশ্বাস প্রদর্শন সম্পর্কে। একজন বিশ্বাসীর কাছে, প্রতিটি পরিস্থিতি, যতই চ্যালেঞ্জিং হোক না কেন, শেষ পর্যন্ত উপকারী, যদিও এর ভালোতা অবিলম্বে স্পষ্ট নাও হতে পারে।
                    </p>

                    <p className="mb-4">
                        আমরা প্রায়ই আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) দ্বারা আমাদের বোঝার বাইরের উপায়ে পরিচালিত হই, সম্পূর্ণ ছবিটি দেখতে অক্ষম যতক্ষণ না আমরা আমাদের যাত্রার দিকে ফিরে তাকাই দেখে যে সমস্ত বিন্দু কীভাবে সংযুক্ত ছিল।
                    </p>

                    <p className="mb-4">
                        উদাহরণস্বরূপ, ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ভাইদের দ্বারা বিশ্বাসঘাতকতা এবং পরবর্তী কষ্ট অবশেষে রাজার জন্য কাজ করার এবং অসংখ্য জীবন বাঁচানোর তার ভূমিকায় নেতৃত্ব দিয়েছিল। আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰলَىٰ</span>) উপায়গুলি নিশ্চয়ই রহস্যময় এবং সর্বদা সর্বোত্তম, এমনকি যদি সেগুলি আমাদের কাছে অবিলম্বে স্পষ্ট না হয়।
                    </p>

                    <p className="mb-4">
                        <strong className="text-amber-600 dark:text-amber-500">আমাদের অবশ্যই আমাদের হৃদয় নরম করতে হবে</strong> এবং সত্যিই বুঝতে হবে যে <strong>আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) জানেন প্রত্যেকের জন্য কী সর্বোত্তম।</strong>
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Yaqub reunited with his son */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>)</span> তার পুত্রের সাথে পুনর্মিলিত
                    </h2>

                    <p className="mb-4">
                        ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তারপর তার পুত্রদের নির্দেশ দিয়েছিলেন যে তারা আবার যাবে এবং তাদের উভয় ভাইকে খুঁজবে।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <em>"হে আমার পুত্রেরা! যাও এবং ইউসুফ এবং তার ভাইকে সতর্কতার সাথে খুঁজে বের কর। এবং আল্লাহর রহমতের আশা হারিও না, কারণ কেউ আল্লাহর রহমতের আশা হারায় না যাদের কোন বিশ্বাস নেই।"</em> (<span className="text-xs text-gray-600 dark:text-gray-400">সূরা ইউসুফ ১২:৮৭</span>) <strong>তাই, পুত্ররা আবার রওনা দিয়েছিল।</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>শীঘ্রই, নবী ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>), তার হারানো পুত্রের জন্য তার শোকে অন্ধ হয়ে, তার চারপাশের লোকদের জানিয়েছিলেন:</strong><br />
                                <em>"তুমি মনে করতে পার যে আমি সেনাইল, কিন্তু আমি নিশ্চিতভাবে ইউসুফের গন্ধ অনুভব করছি।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ ১২:৯৪)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তারা উত্তর দিয়েছিল:</strong><br />
                                <em>"আল্লাহর কসম! তুমি অবশ্যই এখনও তোমার পুরানো বিভ্রান্তিতে আছ।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ ১২:৯৫)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                যখন তার পুত্ররা আবার ফিরে এসেছিল, তারা তাদের পিতার মুখের উপর একটি শার্ট ফেলে দিয়েছিল। <strong className="text-amber-600 dark:text-amber-500">আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) অলৌকিক ঘটনায়, ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার দৃষ্টিশক্তি ফিরে পেয়েছিলেন।</strong> এটি ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) শার্ট ছিল, রাজার প্রাসাদের দোকানদার!
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>অত্যধিক আনন্দিত হয়ে, ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার সন্তানদের জানিয়েছিলেন:</strong><br />
                                <em>"আমি কি তোমাদের বলিনি যে আমি সত্যিই আল্লাহর কাছ থেকে জানি যা তোমরা জানো না?"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ ১২:৯৬)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তার সন্তানেরা ইয়াকুবকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) অনুরোধ করেছিল:</strong><br />
                                <em>"হে আমাদের পিতা! আমাদের পাপের ক্ষমার জন্য প্রার্থনা করুন। আমরা অবশ্যই পাপী হয়েছি।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ ১২:৯৭)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বলেছিলেন,</strong><br />
                                <em>"আমি তোমাদের ক্ষমার জন্য আমার রবের কাছে প্রার্থনা করব। তিনি একাই নিশ্চয়ই সর্বক্ষমাশীল, সর্বদয়ালু।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ ১২:৯৮)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mt-4">
                                তাই পুত্ররা তাদের আগ্রহী পিতাকে মিশরে নিয়ে গিয়েছিল তার প্রিয় পুত্র এবং নবী ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সাথে পুনর্মিলিত করতে।
                            </p>
                        </CardContent>
                    </Card>

                    <img 
                        src="/images/prophet-stories/yaqub/Prophet-Yaqoob-prays-to-allah.png" 
                        alt="নবী ইয়াকুব আল্লাহর কাছে প্রার্থনা করছেন" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <p className="mb-4">
                        <strong>তার পরিবার গ্রহণ করার পর, ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ঘোষণা করেছিলেন:</strong><br />
                        <em>"মিশরে প্রবেশ কর, আল্লাহ চাইলে, নিরাপত্তায়।"</em><br />
                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ ১২:৯৯)</span>
                    </p>

                    <p className="mb-4">
                        ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তারপর তার পিতাকে সিংহাসনে তুলেছিলেন এবং বলেছিলেন,
                    </p>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                وَرَفَعَ أَبَوَيۡهِ عَلَى ٱلۡعَرۡشِ وَخَرُّواْ لَهُۥ سُجَّدٗاۖ وَقَالَ يَـٰٓأَبَتِ هَٰذَا تَأۡوِيلُ رُءۡيَٰيَ مِن قَبۡلُ قَدۡ جَعَلَهَا رَبِّي حَقّٗاۖ وَقَدۡ أَحۡسَنَ بِيٓ إِذۡ أَخۡرَجَنِي مِنَ ٱلسِّجۡنِ وَجَآءَ بِكُم مِّنَ ٱلۡبَدۡوِ مِنۢ بَعۡدِ أَن نَّزَغَ ٱلشَّيۡطَٰنُ بَيۡنِي وَبَيۡنَ إِخۡوَتِيٓۚ إِنَّ رَبِّي لَطِيفٞ لِّمَا يَشَآءُۚ إِنَّهُۥ هُوَ ٱلۡعَلِيمُ ٱلۡحَكِيمُ
                            </p>
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>রোমানীকরণ:</strong> Wa raf'a abawaihi 'alal 'arshi wa kharroo lahoo sujjadaa; wa qaala yaaa abati haaza taaweelu ru'yaaya min qablu qad ja'alahaa Rabbee haqqaa; wa qad ahsana beee iz akhrajanee minas sijni wa jaaa'a bikum minal badwi mim ba'di an nazaghash Shaitaanu bainee wa baina ikhwatee; inna Rabbee lateeful limaa yashaaa'; innahoo Huwal 'Aleemul Hakeem
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>বাংলা অনুবাদ:</strong> "এবং তিনি তার পিতামাতাকে সিংহাসনে তুলেছিলেন, এবং তারা তার কাছে সিজদা করেছিলেন। এবং তিনি বলেছিলেন, 'হে আমার পিতা, এটি আগের আমার দর্শনের ব্যাখ্যা। আমার রব এটি বাস্তবতা করেছেন। এবং তিনি নিশ্চয়ই আমার প্রতি ভালো ছিলেন যখন তিনি আমাকে কারাগার থেকে বের করেছিলেন এবং তোমাদের [এখানে] নিয়ে এসেছিলেন বেদুইন জীবন থেকে শয়তানের পর [যা] আমার এবং আমার ভাইদের মধ্যে [বিচ্ছিন্নতা] সৃষ্টি করেছিল। নিশ্চয়ই, আমার রব তিনি যা চান তাতে সূক্ষ্ম। নিশ্চয়ই, তিনিই সর্বজ্ঞ, সর্বজ্ঞ।'"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ ১২:১০০)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* The Passing of Yaqub */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর মৃত্যু
                    </h2>

                    <p className="mb-4">
                        নবী ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) মারা যাওয়ার আগে, তিনি তার পুত্রদের একটি চূড়ান্ত প্রশ্ন করেছিলেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <em>"আমার পর তুমি কী উপাসনা করবে?"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>তারা বলেছিল,</strong><br />
                                <em>"আমরা তোমার ঈশ্বর এবং তোমার পিতাদের ঈশ্বর, ইব্রাহিম এবং ইসমাইল এবং ইসহাক – এক ঈশ্বর উপাসনা করব। এবং আমরা তাঁর কাছে মুসলিম [সমর্পণে]।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা বাকারা, আয়াত ১৩৩)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        এই আয়াতটি কুরআনে যুক্তির অংশ বলে বিশ্বাস করা হয় যে আগে আসা সমস্ত নবী এক ঈশ্বরের উপাসনা করতেন এবং তাই, কিতাবের লোকদের দ্বারা একটি একচেটিয়া উপায়ে দাবি করা যায় না।
                    </p>
                </section>

            </div>
        </div>
    )
}
