import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function DawudStory() {
    return (
        <div className="mb-12 mt-6 md:mt-10">
            {/* Header Image */}
            <div className="w-full mb-8">
                <img 
                    src="/images/prophet-stories/dawud/the-story-of-prophet-dawud-as.png" 
                    alt="দাউদ (আঃ)-এর গল্প" 
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-10">
                <span className="text-amber-600 dark:text-amber-500">নবী দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর গল্প
            </h1>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6 md:space-y-8">
                
                {/* Introduction */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/dawud/Prophet Dawud Calligraphy.png" 
                                alt="নবী দাউদের ক্যালিগ্রাফি" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="mb-4">
                                নবী দাউদের (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) গল্প তিনটি গুরুত্বপূর্ণ ব্যক্তির চারপাশে ঘোরে:<br /><br />
                                <strong>১. নবী দাউদ, যাকে ইহুদি-খ্রিস্টান ঐতিহ্যে ডেভিড হিসাবে পরিচিত।<br />
                                ২. রাজা তালুত, বা সৌল, যিনি ইসরায়েলীদের নেতা ছিলেন।<br />
                                ৩. তারপর ছিল জালুত, যাকে গোলিয়াথ হিসাবে পরিচিত।</strong>
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        দাউদ এবং জালুতের গল্প প্রায়ই ডেভিড এবং গোলিয়াথের গল্প হিসাবে আরও পরিচিতভাবে স্বীকৃত।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* King Talut and Jalut Faceoff */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        রাজা তালুত এবং জালুত <span className="text-amber-600 dark:text-amber-500">মুখোমুখি</span>
                    </h2>

                    <p className="mb-4">
                        রাজা তালুত ইসরায়েলি সেনাবাহিনীকে নেতৃত্ব দিয়েছিলেন, ভয়াবহ জালুত এবং তার বাহিনীর বিরুদ্ধে যুদ্ধের জন্য প্রস্তুত। আগে জালুতের কাছে মারাত্মক ক্ষতির সম্মুখীন হওয়ার পর, এই আসন্ন যুদ্ধ ইসরায়েলের ভাগ্য গঠনে একটি গুরুত্বপূর্ণ মুহূর্ত হিসাবে দাঁড়িয়েছিল।
                    </p>

                    <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/dawud/king-talut-command.png" 
                                alt="রাজা তালুত" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <em>"যুদ্ধক্ষেত্রের দিকে অগ্রসর হওয়ার সময়, তালুত আন্তরিকভাবে তার লোকদের সতর্ক করেছিলেন:<br /> 'আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) একটি নদী দিয়ে তোমাদের পরীক্ষা করবেন। যে ব্যক্তি এ থেকে পেট ভরে পান করবে সে আমার সাথে নেই, এবং যে এটি স্বাদ গ্রহণ করবে না—কেবল তার হাতের খালি অংশ থেকে এক চুমুক—সে অবশ্যই আমার সাথে আছে।'"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-বাকারা আয়াত ২৪৯)</span>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/dawud/army-drink.png" 
                                alt="লোকেরা পানি পান করছে" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                তাদের রাজার স্পষ্ট সতর্কতা সত্ত্বেও, তাদের মধ্যে বেশিরভাগই পৌঁছানোর সময় নদী থেকে অবাধে পান করেছিল।
                            </p>
                            <p className="mb-4">
                                ফলস্বরূপ, কেবলমাত্র যে কয়েকজন বিশ্বস্ত ছিল তাদের নদী পার হতে এবং যুদ্ধে অংশগ্রহণ করতে দেওয়া হয়েছিল।
                            </p>
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তারা চিন্তিত হতে শুরু করেছিল:</strong><br />
                                <em>"এখন আমরা জালুত এবং তার যোদ্ধাদের সাথে মিল নেই।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-বাকারা আয়াত ২৪৯)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                কিন্তু যারা বিশ্বাস করেছিল যে তারা আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) এর সাথে দেখা করবে তারা যুক্তি দিয়েছিল:<br />
                                <em>"কতবার একটি ছোট বাহিনী আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ইচ্ছায় একটি শক্তিশালী সেনাবাহিনীকে পরাজিত করেছে! এবং আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সর্বদা ধৈর্যশীলদের সাথে আছেন।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-বাকারা আয়াত ২৪৯)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong><span className="text-amber-600 dark:text-amber-500">সেনাবাহিনী তারপর আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে প্রার্থনা করেছিল,</span> তাদের শত্রুকে পরাজিত করার জন্য তার সাহায্য চেয়ে। তারা একটি দুআ করেছিল বলছিল,</strong><br />
                                <em>"আমাদের রব! আমাদের ধৈর্য বর্ষণ করুন, আমাদের পদক্ষেপ দৃঢ় করুন, এবং আমাদের অবিশ্বাসী লোকদের উপর বিজয় দিন।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-বাকারা আয়াত ২৫০)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        দুটি সেনাদল অবশেষে যুদ্ধক্ষেত্রে একে অপরের মুখোমুখি হয়েছিল। ইসরায়েলীরা জালুত এবং তার মহান সেনাবাহিনীর তুলনায় ক্ষুদ্র মনে হচ্ছিল, কিন্তু তারা তাদের অবস্থান ধরে রেখেছিল।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/dawud/Jalut.png" 
                                alt="জালুত" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                <strong><span className="text-amber-600 dark:text-amber-500">জালুত</span>, যুদ্ধক্ষেত্রে একজন ভয়াবহ এবং উচ্চতর উপস্থিতি, তার শক্তি এবং যোদ্ধা হিসাবে দক্ষতার সাথে ভয়ের একটি আভা ছড়িয়েছিল।</strong><br /><br /> তিনি ভালভাবে জানতেন যে কেউ যুদ্ধক্ষেত্রে তার পথ অতিক্রম করার সাহস করেনি, অবশ্যই তালুতের মতো করুণ সেনাবাহিনী নয়।<br /><br /> তিনি আত্মবিশ্বাসী ছিলেন যে তালুতের সেনাবাহিনীর সাথে যুদ্ধ করা একটি সহজ বিজয় হবে। দর্শনীয়তা বাড়ানোর জন্য, জালুত যেকোনো সৈনিককে তার বিরুদ্ধে এক-এক যুদ্ধের জন্য চ্যালেঞ্জ করেছিল।
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        ইসরায়েলীরা ভীত ছিল। এই চ্যালেঞ্জের জন্য স্বেচ্ছাসেবী হওয়ার চিন্তা মৃত্যুর ইচ্ছার সমতুল্য মনে হচ্ছিল।
                    </p>

                    <p className="mb-4">
                        রাজা তালুত ক্রমবর্ধমান উদ্বিগ্ন হয়ে উঠেছিলেন কারণ তার লোকদের কেউ এগিয়ে আসেনি। হতাশার দ্বারা চালিত হয়ে, তিনি তার প্রিয় কন্যা মিখাল (মিকেল) এর হাত বিবাহের জন্য প্রস্তাব করেছিলেন যে কোনো সৈনিক জালুতের মুখোমুখি হতে ইচ্ছুক। কিছুই লোকদের এগিয়ে আসতে প্রভাবিত করেনি, এমনকি ধন-সম্পদ এবং রাজকীয় মর্যাদা পূর্ণ জীবনের সম্ভাবনাও নয়।
                    </p>

                    <p className="mb-4">
                        <strong>তারপর, সবাইকে অবাক করে, একটি তরুণ ছেলে, যিনি দৃশ্যত আগে অনেক যুদ্ধে অংশগ্রহণ করেননি, যুদ্ধের জন্য এগিয়ে এসেছিলেন।</strong> শত্রু ব্যাটালিয়নে হাসি প্রতিধ্বনিত হয়েছিল যখন তালুতের সৈন্যরা অবিশ্বাসে তাদের মাথা নাড়িয়েছিল।
                    </p>

                    <p className="mb-4">
                        এই সাহসী যুবক ছিলেন অন্য কেউ নন দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>), বেথলেহেম শহর থেকে।
                    </p>

                    <img 
                        src="/images/prophet-stories/dawud/Talut & Dawud Converstion.png" 
                        alt="তালুত এবং দাউদের কথোপকথন" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        তালুত তরুণের সাহসে মুগ্ধ হয়েছিলেন কিন্তু ছেলেটিকে তার মৃত্যুর দিকে পাঠাতে চাননি।<br /><br />
                        <em>"আমি তোমার সাহসের প্রশংসা করি, কিন্তু তুমি সেই শক্তিশালী যোদ্ধার সাথে মিল নেই। অভিজ্ঞ যোদ্ধারা আসুক,"</em> তিনি দাউদকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বলেছিলেন।
                    </p>

                    <p className="mb-4">
                        নবী দাউদ তার সংকল্পে দৃঢ় ছিলেন। তিনি ইতিমধ্যে দৈত্যের সাথে যুদ্ধ করার সিদ্ধান্ত নিয়েছিলেন। <strong>অবিচলিত গর্বের সাথে, তিনি তার রাজাকে বলেছিলেন যে কীভাবে তিনি একটি সিংহকে পরাজিত করেছিলেন যা আগে তার বাবার ভেড়াকে হুমকি দিয়েছিল এবং কীভাবে তিনি একটি আলাদা উপলক্ষে একটি ভালুককে পরাজিত করেছিলেন।</strong>
                    </p>

                    <p className="mb-4">
                        দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আরও অনুরোধ করেছিলেন তার রাজাকে তার চেহারা অনুযায়ী তাকে বিচার না করতে এবং তাকে আশ্বস্ত করেছিলেন যে তিনি কোনো মানুষ বা বন্য প্রাণীকে ভয় করেন না।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>দাউদের সংকল্পে স্পর্শিত হয়ে, রাজা তালুত উত্তর দিয়েছিলেন:</strong><br />
                                <em>"আমার সাহসী সৈন্য, যদি তুমি ইচ্ছুক, তাহলে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তোমাকে রক্ষা করুন এবং তোমাকে শক্তি দিন।"</em>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Prophet Dawud Battles Jalut */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">নবী দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span> জালুতের সাথে যুদ্ধ করে
                    </h2>

                    <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/dawud/armor.png" 
                                alt="ঢাল এবং তরোয়াল" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="mb-4">
                                রাজা নিজেই যোদ্ধাকে যুদ্ধের জন্য প্রস্তুত করার দায়িত্ব নিয়েছিলেন। তিনি দাউদকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) যুদ্ধের বর্ম পরিয়েছিলেন এবং তার হাতে একটি তরোয়াল রেখেছিলেন।
                            </p>
                            <p className="mb-4">
                                কিন্তু দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার নিজের উপায়ে কাজ করতে অভ্যস্ত ছিলেন। তিনি অনুভব করেছিলেন যে যুদ্ধের বর্ম তার চলাচলকে সীমাবদ্ধ করছে, তাই তিনি এটি সরিয়ে ফেলেছিলেন, তার তরোয়ালের সাথে।
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/dawud/sling shot.png" 
                                alt="স্লিং শট" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                <strong>কেবলমাত্র <span className="text-amber-600 dark:text-amber-500">কয়েকটি নুড়ি একটি চামড়ার থলিতে</span> কাঁধে ঝুলানো, <span className="text-amber-600 dark:text-amber-500">একটি স্লিং</span>, এবং <span className="text-amber-600 dark:text-amber-500">একটি কাঠের লাঠি</span> দিয়ে, দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) দৈত্যের মুখোমুখি হওয়ার জন্য প্রস্তুত ছিলেন।</strong>
                            </p>
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তালুত, উদ্বেগে ভরা, দাউদকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) প্রশ্ন করেছিলেন:</strong><br />
                                <em>"তুমি কীভাবে একটি স্লিং এবং কয়েকটি পাথর দিয়ে একটি দৈত্যের বিরুদ্ধে নিজেকে রক্ষা করবে?"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>উত্তরে, দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) নিশ্চিত করেছিলেন:</strong><br />
                                <em>"আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>), যিনি আমাকে ভালুকের নখর এবং সিংহের দাঁত থেকে রক্ষা করেছিলেন, তিনি অবশ্যই আমাকে এই আগ্রাসী থেকে রক্ষা করবেন।"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>জালুতের হাসি যুদ্ধক্ষেত্রে প্রতিধ্বনিত হয়েছিল যখন সে অবশেষে তার প্রতিপক্ষের দিকে তাকিয়েছিল। সে চিৎকার করেছিল:</strong><br />
                                <em>"তুমি কি তোমার খেলার সাথীদের মধ্যে একজনকে যুদ্ধ খেলতে বেরিয়েছ, নাকি তুমি তোমার জীবন থেকে ক্লান্ত? আমি আমার তরোয়ালের এক ঝাঁকুনিতে তোমার মাথা কেটে ফেলব!"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) চিৎকার করে উত্তর দিয়েছিলেন:</strong><br />
                                <em>"তোমার কাছে বর্ম, ঢাল এবং তরোয়াল থাকতে পারে, কিন্তু আমি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) নামে তোমার মুখোমুখি হচ্ছি, ইসরায়েলীদের রব, যার আইন তুমি উপহাস করেছ। আজ, তুমি দেখবে যে তরোয়াল মৃত্যু নিয়ে আসে না, কিন্তু আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ইচ্ছা এবং শক্তি!"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <img 
                        src="/images/prophet-stories/dawud/Jalut fight.png" 
                        alt="দাউদ জালুতের সাথে যুদ্ধ করে" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        তার রবের প্রতি বিশ্বাস নিয়ে, দাউদ (আল্লাহর শান্তি তার উপর বর্ষিত হোক) তার স্লিংয়ে একটি নুড়ি লোড করেছিলেন, জালুতের দিকে লক্ষ্য করেছিলেন, এবং তার শট ছেড়েছিলেন। জালুত তার অবস্থান বুঝতে পারার আগে, নুড়িটি বাতাসের মধ্য দিয়ে ছুটে গিয়ে তাকে আঘাত করেছিল। নুড়ির শক্তি জালুতকে পিছনে ঠেলে দিয়েছিল, নুড়ি আঘাত করা স্থান থেকে রক্ত প্রবাহিত হচ্ছিল। এক মুহূর্তে, জালুত প্রাণহীন হয়ে পড়ে গিয়েছিল।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                <strong>একটি নুড়ি দিয়ে, <span className="text-amber-600 dark:text-amber-500">দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) শক্তিশালী জালুতকে পরাজিত করেছিলেন</span>, যাকে সমস্ত যোদ্ধা ভয় করত।</strong>
                            </p>
                            <p className="mb-4">
                                জালুতের সেনাবাহিনী বুঝতে পেরেছিল যে একটি ছোট ছেলের দ্বারা তাদের নেতার পরাজয় কোনো সাধারণ ঘটনা নয়। তাদের জীবনের ভয়ে, তারা পালাতে শুরু করেছিল।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/dawud/Jalut died.png" 
                                alt="জালুত মারা গেছে" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        জালুত এবং তার সেনাবাহিনীর নিপীড়নের অধীনে বছরের যন্ত্রণা দ্বারা চালিত হয়ে, ইসরায়েলীরা সেনাদের অনুসরণ করেছিল, প্রতিটি সৈন্যকে হত্যা করেছিল যাদের তারা তাদের হাতে পেতে পারত।
                    </p>

                    <p className="mb-4">
                        এইভাবে, সর্বশক্তিমান আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সাহায্যে, ইসরায়েলীরা তাদের শত্রুদের উপর বিজয় অর্জন করেছিল এবং তাদের মর্যাদা পুনরুদ্ধার করেছিল। <strong>এবং রাতারাতি, দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) একজন সম্মানিত নায়কের মর্যাদায় আরোহণ করেছিলেন।</strong>
                    </p>

                    <p className="mb-4">
                        তার কথা সম্মান করে, রাজা তালুত তার কন্যার সাথে দাউদের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বিবাহ দিয়েছিলেন এবং তাকে একজন প্রধান উপদেষ্টা হিসাবে নিয়োগ করেছিলেন। এইভাবে, দাউদের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) রাজত্বের পথ প্রশস্ত হয়েছিল।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong className="text-amber-600 dark:text-amber-500">আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কুরআনে বলেছেন:</strong><br />
                                <em>"আল্লাহর ইচ্ছায় তারা তাদের পরাজিত করেছিল; এবং দাউদ জালুতকে হত্যা করেছিল; এবং আল্লাহ তাকে ক্ষমতা এবং জ্ঞান দিয়েছিলেন এবং তাকে যা ইচ্ছা করেছিলেন তা শিখিয়েছিলেন। এবং যদি আল্লাহ একদল লোককে অন্য দলের মাধ্যমে পরীক্ষা না করতেন, তাহলে পৃথিবী অবশ্যই অশান্তিতে পূর্ণ হত: কিন্তু আল্লাহ সমস্ত বিশ্বের জন্য পরিপূর্ণ অনুগ্রহের অধিকারী।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-বাকারা আয়াত ২৫১)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <strong>আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) আমাদের দেখাচ্ছেন যে যাদের তার প্রতি সম্পূর্ণ বিশ্বাস এবং নির্ভরতা রয়েছে তারা সবচেয়ে বড় সম্ভাবনাকেও অতিক্রম করতে পারে।</strong> দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এত ছোট ছিল, তবুও সে জালুতকে এত সহজে উৎখাত করেছিল। একটি ছোট বাহিনী একটি অনেক বড় বাহিনীকে অতিক্রম করতে পারে। গল্পটি আমাদের নম্রতার একটি পাঠও শেখায়।
                    </p>

                    <p className="mb-4">
                        <strong>আমাদের কখনই খুব গর্বিত হওয়া উচিত নয় এবং নিজেদেরকে <span className="text-amber-600 dark:text-amber-500">খুব বড়, শক্তিশালী, ধনী, বা সুন্দর</span> হিসাবে ভাবা উচিত নয়।</strong> যত দ্রুত জালুত পড়ে গিয়েছিল, আমরাও সবকিছু হারাতে পারি। অন্যথায় ভাবতে এত অহংকারী হবেন না। আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে কৃতজ্ঞ থাকুন। যদি তিনি আপনাকে সম্পদ দিয়ে থাকেন, তাহলে আপনার চারপাশের লোকদের সেবা করে এবং ধার্মিক হয়ে তাকে সন্তুষ্ট করার উপায়ে এটি ব্যবহার করুন।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Becoming a Prophet */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        একজন <span className="text-amber-600 dark:text-amber-500">নবী</span> হওয়া
                    </h2>

                    <p className="mb-4">
                        দৈত্যের উপর অলৌকিক বিজয়ের পর, দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) একাকীত্ব খুঁজতে মরুভূমিতে বের হয়েছিলেন দিনের ঘটনাগুলি প্রতিফলিত করতে এবং আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কে মহিমান্বিত করতে। দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ছিলেন আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) একজন নম্র বান্দা যিনি গর্বকে তার হৃদয়ে প্রবেশ করতে দেননি এবং সর্বশক্তিমানকে ভুলে যাননি।
                    </p>

                    <p className="mb-4">
                        <strong>এই সময়ে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) দাউদকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) নবুওয়ত দান করেছিলেন।</strong> রব দাউদকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) অনেক অলৌকিক ঘটনা দিয়েছিলেন যা তার আগে বা পরে কোনো নবীকে দেওয়া হয়নি।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) নবী দাউদকে (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) যাবুরও প্রকাশ করেছিলেন, যাকে গীত বা ডেভিডের গান হিসাবেও পরিচিত।<br />
                                <em>"...এবং দাউদকে (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) আমরা যাবুর দিয়েছি,"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-ইসরা, আয়াত ৫৫)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/dawud/dawud-psalms.png" 
                                alt="দাউদ যাবুর" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                যখন তিনি তার মধুর কণ্ঠে যাবুরের আয়াত গাইতে শুরু করেছিলেন, পর্বত, গাছ, পাখি এবং সমস্ত অন্যান্য জীবিত প্রাণী সর্বশক্তিমানকে মহিমান্বিত করার জন্য তার সাথে যোগ দিয়েছিল।
                            </p>

                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <span className="text-amber-600 dark:text-amber-500">আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কুরআনে বলেছেন:</span><br />
                                        <em>"আমরা সত্যিই তাকে সাথে সন্ধ্যা এবং সূর্যোদয়ের পর পর্বতগুলিকে আমাদের প্রশংসা গাইতে বাধ্য করেছিলাম। এবং আমরা পাখিদের, একত্রে ঝাঁকে ঝাঁকে বাধ্য করেছিলাম। সবাই তার দিকে ফিরে তার স্তবগান প্রতিধ্বনিত করেছিল। আমরা তার রাজত্বকে শক্তিশালী করেছিলাম, এবং তাকে জ্ঞান এবং সঠিক বিচার দিয়েছিলাম।"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আস-সাদ আয়াত ১৮-২০)</span>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <p className="mb-4">
                        আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তার রাসূল দাউদকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) প্রাণীদের সাথে কথোপকথন করার ক্ষমতাও দান করেছিলেন।
                    </p>

                    <p className="mb-4">
                        নবী দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ছিলেন তার রবের (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) একজন ধর্মপরায়ণ উপাসক। তিনি কখনই তার বক্তব্য বা কাজে আল্লাহকে (<span className="font-arabic">سُবْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) মহিমান্বিত করার সুযোগ হারাননি।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>আল্লাহর রাসূল (<span className="font-arabic">ﷺ</span>) বলেছেন:</strong><br />
                                <em>"আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে সবচেয়ে প্রিয় রোজা ছিল নবী দাউদের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) রোজা যিনি বিকল্প দিনে রোজা রাখতেন। এবং আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে সবচেয়ে প্রিয় প্রার্থনা ছিল দাউদের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) প্রার্থনা যিনি রাতের (প্রথম) অর্ধেক ঘুমাতেন এবং এর এক তৃতীয়াংশ প্রার্থনা করতেন এবং (আবার) এর এক ষষ্ঠাংশ ঘুমাতেন।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সহীহ আল-বুখারী ৩৪২০)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        নবী দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) যুদ্ধে একটি গুরুত্বপূর্ণ এবং প্রভাবশালী ব্যক্তিত্ব হয়ে উঠেছিলেন; তিনি এ সম্পর্কিত বিষয়গুলিতে ব্যাপকভাবে পরামর্শ নিতেন।
                    </p>

                    <p className="mb-4">
                        একদিন, কিছু সৈন্য নবী দাউদের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) কাছে এসেছিল এবং অভিযোগ করেছিল যে তাদের লোহার বর্ম খুব ভারী এবং যুদ্ধের সময় তাদের চলাচলকে মারাত্মকভাবে সীমাবদ্ধ করছে।
                    </p>

                    <p className="mb-4">
                        নবী দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) একদিন লোহার একটি টুকরো নিয়ে খেলতে খেলতে এই সমস্যাটি নিয়ে চিন্তা করছিলেন যখন হঠাৎ, তার বড় বিস্ময়ের জন্য, তার আঙুল লোহার মধ্য দিয়ে ডুবে গিয়েছিল। <strong>আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাকে আরেকটি উপহার দিয়েছিলেন – <span className="text-amber-600 dark:text-amber-500">লোহা গঠন করার ক্ষমতা।</span></strong>
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <em>"আমরা তার জন্য লোহাকে গঠনযোগ্য করেছিলাম,"</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <span className="text-amber-600 dark:text-amber-500">আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কুরআনে বলেছেন, সূরা সাবা আয়াত ১১</span>।<br /><br />
                                        এছাড়াও, সূরা আল-আনবিয়া আয়াত ৮০-এ উল্লেখ করা হয়েছে,<br />
                                        <em>"এটি আমরাই ছিলাম যিনি তাকে আপনার সুবিধার জন্য বর্ম তৈরির শিল্প শিখিয়েছিলাম যাতে এটি একে অপরের সহিংসতা থেকে আপনাকে রক্ষা করতে পারে। তাহলে, আপনি কি কৃতজ্ঞতা প্রকাশ করবেন?"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/dawud/dawud-iron.png" 
                                alt="দাউদ লোহা গঠন করছে" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Talut's Jealousy */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        তালুতের <span className="text-amber-600 dark:text-amber-500">ঈর্ষা</span>
                    </h2>

                    <p className="mb-4">
                        নবী দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার সাহস, ধার্মিকতা এবং জ্ঞানের জন্য রাজ্য জুড়ে ব্যাপকভাবে প্রশংসিত এবং প্রশংসিত হয়েছিলেন। মানুষের চোখে, তিনি এমনকি রাজা তালুতকেও ছাড়িয়ে গিয়েছিলেন। জনমতের এই পরিবর্তন রাজার নজর এড়ায়নি।
                    </p>

                    <p className="mb-4">
                        একদিন, নবী দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার শ্বশুরকে দুঃখে দেখেছিলেন এবং তার মনোভাবের পার্থক্য অনুভব করেছিলেন। উদ্বিগ্ন হয়ে, তিনি তার স্ত্রী মিখালের সাথে তার চিন্তা ভাগ করেছিলেন, যিনি অবিলম্বে কান্না শুরু করেছিলেন এবং দাউদের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ক্রমবর্ধমান জনপ্রিয়তার প্রতি তার বাবার ঈর্ষা প্রকাশ করেছিলেন। <span className="text-amber-600 dark:text-amber-500">মিখাল তার স্বামীকে সর্বদা সতর্ক থাকতে সতর্ক করেছিলেন, তার বাবার ঈর্ষা থেকে সম্ভাব্য ক্ষতির ভয়ে।</span>
                    </p>

                    <p className="mb-4">
                        দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ছিলেন একজন ধর্মপরায়ণ এবং আন্তরিক মানুষ, তালুতের ঈর্ষার খবরে গভীরভাবে বিচলিত। তিনি প্রার্থনা করেছিলেন যে তালুতের হৃদয় ঈর্ষা থেকে মুক্ত হবে এবং সে তার পূর্ববর্তী সদগুণ প্রকৃতিতে ফিরে আসবে।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/dawud/talut-dawud-conversations.png" 
                                alt="দাউদ এবং তালুত কথোপকথন করছেন" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                পরের দিন, তালুত দাউদকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) জানিয়েছিলেন যে তাদের শত্রু, কানান, তার বাহিনী একত্রিত করেছিল এবং তালুতের রাজ্যকে উৎখাত করার জন্য তার উপর মার্চ করার পরিকল্পনা করছিল।
                            </p>
                            <p className="mb-4">
                                <strong>তিনি দাউদকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) কানান এবং তার লোকদের সাথে যুদ্ধ করতে এবং বিজয় অর্জন না করা পর্যন্ত ফিরে না আসতে নির্দেশ দিয়েছিলেন।</strong>
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ছিলেন বিচক্ষণ, এই নির্দেশে তার মৃত্যুর জন্য একটি সম্ভাব্য ফাঁদ অনুভব করেছিলেন—শত্রুর আক্রমণ বা তালুতের লোকদের বিশ্বাসঘাতকতার ভয়ে। <strong>তার সন্দেহ সত্ত্বেও, দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার জীবনকে আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) হাতে রেখেছিলেন এবং নির্দেশ অনুযায়ী এগিয়ে গিয়েছিলেন।</strong> তার সেনাবাহিনী শত্রু সেনাদের সাথে দেখা করেছিল এবং সাহসের সাথে যুদ্ধ করেছিল, বিজয়ী হয়ে উঠেছিল। দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) অক্ষত অবস্থায় রাজ্যে ফিরে এসেছিলেন।
                    </p>

                    <img 
                        src="/images/prophet-stories/dawud/Michal-Discovering.png" 
                        alt="মিখাল আবিষ্কার করছে" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        ভয় এবং ভয় দ্বারা গ্রাস হয়ে এবং অন্য কোনো পথ খুঁজে না পেয়ে, তালুত তার জামাইয়ের হত্যার পরিকল্পনা করেছিলেন।<br /><br />
                        মিখাল, তার বাবার উদ্দেশ্য আবিষ্কার করে, তার স্বামীকে পূর্বসতর্ক করতে ছুটে গিয়েছিলেন।
                    </p>

                    <p className="mb-4">
                        <strong>সেই রাতেই, দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) প্রয়োজনীয় সরবরাহ সংগ্রহ করেছিলেন এবং তালুতের রাজ্য থেকে পালিয়ে গিয়েছিলেন, <span className="text-amber-600 dark:text-amber-500">যেখানে তিনি কয়েক দিন একটি গুহায় লুকিয়ে ছিলেন।</span></strong>
                    </p>

                    <p className="mb-4">
                        কয়েক দিন পরে, দাউদের ভাইয়েরা এবং নবীর আরও কয়েকজন অনুগত অনুসারী তাকে সমর্থন করার জন্য একত্রিত হয়েছিল। প্রতিটি দিন তালুতের রাজত্বের স্থিতিশীলতাকে দুর্বল করছিল।
                    </p>

                    <p className="mb-4">
                        দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) চলে যাওয়ার পর, তালুত আক্রমণাত্মকভাবে তার হারানো ক্ষমতা একত্রিত করার চেষ্টা করেছিল। তিনি একজন একনায়কের মতো তার রাজ্য শাসন করতে শুরু করেছিলেন। তিনি শিক্ষিতদের নিপীড়ন করেছিলেন, যারা তালমুদ পালন করত তাদের নিপীড়ন করেছিলেন, এবং তার সেনাবাহিনীকে সন্ত্রাস করেছিলেন। এটি মানুষের সাথে তার জনপ্রিয়তাকে আরও ক্ষয় করেছিল। ক্রুদ্ধ হয়ে, তালুত দাউদের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সাথে যুদ্ধ করার সিদ্ধান্ত নিয়েছিল। তাই, তার সেনাবাহিনী সংগ্রহ করে, তালুত তার জামাইয়ের সাথে যুদ্ধ করতে তার রাজ্য ছেড়ে চলে গিয়েছিল।
                    </p>

                    <p className="mb-4">
                        দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আসন্ন সেনাবাহিনীর খবর পেয়েছিলেন এবং তাদের মুখোমুখি হওয়ার সিদ্ধান্ত নিয়েছিলেন। তিনি আবিষ্কার করেছিলেন যে তালুতের সেনাবাহিনী বাড়ি থেকে অনেক দূরে একটি উপত্যকায় বিশ্রাম করছে।
                    </p>

                    <img 
                        src="/images/prophet-stories/dawud/Talut-in-cave.png" 
                        alt="গুহায় তালুত" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        গোপনে, দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তালুতের শিবিরের দিকে তার পথ তৈরি করেছিলেন এবং তাকে ঘুমন্ত অবস্থায় পেয়েছিলেন। <span className="text-amber-600 dark:text-amber-500">দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) তার তরোয়াল সরিয়ে ফেলেছিলেন এবং তালুতের পোশাকের একটি টুকরো কেটে ফেলেছিলেন।</span>
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তালুতকে জাগিয়েছিলেন এবং বলেছিলেন:</strong><br />
                                        <em>"ওহে রাজা, তুমি আমাকে খুঁজতে বেরিয়েছ, কিন্তু আমি তোমাকে ঘৃণা করি না, এবং আমি তোমাকে হত্যা করতে চাই না। যদি আমি করতাম, আমি তোমাকে হত্যা করতাম যখন তুমি ঘুমিয়ে ছিলে। এখানে তোমার পোশাকের একটি টুকরো। আমি এর পরিবর্তে তোমার ঘাড় কেটে ফেলতে পারতাম, কিন্তু আমি করিনি। <strong>আমার মিশন হল প্রেমের, দুষ্টতার নয়।</strong>"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/dawud/Dawud-holding-torn-garment.png" 
                                alt="দাউদ ছেঁড়া পোশাক ধরে আছে" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        তালুত তখন তার বোধে ফিরে এসেছিল, তার কাজের বিশালতা উপলব্ধি করে, এবং নবী দাউদের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) কাছে ক্ষমা চেয়েছিল।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Prophet Dawud Becomes King */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">নবী দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span> রাজা হন
                    </h2>

                    <p className="mb-4">
                        <strong>বছর কেটে গিয়েছিল, এবং রাজা তালুত যুদ্ধে মারা গিয়েছিলেন। <span className="text-amber-600 dark:text-amber-500">নবী দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) জনগণ দ্বারা রাজা হিসাবে নির্বাচিত হয়েছিলেন।</span></strong>
                    </p>

                    <p className="mb-4">
                        দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ছিলেন একজন ন্যায়পরায়ণ, নম্র এবং ধার্মিক রাজা যার শাসন রাজ্যে শান্তি এবং সমৃদ্ধি নিশ্চিত করেছিল। রাজা হিসাবে তার নতুন ভূমিকা সত্ত্বেও, দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ধর্ম প্রচারের তার দায়িত্বে অবহেলা করেননি। যাবুরের তার মধুর আবৃত্তি যারা শুনেছিল তাদের সবাইকে মুগ্ধ করেছিল, কেবল মানুষই নয়, পাখি, প্রাণী এবং গাছগুলিকেও আকর্ষণ করেছিল, এর ঐশ্বরিক আয়াত দিয়ে শ্রোতাদের মুগ্ধ করেছিল।
                    </p>

                    <p className="mb-4">
                        একজন রাজা এবং একজন নবীর ভূমিকার ভারসাম্য করা কোনো সহজ কাজ ছিল না। কিন্তু দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ছিলেন নিবেদিত এবং সংকল্পের সাথে দায়িত্ব গ্রহণ করেছিলেন। তিনি তার কোনো দায়িত্বে পিছিয়ে পড়েননি এবং তার দিনকে চার ভাগে ভাগ করেছিলেন:
                    </p>

                    <img 
                        src="/images/prophet-stories/dawud/dawud-divides-day-into-4-parts.png" 
                        alt="দাউদ দিনকে চার ভাগে ভাগ করছে" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <p className="mb-4 text-center">
                        <strong>প্রথম, জীবিকা অর্জন এবং বিশ্রাম; দ্বিতীয়, ধর্মীয় পর্যবেক্ষণের জন্য; তৃতীয়, তার লোকদের জন্য; এবং চূড়ান্ত, তার বক্তৃতা প্রদানের জন্য।</strong>
                    </p>

                    <p className="mb-4">
                        নবী দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার অনুপস্থিতিতে মানুষের সমস্যাগুলি দেখাশোনা করার জন্য ডেপুটিদের ক্ষমতাও দিয়েছিলেন।
                    </p>

                    <p className="mb-4">
                        আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) দাউদের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) রাজত্বকে আশীর্বাদ করেছিলেন। তার রাজ্য ছিল দাউদের যোগ্যতার একটি প্রমাণ। তিনি তার শত্রুদের দ্বারাও ব্যাপকভাবে ভীত ছিলেন।
                    </p>

                    <p className="mb-4">
                        রাজা হিসাবে তার রাজকীয় মর্যাদা সত্ত্বেও, নবী দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার আয়ের জন্য রাজ্যের উপর নির্ভর করেননি। তার জীবিকা নিজের দ্বারা তৈরি অস্ত্র বিক্রি করে সুরক্ষিত ছিল।
                    </p>

                    <p className="mb-4">
                        <strong>বাইবেল নবীদের সম্পর্কে অনেক মিথ্যা গল্প বলে, এবং <span className="text-amber-600 dark:text-amber-500">কুরআন প্রায়ই রেকর্ড সোজা করতে হয়।</span></strong> ২ শমূয়েল ১২-এ একটি গল্প নবী দাউদ (আস) সম্পর্কে খুবই নিন্দনীয়ভাবে কথা বলে। এটি নবী দাউদকে (আস) চুরি, ব্যভিচার এবং হত্যার পরিকল্পনার মতো অনেক অনৈতিক কাজের জন্য অভিযুক্ত করে। এটি নবীকে একজন শৃঙ্খলাহীন মানুষ হিসাবে চিত্রিত করে যার বিচারবুদ্ধির অভাব রয়েছে এবং তার ইচ্ছার উপর নিয়ন্ত্রণ নেই।
                    </p>

                    <p className="mb-4">
                        নাথান দাউদের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) মুখোমুখি হওয়ার জন্য একটি পরোক্ষ পদ্ধতি বেছে নিয়েছিলেন, একটি ধনী ব্যক্তির একটি গল্প শেয়ার করেছিলেন যিনি অন্যায়ভাবে একজন দরিদ্র ব্যক্তির ভেড়া নিয়েছিলেন। এই গল্পটি দাউদের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বিরুদ্ধে অভিযোগের সাথে সমান্তরাল হিসাবে কাজ করেছিল যে উরিয়াহ নামে একজন ব্যক্তির মৃত্যু ঘটানোর জন্য তার স্ত্রী বাথশেবাকে দাবি করার জন্য। এটি তারপর উল্লেখ করে যে কীভাবে দাউদের অপরাধবোধের বিবেক তার উপর নিয়ন্ত্রণ নিয়েছিল, তাকে ভেড়া চোরকে মৃত্যুদণ্ড দেওয়ার তাড়াহুড়ো বিচারিক সিদ্ধান্ত নিতে বাধ্য করেছিল যদিও অপরাধটি একটি মৃত্যুদণ্ডের অপরাধ ছিল না। কেবল নাথানের মুখোমুখি হওয়ার পরই সে জানতে পারল যে সে সত্য জানত এবং ক্ষমা চেয়েছিল এবং ক্ষমা দেওয়া হয়েছিল। এই চিত্রণটি একজন নবীর জন্য বরং আপত্তিকর যার চরিত্র এবং বিচারবুদ্ধির ত্রুটি সমস্ত মানবতার পথনির্দেশ করার জন্য একজন রোল মডেল হিসাবে কাজ করার জন্য একজন ব্যক্তির জন্য অনুপযুক্ত।
                    </p>

                    <p className="mb-4">
                        সূরা সাদ, আয়াত ১৭-২৬-এ, কুরআন বাইবেলের বিবরণে পাওয়া বর্ণনার তুলনায় নবী দাউদের গল্পটি একটি ভিন্ন আলোকে বর্ণনা করে। আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) প্রায়ই নবী মুহাম্মদকে (<span className="font-arabic">ﷺ</span>) অতীত নবীদের গল্প প্রদান করেছিলেন, সমসাময়িক চ্যালেঞ্জগুলি পরিচালনা করতে তাকে পথনির্দেশ করার জন্য পাঠ প্রদান করেছিলেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>সূরা সাদ আয়াত ১৭-এ</strong>, আল্লাহ নবী মুহাম্মদকে নির্দেশ দিয়েছেন,<br />
                                <em>"তারা যা বলে তার উপর ধৈর্য ধারণ করুন এবং আমাদের বান্দা, দাউদ, শক্তির অধিকারীকে স্মরণ করুন; নিশ্চয়ই, তিনি ছিলেন এমন একজন যিনি বারবার [আল্লাহর দিকে] ফিরে গিয়েছিলেন।"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        নবী দাউদ (আস) কুরআনে তার শক্তি এবং অবিচলিত তওবার জন্য প্রশংসিত হয়েছিলেন, তার অবিচ্ছিন্ন ভক্তি এবং আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে আত্মসমর্পণ প্রদর্শন করেছিলেন। তার ধার্মিকতা সত্ত্বেও, তিনি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছ থেকে একটি পরীক্ষার সম্মুখীন হয়েছিলেন।
                    </p>

                    <p className="mb-4">
                        <strong>একদিন, যখন দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) তার ব্যক্তিগত কক্ষে প্রার্থনা করছিলেন, দুজন লোক প্রাচীর বেয়ে উঠে তার ঘরে প্রবেশ করেছিল মধ্যস্থতা চেয়ে।</strong>
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        যখন দাউদ (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) দুজন লোককে দেখেছিলেন, তিনি অবিলম্বে ভীত হয়ে পড়েছিলেন।<br />
                                        <em>"ভয় করবেন না,"</em> লোকেরা আশ্বস্ত করেছিল,<br /><br />
                                        <em>"আমরা কেবল একটি বিবাদে দুজন: আমাদের একজন অন্যজনকে ক্ষতি করেছে। তাই, আমাদের মধ্যে সত্য দিয়ে বিচার করুন — এটির বাইরে যাবেন না — এবং আমাদের সঠিক পথে পথনির্দেশ করুন।"</em>
                                    </p>
                                </CardContent>
                            </Card>

                            <p className="mb-4">
                                দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>), বিস্মিত হয়ে, তার শান্তি ফিরে পাওয়ার চেষ্টা করেছিলেন এবং লোকদের তাদের অভিযোগ ব্যাখ্যা করতে বলেছিলেন।
                            </p>

                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>লোকদের একজন তার মামলা উপস্থাপন করেছিল,</strong><br />
                                        <em>"দেখুন, এটি আমার ভাই; তার কাছে নিরানব্বইটি মাদী ভেড়া আছে এবং আমার কাছে কেবল একটি মাদী ভেড়া আছে।"</em> এবং তবুও তিনি বলেছিলেন: <em>"তাকে আমার কাছে দাও,"</em> এবং তিনি তর্কে আমার চেয়ে ভাল করেছিলেন।<br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা সাদ আয়াত ২৩)</span>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>অন্য পক্ষটি সম্পূর্ণরূপে বিবেচনা না করে, <span className="text-amber-600 dark:text-amber-500">দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) দ্রুত হস্তক্ষেপ করেছিলেন, নিশ্চিত করেছিলেন,</span></strong><br />
                                        <em>"সে তার ভেড়ার পাশাপাশি তোমার ভেড়া দাবি করে তোমাকে ক্ষতি করেছে। এবং, নিশ্চয়ই, অনেক অংশীদার একে অপরকে নিপীড়ন করে, যারা বিশ্বাস করে এবং সৎ ভাল কাজ করে তাদের ছাড়া, এবং তারা অল্প।"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/dawud/Dawud-&-2-men.png" 
                                alt="নবী দাউদ দুজন লোকের সাথে কথা বলছেন" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        <strong><span className="text-amber-600 dark:text-amber-500">দুজন লোক তখন অদৃশ্য হয়ে গিয়েছিল</span>, এবং দাউদ (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) এটিকে আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছ থেকে একটি পরীক্ষা হিসাবে চিনেছিলেন। এই উপলব্ধিতে অভিভূত হয়ে, তিনি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সামনে তওবার জন্য সিজদা করেছিলেন।</strong>
                    </p>

                    <p className="mb-4">
                        কিছু কুরআন ব্যাখ্যাকারীরা তওবার জন্য সিজদায় পড়ে যাওয়ার গল্পটিকে বাইবেলে পাওয়া অপরাধবোধের গল্পের সাথে সংযুক্ত করে। কিন্তু সঠিক বোঝাপড়া হল যে নবী দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ভয় করেছিলেন যে তিনি ন্যায়বিচার করেননি। তিনি দুজন লোকের মধ্যে অকালে বিচার করেছিলেন এবং সমস্ত দৃষ্টিভঙ্গি বিবেচনা করতে ব্যর্থ হয়েছিলেন।
                    </p>

                    <p className="mb-4">
                        নিরানব্বইটি ভেড়ার মালিক একজনের উপর বৈধ দাবি রাখতে পারে। একটি মাদী ভেড়ার মালিক দরিদ্র ব্যক্তি তার নম্রতার কারণে সহানুভূতি পেতে পারে, সম্ভাব্যভাবে পরিস্থিতিকে প্রভাবিত করতে পারে। তার বাগ্মিতা বা প্ররোচনামূলক দক্ষতা তাকে বক্তৃতায় অন্যদের উপর প্রাধান্য দিতে দিয়েছে। তাই, ন্যায়বিচার যথাযথভাবে পরিবেশন করা হয়নি, এবং এই অনুভূত ত্রুটি ছিল দাউদের অংশে একটি ত্রুটি, তাকে তওবা (ক্ষমা) চাইতে পরিচালিত করেছিল।
                    </p>

                    <p className="mb-4">
                        <strong>এই ঘটনাটি আমাদের শেখায় যে শক্তিশালী আবেগ দ্বারা চালিত পরিস্থিতিগুলিকে তাড়াহুড়ো করে বিচার করা উচিত নয়।</strong> এটি ধৈর্য, ধুলো বসতে দেওয়া এবং বিচার দেওয়ার আগে প্রমাণ সংগ্রহ করার প্রয়োজনীয়তার উপর জোর দেয়।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong className="text-amber-600 dark:text-amber-500">সূরা সাদ, আয়াত ২৬-এ, বলা হয়েছে,</strong> "...তাই মানুষের মধ্যে সত্য দিয়ে বিচার করুন এবং [আপনার নিজের] ইচ্ছা অনুসরণ করবেন না, কারণ এটি আপনাকে আল্লাহর পথ থেকে বিভ্রান্ত করবে।" নিশ্চয়ই, যারা আল্লাহর পথ থেকে বিভ্রান্ত হয় তারা একটি গুরুতর শাস্তি পাবে কারণ তারা হিসাবের দিন ভুলে গেছে।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা সাদ আয়াত ২৬)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        এই আয়াতগুলিতে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) আমাদের প্রিয় নবীর অখণ্ডতা সংরক্ষণ করেছেন এবং একটি গুরুত্বপূর্ণ নেতৃত্বের পাঠ প্রদান করেছেন: বস্তুনিষ্ঠতা, সত্য-অন্বেষণ এবং চেহারা দ্বারা প্রভাবিত না হওয়ার গুরুত্ব।
                    </p>

                    <p className="mb-4">
                        আমাদের সবাইকে এমন মুহূর্তগুলির সম্মুখীন হতে হবে যেখানে আমাদের সঠিক থেকে ভুলকে আলাদা করতে হবে, তা পরিবারের বিবাদ, কাজের পরিবেশ, বা বন্ধুদের মধ্যে হোক। ন্যায়পরায়ণতার জন্য প্রচেষ্টা করা গুরুত্বপূর্ণ, কারণ একটি হিসাবের দিন আসবে যখন আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) আমাদের উপর একজন বিচারক হবেন।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Prophet Dawud's Son */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        নবী দাউদের <span className="text-amber-600 dark:text-amber-500">পুত্র</span>
                    </h2>

                    <p className="mb-4">
                        আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) জ্ঞান এবং সঠিক বিচার কেবল নবী দাউদকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) নয়, তার প্রিয় পুত্র সুলাইমানকেও (আল্লাহর শান্তি তার উপর বর্ষিত হোক) দান করেছিলেন।
                    </p>

                    <p className="mb-4">
                        বর্ণিত আছে যে একদিন, যখন নবী দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার লোকদের সমস্যাগুলি শুনছিলেন সুলাইমানের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সাথে, যিনি তখন এগারো বছর বয়সী ছিলেন, দুজন লোক তার কাছে এসেছিল।
                    </p>

                    <img 
                        src="/images/prophet-stories/dawud/2-men-grapes-&-sheep.png" 
                        alt="দুজন লোক এবং ভেড়া" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>একজন, যিনি একটি ক্ষেতের মালিক ছিলেন, অভিযোগ করেছিলেন:</strong><br />
                                <em>"ওহে প্রিয় নবী, এই লোকের ভেড়া রাতে আমার ক্ষেতে এসেছিল এবং আঙ্গুর খেয়ে শেষ করেছিল এবং আমি ক্ষতিপূরণ চাইতে এসেছি।"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>অন্য লোকটির দিকে, ভেড়ার মালিক, দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) জিজ্ঞাসা করেছিলেন,</strong><br />
                                <em>'এটি কি সত্য?'"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <em>"হ্যাঁ, স্যার,"</em><br />
                                <strong>উত্তর এসেছিল।</strong>
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                নবী দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তারপর রায় দিয়েছিলেন:<br />
                                <em>"আমি সিদ্ধান্ত নিয়েছি যে তুমি তাকে ক্ষেতের বিনিময়ে তোমার ভেড়া দাও।"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <img 
                        src="/images/prophet-stories/dawud/prophet-sulaiman-solution.png" 
                        alt="নবী সুলাইমানের সমাধান" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        <strong>সেই মুহূর্তে, নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এগিয়ে এসেছিলেন, একটি বিকল্প দৃষ্টিভঙ্গি প্রদান করেছিলেন। তিনি পরামর্শ দিয়েছিলেন,</strong><br />
                        <em>"ভেড়ার মালিককে আঙ্গুর বাড়া পর্যন্ত চাষ করার জন্য ক্ষেত নিতে হবে, যখন অন্য লোকটি ভেড়া নিয়ে তাদের পশম এবং দুধ ব্যবহার করবে যতক্ষণ না তার ক্ষেত মেরামত হয়। যদি আঙ্গুর বাড়ে, এবং ক্ষেত তার পূর্ববর্তী অবস্থায় ফিরে আসে, তাহলে ক্ষেতের মালিককে তার ক্ষেত নিতে হবে এবং ভেড়া তাদের মালিককে ফিরিয়ে দিতে হবে।"</em>
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>তার পুত্রের বুদ্ধিমত্তায় মুগ্ধ হয়ে,<br /> দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) মন্তব্য করেছিলেন,</strong><br />
                                <em>"এই বিচারটি জ্ঞানী। আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) প্রশংসা করুন যিনি আপনাকে জ্ঞান দিয়েছেন। আপনি সত্যিই সুলাইমান দ্য ওয়াইজ।"</em>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Prophet Dawud's Death */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">নবী দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর মৃত্যু:
                    </h2>

                    <p className="mb-4">
                        নবী দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ছিলেন আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সবচেয়ে প্রভাবশালী নবীদের মধ্যে একজন যিনি তার শেষ নিঃশ্বাস পর্যন্ত তাকে ধর্মপরায়ণভাবে উপাসনা করেছিলেন। তাকে একজন নবী হিসাবে পাঠানো হয়েছিল, কারণ ইসরায়েলের লোকদের নবী মুসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এবং হারুনের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) মৃত্যুর পর একজন পথনির্দেশকের প্রয়োজন ছিল।
                    </p>

                    <p className="mb-4">
                        <strong>নবী দাউদের আকস্মিক মৃত্যু হাজার হাজার লোক শোক করেছিল, যার মধ্যে চার হাজার পুরোহিত ছিল।</strong> তার মৃত্যুর দিন, তীব্র তাপ বিরাজ করছিল। নবী সুলাইমান (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) - যিনি প্রাণীদের সাথে কথোপকথন করার ক্ষমতা দিয়ে উপহার পেয়েছিলেন - পাখিদকে ডেকেছিলেন শোককারীদের প্রখর সূর্য থেকে রক্ষা করতে যতক্ষণ না দাউদ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সমাহিত হয়েছিল।
                    </p>

                    <p className="mb-4">
                        এই ঘটনাটি নবী সুলাইমানের আধিপত্যের প্রথম আভাস চিহ্নিত করেছিল যা লোকেরা দেখেছিল।
                    </p>
                </section>

            </div>
        </div>
    )
}
