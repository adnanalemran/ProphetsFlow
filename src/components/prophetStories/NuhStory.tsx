import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function NuhStory() {
    return (
        <div className="mb-12 mt-6 md:mt-10">
            {/* Header Image */}
            <div className="w-full mb-8">
                <img 
                    src="/images/prophets/nuh.png" 
                    alt="নূহ (আঃ)-এর গল্প" 
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-10">
                নবী নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)-এর গল্প
            </h1>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6 md:space-y-8">
                
                {/* Section: Prophetic Timeline */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophets/nuh.png" 
                                alt="নবী নূহের ক্যালিগ্রাফি" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                <span className="text-amber-600 dark:text-amber-500 font-semibold">নবী নূহের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) নবুওয়তের সময়রেখা</span> সম্পর্কে দুটি মতামত রয়েছে।
                            </p>

                            <p className="mb-4">
                                প্রথমটি হল অনেক ইতিহাসবিদ যেমন <strong>ইবনে কাসির</strong>-এর মতামত, যিনি নবী <strong>নূহকে নবী ইদ্রিসের পরে আসা</strong> হিসেবে লিখেছেন; তাদের সকলের উপর শান্তি বর্ষিত হোক।
                            </p>

                            <p className="mb-4">
                                যাইহোক, কিছু আলেম বিশ্বাস করেন যে <strong>সূরা নিসার আয়াত ১৬৩ পরামর্শ দেয় যে তিনি ইদ্রিসের আগে এসেছিলেন</strong>।
                            </p>

                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        "নিশ্চয়ই, আমরা আপনাকে, [হে মুহাম্মদ], যেমন নূহ এবং তাঁর পরবর্তী নবীদের কাছে ওহী করেছি..."<br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা নিসা, আয়াত ১৬৩)</span>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 md:p-6 rounded-lg my-6">
                        <p className="mb-4">
                            আমরা উভয় দৃষ্টিভঙ্গি উপস্থাপন করি যাতে আপনি, জ্ঞানের ছাত্র হিসেবে, সচেতন থাকেন। নিশ্চিতভাবে সিদ্ধান্ত নেওয়ার জন্য যথেষ্ট প্রমাণ নেই, এবং এই বিষয়টি আরও তদন্ত করার কোনও উপকার নেই। এই লেখাটি নূহ (আঃ) ইদ্রিসের পরে এসেছিলেন এই দৃষ্টিভঙ্গি দিয়ে লেখা হয়েছে।
                        </p>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: Life after Prophet Idris */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4">
                        নবী ইদ্রিসের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) পরের জীবন:
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                <span className="text-amber-600 dark:text-amber-500 font-semibold">মুসলিমরা পথহারা হয়ে পড়েছিল</span> নবী ইদ্রিসের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) মৃত্যুর পর। যেহেতু তাদের মধ্যে অন্য কোনও মানুষকে নবী হিসেবে নির্বাচিত করা হয়নি, <strong>লোকেরা ইদ্রিসের ধার্মিক সঙ্গীদের দিকে নির্দেশনার জন্য তাকাতে শুরু করেছিল</strong>।
                            </p>

                            <p className="mb-4">
                                তারা <strong>এই ধার্মিক পুরুষদের সম্মান করত এবং অনুসরণ করত</strong> এবং যখনই তারা কোনও সমস্যার মুখোমুখি হত তখন তাদের পরামর্শ নিত। অবশেষে, সময়ের সাথে সাথে, ধার্মিক পুরুষরাও মারা গিয়েছিলেন, <strong><em className="text-amber-600 dark:text-amber-500">মুসলিমদের আবার নির্দেশনার জন্য কোনও নেতা ছাড়াই রেখে</em></strong>।
                            </p>

                            <p className="mb-4">
                                তারা ভয় পেয়েছিল এবং উদ্বিগ্ন ছিল যে তারা <strong><span className="text-amber-600 dark:text-amber-500">আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>)</span> পথ থেকে বিচ্যুত হবে</strong>।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophets/nuh.png" 
                                alt="নূহের লোকেরা" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: Satan's Deception */}
                <section className="my-8 md:my-12">
                    <div className="w-full my-6">
                        <img 
                            src="/images/prophets/nuh.png" 
                            alt="শয়তানের ছবি" 
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-l-4 border-red-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                শয়তান, যিনি ধূর্ত চোখে দেখছিলেন, কান্নাকাটি করা পুরুষ এবং মহিলাদের কাছে একজন মানুষ হিসেবে ছদ্মবেশে এসে তাদের কানে ফিসফিস করে বলেছিলেন:<br />
                                <em>"যদি আমরা এই ধার্মিক পুরুষদের মূর্তি তৈরি করি, তাহলে আমাদের উপাসনায় এটি আমাদের কাছে আরও আনন্দদায়ক হবে এবং তাদের আমাদের মনে করিয়ে দেবে।"</em>
                            </p>

                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                পুরুষরা সম্মত হয়েছিল কারণ তারা তাদের সবচেয়ে ধার্মিক পুরুষদের মূর্তি নির্মাণে কোনও ক্ষতি দেখেনি; এটি অবশ্যই তাদের আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কথা মনে করিয়ে দেবে এবং তাদের ভাল কাজ করতে উৎসাহিত করবে।
                            </p>

                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>শয়তান সফলভাবে তার দুর্নীতির বীজ বপন করেছিল।</strong> তিনি ধৈর্যশীল ছিলেন কারণ তিনি জানতেন যে মানুষকে অন্যকে উপাসনা করতে দেওয়া একটি ধীর প্রক্রিয়া।
                            </p>

                            <Card className="my-4 bg-white dark:bg-gray-800 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed">
                                        <strong>যখন সেই প্রজন্ম চলে গিয়েছিল, এবং নতুন প্রজন্মের লোকেরা মূর্তি নির্মাণের উদ্দেশ্য ভুলে গিয়েছিল, শয়তান পুরুষদের কানে ফিসফিস করে বলেছিল:</strong> <em>"তোমাদের পূর্বপুরুষরা এই মূর্তিগুলির উপাসনা করত। এই মূর্তিগুলি তাদের ভালোতা এনেছিল।"</em>
                                    </p>
                                </CardContent>
                            </Card>

                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>এইভাবে, মূর্তিপূজা মানুষের হৃদয়ে শিকড় গেড়ে বসেছিল।</strong>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: Prophet Nuh's Mission */}
                <section className="my-8 md:my-12">
                    <p className="mb-4">
                        <strong>শতাব্দী কেটে গিয়েছিল, এবং আল্লাহ মূর্তিপূজকদের সত্যের দিকে ফিরিয়ে আনার জন্য একজন নবী পাঠানোর সিদ্ধান্ত নিয়েছিলেন</strong>। এই পবিত্র কাজের জন্য নির্বাচিত নবী ছিলেন <span className="text-amber-600 dark:text-amber-500 font-semibold">নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span> (ইহুদি-খ্রিস্টান সমতুল্য নবী নোহ)।
                    </p>

                    <p className="mb-4">
                        <span className="text-amber-600 dark:text-amber-500 font-semibold">আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰলَىٰ</span>)</span> তাঁর অনুগত শিষ্যকে <span className="text-amber-600 dark:text-amber-500 font-semibold">বাকপটুতা এবং অপরিসীম ধৈর্য</span> দিয়ে আশীর্বাদ করেছিলেন যাতে তিনি সফলতার সাথে তাঁর দায়িত্ব পালন করতে পারেন। তাই <span className="text-amber-600 dark:text-amber-500 font-semibold">নবী নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span> তাঁর লোকদের কাছে বিশাল মহাবিশ্বের রহস্য সম্পর্কে প্রচার করতে শুরু করেছিলেন—তিনি তাদের রাত এবং দিন, তারকা এবং চাঁদ, উদ্ভিদ এবং প্রাণী, এবং আকাশ এবং পৃথিবী সম্পর্কে জানিয়েছিলেন।
                    </p>

                    <p className="mb-4">
                        তিনি তাদের ব্যাখ্যা করেছিলেন যে <strong>মানুষ আল্লাহর দ্বারা তাঁর মহিমা এবং উপাসনা করার জন্য সৃষ্টি করা হয়েছিল</strong>। নূহ তারপর তাদের <span className="text-amber-600 dark:text-amber-500 font-semibold">আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) একত্ব</span> সম্পর্কে বলেছিলেন — যে বিশ্বের রহস্যগুলি কেবল <strong>একজন সত্য ঈশ্বরের অস্তিত্বের প্রমাণ</strong>, এবং এটি <span className="text-amber-600 dark:text-amber-500 font-semibold">আল্লাহ সর্বোচ্চ</span> ছাড়া অন্য কেউ নয়। তিনি তাদের ব্যাখ্যা করেছিলেন যে <strong>শয়তান তাদের মূর্তি উপাসনায় বিভ্রান্ত করেছিল</strong> এবং তাদের সতর্ক করেছিলেন যে যদি তারা তাদের মূর্তি উপাসনা অব্যাহত রাখে তবে <strong>আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছ থেকে একটি ভয়াবহ শাস্তি</strong> আসবে।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                <strong>নবী নূহের লোকেরা তাঁকে অত্যন্ত বিভ্রান্তি এবং ধৈর্য সহকারে শুনেছিল।</strong>
                            </p>

                            <p className="mb-4">
                                নূহের লোকদের মধ্যে সবচেয়ে দুর্ভাগ্য এবং হতাশ ব্যক্তিরা নবীর কথায় <strong>আশা এবং সান্ত্বনা খুঁজে পেতে শুরু করেছিল</strong> এবং ধীরে ধীরে ইসলামের আওতায় প্রবেশ করেছিল, <strong>যখন ধনী ব্যক্তিরা ক্রোধে দেখছিল</strong>।
                            </p>

                            <p className="mb-4">
                                তারা নূহকে বলেছিল:<br /><strong><em>"আমরা আপনাকে আমাদের মতো একজন মানুষ হিসেবেই দেখছি।"</em></strong>
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophets/nuh.png" 
                                alt="নূহের লোকেরা রাগান্বিত" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        <span className="text-amber-600 dark:text-amber-500 font-semibold">নবী নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span> তাদের ব্যাখ্যা করেছিলেন যে <strong>তিনি অবশ্যই একজন মানুষ ছিলেন, এবং আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) স্পষ্টভাবে একজন মানব বার্তাবাহককে নির্বাচিত করেছিলেন</strong> কারণ পৃথিবী সর্বোপরি মানুষ দ্বারা দখল করা হয়েছিল। এবং যদি ফেরেশতারা পৃথিবী দখল করত, <strong>আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>)</strong> অবশ্যই তাঁর বার্তা পৌঁছে দেওয়ার জন্য একজন ফেরেশতা বার্তাবাহক পাঠাতেন।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: Wealthy People's Challenge */}
                <section className="my-8 md:my-12">
                    <div className="w-full my-6">
                        <img 
                            src="/images/prophets/nuh.png" 
                            alt="নূহের লোকেরা আঙুল দেখাচ্ছে" 
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>একদিন, শহরের <span className="text-amber-600 dark:text-amber-500">ধনী মালিকরা</span> <span className="text-amber-600 dark:text-amber-500">নবী নূহের</span> কাছে এসে তাঁকে বলেছিল:</strong><br />
                                <em>"শোন নূহ, যদি তুমি চাও যে আমরা তোমার উপর বিশ্বাস করি, তাহলে তোমার বিশ্বাসীদের বরখাস্ত কর। তারা নম্র এবং দরিদ্র, যখন আমরা অভিজাত এবং ধনী; কোনও বিশ্বাস আমাদের উভয়কে অন্তর্ভুক্ত করতে পারে না।"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <span className="text-amber-600 dark:text-amber-500 font-semibold">নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span> <span className="text-amber-600 dark:text-amber-500 font-semibold">ধনী পুরুষদের অজ্ঞতা</span> সম্পর্কে ভালভাবে সচেতন ছিলেন। তিনি জানতেন যে তিনি তাদের ব্যাখ্যা করার জন্য শান্ত থাকতে হবে যে বস্তুবাদী সম্পদ আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) দৃষ্টিতে মূল্যহীন, এবং এটি হল একজনের হৃদয়ের মধ্যে যা সত্যিই তাঁর কাছে গুরুত্বপূর্ণ।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-l-4 border-emerald-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong><span className="text-emerald-700 dark:text-emerald-400">নবী নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span> তাদের উত্তর দিয়েছিলেন:</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                হে আমার লোকেরা! আমি এর জন্য কোনও সম্পদ চাই না, আমার পুরস্কার আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ছাড়া অন্য কারও কাছ থেকে নয়। আমি যারা বিশ্বাস করেছে তাদের তাড়িয়ে দিতে যাচ্ছি না। নিশ্চয়ই, তারা তাদের রবের সাথে দেখা করতে যাচ্ছে, কিন্তু আমি দেখছি যে তোমরা অজ্ঞ লোক। হে আমার লোকেরা! যদি আমি তাদের তাড়িয়ে দিই, তাহলে আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) বিরুদ্ধে কে আমাকে সাহায্য করবে? তাহলে কি তোমরা চিন্তা করবে না? এবং আমি তোমাদের বলছি না যে আমার সাথে আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ধনভাণ্ডার রয়েছে, বা আমি অদৃশ্য জানি, বা আমি বলছি না যে আমি একজন ফেরেশতা, এবং আমি যাদের সম্পর্কে তোমাদের চোখ নিচে তাকায় তাদের বলছি না যে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাদের উপর কোনও ভালোতা দেবেন না। আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাদের অভ্যন্তরীণ আত্মায় কী আছে তা জানেন। সেই ক্ষেত্রে, আমি অবশ্যই অন্যায়কারীদের একজন হব।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা হুদ, আয়াত ২৯-৩১)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                <span className="text-amber-600 dark:text-amber-500 font-semibold">মূর্তিপূজকরা ক্ষুব্ধ হয়েছিল।</span> তারা নূহের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) অবিরাম প্রচার এবং তর্ক সহ্য করেছিল অনেক দিন ধরে।
                            </p>

                            <Card className="my-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed">
                                        <strong>তারা ক্রোধে <span className="text-amber-600 dark:text-amber-500">নূহকে (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span> চ্যালেঞ্জ করেছিল:</strong><br />
                                        <em>"হে নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)! তুমি আমাদের সাথে বিতর্ক করেছ এবং আমাদের সাথে বিতর্ক দীর্ঘায়িত করেছ, এখন যদি তুমি সত্যবাদীদের মধ্যে হও তবে আমাদের কাছে যা তুমি আমাদের হুমকি দিয়েছ তা নিয়ে এস।"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা হুদ, আয়াত ৩২)</span>
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="my-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-l-4 border-emerald-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed">
                                        <strong><span className="text-emerald-700 dark:text-emerald-400">নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span> উত্তর দিয়েছিলেন:</strong><br />
                                        <em>"কেবল আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) যদি তিনি চান তবে তোমাদের উপর শাস্তি আনবেন, এবং তারপর তোমরা পালাতে পারবে না। এবং আমার পরামর্শ তোমাদের উপকার করবে না, এমনকি যদি আমি তোমাদের পরামর্শ দিতে চাই, যদি আল্লাহর ইচ্ছা তোমাদের পথভ্রষ্ট রাখা হয়। তিনি তোমাদের রব! এবং তাঁর কাছে তোমরা ফিরে যাবে।"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা হুদ, আয়াত ৩৩-৩৪)</span>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophets/nuh.png" 
                                alt="নূহের মূর্তিপূজকরা" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophets/nuh.png" 
                                alt="নূহের ধনী লোকেরা" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                অবিশ্বাসীরা, যারা নূহের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) সাথে সমস্ত ধৈর্য হারিয়েছিল, <strong>ইসলামের ধর্ম প্রচার করা থেকে তাঁকে ভয় দেখানোর চেষ্টায় আল্লাহর রাসূলকে অপমান করার জন্য অবলম্বন করেছিল</strong>।
                            </p>

                            <Card className="my-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed">
                                        <strong>তারা বলেছিল:</strong><br />
                                        <em>"নিশ্চয়ই, আমরা আপনাকে স্পষ্ট ভ্রান্তিতে দেখছি"</em>
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="my-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-l-4 border-emerald-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed">
                                        <strong>নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) ধৈর্যশীলভাবে উত্তর দিয়েছিলেন:</strong><br />
                                        <em>"হে আমার লোকেরা! আমার মধ্যে কোনও ভ্রান্তি নেই, কিন্তু আমি বিশ্বজগতের রবের কাছ থেকে একজন রাসূল! আমি তোমাদের কাছে আমার রবের বার্তা পৌঁছে দিই এবং তোমাদের কাছে আন্তরিক পরামর্শ দিই। এবং আমি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছ থেকে জানি যা তোমরা জানো না।"</em>
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

                {/* Section: Continuous Preaching */}
                <section className="my-8 md:my-12">
                    <div className="w-full my-6">
                        <img 
                            src="/images/prophets/nuh.png" 
                            alt="নূহের প্রচার" 
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                অবিরাম উপহাস এবং প্রত্যাখ্যান সত্ত্বেও, নবী নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) নয়শত পঞ্চাশ বছর ধরে তাঁর লোকদের ইসলামের দিকে আহ্বান করতে অবিচল ছিলেন। কিন্তু যে প্রজন্মের অস্তিত্ব এসেছিল তারা তাদের পিতাদের মতো নূহকে প্রত্যাখ্যান করেছিল।
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: Prophet Nuh's Supplication */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4">
                        <span className="text-amber-600 dark:text-amber-500">নবী নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span> দোয়া করেন:
                    </h2>

                    <p className="mb-4">
                        <strong>যে শিশু বোঝার বয়সে পৌঁছেছিল তাকে স্পষ্টভাবে সতর্ক করা হয়েছিল নবী নূহের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) শিক্ষার বিরুদ্ধে</strong>। যখনই নবী তাদের কাছে আসতেন, তারা তাঁর কাছ থেকে পালিয়ে যেত। <span className="text-amber-600 dark:text-amber-500 font-semibold">তারা নূহের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) উপস্থিতি থেকে পালানোর জন্য প্রতিটি অজুহাত খুঁজে পেয়েছিল</span>।
                    </p>

                    <p className="mb-4">
                        খুব শীঘ্রই, <strong>নবী নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) বুঝতে পারলেন যে অবিশ্বাসীদের সংখ্যা দ্রুত বৃদ্ধি পাচ্ছে</strong> যখন বিশ্বাসীদের সংখ্যা অপরিবর্তিত ছিল। তিনি তাঁর লোকদের জন্য খুবই মন খারাপ করেছিলেন এবং <strong>তাদের জন্য একটি ভয়াবহ পরিস্থিতি ভয় করেছিলেন, <span className="text-amber-600 dark:text-amber-500">কিন্তু তাঁর কাছে কোনও বিকল্প ছিল না</span></strong>।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <Card className="flex-1 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-l-4 border-emerald-500">
                            <CardContent className="pt-6">
                                <p className="text-sm md:text-base leading-relaxed mb-4">
                                    <strong>তাই নবী নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে দোয়া করেছিলেন:</strong>
                                </p>
                                <p className="text-sm md:text-base leading-relaxed italic">
                                    "হে আমার রব! তারা আমাকে অমান্য করেছে, এবং এমন একজনের অনুসরণ করেছে যার সম্পদ এবং সন্তান তাদের কোনও বৃদ্ধি দেয় না কিন্তু কেবল ক্ষতি। তারা একটি শক্তিশালী ষড়যন্ত্র করেছে। তারা বলেছে: 'তোমরা তোমাদের দেবতাদের ছেড়ে যাবে না, এবং তোমরা ওয়াদ্দ, সুওয়া, ইয়াগুথ, ইয়াউক, বা নাসর (মূর্তিগুলির নাম) ছেড়ে যাবে না'। নিশ্চয়ই তারা অনেককে পথভ্রষ্ট করেছে। হে আল্লাহ! অবিশ্বাসীদের কোনও বৃদ্ধি দিও না।"
                                </p>
                            </CardContent>
                        </Card>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophets/nuh.png" 
                                alt="নূহ দোয়া করছেন" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: Building the Ark */}
                <section className="my-8 md:my-12">
                    <div className="w-full my-6">
                        <img 
                            src="/images/prophets/nuh.png" 
                            alt="নূহের নৌকা নির্মাণ" 
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) শীঘ্রই নবী নূহকে প্রকাশ করেছিলেন যে তাঁর লোকদের মধ্যে অন্য কোনও মানুষ এরপর ইসলামে প্রবেশ করবে না।
                            </p>

                            <Card className="my-4 bg-white dark:bg-gray-800 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed">
                                        <strong>দুঃখিত এবং হতাশ হয়ে, নবী নূহ আল্লাহকে উত্তর দিয়েছিলেন:</strong><br />
                                        <em>"হে আমার রব! পৃথিবীতে একজন অবিশ্বাসীও রেখো না। যদি তুমি তাদের রেখে দাও, তাহলে তারা তোমার বান্দাদের পথভ্রষ্ট করবে এবং তারা কেবল দুষ্ট অবিশ্বাসীদের জন্ম দেবে।"</em>
                                    </p>
                                </CardContent>
                            </Card>

                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>নবী নূহের দোয়া তাঁর রব দ্বারা গৃহীত হয়েছিল।</strong>
                            </p>

                            <Card className="my-4 bg-white dark:bg-gray-800 border-l-4 border-emerald-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed">
                                        <strong>তিনি নবী নূহকে নির্দেশ দিয়েছিলেন:</strong><br />
                                        <em>"এবং আমাদের চোখের সামনে এবং আমাদের অনুপ্রেরণায় নৌকা নির্মাণ কর এবং যারা অন্যায় করেছে তাদের পক্ষে আমার কাছে আবেদন করো না।"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophets/nuh.png" 
                                alt="নূহের লোকেরা হাসছে" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                শহরের সীমানার বাইরে, সমুদ্র থেকে দূরে, <span className="text-amber-600 dark:text-amber-500 font-semibold">নবী নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) ফেরেশতাদের সমর্থন এবং নির্দেশনা সহ দিন এবং রাত ধরে নৌকা নির্মাণ করতে শুরু করেছিলেন</span>। নৌকার নির্মাণ অবিরাম লোকদের উপহাসের মধ্যে অব্যাহত ছিল।
                            </p>

                            <Card className="my-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed mb-4">
                                        <strong>তারা নবী নূহকে (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) উপহাস করে বলেছিল:</strong><br />
                                        <em>"হে নূহ! তোমার কাছে কি নবুওয়তের চেয়ে ছুতার কাজ বেশি আকর্ষণীয়? তুমি সমুদ্র থেকে এত দূরে একটি নৌকা কেন নির্মাণ করছ? তুমি কি এটিকে জলে টেনে নিয়ে যাবে নাকি বাতাস এটিকে তোমার জন্য বহন করবে?"</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed">
                                        <strong>নবী নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) উত্তর দিয়েছিলেন:</strong><br />
                                        <em>"তোমরা জানতে পারবে কে লজ্জা এবং কষ্টে পড়বে।"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <p className="mb-4">
                        <strong><span className="text-amber-600 dark:text-amber-500">আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তারপর নূহকে (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) নির্দেশ দিয়েছিলেন</span> যে যখন তাঁর বাড়ির চুলা থেকে জল প্রবাহিত হতে শুরু করবে, বিশ্বাসীদের সংগ্রহ কর এবং নৌকায় উঠ কারণ এটি বন্যার শুরু হওয়ার প্রথম লক্ষণ ছিল যা অবিশ্বাসীদের ধ্বংস করবে</strong>। খুব বেশি দিন না যেতেই, ভয়াবহ দিন ভোর হয়েছিল যখন নবী নূহের বাড়ির চুলা থেকে জল প্রবাহিত হতে শুরু করেছিল। নূহ জানতেন যে নৌকায় উঠার সময় এসেছে। <strong>বিশ্বাসীদের সাথে, নূহও তাঁর সাথে প্রাণী, পাখি এবং পোকামাকড়ের জোড়া নিয়ে গিয়েছিলেন</strong>।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>যারা নূহের অদ্ভুত আচরণ দেখেছিল তারা আবার তাঁকে উপহাস করে বলেছিল:</strong><br />
                                <em>"নূহ নিশ্চয়ই তার মাথা হারিয়ে ফেলেছে! সে প্রাণীদের নিয়ে কী করবে?"</em>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: The Flood */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4">
                        বন্যা
                    </h2>

                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 md:p-6 rounded-lg my-6">
                        <p className="mb-4">
                            <strong>শীঘ্রই, ভারী বৃষ্টি ক্রুদ্ধ আকাশ থেকে ঝরতে শুরু করেছিল, এবং পৃথিবীর প্রতিটি ফাটল দিয়ে জল উঠতে শুরু করেছিল</strong>। একসময় শুকনো জমি সম্পূর্ণরূপে সমুদ্র দ্বারা বিজয়ী হতে বেশি সময় লাগেনি।
                        </p>

                        <p className="mb-4">
                            <strong><span className="text-amber-600 dark:text-amber-500">নবী নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) তাঁর লোকদের উপর যে ভয়াবহ বিপর্যয় নেমে এসেছিল তা দেখেছিলেন।</span></strong> তিনি জানতেন যে অবিশ্বাসীদের আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ক্রোধ থেকে পালানোর কোনও উপায় নেই। <strong>অবিশ্বাসীদের মধ্যে ছিলেন নবী নূহের স্ত্রী এবং পুত্র, যারা তাঁর নৌকায় উঠতে অস্বীকার করেছিল।</strong>
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-l-4 border-emerald-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed mb-4">
                                        <strong>নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) হতাশ হয়ে তাঁর পুত্রকে ডাকলেন:</strong><br />
                                        <em>"হে আমার পুত্র! আমাদের সাথে উঠ এবং অবিশ্বাসীদের মধ্যে হয়ো না।"</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed mb-4">
                                        <strong>নূহের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) অজ্ঞ পুত্র উত্তর দিয়েছিলেন,</strong><br />
                                        <em>"আমি পাহাড়ে যাব; এটি আমাকে জল থেকে বাঁচাবে।"</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed">
                                        <strong>নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) উত্তর দিয়েছিলেন:</strong><br />
                                        <em>"আজ আল্লাহর নির্দেশ থেকে কোনও ত্রাণকর্তা নেই যাকে তিনি রহম করেছেন ছাড়া।"</em>
                                    </p>
                                </CardContent>
                            </Card>

                            <p className="mb-4">
                                খুব শীঘ্রই, <span className="text-amber-600 dark:text-amber-500 font-semibold">নূহের পুত্র ক্রুদ্ধ তরঙ্গ দ্বারা গ্রাস করা হয়েছিল</span>, আর কখনও দেখা যায়নি।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophets/nuh.png" 
                                alt="নূহের নৌকা বন্যা" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: Landing of the Ark */}
                <section className="my-8 md:my-12">
                    <div className="w-full my-6">
                        <img 
                            src="/images/prophets/nuh.png" 
                            alt="নূহের নৌকা অবতরণ" 
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed text-center mb-4">
                                যখন প্রতিটি অবিশ্বাসী মারা গিয়েছিল, আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) আকাশ এবং পৃথিবীকে নির্দেশ দিয়েছিলেন:<br /><br />
                                <em>"হে পৃথিবী! তোমার জল গিলে ফেল, এবং হে আকাশ! তোমার বৃষ্টি আটকাও।"</em><br /><br />
                                আকাশ অবিলম্বে পরিষ্কার হয়ে গিয়েছিল, এবং সূর্য জমিতে উজ্জ্বলভাবে জ্বলছিল। এদিকে, নূহের নৌকা শান্তভাবে জুদি পর্বতে অবতরণ করেছিল। আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাঁর নবীকে নির্দেশ দিয়েছিলেন:<br /><br />
                                <em>"হে নূহ! আমাদের কাছ থেকে শান্তি এবং তোমার এবং যারা তোমার সাথে আছে তাদের উপর আশীর্বাদ সহ (নৌকা থেকে) নেমে এস।"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <div className="text-center">
                        <p className="mb-4">
                            নির্দেশ অনুযায়ী, <span className="text-amber-600 dark:text-amber-500 font-semibold">নবী নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>), বিশ্বাসীদের সাথে, নৌকা থেকে নেমে এসেছিলেন</span>, উদ্ধারকৃত প্রাণী, পাখি এবং পোকামাকড় সবুজ জমিতে ছেড়ে দিয়েছিলেন।
                        </p>

                        <p className="mb-4">
                            <strong>নবী নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) তাঁর কপাল মাটিতে রেখেছিলেন, তাঁর রবের কাছে সিজদা করেছিলেন, এবং তাঁর রহমত এবং আশীর্বাদের জন্য অত্যন্ত কৃতজ্ঞতা প্রকাশ করেছিলেন। বিশ্বাসীরা আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে কৃতজ্ঞ ছিলেন ভয়াবহ পরীক্ষা থেকে তাদের রক্ষা করার জন্য এবং আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে কৃতজ্ঞতা প্রকাশের কাজ হিসেবে একটি দিন রোজা পালন করেছিলেন।</strong>
                        </p>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: Quran Verses */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        কুরআনের আয়াত যেখানে <span className="text-amber-600 dark:text-amber-500">নবী নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>)</span> উল্লিখিত:
                    </h2>

                    <p className="text-center mb-6">
                        মোট <strong>৪৭টি ভিন্ন উদাহরণ</strong> রয়েছে যেখানে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কুরআনে সরাসরি নবী নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) উল্লেখ করেছেন। এখানে আমরা আপনার জন্য অন্বেষণের জন্য সমস্ত রেফারেন্স প্রদান করি।
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 my-8">
                        <div>
                            <ul className="space-y-2 text-sm md:text-base">
                                <li>ইমরান (৩:৩৩)</li>
                                <li>আনআম (৬:৮৪)</li>
                                <li>আরাফ (৭:৫৯)</li>
                                <li>আরাফ (৭:৬৯)</li>
                                <li>তওবা (৯:৭০)</li>
                                <li>ইউনুস (১০:৭১)</li>
                                <li>হুদ (১১:২৫)</li>
                                <li>হুদ (১১:৩৬)</li>
                                <li>হুদ (১১:৮৯)</li>
                                <li>ইবরাহিম (১৪:৯)</li>
                                <li>ইসরা (১৭:৩)</li>
                                <li>ইসরা (১৭:১৭)</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-2 text-sm md:text-base">
                                <li>মরিয়ম (১৯:৫৮)</li>
                                <li>আনবিয়া (২১:৭৬)</li>
                                <li>হজ্জ (২২:৪২)</li>
                                <li>মুমিনুন (২৩:২৩)</li>
                                <li>ফুরকান (২৫:৩৭)</li>
                                <li>শুআরা (২৬:১০৫)</li>
                                <li>আনকাবুত (২৯:১৪)</li>
                                <li>সাফফাত (৩৭:৭৫)</li>
                                <li>সাদ (৩৮:১২)</li>
                                <li>গাফির (৪০:৫)</li>
                                <li>গাফির (৪০:৩১)</li>
                                <li>শুরা (৪২:১৩)</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-2 text-sm md:text-base">
                                <li>কাফ (৫০:১২)</li>
                                <li>যারিয়াত (৫১:৪৬)</li>
                                <li>নাজম (৫৩:৫২)</li>
                                <li>কামার (৫৪:৯)</li>
                                <li>হাদিদ (৫৭:২৬)</li>
                                <li>তাহরিম (৬৬:১০)</li>
                                <li>আরাফ (৭:৬৪)</li>
                                <li>ইউনুস (১০:৭৩)</li>
                                <li>হুদ (১১:৩৭)</li>
                                <li>হুদ (১১:৪০)</li>
                                <li>মুমিনুন (২৩:২৭)</li>
                                <li>আনকাবুত (২৯:১৫)</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-2 text-sm md:text-base">
                                <li>কামার (৫৪:১৩)</li>
                                <li>হাক্কাহ (৬৯:১১)</li>
                                <li>নূহ (৭১:১)</li>
                                <li>আরাফ (৭:৬৪)</li>
                                <li>ইউনুস (১০:৭৩)</li>
                                <li>হুদ (১১:৪০)</li>
                                <li>ফুরকান (২৫:৩৭)</li>
                                <li>আনকাবুত (২৯:১২০)</li>
                                <li>আনকাবুত (২৯:১৪)</li>
                                <li>কামার (৫৪:১১)</li>
                                <li>নূহ (৭১:২৫)</li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
