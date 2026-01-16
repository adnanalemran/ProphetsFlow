import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function ZakariyaStory() {
    return (
        <div className="mb-12 mt-6 md:mt-10">
            {/* Header Image */}
            <div className="w-full mb-8">
                <img 
                    src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/zakariyah/the-story-of-prophet-zakariyah-as.png" 
                    alt="নবী যাকারিয়া (আঃ)-এর গল্প" 
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-10">
                <span className="text-amber-600 dark:text-amber-500">নবী যাকারিয়া (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর গল্প
            </h1>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6 md:space-y-8">
                
                {/* The Character of Zakariyah */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">যাকারিয়া (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)-এর চরিত্র</h2>
                    
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/zakariyah/Prophet%20Zakariya%20Calligraphy.png" 
                                alt="নবী যাকারিয়ার ক্যালিগ্রাফি" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="mb-4">
                                তার আগে এবং পরে আসা নবীদের মতো, নবী যাকারিয়া (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) ছিলেন একজন ধার্মিক ব্যক্তি এবং মহৎ বংশোদ্ভূত। তিনি ছিলেন ইসরায়েলের সন্তানদের আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) পথে পথনির্দেশ করার জন্য পাঠানো নবীদের মধ্যে একজন যারা জেরুসালেমের ধন্য মাটিতে পদচারণা করেছিলেন।
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        নবী যাকারিয়া (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) ছিলেন একজন নম্র অবস্থার মানুষ কিন্তু সর্বদা প্রয়োজনে থাকা লোকদের সাহায্য করতে আগ্রহী।
                    </p>
                </section>

                {/* Quote about Zakariyah being a carpenter */}
                <section className="my-8 md:my-12">
                    <Card className="my-6 md:my-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>আবু হুরায়রা (রা.) বর্ণনা করেছেন যে রাসূলুল্লাহ (<span className="font-arabic">ﷺ</span>) বলেছেন:</strong><br />
                                <em>"যাকারিয়া ছিলেন একজন কাঠমিস্ত্রী।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সহীহ হাদীস, সুনান ইবনে মাজাহ ২১৫০ এবং সহীহ মুসলিম ২৩৭৯)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                ইমাম নববী উল্লেখ করেছেন যে এই পেশা কীভাবে তার নম্রতা এবং সৎ উপায়ে জীবিকা অর্জনের প্রতি তার নিবেদনকে আরও প্রতিফলিত করে। একটি পৃথক হাদীসে,
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/zakariyah/Prophet%20Zakariyah%20Carpenter.png" 
                                alt="নবী যাকারিয়া কাঠমিস্ত্রী" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>রাসূলুল্লাহ (<span className="font-arabic">ﷺ</span>) বলেছেন,</strong><br />
                                <em>"কেউ কখনও তার হাত দ্বারা অর্জিত খাবারের চেয়ে ভাল খাবার খায়নি।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সহীহ আল-বুখারী ২০৭২)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        কাঠমিস্ত্রী হিসাবে তার কাজ ছাড়াও, তিনি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সেবায় অবিচল ছিলেন। তিনি বায়তুল মাকদিস (মসজিদ আল-আকসা) তত্ত্বাবধান করতেন, এবং এখানে তিনি তার বক্তৃতার মাধ্যমে তার লোকদের তাদের কর্তব্য স্মরণ করিয়ে দিতে নিরলসভাবে চেষ্টা করতেন।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Concern about no heir */}
                <section className="my-8 md:my-12">
                    <p className="mb-4">
                        আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰলَىٰ</span>) দেওয়া সবকিছুর জন্য সন্তুষ্ট এবং কৃতজ্ঞ থাকা সত্ত্বেও, তার একটি ক্রমবর্ধমান উদ্বেগ ছিল। তিনি তার নব্বইয়ের দশকে ছিলেন এবং তার উত্তরাধিকার চালিয়ে যাওয়ার জন্য কোনো উত্তরাধিকারী ছিল না। তিনি অনুভব করেছিলেন যে বনি ইসরায়েলের প্রয়োজন একজন শক্তিশালী, প্রাণবন্ত নেতার যিনি তাদের আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সঠিক পথে রাখবেন। ঋতুগুলো পার হওয়ার সাথে সাথে, নবী যাকারিয়া (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) এবং তার স্ত্রী বৃদ্ধ হয়েছিলেন, পিতামাতার বয়সের চেয়ে অনেক বেশি পৌঁছেছিলেন।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* The Blessed Family of Imran */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        <span className="text-amber-600 dark:text-amber-500">ইমরানের ধন্য পরিবার</span> এবং মারিয়াম (রাদি আল্লাহু আনহা)-এর জন্ম
                    </h2>

                    <p className="mb-4">পবিত্র কুরআন উল্লেখ করেছে:</p>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>ইংরেজি অনুবাদ:</strong><br />
                                "আল্লাহ আদম, নূহ, ইব্রাহিমের পরিবার এবং ইমরানের পরিবারকে 'আলামিন (মানুষ এবং জিন) এর উপরে নির্বাচন করেছিলেন। তারা একে অপরের বংশধর ছিল। আল্লাহ শ্রবণকারী, সর্বজ্ঞাতা।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— <a href="https://myislam.org/surah-imran/ayat-33/" className="text-blue-600 dark:text-blue-400">সূরা আল-ইমরান, আয়াত ৩৩-৩৪</a></span>
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                কুরআন আরও দুটি সূরা রয়েছে যার শিরোনাম <strong>"সূরা আল-ইমরান"</strong> এবং <strong>"সূরা মারিয়াম,"</strong> <span className="text-amber-600 dark:text-amber-500">ইমরানের নামে নামকরণ করা হয়েছে, যিনি ছিলেন মারিয়াম (রা.)-এর পিতা</span>, যিনি আবার ঈসা বা যীশু (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)-এর মাতা ছিলেন।<br /><br /> এটি ছিল একটি খুবই ধন্য পরিবার, এবং আয়াতটি ইমরানের বাড়ির বংশধরকে ইব্রাহিম এবং নূহের কাছে এবং শেষ পর্যন্ত আদম (তাদের সকলের উপর শান্তি) থেকে ট্রেস করে। এই আয়াতটি বোঝার দৃষ্টিকোণ থেকে তাৎপর্যপূর্ণ যে <strong>আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) এক পরিবারকে অন্যটির উপরে উন্নীত করেননি। <span className="text-amber-600 dark:text-amber-500">বরং, তারা সবাই একে অপরের বংশধর ছিল এবং এক আল্লাহর আনুগত্যের মাধ্যমে আরও সংযুক্ত ছিল।</span></strong>
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/zakariyah/Imran%20Family%20Tree.png" 
                                alt="ইমরানের পরিবার বৃক্ষ" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        এখন, ইমরানের স্ত্রীকে হান্নাহ বলে মনে করা হয়, যদিও কুরআনে স্পষ্টভাবে নাম দেওয়া হয়নি। তিনি ছিলেন একজন খুবই ধার্মিক এবং সম্মানিত মহিলা। ইবনে কাথির উল্লেখ করেছেন যে একদিন, হান্নাহ একটি পাখিকে তার ছানাকে খাওয়াতে দেখেছিলেন। তিনি নিজে গর্ভধারণ করতে পারছিলেন না, এবং তিনি গভীরভাবে একটি সন্তানের আকাঙ্ক্ষা করেছিলেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/zakariyah/Hannah%20Praying.png" 
                                alt="হান্নাহ প্রার্থনা করছেন" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed">
                                        <strong>পাখিগুলো দেখে, এটি তাকে আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে প্রার্থনা করতে অনুপ্রাণিত করেছিল, বলেছিলেন,</strong><br />
                                        <em>"হে আমার রব! আমি আমার পেটে যা আছে তা সম্পূর্ণরূপে আপনার সেবায় উৎসর্গ করছি, তাই আমার কাছ থেকে এটি গ্রহণ করুন। আপনি একাই সত্যিই সর্বশ্রোতা, সর্বজ্ঞাতা।"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-imran/ayat-35/" className="text-blue-600 dark:text-blue-400">সূরা আল-ইমরান, আয়াত ৩৫</a>)</span>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <p className="mb-4">
                        এটি তাদের ঈমান (বিশ্বাস) এর একটি গুরুত্বপূর্ণ দিক তুলে ধরে। তাদের প্রাথমিক উদ্বেগ ছিল তাদের সন্তানদের বস্তুগত আকাঙ্ক্ষার চারপাশে নয়। বরং, সাফল্য এবং সুখ ছিল সন্তানের আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) প্রতি নিবেদন এবং ভক্তির স্তর থেকে। এর অর্থ হল সঠিক পথে থাকা, সৎ হওয়া, ভাল কাজ করা, এবং শয়তানের কানাকানির থেকে নিরাপদ থাকা।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                <strong>সুতরাং, আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ডাক শুনেছিলেন, তার আশীর্বাদ দিয়েছিলেন, এবং হান্নাহকে একটি কন্যা দান করেছিলেন যাকে সুন্দর নাম দেওয়া হয়েছিল <span className="text-amber-600 dark:text-amber-500">মারিয়াম</span>।</strong> হান্নাহ তার নবজাতক শিশুর জন্মে খুশি ছিলেন কিন্তু প্রাথমিকভাবে তিনি একটি মেয়ে জন্ম দিয়েছেন বলে অবাক হয়েছিলেন।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/zakariyah/Maryam%20Newborn.png" 
                                alt="নবজাতক মারিয়াম" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        তিনি আশা করেছিলেন যে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাকে একটি পুত্র দেবেন যাতে মসজিদের ভিতরে পুরুষের জন্য উপযুক্ত নির্দিষ্ট ধর্মীয় কর্তব্য পালন করতে পারে।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>তিনি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে ডাক দিয়েছিলেন, বলেছিলেন,</strong><br />
                                <em>"হে রব! আমি একটি কন্যা জন্ম দিয়েছি," কিন্তু আল্লাহ (<span className="font-arabic">سُبْحَٰনَهُۥ وَتَعَٰلَىٰ</span>) সম্পূর্ণরূপে সচেতন ছিলেন যে তিনি কী জন্ম দিয়েছেন। তিনি বলতে থাকেন, "আমি তার নাম রেখেছি মারিয়াম এবং তাকে এবং তার সন্তানকে শয়তান, অভিশপ্ত থেকে সুরক্ষার জন্য আপনার কাছে প্রতিশ্রুতিবদ্ধ করছি।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-imran/ayat-36/" className="text-blue-600 dark:text-blue-400">সূরা আল-ইমরান, আয়াত ৩৬</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong className="text-amber-600 dark:text-amber-500">একটি হাদীসে, নবী (<span className="font-arabic">ﷺ</span>) বলেছেন:</strong><br />
                                <em>"অনেক পুরুষ পরিপূর্ণতা অর্জন করেছিল, কিন্তু কোনো মহিলা পরিপূর্ণতা অর্জন করেনি মারিয়াম, ইমরানের কন্যা এবং আসিয়া, ফিরআউনের স্ত্রী ছাড়া।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— সহীহ (দারুসসালাম) জামি আত-তিরমিজী ১৮৩৪</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) মারিয়ামকে আশীর্বাদ করেছিলেন এবং সম্মান করেছিলেন এবং শয়তান থেকে রক্ষা করেছিলেন।
                    </p>

                    <p className="mb-4 text-amber-600 dark:text-amber-500"><strong>কুরআন আরও উল্লেখ করেছে,</strong></p>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>ইংরেজি অনুবাদ:</strong><br />
                                "তারপর সময় এল যখন ফেরেশতারা বলল: 'হে মারিয়াম! দেখ, আল্লাহ তোমাকে নির্বাচন করেছেন, এবং তোমাকে পবিত্র করেছেন, এবং বিশ্বের সমস্ত মহিলার উপরে তোমাকে উন্নীত করেছেন। হে মারিয়াম, তোমার রবের প্রতি ভক্তিপূর্ণভাবে আনুগত্য কর এবং যারা [প্রার্থনায়] রুকু করে তাদের সাথে সিজদা কর এবং রুকু কর।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— <a href="https://myislam.org/surah-imran/ayat-42/" className="text-blue-600 dark:text-blue-400">সূরা আল-ইমরান, আয়াত ৪২</a></span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        এবং এটি ছিল মারিয়াম (রা.)-এর পরীক্ষা, তাকে ফেরেশতাদের দ্বারা আদেশ দেওয়া হয়েছিল যে উপাসনার কাজ বৃদ্ধি করতে, সিজদা করতে, জমা দিতে, এবং আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) প্রায়ই স্মরণ করতে। তিনি বায়তুল মাকদিসের ভিতরে বাস করতেন এবং বেড়ে উঠেছিলেন, আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সেবায় অসংখ্য ঘন্টা ব্যয় করতেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/zakariyah/Quran%20Mention%20Maryam.png" 
                                alt="কুরআনে মারিয়ামের উল্লেখ" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed">
                                        <strong className="text-amber-600 dark:text-amber-500">মজার তথ্য: </strong><br />
                                        <strong>মারিয়াম (রা.) হলেন কুরআনে তার নামে উল্লিখিত একমাত্র মহিলা।</strong> তবে, কুরআন মোট ৩৩টি ভিন্ন মহিলার উল্লেখ করে।
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong className="text-amber-600 dark:text-amber-500">আরও, যখন মারিয়াম (রা.) জন্মগ্রহণ করেছিলেন, তখন বলা হয়েছিল যে তিনি কাঁদেননি।</strong><br /><br />
                                <strong>নবী (<span className="font-arabic">ﷺ</span>) বলেছেন,</strong><br />
                                <em>'কোনো সন্তান জন্মগ্রহণ করে না কিন্তু শয়তান যখন এটি জন্মগ্রহণ করে তখন এটি স্পর্শ করে, যার ফলে শয়তানের স্পর্শের কারণে এটি জোরে কাঁদতে শুরু করে, মারিয়াম এবং তার পুত্র ছাড়া।'</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সহীহ আল-বুখারী ৪৫৪৮)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Prophet Zakariyah's Relationship with Maryam */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        <span className="text-amber-600 dark:text-amber-500">নবী যাকারিয়া (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span> এবং মারিয়াম (রাদি আল্লাহু আনহা)-এর সম্পর্ক:
                    </h2>

                    <p className="mb-4">
                        যাকারিয়া (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) এবং মারিয়াম (রা.)-এর মধ্যে সম্পর্ক সম্পর্কে, মতপার্থক্য রয়েছে। সংখ্যাগরিষ্ঠ মত হল যে যাকারিয়া একজন মহিলার সাথে বিবাহিত ছিলেন যার নাম ছিল ঈশা, এবং তিনি ছিলেন মারিয়ামের বড় বোন। দ্বিতীয় মত হল যে ঈশা ছিলেন মাতৃকুলের খালা, অর্থাৎ মারিয়ামের মায়ের বোন। যদি সত্য হয়, তাহলে এটি তাকে তার মাতৃকুলের চাচা করবে।
                    </p>

                    <p className="mb-4">
                        যাই হোক, মারিয়াম (রা.) জন্মগ্রহণের আগে, তার পিতা ইমরান ইতিমধ্যে মারা গিয়েছিলেন। সেই সময়ে পিতা ছাড়া জন্মগ্রহণকারী শিশুদের জন্য একজন অভিভাবক নিয়োগের প্রথা প্রচলিত ছিল, পুরোহিত এবং ধর্মীয় নেতারা কে মারিয়ামকে স্পনসর করবে তা নিয়ে তর্ক করতে শুরু করেছিলেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>মসজিদের লোকেরা বলেছিল, </strong><br />
                                <em>"তিনি আমাদের ইমামের কন্যা,"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        কারণ ইমরান তাদের প্রার্থনায় নেতৃত্ব দিতেন এবং তাদের আচার-অনুষ্ঠানের যত্ন নিতেন। তারা মারিয়াম (রা.)-কে একটি বিশেষ শিশু হিসাবে স্বীকৃতি দিয়েছিলেন যিনি একটি ধন্য পরিবার থেকে এসেছিলেন, এবং তারা তাকে সমর্থন করতে চেয়েছিলেন।
                    </p>

                    <p className="mb-4">আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কুরআনে প্রকাশ করেছেন:</p>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>ইংরেজি অনুবাদ:</strong><br />
                                "এটি অদৃশ্যের সংবাদ যা আমরা আপনার কাছে প্রকাশ করছি। আপনি তাদের সাথে ছিলেন না যখন তারা মারিয়ামের অভিভাবক কে হবে তা নির্ধারণ করতে লট নিক্ষেপ করেছিল, এবং আপনি সেখানে ছিলেন না যখন তারা এ সম্পর্কে তর্ক করেছিল।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— <a href="https://myislam.org/surah-imran/ayat-44/" className="text-blue-600 dark:text-blue-400">সূরা আল-ইমরান, আয়াত ৪৪</a></span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        অন্যদের মধ্যে, নবী যাকারিয়ার (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) নাম মারিয়ামের সম্ভাব্য অভিভাবক হিসাবে প্রস্তাব করা হয়েছিল। পুরুষরা তাদের কলম (একটি লেখার কলম) আঁকতেন এবং একটি পাত্রে রাখতেন, একটি শিশুকে একটি বেছে নেওয়ার জন্য আমন্ত্রণ জানাতেন। তারা সিদ্ধান্ত নিয়েছিল যে নির্বাচিত কলমের মালিক মারিয়ামের উপর তাদের অধিকার দাবি করবে।
                    </p>

                    <div className="my-6">
                        <img 
                            src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/zakariyah/Prophet%20Zakariyah%20Quill%20selected.png" 
                            alt="নবী যাকারিয়ার কলম নির্বাচিত" 
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                        <p className="text-center text-sm mt-2 italic">
                            <strong>আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ইচ্ছায়, <span className="text-amber-600 dark:text-amber-500">নবী যাকারিয়ার (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) কলম নির্বাচিত হয়েছিল।</span></strong> তবে, এটি প্রতিযোগীদের সন্তুষ্ট করেনি, তাই তারা প্রকৃতিকে সঠিক অভিভাবক বেছে নেওয়ার সিদ্ধান্ত নিয়েছিল।
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/zakariyah/green%20grass%20(left).png" 
                                alt="সবুজ ঘাস" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="mb-4">
                                <strong>পুরোহিতরা কলমগুলো একটি স্রোতে রাখলেন, <span className="text-amber-600 dark:text-amber-500">সিদ্ধান্ত নিয়েছিলেন যে জলের স্রোতের বিরুদ্ধে শেষ কলমটি প্রতিরোধ করবে সে অভিভাবকত্ব দাবি করবে</span>।</strong>
                            </p>
                            <p className="text-center">
                                আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) অসীম শক্তিতে, নবী যাকারিয়ার (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) কলম ভাসমান এবং তার জায়গায় স্থির ছিল যখন অন্যগুলো জলের সাথে চলছিল।
                            </p>
                        </div>
                    </div>

                    <div className="my-6">
                        <img 
                            src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/zakariyah/Prophet%20Zakariyah%20Quill%20remained.png" 
                            alt="নবী যাকারিয়ার কলম স্থির ছিল" 
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                        <p className="text-center text-sm mt-2 italic">
                            পুরোহিতরা এখনও বিশ্বাস করেনি।
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/zakariyah/green%20grass%20(left).png" 
                                alt="সবুজ ঘাস" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="mb-4">
                                <strong>এইবার, তারা দাবি করেছিল <span className="text-amber-600 dark:text-amber-500">যে জলের সাথে চলমান কলমটি শিশুর উপর অধিকার পাবে।</span></strong>
                            </p>
                            <p className="text-center">
                                আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) নির্দেশে, নবী যাকারিয়ার (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) কলম সবচেয়ে দ্রুত নিচের দিকে প্রবাহিত হয়েছিল যখন অন্যগুলো নিচে ডুবে গিয়েছিল।
                            </p>
                        </div>
                    </div>

                    <div className="my-6">
                        <img 
                            src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/zakariyah/Prophet%20Zakariyah%20Quill%20Flowed.png" 
                            alt="নবী যাকারিয়ার কলম প্রবাহিত হয়েছিল" 
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                        <p className="text-center text-sm mt-2 italic">
                            <strong>এইভাবে, পুরুষরা আর যাকারিয়াকে (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) অস্বীকার করতে পারেনি, <span className="text-amber-600 dark:text-amber-500">এবং মারিয়াম (রা.) তার সুরক্ষামূলক যত্নে আসে।</span></strong>
                        </p>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong className="text-amber-600 dark:text-amber-500">আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) বলেছেন: </strong><br />
                                <em>"সুতরাং তার রব তাকে অনুগ্রহ সহকারে গ্রহণ করেছিলেন এবং একটি আনন্দদায়ক লালন-পালন দিয়ে তাকে আশীর্বাদ করেছিলেন — তাকে যাকারিয়ার যত্নে ন্যস্ত করেছিলেন।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-imran/ayat-37/" className="text-blue-600 dark:text-blue-400">সূরা আল-ইমরান, আয়াত ৩৭</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        নবী যাকারিয়া (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) ছিলেন আল-আকসা মসজিদের ইমাম এবং আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সেবায় তার দিনগুলোর বেশিরভাগ সময় সেখানে কাটাতেন। তিনি মারিয়াম (<span className="font-arabic">رضی اللہ عنہ</span>)-এর জন্য একটি পৃথক কক্ষ তৈরি করেছিলেন যাতে তিনি তাকে তার পড়াশোনা এবং উপাসনায় একা রেখে যেতে পারেন। তার কক্ষে প্রবেশের অনুমতি দেওয়া হয়নি কিন্তু নবী যাকারিয়াকে (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                <strong>তার বিস্ময়ের জন্য,
                                প্রতিবার যাকারিয়া (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) মারিয়ামের আশ্রয়ে গিয়েছিলেন,
                                  <span className="text-amber-600 dark:text-amber-500">তিনি তাজা ফল পেয়েছিলেন</span>।</strong>
                                গ্রীষ্মে জন্মানো ফলগুলো শীতকালে তার ঘরে তাজা পাওয়া যেত, এবং শীতকালে জন্মানো ফলগুলো গ্রীষ্মকালে তার ঘরে তাজা পাওয়া যেত।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/zakariyah/Fruit.png" 
                                alt="ফল" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        যাকারিয়া (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) এটি একটি অলৌকিক ঘটনা হিসাবে পেয়েছিলেন এবং কৌতূহলী ছিলেন যে কে এই তাজা ফল সরবরাহ করবে যখন শুধুমাত্র তার তার কক্ষে প্রবেশাধিকার ছিল।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>তিনি বিস্মিত হয়ে বলেছিলেন: </strong><br />
                                <em>"হে মারিয়াম! এটি কোথা থেকে এসেছে?" </em>
                                <br /><span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-imran/ayat-37/" className="text-blue-600 dark:text-blue-400">সূরা আল-ইমরান, আয়াত ৩৭</a>)</span>
                                <br /><br />
                                <strong>মারিয়াম উত্তর দিয়েছিলেন: </strong><br />
                                <em>"এটি আল্লাহর কাছ থেকে। নিশ্চয়ই আল্লাহ যাকে ইচ্ছা করেন তাকে সীমাহীনভাবে রিজিক দেন।"</em>
                                <br /><span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-imran/ayat-37/" className="text-blue-600 dark:text-blue-400">সূরা আল-ইমরান, আয়াত ৩৭</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        নবী যাকারিয়া (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) তার উত্তর নিয়ে সন্দেহ করেননি। <br /><br /><strong>বরং, তিনি অনুপ্রাণিত হয়েছিলেন।</strong><br /><br /> তিনি অনুভব করেছিলেন যে যদি আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) অলৌকিকভাবে মারিয়াম (<span className="font-arabic">رضی اللہ عنہ</span>)-কে সেই ঋতুতে পাওয়া যায় না এমন ফল সরবরাহ করতে পারেন, তাহলে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) অলৌকিকভাবে তাদের বৃদ্ধ বয়সে তাকে এবং তার স্ত্রীকে একটি সন্তান দিয়ে আশীর্বাদ করতে পারেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/zakariyah/Prophet%20Zakariyah%20Praying.png" 
                                alt="নবী যাকারিয়া প্রার্থনা করছেন" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed">
                                        <strong>সুতরাং, তিনি তার হাত তুলে ডাক দিয়েছিলেন: </strong><br />
                                        <em>
                                            "হে আমার রব! নিশ্চয়ই আমার হাড়গুলো ভঙ্গুর হয়ে গেছে, এবং ধূসর চুল আমার মাথায় ছড়িয়ে পড়েছে, কিন্তু আমি কখনও আপনার কাছে আমার প্রার্থনায় হতাশ হইনি, হে আমার রব! এবং আমি আমার পরে আমার আত্মীয়দের বিশ্বাস সম্পর্কে উদ্বিগ্ন, যেহেতু আমার স্ত্রী বন্ধ্যা। সুতরাং আপনার অনুগ্রহে আমাকে একটি উত্তরাধিকারী দিন, যিনি আমার কাছ থেকে এবং ইয়াকুবের পরিবার থেকে নবুওয়াত উত্তরাধিকার করবেন, এবং তাকে করুন, হে রব, আপনার কাছে সন্তোষজনক!"
                                        </em>
                                        <br /><span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-maryam/ayat-4/" className="text-blue-600 dark:text-blue-400">সূরা মারিয়াম, আয়াত ৪-৬</a>)</span>
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

                {/* Nothing is Impossible for Allah */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) জন্য কিছুই অসম্ভব নয়।
                    </h2>

                    <p className="mb-4">
                        কিছুই সম্ভাবনা বা কাকতালীয়ভাবে ঘটে না; আল্লাহ, সর্বজ্ঞ, তার নবীর কাছ থেকে এই প্রার্থনার অপেক্ষায় ছিলেন। রবের প্রতিক্রিয়া তাৎক্ষণিক ছিল।
                    </p>

                    <div className="my-6">
                        <img 
                            src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/zakariyah/Prophet%20Zakariyah%20&amp;%20Angel.png" 
                            alt="নবী যাকারিয়া এবং ফেরেশতা" 
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                        <p className="text-center text-sm mt-2 italic">
                            যখন নবী যাকারিয়া (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) মিহরাবে ছিলেন, ফেরেশতারা তার কাছে এসে ঘোষণা করেছিলেন:<br /><em>"হে যাকারিয়া! নিশ্চয়ই, আমরা আপনাকে একটি পুত্রের জন্মের সুসংবাদ দিচ্ছি, যার নাম হবে ইয়াহিয়া — একটি নাম যা আমরা আগে কাউকে দিইনি।"</em><br />— (<a href="https://myislam.org/surah-maryam/ayat-7/" className="text-blue-600 dark:text-blue-400">সূরা মারিয়াম, আয়াত ৭</a>)
                        </p>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <em>"…ইয়াহিয়া আল্লাহর বাক্য নিশ্চিত করবে এবং একজন মহান নেতা, পবিত্র, এবং ধার্মিকদের মধ্যে একজন নবী হবে।"</em>
                                <br /><span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-imran/ayat-39/" className="text-blue-600 dark:text-blue-400">সূরা আল-ইমরান, আয়াত ৩৯</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        যদিও নবী যাকারিয়া (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে তার দুআতে দৃঢ় এবং আন্তরিক ছিলেন, তিনি সত্যিই অবাক হয়েছিলেন যে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) শুধুমাত্র তার দুআ শুনেছেন তা নয়, এটি গ্রহণও করেছেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>তিনি বিস্মিত হয়েছিলেন: </strong><br />
                                <em>
                                    "হে আমার রব! আমার স্ত্রী বন্ধ্যা এবং আমি অত্যন্ত বৃদ্ধ হয়ে গেছি, তখন আমি কীভাবে একটি পুত্র পেতে পারি?" </em><br /><span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-maryam/ayat-8/" className="text-blue-600 dark:text-blue-400">সূরা মারিয়াম, আয়াত ৮</a>)</span>
                                <br /><br />
                                <strong>একজন ফেরেশতা উত্তর দিয়েছিলেন: </strong><br /><em>"সুতরাং এটি হবে! আপনার রব বলেছেন, 'এটি আমার জন্য সহজ, ঠিক যেমন আমি আপনাকে আগে তৈরি করেছিলাম যখন আপনি কিছুই ছিলেন না!'" </em><br /><span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-maryam/ayat-9/" className="text-blue-600 dark:text-blue-400">সূরা মারিয়াম, আয়াত ৯</a>)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        নবী যাকারিয়া (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) তার রবের কাছে কৃতজ্ঞ ছিলেন। তিনি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে ডাক দিয়েছিলেন, তাকে একটি নিদর্শন দিতে বলেছিলেন যখন তার স্ত্রী গর্ভবতী হয়েছিলেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed">
                                        <strong className="text-amber-600 dark:text-amber-500">আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) উত্তর দিয়েছিলেন: </strong><br />
                                        <em>"আপনার নিদর্শন হল যে আপনি তিন রাত ধরে লোকদের সাথে কথা বলতে পারবেন না, সুস্থ থাকা সত্ত্বেও।" </em><br /><span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-maryam/ayat-10/" className="text-blue-600 dark:text-blue-400">সূরা মারিয়াম, আয়াত ১০</a>)</span>
                                    </p>
                                </CardContent>
                            </Card>

                            <p className="mb-4 mt-4">
                                আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) নির্দেশে, যখন যাকারিয়া (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) মিহরাবে ছিলেন, তিনি বুঝতে পারলেন যে তার কণ্ঠস্বর তাকে এড়িয়ে গেছে।
                                তিনি বেরিয়ে এসে তার লোকদের সংকেত দিয়েছিলেন যে তারা সকাল এবং সন্ধ্যায় আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) মহিমা করবে। (সূরা মারিয়াম, আয়াত ১১)
                                <br /><br />
                                <strong>যথাসময়ে, নবী ইয়াহিয়া (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) জন্মগ্রহণ করেছিলেন।</strong>
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/zakariyah/Prophet%20Zakariyah%20signaling%20people.png" 
                                alt="নবী যাকারিয়া লোকদের সংকেত দিচ্ছেন" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4 text-amber-600 dark:text-amber-500"><strong>কুরআন বর্ণনা করেছে: </strong></p>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>ইংরেজি অনুবাদ:</strong><br />
                                "হে ইয়াহিয়া! ধর্মগ্রন্থগুলো দৃঢ়ভাবে ধরে রাখুন।" আমরা তাকে শিশু অবস্থায়ই জ্ঞান দিয়েছিলাম, আমাদের কাছ থেকে পবিত্রতা এবং করুণা সহ। এবং তিনি ছিলেন আল্লাহভীরু এবং তার পিতামাতার প্রতি সদয়। তিনি অহংকারী বা অবাধ্য ছিলেন না। তার জন্মের দিন, তার মৃত্যুর দিন, এবং তাকে আবার জীবনে উত্থিত করা হবে সেই দিন তার উপর শান্তি বর্ষিত হোক!"
                                <br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— <a href="https://myislam.org/surah-maryam/ayat-12/" className="text-blue-600 dark:text-blue-400">সূরা মারিয়াম, আয়াত ১২-১৫</a></span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* 2 Prophetic Du'as */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        নবী যাকারিয়ার (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) ২টি নবুওয়াতী দুআ
                    </h2>

                    <div className="my-6">
                        <img 
                            src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/zakariyah/Prophetic%20Du_a%201.png" 
                            alt="নবী যাকারিয়ার দুআ ১" 
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                رَبِّ هَبۡ لِي مِن لَّدُنكَ ذُرِّيَّةٗ طَيِّبَةًۖ إِنَّكَ سَمِيعُ ٱلدُّعَآءِ
                            </p>
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>রোমানীকরণ:</strong> Rabbi hab lee mil ladunka zurriyyatan taiyibatan innaka samee'ud du'aaa'
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>ইংরেজি অনুবাদ:</strong> "হে আমার রব, আপনার কাছ থেকে আমাকে একটি ভাল সন্তান দিন। নিশ্চয়ই, আপনি প্রার্থনার শ্রোতা।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— <a href="https://myislam.org/surah-imran/ayat-38/" className="text-blue-600 dark:text-blue-400">(সূরা আল-ইমরান, আয়াত ৩৮)</a></span>
                            </p>
                        </CardContent>
                    </Card>

                    <div className="my-6">
                        <img 
                            src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/zakariyah/Prophetic%20Du_a%202.png" 
                            alt="নবী যাকারিয়ার দুআ ২" 
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                رَبِّ لَا تَذَرۡنِي فَرۡدٗا وَأَنتَ خَيۡرُ ٱلۡوَٰرِثِينَ
                            </p>
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>রোমানীকরণ:</strong> Rabbi laa tazarnee fardanw wa Anta khairul waariseen
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>ইংরেজি অনুবাদ:</strong> "হে আমার রব, আমাকে একা [কোনো উত্তরাধিকার ছাড়া] রেখে দেবেন না, যখন আপনি সর্বোত্তম উত্তরাধিকারী।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— <a href="https://myislam.org/surah-al-anbiya/ayat-89/" className="text-blue-600 dark:text-blue-400">(সূরা আল-আনবিয়া, আয়াত ৮৯)</a></span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

            </div>
        </div>
    )
}
