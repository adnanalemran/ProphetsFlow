import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function HudStory() {
    return (
        <div className="mb-12 mt-6 md:mt-10">
            {/* Header Image */}
            <div className="w-full mb-8">
                <img 
                    src="/images/prophets/hud.png" 
                    alt="হুদ (আঃ)-এর গল্প" 
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-10">
                নবী হুদ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)-এর গল্প
            </h1>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6 md:space-y-8">
                
                {/* Section: Tribe of Ad */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4">
                        <span className="text-amber-600 dark:text-amber-500">আদ গোত্র</span>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                ইতিহাস জুড়ে, <strong>আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) হাজার হাজার নবীকে মানবজাতিকে সঠিক পথের দিকে পরিচালিত করার কাজে নিযুক্ত করেছেন</strong>। একই সাথে, তিনি স্পষ্ট সতর্কতা পাওয়া সত্ত্বেও তাঁর উপাসনা করতে অস্বীকার এবং অবাধ্যতার জন্য জাতিগুলিকে দায়ী করেছেন। এটি আদ গোত্রের গল্প, নবী নূহের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) উত্তরসূরি, যাকে আরবের প্রাচীন গোত্রগুলির মধ্যে একটি বলে বিবেচনা করা হয়।
                            </p>

                            <p className="mb-4">
                                কুরআনের <strong>সূরা আল-আহকাফ</strong>-এ উল্লিখিত আদ গোত্র, আরব উপদ্বীপের দক্ষিণ অংশের বালুকাময় পাহাড়ে বাস করত, যা আধুনিক ইয়েমেন এবং ওমানের মধ্যবর্তী একটি অঞ্চল।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophets/hud.png" 
                                alt="নবী হুদের গল্প" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>কুরআন সূরা আল-ফজর আয়াত ৬-৮-এও উল্লেখ করেছে,</strong><br />
                                <em>"তুমি কি ভেবে দেখনি তোমার রব কীভাবে আদের সাথে আচরণ করেছিলেন — [যাদের ছিল] ইরাম — যাদের ছিল উচ্চ স্তম্ভ, যাদের মতো কখনও জমিতে সৃষ্টি করা হয়নি?"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>মাওদুদীর তাফসীর থেকে,</strong><br />
                                <em>"প্রাচীন আদকে আদ-ইরাম বলা হয় এই কারণে যে তারা সেই শামীয় জাতির শাখার অন্তর্ভুক্ত ছিল যা ইরাম, শেমের পুত্র, নূহের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) পুত্র থেকে এসেছে।"</em>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: Description of Ad */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4">
                        আদের বর্ণনা:
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophets/hud.png" 
                                alt="আদ গোত্রের লোকেরা" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                আদ গোত্রের লোকেরা তাদের উচ্চ কাঠামো এবং শারীরিক সুস্থতার জন্য বিখ্যাত ছিল। তাদের উচ্চ নির্মাণ তৈরি করার ঝোঁক ছিল যা প্রতিবেশী গোত্র এবং জাতিগুলিকে ছাড়িয়ে গিয়েছিল, যা অহংকার এবং অজ্ঞতার একটি আভা নিয়ে এসেছিল। এবং যে কয়েকজন গোত্রের উপর শাসন করত তারা অন্যায় ছিল, তাদের ক্ষমতা অনিয়ন্ত্রিত এবং প্রশ্নহীন ছিল।
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        আদ সম্পূর্ণরূপে আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) অস্তিত্ব সম্পর্কে অজ্ঞ ছিল না। তারা আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) এর পাশাপাশি আরও কয়েকটি দেবতার উপাসনা করত যাদের তারা দেবতা বলে মনে করত। তারা এই দেবতাদের প্রতিনিধিত্বকারী মূর্তি তৈরি করেছিল এবং আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) এর পাশাপাশি তাদের উপাসনা করত। <strong>ফলস্বরূপ, আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাদের একেশ্বরবাদের দিকে পরিচালিত করার জন্য একজন নবী পাঠানোর সিদ্ধান্ত নিয়েছিলেন।</strong>
                    </p>

                    <p className="mb-4">
                        এই গুরুত্বপূর্ণ কাজের জন্য নিযুক্ত নবী ছিলেন নবী হুদ, যিনি একই গোত্রের অন্তর্ভুক্ত ছিলেন। আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কুরআনে বলেছেন: "এবং আদের কাছে [আমরা পাঠিয়েছিলাম] তাদের ভাই হুদকে। তিনি বলেছিলেন, 'হে আমার লোকেরা, আল্লাহর উপাসনা কর; তাঁর ছাড়া তোমাদের অন্য কোনও দেবতা নেই। তাহলে কি তোমরা তাঁকে ভয় করবে না?'"<br />
                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আ'রাফ, আয়াত ৬৫)</span>
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                <strong>নবী হুদ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) তাঁর লোকদের আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) একমাত্র উপাসনা করতে আহ্বান করেছিলেন</strong> এবং উপাসনার অন্যান্য সমস্ত রূপ পরিত্যাগ করতে বলেছিলেন। তিনি তাঁর লোকদের তাদের নিজস্ব হাত দিয়ে তৈরি দেবতাদের উপাসনা করার যুক্তিসঙ্গততা নিয়ে প্রশ্ন করতে অনুরোধ করেছিলেন। নবী হুদ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) তাদের মনে করিয়ে দিয়েছিলেন যে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰলَىٰ</span>) যিনি তাদের জীবন এবং মৃত্যু দিয়েছিলেন, এবং আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) একাই যিনি তাদের দক্ষতা দিয়ে আশীর্বাদ করেছিলেন, এবং তাই একমাত্র যিনি তাদের অবিভক্ত এবং আন্তরিক উপাসনার যোগ্য ছিলেন।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophets/hud.png" 
                                alt="আল্লাহর দিকে আহ্বান" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-l-4 border-emerald-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>"এবং আদের কাছে [আমরা পাঠিয়েছিলাম] তাদের ভাই হুদকে। তিনি বলেছিলেন:</strong><br />
                                <em>"হে আমার লোকেরা, আল্লাহর উপাসনা কর; তাঁর ছাড়া তোমাদের অন্য কোনও দেবতা নেই। তোমরা কেবল [মিথ্যার] উদ্ভাবক। হে আমার লোকেরা, আমি এর জন্য তোমাদের কাছে কোনও পুরস্কার চাই না। আমার পুরস্কার কেবল তাঁর কাছ থেকে যিনি আমাকে সৃষ্টি করেছেন। তাহলে কি তোমরা যুক্তি করবে না?"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা হুদ, আয়াত ৫০-৫১)</span>
                            </p>

                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>গোত্র প্রধানরা, তাঁকে বিশ্বাস করতে অস্বীকার করে, নবী হুদকে উপহাস করেছিল, তাঁকে বোকা এবং মিথ্যাবাদী হিসেবে চিহ্নিত করেছিল।</strong><br />
                                <em>"তাঁর লোকদের মধ্যে যারা অবিশ্বাস করেছিল তাদের বিশিষ্ট ব্যক্তিরা বলেছিল, 'নিশ্চয়ই আমরা আপনাকে বোকামিতে দেখছি, এবং নিশ্চয়ই আমরা মনে করি আপনি মিথ্যাবাদীদের মধ্যে একজন।'"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আ'রাফ, আয়াত ৬৬)</span>
                            </p>

                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>নবী হুদ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) উত্তর দিয়েছিলেন,</strong><br />
                                <em>"হে আমার লোকেরা, আমার মধ্যে কোনও বোকামি নেই, কিন্তু আমি বিশ্বজগতের রবের কাছ থেকে একজন রাসূল। আমি তোমাদের কাছে আমার রবের বার্তা পৌঁছে দিই, এবং আমি তোমাদের কাছে একজন বিশ্বস্ত পরামর্শদাতা। তাহলে কি তোমরা আশ্চর্য কর যে তোমাদের রবের কাছ থেকে তোমাদের মধ্যে একজন মানুষ দ্বারা একটি স্মরণিকা এসেছে, যাতে তিনি তোমাদের সতর্ক করতে পারেন? এবং মনে কর যখন তিনি তোমাদের নূহের লোকদের পরে উত্তরসূরি করেছিলেন এবং তোমাদের ব্যাপকভাবে উচ্চতায় বৃদ্ধি করেছিলেন। তাই আল্লাহর অনুগ্রহ মনে কর যাতে তোমরা সফল হতে পার।'"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আ'রাফ, আয়াত ৬৭-৬৯)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: Day of Judgement */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4">
                        <span className="text-amber-600 dark:text-amber-500">নবী হুদ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>)</span> দ্বারা ব্যাখ্যা করা বিচারের দিন:
                    </h2>

                    <p className="mb-4">
                        <span className="text-amber-600 dark:text-amber-500 font-semibold">তাঁর বার্তার প্রতি লোকদের প্রতিরোধ সত্ত্বেও, নবী হুদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ধৈর্যশীল এবং দৃঢ়প্রতিজ্ঞ ছিলেন।</span> তিনি তাঁর লোকদের তাদের পথের ত্রুটি বুঝতে এবং তাদের আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) একমাত্র উপাসনায় নিজেদের নিবেদিত করতে উৎসাহিত করতে অব্যাহত রেখেছিলেন। তিনি তাদের হিসাব-নিকাশের দিন সম্পর্কে সতর্ক করেছিলেন, যেখানে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) প্রতিটি আত্মাকে পুনরুত্থিত করবেন এবং তাদের পৃথিবীতে তাদের কাজ এবং বিশ্বাসের জন্য তাদের দায়ী করবেন।
                    </p>

                    <p className="mb-4">
                        যাইহোক, বহুঈশ্বরবাদীরা শুনতে ইচ্ছুক ছিল না, তাদের বস্তুবাদী সাধনা দ্বারা গ্রাস হয়ে এবং তাদের অজ্ঞতা দ্বারা অন্ধ হয়ে।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong className="text-amber-600 dark:text-amber-500">তারা তাদের ভাইকে উপহাস করে জিজ্ঞাসা করেছিল:</strong><br />
                                <em>"হে হুদ! তুমি কি বল যে আমরা মরে যাওয়ার পর এবং ধুলোতে পরিণত হওয়ার পর, আমরা পুনরুত্থিত হব?"</em>
                            </p>

                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong className="text-amber-600 dark:text-amber-500">নবী হুদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) উত্তর দিয়েছিলেন:</strong><br />
                                <em>"হ্যাঁ, তোমরা বিচারের দিনে ফিরে আসবে, এবং তোমাদের প্রত্যেককে জিজ্ঞাসা করা হবে যে তুমি কী করেছ।"</em>
                            </p>

                            <p className="text-sm md:text-base leading-relaxed">
                                <strong className="text-amber-600 dark:text-amber-500">তারা হেসে ফিসফিস করে বলেছিল,</strong><br />
                                <em>"কি অদ্ভুত হুদের দাবি!"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        হুদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) শেষ দিন সম্পর্কে কয়েকটি প্রশ্ন করা হয়েছিল। তিনি ধৈর্যশীলভাবে তাঁর লোকদের উত্তর দিয়েছিলেন যখন ব্যাখ্যা করেছিলেন যে বিচারের দিনে বিশ্বাস আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) বিশ্বাসের জন্য গুরুত্বপূর্ণ ছিল। তিনি আরও তাদের আশ্বস্ত করেছিলেন যে যদিও এই দিনে তাদের সমস্ত কাজের হিসাব নেওয়া হবে, আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সবচেয়ে ক্ষমাশীল ছিলেন, যারা আন্তরিকভাবে তওবা করেছিল তাদের ক্ষমা প্রদান করেছিলেন।
                    </p>

                    <p className="mb-4">
                        তারা নবী হুদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) যা বলেছিলেন তা সব শুনেছিল, কিন্তু তবুও, আদ দৃঢ়ভাবে সত্য গ্রহণ করতে অস্বীকার করেছিল। তারা দৃঢ়ভাবে বিশ্বাস করেছিল যে মৃত্যুর পর কোনও জীবন নেই এবং তারা নিশ্চিত ছিল যে মৃত্যুর পর, মানুষের অবশিষ্টাংশ ক্ষয় হয়ে যাবে এবং মাটির সাথে এক হয়ে যাবে।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong className="text-amber-600 dark:text-amber-500">তারা বলেছিল,</strong><br />
                                <em>"এবং তাঁর লোকদের মধ্যে যারা অবিশ্বাস করেছিল এবং পরকালের সাক্ষাতকে অস্বীকার করেছিল তাদের বিশিষ্ট ব্যক্তিরা, যখন আমরা তাদের পার্থিব জীবনে বিলাসিতা দিয়েছিলাম, বলেছিল, 'এটি তোমাদের মতো একজন মানুষ ছাড়া আর কিছুই নয়। তিনি যা থেকে খান তা থেকে সে খায় এবং যা থেকে পান করেন তা থেকে সে পান করে। এবং যদি তোমরা তোমাদের মতো একজন মানুষের আনুগত্য কর, তাহলে তোমরা ক্ষতিগ্রস্ত হবে। সে কি তোমাদের প্রতিশ্রুতি দেয় যে যখন তোমরা মরে যাবে এবং ধুলো এবং হাড় হয়ে যাবে তখন তোমরা [আবার] আনা হবে? কত দূরে, কত দূরে, যা তোমাদের প্রতিশ্রুতি দেওয়া হয়েছে। জীবন কেবল আমাদের পার্থিব জীবন — আমরা মরি এবং বাঁচি, কিন্তু আমরা পুনরুত্থিত হব না। তিনি কেবল একজন মানুষ যিনি আল্লাহ সম্পর্কে একটি মিথ্যা উদ্ভাবন করেছেন, এবং আমরা তাঁকে বিশ্বাস করব না।'"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-মুমিনুন, আয়াত ৩৩-৩৮)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                <strong>অতএব, যেহেতু তাদের মধ্যে অবিশ্বাস অব্যাহত ছিল, <span className="text-amber-600 dark:text-amber-500">হুদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) অবিশ্বাসীদের কাছে তাঁর প্রচার বন্ধ করেছিলেন এবং আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে সাহায্য চেয়ে দোয়া করেছিলেন।</span></strong> <em>"হে আমার রব! আমাকে সাহায্য কর, কারণ তারা আমাকে অস্বীকার করেছে,"</em> <strong>তিনি ডেকেছিলেন।</strong><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-মু'মিনুন, আয়াত ৩৯)</span><br /><br />
                                <strong>এবং আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) উত্তর দিয়েছিলেন:</strong><br />
                                <em>"শীঘ্রই তারা সত্যিই অনুশোচনা করবে।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-মুমিনুন, আয়াত ৪০)</span>
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophets/hud.png" 
                                alt="আল্লাহর কাছে দোয়া করছেন" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: The Destruction of Ad */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4">
                        আদের ধ্বংস:
                    </h2>

                    <p className="mb-4">
                        <strong>নবী হুদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) অবিশ্বাসীদের একটি ভয়াবহ শাস্তির সতর্ক করেছিলেন।</strong> তিনি জানতেন যে সর্বশক্তিমান তাঁকে এবং কয়েকজন বিশ্বাসীকে রক্ষা করবেন। নবী হুদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) নিশ্চিত ছিলেন যে যদি আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) অবিশ্বাসীদের ধ্বংস করার উদ্দেশ্যে থাকেন, তাহলে কোনও মুক্তি থাকবে না। <br /><br />
                        <strong>আদ ভয়হীন, অপ্রভাবিত ছিল</strong>, এবং তাদের জন্য অপেক্ষা করা দুর্দশা সম্পর্কে অজ্ঞ ছিল। তারা নবী হুদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) কে চ্যালেঞ্জ করতে অব্যাহত রেখেছিল, নিশ্চিত যে তাদের লক্ষ্য এবং উচ্চ টাওয়ারগুলি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) শাস্তির বিরুদ্ধে তাদের রক্ষা করবে। <br /><br />
                        আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সতর্কতার সত্যতা অনুযায়ী, একটি ধ্বংসাত্মক খরা জমি জুড়ে ছড়িয়ে পড়েছিল। আকাশ পরিষ্কার এবং মেঘহীন রয়ে গিয়েছিল যখন সূর্য মরুভূমি এবং এর মধ্যে যা কিছু বাস করত তা পুড়িয়ে দিয়েছিল।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong className="text-amber-600 dark:text-amber-500">নবী হুদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আবার তাঁর লোকদের সাথে কথা বলেছিলেন, বলেছিলেন,</strong><br />
                                <em>"হে আমার লোকেরা, তোমাদের রবের কাছে ক্ষমা চাও এবং তারপর তাঁর কাছে তওবা কর। তিনি তোমাদের উপর আকাশ থেকে [বৃষ্টি] বর্ষণ করবেন এবং তোমাদের শক্তিতে [যোগ] তোমাদের শক্তি বৃদ্ধি করবেন। এবং [অপরাধী হয়ে] মুখ ফিরিয়ে নিও না।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-হুদ, আয়াত ৫২)</span>
                            </p>

                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>যাইহোক, তারা তর্ক করেছিল,</strong><br />
                                <em>"হে হুদ, তুমি আমাদের কাছে স্পষ্ট প্রমাণ আননি, এবং আমরা তোমার কথায় আমাদের দেবতাদের ছেড়ে যাওয়ার মতো নই। এবং আমরা তোমার উপর বিশ্বাসীও নই। আমরা কেবল বলি যে আমাদের কিছু দেবতা তোমাকে মন্দ দিয়ে আচ্ছন্ন করেছে।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-হুদ, আয়াত ৫৩-৫৪)</span>
                            </p>

                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong className="text-amber-600 dark:text-amber-500">নবী হুদ তারপর উত্তর দিয়েছিলেন:</strong><br />
                                <em>"নিশ্চয়ই আমি আল্লাহকে আমার সাক্ষী হিসেবে নিই, এবং তোমরাও আমার সাক্ষী হও যে আমি আল্লাহর সাথে তোমাদের যুক্ত করার সাথে কোনও সম্পর্ক নেই তাঁর দেবত্বে তাঁর ছাড়া অন্য কাউকে। তাই তোমরা সবাই আমার বিরুদ্ধে ষড়যন্ত্র কর এবং আমাকে কোনও অবকাশ দিও না। আমি আল্লাহর উপর আস্থা রেখেছি, যিনি আমার রব এবং তোমাদের রব। কোনও চলমান প্রাণী নেই যা তিনি তার কপাল ধরে ধরে রাখেন না। নিশ্চয়ই, আমার রব সঠিক পথে রয়েছেন। যদি তোমরা, তাহলে, (সত্য থেকে) মুখ ফিরিয়ে নাও, জান যে আমি তোমাদের কাছে যে বার্তা দিয়ে পাঠানো হয়েছিল তা পৌঁছে দিয়েছি। এখন আমার রব তোমাদের স্থলে অন্য একটি লোককে স্থাপন করবেন এবং তোমরা কোনওভাবেই তাঁকে ক্ষতি করতে পারবে না। নিশ্চয়ই, আমার রব সবকিছুর উপর নজর রাখেন।'"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-হুদ, আয়াত ৫৪-৫৭)</span>
                            </p>

                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>তবুও, তাদের হৃদয় অহংকার দ্বারা আবৃত ছিল যখন তারা বলেছিল,</strong><br />
                                <em>"...তাহলে আমাদের কাছে যা তুমি আমাদের প্রতিশ্রুতি দিয়েছ তা নিয়ে এস, যদি তুমি সত্যবাদীদের মধ্যে হও।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আহকাফ, আয়াত ২২)</span>
                            </p>

                            <p className="text-sm md:text-base leading-relaxed">
                                <strong className="text-amber-600 dark:text-amber-500">নবী হুদ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) উত্তর দিয়েছিলেন:</strong><br />
                                <em>"জ্ঞান [এর সময়ের] কেবল আল্লাহর কাছে রয়েছে, এবং আমি তোমাদের কাছে যা দিয়ে পাঠানো হয়েছিল তা পৌঁছে দিই; কিন্তু আমি তোমাদের [একটি] অজ্ঞ আচরণকারী লোক দেখছি।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আহকাফ, আয়াত ২৩)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <strong><span className="text-amber-600 dark:text-amber-500">খুব শীঘ্রই, গাছগুলি শুকিয়ে যেতে শুরু করেছিল, হলুদ হয়ে যাচ্ছিল</span> এবং প্রজ্বলিত সূর্যের নীচে মারা যাচ্ছিল।</strong>
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Section: The Punishment */}
                <section className="my-8 md:my-12">
                    <div className="w-full my-6">
                        <img 
                            src="/images/prophets/hud.png" 
                            alt="শাস্তির ছবি" 
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-l-4 border-red-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>ঘন মেঘ উপত্যকার কাছে আসার সাথে সাথে, আদ আনন্দিত হয়েছিল:</strong><br />
                                <em>"এটি একটি মেঘ যা আমাদের বৃষ্টি আনছে।"</em>
                            </p>

                            <p className="text-sm md:text-base leading-relaxed">
                                <strong className="text-amber-600 dark:text-amber-500">কিন্তু নবী হুদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) উত্তর দিয়েছিলেন:</strong><br />
                                <em>"না, এটি যা তুমি তাড়াহুড়ো করতে চেয়েছিলে: একটি প্রচণ্ড বাতাস যা একটি বেদনাদায়ক শাস্তি বহন করছে।"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        আবহাওয়া দ্রুত প্রজ্বলিত তাপ থেকে একটি কষ্টদায়ক ঠান্ডায় পরিবর্তিত হয়েছিল, এর সাথে একটি প্রচণ্ড ঝড় নিয়ে এসেছিল যা গাছ এবং এর পথে সবকিছু উপড়ে ফেলেছিল। উচ্চ কাঠামো, একসময় আদের জন্য গর্বের উৎস, অদম্য বাতাসের বিরুদ্ধে শক্তিহীন ছিল। এটি তাদের মাংস ছিঁড়ে ফেলেছিল এবং অবিশ্বাসীদের ধ্বংস করেছিল, তাদের অস্তিত্বের কোনও চিহ্ন রেখে যায়নি। ঝড় আট দিন এবং সাত রাত ধরে তীব্র ছিল, আদকে সম্পূর্ণভাবে মুছে ফেলেছিল। <br /><br />
                        কেবল নবী হুদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এবং তাঁর অনুসারীরা পরীক্ষা থেকে রক্ষা পেয়েছিলেন। তারা হাদরামাউতে স্থানান্তরিত হয়েছিল, যেখানে তারা শান্তিপূর্ণভাবে আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) উপাসনা করে বাস করত।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-l-4 border-emerald-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কুরআনে বর্ণনা করেছেন:</strong><br />
                                <em>"এবং আদের ক্ষেত্রে, তারা একটি চিৎকারকারী, প্রচণ্ড বাতাস দ্বারা ধ্বংস হয়েছিল যা আল্লাহ তাদের উপর সাত রাত এবং আট দিন ধারাবাহিকভাবে আরোপ করেছিলেন, তাই তুমি সেখানে লোকদের পড়ে থাকতে দেখবে যেন তারা খেজুর গাছের ফাঁপা কাণ্ড।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-হাক্কাহ, আয়াত ৬-৭)</span>
                            </p>

                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) আরও বলেছেন:</strong><br />
                                <em>"এর রবের আদেশে সবকিছু ধ্বংস করছে। এবং তারা এমন হয়ে গিয়েছিল যে তাদের বাসস্থান ছাড়া কিছুই দেখা যায়নি। এইভাবে আমরা অপরাধী লোকদের প্রতিদান দিই। এবং আমরা অবশ্যই তাদের এমনভাবে প্রতিষ্ঠিত করেছিলাম যেমন আমরা তোমাদের প্রতিষ্ঠিত করিনি, এবং আমরা তাদের জন্য শ্রবণ এবং দৃষ্টি এবং হৃদয় তৈরি করেছিলাম। কিন্তু তাদের শ্রবণ এবং দৃষ্টি এবং হৃদয় তাদের কোনও কিছু থেকে উপকার করেনি যখন তারা [অবিরাম] আল্লাহর নিদর্শন প্রত্যাখ্যান করছিল, এবং তারা যা উপহাস করত তা দ্বারা আবৃত হয়েছিল। এবং আমরা ইতিমধ্যে তোমাদের চারপাশের [সেই] শহরগুলিকে ধ্বংস করেছি, এবং আমরা নিদর্শন [বা আয়াত] বৈচিত্র্যময় করেছি যাতে তারা [অবিশ্বাস থেকে] ফিরে আসতে পারে। তাহলে কেন যাদের তারা আল্লাহ ছাড়া দেবতা হিসেবে নিয়েছিল তারা তাদের সাহায্য করেনি? কিন্তু তারা তাদের থেকে বিচ্যুত হয়েছিল। এবং এটি ছিল তাদের মিথ্যা এবং যা তারা উদ্ভাবন করছিল।'"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আহকাফ, আয়াত ২৫-২৮)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

            </div>
        </div>
    );
}
