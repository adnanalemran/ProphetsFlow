import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function LutStory() {
    return (
        <div className="mb-12 mt-6 md:mt-10">
            {/* Header Image */}
            <div className="w-full mb-8">
                <img 
                    src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/lut/the-story-of-prophet-lut-as.png" 
                    alt="লুত (আঃ)-এর গল্প" 
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-10">
                <span className="text-amber-600 dark:text-amber-500">নবী লুত (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর গল্প
            </h1>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6 md:space-y-8">
                
                {/* Family Tree / Introduction */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/lut/Lut%20Calligraphy.png" 
                                alt="নবী লুতের ক্যালিগ্রাফি" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                নবী লুত, বাইবেলে নবী লট নামে পরিচিত, তার চাচা নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) দ্বারা লালিত-পালিত হয়েছিলেন। নবী লুত (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) ইব্রাহিমের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) বার্তাকে ভালোবাসতেন, সম্মান করতেন এবং বিশ্বাস করতেন এমনকি যখন সবাই তাকে উপহাস করত। নবী ইব্রাহিম, লুতের সাথে, দূরে ভ্রমণ করেছিলেন, স্থল এবং সমুদ্র জুড়ে, ইসলামের ভাঁজে মানুষকে আমন্ত্রণ জানাতে এবং ছড়িয়ে দিতে চেষ্টা করেছিলেন।
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        ইব্রাহিম এবং লুতের ফিলিস্তিনে অভিবাসনের সময়, তারা আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ঐশ্বরিক ফরমান পেয়েছিলেন যে লুতকে সদোমের লোকদের জন্য একজন নবী এবং রাসূল হিসেবে নির্বাচিত করা হয়েছিল। <strong>আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) এই নতুন নবীকে জর্ডান এবং ফিলিস্তিনের সীমান্তে অবস্থিত সদোম শহরে ভ্রমণ করার নির্দেশ দিয়েছিলেন,</strong> যাদের পাপ করেছিল তাদের আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) উপাসনায় ফিরিয়ে আনার মিশন সহ।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                সদোম ছিল একটি সমৃদ্ধ শহর যা অনেক ভ্রমণকারী, ব্যবসায়ী এবং ব্যবসায়ীদের বাণিজ্যের জন্য পরিদর্শন করত। যাইহোক, সদোম ছিল সেই সময়ের সবচেয়ে দুর্নীতিগ্রস্ত শহর যেখানে সর্বোচ্চ অপরাধমূলক কার্যক্রম ছিল। সদোমের মধ্য দিয়ে যাওয়া ভ্রমণকারীরা প্রায়শই আটকানো হত এবং তাদের সম্পত্তি লুট করা হত, এবং কখনও কখনও নির্দয়ভাবে হত্যা করা হত। <strong>কিন্তু, এই দুর্নীতিগ্রস্ত জাতি দ্বারা সংঘটিত সবচেয়ে কুখ্যাত মন্দ কাজ ছিল সমকামিতা।</strong>
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/lut/Homo%20&%20murdered.png" 
                                alt="সমকামিতা এবং হত্যা" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Introduction of Homosexuality */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">সমকামিতার</span> পরিচিতি
                    </h2>

                    <p className="mb-4">
                        <span className="text-amber-600 dark:text-amber-500">সমকামিতা লুতের লোকদের দ্বারা বিশ্বে প্রবর্তিত হয়েছিল — মানব ইতিহাসে সদোমের আগে কেউ কখনও সমকামিতা অনুভব বা অনুশীলন করেনি।</span> এই লজ্জাজনক অনুশীলন এই জাতির মধ্যে আদর্শ ছিল, এবং সমগ্র জনসংখ্যা এতে জড়িত ছিল। তারা তাদের আচরণে অত্যন্ত গর্বিত ছিল, এ সম্পর্কে প্রকাশ্যে কথা বলত, এবং প্রকাশ্যে এই অনৈতিক আচরণে জড়িত হত।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/lut/Sodom%20market.png" 
                                alt="সদোম বাজার" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                নবুওয়ত এবং তার নতুন মিশনে সন্তুষ্ট হয়ে, <strong>নবী লুত শীঘ্রই সদোমে বসতি স্থাপন করেছিলেন এবং তার লোকদের ইসলামের ভাঁজে আনার উপায় উদ্ভাবন করতে শুরু করেছিলেন।</strong> তিনি ভালোভাবে জানতেন যে তার জাতি ছিল সেই সময়ের সবচেয়ে দুর্নীতিগ্রস্ত জাতি; কিন্তু তিনি দৃঢ় বিশ্বাস ধারণ করেছিলেন এবং আশা করেছিলেন এবং প্রার্থনা করেছিলেন যে তারা শীঘ্রই তাদের পথের ত্রুটি দেখবে এবং আল্লাহর পথে প্রবেশ করবে।
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>শীঘ্রই নবী লুত শহরের পুরুষদের কাছে গিয়েছিলেন এবং তাদের রবের কথা মনে করিয়ে দিয়েছিলেন:</strong><br />
                                        <em>"তোমরা কি আল্লাহকে ভয় করবে না এবং তাঁর আনুগত্য করবে না? নিশ্চয়ই! আমি তোমাদের কাছে একজন বিশ্বস্ত রাসূল। তাই আল্লাহকে ভয় কর, তাঁর প্রতি তোমার কর্তব্য পালন কর, এবং আমার আনুগত্য কর।"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আশ-শু'আরা, আয়াত ১৬০-১৬৩)</span>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        বিভ্রান্ত হয়ে, শহরের পুরুষরা নিজেদের মধ্যে আলোচনা করতে শুরু করেছিল:<br />
                                        <em>"এই ব্যক্তি আমাদের শহরে প্রবেশ করেছে, এবং আমাদের যা করছি তা বন্ধ করতে বলছে? স্পষ্টতই, তিনি এর থেকে কিছু লাভ করছেন!"</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        নবী লুত উত্তর দিয়েছিলেন:<br />
                                        <em>"আমি এর জন্য তোমাদের কাছে কোন পুরস্কার চাই না। <span className="text-amber-600 dark:text-amber-500">আমার পুরস্কার কেবল বিশ্বজগতের রবের কাছ থেকে।"</span></em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>নবী লুত তারপর সমকামিতার বিষয়টি উত্থাপন করেছিলেন এবং তাদের জানিয়েছিলেন যে এটি সত্যিই একটি অনৈতিক অনুশীলন। তিনি বলেছিলেন:</strong><br />
                                        <em>"তোমরা কি বিশ্বজগতের পুরুষদের কাছে যাও, এবং তোমাদের রব তোমাদের জন্য যে স্ত্রীদের সৃষ্টি করেছেন তাদের ছেড়ে দাও? না, তোমরা সীমালঙ্ঘনকারী একটি জাতি!"</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>নবী লুত তারপর তার লোকদের জানিয়েছিলেন যে তিনি কখনই এই ধরনের অনুশীলনের অংশ হতে সম্মত হবেন না, এবং তাদের আল্লাহর কাছ থেকে কঠোর শাস্তির সতর্কতা দিয়েছিলেন। তিনি বলেছিলেন:</strong><br />
                                        <em className="text-amber-600 dark:text-amber-500">"নিশ্চয়ই, আমি তাদের মধ্যে যারা তোমাদের কাজ (সদোমের) তীব্র রাগ এবং ক্রোধের সাথে অস্বীকার করে।"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/lut/No%20Homosexuality.png" 
                                alt="সমকামিতা নয়" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        তিনি তাদের আরও সতর্ক করেছিলেন যে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তাদের জন্য যে কঠোর শাস্তি রেখেছিলেন যদি তারা তাদের পথ অব্যাহত রাখে। সদোমের পুরুষ এবং মহিলারা লুতের বক্তব্যে খুব রাগান্বিত হয়েছিল।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>তারা তার শহর থেকে লুতকে তাড়িয়ে দেওয়ার ষড়যন্ত্র করেছিল, হুমকি দিয়ে,</strong><br />
                                <em>"যদি তুমি বিরত না হও, হে লুত! নিশ্চয়ই, তুমি তাদের মধ্যে একজন হবে যাদের তাড়িয়ে দেওয়া হবে!"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4 text-amber-600 dark:text-amber-500">
                        <span>নবী লুতের এই বার্তা কুরআনে বর্ণিত হয়েছে,</span>
                    </p>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardHeader>
                            <CardTitle className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                كَذَّبَتۡ قَوۡمُ لُوطٍ ٱلۡمُرۡسَلِينَ إِذۡ قَالَ لَهُمۡ أَخُوهُمۡ لُوطٌ أَلَا تَتَّقُونَ إِنِّي لَكُمۡ رَسُولٌ أَمِينٞ فَٱتَّقُواْ ٱللَّهَ وَأَطِيعُونِ وَمَآ أَسۡـَٔلُكُمۡ عَلَيۡهِ مِنۡ أَجۡرٍۖ إِنۡ أَجۡرِيَ إِلَّا عَلَىٰ رَبِّ ٱلۡعَٰلَمِينَ أَتَأۡتُونَ ٱلذُّكۡرَانَ مِنَ ٱلۡعَٰلَمِينَ وَتَذَرُونَ مَا خَلَقَ لَكُمۡ رَبُّكُم مِّنۡ أَزۡوَٰجِكُمۚ بَلۡ أَنتُمۡ قَوۡمٌ عَادُونَ قَالُواْ لَئِن لَّمۡ تَنتَهِ يَٰلُوطُ لَتَكُونَنَّ مِنَ ٱلۡمُخۡرَجِينَ
                            </CardTitle>
                            <CardDescription className="text-sm md:text-base font-semibold">রোমানীকরণ:</CardDescription>
                            <CardAction className="text-xs md:text-sm text-emerald-700 dark:text-emerald-400">(সূরা আশ-শু'আরা, আয়াত ১৬০-১৬৭)</CardAction>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm md:text-base leading-relaxed">
                                "লুতের লোকেরা রাসূলদের প্রত্যাখ্যান করেছিল, তাদের মিথ্যাবাদী বলে চিহ্নিত করেছিল। (১৬০) স্মরণ কর, যখন তাদের ভাই লুত তাদের বলেছিলেন: 'তোমাদের কি ভয় নেই? (১৬১) আমি তোমাদের কাছে একজন বিশ্বস্ত রাসূল। (১৬২) তাই আল্লাহকে ভয় কর এবং আমার আনুগত্য কর। (১৬৩) আমি তোমাদের কাছে কোন পুরস্কার চাই না। আমার পুরস্কার কেবল বিশ্বজগতের রবের কাছ থেকে। (১৬৪) কী, সমস্ত সৃষ্টির মধ্যে তোমরা কি পুরুষদের কাছে যাবে (ব্যভিচার করতে), (১৬৫) আল্লাহ তোমাদের জন্য যে সঙ্গীদের সৃষ্টি করেছেন তাদের ছেড়ে দিয়ে। না, তোমরা এমন একটি জাতি যারা সমস্ত সীমা লঙ্ঘন করেছে।' (১৬৬) তারা বলেছিল: 'হে লুত! যদি তুমি বিরত না হও, তুমি তাদের মধ্যে একজন হবে যাদের (আমাদের শহর থেকে) বহিষ্কার করা হবে।' (১৬৭)"
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Prophet Lut's Distress */}
                <section className="my-8 md:my-12">
                    <p className="mb-4">
                        <span className="text-amber-600 dark:text-amber-500"><strong>নবী লুত (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) গভীরভাবে দুঃখিত ছিলেন।</strong></span> ইসলামের দিকে লোকদের পথনির্দেশ করার জন্য বছরের পর বছর নিরলস প্রচেষ্টার পর, একজনও ব্যক্তি বিশ্বাস গ্রহণ করেনি।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>অপরিমেয় দুর্দশা সহ্য করে এবং ধৈর্য সহকারে তার লোকদের বাঁচানোর জন্য চেষ্টা করে, তিনি তাদের তিরস্কার করেছিলেন:</strong><br />
                                <em>"তোমরা এমন ঘৃণ্য কাজ কর যা বিশ্বে তোমাদের আগে কেউ কখনও করেনি। কী! তোমরা কি পুরুষদের কাছে যাও (তোমাদের কামনা পূরণ করতে), মহাসড়কে ডাকাতি কর, এবং তোমাদের সমাবেশে মন্দ কাজ কর?"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আনকাবুত, আয়াত ২৯)</span><br /><br />
                                তারা জানত যে তারা ভুল ছিল, কিন্তু তারা তার বার্তাকে তুচ্ছ করতে অব্যাহত রেখেছিল, প্রকাশ্যে তাকে উপহাস করছিল,<br />
                                <em>"আমাদের কাছে আল্লাহর শাস্তি নিয়ে এস, যদি তুমি সত্যবাদী হও"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আনকাবুত, আয়াত ৩০)</span><br /><br />
                                এবং তাই, সদোমে একমাত্র পরিবার যারা আল্লাহকে (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) প্রশংসা করত তা ছিল নবী লুতের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>)। যখন তিনি এবং তার কন্যারাও তাদের ধর্মে অবিচল ছিলেন, তার স্ত্রী অবিশ্বাসের পথ বেছে নিয়েছিলেন। <span className="text-amber-600 dark:text-amber-500">নবী লুত (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তারপর তার হাত তুলে প্রার্থনা করেছিলেন,</span><br /><br />
                                <em>হে আমার রব, দুর্নীতিগ্রস্ত লোকদের বিরুদ্ধে আমাকে সমর্থন কর।</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আনকাবুত, আয়াত ৩০)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        এদিকে, আল্লাহ তিনজন ফেরেশতা পাঠিয়েছিলেন, যার মধ্যে ফেরেশতা জিবরীলও ছিলেন, নবী ইব্রাহিমের বাড়িতে অতিথি হিসাবে পুরুষদের ছদ্মবেশে। ইব্রাহিম, যিনি ফেরেশতাদের চিনতে ব্যর্থ হয়েছিলেন, তার অতিথিদের জন্য একটি মহান ভোজ প্রস্তুত করেছিলেন। কিন্তু তার অতিথিরা তাদের দেওয়া খাবার প্রত্যাখ্যান করেছিলেন।
                    </p>

                    <img 
                        src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/lut/3%20Angels%20Visit%20Ibrahim.png" 
                        alt="৩ জন ফেরেশতা ইব্রাহিমকে দেখা করছেন" 
                        className="w-full h-auto rounded-lg shadow-lg my-6"
                    />

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>নবী ইব্রাহিম ভীত হয়ে পড়েছিলেন; তিনি জিজ্ঞাসা করেছিলেন:</strong><br />
                                <em>"তোমরা কে?"</em><br /><br />
                                <strong>ফেরেশতারা উত্তর দিয়েছিলেন:</strong><br />
                                <em>"ভয় পাবেন না! আমরা আল্লাহর ফেরেশতা। আমাদের লুতের লোকদের কাছে পাঠানো হয়েছে এবং আমাদের পাঠানো হয়েছে আপনাকে একটি পুত্রের সুসংবাদ দিতে যার অনেক জ্ঞান এবং প্রজ্ঞা রয়েছে।"</em><br /><br />
                                <strong>নবী ইব্রাহিম জানতেন যে সদোমের লোকদের জন্য আল্লাহর শাস্তি নিকটে ছিল। তিনি অবিলম্বে তার ভাইপো, লুতের জন্য ভয় পেয়েছিলেন; তিনি ফেরেশতাদের বলেছিলেন:</strong><br />
                                <em>"নিশ্চয়ই, এর মধ্যে লুত রয়েছে।"</em><br /><br />
                                <strong>ফেরেশতারা উত্তর দিয়েছিলেন:</strong><br />
                                <em>"এর মধ্যে কে আছে তা আমরা আরও ভালো জানি।"</em><br /><br />
                                তারা ইব্রাহিমকে আশ্বস্ত করেছিল যে লুত রক্ষা পাবে।
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Sodom and Gomorrah Destroyed */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        সদোম এবং গোমোরাহ <span className="text-amber-600 dark:text-amber-500">ধ্বংস</span>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/lut/3%20Handsome%20men.png" 
                                alt="৩ জন সুদর্শন পুরুষ" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                <span className="text-amber-600 dark:text-amber-500">ফেরেশতারা তারপর সুদর্শন যুবকদের ছদ্মবেশে সদোমের দিকে এগিয়ে গিয়েছিলেন।</span> নবী লুতের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) কন্যা, একজন বিশ্বাসী, সুদর্শন পুরুষদের শহরে প্রবেশ করতে দেখেছিলেন এবং আতঙ্কিত হয়ে তার বাবার কাছে দৌড়ে গিয়েছিলেন এবং তিনজন পুরুষ সম্পর্কে তাকে জানিয়েছিলেন। নবী লুত (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) পুরুষদের কাছে গিয়েছিলেন এবং তাদের সদোম শহরে স্বাগত জানিয়েছিলেন। তিনি খুব ভালো জানতেন যে সদোমের পুরুষদের হাতে যুবকদের কী পরিণতি হবে, তাই তিনি তাদের নিজস্ব নিরাপত্তার জন্য শহর ছেড়ে যেতে রাজি করানোর উদ্দেশ্য করেছিলেন।
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        কিন্তু নবী লুত (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) অতিথিদের ছেড়ে যেতে বলতে খুব লজ্জিত ছিলেন, তাই তিনি অতিথিদের তার বাড়িতে নিয়ে গিয়েছিলেন, নিশ্চিত করেছিলেন যে কেউ তিনজন সুদর্শন পুরুষকে দেখেনি।
                    </p>

                    <p className="mb-4">
                        লুতের স্ত্রী, একজন অবিশ্বাসী, পুরুষদের দেখেছিলেন যখন তারা তার স্বামী, লুতের সাথে তার বাড়িতে প্রবেশ করেছিল। <strong>তিনি শহরের পুরুষদের কাছে দৌড়ে গিয়েছিলেন এবং তাদের জানিয়েছিলেন যে লুতের বাড়িতে তিনজন আকর্ষণীয় যুবক রয়েছে।</strong> পুরুষরা খবরে আনন্দিত হয়েছিল এবং ধীরে ধীরে লুতের বাড়ির বাইরে জড়ো হয়েছিল এবং তার দরজায় আঘাত করতে শুরু করেছিল।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>নবী লুত (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) চিৎকার করেছিলেন:</strong><br />
                                        <em>"আমার অতিথিদের সম্পর্কে আমাকে অপমান করো না। তোমাদের মধ্যে কি একজন যুক্তিসঙ্গত ব্যক্তি নেই?"</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>অধৈর্য হয়ে, পুরুষরা চিৎকার করে উত্তর দিয়েছিল:</strong><br />
                                        <em>"আমরা কি তোমাকে [আতিথ্য] লোকদের থেকে নিষেধ করিনি?"</em>
                                    </p>
                                </CardContent>
                            </Card>
                            <p className="mb-4">
                                <strong className="text-amber-600 dark:text-amber-500">সদোমের সমগ্র জাতি এখন লুতের দরজায় জড়ো হয়েছিল।</strong> তারা প্রতি মিনিটে অধৈর্য হয়ে পড়ছিল এবং তার দরজা ভাঙতে শুরু করেছিল।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/lut/Crowd%20People.png" 
                                alt="ভিড়" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>উত্তেজিত বোধ করে, লুত তার লোকদের ডাকলেন:</strong><br />
                                <em>"এগুলি [জাতির মেয়েরা] আমার কন্যা [বৈধভাবে বিয়ে করতে] যদি তোমাদের অবশ্যই কাজ করতে হয়।"</em><br /><br />
                                <strong>পুরুষরা উত্তর দিয়েছিল:</strong><br />
                                <em>"তুমি ইতিমধ্যে জান যে আমাদের তোমার কন্যার প্রতি কোন আগ্রহ নেই; এবং নিশ্চয়ই, তুমি জান আমরা কী চাই।"</em><br /><br />
                                <strong>নবী লুত (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) দুর্নীতিগ্রস্ত লোকদের বিরুদ্ধে অসহায় হয়ে পড়েছিলেন।</strong><br />
                                <em>"যদি আমার তোমাদের বিরুদ্ধে কিছু শক্তি থাকত বা আমি একটি শক্তিশালী শক্তিতে আশ্রয় নিতে পারতাম,"</em> তিনি ভেবেছিলেন।<br /><br />
                                <span className="text-amber-600 dark:text-amber-500">তিনজন পুরুষ তখন কথা বলেছিলেন:</span><br />
                                <em>"হে লুত, নিশ্চয়ই আমরা তোমার রবের ফেরেশতা; [তাই] তারা কখনই তোমার কাছে পৌঁছাবে না।"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        ফেরেশতা জিবরীল তারপর লুতের বাড়ি থেকে বেরিয়ে এসে পুরুষদের আঘাত করেছিলেন, যার ফলে সব পুরুষ তাদের দৃষ্টিশক্তি হারিয়েছিল।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>অবাক হয়ে এবং রাগান্বিত হয়ে, পুরুষরা চিৎকার করেছিল:</strong><br />
                                        <em>"এটি কী জাদু যা আমাদের আঘাত করেছে? এটি কোথা থেকে এসেছে? হে লুত! তুমি এর পিছনে আছ। আগামীকাল আমরা তোমার সাথে কী করব তা তুমি দেখবে।"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/lut/Blind%20men.png" 
                                alt="অন্ধ পুরুষ" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        অন্ধ পুরুষরা তারপর তাদের বাড়িতে ফিরে গিয়েছিল পরের দিন লুতকে ধ্বংস করার পরিকল্পনা করছিল।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong className="text-amber-600 dark:text-amber-500">আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) নবী লুতকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আদেশ করেছিলেন:</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mt-4">
                                <em>রাতের একটি অংশে তোমার পরিবারের সাথে বের হও এবং তোমাদের মধ্যে কেউ পিছনে তাকাবে না, তোমার স্ত্রী ছাড়া। নিশ্চয়ই সে তাদের উপর যা আঘাত করবে তার দ্বারা আঘাতপ্রাপ্ত হবে। নিশ্চয়ই, তাদের নির্ধারিত সময় [হল] সকাল। সকাল কি নিকটে নয়?</em>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        নির্দেশ অনুযায়ী, নবী লুত (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>), তার কন্যারাও সাথে, রাতে সদোম ছেড়ে চলে গিয়েছিলেন।
                    </p>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardHeader>
                            <CardTitle className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                ضَرَبَ ٱللَّهُ مَثَلٗا لِّلَّذِينَ كَفَرُواْ ٱمۡرَأَتَ نُوحٖ وَٱمۡرَأَتَ لُوطٖۖ كَانَتَا تَحۡتَ عَبۡدَيۡنِ مِنۡ عِبَادِنَا صَٰلِحَيۡنِ فَخَانَتَاهُمَا فَلَمۡ يُغۡنِيَا عَنۡهُمَا مِنَ ٱللَّهِ شَيۡـٔٗا وَقِيلَ ٱدۡخُلَا ٱلنَّارَ مَعَ ٱلدَّـٰخِلِينَ
                            </CardTitle>
                            <CardDescription className="text-sm md:text-base font-semibold">রোমানীকরণ:</CardDescription>
                            <CardAction className="text-xs md:text-sm text-emerald-700 dark:text-emerald-400">(সূরা তাহরিম, আয়াত ১০)</CardAction>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm md:text-base leading-relaxed">
                                আল্লাহ অবিশ্বাসীদের জন্য নূহ এবং লুতের স্ত্রীদের উদাহরণ দিয়েছেন। তারা আমাদের দুজন ধার্মিক বান্দার অধীনে ছিল, কিন্তু প্রত্যেকে তার স্বামীর সাথে বিশ্বাসঘাতকতা করেছিল, এবং তাদের স্বামীরা আল্লাহর বিরুদ্ধে তাদের কোন উপকার করতে পারেনি। তাদের দুজনকে বলা হয়েছিল: "যারা প্রবেশ করে তাদের সাথে আগুনে প্রবেশ কর।"
                            </p>
                        </CardContent>
                    </Card>

                    <img 
                        src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/lut/Sodom%20destroyed.png" 
                        alt="সদোম ধ্বংস" 
                        className="w-full h-auto rounded-lg shadow-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        সকাল হওয়ার সাথে সাথে, শহর জুড়ে একটি জোরে, তীক্ষ্ণ চিৎকার শুরু হয়েছিল যা বাসিন্দাদের ব্যথা এবং ভয়ে কাঁপিয়ে দিয়েছিল। জিবরীল তারপর তার ডানার প্রান্ত থেকে জাতিটিকে ধরে নিয়েছিলেন, তাদের উঁচুতে তুলেছিলেন, জমি পাকিয়ে দিয়েছিলেন, এবং মাটিতে ফেলে দিয়েছিলেন। আল্লাহ তারপর আকাশকে কঠিন মাটির পাথর বর্ষণ করতে দিয়েছিলেন — প্রতিটি পাথরে একজন সীমালঙ্ঘনকারীর নাম লেখা ছিল যার জন্য এটি উদ্দেশ্য ছিল, সদোমের বাসিন্দাদের বৃথা জীবন শেষ করে।
                    </p>

                    <p className="mb-4 text-amber-600 dark:text-amber-500">
                        নবী লুত (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>), যিনি তার কন্যারাও সাথে সদোম ছেড়ে গিয়েছিলেন, তার চাচা, নবী ইব্রাহিমের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) কাছে ফিরে এসেছিলেন। একসাথে, তারা তার মৃত্যু পর্যন্ত আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰলَىٰ</span>) বার্তা ছড়িয়ে দেওয়া অব্যাহত রেখেছিলেন।
                    </p>

                    <p className="mb-4">
                        <strong>আজ, সদোমের স্থান, দুর্নীতির শহর,</strong> মৃত সাগর দ্বারা চিহ্নিত করা হয়েছে নবী লুতের লোকদের বিরুদ্ধে আল্লাহর ক্রোধের স্মরণ হিসাবে।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong className="text-amber-600 dark:text-amber-500">কুরআন এ সম্পর্কে প্রতিফলন করে,</strong><br />
                                <em>"এবং নিশ্চয়ই! তারা (শহরগুলি) মহাসড়কের উপর ছিল (মক্কা থেকে সিরিয়ার দিকে, অর্থাৎ যেখানে এখন মৃত সাগর রয়েছে)। নিশ্চয়ই! এতে বিশ্বাসীদের জন্য নিশ্চয়ই একটি নিদর্শন রয়েছে।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-হিজর, আয়াত ৭৬-৭৭)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Mentions Hebrew Bible and New Testament */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        হিব্রু বাইবেল এবং নিউ টেস্টামেন্টে <span className="text-amber-600 dark:text-amber-500">উল্লেখ</span>
                    </h2>

                    <p className="mb-4">
                        হিব্রু বাইবেলে মূসা <strong>দ্বিতীয় বিবরণ ২৯:২২-২৩-এ</strong> সদোম এবং গোমোরাহের ধ্বংসের কথা উল্লেখ করেছেন:
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-l-4 border-gray-400">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                "তোমাদের সন্তানরা যারা পরে প্রজন্মে তোমাদের অনুসরণ করবে এবং দূরবর্তী দেশ থেকে আসা বিদেশীরা জমিতে যে বিপর্যয় ঘটেছে এবং প্রভু যে রোগে আক্রান্ত করেছেন তা দেখবে। সমগ্র জমি লবণ এবং সালফারের একটি জ্বলন্ত বর্জ্য হবে — কিছুই রোপণ করা হবে না, কিছুই অঙ্কুরিত হবে না, এর উপর কোনও গাছপালা বৃদ্ধি পাবে না। এটি সদোম এবং গোমোরাহ, আদমাহ এবং জেবোয়িমের ধ্বংসের মতো হবে, যা প্রভু তীব্র রাগে উল্টে দিয়েছিলেন।"
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        বাইবেল নিউ টেস্টামেন্টে, <strong>লূক ১৭:২৮-৩০</strong>, যীশু তার দ্বিতীয় আগমনের সাথে সদোম এবং গোমোরাহের বিচারের তুলনা করেছেন:
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-l-4 border-gray-400">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                "একইভাবে, যেমন লুতের দিনে ছিল — তারা খেয়েছিল, তারা পান করেছিল, তারা কিনেছিল, তারা বিক্রি করেছিল, তারা রোপণ করেছিল, তারা নির্মাণ করেছিল, কিন্তু যে দিন লুত সদোম থেকে বেরিয়ে এসেছিল সেই দিনে আকাশ থেকে আগুন এবং সালফার বৃষ্টি হয়েছিল এবং তাদের সবাইকে ধ্বংস করেছিল — তেমনি হবে যে দিনে মানুষের পুত্র প্রকাশিত হবে।"
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* All Quran Verses */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">সমস্ত কুরআন আয়াত</span> যা <span className="text-amber-600 dark:text-amber-500">নবী লুত (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>)</span>-এর গল্প উল্লেখ করে
                    </h2>

                    <p className="mb-4">
                        মোট, নবী লুত কুরআনে ১৭ বার উল্লিখিত হয়েছে। নীচে, আপনি কুরআনের অবশিষ্ট আয়াতগুলি পাবেন যা নবী লুতের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) গল্প উল্লেখ করে, যা উপরে সরাসরি উল্লেখ করা হয়নি।
                    </p>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardHeader>
                            <CardTitle className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                وَإِسۡمَٰعِيلَ وَٱلۡيَسَعَ وَيُونُسَ وَلُوطٗاۚ وَكُلّٗا فَضَّلۡنَا عَلَى ٱلۡعَٰلَمِينَ
                            </CardTitle>
                            <CardDescription className="text-sm md:text-base font-semibold">রোমানীকরণ:</CardDescription>
                            <CardAction className="text-xs md:text-sm text-emerald-700 dark:text-emerald-400">(সূরা আল-আন'আম, আয়াত ৮৬)</CardAction>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm md:text-base leading-relaxed">
                                "এবং ইসমাইল এবং ইলিয়াসা এবং ইউনুস এবং লুত — এবং [তাদের সকলকে] আমরা বিশ্বজগতের উপর প্রাধান্য দিয়েছি।"
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardHeader>
                            <CardTitle className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                وَلُوطًا إِذۡ قَالَ لِقَوۡمِهِۦٓ أَتَأۡتُونَ ٱلۡفَٰحِشَةَ مَا سَبَقَكُم بِهَا مِنۡ أَحَدٖ مِّنَ ٱلۡعَٰلَمِينَ
                            </CardTitle>
                            <CardDescription className="text-sm md:text-base font-semibold">রোমানীকরণ:</CardDescription>
                            <CardAction className="text-xs md:text-sm text-emerald-700 dark:text-emerald-400">(সূরা আল-আ'রাফ, আয়াত ৮০)</CardAction>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm md:text-base leading-relaxed">
                                "এবং [আমরা পাঠিয়েছিলাম] লুত যখন তিনি তার লোকদের বলেছিলেন, 'তোমরা কি এমন অনৈতিকতা কর যা বিশ্বজগতের মধ্যে তোমাদের আগে কেউ করেনি?'"
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-l-4 border-gray-400">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                "এবং [আমরা পাঠিয়েছিলাম] লুত যখন তিনি তার লোকদের বলেছিলেন, 'তোমরা কি এমন অনৈতিকতা কর যা বিশ্বজগতের মধ্যে তোমাদের আগে কেউ করেনি? নিশ্চয়ই, তোমরা মহিলাদের পরিবর্তে পুরুষদের কাছে কামনা নিয়ে যাও। বরং, তোমরা সীমালঙ্ঘনকারী একটি জাতি।' কিন্তু তার লোকদের উত্তর ছিল কেবল তারা বলেছিল, 'তাদের তোমার শহর থেকে বহিষ্কার কর! নিশ্চয়ই, তারা এমন পুরুষ যারা নিজেদেরকে পবিত্র রাখে।'"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">(সূরা আরাফ, আয়াত ৮০-৮২)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                "কিন্তু যখন তিনি তাদের হাত খাবারের দিকে যেতে দেখেননি, তিনি তাদের অবিশ্বাস করেছিলেন এবং তাদের থেকে ভয় অনুভব করেছিলেন। তারা বলেছিল, 'ভয় পাবেন না। আমাদের লুতের লোকদের কাছে পাঠানো হয়েছে।'"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা হুদ, আয়াত ৭০)</span><br /><br />
                                "এবং যখন ভয় ইব্রাহিম ছেড়ে গিয়েছিল এবং সুসংবাদ তার কাছে পৌঁছেছিল, তিনি লুতের লোকদের সম্পর্কে আমাদের সাথে তর্ক করতে শুরু করেছিলেন।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা হুদ, আয়াত ৭৪)</span><br /><br />
                                "এবং যখন আমাদের রাসূলরা, [ফেরেশতারা], লুতের কাছে এসেছিলেন, তিনি তাদের জন্য দুঃখিত হয়েছিলেন এবং তাদের জন্য অস্বস্তি অনুভব করেছিলেন এবং বলেছিলেন, 'এটি একটি পরীক্ষার দিন।'"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা হুদ, আয়াত ৭৭)</span><br /><br />
                                "এবং হে আমার লোকেরা, আমার থেকে তোমাদের মতবিরোধ তোমাদের আঘাত করবে না যা নূহের লোকদের বা হুদের লোকদের বা সালেহের লোকদের আঘাত করেছিল। এবং লুতের লোকেরা তোমাদের থেকে দূরে নয়।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা হুদ, আয়াত ৮৯)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardHeader>
                            <CardTitle className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                قَالَ فَمَا خَطۡبُكُمۡ أَيُّهَا ٱلۡمُرۡسَلُونَ إِلَّآ ءَالَ لُوطٍ إِنَّا لَمُنَجُّوهُمۡ أَجۡمَعِينَ إِلَّا ٱمۡرَأَتَهُۥ قَدَّرۡنَآ إِنَّهَا لَمِنَ ٱلۡغَٰبِرِينَ
                            </CardTitle>
                            <CardDescription className="text-sm md:text-base font-semibold">রোমানীকরণ:</CardDescription>
                            <CardAction className="text-xs md:text-sm text-emerald-700 dark:text-emerald-400">(সূরা আল-হিজর, আয়াত ৫৭-৬০)</CardAction>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm md:text-base leading-relaxed">
                                "[ইব্রাহিম] বলেছিলেন, 'তাহলে তোমাদের কাজ [এখানে] কী, হে রাসূলগণ?' (৫৭) তারা বলেছিল, 'নিশ্চয়ই, আমাদের অপরাধীদের একটি জাতির কাছে পাঠানো হয়েছে, (৫৮) লুতের পরিবার ছাড়া; নিশ্চয়ই, আমরা তাদের সবাইকে রক্ষা করব (৫৯) তার স্ত্রী ছাড়া।' আল্লাহ নির্ধারণ করেছিলেন যে সে তাদের মধ্যে যারা পিছনে থাকবে। (৬০)"
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-l-4 border-gray-400">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                "এবং আমরা তাকে এবং লুতকে সেই জমিতে পৌঁছে দিয়েছিলাম যার জন্য আমরা বিশ্বজগতের জন্য বরকত করেছিলাম।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আনবিয়া, ২১:৭১)</span><br /><br />
                                "এবং লুতকে আমরা বিচার এবং জ্ঞান দিয়েছিলাম, এবং আমরা তাকে সেই শহর থেকে রক্ষা করেছিলাম যা মন্দ কাজ করছিল। নিশ্চয়ই, তারা ছিল মন্দ, স্পষ্টভাবে অবাধ্য একটি জাতি।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আনবিয়া, ২১:৭৪)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-l-4 border-gray-400">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                "এবং ইব্রাহিমের লোকেরা এবং লুতের লোকেরা"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— সূরা হজ্জ (২২:৪৩)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-l-4 border-gray-400">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                "এবং [উল্লেখ] লুত, যখন তিনি তার লোকদের বলেছিলেন, 'নিশ্চয়ই, তোমরা এমন অনৈতিকতা কর যা বিশ্বজগতের মধ্যে তোমাদের আগে কেউ করেনি। নিশ্চয়ই, তোমরা পুরুষদের কাছে যাও এবং রাস্তা অবরোধ কর এবং তোমাদের সভায় [প্রতিটি] মন্দ কাজ কর।' এবং তার লোকদের উত্তর ছিল না তারা বলেছিল, 'আমাদের কাছে আল্লাহর শাস্তি নিয়ে এস, যদি তুমি সত্যবাদী হও।' তিনি বলেছিলেন, 'হে আমার রব, দুর্নীতিগ্রস্ত লোকদের বিরুদ্ধে আমাকে সমর্থন কর।' এবং যখন আমাদের রাসূলরা সুসংবাদ নিয়ে ইব্রাহিমের কাছে এসেছিলেন, তারা বলেছিল, 'নিশ্চয়ই, আমরা লুতের শহরের লোকদের ধ্বংস করব। নিশ্চয়ই, এর লোকেরা অত্যাচারী হয়েছে।' [ইব্রাহিম] বলেছিলেন, 'নিশ্চয়ই, এর মধ্যে লুত রয়েছে।' তারা বলেছিল, 'এর মধ্যে কে আছে তা আমরা আরও ভালো জানি। আমরা অবশ্যই তাকে এবং তার পরিবারকে রক্ষা করব, তার স্ত্রী ছাড়া। সে তাদের মধ্যে যারা পিছনে থাকবে।'"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আনকাবুত, আয়াত ২৮-৩২)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardHeader>
                            <CardTitle className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                وَثَمُودُ وَقَوۡمُ لُوطٖ وَأَصۡحَٰبُ لۡـَٔيۡكَةِۚ أُوْلَـٰٓئِكَ ٱلۡأَحۡزَابُ
                            </CardTitle>
                            <CardDescription className="text-sm md:text-base font-semibold">রোমানীকরণ:</CardDescription>
                            <CardAction className="text-xs md:text-sm text-emerald-700 dark:text-emerald-400">(সূরা সাদ ৩৮:১৩)</CardAction>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm md:text-base leading-relaxed">
                                "এবং [গোত্র] থামুদ এবং লুতের লোকেরা এবং গাছের সঙ্গীরা। তারা হল দলগুলি।"
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardHeader>
                            <CardTitle className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                وَعَادٞ وَفِرۡعَوۡنُ وَإِخۡوَٰنُ لُوطٖ
                            </CardTitle>
                            <CardDescription className="text-sm md:text-base font-semibold">রোমানীকরণ:</CardDescription>
                            <CardAction className="text-xs md:text-sm text-emerald-700 dark:text-emerald-400">(সূরা কাফ ৫০:১৩)</CardAction>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm md:text-base leading-relaxed">
                                "এবং 'আদ এবং ফেরাউন এবং লুতের ভাইয়েরা"
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-l-4 border-gray-400">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                "লুতের লোকেরা সতর্কতা প্রত্যাখ্যান করেছিল। নিশ্চয়ই, আমরা তাদের উপর পাথরের ঝড় পাঠিয়েছিলাম, লুতের পরিবার ছাড়া — আমরা ভোরের আগে তাদের রক্ষা করেছিলাম আমাদের কাছ থেকে অনুগ্রহ হিসাবে। এইভাবে আমরা কৃতজ্ঞ ব্যক্তিকে পুরস্কৃত করি। এবং তিনি ইতিমধ্যে আমাদের আক্রমণের সতর্কতা দিয়েছিলেন, কিন্তু তারা সতর্কতা নিয়ে বিতর্ক করেছিল। এবং তারা তার কাছ থেকে তার অতিথিদের দাবি করেছিল, কিন্তু আমরা তাদের চোখ মুছে দিয়েছিলাম, [বলেছিলাম], 'আমার শাস্তি এবং সতর্কতা আস্বাদন কর।' এবং সকালে তাদের উপর একটি স্থায়ী শাস্তি এসেছিল।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-কামার, আয়াত ৩৩-৩৮)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="my-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-l-4 border-gray-400">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                "আল্লাহ অবিশ্বাসীদের জন্য একটি উদাহরণ উপস্থাপন করেছেন: নূহের স্ত্রী এবং লুতের স্ত্রী। তারা আমাদের দুজন ধার্মিক বান্দার অধীনে ছিল কিন্তু তাদের সাথে বিশ্বাসঘাতকতা করেছিল, তাই সেই নবীরা আল্লাহর কাছ থেকে তাদের কোন উপকার করতে পারেনি, এবং বলা হয়েছিল, 'যারা প্রবেশ করে তাদের সাথে আগুনে প্রবেশ কর।'"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা তাহরিম, আয়াত ১০)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

            </div>
        </div>
    )
}
