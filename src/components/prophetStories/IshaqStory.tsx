import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function IshaqStory() {
    return (
        <div className="mb-12 mt-6 md:mt-10">
            {/* Header Image */}
            <div className="w-full mb-8">
                <img 
                    src="/images/prophet-stories/ishaq/the-story-of-prophet-ishaq-as.png" 
                    alt="ইসহাক (আঃ)-এর গল্প" 
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-10">
                <span className="text-amber-600 dark:text-amber-500">নবী ইসহাক (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর গল্প
            </h1>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6 md:space-y-8">
                
                {/* Birth of Ishaq */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl text-center font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4">
                        ইসহাকের জন্ম
                    </h2>

                    <div className="items-center flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/ishaq/prophet-ibrahim-calligraphy.png" 
                                alt="নবী ইব্রাহিমের ক্যালিগ্রাফি" 
                                className="w-full h-auto rounded-lg object-cover mb-4"
                            />
                            <img 
                                src="/images/prophet-stories/ishaq/three-guests-angel.png" 
                                alt="তিনজন অতিথি ফেরেশতা" 
                                className="w-full h-64 rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) এবং তার প্রথম স্ত্রী সারাহ একসাথে বৃদ্ধ এবং সাদা চুলের হয়ে গিয়েছিলেন।
                            </p>
                            <p className="mb-4">
                                একদিন, তাদের তিনজন দর্শক ছিল। যেমন সেই সময়ে আরবদের জন্য প্রথাগত ছিল, নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) তিনজন পুরুষকে খাবারের জন্য আমন্ত্রণ করেছিলেন।
                            </p>
                        </div>
                    </div>

                    <img 
                        src="/images/prophet-stories/ishaq/cooked-food-bg.png" 
                        alt="রান্না করা খাবার" 
                        className="w-full h-64 bg-cover rounded-lg my-6"
                    />

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <em>"তারা কে?"</em> <strong>সারাহ তার স্বামীকে জিজ্ঞাসা করেছিলেন।</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <em>"আমি তাদের মধ্যে কাউকে চিনি না,"</em> <strong>তিনি উত্তর দিয়েছিলেন,</strong> <em>"আমাদের কী খাবার আছে?"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <em>"অর্ধেক ভেড়া,"</em> <strong>তিনি উত্তর দিয়েছিলেন।</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <em>"অর্ধেক ভেড়া! তাদের জন্য একটি মোটা বাছুর জবাই কর; তারা অপরিচিত এবং অতিথি,"</em> <strong>তিনি আদেশ করেছিলেন।</strong>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4 text-center">
                        তাই একজন চাকর এসেছিল এবং তাদের জন্য একটি মোটা বাছুর ভাজা করেছিল, এবং নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّ</span>) অতিথিদের খেতে আমন্ত্রণ করেছিলেন। কিন্তু, শীঘ্রই, <strong>তিনি লক্ষ্য করেছিলেন যে তাদের হাত খাবারের দিকে যাচ্ছিল না। <span className="text-amber-600 dark:text-amber-500">তার সন্দেহ জেগে উঠেছিল, এবং তিনি ভীত হয়ে পড়েছিলেন।</span></strong>
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/ishaq/quran-illustration.png" 
                                alt="কুরআন চিত্র" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">এই মুহূর্তটি কুরআনে স্পষ্টভাবে ধরা পড়েছে:</p>
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>কিন্তু যখন তিনি তাদের হাত এটির দিকে যেতে দেখেননি, তিনি তাদের অবিশ্বাস করেছিলেন এবং তাদের থেকে ভয় অনুভব করেছিলেন। তারা বলেছিল, <span className="text-amber-600 dark:text-amber-500">"ভয় পাবেন না। আমাদের লুতের লোকদের কাছে পাঠানো হয়েছে।"</span></strong><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা হুদ, আয়াত ৭০)</span>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <img 
                        src="/images/prophet-stories/ishaq/mesopotamian-landscape.png" 
                        alt="মেসোপটেমিয়ান ভূদৃশ্য" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        অতিথিরা ফেরেশতা ছিল কারণ তারা খায় বা পান করে না, এটি বুঝতে পেরে ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّ</span>) তাদের উদ্দেশ্য সম্পর্কে ভাবছিলেন।<br /><br /> তারা কি তাকে বা তার পরিবারকে তিরস্কার করতে এসেছিল? তার উদ্বেগ দূর করতে, তারা তাকে আশ্বস্ত করেছিল, <span className="text-amber-600 dark:text-amber-500">"ভয় পাবেন না। আমাদের লুতের লোকদের কাছে পাঠানো হয়েছে।"</span>
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/ishaq/prophet-ishaq-calligraphy.png" 
                                alt="নবী ইসহাকের ক্যালিগ্রাফি" 
                                className="w-full h-auto rounded-lg object-cover mb-4"
                            />
                            <img 
                                src="/images/prophet-stories/ishaq/prophet-yaqub-calligraphy.png" 
                                alt="নবী ইয়াকুবের ক্যালিগ্রাফি" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                তারা ইসহাক (<span className="font-arabic">عَلَيْهِ ٱلسَّ</span>) এবং ইয়াকুবের (<span className="font-arabic">عَلَيْهِ ٱلسَّ</span>) ভবিষ্যত জন্মের আনন্দদায়ক সংবাদও নিয়ে এসেছিল।
                            </p>
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-center text-sm md:text-base leading-relaxed italic">
                                        <strong>"আমরা তাকে ইসহাকের সুসংবাদ দিয়েছিলাম, এবং ইসহাকের বাইরেও, ইয়াকুবের"</strong><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-হুদ, আয়াত ৭১)</span>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                সারাহ, দীর্ঘকাল ধরে বন্ধ্যা বলে বিশ্বাস করা হয়েছিল, <strong className="text-amber-600 dark:text-amber-500">তার বৃদ্ধ বয়সে একটি সন্তান জন্ম দেওয়ার সম্ভাবনায় বিস্মিত হয়েছিলেন।</strong>
                            </p>
                            <p className="mb-4">
                                তিনি তার বিস্ময় প্রকাশ করেছিলেন,<br />
                                <strong><em>'হায় আমার জন্য! আমি কি একটি সন্তান জন্ম দেব, দেখছি আমি একজন বৃদ্ধ মহিলা, এবং আমার স্বামী এখানে একজন বৃদ্ধ মানুষ? এটি সত্যিই একটি বিস্ময়কর জিনিস হবে!'</em></strong><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-হুদ, আয়াত ৭২)</span>
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/ishaq/baby-born.png" 
                                alt="শিশু জন্মগ্রহণ" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/ishaq/three-men-standing.png" 
                                alt="তিনজন পুরুষ দাঁড়িয়ে" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">ফেরেশতারা উত্তর দিয়েছিলেন,</p>
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>"তুমি কি আল্লাহর ফরমান দ্বারা বিস্মিত? আল্লাহর রহমত এবং বরকত তোমার উপর বর্ষিত হোক, হে এই ঘরের লোকেরা। <span className="text-amber-600 dark:text-amber-500">নিশ্চয়ই, তিনি প্রশংসিত, সর্বমহিমান্বিত।"</span></strong><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা আল-হুদ, আয়াত ৭৩)</span>
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

                {/* The Prophetic Lineage */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        নবুওয়তের <span className="text-amber-600 dark:text-amber-500">বংশধারা</span>
                    </h2>

                    <p className="mb-4">
                        নবী ইসহাকের (<span className="font-arabic">عَلَيْهِ ٱلسَّ</span>) জীবনের বিবরণ ইসলামী সাহিত্যে বিরল এবং সীমিত। যাইহোক, নির্ভরযোগ্য কুরআন ভাষ্যকাররা বর্ণনা করেন যে যখন নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّ</span>) অনুভব করেছিলেন যে তার জীবন শেষ হয়ে আসছে, <strong className="text-amber-600 dark:text-amber-500">তিনি (<span className="font-arabic">عَلَيْهِ ٱلسَّ</span>) তার পুত্রের জন্য একজন ধার্মিক স্ত্রী খুঁজেছিলেন</strong>।
                    </p>

                    <p className="mb-4">
                        নবী ইব্রাহিম (<span className="font-arabic">عَلَيْهِ ٱلسَّ</span>) চাননি যে তার পুত্র ইসহাক (<span className="font-arabic">عَلَيْهِ ٱلسَّ</span>) কানানীয়দের মধ্যে একজনকে বিয়ে করুক, কারণ তাদের মুশরিক বলে জানা গিয়েছিল। তাই, একটি উপযুক্ত সঙ্গী খুঁজে পেতে, তিনি ইরাকে তার বিশ্বস্ত চাকর, হারানকে একটি বধূ খুঁজতে পাঠিয়েছিলেন।
                    </p>

                    <p className="mb-4">
                        <strong className="text-amber-600 dark:text-amber-500">চাকর রেবেকা (রিফাকাহ) নির্বাচন করেছিলেন</strong>, বেথুয়েলের কন্যা এবং মিলকাহ এবং নাহরের নাতনি, নবী ইব্রাহিমের (<span className="font-arabic">عَلَيْهِ ٱلسَّ</span>) ভাই। এই মিলন যমজ সন্তানের জন্ম দিয়ে আশীর্বাদ করেছিল: আল-এইস এবং নবী ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّ</span>)।
                    </p>

                    <p className="mb-4">
                        বর্ণনাগুলি আরও প্রকাশ করে যে আল-এইস ইয়াকুবের (<span className="font-arabic">عَلَيْهِ ٱلسَّ</span>) প্রতি ঈর্ষান্বিত ছিল পরবর্তীটির তাদের পিতার সাথে অনুকূলতা এবং তার প্রদত্ত নবুওয়তের কারণে। ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) আল-এইস থেকে এমন গুরুতর হুমকির সম্মুখীন হয়েছিলেন যে তিনি তার নিরাপত্তা নিশ্চিত করার জন্য দেশ থেকে পালিয়ে গিয়েছিলেন। নবী ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّ</span>) ইসরায়েলীদের পিতা হয়ে উঠেছিলেন।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Prophet Ishaq Death */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        নবী ইসহাক (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) <span className="text-amber-600 dark:text-amber-500">মৃত্যু</span>
                    </h2>

                    <p className="mb-4">
                        নবী ইসহাক (<span className="font-arabic">عَلَيْهِ ٱلسَّ</span>) অসুস্থ হয়ে পড়েছিলেন এবং মারা গিয়েছিলেন যখন তিনি <strong>একশ আট বছর বয়সী</strong> ছিলেন। তাকে তার পিতা, নবী ইব্রাহিমের (<span className="font-arabic">عَلَيْهِ ٱلسَّ</span>) পাশে সমাহিত করা হয়েছিল।
                    </p>
                </section>

            </div>
        </div>
    )
}
