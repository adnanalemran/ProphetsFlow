import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function IshmaelStory() {
    return (
        <div className="mb-12 mt-6 md:mt-10">
            {/* Header Image */}
            <div className="w-full mb-8">
                <img 
                    src="/images/prophet-stories/ismail/the-story-of-prophet-ishamel-as.png" 
                    alt="ইসমাইল (আঃ)-এর গল্প" 
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-10">
                <span className="text-amber-600 dark:text-amber-500">নবী ইসমাইল (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর গল্প
            </h1>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6 md:space-y-8">
                
                {/* Birth of Prophet Ishmael */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">নবী ইসমাইলের</span> জন্ম
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/ismail/Prophet Ibrahim & Ishmael Calligraphy.png" 
                                alt="নবী ইব্রাহিম ও ইসমাইলের ক্যালিগ্রাফি" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) এবং তার স্ত্রী সারাহ, যিনি অনেক বছর ধরে সন্তান জন্ম দিতে অক্ষম ছিলেন, একাকীত্ব দূর করতে এবং পরিবারের উত্তরাধিকার বহন করার জন্য একটি সন্তানের আকাঙ্ক্ষা করেছিলেন। তার স্বামীর প্রতি তার নিষ্ঠায়,
                            </p>
                            <p className="mb-4">
                                <strong>সারাহ প্রস্তাব করেছিলেন যে তার দাসী হাজেরা ইব্রাহিমকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বিয়ে করবে</strong> এই আকাঙ্ক্ষা পূরণের আশায়। <br /><br /><strong>এই মিলন শীঘ্রই তাদের প্রথম পুত্র দিয়ে আশীর্বাদ করেছিল, <span className="text-amber-600 dark:text-amber-500">ইসমাইল (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>)।</span></strong> ইসমাইল, তার পিতার মতো, আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) দ্বারা একজন মহান নবী হিসেবে কাজ করার জন্য নিযুক্ত হয়েছিলেন।
                            </p>
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Prophet Ibrahim's Departure */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>)</span>-এর প্রস্থান
                    </h2>

                    <p className="mb-4">
                        একদিন, নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) হাজেরাকে একটি দীর্ঘ যাত্রার জন্য নিজেকে এবং তাদের পুত্র ইসমাইলকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) প্রস্তুত করতে বলেছিলেন। হাজেরাকে যাত্রার কোন বিবরণ দেওয়া হয়নি; তবুও, তিনি তার স্বামীর কথা শুনেছিলেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                পরিবারটি বিভিন্ন ভূদৃশ্যের মধ্য দিয়ে দীর্ঘ ভ্রমণ করেছিল, যার মধ্যে রয়েছে চাষযোগ্য জমি, মরুভূমি এবং পাহাড়, যতক্ষণ না তারা আরব উপদ্বীপের একটি অনুর্বর উপত্যকায় পৌঁছেছিল।
                            </p>
                            <p className="mb-4">
                                সেখানে, <strong>একটি একাকী গাছের নিচে, তারা থামিয়েছিল।</strong> এলাকাটি মানব জীবন, চাষাবাদ বা পানির উৎসের কোন লক্ষণ দেখায়নি।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/ismail/Lone Tree.png" 
                                alt="একাকী গাছ" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/ismail/Dates & Water.png" 
                                alt="খেজুর ও পানি" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                তাদের এখনও স্তন্যপান করা শিশুকে নিয়ে হাজেরাকে নামাতে সাহায্য করার পর, <strong>নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তাকে খেজুরের একটি চামড়ার থলে এবং একটি ছোট পানির থলে দিয়েছিলেন</strong>। তিনি তারপর তার ঘোড়ায় চড়ে তার প্রত্যাবর্তন যাত্রায় রওনা দিয়েছিলেন।
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        নবী ইব্রাহিমের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আকস্মিক প্রস্থানে বিভ্রান্ত হয়ে, হাজেরা তার পিছনে দৌড়েছিলেন, একটি ব্যাখ্যা চাইছিলেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>তিনি ডাকলেন,</strong><br />
                                <em>"হে ইব্রাহিম! তুমি কোথায় যাচ্ছ, আমাদের এই উপত্যকায় রেখে যেখানে এমন কোন ব্যক্তি নেই যার সঙ্গ আমরা উপভোগ করতে পারি, এবং এমন কিছুও নেই (উপভোগ করার)?"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                ইব্রাহিমের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) কাছ থেকে কোন উত্তর না পেয়ে, হাজেরা তার প্রশ্নটি কয়েকবার পুনরাবৃত্তি করেছিলেন। তারপর তার কাছে স্পষ্ট হয়ে উঠেছিল যে তিনি নীরব ছিলেন কারণ তিনি সর্বশক্তিমানের কাছ থেকে একটি আদেশ সম্মান করছিলেন।
                            </p>
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <em>"আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কি আপনাকে এটি করতে আদেশ করেছেন?"</em><br />
                                        <strong>তিনি জিজ্ঞাসা করেছিলেন।</strong>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <em>"হ্যাঁ,"</em> <strong>তিনি উত্তর দিয়েছিলেন।</strong><br /><br />
                                        <em>"তাহলে তিনি আমাদের অবহেলা করবেন না,"</em> <strong>তিনি আত্মবিশ্বাসের সাথে পর্যবেক্ষণ করেছিলেন।</strong>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/ismail/Hagar & Ibrahim.png" 
                                alt="হাজেরা ও ইব্রাহিম" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        হাজেরা তারপর গাছের ছায়ায় ফিরে গিয়েছিলেন, ইব্রাহিমকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বাড়ির দিকে এগিয়ে যেতে দেখছিলেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>), একটি ভারী হৃদয় এবং এমন অনুর্বর জমিতে তার পরিবারকে রেখে যাওয়ার উদ্বেগ নিয়ে, প্রার্থনায় তার হাত তুলেছিলেন:</strong><br />
                                <em>"হে আমাদের রব! আমি আমার কিছু সন্তানকে আপনার পবিত্র ঘরের কাছে একটি অনুর্বর উপত্যকায় বসতি স্থাপন করেছি! হে আমাদের রব! আমি এটি করেছি যাতে তারা নামাজ প্রতিষ্ঠা করতে পারে। তাই লোকদের হৃদয়কে তাদের প্রতি স্নেহপূর্ণভাবে ঝুঁকিয়ে দিন, এবং তাদের জীবিকার জন্য ফল প্রদান করুন যাতে তারা কৃতজ্ঞতা প্রকাশ করতে পারে। হে আমাদের রব! নিশ্চয়ই আপনি জানেন আমরা যা গোপন করি এবং আমরা যা প্রকাশ করি, এবং পৃথিবীতে বা আকাশে কিছুই আল্লাহর কাছ থেকে লুকানো নেই।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইব্রাহিম, আয়াত ৩৭-৩৮)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* The Miracle of Zamzam */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">জমজমের</span> অলৌকিক ঘটনা
                    </h2>

                    <p className="mb-4">
                        হাজেরা তার সন্তানকে স্তন্যপান করানো অব্যাহত রেখেছিলেন এবং নবী ইব্রাহিমের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) রেখে যাওয়া খেজুর এবং পানি রেশন করেছিলেন। <strong>যাইহোক, রেখে যাওয়া সরবরাহ দ্রুত শেষ হয়ে গিয়েছিল, তাদের দুজনকেই একটি অনুর্বর মরুভূমি উপত্যকার মাঝখানে ক্ষুধার্ত রেখে।</strong>
                    </p>

                    <img 
                        src="/images/prophet-stories/ismail/Hagar Climb.png" 
                        alt="হাজেরা আরোহণ করছেন" 
                        className="w-full h-auto rounded-lg shadow-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        তার শিশুর তৃষ্ণা এবং ক্ষুধার কারণে ছটফট করতে দেখে হাজেরা সাহায্য চেয়েছিলেন। <strong>তিনি ইসমাইলকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) রেখে গিয়েছিলেন নিকটতম পাহাড়ে আরোহণ করতে, <span className="text-amber-600 dark:text-amber-500">আস-সাফা</span>।</strong>
                    </p>
                    <p className="mb-4 text-center text-sm italic">
                        শীর্ষে কোন সাহায্য বা পানি না পেয়ে, <span className="text-amber-600 dark:text-amber-500">তিনি সাফা পর্বত থেকে নেমে এসেছিলেন, এবং তারপর আরেকটি নিকটবর্তী পাহাড়ে আরোহণ করেছিলেন যার নাম মারওয়া</span>। তবুও, তিনি দৃষ্টিতে বালি ছাড়া কিছুই দেখেননি।
                    </p>

                    <p className="mb-4">
                        হতাশা থেকে, তিনি এগিয়ে-পিছিয়ে দৌড়েছিলেন, <strong>দুটি পাহাড়ের মধ্যে <span className="text-amber-600 dark:text-amber-500">মোট সাতবার</span> আরোহণ করেছিলেন</strong> একটি কণ্ঠস্বর শোনার আগে। তিনি তারপর নীরব হয়ে পড়েছিলেন, ধৈর্য সহকারে অপেক্ষা করছিলেন যে কণ্ঠস্বর আবার ডাকবে।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>তিনি তারপর আবার কণ্ঠস্বর শুনেছিলেন কিন্তু এর কোন অর্থ করতে পারেননি, হাজেরা চিৎকার করে ডাকলেন:</strong><br /><br />
                                <em>"হে, (তুমি যেই হও না কেন)! তুমি আমাকে তোমার কণ্ঠস্বর শুনিয়েছ; তোমার কি আমার সাহায্য করার কিছু আছে?"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/ismail/Zamzam.png" 
                                alt="জমজম" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                হাজেরার বিস্ময়ে, <strong>তিনি জমজমের স্থানে একটি ফেরেশতা দেখেছিলেন, তিনি তার গোড়ালি (বা ডানা) দিয়ে খনন করছিলেন যতক্ষণ না পানি অলৌকিকভাবে প্রবাহিত হতে শুরু করেছিল।</strong>
                            </p>
                            <p className="mb-4">
                                স্বস্তিতে অভিভূত হয়ে, তিনি জলাধারের দিকে দৌড়ে গিয়েছিলেন, এর চারপাশে একটি বেসিন-সদৃশ কাঠামো তৈরি করেছিলেন, এবং তার পানির থলে ভরতে শুরু করেছিলেন।
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        তবুও, পানি প্রবাহিত হতে থাকল। হাজেরা তার তৃষ্ণা মেটালেন এবং তার শিশুকে স্তন্যপান করালেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong className="text-amber-600 dark:text-amber-500">ফেরেশতা তারপর হাজেরাকে বলেছিলেন:</strong><br />
                                <em>"অবহেলিত হওয়ার ভয় করো না, কারণ এটি আল্লাহর ঘর, যা এই ছেলে এবং তার পিতা দ্বারা নির্মিত হবে, এবং আল্লাহ কখনই তার লোকদের অবহেলা করেন না।"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>ইবনে আব্বাসের বর্ণিত হাদীসে, সহীহ বুখারী ৩৩৬২ এবং ৩৩৬৪-এ রেকর্ড করা হয়েছে, নবী মুহাম্মদ (<span className="font-arabic">ﷺ</span>) বলেছেন:</strong><br />
                                <em>"আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ইসমাইলের মায়ের উপর রহমত বর্ষণ করুন! যদি তিনি জমজমকে (এটিকে নিয়ন্ত্রণ করার চেষ্টা না করে) (বা তিনি সেই পানি থেকে না তুলে থাকতেন) (তার পানির থলে ভরতে) প্রবাহিত হতে দিতেন, জমজম পৃথিবীর পৃষ্ঠে প্রবাহিত একটি স্রোত হত।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">(সহীহ বুখারী ৩৩৬২, ৩৩৬৪)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong className="text-amber-600 dark:text-amber-500">নোট</strong><br />
                                <em>এই জলাধারটি জমজম নামে পরিচিত, এবং দুটি পাহাড়ের মধ্যে দৌড়ানোর অনুশীলন হল সাঈয়ের রীতি যা মুসলিমরা তীর্থযাত্রার সময় পালন করে।</em>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* The tribe of Jurhum settles */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">জুরহুম গোত্র</span> উপত্যকায় বসতি স্থাপন করে
                    </h2>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong className="text-amber-600 dark:text-amber-500">নবী (<span className="font-arabic">صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ</span>) তারপর বলতে থাকেন,</strong><br />
                                <em>"ঘর (অর্থাৎ কাবা) সেই সময়ে একটি উঁচু স্থানে ছিল একটি টিলার মতো, এবং যখন বন্যা আসত, তারা এর ডান এবং বাম দিকে প্রবাহিত হত। তিনি সেইভাবে বাস করতেন যতক্ষণ না জুরহুম গোত্রের কিছু লোক বা জুরহুম থেকে একটি পরিবার তার এবং তার সন্তানের পাশ দিয়ে যাচ্ছিল, যেমন তারা (অর্থাৎ জুরহুম লোকেরা) কাদা'র পথ দিয়ে আসছিল।<br /><br />
                                তারা মক্কার নিম্ন অংশে অবতরণ করেছিল যেখানে তারা একটি পাখি দেখেছিল যার পানি ঘিরে উড়ে যাওয়া এবং এটি ছেড়ে না যাওয়ার অভ্যাস ছিল।<br /><br />
                                তারা বলেছিল,<br />
                                "এই পাখিটি অবশ্যই পানি ঘিরে উড়ছে, যদিও আমরা জানি যে এই উপত্যকায় কোন পানি নেই।"<br /><br />তারা এক বা দুজন বার্তাবাহক পাঠিয়েছিল যারা পানির উৎস আবিষ্কার করেছিল এবং তাদের জানাতে ফিরে এসেছিল। তাই, তারা সবাই (পানির দিকে) এসেছিল।"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <strong>যখন তারা পৌঁছেছিল, তারা হাজেরা এবং ইসমাইলকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) জলাধারের পাশে বসে থাকতে দেখেছিল।</strong>
                    </p>

                    <img 
                        src="/images/prophet-stories/ismail/Hagar & Ishmael.png" 
                        alt="হাজেরা ও ইসমাইল" 
                        className="w-full h-auto rounded-lg shadow-lg my-6"
                    />

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তারা সম্মানজনক ছিল এবং তাকে জিজ্ঞাসা করেছিল:</strong><br />
                                <em>"আপনি কি আমাদের আপনার সাথে থাকতে অনুমতি দেবেন?"</em><br /><br />
                                <em>"হ্যাঁ, কিন্তু আপনার পানির অধিকার থাকবে না,"</em><br />
                                <strong>তিনি উত্তর দিয়েছিলেন।</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                তারা সহজেই সম্মত হয়েছিল এবং হাজেরা এবং ইসমাইলের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সাথে বসতি স্থাপন করেছিল, তাদের জমি এবং জলাধার ভাগ করে নিয়েছিল।
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mt-4">
                                জুরহুম গোত্রের লোকেরা তারপর তাদের পরিবারের জন্য পাঠিয়েছিল, যারা এসেছিল এবং পরে মক্কার স্থায়ী বাসিন্দা হয়ে উঠেছিল।
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        ইসমাইল (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) জুরহুম গোত্রের মধ্যে বড় হয়েছিলেন এবং তাদের কাছ থেকে আরবি শিখেছিলেন। তিনি তার অসাধারণ চরিত্র এবং গুণাবলীর জন্য গোত্র দ্বারা প্রিয় ছিলেন। <strong>যখন তিনি পরিপক্কতার বয়সে পৌঁছেছিলেন, <span className="text-amber-600 dark:text-amber-500">তিনি (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তাদের মধ্যে থেকে একজন মহিলাকে বিয়ে করেছিলেন</span></strong>। হাদীস সংক্ষেপে সারাহের মৃত্যুর উল্লেখ করে, কিন্তু কুরআন বা হাদীস এই ঘটনার কোন বিবরণ রেকর্ড করে না।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* The Sacred Sacrifice */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        পবিত্র <span className="text-amber-600 dark:text-amber-500">কুরবানি</span>
                    </h2>

                    <p className="mb-4">
                        <strong>একদিন, নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) মক্কায় ইসমাইলকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) দেখতে গিয়েছিলেন</strong>। এই বয়সে ইসমাইল তার পিতার সাথে কাজ করার জন্য যথেষ্ট পরিপক্ক হয়েছিলেন।
                    </p>

                    <img 
                        src="/images/prophet-stories/ismail/Ibrahim Dream & Ismail talk.png" 
                        alt="ইব্রাহিম স্বপ্ন ও ইসমাইল কথা" 
                        className="w-full h-auto rounded-lg shadow-lg my-6"
                    />

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>এই সফরের সময়, ইব্রাহিম একটি পুনরাবৃত্ত স্বপ্নের বিষয়বস্তু প্রকাশ করেছিলেন যা তিনি দেখছিলেন, বলেছিলেন,</strong><br />
                                <em>"হে আমার পুত্র, <strong>আমি আমার স্বপ্নে দেখছি যে আমি <span className="text-amber-600 dark:text-amber-500">তোমাকে জবাই করছি</span></strong>। তাই বিবেচনা কর (এবং আমাকে বল) তুমি কী মনে কর।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আস-সাফফাত, আয়াত ১০২)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>ইসমাইল (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) উত্তর দিয়েছিলেন:</strong><br />
                                <em>"হে আমার পিতা! <strong>যা আপনাকে আদেশ করা হয়েছে তা করুন, ইনশাআল্লাহ (যদি আল্লাহ চান), আপনি আমাকে <span className="text-amber-600 dark:text-amber-500">আস-সাবিরিন</span> (ধৈর্যশীলদের, ইত্যাদি) মধ্যে পাবেন।</strong>"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আস-সাফফাত, আয়াত ১০২)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <strong>এটি ছিল আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) থেকে পাঠানো একটি <span className="text-amber-600 dark:text-amber-500">খুব কঠিন</span> পরীক্ষা।</strong>
                    </p>

                    <p className="mb-4">
                        নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার বৃদ্ধ বয়সে ছিলেন, তার প্রথমজাতের জন্য অধ্যবসায় সহকারে প্রার্থনা করছিলেন, এবং আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাকে তার হৃদয়ের আকাঙ্ক্ষা দিয়েছিলেন। তিনি তার পুত্রকে ভালোবাসতেন, কিন্তু তাকে আল্লাহর ইচ্ছার কাছে সমর্পণ করতে হয়েছিল। এটি ছিল সম্পূর্ণ বিশ্বাস এবং আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) এর কাছে সম্পূর্ণ সমর্পণের সর্বোচ্চ পরীক্ষা যা কোন ব্যক্তির উপর হতে পারে।
                    </p>

                    <p className="mb-4">
                        <strong>এটি ছিল তার একমাত্র পুত্র, এবং তার জীবন নেওয়ার ইচ্ছা এবং প্রস্তুতি <span className="text-amber-600 dark:text-amber-500">ছিল পরীক্ষা</span></strong>। ইসমাইলের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) শান্ত আচরণ এবং সহযোগিতা সমানভাবে প্রশংসা এবং অধ্যয়নের যোগ্য।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong className="text-amber-600 dark:text-amber-500">সূরা আস-সাফফাত, আয়াত ১০৩-এ বর্ণিত হিসাবে:</strong><br />
                                <em>"...তারা উভয়ই তাদের ইচ্ছাকে (আল্লাহর কাছে) সমর্পণ করেছিল,"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ইসমাইলকে তার সাথে আরাফাত পর্বতে যেতে বলেছিলেন কুরবানি করতে। নির্দিষ্ট ঐতিহাসিক এবং ব্যাখ্যামূলক উৎস অনুযায়ী, এটি আমাদের বলে যে <strong>শয়তান তিনটি পৃথক উপলক্ষে নবী ইব্রাহিমকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) প্রলুব্ধ করার চেষ্টা করেছিল <span className="text-amber-600 dark:text-amber-500">জামারাত-আল-উলা, জামারাত-আল-ওস্তা, এবং জামারাত-আল-কুবরা।</span></strong>
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/ismail/Prophet Ibrahim pelting shaitan.png" 
                                alt="নবী ইব্রাহিম শয়তানকে পাথর ছুঁড়ছেন" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                প্রতিটি সাক্ষাতের সাথে, শয়তানের ইব্রাহিমকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) প্রভাবিত করার প্রচেষ্টা তীব্রতর হয়েছিল।<br /><br />
                                যাইহোক, তিনি এই প্রলোভনগুলি এড়িয়ে গিয়েছিলেন, <strong>প্রতিটি স্থানে শয়তানকে <span className="text-amber-600 dark:text-amber-500">সাতটি নুড়ি</span> ছুঁড়ে</strong>, তাকে তাড়িয়ে দিয়েছিলেন।
                            </p>
                            <img 
                                src="/images/prophet-stories/ismail/7 pebbles.png" 
                                alt="৭টি নুড়ি" 
                                className="w-full h-auto rounded-lg shadow-lg my-4"
                            />
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তাফসীর, মা'রিফুল কুরআন, নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এবং তার পুত্রের মধ্যে কথোপকথন বর্ণনা করে, নিম্নরূপ:</strong><br />
                                <em>"আমার প্রিয় পিতা, আমাকে ভালোভাবে বেঁধে রাখ যাতে আমার শরীর খুব বেশি ছটফট না করে; এবং আপনার পোশাকও সুরক্ষিত রাখুন, পাছে আমার রক্তের ফোঁটা এটি নষ্ট করে যা আল্লাহর সাথে আমার পুরস্কার কমাতে পারে, এবং তদুপরি, যদি আমার মা এই রক্ত দেখতেন, তিনি কার্যত দুঃখে আক্রান্ত হতেন।<br /><br />
                                এবং আপনার ছুরি ধারালো করুন, এবং আমার গলায় দ্রুত চালান, যাতে আমার শেষ শ্বাস আমার উপর সহজ হয়, কারণ মৃত্যু কঠিন; এবং যখন আপনি আমার মায়ের কাছে ফিরে যাবেন, আমার প্রতি তার সম্মান জানাবেন এবং যদি আপনি আমার শার্ট তাকে নিতে চান, আপনি স্বাগত, এটি তাকে যে সান্ত্বনার প্রয়োজন তা দিতে পারে।"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                তার একমাত্র পুত্রের ঠোঁট থেকে আসা এই কথাগুলি শুনে, কে কল্পনা করতে পারে যে তার হৃদয়ে কী চলছিল।
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>কিন্তু, এখানে ছিল সাইয়্যিদনা ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>)। দৃঢ়তার একটি পর্বতের মতো, তিনি তার পুত্রকে বলেছিলেন,</strong><br />
                                <em>"পুত্র, আল্লাহ দ্বারা নির্ধারিত এই কাজে তুমি আমার জন্য কত ভালো সাহায্যকারী।"</em><br /><br />
                                <strong>এটি বলার পর, তিনি তার পুত্রকে চুম্বন করেছিলেন এবং, ভেজা চোখে, তিনি তাকে বেঁধেছিলেন।</strong><br /><br />
                                <strong className="text-amber-600 dark:text-amber-500">কুরআনের আয়াতটি তারপর অব্যাহত থাকে,</strong><br />
                                <em>"এবং তিনি তাকে তার কপালে (কুরবানির জন্য) প্রস্ট্রেট করেছিলেন"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আস-সাফফাত, আয়াত ১০৩)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <strong>তাকে কুরবানির জন্য প্রস্ট্রেট করতে দেওয়ার কয়েকটি কারণ রয়েছে।</strong><br />
                        <strong className="text-amber-600 dark:text-amber-500">একটি</strong>, এটি একটি প্রতীকী অঙ্গভঙ্গি হিসাবে দেখা যেতে পারে যা আরও উদাহরণ দেয় যে তারা আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) এর ইচ্ছার কাছে সম্পূর্ণ সমর্পণ।<br /><br />
                        <strong className="text-amber-600 dark:text-amber-500">দ্বিতীয়ত</strong>, এটি ইব্রাহিমকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার পুত্রের চোখে তাকানো এড়াতে সাহায্য করেছিল, একটি দৃশ্য যা সম্ভবত করুণা এবং ভালোবাসার অনুভূতি জাগিয়ে তুলবে একই সাথে আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) আদেশ অমান্য করার ভয়ও থাকবে।<br />
                        তাই, নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এবং তার পুত্র একটি অসম্ভব কাজকে কিছুটা সহজ করার জন্য ছুরিটিকে তার নিচ থেকে উঠিয়ে আসার জন্য অবস্থান বেছে নিয়েছিলেন।
                    </p>

                    <img 
                        src="/images/prophet-stories/ismail/Prophet Ishmael sacrifice.png" 
                        alt="নবী ইসমাইল কুরবানি" 
                        className="w-full h-auto rounded-lg shadow-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) যখন তার পুত্রের গলায় ছুরি নিয়ে এসেছিলেন, একটি ঐশ্বরিক হস্তক্ষেপ ঘটেছিল। <span className="text-amber-600 dark:text-amber-500">অলৌকিকভাবে, ইসমাইল (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) একটি ভেড়া দ্বারা প্রতিস্থাপিত হয়েছিল।</span> ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>), তার ভক্তির কাজটি সম্পন্ন করে, <span className="text-amber-600 dark:text-amber-500">পরিবর্তে ভেড়াটি জবাই করেছিলেন</span>। স্বস্তি এবং কৃতজ্ঞতায় অভিভূত হয়ে, তিনি ইসমাইলকে নিরাপদ এবং অক্ষত অবস্থায় দূরত্বে খুঁজে পেয়েছিলেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তিনি তারপর একটি কণ্ঠস্বর শুনেছিলেন:</strong><br />
                                <em>"হে ইব্রাহিম, তুমি নিশ্চয়ই তোমার স্বপ্ন পূরণ করেছ। এইভাবে আমরা ভালো কাজকারীদের পুরস্কৃত করি।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">(সূরা আস-সাফফাত, আয়াত ১০৪-১০৫)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong className="text-amber-600 dark:text-amber-500">আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) অব্যাহত রেখে বলেছেন:</strong><br />
                                <em>"এটি নিশ্চয়ই একটি স্পষ্ট পরীক্ষা ছিল। এবং আমরা তাকে একটি শক্তিশালী কুরবানি (অর্থাৎ একটি ভেড়া) দিয়ে মুক্তিপণ দিয়েছিলাম, এবং আমরা তার জন্য পরবর্তী প্রজন্মের মধ্যে একটি ভালো নাম সংরক্ষণ করেছি। ইব্রাহিমের উপর শান্তি বর্ষিত হোক। এইভাবে আমরা ভালো কাজকারীদের পুরস্কৃত করি। নিশ্চয়ই, তিনি ছিলেন আমাদের বিশ্বাসী বান্দাদের মধ্যে একজন।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">(সূরা আস-সাফফাত, আয়াত ১০৬-১১১)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong className="text-amber-600 dark:text-amber-500">নোট</strong><br />
                                <em>নবী ইব্রাহিমের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) শক্তিশালী কুরবানির অনুসরণ করে, <strong>একটি প্রাণী জবাই করার অনুশীলনকে <span className="text-amber-600 dark:text-amber-500">হজ্জ তীর্থযাত্রীদের জন্য একটি অপরিহার্য কাজ</span> হিসাবে বিবেচনা করা হয় যা তাদের তীর্থযাত্রার সমাপ্তি চিহ্নিত করে।</strong> একইভাবে, জামারাতকে পাথর ছুঁড়ে মারাও হজ্জের বাধ্যতামূলক রীতিনীতিগুলির মধ্যে একটি।</em>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Wives of Ishmael */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        ইসমাইলের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) <span className="text-amber-600 dark:text-amber-500">স্ত্রীরা</span>
                    </h2>

                    <p className="mb-4">
                        হাজেরার মৃত্যুর পর, ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার পুত্র ইসমাইলকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এবং তার পরিবারকে দেখতে মক্কায় এসেছিলেন। যখন তিনি ইসমাইলের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বাড়িতে পৌঁছেছিলেন, তিনি তার পুত্রের স্ত্রীর সাথে দেখা করেছিলেন। যখন তিনি ইসমাইলের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) অবস্থান সম্পর্কে জিজ্ঞাসা করেছিলেন, তিনি উত্তর দিয়েছিলেন যে তার স্বামী জীবিকা সন্ধানে গিয়েছিলেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তারপর তাকে <span className="text-amber-600 dark:text-amber-500">তাদের জীবনযাত্রার অবস্থা</span> সম্পর্কে জিজ্ঞাসা করেছিলেন।</strong><br /><br />
                                        <em>"আমরা দুর্দশায় বাস করছি; আমরা কষ্ট এবং দারিদ্র্যে বাস করছি,"</em><br />
                                        <strong>তিনি অভিযোগ করেছিলেন।</strong><br /><br />
                                        <strong>নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) উত্তর দিয়েছিলেন:</strong><br />
                                        <em>"যখন তোমার স্বামী ফিরে আসবে, আমার সালাম তাকে জানাবে এবং তাকে বল যে সে তার দরজার (তার বাড়ির) চৌকাঠ পরিবর্তন করবে।"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/ismail/Wife 1.png" 
                                alt="স্ত্রী ১" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        যখন ইসমাইল (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ফিরে এসেছিলেন, তিনি কিছু অস্বাভাবিক অনুভব করেছিলেন, তাই তিনি তার স্ত্রীকে জিজ্ঞাসা করেছিলেন যে কেউ তাকে দেখতে এসেছিল কিনা।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <em>"হ্যাঁ"</em> <strong>তিনি উত্তর দিয়েছিলেন।</strong> <em>"একজন বৃদ্ধ ব্যক্তি এমন-এমন বর্ণনার এসেছিলেন এবং আমাকে আপনার সম্পর্কে জিজ্ঞাসা করেছিলেন, এবং আমি তাকে জানিয়েছিলাম, এবং তিনি আমাদের জীবনযাত্রার অবস্থা সম্পর্কে জিজ্ঞাসা করেছিলেন, এবং আমি তাকে বলেছিলাম যে আমরা কষ্ট এবং দারিদ্র্যে বাস করছি।"</em><br /><br />
                                <em>"তিনি কি আপনাকে কোন পরামর্শ দিয়েছিলেন?"</em> <strong>ইসমাইল (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) জিজ্ঞাসা করেছিলেন</strong><br /><br />
                                <em>"হ্যাঁ, তিনি আমাকে বলেছিলেন যে আমি আপনার কাছে তার সালাম জানাব এবং আপনাকে বলব যে আপনি আপনার দরজার চৌকাঠ পরিবর্তন করবেন,"</em> <strong>তিনি বলেছিলেন।</strong><br /><br />
                                <strong>ইসমাইল বুঝতে পারলেন যে এটি তার পিতা ছিলেন এবং <span className="text-amber-600 dark:text-amber-500">এনকোড করা বার্তাটি বুঝতে পারলেন</span>; তিনি বলেছিলেন,</strong><br />
                                <em>"এটি ছিল আমার পিতা, এবং আপনি দরজার চৌকাঠ। তিনি আমাকে আপনাকে তালাক দেওয়ার নির্দেশ দিয়েছেন। তাই, আপনার পরিবারের কাছে ফিরে যান।"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        তাই, <strong>ইসমাইল তাকে তালাক দিয়েছিলেন</strong> এবং তাদের মধ্যে থেকে (অর্থাৎ জুরহুম) আরেকজন মহিলাকে বিয়ে করেছিলেন।
                    </p>

                    <p className="mb-4">
                        কিছু সময় পর, নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার পুত্রকে আবার দেখতে মক্কায় ভ্রমণ করেছিলেন কিন্তু তাকে খুঁজে পাননি।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>তাই তিনি তার স্ত্রীকে ডাকলেন এবং <span className="text-amber-600 dark:text-amber-500">ইসমাইল (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সম্পর্কে জিজ্ঞাসা করেছিলেন</span>।</strong>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <em>"তিনি আমাদের জীবিকা সন্ধানে গিয়েছেন,"</em><br />
                                        <strong>তিনি উত্তর দিয়েছিলেন।</strong>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <em>"তোমরা কীভাবে চলছ,"</em> <strong>তিনি জিজ্ঞাসা করেছিলেন।</strong><br /><br />
                                        <em>"আমরা সমৃদ্ধ এবং ভালো আছি (আমাদের কাছে প্রচুর পরিমাণে সবকিছু আছে),"</em><br />
                                        <strong>তিনি বলেছিলেন, <span className="text-amber-600 dark:text-amber-500">আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>)</span> কে ধন্যবাদ জানিয়ে।</strong>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <em>"তোমরা কী ধরনের খাবার খাও?"</em> <strong>তিনি জিজ্ঞাসা করেছিলেন।</strong><br /><br />
                                        <em>"মাংস,"</em> <strong>তিনি উত্তর দিয়েছিলেন।</strong><br /><br />
                                        <em>"তোমরা কী পান কর?"</em> <strong>তিনি জিজ্ঞাসা করেছিলেন</strong><br /><br />
                                        <em>"পানি,"</em> <strong>তিনি উত্তর দিয়েছিলেন।</strong><br /><br />
                                        <em>"হে আল্লাহ! তাদের মাংস এবং পানি বরকত দাও,"</em><br />
                                        <strong>নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কে প্রার্থনা করেছিলেন।</strong>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>তারপর, নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার স্ত্রীকে নির্দেশ দিয়েছিলেন:</strong><br />
                                        <em>"যখন তোমার স্বামী আসবে, আমার সালাম তাকে জানাবে এবং তাকে বল যে সে তার দরজার চৌকাঠ দৃঢ় রাখবে।"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/ismail/Wife 2.png" 
                                alt="স্ত্রী ২" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover mb-4"
                            />
                            <img 
                                src="/images/prophet-stories/ismail/Meat & Water.png" 
                                alt="মাংস ও পানি" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        যখন ইসমাইল (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ফিরে এসেছিলেন, তিনি তার স্ত্রীকে জিজ্ঞাসা করেছিলেন যে কেউ তাকে দেখতে এসেছিল কিনা।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <em>"হ্যাঁ"</em> <strong>তিনি উত্তর দিয়েছিলেন।</strong><br />
                                <em>"একজন সুদর্শন বৃদ্ধ ব্যক্তি আমার কাছে এসেছিলেন।"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong><span className="text-amber-600 dark:text-amber-500">বৃদ্ধ ব্যক্তির প্রশংসা করে,</span> তিনি যোগ করেছিলেন:</strong><br />
                                <em>"তিনি আপনাকে সম্পর্কে জিজ্ঞাসা করেছিলেন, এবং আমি তাকে জানিয়েছিলাম যে আমরা ভালো অবস্থায় আছি।"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <em>"তিনি কি আপনাকে কোন পরামর্শ দিয়েছিলেন?"</em> <strong>ইসমাইল (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) জিজ্ঞাসা করেছিলেন।</strong><br /><br />
                                <em>"হ্যাঁ, তিনি আমাকে বলেছিলেন যে আমি আপনার কাছে তার সালাম জানাব এবং নির্দেশ দিয়েছিলেন যে আপনি আপনার দরজার চৌকাঠ দৃঢ় রাখবেন,"</em> <strong>তিনি বলেছিলেন।</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <em>"এটি ছিল আমার পিতা, এবং আপনি দরজার চৌকাঠ। <span className="text-amber-600 dark:text-amber-500">তিনি আমাকে নির্দেশ দিয়েছেন যে আমি আপনাকে আমার সাথে রাখব</span>,"</em> <strong>ইসমাইল (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) উল্লেখ করেছিলেন।</strong>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Building the Kaaba */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">কাবা</span> নির্মাণ
                    </h2>

                    <p className="mb-4">
                        ইবনে আব্বাস হাদীসে উল্লেখ করতে থাকেন যে, একদিন, ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) আবার মক্কায় ইসমাইলকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) দেখতে গিয়েছিলেন। যখন তিনি পৌঁছেছিলেন, তিনি ইসমাইলকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) জমজমের পাশে একটি গাছের নিচে বসে থাকতে দেখেছিলেন, তার তীর ধারালো করছিলেন।<br /><br />
                        তার পিতাকে চিনতে পেরে, ইসমাইল (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তৎক্ষণাৎ দাঁড়িয়েছিলেন এবং তাকে উষ্ণ অভিবাদন জানিয়েছিলেন। ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তারপর তার পুত্রকে একটি মহান কাজ সম্পর্কে জানিয়েছিলেন যা আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাকে দিয়েছিলেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/ismail/Ibrahim Dream & Ismail talk 2.png" 
                                alt="ইব্রাহিম স্বপ্ন ও ইসমাইল কথা ২" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বলেছিলেন:</strong><br />
                                        <em>"হে ইসমাইল (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>)! আল্লাহ আমাকে একটি আদেশ দিয়েছেন।"</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>তার পুত্র উত্তর দিয়েছিলেন:</strong><br />
                                        <em>"যা আপনার রব আপনাকে আদেশ করেছেন তা করুন।"</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <em>"তুমি কি আমাকে সাহায্য করবে?"</em><br />
                                        <strong>ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) জিজ্ঞাসা করেছিলেন।</strong><br /><br />
                                        <em>"আমি আপনাকে সাহায্য করব,"</em><br />
                                        <strong>ইসমাইল নিশ্চিত করেছিলেন।</strong>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বলেছিলেন যখন তিনি চারপাশের জমির চেয়ে উঁচু একটি টিলার দিকে ইশারা করছিলেন:</strong><br />
                                        <em>"আল্লাহ আমাকে এখানে একটি ঘর নির্মাণ করতে আদেশ দিয়েছেন।"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/ismail/Ibrahim Dream & Ismail build Kaaba.png" 
                                alt="ইব্রাহিম স্বপ্ন ও ইসমাইল কাবা নির্মাণ" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong className="text-amber-600 dark:text-amber-500">নবী (<span className="font-arabic">صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ</span>) যোগ করেছিলেন,</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <em>"তারপর তারা ঘরের (অর্থাৎ কাবা) ভিত্তি উত্থাপন করেছিল। ইসমাইল পাথর নিয়ে আসতেন, এবং ইব্রাহিম নির্মাণ করছিলেন, এবং যখন দেয়াল উঁচু হয়ে গিয়েছিল, ইসমাইল এই পাথরটি নিয়ে এসেছিলেন এবং ইব্রাহিমের জন্য রেখেছিলেন, যিনি এর উপর দাঁড়িয়ে নির্মাণ চালিয়ে যাচ্ছিলেন; যখন ইসমাইল তাকে পাথর দিচ্ছিলেন, তারা উভয়ই বলছিলেন:"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                رَبَّنَا تَقَبَّلۡ مِنَّآۖ إِنَّكَ أَنتَ ٱلسَّمِيعُ ٱلۡعَلِيمُ
                            </p>
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>রোমানীকরণ:</strong> Rabbanaa taqabbal minnaa innaka Antas Samee'ul Aleem
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>বাংলা অনুবাদ:</strong> "হে আমাদের রব! আমাদের কাছ থেকে এই সেবা গ্রহণ করুন। আপনি নিশ্চয়ই সর্বশ্রোতা, সর্বজ্ঞ।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-বাকারা, আয়াত ১২৭)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/ismail/Maqam Ibrahim.png" 
                                alt="মাকাম ইব্রাহিম" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                নবী ইব্রাহিমের পদচিহ্ন সহ বর্গাকার পাথরটি বিখ্যাতভাবে <strong><span className="text-amber-600 dark:text-amber-500">মাকাম ইব্রাহিম</span> "ইব্রাহিমের স্টেশন"</strong> নামে পরিচিত, এবং এটি কাবার কাছে একটি ঘেরের মধ্যে সংরক্ষিত রয়েছে।
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
