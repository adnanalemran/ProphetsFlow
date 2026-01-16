import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function IbrahimStory() {
    return (
        <div className="mb-12 mt-6 md:mt-10">
            {/* Header Image */}
            <div className="w-full mb-8">
                <img 
                    src="/images/prophet-stories/ibrahim/prophet-ibrahim-abraham-story.png" 
                    alt="ইব্রাহিম (আঃ)-এর গল্প" 
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-10">
                <span className="text-amber-600 dark:text-amber-500">নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর গল্প
            </h1>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6 md:space-y-8">
                
                {/* Introduction */}
                <section className="my-8 md:my-12">
                    <p className="mb-4">
                        আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) নবী মুহাম্মদ (<span className="font-arabic">ﷺ</span>)-কে প্রকাশ করেছেন,
                    </p>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardHeader>
                            <CardTitle className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                إِنَّ إِبۡرَٰهِيمَ كَانَ أُمَّةٗ قَانِتٗا لِّلَّهِ حَنِيفٗا وَلَمۡ يَكُ مِنَ ٱلۡمُشۡرِكِينَ
                            </CardTitle>
                            <CardDescription className="text-sm md:text-base font-semibold">রোমানীকরণ:</CardDescription>
                            <CardAction className="text-xs md:text-sm text-emerald-700 dark:text-emerald-400">(সূরা নাহল, ১৬:১২০-১২৩)</CardAction>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                "নিশ্চয়ই, ইব্রাহিম ছিলেন একটি সম্পূর্ণ উম্মাহ নিজেই, আল্লাহর প্রতি অনুগত, অবিচলভাবে সোজা, এবং তিনি মুশরিকদের (যারা আল্লাহর সাথে অন্যকে শরীক করে) মধ্যে ছিলেন না। (তিনি ছিলেন) আল্লাহর অনুগ্রহের জন্য কৃতজ্ঞ। তিনি তাকে নির্বাচন করেছিলেন, এবং তিনি তাকে সরল পথে পরিচালিত করেছিলেন। এবং আমরা তাকে এই পৃথিবীতে ভালো দিয়েছি, এবং পরকালে তিনি নিশ্চিতভাবে ধার্মিকদের মধ্যে থাকবেন। তারপর, আমরা আপনাকে (হে মুহাম্মদ <span className="font-arabic">ﷺ</span>) অনুপ্রাণিত করেছি: 'ইব্রাহিমের পথ অনুসরণ করুন, আল্লাহর প্রতি একনিষ্ঠভাবে নিবেদিত। এবং তিনি মুশরিকদের মধ্যে ছিলেন না।'"
                            </p>
                        </CardContent>
                    </Card>
                </section>

                <hr className="my-8" />

                {/* Early Life */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                প্রাচীন ব্যাবিলন (বর্তমান ইরাক) ভূমিতে, <strong>একটি ছেলে <span className="text-amber-600 dark:text-amber-500">ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span> জন্মগ্রহণ করেছিলেন অতীত নবীদের বার্তা বহন করার জন্য।</strong>
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/ibrahim/Prophet Ibrahim Calligraphy.png" 
                                alt="নবী ইব্রাহিমের ক্যালিগ্রাফি" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/ibrahim/Stone Idols.png" 
                                alt="মূর্তি" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                লোকেরা তাদের মূর্তি-উপাসনার পথ অব্যাহত রেখেছিল। <strong>তারা যে দেবতাদের উপাসনা করত তারা নিজেরাই তৈরি করেছিল, পাথর এবং কাঠ দিয়ে হাতে খোদাই করা।</strong>
                            </p>
                            <p className="mb-4">
                                তাদের নিজের হাতে তৈরি দেবতাদের উপাসনা করা তাদের জন্য সহজ হতে পারে কারণ তাদের নিজের হাতে তৈরি দেবতারা তাদের সঠিক বা ভুল থেকে বেছে নেওয়ার ক্ষমতা দিয়েছিল।
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        ইব্রাহিম অন্য বাচ্চাদের মতো ছিল না; তিনি তাদের মূর্তি-উপাসনার পথের শিকার হওয়ার প্রবণতা ছিল না। তিনি ছিলেন সত্যের সন্ধানকারী, এবং তার স্রষ্টা তাকে বুদ্ধিমান করেছিলেন। সূরা আল-আনবিয়া আয়াত ৫১-এ উল্লিখিত হিসাবে,
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>সূরা আল-আনবিয়া, আয়াত ৫১-এ উল্লিখিত:</strong><br />
                                "নিশ্চয়ই আমরা ইতিমধ্যে ইব্রাহিমকে প্রজ্ঞা দিয়েছিলাম, এবং আমরা তাকে ভালোভাবে জানতাম।"
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ইব্রাহিমের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) সম্ভাবনা জানতেন এবং তাকে নবুওয়তের মিশন দিয়ে বিশ্বাস করেছিলেন। <strong>তিনি ইব্রাহিমকে (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) লোকদের পথনির্দেশ করতে এবং তাদের <span className="text-amber-600 dark:text-amber-500">তাওহীদ</span> সম্পর্কে শেখানোর জন্য পাঠিয়েছিলেন</strong> - এটি এমন একটি ধারণা যে মহাবিশ্বের কেবল একজন স্রষ্টা এবং শাসক রয়েছে, এবং তা হল আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>)। <strong>কেবল তিনিই প্রশংসা এবং উপাসনার যোগ্য, এবং তাঁর কোন সমান বা শরীক নেই।</strong>
                    </p>

                    <p className="mb-4">
                        সত্যের সন্ধানকারী এবং বক্তা হওয়ার পথ বেছে নেওয়া, যেমন নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) করেছিলেন, প্রায়শই বেশ অজনপ্রিয় হওয়ার বোঝা বহন করে আসে। এটি ছিল নির্যাতন এবং অবহেলার কারণ যা নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) তার নিজের পরিবারে ছোটবেলা থেকেই অনুভব করেছিলেন। দেখুন, ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) একটি অস্বাভাবিক পরিবারে জন্মগ্রহণ করেছিলেন যারা কেবল মূর্তি উপাসনা করত না বরং সেগুলি তৈরি করত। তিনি তার বাবাকে এই সূক্ষ্ম মূর্তিগুলি অদ্ভুত বৈশিষ্ট্য সহ তৈরি করতে দেখতে অভ্যস্ত ছিলেন।
                    </p>

                    <p className="mb-4">
                        <strong>একদিন, তিনি কৌতূহলে অভিভূত হয়েছিলেন;</strong> <span className="text-amber-600 dark:text-amber-500">ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) তার বাবাকে জিজ্ঞাসা করেছিলেন যে তিনি যে মূর্তিগুলি তৈরি করেছিলেন সেগুলি সম্পর্কে।</span> তার বাবা উত্তর দিয়েছিলেন যে সেগুলি দেবতাদের মূর্তি।
                    </p>

                    <p className="mb-4">
                        এই উত্তর একটি তরুণ ইব্রাহিমকে (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) গভীরভাবে বিরক্ত করেছিল। তিনি তার বাবাকে ভালোবাসতেন কিন্তু বুঝতে পারছিলেন না যে লোকেরা কীভাবে নিষ্ক্রিয় পাথর এবং কাঠের কাছে প্রার্থনা করতে পারে, যেগুলি তারা জানত যে তাদের হাতের নিছক সৃষ্টি।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <span className="text-amber-600 dark:text-amber-500">ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) তখন সুযোগ নিয়ে জিজ্ঞাসা করেছিলেন,</span><br />
                                <em>"এই মূর্তিটি কী, বাবা? এর বড় কান আছে, আমাদের চেয়ে বড়!"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>তার বাবা উত্তর দিয়েছিলেন:</strong><br />
                                <em>"এটি মারদুখ, দেবতাদের দেবতা, বাবা। এই বড় কানগুলি তার গভীর জ্ঞানের প্রতীক।"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>), যিনি <span className="text-amber-600 dark:text-amber-500">সেই সময়ে মাত্র সাত বছর বয়সী ছিলেন</span>, তার বাবার উত্তরের অযৌক্তিকতায় হেসেছিলেন, কারণ তিনি আরও ভালো জানতেন।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Disdain For Idols */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <strong>নবী ইব্রাহিমের <span className="text-amber-600 dark:text-amber-500">মূর্তির প্রতি ঘৃণা:</span></strong>
                    </h2>

                    <p className="mb-4">
                        ইব্রাহিমের বাবা আশা করেছিলেন যে তার ছেলে পুরোহিতত্বে যোগ দেবে এবং বড় হওয়ার সাথে সাথে মূর্তিগুলিকে সম্মান করবে। কিন্তু ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) বড় হওয়ার সাথে সাথে মূর্তি উপাসনার প্রতি তার বিরক্তি বাড়তে থাকে। তিনি তার বাবার সাথে প্রায়ই মন্দিরে যেতেন এবং বিভিন্ন আকার এবং আকারের অসংখ্য মূর্তির দৃশ্যে বিরক্ত হতেন।
                    </p>

                    <img 
                        src="/images/prophet-stories/ibrahim/People worshiping idol.png" 
                        alt="লোকেরা মূর্তি উপাসনা করছে" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        লোকেরা এই মূর্তিগুলির সামনে সিজদা করছিল, কান্নাকাটি করছিল এবং তাদের সাহায্য করার জন্য অনুরোধ করছিল।
                    </p>

                    <p className="mb-4">
                        একসময় যা একটি মজার কৌতুক ছিল তা শীঘ্রই তার ত্বকের নিচে যেতে শুরু করে এবং তাকে আরও বেশি রাগান্বিত করে। ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) ভাবতেন যে মূর্তিগুলি, যারা নিষ্ক্রিয় ছিল এবং খেতে, পান করতে বা কথা বলতে পারত না, কীভাবে প্রয়োজনে লোকদের সাহায্য করতে পারে। তিনি মূর্তিগুলিকে দেখেছিলেন যেমন তারা ছিল; তিনি জানতেন যে তার বাবা সেগুলি তৈরি করেছিলেন, তারপর সেগুলি লোকদের কাছে বিক্রি করেছিলেন যারা, সেকেন্ড পরে, সেগুলির সামনে সিজদা করত, সব ধরনের জিনিসের জন্য জিজ্ঞাসা করত।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <span className="text-amber-600 dark:text-amber-500">তিনি তার বাবাকে বলেছিলেন,</span><br />
                                "তুমি কি মূর্তিগুলিকে দেবতা হিসেবে গ্রহণ করেছ? নিশ্চয়ই, আমি দেখছি যে তুমি এবং তোমার লোকেরা স্পষ্ট ভুলের মধ্যে রয়েছ।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আন'আম, আয়াত ৭৪)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Discovering Allah */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <strong><span className="text-amber-600 dark:text-amber-500">আল্লাহ সর্বশক্তিমানের আবিষ্কার:</span></strong>
                    </h2>

                    <p className="mb-4">
                        তার লোকদের দুর্দশায় দুঃখিত হয়ে, ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَامُ</span>) তার চিন্তা প্রক্রিয়া করার জন্য একা সময়ের জন্য বের হয়েছিলেন। তিনি অন্ধকারে হেঁটেছিলেন যতক্ষণ না তিনি একটি পাহাড়ের একটি গুহায় পৌঁছেছিলেন। তিনি একটি দেয়ালের বিরুদ্ধে নিজেকে বিশ্রাম দিয়েছিলেন এবং উপরের আকাশের বিস্তৃতির দিকে তাকিয়েছিলেন।
                    </p>

                    <p className="mb-4">
                        <span className="text-amber-600 dark:text-amber-500">আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কুরআনে বলেছেন,</span>
                    </p>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardHeader>
                            <CardTitle className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                وَكَذَٰلِكَ نُرِيٓ إِبۡرَٰهِيمَ مَلَكُوتَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَلِيَكُونَ مِنَ ٱلۡمُوقِنِينَ
                            </CardTitle>
                            <CardDescription className="text-sm md:text-base font-semibold">রোমানীকরণ:</CardDescription>
                            <CardAction className="text-xs md:text-sm text-emerald-700 dark:text-emerald-400">(সূরা আল-আন'আম, আয়াত ৭৫)</CardAction>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm md:text-base leading-relaxed">
                                "আমরা ইব্রাহিমকে আকাশ এবং পৃথিবীর বিস্ময় দেখিয়েছি, যাতে তিনি বিশ্বাসে নিশ্চিত হতে পারেন।"
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>যখন রাত বন্ধ হয়ে গেল, তিনি একটি তারকা দেখেছিলেন এবং পর্যবেক্ষণ করেছিলেন:</strong><br />
                                        <em>"এটি আমার রব!"</em><br /><br />
                                        <strong>কিন্তু যখন তারকাটি অস্ত গেল, <span className="text-amber-600 dark:text-amber-500">ইব্রাহিম বলেছিলেন:</span></strong><br />
                                        <em>"আমি এমন জিনিস ভালোবাসি না যা অস্ত যায়।"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আন'আম, আয়াত ৭৫)</span><br /><br />
                                        <strong>তারপর তিনি চাঁদ উঠতে দেখেছিলেন এবং মন্তব্য করেছিলেন:</strong><br />
                                        <em>"এইটি আমার রব!"</em><br /><br />
                                        <strong>কিন্তু চাঁদ অদৃশ্য হয়ে গেলে,<br /><span className="text-amber-600 dark:text-amber-500">ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) বলেছিলেন:</span></strong><br />
                                        <em>"যদি আমার রব আমাকে পথনির্দেশ না করেন, আমি অবশ্যই পথভ্রষ্টদের মধ্যে একজন হব।"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আন'আম, আয়াত ৭৭)</span><br /><br />
                                        <strong>তারপর তিনি সূর্য দেখেছিলেন এবং বলেছিলেন:</strong><br />
                                        <em>"এটি আমার রব। এটি সবচেয়ে বড়।' তারপর যখন এটি অস্ত গেল, তিনি বলেছিলেন: 'হে আমার লোকেরা! নিশ্চয়ই, আমি তাদের থেকে মুক্ত যাদের তোমরা আল্লাহর উপাসনায় শরীক করেছ।"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আন'আম, আয়াত ৭৮)</span>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/ibrahim/Ibrahim & People.png" 
                                alt="নবী ইব্রাহিম আকাশের দিকে তাকাচ্ছেন" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        কুরআনের অনেক ভাষ্যকার নবী ইব্রাহিমের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) সংলাপকে এই আকাশীয় বস্তুগুলিকে ঐশ্বরিক হিসাবে গ্রহণ করার পরিবর্তে বরং যেকোনো জ্যোতিষ্ক চিহ্নের বিরুদ্ধে একটি কৌশলগত যুক্তি হিসাবে ব্যাখ্যা করেন।
                    </p>

                    <p className="mb-4">
                        তিনি যৌক্তিকভাবে সমস্ত বিদ্যমান জিনিসের ক্ষণস্থায়ী প্রকৃতি প্রদর্শন করেন আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) এর চিরন্তন একত্ব ছাড়া, যিনি প্রতিটি মুহূর্তে সবকিছুকে পুষ্টি এবং টিকিয়ে রাখার জন্য দায়ী।
                    </p>

                    <p className="mb-4">
                        তিনি তাদের ব্যাখ্যা করেছিলেন যে <strong>যখন সূর্য, চাঁদ এবং তারকাগুলি সময়ে সময়ে উপস্থিত এবং অদৃশ্য হয়ে যায়,</strong><span className="text-amber-600 dark:text-amber-500"> আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সর্বদা উপস্থিত ছিলেন এবং কখনই তার সৃষ্টির দৃষ্টি হারাননি।</span>
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তিনি বলেছেন,</strong><br />
                                <em>"নিশ্চয়ই, আমি আমার মুখ ফিরিয়েছি তাঁর দিকে যিনি আকাশ এবং পৃথিবী সৃষ্টি করেছেন, সত্যের দিকে ঝুঁকে, এবং আমি তাদের মধ্যে নই যারা আল্লাহর সাথে অন্যকে শরীক করে।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আ'নাম, আয়াত ৭৯)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Second Appeal */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <strong><span className="text-amber-600 dark:text-amber-500">নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span> দ্বিতীয় আবেদন।</strong>
                    </h2>

                    <p className="mb-4">
                        তিনি জানতেন যে একটি উৎসব একটি প্রতিবেশী শহরে অনুষ্ঠিত হতে চলেছে, এবং তার গ্রামের কেউ অংশ নেওয়া থেকে বিরত থাকবে না। এটি ছিল শহরের লোকদের দেখানোর সুযোগ যে তারা যে মূর্তিগুলির উপাসনা করত সেগুলির সত্যতা।
                    </p>

                    <p className="mb-4">
                        যখন ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) নিশ্চিত ছিলেন যে সবাই শহর ছেড়ে চলে গেছে, তিনি তার পরিকল্পনা কার্যকর করার জন্য একটি ধারালো কুড়ুল নিয়ে মন্দিরের দিকে গোপনে এগিয়ে গিয়েছিলেন।
                    </p>

                    <p className="mb-4">
                        যখন তিনি মন্দিরে প্রবেশ করেছিলেন, তিনি কাঠ এবং পাথর দিয়ে তৈরি বিভিন্ন মূর্তি দেখেছিলেন যা শহরের লোকেরা উপাসনা করত। তিনি লক্ষ্য করেছিলেন যে লোকদের দ্বারা মূর্তিগুলির সামনে খাবার রাখা হয়েছিল নৈবেদ্য হিসাবে।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>সূরা আস-সাফফাত, আয়াত ৯১-এ উল্লিখিত হিসাবে,<span className="text-amber-600 dark:text-amber-500"> তিনি বিদ্রূপ করে মূর্তিকে জিজ্ঞাসা করেছিলেন,</span></strong><br />
                                <em>"তুমি কি তোমার সামনের নৈবেদ্য খাবে না?"</em><br />
                                মূর্তি, যেমন প্রত্যাশিত, নীরব রইল।
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>তারপর তিনি অন্যান্য ভাস্কর্যকে জিজ্ঞাসা করেছিলেন:</strong><br />
                                <em>"তোমাদের কী হয়েছে, তোমরা কেন কথা বলছ না?"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আস-সাফফাত, আয়াত ৯২)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <img 
                        src="/images/prophet-stories/ibrahim/Ibrahim Smashing the idols.png" 
                        alt="নবী ইব্রাহিম মূর্তি ভাঙছেন" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) তারপর তার কুড়ুল তুলে ধরেছিলেন এবং একটি ছাড়া সব মূর্তি ভেঙে দিয়েছিলেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <em>"তাই তিনি সেগুলিকে টুকরো টুকরো করে দিয়েছিলেন, তাদের মধ্যে একটি বড়টি ছাড়া, যাতে তারা [এবং প্রশ্ন] করতে পারে।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আনবিয়া, আয়াত ৫৮)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <strong>তিনি তাদের মধ্যে সবচেয়ে বড় মূর্তিটি রেখেছিলেন এবং <span className="text-amber-600 dark:text-amber-500">তার কুড়ুলটি তার কাঁধে ঝুলিয়ে দিয়েছিলেন।</span></strong> তিনি তারপর ধৈর্য সহকারে তার শহরের লোকদের প্রতিক্রিয়ার জন্য অপেক্ষা করেছিলেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>ক্ষুব্ধ হয়ে, তারা সেই ব্যক্তিদের নাম আঁকতে শুরু করেছিল যাদের এই জঘন্য কাজে হাত থাকতে পারে।</strong><br />
                                        <em>"কে আমাদের দেবতাদের সাথে এটি করেছে? তিনি অবশ্যই কিছু অশুভ ব্যক্তি!"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আনবিয়া, আয়াত ৫৯)</span><br /><br />
                                        <strong>কেউ বলেছিল:</strong><br />
                                        <em>"আমরা একজন যুবককে তাদের সম্পর্কে কথা বলতে শুনেছি: তাকে ইব্রাহিম বলা হয়।"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আনবিয়া, আয়াত ৬০)</span>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/ibrahim/Idols Destroyed.png" 
                                alt="নবী ইব্রাহিম মূর্তি ধ্বংস করেছেন" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/ibrahim/Biggest Idol.png" 
                                alt="সবচেয়ে বড় মূর্তি" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                ইব্রাহিম (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) জানতেন যে তাকে বিচারের জন্য ডাকা হবে, কিন্তু তিনি ভয় পাননি। তিনি ইতিমধ্যে জানতেন কীভাবে গ্রামবাসীদের বোকা বানাতে হয় যাতে তাদের দেখানো যায় যে তারা ভুল পথে রয়েছে। ইব্রাহিম (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) এও জানতেন যে যদি তার ক্ষতি হতে হয়, তাহলে তা আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) অনুমতিতে হতে হবে।
                            </p>
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>তারা জিজ্ঞাসা করেছিল:</strong><br />
                                        <em>"ইব্রাহিম, তুমি কি আমাদের দেবতাদের সাথে এটি করেছ?"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আনবিয়া, আয়াত ৬২)</span>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>তিনি বিদ্রূপ করে উত্তর দিয়েছিলেন:</strong><br />
                                        <em>"না, এইটি — তাদের মধ্যে সবচেয়ে বড়টি — এটি করেছে! তাই, তাদের জিজ্ঞাসা করুন যদি তারা কথা বলতে পারে!"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আনবিয়া, আয়াত ৬৩)</span>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <p className="mb-4">
                        কিন্তু অহংকার আবার তাদের মনে মেঘ সৃষ্টি করেছিল। তারা স্বীকার করতে পারেনি যে তারা অন্ধ ছিল; তাই তারা নিজেদের বিপরীত করেছিল এবং ইব্রাহিমের (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) সাথে আবার তর্ক করেছিল: "তুমি ইতিমধ্যে জান যে এগুলি কথা বলে না!" (সূরা আল-আনবিয়া, আয়াত ৬৫)
                    </p>

                    <p className="mb-4">
                        ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তারপর তার লোকদের তিরস্কার করেছিলেন: "তাহলে তোমরা কি আল্লাহর পরিবর্তে এমন কিছু উপাসনা কর যা তোমাদের কোনো উপকার বা ক্ষতি করতে পারে না? তোমাদের এবং আল্লাহর পরিবর্তে তোমরা যা উপাসনা কর তার উপর লজ্জা! তোমাদের কি কোনো বুদ্ধি নেই?" (সূরা আল-আনবিয়া, আয়াত ৬৬-৬৭)
                    </p>

                    <p className="mb-4">
                        এই মুহূর্তে, ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) মুক্তির বাইরে ছিল। গ্রামবাসীরা তাকে এমন অশিষ্টতা এবং নিন্দার সাথে পালাতে দিতে পারেনি। তিনি কেবল তাদের মূর্তি ধ্বংস করেননি বরং তাদের বোকা বিশ্বাসকেও প্রকাশ করেছিলেন। তাই তারা তার জন্য সবচেয়ে খারাপ এবং সবচেয়ে বেদনাদায়ক শাস্তি নিয়ে এসেছিল।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                "<span className="text-amber-600 dark:text-amber-500">তাকে পুড়িয়ে ফেল</span> এবং তোমাদের দেবতাদের সমর্থন কর – যদি তোমরা কাজ করতে চাও।" তারা সিদ্ধান্ত নিয়েছিল।<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আনবিয়া, আয়াত ৬৮)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <strong>এইভাবে, পুরো শহর ইব্রাহিমকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) <span className="text-amber-600 dark:text-amber-500">জনসমক্ষে পোড়ানোর শাস্তি দিয়েছিল।</span></strong>
                    </p>
                </section>

                {/* The Burning */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        পোড়ানো
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                কয়েক দিন ধরে, শহরের লোকেরা তারা যে সবচেয়ে বড় আগুন কল্পনা করতে পারে তার প্রস্তুতির জন্য জ্বালানী কাঠ সংগ্রহ করেছিল। জানা গেছে যে অসুস্থরা প্রতিশ্রুতি দিয়েছিল যে তারা যদি সুস্থ হয় তবে তারা যতটা জ্বালানী কাঠ খুঁজে পাবে ততটা দান করবে।
                            </p>
                            <p className="mb-4">
                                তাদের হৃদয়ে রাগ ফুটে উঠতে থাকায়, তারা একটি গভীর গর্ত খুঁড়েছিল যেখানে তারা তাদের জ্বালানী কাঠ সংগ্রহ করেছিল। তারা একটি ক্যাটাপুল্টও স্থাপন করেছিল যা ইব্রাহিমকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সরাসরি আগুনে নিক্ষেপ করবে।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/ibrahim/Firewood.png" 
                                alt="নবী ইব্রাহিমকে পোড়ানোর হুমকি" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        শীঘ্রই, গর্তটি আগুনে জ্বলে উঠল। আগুনের মাত্রা এমন ছিল যে শিখা আকাশে পৌঁছেছিল। শহরের লোকেরা নিরাপদ দূরত্ব থেকে ঐতিহাসিক ঘটনাটি দেখার জন্য জড়ো হয়েছিল।
                    </p>

                    <p className="mb-4">
                        পরিকল্পনা অনুযায়ী, ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বাঁধা হয়েছিল এবং ক্যাটাপুল্টে স্থাপন করা হয়েছিল যখন প্রধান পুরোহিত কাফেরকে আগুনে নিক্ষেপ করার সংকেত দিয়েছিল।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>ফেরেশতা জিবরীল এসে তাকে জিজ্ঞাসা করেছিলেন:</strong><br />
                                <em>"হে ইব্রাহিম, তুমি কি কিছু চাও?"</em><br /><br />
                                ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ছিলেন অবিচল — তার রবের সাহায্য ছাড়া আর কারো সাহায্যের প্রয়োজন ছিল না। আশেপাশের লোকদের শ্বাসরোধ করা ধোঁয়াটে আগুন তার মধ্যে কোনো ভয় সৃষ্টি করেনি।<br /><br />
                                <em>"তোমার কাছ থেকে কিছুই না,"</em><br />
                                <span className="text-amber-600 dark:text-amber-500">ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَامُ</span>) ফেরেশতাকে উত্তর দিয়েছিলেন।</span>
                            </p>
                        </CardContent>
                    </Card>

                    <img 
                        src="/images/prophet-stories/ibrahim/Ibrahim Fire.png" 
                        alt="ইব্রাহিম (আঃ) আগুনে নিক্ষিপ্ত" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        ক্যাটাপুল্টটি ছোড়া হয়েছিল, এবং ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আগুনের কেন্দ্রে নিক্ষিপ্ত হয়েছিল।<br />
                        আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) আদেশ করেছিলেন: <em>"হে আগুন! ইব্রাহিমের জন্য শীতল এবং নিরাপদ হও!"</em><br />
                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-আনবিয়া, আয়াত ৬৯)</span>
                    </p>

                    <p className="mb-4">
                        আদেশ অনুযায়ী, আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) শিষ্যের জন্য শিখাগুলি ঠান্ডা হয়ে গিয়েছিল। জ্বলন্ত গর্তটি তার জন্য একটি বিশ্রামের স্থান হয়ে উঠেছিল। শহরের লোকেরা দেখছিল, ধরে নিচ্ছিল যে ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) শিখা দ্বারা জীবন্ত পুড়ে যাচ্ছিল।
                    </p>

                    <p className="mb-4">
                        ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আগুনের মাঝখানে বসে আল্লাহকে (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) মহিমান্বিত করেছিলেন এবং প্রশংসা করেছিলেন। তার রবের (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) প্রতি তার ভালোবাসা ছাড়া আর কিছুই ছিল না, যিনি তাকে তার লোকদের থেকে রক্ষা করেছিলেন।
                    </p>

                    <img 
                        src="/images/prophet-stories/ibrahim/Ibrahim Fire 2.png" 
                        alt="নবী ইব্রাহিম (আঃ) আগুন থেকে বেঁচে গেছেন" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        যখন আগুন শেষ পর্যন্ত নিভে গিয়েছিল, তারা দেখে বিস্মিত হয়েছিল যে ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) গর্ত থেকে বেরিয়ে আসছেন শিখা দ্বারা স্পর্শ না করে।<br />
                        যখন আগুনের কয়লা দর্শকদের মুখ কালো করেছিল, ইব্রাহিমের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) মুখ উজ্জ্বল রইল। লোকেরা বিস্ময়ে চিৎকার করেছিল।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <em>"তারা তাকে ক্ষতি করার চেষ্টা করেছিল, কিন্তু আমরা তাদের সবচেয়ে খারাপ পরাজিত করেছিলাম।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">(সূরা আল-আনবিয়া, আয়াত ৭০)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        এই ঘটনাটি মুশরিকদের জন্য স্পষ্ট প্রমাণ ছিল যে তারা ভুল ছিল, কিন্তু তাদের রাগ তাদের ত্রুটিগুলি স্বীকার করা থেকে বিরত রেখেছিল এবং পরিবর্তে ইব্রাহিমের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) প্রতি তাদের রাগ বাড়িয়ে দিয়েছিল। <strong>একই সময়ে, <span className="text-amber-600 dark:text-amber-500">অনেকেই ইব্রাহিমকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) অনুসরণ করতে শুরু করেছিল,</span> যদিও তারা ক্ষতি বা এমনকি মৃত্যুর ভয়ে তাদের বিশ্বাস গোপনে রাখত।</strong>
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Debates King Namrud */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <strong><span className="text-amber-600 dark:text-amber-500">নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>)</span> রাজা নমরুদের সাথে বিতর্ক করেন</strong>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/ibrahim/King Namrud.png" 
                                alt="নবী ইব্রাহিম (আঃ) রাজা নমরুদের সাথে বিতর্ক করছেন" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                ইব্রাহিমের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আগুন থেকে অলৌকিকভাবে পালানোর খবর রাজা নমরুদের কাছে পৌঁছেছিল।<br /><br />
                                <strong>তিনি অত্যন্ত অসন্তুষ্ট ছিলেন কারণ এই ঘটনাটি তার নিজ-ঘোষিত ঈশ্বর হিসাবে তার অবস্থানকে হুমকি দিয়েছিল।</strong> তিনি ইব্রাহিমের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) মতো একজন সাধারণ মানুষের কাছে হারতে প্রস্তুত ছিলেন না।<br /><br />
                                তাই তিনি ইব্রাহিমকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) প্রাসাদে ডাকলেন।
                            </p>
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>রাজা ইব্রাহিমকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার দেবতা সম্পর্কে জিজ্ঞাসা করেছিলেন।</strong><br />
                                <em>"আমার রব হলেন যিনি জীবন দেন এবং মৃত্যু ঘটান,"</em><br /><br />
                                <strong>রাজা প্রত্যুত্তর করেছিলেন,</strong><br />
                                <em>"আমি জীবন দিই এবং মৃত্যু ঘটাই।"</em><br /><br />
                                <span className="text-amber-600 dark:text-amber-500">ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তখন বলেছিলেন,</span><br />
                                <em>"নিশ্চয়ই, আল্লাহ সূর্যকে পূর্ব থেকে উঠিয়ে আনেন, তাই তুমি এটিকে পশ্চিম থেকে উঠিয়ে আন।"</em><br /><br />
                                তাই কাফেররা সম্পূর্ণরূপে পরাজিত হয়েছিল। এবং আল্লাহ যালিমুন (অন্যায়কারী, ইত্যাদি) লোকদের পথনির্দেশ করেন না।<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-বাকারা, আয়াত ২৫৮)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার লোকদের কাছে প্রচার করেছিলেন, তাদের বুঝতে অনুরোধ করেছিলেন যে তাদের দেবতারা মিথ্যা এবং আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) হলেন পরম ঈশ্বর। <strong>তার নতুন খ্যাতি সত্ত্বেও, তিনি তাদের যা বলেছিলেন, <span className="text-amber-600 dark:text-amber-500">মুশরিকরা তাদের পথে আটকে ছিল।</span></strong>
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Emigrates */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <strong><span className="text-amber-600 dark:text-amber-500">নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>)</span> অভিবাসন করেন</strong>
                    </h2>

                    <p className="mb-4">
                        কেউ তার আহ্বানে সাড়া না দিয়ে, ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার রবের জন্য অন্য কোথাও তার ধর্ম প্রচার করার সিদ্ধান্ত নিয়েছিলেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                "এবং লুত তাকে বিশ্বাস করেছিলেন। [ইব্রাহিম] বলেছিলেন, 'নিশ্চয়ই, আমি [আমার রবের সেবায়] অভিবাসন করব। নিশ্চয়ই, তিনি পরাক্রমশালী, প্রজ্ঞাময়।'"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আনকাবুত, আয়াত ২৬)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        তিনি সারাহ এবং নবী লুতের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সাথে তার শহর ছেড়ে চলে গিয়েছিলেন। ত্রয়ী উর শহরে, তারপর হারানে, এবং তারপর ফিলিস্তিনে ভ্রমণ করেছিলেন। ফিলিস্তিনে প্রচারের পর, তারা মিশরে ভ্রমণ করেছিলেন।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Offspring */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">ইব্রাহিমের</span> সন্তান
                    </h2>

                    <p className="mb-4">
                        কুরআন এবং হাদীস ইব্রাহিমের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সন্তান সম্পর্কেও কথা বলে।
                    </p>

                    <p className="mb-4">
                        ধর্মীয় গ্রন্থগুলি প্রকাশ করে যে ইব্রাহিমের স্ত্রী, <strong>সারাহ, অনেক বছর ধরে বন্ধ্যা ছিলেন।</strong> তারা তাদের প্রচারের জীবন অব্যাহত রাখার সাথে সাথে, <strong>সারাহ গভীর একাকীত্বের অনুভূতি নিয়ে লড়াই করছিলেন, আংশিকভাবে তার সন্তান জন্মদানে অক্ষমতার কারণে।</strong> তিনি ইব্রাহিমের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার ভাইপোর প্রতি ভালোবাসা দেখেছিলেন এবং দুঃখিত ছিলেন যে তিনি তাদের নিজস্ব সন্তান দিতে পারেননি।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/ibrahim/Guard & Hagar.png" 
                                alt="প্রহরী এবং হাজেরা" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার বৃদ্ধ বয়সে চিন্তিত হতে শুরু করেছিলেন যে তার উত্তরাধিকার বহন করার জন্য কেউ থাকবে না। তাই, নিঃস্বার্থভাবে, সারাহ তার মেয়ে চাকর হাজেরাকে তার স্বামীর কাছে বিয়েতে দিয়েছিলেন।
                            </p>
                            <p className="mb-4">
                                অচিরেই, হাজেরা ইসমাইলের জন্ম দিয়েছিলেন, যিনি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) একজন নবী (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) হিসেবে কাজ করেছিলেন।
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        ইসমাইলকে আরব জাতির পিতা বলে মনে করা হয়, এবং সবাই তার বংশধর।
                    </p>

                    <p className="mb-4">
                        ইসমাইল আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰলَىٰ</span>) দ্বারা ইব্রাহিমকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) দেওয়া একমাত্র সন্তান ছিল না।
                    </p>

                    <p className="mb-4">
                        একদিন, যখন ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এবং সারাহ খুব বৃদ্ধ এবং সাদা চুলের ছিলেন, তাদের তিনজন দর্শক ছিল। যেমন সেই সময়ে আরবদের জন্য প্রথাগত ছিল, ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তিনজন পুরুষকে খাবারের জন্য আমন্ত্রণ করেছিলেন।
                    </p>

                    <img 
                        src="/images/prophet-stories/ibrahim/3 Angels.png" 
                        alt="ইব্রাহিম (আঃ) তিনজন ফেরেশতাকে দেখা করছেন" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        কিন্তু দর্শকরা ইব্রাহিমকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আশ্বস্ত করেছিলেন,<br />
                        <em>"ভয় পাবেন না! আমরা ফেরেশতা।"</em><br />
                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-হুদ, আয়াত ৭০)</span>
                    </p>

                    <p className="mb-4">
                        ফেরেশতারা তারপর দম্পতিকে তাদের দ্বিতীয় পুত্র, ইসহাকের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) জন্ম এবং ভবিষ্যত নাতি ইয়াকুবের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সুসংবাদ দিয়েছিলেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>সারাহ বিস্মিত হয়েছিলেন।</strong><br />
                                <em>"ওহ, আমার! এই বৃদ্ধ বয়সে আমি কীভাবে একটি সন্তান জন্ম দিতে পারি, এবং আমার স্বামী এখানে একজন বৃদ্ধ মানুষ?"</em> <strong>তিনি ফেরেশতাদের জিজ্ঞাসা করেছিলেন।</strong> (সূরা আল-হুদ, আয়াত ৭২)<br /><br />
                                <strong>তারা উত্তর দিয়েছিলেন,</strong><br />
                                <em>"তুমি কি আল্লাহর ফরমান দ্বারা বিস্মিত? আল্লাহর রহমত এবং বরকত তোমার উপর বর্ষিত হোক, হে এই ঘরের লোকেরা। নিশ্চয়ই, তিনি প্রশংসিত, সর্বমহিমান্বিত।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-হুদ, আয়াত ৭৩)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        নবী ইব্রাহিমের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) গল্প তার পুত্রদের, নবী ইসমাইল (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এবং ইসহাকের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) জীবনের মধ্য দিয়ে বিস্তৃত। আমরা তাদের গল্পে গভীরভাবে অনুসন্ধান করার সাথে সাথে, আমরা আজ ইসলামী বিশ্বাসের কেন্দ্রীয় অনেক অনুশীলনের শিকড় আবিষ্কার করি। এই আখ্যানগুলি সমৃদ্ধ ঐতিহাসিক অন্তর্দৃষ্টি প্রদান করে কিন্তু তীর্থযাত্রার তাৎপর্য এবং ঈদের উদযাপনের উপরও আলোকপাত করে।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Resurrection Question */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">নবী ইব্রাহিম আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>)</span>-কে পুনরুত্থান সম্পর্কে জিজ্ঞাসা করেন:
                    </h2>

                    <p className="mb-4">
                        ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার দিনগুলি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) উপাসনা এবং লোকদের তার ধর্মের দিকে আহ্বান করতে কাটিয়েছিলেন। তিনি জানতেন যে তার রবের (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে তার প্রত্যাবর্তন খুব দূরে ছিল না। তিনি জানতে আগ্রহী ছিলেন যে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কীভাবে পরকালে মৃতদের ফিরিয়ে আনেন। তিনি একটি শিশুর মতো অনুরোধ করেছিলেন যারা একটি পিতামাতাকে জিজ্ঞাসা করে যে কীভাবে কিছু করা হয়েছিল, সন্দেহের কারণে নয় বরং কৌতূহলের কারণে।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তিনি সর্বশক্তিমানকে বলেছিলেন:</strong><br />
                                <em>"হে আমার রব, আমাকে দেখান আপনি কীভাবে মৃতদের জীবন দেন।"</em><br /><br />
                                <span className="text-amber-600 dark:text-amber-500">[আল্লাহ] বলেছিলেন,</span><br />
                                <em>"তুমি কি বিশ্বাস করনি?"</em><br /><br />
                                <strong>ইব্রাহিম উত্তর দিয়েছিলেন,</strong><br />
                                <em>"হ্যাঁ, কিন্তু [আমি শুধু জিজ্ঞাসা করি] যাতে আমার হৃদয় সন্তুষ্ট হতে পারে।"</em><br /><br />
                                <span className="text-amber-600 dark:text-amber-500">[আল্লাহ] বলেছিলেন,</span><br />
                                <em>"চারটি পাখি নাও এবং তাদের নিজের কাছে প্রতিশ্রুতিবদ্ধ কর। তারপর [তাদের জবাই করার পর] প্রতিটি পাহাড়ে তাদের একটি অংশ রাখ; তারপর তাদের ডাক – তারা তাড়াতাড়ি তোমার কাছে [উড়ে] আসবে। এবং জান যে আল্লাহ পরাক্রমশালী, প্রজ্ঞাময়।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-বাকারা, আয়াত ২৬০)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4 text-center">
                        তাই, ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) যেমন বলা হয়েছিল তেমন করেছিলেন, এবং অলৌকিকভাবে, পাহাড়ের চূড়ায় রাখা পাখিগুলির বিভিন্ন অংশ একত্রিত হয়েছিল।
                    </p>

                    <img 
                        src="/images/prophet-stories/ibrahim/four birds.png" 
                        alt="নবী ইব্রাহিম চারটি পাখির অলৌকিক ঘটনা দেখছেন" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <p className="mb-4 text-center">
                        এবং, আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) দ্বারা প্রকাশিত হিসাবে, পাখিগুলি ইব্রাহিমের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) কাছে উড়ে এসেছিল।
                    </p>

                    <p className="mb-4">
                        তাই, ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ভাগ্যবান ছিলেন যে তিনি দেখেছিলেন যে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কীভাবে মৃত্যুর পর জীবন দেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার জীবদ্দশায় অনেক অলৌকিক ঘটনা দেখেছিলেন।
                            </p>
                            <p className="mb-4">
                                <strong>তিনি ছিলেন সবচেয়ে সফল নবীদের মধ্যে একজন এবং অনেক উপাধিতে ধন্য, যেমন আবুল আনবিয়া, যার অর্থ <span className="text-amber-600 dark:text-amber-500">"নবীদের পিতা,"</span></strong> কারণ তিনি দুটি পুত্রের পিতা ছিলেন, নবী ইসহাক এবং নবী ইসমাইল (তাদের সকলের উপর শান্তি বর্ষিত হোক)।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/ibrahim/Ibrahim Family Tree.png" 
                                alt="নবী ইব্রাহিমের পরিবার বৃক্ষ" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        অনেক প্রজন্ম পরে, ইসমাইলের বংশধরের মাধ্যমে, সৌদি আরবের মরু উপত্যকায় একটি ছেলে জন্মগ্রহণ করেছিল, এবং তার নাম ছিল মুহাম্মদ। নবী মুহাম্মদ (<span className="font-arabic">ﷺ</span>), তার পিতাকে সম্মান করার জন্য, তার পুত্রের নাম ইব্রাহিম রেখেছিলেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                সহীহ মুসলিম ২৩১৫-এ,<br />
                                <span className="text-amber-600 dark:text-amber-500">তিনি (<span className="font-arabic">ﷺ</span>) বলেছেন</span>, <em>"আজ রাতে আমার একটি ছেলে জন্মগ্রহণ করেছে, এবং আমি তাকে আমার পিতা ইব্রাহিমের নামে নামকরণ করেছি।"</em> নবী ইসহাকের সরাসরি বংশধরদের মধ্যে রয়েছে ইয়াকুব এবং ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>)।
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        তার দূরবর্তী বংশধরদের মধ্যে রয়েছে আরও অনেক মহান নবী, যেমন মুসা, হারুন, ঈসা, যাকারিয়া, ইয়াহিয়া, সুলাইমান এবং দাউদ (তাদের সকলের উপর শান্তি বর্ষিত হোক)। তাই, তাকে জাতির পিতাও বলা হয়।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <span className="text-amber-600 dark:text-amber-500">কুরআন থেকে:</span><br />
                                <em>"ইব্রাহিম ছিলেন না ইহুদি বা খ্রিস্টান; তিনি ছিলেন একজন মুসলিম, আল্লাহর প্রতি সম্পূর্ণভাবে নিবেদিত। এবং তিনি অবশ্যই তাদের মধ্যে ছিলেন না যারা আল্লাহর উপাসনায় অন্যকে শরীক করে।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">(সূরা আল-ইমরান, আয়াত ৬৭)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        এখানে [এই আয়াতে], এটি ইব্রাহিমকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) হানিফ হিসাবে উল্লেখ করে, যা একটি বিশুদ্ধ বা সত্য একেশ্বরবাদী হওয়ার জন্য একটি উপাধি — এমন কেউ যিনি সমস্ত অন্যান্য দেবতাকে প্রত্যাখ্যান করে এবং কেবল আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) একত্বে বিশ্বাস করে।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/ibrahim/Ibrahim Alone.png" 
                                alt="নবী ইব্রাহিম একা হাঁটছেন" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                নবী ইব্রাহিমের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) গল্পে সবচেয়ে অনুপ্রেরণাদায়ক বিষয় হল যে তিনি দীর্ঘ সময় ধরে একটি খুব একাকী জীবন সহ্য করেছিলেন এবং কখনই বিশ্বাস হারাননি।
                            </p>
                            <p className="mb-4">
                                এটি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সবচেয়ে প্রিয় লোকদের মধ্যে একজন, এবং তিনি কয়েকটি উপলক্ষে কঠোর পরীক্ষার সম্মুখীন হয়েছিলেন, কিন্তু পরীক্ষা যত বড়, পুরস্কার তত বড়।
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        তিনি একাকী, কোন সন্তান ছাড়া, হুমকির সম্মুখীন, এবং বহিষ্কৃত থেকে সমস্ত জাতির পিতা, প্রিয় এবং চিরকাল সম্মানিত হয়ে উঠেছিলেন। এবং তিনি কেবল আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰলَىٰ</span>) উপর নির্ভর করেছিলেন এবং নিজেকে সম্পূর্ণরূপে সমর্পণ করেছিলেন। আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) বলেছেন,
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                "<em>ধর্মে কে ভালো হতে পারে তার চেয়ে যে তার পুরো নিজেকে আল্লাহর কাছে সমর্পণ করে, ভালো কাজ করে এবং ইব্রাহিমের সত্য বিশ্বাসের পথ অনুসরণ করে?"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আন-নিসা, আয়াত ১২৫)</span><br /><br />
                                <strong>আয়াতটি তারপর বলতে থাকে,</strong> "এবং আল্লাহ ইব্রাহিমকে একজন ঘনিষ্ঠ বন্ধু হিসেবে গ্রহণ করেছিলেন।"
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        এখানেই তাকে সম্মানিত উপাধি <strong>"খলীলুল্লাহ,"</strong> <span className="text-amber-600 dark:text-amber-500">যার অর্থ আল্লাহর বন্ধু</span> দেওয়া হয়েছিল।
                    </p>

                    <p className="mb-4">
                        তাকে জান্নাতে সর্বোচ্চ স্থান দেওয়া হয়েছিল, যেখানে তিনি পরে তার ভাই, নবী মুহাম্মদ (<span className="font-arabic">ﷺ</span>)-কে তার আরোহণের রাতে অভিবাদন জানাবেন।
                    </p>
                </section>

            </div>
        </div>
    )
}
