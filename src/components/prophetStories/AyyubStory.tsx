import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function AyyubStory() {
    return (
        <div className="mb-12 mt-6 md:mt-10">
            {/* Header Image */}
            <div className="w-full mb-8">
                <img 
                    src="/images/prophet-stories/ayyub/the-story-of-prophet-ayyub-as.png" 
                    alt="আইয়ুব (আঃ)-এর গল্প" 
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-10">
                <span className="text-amber-600 dark:text-amber-500">নবী আইয়ুব (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর গল্প
            </h1>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6 md:space-y-8">
                
                {/* Introduction */}
                <section className="my-8 md:my-12">
                    <p className="mb-4">
                        কুরআন নবী আইয়ুবের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) গল্প উল্লেখ করে, যা বাইবেলের জবের বিবরণের আরবি নাম।
                    </p>
                </section>

                {/* Family Tree */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">নবী আইয়ুবের</span> বংশবৃক্ষ
                    </h2>

                    <p className="mb-4">
                        নবী আইয়ুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ছিলেন নবী ইব্রাহিমের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বংশধর। কিছু ইতিহাসবিদ বিশ্বাস করেন যে আইয়ুবের মা ছিলেন নবী লুতের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) কন্যা। তার স্ত্রী, নবী ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সরাসরি বংশধর, নাম ছিল রহমা। একসাথে, তারা রোমে বাস করতেন এবং চৌদ্দ সন্তান দিয়ে আশীর্বাদপ্রাপ্ত হয়েছিলেন।
                    </p>

                    <img 
                        src="/images/prophet-stories/ayyub/Family.png" 
                        alt="নবী আইয়ুবের বংশবৃক্ষ" 
                        className="w-full h-auto rounded-lg shadow-lg my-6"
                    />

                    <p className="mb-4">
                        সর্বশক্তিমান আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তার কিতাবে বলেছেন,
                    </p>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                ٱلَّذِينَ ءَامَنُواْ وَلَمۡ يَلۡبِسُوٓاْ إِيمَٰنَهُم بِظُلۡمٍ أُوْلَـٰٓئِكَ لَهُمُ ٱلۡأَمۡنُ وَهُم مُّهۡتَدُونَ وَتِلۡكَ حُجَّتُنَآ ءَاتَيۡنَٰهَآ إِبۡرَٰهِيمَ عَلَىٰ قَوۡمِهِۦۚ نَرۡفَعُ دَرَجَٰتٖ مَّن نَّشَآءُۗ إِنَّ رَبَّكَ حَكِيمٌ عَلِيمٞ وَوَهَبۡنَا لَهُۥٓ إِسۡحَٰقَ وَيَعۡقُوبَۚ كُلًّا هَدَيۡنَاۚ وَنُوحًا هَدَيۡنَا مِن قَبۡلُۖ وَمِن ذُرِّيَّتِهِۦ دَاوُۥدَ وَسُلَيۡمَٰنَ وَأَيُّوبَ وَيُوسُفَ وَمُوسَىٰ وَهَٰرُونَۚ وَكَذَٰلِكَ نَجۡزِي ٱلۡمُحۡسِنِينَ
                            </p>
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>রোমানীকরণ:</strong> Allazeena aamanoo wa lam yalbisooo eemaanahum bizulmin ulaaa'ika lahumul amnu wa hum muhtadoon (section 9) (82) Wa tilka hujjatunaaa aatainaahaaa Ibraaheema 'alaa qawmih; narfa'u darajaatim man nashaaa'; inna Rabbaka Hakeemun 'Aleem (83) Wa wahabnaa lahoo ishaaqa wa ya'qoob; kullan hadainaa; wa Noohan hadainaa min qablu wa min zurriyyatihee Daawooda wa Sulaimaana wa Ayyooba wa Yoosufa wa Moosaa wa Haaroon; wa kazaalika najzil muhsineen (84)
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>বাংলা অনুবাদ:</strong> "যারা বিশ্বাস করেছিল এবং তাদের বিশ্বাসকে অন্যায়ের সাথে মিশ্রিত করেনি তাদের জন্য নিরাপত্তা আছে, এবং তারাই সঠিক পথে পরিচালিত হয়েছে।' (৮২) এটি ছিল আমাদের যুক্তি যা আমরা ইব্রাহিমকে তার লোকদের বিরুদ্ধে দিয়েছিলাম। আমরা যাকে ইচ্ছা করি মর্যাদায় উন্নীত করি। নিশ্চয়ই তোমার রব সর্বজ্ঞ, সর্বজ্ঞ। (৮৩) এবং আমরা ইব্রাহিমকে (সন্তান) ইসহাক (আইজ্যাক) এবং ইয়াকুব (জ্যাকব) দান করেছিলাম এবং তাদের প্রত্যেককে আমরা সঠিক পথে পরিচালিত করেছিলাম যেমন আমরা আগে নূহকে সঠিক পথে পরিচালিত করেছিলাম; এবং (তার বংশধরদের মধ্যে আমরা পরিচালিত করেছিলাম) দাউদ (ডেভিড) এবং সুলাইমান (সলোমন), আইয়ুব (জব), ইউসুফ (জোসেফ), মুসা (মোজেস) এবং হারুন (আরন)। এভাবে আমরা ভালো কাজকারীদের পুরস্কৃত করি। (৮৪)"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আন'আম ৬:৮২-৮৪)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        আইয়ুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ছিলেন একজন নবী যিনি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) দ্বারা অত্যন্ত আশীর্বাদপ্রাপ্ত ছিলেন — তিনি শক্তিশালী এবং সুস্থ ছিলেন, বড় জমির প্লট ছিল, প্রচুর গবাদি পশু ছিল, এবং একটি ধার্মিক এবং সুন্দর পরিবার ছিল। তিনি ছিলেন একজন সম্প্রদায়ের নেতা যিনি অত্যন্ত সম্মানিত এবং তার লোকদের দ্বারা প্রিয় ছিলেন। <strong>তার মর্যাদা এবং সম্পদ সত্ত্বেও, আইয়ুব কখনই অহংকারী ছিলেন না; তিনি সর্বদা নম্র ছিলেন।</strong> তিনি সহজেই প্রয়োজনে থাকা লোকদের সাহায্য করতেন এবং সর্বদা আল্লাহকে (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ধন্যবাদ জানাতেন এবং প্রশংসা করতেন যা তিনি আশীর্বাদপ্রাপ্ত হয়েছিলেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>একদিন, স্বর্গে উচ্চে, ফেরেশতারা পৃথিবীতে বসবাসকারী মানুষের মধ্যে সেরা সম্পর্কে আলোচনা করতে শুরু করেছিল। তাদের মধ্যে একজন ফেরেশতা বলেছিলেন,</strong>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <em><span className="text-amber-600 dark:text-amber-500">"আজ পৃথিবীতে সেরা সৃষ্টি হল আইয়ুব,</span> একজন মহৎ চরিত্রের মানুষ যিনি মহান ধৈর্য প্রদর্শন করেন এবং সর্বদা তার উদার রবকে স্মরণ করেন। তিনি আল্লাহর উপাসকদের জন্য একটি চমৎকার মডেল। বিনিময়ে, তার রব তাকে দীর্ঘ জীবন এবং প্রচুর চাকর দিয়ে আশীর্বাদ করেছেন; প্রয়োজনে থাকা এবং দরিদ্ররা তার ভালো ভাগ্যে অংশ নেয় — তিনি দরিদ্রদের খাওয়ান এবং পোশাক দেন এবং দাসদের মুক্ত করার জন্য কিনেন। তিনি যারা তার দান গ্রহণ করে তাদের অনুভব করায় যেন তারা তাকে অনুগ্রহ করছে — এতই দয়ালু এবং নম্র তিনি।"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/ayyub/Angels Discussion.png" 
                                alt="ফেরেশতাদের আলোচনা" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Shaitan's Plot */}
                <section className="my-8 md:my-12">
                    <p className="mb-4">
                        <strong>শয়তান (ইবলিস), যিনি কাছে ছিলেন, আলোচনা শুনেছিলেন এবং খুব রাগান্বিত হয়েছিলেন।</strong> তিনি অবিলম্বে আইয়ুবকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) উপাসনা থেকে দূরে সরানোর জন্য ষড়যন্ত্র করতে শুরু করেছিলেন। তিনি আইয়ুবের কাছে জীবনের অনেক আনন্দ সম্পর্কে মন্দ চিন্তা ফিসফিস করেছিলেন যা আইয়ুবের মতো একজন মানুষ সহজেই উপভোগ করতে পারে, কিন্তু নবী ছিলেন আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) আন্তরিক বান্দা এবং সহজেই বিচলিত হননি — এটি ইবলিসকে আরও রাগান্বিত করেছিল।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/ayyub/Satan.png" 
                                alt="শয়তান" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                ইবলিস আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে গিয়েছিলেন এবং তাকে জানিয়েছিলেন যে আইয়ুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার আন্তরিক বান্দা ছিলেন না এবং কেবল তার সমস্ত সম্পদ হারানোর ভয়ে তাকে মহিমান্বিত করছিলেন।
                            </p>

                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>তিনি, ইবলিস, প্রস্তাব করেছিলেন,</strong><br />
                                        <em>"<span className="text-amber-600 dark:text-amber-500">যদি আপনি তার সম্পদ সরিয়ে দেন</span> তাহলে আপনি দেখবেন যে তার জিহ্বা আর আপনার নাম উল্লেখ করবে না এবং তার প্রার্থনা বন্ধ হয়ে যাবে।"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <p className="mb-4">
                        আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>), সর্বজ্ঞ, ইবলিসকে বিশ্বাস করেননি, কারণ তিনি জানতেন যে আইয়ুব ছিলেন তার সবচেয়ে আন্তরিক বিশ্বাসীদের মধ্যে একজন এবং তিনি কেবল পার্থিব সম্পদের জন্য তার রবের উপাসনা করতেন না। কিন্তু তিনি ইবলিসকে তার অনুগত বান্দার পরম আন্তরিকতা দেখানোর জন্য আইয়ুবকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) পরীক্ষা করতে সম্মত হয়েছিলেন। অত্যধিক আনন্দিত হয়ে, শয়তান নবী আইয়ুবের সম্পদ ধ্বংস করার জন্য বের হয়েছিল।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Iblis Wrecks Havoc */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        ইবলিস <span className="text-amber-600 dark:text-amber-500">আইয়ুবের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) জীবনে</span> ধ্বংস সৃষ্টি করে:
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                সময়ের সাথে সাথে, নবী আইয়ুবের সম্পদ হ্রাস পেতে শুরু করেছিল — তার জমি, গবাদি পশু, চাকর এবং টাকা ধীরে ধীরে তার কাছ থেকে সরে যাচ্ছিল যতক্ষণ না তিনি কিছুই না রেখে গিয়েছিলেন।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/ayyub/Livestock.png" 
                                alt="গবাদি পশু" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>আইয়ুবের পরীক্ষায় অত্যন্ত সন্তুষ্ট হয়ে, ইবলিস, একজন জ্ঞানী বৃদ্ধ ব্যক্তির ছদ্মবেশে, নবীর কাছে এসেছিলেন এবং বলেছিলেন,</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <em>"তোমার সমস্ত সম্পদ হারিয়ে গেছে, কিছু লোক বলে যে এটি কারণ তুমি খুব বেশি দান করেছ এবং তুমি আল্লাহর কাছে তোমার অবিরাম প্রার্থনা দিয়ে তোমার সময় নষ্ট করছ। অন্যরা বলে যে আল্লাহ তোমার শত্রুদের খুশি করার জন্য তোমার উপর এটি এনেছেন। যদি আল্লাহর ক্ষতি প্রতিরোধ করার ক্ষমতা থাকত, তাহলে তিনি তোমার সম্পদ রক্ষা করতেন।"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>আইয়ুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) উত্তর দিয়েছিলেন,</strong><br />
                                <em>"আল্লাহ যাকে ইচ্ছা দেন, এবং আল্লাহ যার কাছ থেকে ইচ্ছা নেন। এবং আমার কাছে থাকা সমস্ত সম্পদ আল্লাহর, তাই তার আমার কাছ থেকে এটি ফিরিয়ে নেওয়ার সম্পূর্ণ কর্তৃত্ব আছে।"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mt-4">
                                আইয়ুব তারপর ঘুরে দাঁড়িয়েছিলেন এবং আল্লাহকে (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ধন্যবাদ জানাতে এবং প্রশংসা করতে থাকেন।
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Children's Death */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/ayyub/Satan.png" 
                                alt="শয়তান" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>বরং হতাশ বোধ করে, ইবলিস আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে ফিরে গিয়েছিলেন এবং বলেছিলেন,</strong>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <em>"আমি আইয়ুবের সমস্ত সম্পত্তি ছিনিয়ে নিয়েছি, কিন্তু তিনি এখনও আপনার কাছে কৃতজ্ঞ। যাইহোক, তিনি কেবল তার হতাশা লুকিয়ে রাখছেন। <span className="text-amber-600 dark:text-amber-500">একজন পিতামাতার সত্যিকারের পরীক্ষা হল তার সন্তানদের মাধ্যমে। আপনি দেখবেন কীভাবে আইয়ুব আপনাকে প্রত্যাখ্যান করবেন।"</span></em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mt-4">
                                        আল্লাহ এখনও জানতেন যে আইয়ুবের বিশ্বাস এবং তার রবের প্রতি ভালোবাসা কমবে না, কিন্তু তিনি আইয়ুবকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আরও পরীক্ষা করতে সম্মত হয়েছিলেন।
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <p className="mb-4">
                        শীঘ্রই, যে ভবনে আইয়ুবের সন্তানরা বাস করত তা ধ্বংস হয়ে গিয়েছিল, তার চৌদ্দটি তরুণ, সুন্দর সন্তানকে হত্যা করেছিল।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>ইবলিস আবার একজন সহানুভূতিশীল দর্শকের ছদ্মবেশে আইয়ুবের কাছে এসেছিলেন এবং দুঃখের সাথে মন্তব্য করেছিলেন,</strong>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <em>"যে পরিস্থিতিতে তোমার সন্তানরা মারা গিয়েছিল তা দুঃখজনক ছিল। নিশ্চয়ই, তোমার রব তোমার সমস্ত প্রার্থনার জন্য তোমাকে সঠিকভাবে পুরস্কৃত করছেন না।"</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>আইয়ুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) উত্তর দিয়েছিলেন,</strong><br />
                                        <em>"আল্লাহ আমাকে যা আমার জন্য ভালো তা দেন, এবং আল্লাহ যা দেখেন যে তার এবং আমার জন্য অপ্রীতিকর তা সরিয়ে নেন। আল্লাহ দেখেন যে এই সমস্ত সন্তান আমার জন্য একটি শক্তিশালী পরীক্ষা এবং বিচার হতে পারে, তাই আল্লাহ তাদের আমার কাছ থেকে নিয়ে গেছেন। একটি জিনিস আমার জন্য উপকারী বা ক্ষতিকর হোক না কেন, আমি আমার বিশ্বাসে অটল থাকব এবং আমার সৃষ্টিকর্তার কাছে কৃতজ্ঞ থাকব।"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/ayyub/Building.png" 
                                alt="ভবন" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Health Deterioration */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/ayyub/Satan with Image above.png" 
                                alt="শয়তান ছবির সাথে" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>ইবলিস আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে দৌড়ে গিয়েছিলেন এবং বলেছিলেন,</strong>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <em>"হে আমার রব, আইয়ুবের সম্পদ চলে গেছে, তার সন্তানরা মারা গেছে, এবং তিনি এখনও শরীরে সুস্থ, এবং যতক্ষণ তিনি ভালো স্বাস্থ্য উপভোগ করেন, তিনি তার সম্পদ ফিরে পাওয়ার এবং আরও সন্তান উৎপাদনের আশায় আপনাকে উপাসনা করতে থাকবেন। আমাকে তার শরীরের উপর কর্তৃত্ব দিন যাতে আমি এটিকে দুর্বল করতে পারি। তিনি অবশ্যই আপনাকে উপাসনা করতে অবহেলা করবেন এবং এইভাবে অবাধ্য হয়ে উঠবেন।"</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তার অনুরোধ মঞ্জুর করেছিলেন কিন্তু নির্দেশ দিয়েছিলেন,</strong><br />
                                        <em>"আমি তোমাকে তার শরীরের উপর কর্তৃত্ব দিচ্ছি কিন্তু তার আত্মা, বুদ্ধি বা হৃদয়ের উপর নয়, কারণ এই স্থানগুলিতে আমার এবং আমার ধর্মের জ্ঞান রয়েছে।"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                শীঘ্রই, আইয়ুবের স্বাস্থ্য খারাপ হতে শুরু করেছিল। তিনি এত অসুস্থ ছিলেন যে তার শরীরের ত্বক পড়ে যাচ্ছিল, তার পেশী এবং হাড় প্রকাশ করছিল। কিন্তু যেমন আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) নির্দেশ দিয়েছিলেন, তার শরীরে যে দুটি অঙ্গ কাজ করছিল তা হল তার হৃদয় এবং জিহ্বা — যা তিনি আল্লাহকে মহিমান্বিত করতে ব্যবহার করতে থাকেন। <strong>আইয়ুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) গুরুতর ব্যথা সহ্য করেছিলেন, কিন্তু তিনি কখনই নিজেকে অভিযোগ করতে বা আল্লাহর প্রতি তার বিশ্বাসে বিচলিত হতে দেননি।</strong>
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/ayyub/Hand skin.png" 
                                alt="হাতের ত্বক" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        শহরের লোকেরা আলোচনা করতে শুরু করেছিল, <em>যদি আইয়ুব একজন ভালো ব্যক্তি হতেন, আল্লাহ তার সাথে এটি করতেন না।</em> এবং অবশেষে, তারা তাকে পরিত্যাগ করেছিল — তার আত্মীয়, বন্ধু এবং যারা আইয়ুবকে ভালোবাসতেন এবং সম্মান করতেন তারা সবাই তাকে পরিত্যাগ করেছিলেন, রহমা, তার প্রিয় স্ত্রী ছাড়া।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Prophet Ayyub's Love for Allah */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        নবী আইয়ুবের <span className="text-amber-600 dark:text-amber-500">আল্লাহর প্রতি ভালোবাসা:</span>
                    </h2>

                    <p className="mb-4">
                        অনেক বছর ধরে, আইয়ুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার অবস্থার মধ্য দিয়ে ভোগ করতে থাকেন, তার পাশে কেবল রহমা ছিলেন তাকে যত্ন নেওয়ার জন্য। তাদের কোন টাকা ছিল না এবং কোন আয় ছিল না, তাই তার স্ত্রী তাদের জন্য সরবরাহ করার জন্য একটি কাজ নিয়েছিলেন। কিন্তু শহরের লোকেরা রহমাকে দীর্ঘ সময় কাজ করতে দেয়নি, কারণ তারা ভয় করেছিল যে তিনি তার স্বামীর মতো একই অসুস্থতায় তাদের আক্রান্ত করবেন। আইয়ুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>), এদিকে, এই ব্যথা এবং কষ্ট সহ্য করার জন্য আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে শক্তি এবং ধৈর্য দেওয়ার জন্য প্রার্থনা করতে থাকেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>একদিন, ইবলিস একজন পুরুষের রূপে রহমার সামনে উপস্থিত হয়েছিলেন এবং তাকে জিজ্ঞাসা করেছিলেন,</strong><br />
                                <em>"তোমার স্বামী কোথায়?"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>প্রায় প্রাণহীন আইয়ুবের দিকে ইশারা করে, রহমা উত্তর দিয়েছিলেন,</strong><br />
                                <em>"সেখানে তিনি, জীবন এবং মৃত্যুর মধ্যে স্থগিত।"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        ইবলিস তারপর তাকে ভালো স্বাস্থ্য, সন্তান এবং সম্পদের আনন্দদায়ক দিনগুলির কথা মনে করিয়ে দিয়েছিলেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>ব্যথা এবং কষ্টের বছরগুলিতে অভিভূত হয়ে, রহমা আইয়ুবের কাছে এসেছিলেন এবং কেঁদেছিলেন,</strong><br />
                                        <em>"হে আইয়ুব, তুমি আল্লাহর নবী এবং রাসূল। তোমার আল্লাহর সাথে সবচেয়ে ঘনিষ্ঠ সম্পর্ক রয়েছে। আল্লাহকে বল যে তিনি তোমাকে এই ক্ষতি থেকে বের করে আনেন যেখানে তুমি আছ!"</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>আইয়ুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) দীর্ঘশ্বাস ফেলেছিলেন এবং উত্তর দিয়েছিলেন,</strong><br />
                                        <em>"শয়তান অবশ্যই তোমার কাছে ফিসফিস করেছে এবং তোমাকে অসন্তুষ্ট করেছে। বলো আমি কতদিন ভালো স্বাস্থ্য এবং সম্পদ উপভোগ করেছি?"</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>তার স্ত্রী উত্তর দিয়েছিলেন,</strong><br />
                                        <em>"আশি বছর বা তার মতো।"</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>তিনি উত্তর দিয়েছিলেন,</strong><br />
                                        <em>"আমি কতদিন এভাবে ভুগছি?"</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>তিনি বলেছিলেন,</strong><br />
                                        <em>"সাত বছর।"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/ayyub/Ayyub Calligraphy.png" 
                                alt="আইয়ুবের ক্যালিগ্রাফি" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        <strong>আইয়ুব তারপর বলেছিলেন,</strong><br />
                        <em><span className="text-amber-600 dark:text-amber-500">"সেক্ষেত্রে আমি আমার রবকে আমার কষ্ট দূর করার জন্য ডাকতে লজ্জিত, কারণ আমি ভালো স্বাস্থ্য এবং প্রচুরতার বছরগুলির চেয়ে বেশি ভোগ করিনি।</span> মনে হচ্ছে তোমার বিশ্বাস দুর্বল হয়ে গেছে, এবং তুমি আল্লাহর ভাগ্যের প্রতি অসন্তুষ্ট। যদি আমি কখনও স্বাস্থ্য ফিরে পাই, আমি শপথ করছি আমি তোমাকে একশো আঘাত দিয়ে শাস্তি দেব! আজ থেকে, আমি তোমার হাত দিয়ে কিছু খাওয়া বা পান করা থেকে নিজেকে নিষিদ্ধ করছি। আমাকে একা ছেড়ে দাও এবং আমার রব আমার সাথে যা খুশি করুক।"</em>
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/ayyub/Prayer Hand.png" 
                                alt="প্রার্থনার হাত" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>অসহায় বোধ করে, আইয়ুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে ফিরে গিয়েছিলেন তার রহমত খুঁজছিলেন।</strong>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <em>নিশ্চয়ই, শয়তান আমাকে কষ্ট (আমার স্বাস্থ্য হারানোর মাধ্যমে) এবং যন্ত্রণা (আমার সম্পদ হারানোর মাধ্যমে) স্পর্শ করেছে! তিনি প্রার্থনা করেছিলেন।</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) অবিলম্বে আইয়ুবের সাহায্যের জন্য হতাশাজনক আহ্বানে সাড়া দিয়েছিলেন। <strong>আল্লাহ বলেছিলেন,</strong><br />
                                        <em>"তোমার পা দিয়ে মাটিতে আঘাত কর: এটি ধোয়ার জন্য এবং ঠান্ডা করার জন্য এবং একটি সতেজ পানীয়ের জন্য একটি ঝরনা।"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <img 
                        src="/images/prophet-stories/ayyub/Spring Water.png" 
                        alt="ঝরনার পানি" 
                        className="w-full h-auto rounded-lg shadow-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        আইয়ুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) অবিলম্বে আল্লাহর আদেশ পালন করেছিলেন। <span className="text-amber-600 dark:text-amber-500">তিনি তার পা দিয়ে মাটিতে আঘাত করেছিলেন, ঠান্ডা পানি তার পায়ে প্রবাহিত হয়েছিল।</span> আদেশ অনুযায়ী, আইয়ুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) পান করেছিলেন এবং পানি ব্যবহার করে তার সমগ্র শরীর ধুয়ে ফেলেছিলেন। অল্প সময়ের মধ্যে, আইয়ুবের ফোস্কা অদৃশ্য হয়ে গিয়েছিল, তার ত্বক সম্পূর্ণরূপে নবায়ন হয়েছিল, এবং তার অভ্যন্তরীণ অঙ্গগুলি কাজ করতে শুরু করেছিল। নিশ্চয়ই, আইয়ুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আল্লাহর অনুগ্রহে সম্পূর্ণরূপে সুস্থ হয়েছিলেন!
                    </p>

                    <p className="mb-4">
                        রহমা, যিনি আর তার স্বামী থেকে দূরে থাকতে পারছিলেন না, বাড়িতে ফিরে এসেছিলেন; তিনি তাদের বাড়িতে প্রবেশ করার সময়, আইয়ুবের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) দ্বারা স্বাগত জানানো হয়েছিল, যাকে তিনি চিনতে পারেননি।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তিনি তাকে জিজ্ঞাসা করেছিলেন,</strong><br />
                                <em>আইয়ুব কোথায়? তুমি কে? তুমি তার সাথে খুব মিল দেখাচ্ছ।</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>তিনি হাসতে হাসতে উত্তর দিয়েছিলেন,</strong><br />
                                <em>"এটি আমি!"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mt-4">
                                অত্যধিক আনন্দিত হয়ে, তিনি অবিলম্বে তাকে আলিঙ্গন করেছিলেন এবং তার রহমতের জন্য আল্লাহকে (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ধন্যবাদ জানিয়েছিলেন।
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/ayyub/Thin Grass.png" 
                                alt="পাতলা ঘাস" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                আইয়ুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার স্বাস্থ্য ফিরে পাওয়ার পর তার স্ত্রীকে একশো আঘাত দিয়ে শাস্তি দেওয়ার তার প্রতিশ্রুতি মনে করেছিলেন। তিনি তার প্রিয় স্ত্রীকে আঘাত করতে চাননি, এবং তিনি আল্লাহর কাছে তার শপথ ভাঙতেও চাননি।
                            </p>

                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>তাই, আল্লাহ, সর্বজ্ঞ, আইয়ুবকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) নির্দেশ দিয়েছিলেন,</strong><br />
                                        <em><span className="text-amber-600 dark:text-amber-500">"তোমার হাতে পাতলা ঘাসের একটি গুচ্ছ নাও</span> এবং এর সাথে তোমার স্ত্রীকে আঘাত কর, এবং তোমার শপথ ভাঙো না।"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <p className="mb-4">
                        আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তারপর আইয়ুবের সম্পদ পুনরুদ্ধার করেছিলেন। তিনি সোনার তৈরি পঙ্গপালের বৃষ্টি পাঠিয়েছিলেন যা আইয়ুবের চারপাশে পড়েছিল। আইয়ুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এই সোনার পঙ্গপাল সংগ্রহ করতে শুরু করেছিলেন,
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাকে জিজ্ঞাসা করেছিলেন,</strong><br />
                                        <em>"হে আইয়ুব! আমি কি তোমাকে খুব ধনী করিনি যে তোমার যা দেখছ তার প্রয়োজন নেই?"</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>আইয়ুব উত্তর দিয়েছিলেন,</strong><br />
                                        <em>"হ্যাঁ, আমার রব! কিন্তু আমি তোমার আশীর্বাদ এড়াতে পারি না।"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/ayyub/Gold Locust.png" 
                                alt="সোনার পঙ্গপাল" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        <strong>আইয়ুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এবং রহমাকেও তাদের পরিবার ফিরিয়ে দেওয়া হয়েছিল।</strong> দম্পতি আটাশটি সুন্দর, সুস্থ সন্তান দিয়ে আশীর্বাদপ্রাপ্ত হয়েছিলেন — চৌদ্দটি মেয়ে এবং চৌদ্দটি ছেলে।
                    </p>

                    <p className="mb-4">
                        নবী আইয়ুবের গল্প হল ধৈর্যের সাথে মিশ্রিত প্রতিকূলতার একটি। যখন সবকিছু ভালো যাচ্ছে তখন আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) একজন বিশ্বস্ত বান্দা হওয়া সহজ, কিন্তু কঠিন সময়ে তার বিশ্বাস কখনই কমেনি, যা তাকে একটি অসাধারণ সত্তা করে তোলে।
                    </p>

                    <p className="mb-4">
                        আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তার বান্দার প্রশংসা করেন, বলছেন,
                    </p>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                إِنَّا وَجَدۡنَٰهُ صَابِرٗاۚ نِّعۡمَ ٱلۡعَبۡدُ إِنَّهُۥٓ أَوَّابٞ
                            </p>
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>রোমানীকরণ:</strong> innaa wajadnaahu saabiraa; ni'mal 'abd; innahooo awwaab
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>বাংলা অনুবাদ:</strong> "...নিশ্চয়ই, আমরা তাকে ধৈর্যশীল পেয়েছি, একটি চমৎকার বান্দা। নিশ্চয়ই, তিনি ছিলেন বারবার [আল্লাহর দিকে] ফিরে আসা।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা সাদ, আয়াত ৪৪)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Quranic Verses */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        কুরআনিক আয়াত <span className="text-amber-600 dark:text-amber-500">আইয়ুব</span> উল্লেখ করে
                    </h2>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>বাংলা অনুবাদ:</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                এবং তাদের সুদ গ্রহণের জন্য যখন তাদের নিষেধ করা হয়েছিল, এবং মানুষের সম্পদ অন্যায়ভাবে ভোগ করার জন্য। এবং আমরা তাদের মধ্যে অবিশ্বাসীদের জন্য একটি যন্ত্রণাদায়ক শাস্তি প্রস্তুত করেছি। সেখানে চিরকাল থাকবে। শাস্তি তাদের জন্য হালকা করা হবে না, এবং তাদেরকেও অবকাশ দেওয়া হবে না। নিশ্চয়ই, আমরা তোমার কাছে, [হে মুহাম্মদ], প্রকাশ করেছি, যেমন আমরা নূহ এবং তার পরের নবীদের কাছে প্রকাশ করেছিলাম। এবং আমরা ইব্রাহিম, ইসমাইল, ইসহাক, ইয়াকুব, বংশধর, ঈসা, আইয়ুব, ইউনুস, হারুন এবং সুলাইমানের কাছে প্রকাশ করেছি, এবং দাউদকে আমরা কিতাব [জবুর] দিয়েছিলাম।
                                <br /><br />
                                <strong>(সূরা নিসা আয়াত ১৬১-১৬৩)</strong>
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>বাংলা অনুবাদ:</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                যারা বিশ্বাস করে এবং তাদের বিশ্বাসকে অন্যায়ের সাথে মিশ্রিত করে না — তাদের জন্য নিরাপত্তা আছে, এবং তারা [সঠিকভাবে] পরিচালিত। এবং এটি ছিল আমাদের [চূড়ান্ত] যুক্তি যা আমরা ইব্রাহিমকে তার লোকদের বিরুদ্ধে দিয়েছিলাম। আমরা যাকে ইচ্ছা করি মর্যাদায় উন্নীত করি। নিশ্চয়ই, তোমার রব প্রজ্ঞাবান এবং সর্বজ্ঞ। এবং আমরা ইব্রাহিম, ইসহাক এবং ইয়াকুবকে দিয়েছিলাম — তাদের সবাইকে [আমরা] পরিচালিত করেছিলাম। এবং নূহ, আমরা আগে পরিচালিত করেছিলাম; এবং তার বংশধরদের মধ্যে, দাউদ এবং সুলাইমান এবং আইয়ুব এবং ইউসুফ এবং মুসা এবং হারুন। এভাবে আমরা ভালো কাজকারীদের পুরস্কৃত করি।
                                <br /><br />
                                <strong>(সূরা আনআম আয়াত ৮২-৮৪)</strong>
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>বাংলা অনুবাদ:</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                এবং [উল্লেখ কর] আইয়ুব, যখন তিনি তার রবকে ডেকেছিলেন, "নিশ্চয়ই, প্রতিকূলতা আমাকে স্পর্শ করেছে, এবং আপনি দয়ালুদের মধ্যে সর্বদয়ালু।" তাই আমরা তার কাছে সাড়া দিয়েছিলাম এবং তাকে যে প্রতিকূলতা আক্রান্ত করেছিল তা সরিয়ে দিয়েছিলাম। এবং আমরা তাকে [ফিরিয়ে] দিয়েছিলাম তার পরিবার এবং তাদের সাথে এর মতো আমাদের কাছ থেকে রহমত এবং [আল্লাহর] উপাসকদের জন্য একটি স্মরণিকা।
                                <br /><br />
                                <strong>(সূরা আম্বিয়া আয়াত ৮৩-৮৪)</strong>
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>বাংলা অনুবাদ:</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                এবং আমাদের বান্দা আইয়ুবকে স্মরণ কর, যখন তিনি তার রবকে ডেকেছিলেন, "নিশ্চয়ই, শয়তান আমাকে কষ্ট এবং যন্ত্রণা দিয়ে স্পর্শ করেছে।" [তাই তাকে বলা হয়েছিল], "তোমার পা দিয়ে [মাটিতে] আঘাত কর; এটি একটি [ঠান্ডা স্নানের জন্য] ঝরনা এবং পানীয়।" এবং আমরা তাকে তার পরিবার এবং একটি [সংখ্যা] দিয়েছিলাম তাদের সাথে আমাদের কাছ থেকে রহমত এবং বোঝার লোকদের জন্য একটি স্মরণিকা। [আমরা বলেছিলাম], "এবং তোমার হাতে একটি [ঘাসের] গুচ্ছ নাও এবং এর সাথে আঘাত কর এবং তোমার শপথ ভাঙো না।" নিশ্চয়ই, আমরা তাকে ধৈর্যশীল পেয়েছি, একটি চমৎকার বান্দা। নিশ্চয়ই, তিনি ছিলেন বারবার [আল্লাহর দিকে] ফিরে আসা। এবং আমাদের বান্দাদের স্মরণ কর, ইব্রাহিম, ইসহাক এবং ইয়াকুব — শক্তি এবং [ধর্মীয়] দৃষ্টির লোক। নিশ্চয়ই, আমরা তাদের একটি একচেটিয়া গুণের জন্য নির্বাচন করেছিলাম: [আখিরাতের] বাড়ির স্মরণ।
                                <br /><br />
                                <strong>(সূরা সাদ আয়াত ৪১-৪৬)</strong>
                            </p>
                        </CardContent>
                    </Card>
                </section>

            </div>
        </div>
    )
}
