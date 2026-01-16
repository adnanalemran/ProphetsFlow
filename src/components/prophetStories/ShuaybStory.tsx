import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function ShuaybStory() {
    return (
        <div className="mb-12 mt-6 md:mt-10">
            {/* Header Image */}
            <div className="w-full mb-8">
                <img 
                    src="/images/prophet-stories/shuaib/story-of-prophet-shuaib-as.png" 
                    alt="শুআইব (আঃ)-এর গল্প" 
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4 md:mb-6">
                <span className="text-amber-600 dark:text-amber-500">নবী শুআইব (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর গল্প
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-10">
                <span className="text-amber-600 dark:text-amber-500">নবী শুআইব (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর মিশন
            </p>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6 md:space-y-8">
                
                {/* Introduction */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/shuaib/Prophet Shu_aib Calligraphy.png" 
                                alt="নবী শুআইবের ক্যালিগ্রাফি" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="mb-4">
                                শুআইব (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) ইসলামে একজন নবী এবং ইহুদি-খ্রিস্টান ঐতিহ্য অনুযায়ী জেথ্রো বলে বিশ্বাস করা হয়। <span className="text-amber-600 dark:text-amber-500">যাইহোক, এই বিশ্বাস সর্বসম্মতভাবে সম্মত নয় এবং এটি বিতর্কিত।</span>
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        নবী শুআইবের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) গল্প মাদইয়ান নামক একটি অঞ্চলে ঘটেছিল, যা আজ বৃহত্তর সিরিয়ার মধ্যে রয়েছে।
                    </p>

                    <p className="mb-4">
                        এই অঞ্চলটি ঘন বন দ্বারা পরিবেষ্টিত ছিল এবং ব্যবসায়ীদের একটি সম্প্রদায়ের আবাসস্থল ছিল। যদিও তারা তাদের ব্যবসায়ে সমৃদ্ধ ছিল, মাদইয়ানের লোকেরা তাদের ব্যবসায়িক লেনদেনে প্রতারণামূলক ছিল।
                    </p>

                    <p className="mb-4">
                        তারা প্রায়ই ত্রুটিপূর্ণ বা কম পরিমাপের পণ্য বিক্রি করে গ্রাহকদের প্রতারণা করত। ব্যবসায়ীদের কেন্দ্র হিসাবে, মাদইয়ানীয়রা কাফেলা আক্রমণ করে এবং তাদের শহরের মধ্য দিয়ে নিরাপদ যাত্রার জন্য ফি দাবি করার জন্য ভয় করা হত।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                <strong>মাদইয়ানীয়রা কেবল ব্যবসায়ে অসৎ ছিল না বরং অবিশ্বাসীও ছিল,</strong> আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) অস্তিত্ব প্রত্যাখ্যান করে এবং <span className="font-arabic">বনভূমি এবং প্রকৃতির দেবতাদের উপাসনা করার কথা বলা হয়।</span>
                            </p>

                            <p className="mb-4">
                                <strong>তাদের সূরা কাফ আয়াত ১৪-এ <em>আসহাব আল-আইকাহ</em> বা <span className="text-amber-600 dark:text-amber-500">"কাঠের সঙ্গী"</span> হিসাবে উল্লেখ করা হয়েছে।</strong> তাদের দুর্নীতি এবং অবিশ্বাসের প্রতিক্রিয়ায়, আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰলَىٰ</span>) তাদের নিজস্ব সম্প্রদায় থেকে একজন নবী নিয়োগ করে পথনির্দেশ পাঠিয়ে তার রহমত প্রদান করেছিলেন। তিনি শুআইব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) নামক একজন ব্যক্তিকে এই গুরুত্বপূর্ণ কাজের জন্য নির্বাচন করেছিলেন।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/shuaib/Companions of the Wood.png" 
                                alt="কাঠের সঙ্গী" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/shuaib/Prophet-Shu_aib.png" 
                                alt="নবী শুআইব" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                একটি দুর্নীতিগ্রস্ত এবং অহংকারী সম্প্রদায়কে তাদের অতীত বিশ্বাস ত্যাগ করতে এবং একটি নতুন জীবনযাত্রা গ্রহণ করতে পরিচালিত করা নিঃসন্দেহে একটি সহজ কাজ নয়।
                            </p>

                            <p className="mb-4">
                                বিশেষ করে তাদের অনৈতিক ব্যবসা দীর্ঘকাল ধরে তাদের উপকার করেছে এবং তা উল্লেখযোগ্য ত্যাগের প্রয়োজন হবে। <strong>কিন্তু, নবী শুআইব (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) ছিলেন আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) এই মিশন সম্পাদনে দৃঢ়প্রতিজ্ঞ এবং <span className="text-amber-600 dark:text-amber-500">অন্যদের ইসলামের মধ্যে নিয়ে আসা।</span></strong>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* The Disbeliever's Denials */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">অবিশ্বাসীদের</span> অস্বীকার
                    </h2>

                    <p className="mb-4">
                        নবী শুআইব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার লোকদের সম্বোধন করেছিলেন, তাদের মিথ্যা দেবতাদের ত্যাগ করতে এবং একমাত্র আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) উপাসনা করার জন্য অনুরোধ করেছিলেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <em><span className="text-amber-600 dark:text-amber-500">হে আমার লোকেরা, আল্লাহর উপাসনা কর;</span> তার ছাড়া তোমাদের অন্য কোন উপাস্য নেই। তোমার রবের কাছ থেকে তোমাদের কাছে স্পষ্ট প্রমাণ এসেছে।" তিনি ঘোষণা করেছিলেন।</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আরাফ, আয়াত ৮৫)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <img 
                        src="/images/prophet-stories/shuaib/Prophet Shu_aib & merchant.png" 
                        alt="নবী শুআইব ও ব্যবসায়ী" 
                        className="w-full h-auto rounded-lg shadow-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        নবী শুআইব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার লোকদের তাদের ব্যবসায়িক লেনদেনে ন্যায়সঙ্গত এবং ন্যায়পরায়ণ হতে এবং তাদের জীবিকা সৎভাবে উপার্জন করতে অনুরোধ করেছিলেন।
                    </p>

                    <p className="mb-4">
                        তিনি তাদের মনে করিয়ে দিয়েছিলেন যে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাদের উপর যে সমস্ত আশীর্বাদ বর্ষণ করেছিলেন এবং তাদের সতর্ক করেছিলেন যে যদি তারা তার পথনির্দেশের বিরুদ্ধে তাদের বিদ্রোহ অব্যাহত রাখে তবে তাদের উপর গুরুতর শাস্তি হবে।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <em>
                                            <strong>তাই পরিমাপ এবং ওজন পূরণ কর</strong> এবং লোকদের তাদের প্রাপ্য থেকে বঞ্চিত করো না এবং এর সংস্কারের পর পৃথিবীতে দুর্নীতি সৃষ্টি করো না। এটি তোমাদের জন্য ভালো, যদি তোমরা বিশ্বাসী হও।
                                        </em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <em>এবং প্রতিটি পথে বসো না, হুমকি দিয়ে এবং আল্লাহর পথ থেকে তাদের দূরে সরিয়ে দাও যারা তার উপর বিশ্বাস করে, এটি [দেখতে] বিচ্যুত করার চেষ্টা করছে। এবং স্মরণ কর যখন তোমরা কম ছিলে এবং তিনি তোমাদের বৃদ্ধি করেছিলেন। এবং দেখ কীভাবে দুর্নীতিকারীদের শেষ হয়েছিল।</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <em>এবং যদি তোমাদের মধ্যে একটি দল থাকে যারা আমার কাছে যা পাঠানো হয়েছে তাতে বিশ্বাস করেছে এবং একটি দল যারা বিশ্বাস করেনি, তাহলে ধৈর্য ধর যতক্ষণ না আল্লাহ আমাদের মধ্যে বিচার করেন। এবং তিনি সর্বোত্তম বিচারক।</em>
                                    </p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-4">
                                        — (সূরা আল-আরাফ, আয়াত ৮৫-৮৭)
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/shuaib/Weigh scale.png" 
                                alt="ওজন স্কেল" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        সূরা আশ-শুআরা, আয়াত ১৭৭-১৮৪-এ, নবী শুআইব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার লোকদের ধার্মিকতার জন্য একটি অনুরূপ অনুরোধ ভাগ করেছেন এবং আল্লাহকে ভয় করার গুরুত্বের উপর জোর দিয়েছেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তিনি তাদের চ্যালেঞ্জ করেন, জিজ্ঞাসা করে,</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <em>"তোমাদের কি ভয় নেই?" আমি তোমাদের কাছে একজন বিশ্বস্ত রাসূল।<br /><br /><strong className="text-amber-600 dark:text-amber-500">তাই আল্লাহকে ভয় কর এবং আমার আনুগত্য কর।</strong> আমি এর জন্য তোমাদের কাছে কোন পুরস্কার চাই না। আমার পুরস্কার কেবল বিশ্বজগতের রবের কাছে। পরিমাপ পূরণ কর এবং লোকদের পণ্য হ্রাস করো না, সমান ভারসাম্যে ওজন কর এবং কম দিও না, এবং দেশে দুর্নীতি সৃষ্টি করে ঘুরে বেড়িও না, এবং তাকে ভয় কর যিনি তোমাদের এবং পূর্ববর্তী প্রজন্মকে সৃষ্টি করেছেন।"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/shuaib/Angry merchant.png" 
                                alt="রাগান্বিত ব্যবসায়ী" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>অবিশ্বাসীরা, পরিবর্তন করতে অনিচ্ছুক এবং লোভে ভরা, নবী শুআইবকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) উপহাস করেছিল তারা বিদ্রূপে উত্তর দিয়েছিল,</strong>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <em>হে শুআইব! তোমার প্রার্থনা কি তোমাকে নির্দেশ দেয় যে আমরা সেই দেবতাদের ত্যাগ করব যাদের আমাদের পূর্বপুরুষরা উপাসনা করতেন, অথবা আমরা আমাদের সম্পদ যেভাবে খুশি ব্যবহার করা ছেড়ে দেব? তুমি কি মনে কর যে তুমি, এবং কেবল তুমি, সহনশীল এবং সঠিক-নির্দেশিত?</em>
                                        <br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-হুদ, আয়াত ৮৭)</span>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>নবী শুআইব (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) উত্তর দিয়েছিলেন:</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <em>"আমার লোকেরা, তোমরা কি দেখতে পারো না? যদি আমি আমার রবের কাছ থেকে স্পষ্ট প্রমাণের উপর কাজ করি? তিনি আমাকে ভালো সরবরাহ দিয়েছেন: আমি যা তোমাদের নিষেধ করছি তা করতে চাই না; আমি কেবল যতদূর সম্ভব জিনিস ঠিক করতে চাই। আল্লাহর সাহায্য ছাড়া আমি সফল হতে পারি না: আমি তার উপর বিশ্বাস করি এবং সর্বদা তার দিকে ফিরে যাই।"</em>
                                <br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-হুদ, আয়াত ৮৮)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        নবী শুআইব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ছিলেন প্রজ্ঞা এবং যুক্তির মানুষ। তিনি তাদের দেখানোর চেষ্টা করেছিলেন যে তাদের সম্পদ নেওয়ার তার কোন আগ্রহ নেই, কিন্তু তাদের হৃদয়ে গভীর দুর্নীতি তার সৎ উদ্দেশ্যকে অন্ধ করে দিয়েছিল। তাদের সন্দেহ এবং স্বার্থপরতা তাদের বিচারকে মেঘাচ্ছন্ন করেছিল, সত্যকে চিনতে তাদের বাধা দিয়েছিল।
                    </p>

                    <img 
                        src="/images/prophet-stories/shuaib/3 adzab.png" 
                        alt="তিনটি শাস্তি" 
                        className="w-full h-auto rounded-lg shadow-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        তাই, তাদের বিবেক জাগ্রত করার প্রচেষ্টায়, তিনি তাদের মনে করিয়ে দিয়েছিলেন যে নবী নূহ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>), হুদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>), এবং সালিহ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) লোকদের যে শেষ হয়েছিল এবং তাদের অনুরোধ করেছিলেন যে তারা আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) আন্তরিক ক্ষমা চাইতে।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <em>"আমার লোকেরা! আমার বিরোধিতা তোমাদেরকে এমন অপরাধের দিকে নিয়ে যাক না যা তোমাদের উপর সেই শাস্তি নিয়ে আসবে যা আগে নূহের লোকদের, এবং হুদের লোকদের, এবং সালিহের লোকদের আঘাত করেছিল। এবং লুতের লোকদের জমি তোমাদের থেকে খুব দূরে নয়! তোমার রবের ক্ষমা চাও এবং তার দিকে তাওবার সাথে ফিরে যাও। নিশ্চয়ই আমার রব সর্বদা দয়ালু, সর্বাধিক প্রেমময়।"</em>
                                <br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-হুদ ৮৯-৯০)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তাই তারা তাকে হুমকি দিয়েছিল:</strong><br />
                                <em>"তারা বলেছিল: 'হে শুআইব! আমরা তোমার যা বলছ তার বেশিরভাগই বুঝতে পারি না। নিশ্চয়ই আমরা তোমাকে আমাদের মধ্যে দুর্বল দেখছি। যদি তোমার আত্মীয়রা না থাকত, আমরা অবশ্যই তোমাকে পাথর মেরে হত্যা করতাম কারণ তোমার আমাদের পরাজিত করার শক্তি নেই।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-হুদ, আয়াত ৯১)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>শুআইব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ধৈর্যশীল ছিলেন যখন তিনি উত্তর দিয়েছিলেন:</strong><br />
                                <em>"'আমার লোকেরা! আমার আত্মীয়রা কি তোমাদের কাছে আল্লাহর চেয়ে শক্তিশালী যে তোমরা (আত্মীয়দের ভয় করছ যখন) আল্লাহকে তোমাদের পিছনে ফেলে দিয়েছ? নিশ্চয়ই আমার রব তোমরা যা কর তার সব কিছু ঘিরে রাখে। আমার লোকেরা! তোমার পথ অনুযায়ী কাজ চালিয়ে যাও এবং আমি (আমার) কাজ (চালিয়ে যাব)। শীঘ্রই তুমি জানবে কে একটি অপমানজনক শাস্তিতে আক্রান্ত হবে, এবং কে মিথ্যাবাদী প্রমাণিত হয়। এবং দেখ, আমিও তোমাদের সাথে দেখব।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-হুদ ৯২-৯৩)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তারা উত্তর দিয়েছিল,</strong><br />
                                <em>"তুমি তাদের মধ্যে একজন ছাড়া আর কিছু নও যারা জাদু করা হয়েছে, তুমি কেবল আমাদের মতো একজন নশ্বর। নিশ্চয়ই আমরা বিশ্বাস করি যে তুমি একজন সম্পূর্ণ মিথ্যাবাদী। তাই যদি তুমি সত্যবাদী হও তবে আকাশের একটি টুকরো আমাদের উপর পড়াও।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আশ-শুআরা, আয়াত ১৮৫-১৮৭)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>শুআইব উত্তর দিয়েছিলেন,</strong><br />
                                <em>"আমার রব ভালো জানেন তোমরা যা কর।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আশ-শুআরা, আয়াত ১৮৮)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Leaders' Confrontation */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                হুমকি দ্বারা নিরুৎসাহিত না হয়ে, শুআইব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তাদের পূর্বপুরুষদের ধর্ম ত্যাগ করতে এবং আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ধর্ম প্রচার করতে থাকেন। তার অধ্যবসায় মাদইয়ানের নেতাদের রাগান্বিত করেছিল কারণ তারা শুআইবের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) কাছ থেকে কোন অবকাশ দেখেনি।
                            </p>

                            <p className="mb-4">
                                নেতারা, গোত্রের মধ্যে তাদের মর্যাদা এবং কর্তৃত্ব হারানোর ভয়ে, শুআইবের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এবং তার অনুসারীদের তাদের বিশ্বাস প্রচার করতে চ্যালেঞ্জ ছাড়াই অনুমতি দেওয়ার ঝুঁকি বুঝতে পেরেছিলেন।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/shuaib/Chief leader.png" 
                                alt="নেতা" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>সূরা আল-আরাফ, আয়াত ৮৮-এ বর্ণিত হিসাবে, তারা তাকে একটি কঠোর আল্টিমেটাম দিয়ে সম্মুখীন হয়েছিল:</strong><br />
                                <em>"হে শুআইব! আমরা অবশ্যই তোমাকে এবং তোমার বিশ্বাসী সঙ্গীদের আমাদের শহর থেকে নির্বাসিত করব, অথবা তুমি আমাদের ধর্মে ফিরে যাবে"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>নবী (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) উত্তর দিয়েছিলেন:</strong><br />
                                <em>"'কী! যদিও আমরা [তোমার ধর্ম] ঘৃণা করি? যদি আল্লাহ আমাদের এটি থেকে মুক্তি দেওয়ার পর আমরা তোমার ধর্মে ফিরে যাই তবে আমরা আল্লাহর বিরুদ্ধে মিথ্যা তৈরি করব। এবং আমরা আবার এটি ফিরে যেতে পারি না যদি না আল্লাহর ইচ্ছা, আমাদের রব না হয়। আমাদের রব সবকিছুর জ্ঞান রাখেন, এবং আল্লাহর উপর আমরা আমাদের বিশ্বাস রাখি। আমাদের রব! আমাদের এবং আমাদের লোকদের মধ্যে সঠিকভাবে বিচার কর, কারণ তুমি বিচারকারীদের মধ্যে সর্বোত্তম।'"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আরাফ, আয়াত ৮৮-৮৯)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>নেতারাও শুআইবের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) অনুসারীদের লক্ষ্য করেছিলেন এবং হুমকি দিয়েছিলেন:</strong><br />
                                <em>"যদি তুমি শুআইবকে অনুসরণ কর, তুমি সম্পূর্ণ পরাজিত হবে।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আরাফ, আয়াত ৯০)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        ভয়ে যে আরও অনেকেই শুআইবের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সাথে যোগ দেবে, নেতারা শুআইবের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) জিনিসপত্র এবং তার অনুসারীদের জিনিসপত্র আটকে রেখেছিল এবং তাদের মাদইয়ান থেকে বের করে দিয়েছিল। তাই নবী তার রবের কাছে প্রার্থনা করেছিলেন এবং তার সাহায্যের জন্য অনুরোধ করেছিলেন।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Torment of the Canopy */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">ছাতার</span> শাস্তি
                    </h2>

                    <img 
                        src="/images/prophet-stories/shuaib/A mass dark cloud.png" 
                        alt="একটি বিশাল অন্ধকার মেঘ" 
                        className="w-full h-auto rounded-lg shadow-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        মাদইয়ান অঞ্চলে একটি তীব্র তাপ ছড়িয়ে পড়েছিল, যা অবিশ্বাসীদের জন্য মহান অস্বস্তি সৃষ্টি করেছিল। শীঘ্রই, অন্ধকার মেঘ মাদইয়ানের আকাশের কাছে এসেছিল। লোকেরা তাদের বাড়ি থেকে বেরিয়ে এসেছিল, আনন্দিত হয়ে যে তাদের দেবতারা অবশেষে তাদের কষ্ট শেষ করেছে এবং তাদের বৃষ্টি দিয়ে আশীর্বাদ করছে।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কুরআনে বলেছেন:</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <em>"কিন্তু তারা তাকে অস্বীকার করেছিল, তাই তাদের উপর অন্ধকারের দিনের প্রতিশোধ এসেছিল। দেখ! এটি ছিল একটি ভয়াবহ দিনের প্রতিশোধ।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আশ-শুআরা, আয়াত ১৮৯)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <strong>এই দিনটি "<span className="text-amber-600 dark:text-amber-500">ছাতার শাস্তি</span>" হিসাবে পরিচিত</strong> এবং এটি কুরআন বা কোন প্রামাণিক ঐতিহ্যে স্পষ্টভাবে বিস্তারিত নয়। কিন্তু আমাদের বলা হয়েছে যে এটি ছিল একটি ঐশ্বরিক প্রতিশোধের দিন যারা আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) পথনির্দেশের বিরুদ্ধে বিদ্রোহ করেছিল। কিছু ভাষ্যকার একটি অবিচ্ছিন্ন ঝড় সম্পর্কে লিখেছেন, সহিংস বজ্রপাত সহ যা তাদের ধ্বংস নিয়ে এসেছিল।
                    </p>

                    <p className="mb-4">
                        <strong>তাফসীর মাআরিফুল কুরআনে, একটি প্রাণবন্ত চিত্র উপস্থাপন করা হয়েছে,</strong><br />
                        "আল্লাহ তা'আলা একটি লোকের উপর এমন একটি চরম তাপ পাঠিয়েছিলেন যে তারা বাড়ির ভিতরে বা বাইরে কোনটিতেই আরাম খুঁজে পায়নি। তারপর তিনি একটি কাছাকাছি বনের উপর একটি বিশাল অন্ধকার মেঘ পাঠিয়েছিলেন, যার নিচে একটি ঠান্ডা বাতাস ছিল। যেহেতু সমগ্র লোক অত্যধিক তাপের কারণে বিচলিত ছিল, তারা মেঘের নিচে আশ্রয় নিতে দৌড়েছিল।
                    </p>

                    <img 
                        src="/images/prophet-stories/shuaib/Fire rain.png" 
                        alt="আগুনের বৃষ্টি" 
                        className="w-full h-auto rounded-lg shadow-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        যখন তাদের সবাই মেঘের আচ্ছাদনের নিচে জড়ো হয়েছিল, তখন পানি পরিবর্তে আগুন বৃষ্টি হয়েছিল। এই ঘটনাগুলির প্রকৃত প্রকৃতি কেবল আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) জানেন, কিন্তু এটি নিশ্চিত যে যারা নবী শুআইবের অবিরাম আহ্বান প্রত্যাখ্যান করেছিল তারা পরাজিতদের মধ্যে ছিল।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>সূরা আল-আরাফ আয়াত ৯১-৯২-এ,</strong><br />
                                <em>"তারপর একটি চাঞ্চল্যকর বিপর্যয় তাদের আক্রমণ করেছিল, এবং তারা তাদের বাসস্থানে সিজদায় রয়ে গিয়েছিল। যারা শুআইবকে মিথ্যাবাদী বলে অভিযুক্ত করেছিল তারা যেন সেখানে কখনও বাস করেনি; তারাই সম্পূর্ণ পরাজিত হয়েছিল।"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তার লোকদের ধ্বংস প্রত্যক্ষ করার পর, নবী শুআইব (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) তাদের থেকে মুখ ফিরিয়ে নিয়েছিলেন এবং বলেছিলেন:</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <em>"'হে আমার লোকেরা! নিশ্চয়ই আমি তোমাদের কাছে আমার রবের বার্তা পৌঁছে দিয়েছি, এবং তোমাদের আন্তরিক পরামর্শ দিয়েছি। তাহলে, আমি কীভাবে এমন লোকদের জন্য শোক করতে পারি যারা সত্য গ্রহণ করতে অস্বীকার করে?'"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আরাফ, আয়াত ৯৩)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কুরআনেও বলেছেন:</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <em>"যারা শুআইবকে প্রত্যাখ্যান করেছিল তারা যেন সেখানে কখনও বাস করেনি তেমনি মুছে ফেলা হয়েছিল। যারা শুআইবকে প্রত্যাখ্যান করেছিল তারাই সত্যিকারের পরাজিত।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আরাফ, আয়াত ৯২)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

            </div>
        </div>
    )
}
