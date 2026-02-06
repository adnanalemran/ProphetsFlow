import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function IsaStory() {
    return (
        <div className="mb-12 mt-6 md:mt-10">
            <div className="w-full mb-8">
                <img 
                    src="/images/prophet-stories/isa/the story of prophet isa as.png" 
                    alt="নবী ঈসা (আঃ)-এর গল্প" 
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-10">
                <span className="text-amber-600 dark:text-amber-500">নবী ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর গল্প
            </h1>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6 md:space-y-8">
                <section className="my-8 md:my-12">
                    <p className="mb-4">
                        নবী ঈসার (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) গল্প শুরু করার আগে, মনে রাখবেন যে পরিবারের বংশবৃত্তান্ত এবং কিছু প্রাথমিক জীবনের ঘটনার প্রসঙ্গ নবী যাকারিয়ার (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) গল্পে আরও বিস্তারিতভাবে আচ্ছাদিত হয়েছে। যেহেতু তাদের সময়রেখা ওভারল্যাপ করে, তাদের গল্পে অনেক ক্রসওভার রয়েছে।
                    </p>
                </section>

                <div className="my-6">
                    <img 
                        src="/images/prophet-stories/isa/Bird.png" 
                        alt="পাখি" 
                        className="w-full h-auto rounded-lg"
                    />
                </div>

                <section className="my-8 md:my-12">
                    <p className="mb-4">
                        ইমরানের স্ত্রী, যাকে হান্নাহ বলে মনে করা হয় (যদিও কুরআনে স্পষ্টভাবে নাম দেওয়া হয়নি), একটি মা পাখিকে তার ছানাদের লালন-পালন করতে দেখেছিলেন। দম্পতি অনেক, অনেক বছর ধরে নিঃসন্তান ছিলেন, তাই পাখির ছানাদের লালন-পালন দেখে তার মাতৃত্বের আকাঙ্ক্ষা গভীর হয়েছিল।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>পাখি দেখে তাকে অনুপ্রাণিত করেছিল যে তিনি আরও একবার হাত তুলে আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে প্রার্থনা করবেন, বলেছিলেন,</strong><br />
                                <em>"হে আমার রব! আমি আমার গর্ভে যা আছে তা সম্পূর্ণরূপে আপনার সেবায় উৎসর্গ করছি, তাই আমার কাছ থেকে এটি গ্রহণ করুন। আপনি একাই সত্যিই সর্বশ্রোতা, সর্বজ্ঞাতা।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— <a href="https://myislam.org/surah-imran/ayat-35/" className="text-blue-600 dark:text-blue-400">সূরা আল-ইমরান, আয়াত ৩৫</a></span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        তিনি প্রতিশ্রুতি দিয়েছিলেন যে যদি তাকে কখনও একটি সন্তান দেওয়া হয়, তবে তার জীবন মসজিদ আল-আকসায় আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সেবায় উৎসর্গ করা হবে, ঠিক তার স্বামী ইমরানের মতো। ইমরান ছিলেন একজন ধার্মিক ব্যক্তি যিনি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সেবায় তার জীবন সমর্পণ করেছিলেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>ইংরেজি অনুবাদ:</strong><br />
                                "নিশ্চয়ই, আল্লাহ আদম, নূহ, ইব্রাহিমের পরিবার এবং ইমরানের পরিবারকে তাদের সময়ের সমস্ত মানুষের উপরে নির্বাচন করেছিলেন।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— <a href="https://myislam.org/surah-imran/ayat-33/" className="text-blue-600 dark:text-blue-400">সূরা আল-ইমরান, আয়াত ৩৩</a></span>
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                <strong className="text-amber-600 dark:text-amber-500">এবং তাই, আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তার প্রার্থনা শুনেছিলেন এবং দম্পতিকে একটি সন্তান দিয়ে আশীর্বাদ করেছিলেন।</strong> যদিও আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ইমরানের সন্তান এবং তার বংশধরের জন্য একটি মহান ভবিষ্যত পরিকল্পনা করেছিলেন, ইমরান তার সন্তানের জন্ম দেখার আগেই মারা গিয়েছিলেন।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/isa/Baby born_.png" 
                                alt="শিশু জন্মগ্রহণ করেছে" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        যখন সন্তান জন্মগ্রহণ করেছিল, ইমরানের স্ত্রী একটু অবাক হয়েছিলেন যখন জানতে পারলেন এটি একটি মেয়ে। তিনি একটি ছেলের আশা করেছিলেন, কারণ একটি ছেলে মসজিদের ভিতরে কর্তব্য পালনের জন্য আরও ভাল উপযুক্ত হত।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <em>"হে আমার রব! আমি একটি মেয়ে জন্ম দিয়েছি, এবং পুরুষটি মহিলার মতো নয়।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— <a href="https://myislam.org/surah-imran/ayat-36/" className="text-blue-600 dark:text-blue-400">সূরা আল-ইমরান, আয়াত ৩৬</a></span><br /><br />
                                <strong>কিন্তু আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সর্বজ্ঞাতা।</strong> <strong className="text-amber-600 dark:text-amber-500">তিনি সম্পূর্ণরূপে জানতেন যে এই সন্তান কীভাবে তার সেবা করবে — এবং এটি ছিল যে কোনো মানুষের বোধগম্যতার বাইরে।</strong><br /><br />
                                হান্নাহ তার সন্তানকে প্রেমময়ভাবে মারিয়াম নাম দিয়েছিলেন, এবং তারপর আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে প্রার্থনা করেছিলেন, <em>"আমি শয়তান, অভিশপ্ত থেকে তার এবং তার সন্তানের জন্য আপনার সুরক্ষা চাই।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— <a href="https://myislam.org/surah-imran/ayat-36/" className="text-blue-600 dark:text-blue-400">সূরা আল-ইমরান, আয়াত ৩৬</a></span><br /><br />
                                <strong>প্রার্থনা গ্রহণ করা হয়েছিল।</strong> নবী (<span className="font-arabic">ﷺ</span>) আমাদের বলেছেন যে যখন একটি শিশু জন্মগ্রহণ করে, শয়তান তাকে শরীরের দুপাশে দুটি আঙ্গুল দিয়ে স্পর্শ করে, যার ফলে শিশু কাঁদে। তবে, মারিয়াম এবং ঈসা শয়তানের স্পর্শ থেকে রক্ষা পেয়েছিলেন; তিনি চেষ্টা করেছিলেন এবং ব্যর্থ হয়েছিলেন, কারণ তিনি শুধুমাত্র প্লাসেন্টা কভার স্পর্শ করতে পারতেন।<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সহীহ বুখারী ৪৫৪৮ এবং ৩২৮৬)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        <span className="text-amber-600 dark:text-amber-500">মারিয়ামের</span> অভিভাবক
                    </h2>

                    <p className="mb-4">
                        ইসলামে, যে শিশু পরিপক্কতা অর্জনের আগে তার পিতা হারায় তাকে এতিম বলে মনে করা হয়। নবী মুহাম্মদ (<span className="font-arabic">ﷺ</span>) এর একটি কঠিন শৈশব ছিল, তার জীবনের প্রথম দিকে তার উভয় পিতামাতাকে হারিয়েছিলেন। তিনি অনেক হাদীসে এতিমের যত্ন নেওয়ার গুরুত্ব এবং পুরস্কার জোর দিয়েছিলেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/isa/Maryam A.S.png" 
                                alt="মারিয়াম (আঃ)" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="mb-4">
                                প্রতিশ্রুতিটি মনে রেখে, হান্নাহ তার কন্যাকে একটি চাদরে মুড়িয়ে মসজিদের নেতাদের কাছে হস্তান্তর করেছিলেন যাতে একজন অভিভাবক নিয়োগ করা হয় এবং শিশুকে স্পনসর করা হয়। নবী যাকারিয়া (<span className="font-arabic">عَلَيْهِ ٱلسَّ</span>), যিনি মসজিদে একজন বিশিষ্ট নেতাও ছিলেন, মারিয়ামের (<span className="font-arabic">رضی اللہ عنہ</span>) অভিভাবকত্ব দাবি করার জন্য এগিয়ে এসেছিলেন কারণ তিনি তার আত্মীয় ছিলেন। পুরোহিতরা লট নিক্ষেপ করেছিল, এবং আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ইচ্ছায়, নবী যাকারিয়ার (<span className="font-arabic">عَلَيْهِ ٱلسَّـٰمُ</span>) কলম নির্বাচিত হয়েছিল।
                            </p>
                        </div>
                    </div>

                    <div className="my-6">
                        <img 
                            src="/images/prophet-stories/isa/Prophet Zakariyah Quill remained.png" 
                            alt="নবী যাকারিয়ার কলম স্থির ছিল" 
                            className="w-full h-auto rounded-lg"
                        />
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) বলেছেন: </strong><br />
                                <em>"সুতরাং তার রব তাকে অনুগ্রহ সহকারে গ্রহণ করেছিলেন এবং একটি আনন্দদায়ক লালন-পালন দিয়ে তাকে আশীর্বাদ করেছিলেন — তাকে যাকারিয়ার যত্নে ন্যস্ত করেছিলেন।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— <a href="https://myislam.org/surah-imran/ayat-37/" className="text-blue-600 dark:text-blue-400">সূরা আল-ইমরান, আয়াত ৩৭</a></span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        আল-আকসা মসজিদে <span className="text-amber-600 dark:text-amber-500">বেড়ে ওঠা</span>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                <strong>নবী যাকারিয়া (<span className="font-arabic">عَلَيْهِ ٱلسَّ</span>) ছিলেন আল-আকসা মসজিদের ইমাম</strong> এবং আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সেবায় তার দিনগুলোর বেশিরভাগ সময় সেখানে কাটাতেন। তিনি মারিয়ামের (<span className="font-arabic">رضی اللہ عنہ</span>) জন্য একটি পৃথক কক্ষ তৈরি করেছিলেন যাতে তিনি তাকে তার পড়াশোনা এবং উপাসনায় একা রেখে যেতে পারেন।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/isa/imam masjid e Aqsa.png" 
                                alt="ইমাম মসজিদ আল-আকসা" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <em>"তারপর সময় এল যখন ফেরেশতারা বলল: 'হে মারিয়াম! দেখ, আল্লাহ তোমাকে নির্বাচন করেছেন, এবং তোমাকে পবিত্র করেছেন, এবং বিশ্বের সমস্ত মহিলার উপরে তোমাকে উন্নীত করেছেন। হে মারিয়াম, তোমার রবের প্রতি ভক্তিপূর্ণভাবে আনুগত্য কর এবং যারা [প্রার্থনায়] রুকু করে তাদের সাথে সিজদা কর এবং রুকু কর।" </em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— <a href="https://myislam.org/surah-imran/ayat-42/" className="text-blue-600 dark:text-blue-400">সূরা আল-ইমরান, আয়াত ৪২</a></span>
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                তার বিস্ময়ের জন্য, প্রতিবার যাকারিয়া (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>) মারিয়ামের আশ্রয়ে গিয়েছিলেন, তিনি তাজা ফল পেয়েছিলেন। গ্রীষ্মে জন্মানো ফলগুলো শীতকালে তার ঘরে তাজা পাওয়া যেত, এবং শীতকালে জন্মানো ফলগুলো গ্রীষ্মকালে তার ঘরে তাজা পাওয়া যেত।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/isa/Fresh Fruits.png" 
                                alt="তাজা ফল" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>তিনি বিস্মিত হয়ে বলেছিলেন: </strong><br />
                                <em>"হে মারিয়াম! এটি কোথা থেকে এসেছে?" </em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-imran/ayat-37/" className="text-blue-600 dark:text-blue-400">সূরা আল-ইমরান, আয়াত ৩৭</a>)</span><br /><br />
                                <strong>মারিয়াম উত্তর দিয়েছিলেন: </strong><br />
                                <em>"এটি আল্লাহর কাছ থেকে। নিশ্চয়ই আল্লাহ যাকে ইচ্ছা করেন তাকে সীমাহীনভাবে রিজিক দেন।"</em>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        <span className="text-amber-600 dark:text-amber-500">মারিয়াম</span> একটি সন্তানের সংবাদ পায়
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/isa/Maryam A.S praying in chamber.png" 
                                alt="মারিয়াম (আঃ) কক্ষে প্রার্থনা করছেন" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="mb-4">
                                একদিন, যখন মারিয়াম (<span className="font-arabic">رضی اللہ عنہ</span>) তার কক্ষে একা প্রার্থনা করছিলেন, তিনি একজন অজানা পুরুষের উপস্থিতির সম্মুখীন হয়েছিলেন। এই অনুপ্রবেশ তার শরীরে ভয়ের একটি ঢেউ পাঠিয়েছিল।
                            </p>
                            <p className="mb-4">
                                <strong>তিনি প্রার্থনা করেছিলেন, বলেছিলেন, </strong><br />
                                <em>"আমি সত্যিই আপনার কাছ থেকে সর্বদয়ালুতে আশ্রয় চাই! তাই আপনি যদি আল্লাহভীরু হন তবে আমাকে একা ছেড়ে দিন।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-maryam/ayat-18/" className="text-blue-600 dark:text-blue-400">সূরা মারিয়াম, আয়াত ১৮</a>)</span>
                            </p>
                            <p className="mb-4">
                                <strong>পুরুষটি শান্তভাবে উত্তর দিয়েছিলেন,</strong><br /><em>"আমি শুধুমাত্র আপনার রবের বার্তাবাহক" </em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-maryam/ayat-19/" className="text-blue-600 dark:text-blue-400">সূরা মারিয়াম, আয়াত ১৯</a>)</span>
                            </p>
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>ইংরেজি অনুবাদ:</strong><br />
                                <em>"আমরা তার কাছে আমাদের রুহ (ফেরেশতা জিবরীল) পাঠিয়েছিলাম, এবং তিনি একটি পুরুষের রূপে তার সামনে আবির্ভূত হয়েছিলেন।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— <a href="https://myislam.org/surah-maryam/ayat-17/" className="text-blue-600 dark:text-blue-400">সূরা মারিয়াম, আয়াত ১৭</a></span>
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>এই মুহূর্তটি সূরা আল-ইমরান আয়াত ৪৫-৪৬-এও বর্ণনা করা হয়েছে,</strong><br />
                                <em>"এবং যখন ফেরেশতারা বলল: 'হে মারিয়াম! আল্লাহ আপনাকে তার কাছ থেকে একটি আদেশের সুসংবাদ দিচ্ছেন: তার নাম হবে মসীহ, ঈসা, মারিয়ামের পুত্র। তিনি এই পৃথিবীতে এবং পরকালে অত্যন্ত সম্মানিত হবেন এবং আল্লাহর কাছে নিকটবর্তীদের মধ্যে একজন হবেন।"</em>
                            </p>
                            <p className="mt-4">
                                <strong>বিভ্রান্ত হয়ে, মারিয়াম (<span className="font-arabic">رضی اللہ عنہ</span>) বলেছেন,</strong><br />
                                <em>"কীভাবে একটি ছেলে আমার জন্মগ্রহণ করতে পারে যখন কোনো পুরুষই আমাকে স্পর্শ করেনি, এবং আমি কখনও অশ্লীল ছিলাম না?" </em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-maryam/ayat-20/" className="text-blue-600 dark:text-blue-400">সূরা মারিয়াম, আয়াত ২০</a>)</span>
                            </p>
                            <p className="mt-4">
                                <strong>এবং জিবরীল উত্তর দিয়েছিলেন: </strong><br />
                                <em>"এটি হবে। আপনার রব বলেছেন: 'এটি আমার জন্য সহজ, এবং আমরা এটি করব যাতে তাকে মানবজাতির জন্য একটি নিদর্শন এবং আমাদের কাছ থেকে একটি করুণা করতে। এটি নির্ধারিত হয়েছে।" </em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-maryam/ayat-21/" className="text-blue-600 dark:text-blue-400">সূরা মারিয়াম, আয়াত ২১</a>)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        <span className="text-amber-600 dark:text-amber-500">ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>)</span> এবং <span className="text-amber-600 dark:text-amber-500">আদম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>)</span>
                    </h2>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>ইংরেজি অনুবাদ:</strong><br />
                                <em>"নিশ্চয়ই, আল্লাহর দৃষ্টিতে ঈসার উদাহরণ আদমের মতো। তিনি তাকে ধুলো থেকে তৈরি করেছিলেন, তারপর তাকে বলেছিলেন, 'হও!' এবং তিনি হয়েছিলেন!"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-imran/ayat-59/" className="text-blue-600 dark:text-blue-400">সূরা আল-ইমরান, আয়াত ৫৯</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        ঠিক যেমন আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) অলৌকিকভাবে আদম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) কে পিতা বা মাতা ছাড়া তৈরি করেছিলেন, তিনি ঈসাকে (তার উপর শান্তি) পিতা ছাড়া তৈরি করেছিলেন। ইসলামে, যীশু (ঈসা) আল্লাহর পুত্র হিসাবে বিবেচিত হয় না, যেমনটি খ্রিস্টান বিশ্বাসে আছে। <strong>কুরআন বলে <span className="text-amber-600 dark:text-amber-500">ঈসা আদমের মতো একটি অলৌকিক জন্ম এবং ভাগ করা বৈশিষ্ট্য অনুযায়ী তৈরি করা হয়েছিল।</span></strong>
                    </p>
                </section>

                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        মারিয়াম জন্মের জন্য <span className="text-amber-600 dark:text-amber-500">নিজেকে গোপনে রাখে</span>
                    </h2>

                    <p className="mb-4">
                        বিবাহবহির্ভূত একটি সন্তান বহন করার জন্য শহরের লোকদের গল্পের ভয়ে, মারিয়াম শিশুর জন্ম পর্যন্ত নিজেকে গোপনে রাখার সিদ্ধান্ত নিয়েছিলেন। যদিও তিনি জানতেন যে তিনি একটি ঐশ্বরিক কর্তব্য পালন করছেন, লোকদের মুখোমুখি হওয়ার উদ্বেগ তার মনে দিনরাত জুড়ে ছিল।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/isa/Maryam AS under tree.png" 
                                alt="মারিয়াম (আঃ) গাছের নিচে" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed">
                                        কিছু মাস পর, মারিয়াম (রা.) আর মানসিক চাপ সহ্য করতে পারছিলেন না। ভবিষ্যতের জন্য উদ্বেগে অভিভূত হয়ে, তিনি নাজারেথ ছেড়ে চলে গিয়েছিলেন, "...তিনি তার সাথে একটি দূরবর্তী স্থানে চলে গিয়েছিলেন" (সূরা মারিয়াম, আয়াত ২২)। তিনি বেশি দূর যাননি যখন তিনি প্রসবের ব্যথায় অভিভূত হয়েছিলেন।
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <em>"হায়, যদি আমি এর আগে মারা যেতাম এবং সম্পূর্ণরূপে ভুলে যেতাম"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-maryam/ayat-23/" className="text-blue-600 dark:text-blue-400">সূরা মারিয়াম, আয়াত ২৩</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>হঠাৎ, তিনি একটি কণ্ঠস্বর শুনেছিলেন: </strong><br />
                                <em>"দুঃখ করো না, কারণ আপনার রব আপনার নিচে একটি জলের স্রোত প্রবাহিত করেছে। আপনার দিকে খেজুর গাছের কাণ্ড না এবং তাজা এবং পাকা খেজুর আপনার উপর পড়বে। সুতরাং খাও এবং পান কর এবং আপনার চোখ শীতল কর; এবং যদি আপনি কোনো ব্যক্তিকে দেখেন তবে তাকে বলুন: 'নিশ্চয়ই আমি সর্বদয়ালু রবের কাছে একটি রোজা মানত করেছি, এবং তাই আমি আজ কারো সাথে কথা বলব না।'"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-maryam/ayat-24/" className="text-blue-600 dark:text-blue-400">সূরা মারিয়াম, আয়াত ২৪-২৬</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                আয়রন ঘাটতি এবং অ্যানিমিয়া দুটি সাধারণ অবস্থা যা মহিলারা প্রসবের সময় এবং পরে ভোগ করতে পারে। <strong>এটি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) একটি আশীর্বাদ যে মারিয়াম (<span className="font-arabic">رضی اللہ عنہ</span>) জন্ম দেওয়ার পর, তিনি তাকে গাছ না বলেছিলেন, এবং খেজুর পড়ে গিয়েছিল।</strong> আজ, অনেক গবেষণা শুকনো খেজুরের উপর পরিচালিত হয়েছে, বিশেষ করে প্রসবের কাছাকাছি। কিছু রিপোর্ট দেখায় যে <strong>গর্ভাবস্থার শেষ পর্যায়ে খেজুর খাওয়া একটি সুস্থ এবং প্রাকৃতিক প্রসবকে উৎসাহিত করতে পারে।</strong>
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/isa/Dates.png" 
                                alt="খেজুর" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </section>

                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        <span className="text-amber-600 dark:text-amber-500">দোলনায় শিশু</span> কথা বলে
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                <strong>মারিয়াম ফিরে আসার সাথে সাথে, শহরের লোকেরা কৌতূহল, ভয় এবং ঘৃণা সহ দেখছিল।</strong> প্রত্যাশিত হিসাবে, প্রশ্ন এবং সমালোচনার একটি বাধা অনুসরণ করেছিল। <em>"তারপর তিনি তার লোকদের কাছে এসেছিলেন, তার শিশুকে বহন করে। তারা বলেছিল: 'হে মারিয়াম! আপনি একটি ভয়াবহ কাজ করেছেন। হে হারুনের বোন! আপনার পিতা একজন দুষ্ট ব্যক্তি ছিলেন না, এবং আপনার মাতাও একজন অশ্লীল মহিলা ছিলেন না।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-maryam/ayat-27/" className="text-blue-600 dark:text-blue-400">সূরা মারিয়াম, আয়াত ২৭-২৮</a>)</span>
                            </p>
                            <p className="mb-4">
                                <strong>আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) শক্তি এবং তার আশ্বাস দিয়ে, মারিয়াম দোলনায় শিশুটিকে নির্দেশ করেছিলেন। লোকেরা বিস্মিত হয়ে বলেছিল:</strong><br />
                                <em>"কীভাবে আমরা দোলনায় থাকা একজন, একজন মাত্র শিশুর সাথে কথা বলতে পারি?"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-maryam/ayat-29/" className="text-blue-600 dark:text-blue-400">সূরা মারিয়াম, আয়াত ২৯</a>)</span>
                            </p>
                            <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed">
                                        <strong>লোকদের বিস্ময়ের জন্য, শিশুটি কথা বলতে শুরু করেছিল:</strong><br />
                                        <em>"নিশ্চয়ই আমি আল্লাহর বান্দা। তিনি আমাকে ধর্মগ্রন্থ দিয়েছেন এবং আমাকে একজন নবী করেছেন এবং আমাকে যেখানেই থাকি না কেন আশীর্বাদ করেছেন এবং আমাকে যতদিন জীবিত থাকি ততদিন নামাজ এবং যাকাত (পবিত্রকরণ দান) দিয়েছেন; এবং আমাকে আমার মায়ের প্রতি কর্তব্যবান করেছেন। তিনি আমাকে অত্যাচারী করেননি, এবং আল্লাহর আশীর্বাদ থেকে বঞ্চিত করেননি। আমার জন্মের দিন এবং যে দিন আমি মারা যাব এবং যে দিন আমি জীবিত অবস্থায় উত্থিত হব সেই দিন আমার উপর শান্তি।"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-maryam/ayat-30/" className="text-blue-600 dark:text-blue-400">সূরা মারিয়াম, আয়াত ৩০-৩৩</a>)</span>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/isa/Town people.png" 
                                alt="শহরের লোকেরা" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </section>

                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        <span className="text-amber-600 dark:text-amber-500">ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>)</span>-এর নবুওয়াত
                    </h2>

                    <div className="my-6">
                        <img 
                            src="/images/prophet-stories/isa/child hood of prophet Isa AS.png" 
                            alt="নবী ঈসার (আঃ) শৈশব" 
                            className="w-full h-auto rounded-lg"
                        />
                    </div>

                    <p className="mb-4">
                        <strong>যখন ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>) শুধুমাত্র একটি শিশু ছিলেন,</strong> তিনি নিজেকে মন্দিরে ঘুরে বেড়াতে দেখেছিলেন রাব্বিদের বক্তৃতা শুনতে প্রাপ্তবয়স্কদের একটি ভিড়ের মধ্যে। তিনি তাদের মনোযোগ সহকারে শুনতেন, তাদের প্রশ্ন করতেন, এবং ভয় বা ভীতি ছাড়াই তার মতামত প্রকাশ করতেন। <strong>তিনি বিতর্কে দুর্দান্ত ছিলেন, এবং তারা প্রায়ই তার প্রশ্নের উত্তর দিতে ব্যর্থ হত,</strong> তাই তারা তাকে চুপ করতে চেষ্টা করেছিল।
                    </p>

                    <p className="mb-4">
                        ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>) যখন বড় হয়েছিলেন, আল্লাহ (<span className="font-arabic">سُবْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাকে দেওয়া জ্ঞান এবং বিশেষ ক্ষমতাগুলো তার চারপাশের লোকদের কাছে স্পষ্ট হয়ে উঠেছিল। <strong>তার সমগ্র জীবন ছিল অসম্পূর্ণ অলৌকিক ঘটনায় পূর্ণ —</strong> এটি ছিল তার নবুওয়াতের একটি স্পষ্ট নিদর্শন। তিনি তার লোকদের আল্লাহর (<span className="font-arabic">سُবْحَٰنَهُۥ وَتَعَٰলَىٰ</span>) উপাসনা করতে ডাক দিয়েছিলেন, এক সত্য আল্লাহ:
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <em>"নিশ্চয়ই আল্লাহ আমার রব এবং আপনার রব, তাই শুধুমাত্র তার উপাসনা করুন। এটি সঠিক পথ।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-maryam/ayat-36/" className="text-blue-600 dark:text-blue-400">সূরা মারিয়াম, আয়াত ৩৬</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        এখন, তার প্রাপ্তবয়স্কতায়, সাব্বাথের দিনে, ইহুদি পুরোহিতরা সম্পূর্ণ বিশ্রামের জন্য একটি পবিত্র দিন বজায় রাখতেন। যদিও এই দিনটি নবী মুসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) দ্বারা আল্লাহর (<span className="font-arabic">سُবْحَٰنَهُۥ وَتَعَٰলَىٰ</span>) উপাসনার জন্য নিবেদিত করা হয়েছিল, ইহুদিরা অদ্ভুত অনুশীলন বজায় রাখতেন। ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এই রাতেই প্রসঙ্গে যাকারিয়া (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এবং ইয়াহিয়া (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) হত্যা করা হয়েছিল, এবং ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার রবের কাছ থেকে বার্তা পেয়েছিলেন।
                    </p>
                </section>

                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        <span className="text-amber-600 dark:text-amber-500">ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>)</span>-এর বার্তা
                    </h2>

                    <p className="mb-4">
                        <strong>ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>) প্রকাশ্যে বিলাসিতার বস্তুবাদী জীবনকে নিন্দা করেছিলেন এবং তার লোকদের একটি নম্র জীবনযাপনের জন্য আমন্ত্রণ জানিয়েছিলেন।</strong> <strong className="text-amber-600 dark:text-amber-500">তিনি তার লোকদের সম্পদ জমা না করার জন্য এবং আল্লাহর (<span className="font-arabic">سُবْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) উপাসনায় তাদের সময় ব্যয় করার জন্য আবেদন করেছিলেন যাতে তাদের একটি সমৃদ্ধ পরকাল থাকতে পারে।</strong> তিনি একে অপরের এবং পৃথিবীতে ঘুরে বেড়ানো সৃষ্টিদের প্রতি ক্ষমা এবং করুণা প্রচার করেছিলেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                তিনি ফরিসিদের দ্বারা বজায় রাখা অনুশীলনগুলোকে নিন্দা করেছিলেন। <strong>ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তাদের জানিয়েছিলেন যে তিনি তাওরাতকে নিন্দা করতে চান না কিন্তু <span className="text-amber-600 dark:text-amber-500">মানুষদের এর শব্দগুলোর সত্য সারাংশ বুঝতে সাহায্য করতে চেয়েছিলেন।</span></strong>
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/isa/Message of Isa AS.png" 
                                alt="ঈসার (আঃ) বার্তা" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </section>

                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        <span className="text-amber-600 dark:text-amber-500">ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>)</span>-কে অপমান করার চেষ্টা
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/isa/priests to Isa AS.png" 
                                alt="পুরোহিতরা ঈসার (আঃ) কাছে" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed">
                                        <strong>একদিন, পুরোহিতরা একজন পরিচিত ব্যভিচারিণীকে ঈসার (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) কাছে টেনে নিয়ে গিয়েছিলেন এবং জিজ্ঞাসা করেছিলেন: </strong><br />
                                        <em>"[মোজেসীয়] আইন কি ব্যভিচারিণীর পাথর নিক্ষেপের বিধান দেয় না?"</em><br /><br />
                                        <strong>ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>) তাদের পরিকল্পনা বুঝতে পেরেছিলেন। তিনি বলেছিলেন,</strong><br />
                                        <em>"তোমাদের মধ্যে যে নিষ্পাপ সে তাকে পাথর নিক্ষেপ করুক।" </em><br /><br />
                                        এটি ব্যভিচার সম্পর্কে একটি নতুন আইন নিয়ে এসেছিল: শুধুমাত্র নিষ্পাপরা পাপ বিচার করতে পারে; সবশেষে, সর্বশক্তিমান, সর্বজ্ঞাতা ছাড়া কেউ একজন পাপীকে বিচার করতে পারে না।
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        <span className="text-amber-600 dark:text-amber-500">ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>)</span>-এর অলৌকিক ঘটনার উপহার
                    </h2>

                    <p className="mb-4">
                        কিছু কুরআনিক ভাষ্যকার বিশ্বাস করেন যে, <strong>আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সাহায্য এবং অনুমতি দিয়ে, ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>) মৃতদের জীবিত করে তুলেছিলেন।</strong> মোট চারজনকে জীবিত করা হয়েছিল: আল-আজাম নামে ঈসার (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>) একজন বন্ধু, একজন বৃদ্ধ মহিলার পুত্র, একজন মহিলার একমাত্র কন্যা, এবং সাম ইবনে নূহ নামে একজন ব্যক্তি।
                    </p>

                    <div className="my-6">
                        <img 
                            src="/images/prophet-stories/isa/Miracle.png" 
                            alt="অলৌকিক ঘটনা" 
                            className="w-full h-auto rounded-lg"
                        />
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong className="text-amber-600 dark:text-amber-500">আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) অনুমোদন দিয়ে,</strong> নবী ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>) কয়েকটি অলৌকিক ঘটনা সম্পাদন করেছিলেন:<br /><br />
                                <span><strong>১.</strong> তার শৈশবে কথা বলা।</span><br />
                                <span><strong>২.</strong> একটি মাটির পাখিতে প্রাণ ফুঁক দেওয়া, এটি জীবিত করে তোলা।</span><br />
                                <span><strong>৩.</strong> অন্ধ এবং কুষ্ঠরোগী ব্যক্তিকে নিরাময় করা।</span><br />
                                <span><strong>৪.</strong> মৃতদের জীবিত করা।</span><br />
                                <span><strong>৫.</strong> তিনি এমন জ্ঞান রাখতেন যা অন্যদের কাছ থেকে লুকানো ছিল। তিনি জানতেন যে মানুষ কী খাবার খেয়েছে এবং তারা তাদের বাড়িতে কী সঞ্চয় করেছে।</span><br />
                                <span><strong>৬.</strong> স্বর্গ থেকে খাবারের টেবিল।</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        অনুসারীদের জন্য <span className="text-amber-600 dark:text-amber-500">একটি ভোজ</span>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed">
                                        ত্রিশ দিন রোজা করার পর, আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সেবায় ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>) দ্বারা আদেশ দেওয়া হয়েছিল, বিশ্বাসীরা ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>) কে স্বর্গ থেকে খাবার দেওয়ার জন্য অনুরোধ করেছিলেন যাতে তারা তাদের রোজা ভাঙতে পারে।<br /><br />
                                        <em>"হে ঈসা, মারিয়ামের পুত্র! আপনার রব কি আমাদের কাছে স্বর্গ থেকে খাবারের টেবিল পাঠাতে ইচ্ছুক হবে?"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-maidah/ayat-112/" className="text-blue-600 dark:text-blue-400">সূরা মায়িদা, আয়াত ১১২</a>)</span>
                                    </p>
                                </CardContent>
                            </Card>
                            <p className="mt-4">
                                <strong>সুতরাং নবী ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>) ডাক দিয়েছিলেন,</strong><br />
                                <em>"হে আল্লাহ, আমাদের রব! আমাদের কাছে স্বর্গ থেকে খাবারের একটি টেবিল পাঠান — আমাদের প্রথম এবং শেষের জন্য — এবং আপনার কাছ থেকে একটি নিদর্শন হিসাবে। আমাদের রিজিক দিন! আপনি নিশ্চয়ই সর্বোত্তম রিজিকদাতা।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-maidah/ayat-114/" className="text-blue-600 dark:text-blue-400">সূরা মায়িদা, আয়াত ১১৪</a>)</span>
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/isa/Heaven Food.png" 
                                alt="স্বর্গীয় খাবার" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        এবং তাই, আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) আদেশে, ঈসার (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>) অনুসারীরা জান্নাতের খাবার সহ একটি আশ্চর্যজনক ভোজ দিয়ে আচরণ করা হয়েছিল। বলা হয় যে হাজার হাজার লোক স্বর্গ থেকে পাঠানো খাবার থেকে খেয়েছিল, এবং তবুও তারা কখনই এটি শেষ করেনি।
                    </p>
                </section>

                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        <span className="text-amber-600 dark:text-amber-500">ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>)</span>-এর ক্রুশবিদ্ধকরণ
                    </h2>

                    <p className="mb-4">
                        যখনই আল্লাহ (<span className="font-arabic">سُবْحَٰنَهُۥ وَتَعَٰলَ</span>) তার রাসূলদের এই পৃথিবীতে পাঠিয়েছিলেন, সংখ্যাগরিষ্ঠ প্রায়ই তাদের অবিশ্বাস এবং প্রত্যাখ্যানের সাথে মিলিত হয়েছিল। <strong>ঈসার (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>) ধর্ম আরও অনুসারী আকর্ষণ করতে শুরু করলে, উচ্চ পুরোহিতরা তাদের হ্রাসপ্রাপ্ত প্রভাব সম্পর্কে ক্রমবর্ধমানভাবে ভীত হয়ে উঠেছিলেন।</strong> ফলস্বরূপ, তারা তার বিরুদ্ধে ষড়যন্ত্র করেছিল, তাকে জাদুবিদ্যা, মোজেসীয় আইন লঙ্ঘন, এবং শয়তানের সাথে জোটবদ্ধতার জন্য অভিযুক্ত করেছিল।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed">
                                        <strong>বাইবেল অনুযায়ী,</strong> সেনাবাহিনী ঈসাকে (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>) গ্রেফতার করতে এসেছিল। তারা তাকে চাবুক মেরেছিল, নির্যাতন করেছিল, এবং তার উপর থুতু ফেলেছিল। তারা তাকে অপহাস করার জন্য তার মাথায় কাঁটার মুকুট পরিয়েছিল।
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/isa/Person spoke  from the meeting.png" 
                                alt="সভা থেকে কথা বলা ব্যক্তি" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong className="text-amber-600 dark:text-amber-500">যাইহোক, কুরআন একটি ভিন্ন বিবরণ উপস্থাপন করে।</strong> আল্লাহ (<span className="font-arabic">سُবْحَٰنَهُۥ وَتَعَٰলَىٰ</span>) কুরআনে বলেছেন: "এবং [তাদের] কথা বলার জন্য, <em>'নিশ্চয়ই, আমরা মসীহ, যীশু, মারিয়ামের পুত্র, আল্লাহর রাসূলকে হত্যা করেছি।' এবং তারা তাকে হত্যা করেনি, এবং তারা তাকে ক্রুশবিদ্ধও করেনি; কিন্তু [অন্য] তার মতো দেখতে বানানো হয়েছিল। এবং নিশ্চয়ই, যারা এ সম্পর্কে মতপার্থক্য করে তারা এ সম্পর্কে সন্দেহে রয়েছে। তাদের এ সম্পর্কে অনুমান অনুসরণ ছাড়া কোনো জ্ঞান নেই। এবং তারা তাকে হত্যা করেনি, নিশ্চিতভাবে। বরং, আল্লাহ তাকে তার কাছে উঠিয়ে নিয়েছিলেন। এবং আল্লাহ সর্বদাই পরাক্রমশালী এবং প্রজ্ঞাময়।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-an-nisa/ayat-157/" className="text-blue-600 dark:text-blue-400">সূরা আন-নিসা, আয়াত ১৫৭-১৫৮</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        ইসলামী বিশ্বাস ধারণ করে যে <strong>ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>) আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) দ্বারা সুরক্ষিত এবং রক্ষা করা হয়েছিল।</strong> কিছু কুরআনিক ভাষ্যকার বিশ্বাস করেন যে এটি ছিল ঈসার (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>) বিশ্বাসঘাতক যাকে তার মতো দেখতে বানানো হয়েছিল এবং তার জায়গায় ক্রুশবিদ্ধ করা হয়েছিল, যখন ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>) স্বর্গে উঠিয়ে নেওয়া হয়েছিল।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>মুসলমানরা ঈসার (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>) দ্বিতীয় আগমনে বিশ্বাস করে। আবু হুরায়রা বর্ণনা করেছেন যে নবী মুহাম্মদ (<span className="font-arabic">ﷺ</span>) বলেছেন:</strong><br />
                                <em>'যার হাতে আমার জীবন, মারিয়ামের পুত্র শীঘ্রই তোমাদের মধ্যে একজন ন্যায়পরায়ণ বিচারক হিসাবে নেমে আসবে। তিনি ক্রুশগুলো ভেঙে দেবেন, শূকর হত্যা করবেন, এবং জিজিয়া বিলোপ করবেন, এবং সম্পদ এমন পরিমাণে প্রবাহিত হবে যে কেউ তা গ্রহণ করবে না।'</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— সহীহ মুসলিম ১৫৫ক</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        <span className="text-amber-600 dark:text-amber-500">ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>)</span>-এর উপাসকরা
                    </h2>

                    <p className="mb-4">
                        <strong>কুরআনিক দৃষ্টিকোণ থেকে,</strong> ইহুদি ধর্মের মূল ভুল ছিল ঈসার (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>) মতো নির্দিষ্ট নবীদের অস্বীকার করা, যাদের তাদের পথনির্দেশ করার জন্য পাঠানো হয়েছিল। বিপরীতে, খ্রিস্টধর্মের ভুল ছিল ঈসার (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>) মর্যাদার অতিরঞ্জনে, ঐশ্বরিকতা আরোপ করা এবং আল্লাহর সাথে অংশীদার করা। ঈসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَٰمُ</span>) যখন জীবিত ছিলেন তখন তিনি কখনও নিজেকে আল্লাহ বলে দাবি করেননি।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/isa/Quran perspective.png" 
                                alt="কুরআনিক দৃষ্টিকোণ" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="mb-4">
                                এবং তাই, সময়ের সাথে সাথে, আল্লাহর (<span className="font-arabic">سُবْحَٰنَهُۥ وَتَعَٰলَىٰ</span>) পাঠানো মূল ধর্মগ্রন্থ থেকে বিচ্যুতিগুলো আরও বেশি স্পষ্ট হয়ে উঠেছিল। এটি আল্লাহ (<span className="font-arabic">سُবْحَٰনَهُۥ وَتَعَٰলَىٰ</span>) কে একবার আরও নবী মুহাম্মদের (<span className="font-arabic">ﷺ</span>) মাধ্যমে তার চূড়ান্ত প্রত্যাদেশ পাঠাতে প্ররোচিত করেছিল এই পার্থক্যগুলো সমন্বয় করার জন্য এবং তার বাক্য সংরক্ষণ করার জন্য।
                            </p>
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>কুরআন পরামর্শ দেয়, </strong><br />
                                <em>"হে আহলে কিতাব! আপনার ধর্মে সীমা অতিক্রম করবেন না, এবং আল্লাহর কাছে সত্য ছাড়া কিছু আরোপ করবেন না। মসীহ, যীশু, মারিয়ামের পুত্র, শুধুমাত্র আল্লাহর একজন রাসূল ছিলেন, এবং তার আদেশ যা তিনি মারিয়ামের কাছে পৌঁছিয়েছিলেন, এবং তার কাছ থেকে একটি আত্মা (যা মারিয়ামের গর্ভধারণের দিকে নিয়ে গিয়েছিল)। সুতরাং আল্লাহ এবং তার রাসূলদের উপর বিশ্বাস করুন, এবং বলবেন না: (আল্লাহ হলেন) ত্রিত্ব। এই দাবি ত্যাগ করুন; এটি আপনার জন্য ভাল হবে। আল্লাহ নিশ্চয়ই একমাত্র আল্লাহ। তার গৌরব থেকে দূরে যে তার একটি পুত্র থাকবে।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-an-nisa/ayat-171/" className="text-blue-600 dark:text-blue-400">সূরা আন-নিসা, আয়াত ১৭১</a>)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

            </div>
        </div>
    )
}
