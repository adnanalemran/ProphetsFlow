import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function HarunStory() {
    return (
        <div className="mb-12 mt-6 md:mt-10">
            {/* Header Image */}
            <div className="w-full mb-8">
                <img 
                    src="/images/prophet-stories/harun/story-of-prophet-harun-as.png" 
                    alt="হারুন (আঃ)-এর গল্প" 
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-10">
                <span className="text-amber-600 dark:text-amber-500">নবী হারুন (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর গল্প
            </h1>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6 md:space-y-8">
                
                {/* Introduction */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/harun/Prophet Harun Calligraphy.png" 
                                alt="নবী হারুনের ক্যালিগ্রাফি" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover mb-4"
                            />
                            <img 
                                src="/images/prophet-stories/harun/Prophet Musa Calligraphy.png" 
                                alt="নবী মুসার ক্যালিগ্রাফি" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="mb-4">
                                নবী হারুন (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) মিশরে বসবাসকারী একটি বিশ্বস্ত ইসরায়েলি পরিবারে জন্মগ্রহণ করেছিলেন। তিনি এমন একটি সময়ে জন্মগ্রহণ করেছিলেন যখন ইসরায়েলীরা একজন অত্যাচারী মিশরীয় শাসকের অধীনে মারাত্মকভাবে নিপীড়িত হচ্ছিল।
                            </p>
                            <p className="mb-4">
                                <strong>তিনি নবী মুসার (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বড় ভাই হিসাবে ব্যাপকভাবে স্বীকৃত।</strong>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* The Pharaoh's Vision */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        ফেরাউনের <span className="text-amber-600 dark:text-amber-500">দর্শন</span>
                    </h2>

                    <p className="mb-4">
                        মিশরের ফেরাউন বনি ইসরায়েল দ্বারা উৎখাত হওয়ার একটি দর্শনে ভীত হয়ে পড়েছিলেন; তিনি স্বপ্ন দেখেছিলেন যে জেরুজালেম থেকে একটি জ্বলন্ত আগুন ছড়িয়ে পড়ছে, মিশরীয় এবং কপ্টদের বাড়ি পুড়িয়ে দিচ্ছে, ইসরায়েলের সন্তানদের অক্ষত রেখে।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                উদ্বিগ্ন হয়ে, তিনি তার পুরোহিত, মন্ত্রী এবং জাদুকরদের ডাকলেন এবং ভয়াবহ দর্শন বর্ণনা করেছিলেন। দলটি অনুমান করেছিল যে <strong>ইসরায়েলীদের মধ্যে একটি ছেলে জন্মগ্রহণ করবে, <span className="text-amber-600 dark:text-amber-500">যা মিশরীয়দের পতন ঘটাবে।</span></strong>
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/harun/Boy Born.png" 
                                alt="ছেলে জন্মগ্রহণ" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <div className="relative my-6">
                        <p className="mb-4">
                            তাই, মিশরীয় সেনাবাহিনীকে নির্দেশ দেওয়া হয়েছিল ইসরায়েলীদের কাছে জন্মগ্রহণকারী সমস্ত পুরুষ শিশুকে হত্যা করার জন্য।
                        </p>
                        <img 
                            src="/images/prophet-stories/harun/the-pharaoh-vision-prophet-harun.png" 
                            alt="ফেরাউনের দর্শন" 
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                        <p className="mt-4 text-center text-sm italic">
                            এই রায় জারি করার কোন নৈতিক দ্বন্দ্ব ছিল না কারণ এটি ফেরাউনের আরেকটি উপায় ছিল যার মাধ্যমে তিনি বনি ইসরায়েলকে নিপীড়ন করতে থাকেন — নবী ইয়াকুবের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বংশধর।
                        </p>
                    </div>

                    <p className="mb-4">
                        ইসরায়েলের সন্তানরা কেবল ফেরাউন এবং মিশরীয়দের দাস হিসাবে কাজ করত। তাদের ন্যূনতম বা কোন ক্ষতিপূরণ ছাড়াই শ্রমে বাধ্য করা হয়েছিল। নিরবচ্ছিন্ন নিপীড়ন সহ্য করে, তাদের অধিকার থেকে বঞ্চিত করা হয়েছিল এবং নিম্নমানের নাগরিক হিসাবে দেখা হয়েছিল।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/harun/Gods Pharaoh.png" 
                                alt="দেবতা ফেরাউন" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                মিশরীয়রা ফেরাউনের উপাসনা করত এবং প্রশ্ন ছাড়াই তার সমস্ত দাবি পালন করত। তারা ফেরাউন যে দেবতাদের অনুমোদন করেছিলেন তাদের উপাসনা করত।
                            </p>
                            <p className="mb-4">
                                তার ক্ষমতার ভয়ে, কেউ তার বিরুদ্ধে যাওয়ার সাহস করেনি, কারণ এর অর্থ কেবল মৃত্যু। এবং তাই, তারা হয়তো বহুঈশ্বরবাদে বিশ্বাস করত না, কিন্তু তারা প্রতিবাদ ছাড়াই তাদের রাজার পথ অনুসরণ করত।
                            </p>
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* The Sages' Warning */}
                <section className="my-8 md:my-12">
                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>সমস্ত পুরুষ শিশু জন্মগ্রহণ করে, এবং তাদের পরিবার থেকে নিয়ে হত্যা করা হলে, ফেরাউন একটি নতুন সমস্যার মুখোমুখি হয়েছিল। <span className="text-amber-600 dark:text-amber-500">তার জ্ঞানীরা সতর্ক করেছিলেন:</span></strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <em>"বনি ইসরায়েলের বৃদ্ধরা মারা যায়, এবং তরুণদের হত্যা করা হয়। এটি তাদের বিলুপ্তির দিকে নিয়ে যাবে। ফলস্বরূপ, ফেরাউন তার জন্য কাজ করা লোকদের কর্মশক্তি হারাবে — যাদের সে দাসত্ব করে এবং যাদের মহিলাদের সে শোষণ করে।"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <strong>জ্ঞানীরা তারপর ফেরাউনকে হত্যা নিয়ন্ত্রণ করার জন্য নিম্নলিখিত নীতি প্রস্তাব করেছিলেন: <span className="text-amber-600 dark:text-amber-500">পুরুষরা এক বছরে হত্যা করা হবে কিন্তু পরের বছর বেঁচে থাকার জন্য ছেড়ে দেওয়া হবে</span></strong>। এটি একটি অর্থনৈতিক এবং সামাজিকভাবে কার্যকর সমাধান হিসাবে দেখে, ফেরাউন এটি অনুমোদন করেছিলেন এবং বাস্তবায়ন করেছিলেন।
                    </p>

                    <img 
                        src="/images/prophet-stories/harun/Harun & Musa born.png" 
                        alt="হারুন ও মুসা জন্মগ্রহণ" 
                        className="w-full h-auto rounded-lg shadow-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        যে বছর পুরুষ শিশুদের ছেড়ে দেওয়া হয়েছিল, সেই সময় হারুন (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) জন্মগ্রহণ করেছিলেন, যখন তার ছোট ভাই মুসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) যে বছর ছেলেদের হত্যা করা হচ্ছিল সেই বছর জন্মগ্রহণ করেছিলেন।
                    </p>

                    <p className="mb-4">
                        নবী হারুনের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) গল্প নবী মুসার (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>), তার ছোট ভাইয়ের গল্পের সাথে ঘনিষ্ঠভাবে মিলে যায়।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Harun's Prophethood */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        হারুন (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) <span className="text-amber-600 dark:text-amber-500">নবুওয়ত</span>
                    </h2>

                    <p className="mb-4">
                        সম্ভবত হারুনের নবুওয়তের গল্প তার ভাইয়ের চেয়ে কম পরিচিত। হারুনের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) গল্প প্রায়ই কুরআনে মুসার পাশাপাশি উল্লেখ করা হয় কারণ তারা এত ঘনিষ্ঠভাবে যুক্ত। কিন্তু তবুও, আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) হারুনকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ফেরাউনকে সতর্ক করতে এবং ইসরায়েলের সন্তানদের পথনির্দেশ করার জন্য নবুওয়তের জন্য নির্বাচন করেছিলেন এবং নির্ধারণ করেছিলেন।
                    </p>

                    <p className="mb-4">
                        <strong>অনেক বছর এগিয়ে যাওয়া, <span className="text-amber-600 dark:text-amber-500">আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) মুসাকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ফেরাউন এবং তার নেতাদের সাথে দেখা করতে এবং ইসরায়েলের লোকদের মুক্তির জন্য মধ্যস্থতা করার নির্দেশ দিয়েছিলেন।</span></strong> নবী মুসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) উদ্বিগ্ন ছিলেন। তিনি অনুভব করেছিলেন যে তার বাক্প্রতিবন্ধকতা ফেরাউন এবং অন্যান্য নেতাদের সাথে তার সাক্ষাতকে নেতিবাচকভাবে প্রভাবিত করবে। তার ভাই হারুন (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>), অন্যদিকে, একজন বাগ্মী বক্তা ছিলেন, তাই মুসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আল্লাহকে (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) অনুরোধ করেছিলেন হারুনকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার সহায়ক হিসাবে নিয়োগ করতে।
                    </p>

                    <p className="mb-4">
                        <span className="text-amber-600 dark:text-amber-500"><strong>নবী মুসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</strong></span> নিম্নলিখিত দুআ করেছিলেন:
                    </p>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                قَالَ رَبِّ ٱشۡرَحۡ لِي صَدۡرِي وَيَسِّرۡ لِيٓ أَمۡرِي وَٱحۡلُلۡ عُقۡدَةٗ مِّن لِّسَانِي يَفۡقَهُواْ قَوۡلِي وَٱجۡعَل لِّي وَزِيرٗا مِّنۡ أَهۡلِي هَٰرُونَ أَخِي ٱشۡدُدۡ بِهِۦٓ أَزۡرِي وَأَشۡرِكۡهُ فِيٓ أَمۡرِي كَيۡ نُسَبِّحَكَ كَثِيرٗا وَنَذۡكُرَكَ كَثِيرًا إِنَّكَ كُنتَ بِنَا بَصِيرٗا
                            </p>
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>রোমানীকরণ:</strong> Qaala Rabbish rah lee sadree (25) Wa yassir leee amree (26) Wahlul 'uqdatan milli saanee (27) Yafqahoo qawlee (28) Waj'al lee wazeeran min ahlee (29) Haaroona akhee (30) Ushdud biheee azree (31) Wa ashrik hu feee amree (32) Kai nusabbihaka kaseeraa (33) Wa nazkuraka kaseeraa (34) Innaka kunta binaa baseeraa (35)
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>বাংলা অনুবাদ:</strong> "[মুসা] বলেছিলেন, 'আমার রব, আমার জন্য আমার বক্ষ [আশ্বাস দিয়ে] প্রসারিত করুন (২৫) এবং আমার জন্য আমার কাজ সহজ করুন (২৬) এবং আমার জিহ্বা থেকে গিঁট খুলুন (২৭) যাতে তারা আমার বক্তব্য বুঝতে পারে। (২৮) এবং আমার পরিবার থেকে আমার জন্য একজন মন্ত্রী নিয়োগ করুন – (২৯) হারুন [হারুন], আমার ভাই। (৩০) তার মাধ্যমে আমার শক্তি বৃদ্ধি করুন (৩১) এবং তাকে আমার কাজে অংশীদার করুন (৩২) যাতে আমরা আপনাকে অনেক প্রশংসা করি (৩৩) এবং আপনাকে অনেক স্মরণ করি। (৩৪) নিশ্চয়ই, আপনি আমাদের প্রতি সর্বদা দেখছেন।' (৩৫)"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা তা-হা, ২০:২৫-৩৫)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong className="text-amber-600 dark:text-amber-500">আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) উত্তর দিয়েছিলেন,</strong><br />
                                <em>"তোমার অনুরোধ মঞ্জুর করা হয়েছে, হে মুসা।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা তা-হা আয়াত ৩৬)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        মুসার (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) নম্রতা এই আয়াতের মাধ্যমে দেখানো হয়েছে; তিনি আল্লাহকে (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তার ভাইয়ের সাহায্য নেওয়ার জন্য অনুরোধ করেছিলেন। তিনি হারুনকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এই মিশনে একজন অংশীদার করতে এবং তাকে শক্তি দেওয়ার জন্য অনুরোধ করেছিলেন যাতে তারা একসাথে কাজটি সম্পন্ন করতে পারে।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>অন্য একটি আয়াতে, <span className="text-amber-600 dark:text-amber-500">আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) বলেছেন:</span></strong>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <em>"আমরা অবশ্যই তোমার ভাইয়ের মাধ্যমে তোমাকে শক্তিশালী করব এবং তোমাদের উভয়কে এমন ক্ষমতা দেব যে তারা তোমাদের ক্ষতি করতে পারবে না। আমাদের নিদর্শনগুলির সাহায্যে তোমরা দুজন এবং তোমাদের অনুসারীরা জয়ী হবে।"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-কাসাস, আয়াত ৩৫)</span>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong className="text-amber-600 dark:text-amber-500">আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তারপর দুজন নবীকে ফেরাউনের কাছে যেতে নির্দেশ দিয়েছিলেন এবং বলেছিলেন,</strong><br />
                                        <em>"নিশ্চয়ই, আমরা তোমার রবের রাসূল, তাই আমাদের সাথে ইসরায়েলের সন্তানদের পাঠাও এবং তাদের যন্ত্রণা দিও না। আমরা তোমার রবের কাছ থেকে একটি নিদর্শন নিয়ে এসেছি। এবং যে ব্যক্তি পথনির্দেশ অনুসরণ করে তার উপর শান্তি বর্ষিত হবে। নিশ্চয়ই, আমাদের কাছে প্রকাশ করা হয়েছে যে শাস্তি তাদের উপর হবে যারা মিথ্যা বলে এবং মুখ ফিরিয়ে নেয়।'"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আত-তা-হা, আয়াত ৪৭-৪৮)</span>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/harun/Harun & Musa Talked with Pharaoh.png" 
                                alt="হারুন ও মুসা ফেরাউনের সাথে কথা বলছেন" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        নবী মুসার (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) গল্প যেমন বলা হয়েছে, তিনি এবং হারুন (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) উভয়ই ফেরাউনের সাথে একটি সাক্ষাত পেয়েছিলেন। যাইহোক, কথোপকথনটি যেমন তারা আশা করেছিল তা ঘটেনি — ইসরায়েলের সন্তানদের মুক্তি দেওয়ার পরিবর্তে, ফেরাউন মুসাকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) একজন জাদুকর হিসাবে লেবেল করেছিলেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/harun/Musa & Magician.png" 
                                alt="মুসা ও জাদুকর" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                পরবর্তীতে, ফেরাউন মুসার (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এবং বেশ কয়েকজন বিখ্যাত জাদুকরের মধ্যে একটি প্রতিযোগিতার আয়োজন করেছিলেন তাকে অপমান করার এবং লজ্জিত করার চেষ্টায়। <strong>যাইহোক, মুসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) <span className="text-amber-600 dark:text-amber-500">বিজয়ী হয়েছিলেন।</span></strong>
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        অপমানিত এবং হুমকির সম্মুখীন হয়ে, ফেরাউন ইসরায়েলীদের উপর নিষ্ঠুর নিপীড়ন চালিয়েছিল। তিনি তার সেনাবাহিনীকে নির্দেশ দিয়েছিলেন ইসরায়েলীদের পুত্রদের হত্যা করতে, তাদের মহিলাদের ধর্ষণ করতে, এবং যে কেউ প্রতিরোধ করার সাহস করেছিল তাকে কারাগারে বন্দী করতে।
                    </p>

                    <p className="mb-4">
                        মারাত্মক নিপীড়নের মধ্যে, নবী মুসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এবং নবী হারুন (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ইসরায়েলীদের মিশর থেকে বের করে নিয়ে গিয়েছিলেন।
                    </p>

                    <img 
                        src="/images/prophet-stories/harun/Musa Parting the sea.png" 
                        alt="মুসা সমুদ্র বিভক্ত করছেন" 
                        className="w-full h-auto rounded-lg shadow-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        যখন ইসরায়েলীরা একদিকে শক্তিশালী ফেরাউন এবং তার সেনাবাহিনী এবং অন্যদিকে লোহিত সাগরের মধ্যে আটকে পড়েছিল, <strong>আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সমুদ্রকে বিভক্ত করেছিলেন, তাদের নিরাপদে পার হতে দিয়েছিলেন।</strong>
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                <strong>যাইহোক, ফেরাউন এবং তার সেনাবাহিনী যখন অনুসরণ করার চেষ্টা করেছিল, <span className="text-amber-600 dark:text-amber-500">তারা সমুদ্রের জলে নিমজ্জিত এবং ডুবে গিয়েছিল।</span></strong>
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/harun/Pharaoh drowned.png" 
                                alt="ফেরাউন ডুবে যাচ্ছে" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* The Story of the Golden Calf */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">সোনার বাছুর</span>-এর গল্প:
                    </h2>

                    <p className="mb-4">
                        আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ফেরাউনের নিপীড়ন থেকে উদ্ধার সত্ত্বেও, ইসরায়েলের সন্তানরা মিশরে তাদের পুরানো উপায়ে অভ্যস্ত ছিল। যেমন কথায় আছে, "পুরানো অভ্যাস কঠিনভাবে মরে যায়," এবং ফেরাউনের প্রভাব তাদের আত্মায় একটি গুরুতর চিহ্ন রেখেছিল। নবীর অবিরাম সতর্কতা সত্ত্বেও মূর্তি উপাসনা ত্যাগ করতে, তারা মূর্তিপূজার দিকে একটি শক্তিশালী আকর্ষণ অনুভব করেছিল।
                    </p>

                    <p className="mb-4">
                        যখন নবী মুসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছ থেকে দশটি আদেশ গ্রহণের জন্য সিনাই পর্বতে আরোহণ করেছিলেন, নবী হারুন (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ইসরায়েলের সন্তানদের নেতৃত্ব গ্রহণ করেছিলেন। চল্লিশ দিন ধরে, নবী মুসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) অনুপস্থিত ছিলেন।
                    </p>

                    <p className="mb-4">
                        এই অনুপস্থিতির সময়, <strong>একজন বিদ্রোহী অনুসারী যার নাম ছিল সামিরি ক্রমবর্ধমানভাবে অস্থির হয়ে উঠেছিল এবং মন্দের দিকে ঝুঁকেছিল। অবশেষে, <span className="text-amber-600 dark:text-amber-500">তিনি তাদের সমস্ত সোনার গয়না সংগ্রহ করে গলিয়ে একটি ফাঁপা সোনার বাছুর তৈরি করেছিলেন।</span></strong>
                    </p>

                    <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/harun/Golden Calf.png" 
                                alt="সোনার বাছুর" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="mb-4">
                                এই বাছুরটি একটি স্বতন্ত্র উদ্দেশ্যে তৈরি করা হয়েছিল: সামিরি লোকদের ইতিহাস জানত এবং কীভাবে অতীতের অনুরূপ কুসংস্কার তাদের প্রতারিত করেছিল। <strong>এবং তাই, যখন বাতাস বাছুরের মধ্য দিয়ে প্রবাহিত হয়েছিল, এটি একটি অলৌকিক কিছু অনুকরণ করে একটি অদ্ভুত শব্দ তৈরি করেছিল। <span className="text-amber-600 dark:text-amber-500">এবং তাই, অনেক লোক কেবল সোনার বাছুরকে তাদের নতুন দেবতা হিসাবে গ্রহণ করেছিল।</span></strong>
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        নবী হারুন (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) অত্যন্ত দুঃখিত ছিলেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>তিনি তাদের সতর্ক করার চেষ্টা করেছিলেন বলছেন,</strong><br />
                                        <em>"হে আমার লোকেরা, তোমরা কেবল এটির দ্বারা পরীক্ষা করা হচ্ছ, এবং নিশ্চয়ই, তোমার রব সর্বদয়ালু, তাই আমাকে অনুসরণ কর এবং আমার আদেশ মান্য কর।"</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>কিন্তু তারা উত্তর দিয়েছিল,</strong><br />
                                        <em>"মুসা আমাদের কাছে ফিরে না আসা পর্যন্ত আমরা এটির প্রতি নিবেদিত থাকা বন্ধ করব না।"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা তা-হা, আয়াত ৯০-৯১)</span>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/harun/Harun and the angry people.png" 
                                alt="হারুন এবং রাগান্বিত লোকেরা" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        ইসরায়েলীরা এত সহজেই বিভ্রান্ত হয়েছিল যে তারা নবী হারুনকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) হুমকি দিয়েছিল যে যদি তিনি তাদের থামানোর সাহস করেন তবে তাকে হত্যা করবে। নবী হারুন (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) অসহায় ছিলেন।
                    </p>

                    <p className="mb-4">
                        এই বিবরণ বাইবেলের সংস্করণ থেকে আলাদা যেখানে হারুন (হারুনের ইহুদি-খ্রিস্টান নাম) বাছুর তৈরি করার জন্য দায়ী ছিলেন,
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <em>"এবং যখন লোকেরা দেখেছিল যে মুসা পর্বত থেকে নেমে আসতে বিলম্ব করছে, লোকেরা হারুনের কাছে একত্রিত হয়েছিল, এবং তাকে বলেছিল: 'উঠ, আমাদের জন্য একটি দেবতা তৈরি কর যে আমাদের সামনে যাবে; কারণ এই মুসা, যে মানুষ আমাদের মিশর দেশ থেকে বের করে এনেছিল, আমরা জানি না তার কী হয়েছে।'"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">(এক্সোডাস ৩২:১)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        নবী মুসার (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) প্রত্যাবর্তনের পর, তিনি ইসরায়েলীদের সোনার বাছুরের চারপাশে নাচতে এবং উপাসনা করতে দেখে দুঃখজনক দৃশ্যের সম্মুখীন হয়েছিলেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>রাগে ভরে, মুসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তাদের সম্বোধন করে বলেছিলেন,</strong><br />
                                <em>"হে আমার লোকেরা! তোমার রব কি তোমাদের একটি ন্যায্য প্রতিশ্রুতি দেননি? তাহলে কি প্রতিশ্রুতি তোমাদের কাছে দীর্ঘ মনে হয়েছিল? অথবা তোমরা কি চেয়েছিল যে তোমাদের রবের কাছ থেকে ক্রোধ তোমাদের উপর নেমে আসবে, তাই তুমি আমার সাথে তোমার প্রতিশ্রুতি ভেঙেছ (অর্থাৎ আল্লাহতে অবিশ্বাস করে এবং বাছুরের উপাসনা করে)?"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা তা-হা, আয়াত ৮৬)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>তারা পাল্টা বলেছিল,</strong><br />
                                <em>"আমরা আমাদের ইচ্ছায় তোমার সাথে আমাদের প্রতিশ্রুতি ভাঙিনি, কিন্তু আমাদেরকে [ফেরাউনের] লোকদের গয়না থেকে বোঝা বহন করতে বাধ্য করা হয়েছিল, তাই আমরা সেগুলো [আগুনে] ফেলে দিয়েছিলাম, এবং এভাবেই সামিরি ফেলে দিয়েছিল।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা তা-হা, আয়াত ৮৭)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <strong>মুসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তারপর <span className="text-amber-600 dark:text-amber-500">তার ভাইয়ের দিকে তার রাগ ফিরিয়ে নিয়েছিলেন,</span> যাকে তিনি দায়িত্বে রেখেছিলেন।</strong>
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/harun/Musa talked with Harun.png" 
                                alt="মুসা হারুনের সাথে কথা বলছেন" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>তিনি হারুনের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) দাড়ি এবং চুল টেনে ধরেছিলেন এবং তাকে তিরস্কার করেছিলেন:</strong>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <em>"হে হারুন! যখন তুমি তাদের পথভ্রষ্ট হতে দেখেছ তখন কী তোমাকে আটকে রেখেছিল? তুমি কেন এই দুর্নীতির বিরুদ্ধে যুদ্ধ করনি?"</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>হারুন (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) অনুরোধ করেছিলেন:</strong><br />
                                        <em>"হে <span className="text-amber-600 dark:text-amber-500">আমার মায়ের পুত্র</span>! আমার দাড়ি বা আমার মাথার চুল দিয়ে আমাকে ধরো না। লোকেরা আমাকে দুর্বল মনে করেছিল এবং আমাকে হত্যা করতে যাচ্ছিল। তাই শত্রুদের আমাকে নিয়ে আনন্দ করতে দিও না, এবং আমাকে অত্যাচারী লোকদের মধ্যে রাখো না।"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <p className="mb-4">
                        মুসার (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) রাগ কমে গিয়েছিল যখন তিনি তার ভাইয়ের অসহায়ত্ব বুঝতে পেরেছিলেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>মুসা তারপর সামিরিকে প্রশ্ন করেছিলেন,</strong><br />
                                <em>"এবং তোমার কী অবস্থা, হে সামিরি?"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তিনি বলেছিলেন,</strong><br />
                                <em>"আমি যা দেখেছি তারা দেখেনি, তাই আমি রাসূলের ট্র্যাক থেকে এক মুঠো [ধুলো] নিয়েছিলাম এবং ফেলে দিয়েছিলাম, এবং এভাবেই আমার আত্মা আমাকে প্রলুব্ধ করেছিল।"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>মুসা বলেছিলেন,</strong><br />
                                <em>"তাহলে যাও। এবং নিশ্চয়ই, [এই] জীবনে তোমার জন্য [নির্ধারিত] আছে বলতে, 'কোন যোগাযোগ নেই।' এবং নিশ্চয়ই, তোমার একটি অ্যাপয়েন্টমেন্ট [আখিরাতে] আছে যা তুমি রাখতে ব্যর্থ হবে না। এবং তোমার 'দেবতা' দেখ যার প্রতি তুমি নিবেদিত ছিলে। আমরা অবশ্যই এটিকে পুড়িয়ে দেব এবং একটি বিস্ফোরণে সমুদ্রে উড়িয়ে দেব। তোমার দেবতা কেবল আল্লাহ, যার ছাড়া কোন উপাস্য নেই। তিনি সমস্ত কিছুকে জ্ঞানে ঘিরে রেখেছেন।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা তা-হা, আয়াত ৯৫-৯৮)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <strong>সামিরিকে নির্বাসিত করা হয়েছিল এবং <span className="text-amber-600 dark:text-amber-500">একজন বহিষ্কৃত হিসাবে বাস করতে বাধ্য করা হয়েছিল</span></strong>। পরবর্তীতে, মুসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার লোকদের সম্বোধন করেছিলেন, তাদের আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ক্ষমা চাইতে অনুরোধ করেছিলেন।
                    </p>

                    <p className="mb-4">
                        <strong>মুসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ইসরায়েলীদের মধ্যে সত্তরজন প্রবীণকে বেছে নিয়েছিলেন সিনাই পর্বতে ভ্রমণ করার জন্য</strong>, যেখানে তিনি তাদের তাদের গুরুতর অবাধ্যতার জন্য আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ক্ষমা চাইতে নির্দেশ দিয়েছিলেন।
                    </p>

                    <img 
                        src="/images/prophet-stories/harun/70 Elders.png" 
                        alt="৭০ জন প্রবীণ" 
                        className="w-full h-auto rounded-lg shadow-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        এবং তাই আল্লাহ একটি ভয়াবহ শাস্তি পাঠিয়েছিলেন। আকাশ জুড়ে বজ্রপাত দেখা দিয়েছিল যখন মাটি একটি ভূমিকম্পে কেঁপে উঠেছিল। পুরুষরা পড়ে গিয়েছিল, অবিশ্বাসী হিসাবে তাদের জীবন হারিয়ে।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তবুও, নবী মুসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে প্রার্থনা করেছিলেন যে তাদের ক্ষমা করা হবে এবং আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সর্বদয়ালু হওয়ার কারণে, তাদের ক্ষমা করেছিলেন এবং</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <em>"...তোমাদের মৃত্যুর পর তোমাদের পুনরুজ্জীবিত করেছি যাতে তোমরা কৃতজ্ঞ হতে পার।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা বাকারা, আয়াত ৫৬)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong className="text-amber-600 dark:text-amber-500">আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তারপর ঘোষণা করেছিলেন,</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <em>"এবং মুসা তার লোকদের মধ্যে সত্তরজন পুরুষকে আমাদের নিয়োগের জন্য বেছে নিয়েছিলেন। এবং যখন ভূমিকম্প তাদের আক্রমণ করেছিল, তিনি বলেছিলেন, 'আমার রব, যদি আপনি ইচ্ছা করতেন, আপনি তাদের আগে এবং আমাকেও [এছাড়াও] ধ্বংস করতে পারতেন। আপনি কি আমাদের ধ্বংস করবেন যা আমাদের মধ্যে নির্বোধরা করেছে? এটি আপনার পরীক্ষা ছাড়া আর কিছুই নয় যার মাধ্যমে আপনি যাকে ইচ্ছা পথভ্রষ্ট করেন এবং যাকে ইচ্ছা পথনির্দেশ করেন। আপনি আমাদের রক্ষক, তাই আমাদের ক্ষমা করুন এবং আমাদের উপর রহমত করুন; এবং আপনি ক্ষমাকারীদের মধ্যে সর্বোত্তম। এবং এই দুনিয়ায় আমাদের জন্য [যা] ভালো তা নির্ধারণ করুন এবং [এছাড়াও] আখিরাতে; নিশ্চয়ই, আমরা আপনার দিকে ফিরে এসেছি।'<br /><br />
                                [আল্লাহ] বলেছিলেন, 'আমার শাস্তি – আমি যাকে ইচ্ছা করি তাকে আক্রান্ত করি, কিন্তু আমার রহমত সমস্ত কিছুকে ঘিরে রাখে।' তাই আমি এটি [বিশেষভাবে] তাদের জন্য নির্ধারণ করব যারা আমাকে ভয় করে এবং যাকাত দেয় এবং যারা আমাদের আয়াতে বিশ্বাস করে – যারা রাসূল, নিরক্ষর নবীকে অনুসরণ করে, যাকে তারা তাওরাত এবং ইঞ্জিলে লিখিত খুঁজে পায়, যিনি তাদের সঠিক বিষয় নির্দেশ দেন এবং তাদের মন্দ থেকে নিষেধ করেন এবং তাদের জন্য ভালো জিনিস বৈধ করেন এবং তাদের জন্য মন্দ নিষিদ্ধ করেন এবং তাদের বোঝা এবং শেকল থেকে মুক্তি দেন যা তাদের উপর ছিল।<br /><br />
                                তাই যারা তার উপর বিশ্বাস করেছে, তাকে সম্মান করেছে, তাকে সমর্থন করেছে, এবং তার সাথে যা পাঠানো হয়েছিল সেই আলো অনুসরণ করেছে – তারাই হবে সফল।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা তা-হা, আয়াত ৯০-৯১)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Death of Prophet Harun */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">নবী হারুন (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর মৃত্যু
                    </h2>

                    <p className="mb-4">
                        নবী হারুন (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার ভাই মুসার (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আগে মারা গিয়েছিলেন যখন ইসরায়েলীরা, তার লোকেরা, এখনও মরুভূমির মধ্য দিয়ে যাত্রা করছিল।
                    </p>
                </section>

            </div>
        </div>
    )
}
