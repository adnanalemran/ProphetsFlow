import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function YusufStory() {
    return (
        <div className="mb-12 mt-6 md:mt-10">
            {/* Header Image */}
            <div className="w-full mb-8">
                <img 
                    src="/images/prophet-stories/yusuf/prophet-yusuf-as-header.png" 
                    alt="ইউসুফ (আঃ)-এর গল্প" 
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-10">
                <span className="text-amber-600 dark:text-amber-500">নবী ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর গল্প
            </h1>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6 md:space-y-8">
                
                {/* Introduction */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/yusuf/Calligraphy.png" 
                                alt="নবী ইউসুফের ক্যালিগ্রাফি" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                <strong>নবী ইউসুফ (জোসেফ) ছিলেন নবী ইয়াকুবের (জ্যাকব) প্রিয় পুত্র</strong> যার আরও ১১টি পুত্র ছিল। বিনইয়ামিন, যিনি কনিষ্ঠ ছিলেন, ইউসুফের মতো একই মায়ের ছিলেন, যখন বাকিরা ছিলেন বড় সৎ ভাই।
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        ইউসুফ, এখনও একটি ছোট ছেলে, এক গৌরবময় সকালে জেগে উঠেছিলেন একটি আনন্দদায়ক স্বপ্নে আনন্দিত হয়ে যা তিনি দেখেছিলেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তিনি উত্তেজনায় তার পিতার কাছে দৌড়ে গিয়েছিলেন এবং বলেছিলেন,</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <em>"হে আমার পিতা, নিশ্চয়ই আমি এগারোটি তারকা এবং সূর্য এবং চাঁদ দেখেছি; আমি তাদের দেখেছি আমার কাছে সিজদা করছে।"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) বুঝতে পেরেছিলেন যে তার প্রিয় পুত্রকে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) নবুওয়ত দান করার জন্য নির্বাচন করেছিলেন। যাইহোক, ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) তার বড় পুত্রদের সম্ভাব্য প্রতিক্রিয়া নিয়ে উদ্বিগ্ন ছিলেন, কারণ যদিও তিনি তাদের সমানভাবে আচরণ করেছিলেন, <span className="text-amber-600 dark:text-amber-500">তারা ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) প্রতি ঈর্ষা পোষণ করত।</span> তাই, তিনি ইউসুফকে (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) সতর্ক করেছিলেন তার ভাইদের কাছে তার স্বপ্ন সম্পর্কে বলতে যাতে তারা তার পতনের জন্য ষড়যন্ত্র না করে।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* The Brothers' Plot */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                সময়ের সাথে সাথে, ইউসুফের ভাইদের হৃদয়ে বিদ্বেষ বাড়তে থাকল। তারা ইউসুফকে (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) ঈর্ষা করত কারণ তারা অনুভব করেছিল যে তিনি বিশেষ ছিলেন, এবং তারা ছিলেন না। তাদের আবেগ সামলাতে অক্ষম হয়ে, তারা একটি কূপে তাকে ফেলে দিয়ে ইউসুফকে পরিত্রাণ পাওয়ার জন্য একটি পরিকল্পনা করেছিল। তাই, একদিন, তারা তাদের পিতার কাছে এসেছিলেন এবং জিজ্ঞাসা করেছিলেন যে ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) তাদের সাথে খেলতে বের হতে পারে কিনা।
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/yusuf/Well.png" 
                                alt="কূপ" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>একটি খুব অনিচ্ছুক ইয়াকুব বলেছিলেন,</strong><br />
                                <em>"নিশ্চয়ই, এটি আমাকে দুঃখিত করে যে তুমি তাকে নিয়ে যাবে, এবং আমি ভয় করি যে একটি নেকড়ে তোমাদের অজান্তে তাকে খেয়ে ফেলবে"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ১২:১৩)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        কিন্তু বড় ভাইয়েরা জোর দিয়েছিলেন যে তারা তার প্রতি চরম যত্ন নেবে এবং ইউসুফ উপভোগ করবে।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/yusuf/Falling.png" 
                                alt="পতন" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                পরের দিন, ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) তার ভাইদের সাথে রওনা দিয়েছিলেন। তারা তাদের ভাইকে ফেলে দেওয়ার জন্য যথেষ্ট গভীর একটি কূপের সন্ধানে অনেক দূর ভ্রমণ করেছিল। যখন তারা অবশেষে কূপে পৌঁছেছিল, পানি পান করার অজুহাতে, তারা তাকে সেখানে নিয়ে গিয়েছিল, তাকে ধরে ফেলেছিল, এবং তার শার্ট খুলে ফেলেছিল। ইউসুফ সংগ্রাম করতে শুরু করেছিলেন এবং তাদের ছেড়ে দেওয়ার জন্য অনুরোধ করেছিলেন। ভাইয়েরা অবশেষে ইউসুফকে (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) পরাজিত করেছিল, তাকে কূপে ফেলে দিয়েছিল, এবং বাড়িতে ফিরে দৌড়েছিল।
                            </p>
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* The Brothers Return */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                ভাইয়েরা তাদের পিতার কাছে দৌড়ে গিয়েছিল, ইউসুফের শার্ট বহন করে যা ভেড়ার রক্ত দিয়ে লেপা ছিল।
                            </p>

                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>তারা কেঁদেছিল,</strong>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <em>"হে আমাদের পিতা, নিশ্চয়ই আমরা একে অপরের সাথে দৌড়াচ্ছিলাম এবং ইউসুফকে আমাদের জিনিসপত্রের সাথে রেখে গিয়েছিলাম, এবং একটি নেকড়ে তাকে খেয়ে ফেলেছে।"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ আয়াত ১৭)</span>
                                    </p>
                                </CardContent>
                            </Card>

                            <p className="mb-4">
                                ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) তাদের গল্প সম্পর্কে সন্দেহ করেছিলেন। তিনি, তার হৃদয়ে, বিশ্বাস করেছিলেন যে তার পুত্র এখনও জীবিত ছিল এবং ভাইয়েরা সম্ভবত শয়তানের দ্বারা মন্দ করতে প্রলুব্ধ হয়েছিল।
                            </p>

                            <p className="mb-4">
                                <strong>তিনি মন্তব্য করেছিলেন যে নেকড়ে নিশ্চয়ই দয়ালু ছিল যে তার পুত্রকে খেয়ে ফেলেছিল তার শার্ট ছিঁড়ে না! তিনি ধৈর্য সহকারে শোক সহ্য করেছিলেন এবং তার পুত্রের নিরাপদ প্রত্যাবর্তনের জন্য প্রার্থনা করেছিলেন।</strong>
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/yusuf/Blood clothes.png" 
                                alt="রক্তাক্ত কাপড়" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Caravan and Sale */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/yusuf/Caravan.png" 
                                alt="কাফেলা" 
                                className="w-full h-auto rounded-lg object-cover mb-4"
                            />
                            <img 
                                src="/images/prophet-stories/yusuf/hand clinging to the rope.png" 
                                alt="রজ্জুতে হাত আটকে আছে" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                এদিকে, ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) একটি পাথরের খাঁজে আটকে থাকতে সক্ষম হয়েছিলেন, এবং তিনি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে তাকে মুক্তি দানের জন্য আন্তরিকভাবে প্রার্থনা করেছিলেন। শীঘ্রই, মিশরের দিকে যাওয়া একটি কাফেলা এই কূপে পানি নিতে থামল। <strong>পানি টানার লোকটি তার বালতি টেনে তুলেছিল, এবং তিনি ছেলেটিকে রজ্জুতে আটকে থাকতে দেখে হতবাক হয়েছিলেন।</strong>
                            </p>

                            <p className="mb-4">
                                কাফেলার লোকেরা অবিলম্বে ইউসুফকে (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) শৃঙ্খলাবদ্ধ করেছিল এবং তাকে মিশরে নিয়ে গিয়েছিল। <span className="text-amber-600 dark:text-amber-500">খবরটি দ্রুত মিশর জুড়ে ছড়িয়ে পড়েছিল যে একটি অত্যন্ত সুদর্শন এবং ক্রীড়াবিদ ছেলে নিলামে দেওয়া হবে।</span> এই খবর ধনী এবং অভিজাত দরদাতাদের আগ্রহ জাগিয়েছিল, তারা দেখতে আগ্রহী ছিল যে গুজব সত্য কিনা।
                            </p>

                            <p className="mb-4">
                                নিলামটি বন্য হয়ে উঠেছিল, দরগুলি দ্রুত বৃদ্ধি পাচ্ছিল। শেষ পর্যন্ত, তাকে সর্বোচ্চ দরদাতার কাছে বিক্রি করা হয়েছিল, যিনি ছিলেন আল-আজিজ, মিশরের প্রধানমন্ত্রী। ইউসুফের নতুন মালিক, যার কোন সন্তান ছিল না, ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) সাথে সম্পূর্ণরূপে মুগ্ধ হয়েছিলেন। তিনি তার স্ত্রীকে বলেছিলেন ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) ভালো যত্ন নিতে, এবং তারা হয় তাকে দাস হিসাবে ব্যবহার করতে পারে বা, সম্ভবত, এমনকি তাকে তাদের পুত্র হিসাবে গ্রহণ করতে পারে।
                            </p>
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Yusuf's Growth and Zulaika */}
                <section className="my-8 md:my-12">
                    <p className="mb-4">
                        ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) কেবল একটি সুদর্শন যুবক হয়ে উঠেননি বরং আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) দ্বারা অসাধারণ জ্ঞান এবং প্রজ্ঞা দিয়েও আশীর্বাদপ্রাপ্ত হয়েছিলেন।
                    </p>

                    <p className="mb-4">
                        এটি বিখ্যাত হাদীসে বর্ণিত হয়েছে যখন নবী মুহাম্মদ (<span className="font-arabic">ﷺ</span>) রাতের যাত্রার সময় স্বর্গে আরোহণ করেছিলেন, তিনি দরজা দিয়ে গিয়েছিলেন এবং তৃতীয় স্বর্গে প্রবেশ করেছিলেন যেখানে তিনি ইউসুফকে (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) দেখেছিলেন যাকে বলা হয়েছিল, <strong><em><span className="text-amber-600 dark:text-amber-500">"(বিশ্বের) অর্ধেক সৌন্দর্য দেওয়া হয়েছিল।"</span></em></strong> (সহীহ মুসলিম ১৬২ক)
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>কুরআনও ইউসুফের গুণাবলী প্রতিফলিত করে, বলছে,</strong><br />
                                <em>"এবং যখন ইউসুফ পরিপক্কতায় পৌঁছেছিল, আমরা তাকে বিচার এবং জ্ঞান দিয়েছিলাম। এবং এভাবে আমরা ভালো কাজকারীদের পুরস্কৃত করি।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ আয়াত ২২)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        তার সততা এবং সত্যবাদিতা আল-আজিজের হৃদয়কে মুগ্ধ করেছিল, যিনি ইউসুফকে (<span className="font-arabic">عَلَيْهِ ٱلسَّلَামُ</span>) তার পরিবারের দায়িত্বে রাখার জন্য বিশ্বাস করেছিলেন। এই সময়কালে ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার দ্বিতীয় পরীক্ষার সম্মুখীন হয়েছিলেন। জুলাইখা, আল-আজিজের স্ত্রী, দিনের পর দিন ইউসুফকে দেখেছিলেন, তার অনুভূতি অবসেশনের পর্যায়ে তীব্র হয়ে উঠেছিল। তার ইচ্ছা দ্বারা অভিভূত হয়ে, তিনি তাদের পূরণ করতে হতাশ হয়ে পড়েছিলেন।
                    </p>

                    <p className="mb-4">
                        একদিন, যখন তার স্বামী বাড়ি থেকে দূরে ছিলেন, তিনি দরজা বন্ধ করেছিলেন এবং ইউসুফকে তার কাছে আমন্ত্রণ করেছিলেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>), আল্লাহকে (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ভয় করে, উত্তর দিয়েছিলেন,</strong><br />
                                        <em>"[আমি] আল্লাহর কাছে আশ্রয় চাই। নিশ্চয়ই, তিনি আমার মালিক, যিনি আমার বাসস্থানকে ভালো করেছেন। নিশ্চয়ই, অত্যাচারীরা সফল হবে না।"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ২৩)</span>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        তিনি মুখ ফিরিয়ে নিয়েছিলেন এবং পালাতে বন্ধ দরজার দিকে দৌড়েছিলেন। জুলাইখা হতাশায় তার পিছনে দৌড়ে গিয়েছিলেন এবং পিছন থেকে তার শার্ট ধরে ফেলেছিলেন, যা এটিকে ছিঁড়ে ফেলেছিল।
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong><span className="text-amber-600 dark:text-amber-500">দরজা খুলে গিয়েছিল, এবং আল-আজিজ প্রবেশ করেছিলেন।</span> লজ্জিত হয়ে, তিনি তার কাছে দৌড়ে গিয়েছিলেন এবং কেঁদেছিলেন,</strong> <em>"যে ব্যক্তি তোমার স্ত্রীর জন্য মন্দ করার ইচ্ছা করেছিল তার শাস্তি কী হবে তবে সে কারাগারে থাকবে বা একটি যন্ত্রণাদায়ক শাস্তি?"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ২৩)</span>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) হতবাক হয়েছিলেন। তিনি তার মালিকের দাবি অস্বীকার করতে থাকেন, বলছেন,</strong><br />
                                        <em>"এটি ছিল সে যে আমাকে প্রলুব্ধ করার চেষ্টা করেছিল।"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ২৬)</span>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>আল-আজিজ ছিলেন একজন ন্যায়পরায়ণ ব্যক্তি।</strong> তিনি বিভ্রান্ত ছিলেন এবং কাকে বিশ্বাস করতে হবে তা নিশ্চিত ছিলেন না। তাই, তিনি পরামর্শের জন্য তার স্ত্রীর চাচাতো ভাইয়ের সাথে পরামর্শ করেছিলেন।<br />
                                        <em>"যদি তার শার্ট সামনে থেকে ছেঁড়া হয়, তাহলে সে সত্য বলেছে, এবং তিনি মিথ্যাবাদীদের মধ্যে একজন,"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ২৬)</span>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/yusuf/Zulaika & Yusuf.png" 
                                alt="জুলাইখা ও ইউসুফ" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        এইভাবে, ইউসুফের নির্দোষতা প্রমাণিত হয়েছিল। আল-আজিজ তার স্ত্রীর অশ্লীলতার জন্য ক্ষমা চেয়েছিলেন এবং ইউসুফকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) গোপনীয়তার শপথ করিয়েছিলেন।
                    </p>

                    <p className="mb-4">
                        তবুও, জুলাইখার অনুসরণের গল্প ছড়িয়ে পড়েছিল। অন্যান্য মহিলারা তার চরিত্র নিয়ে উপহাস করতে শুরু করেছিল। বিচলিত হয়ে, জুলাইখা তাদের কাছে প্রমাণ করার পরিকল্পনা করেছিলেন যে ইউসুফের অসাধারণ সৌন্দর্যের প্রতি তার অসহায় প্রতিক্রিয়া। তাই, তিনি একদিন তার বাসস্থানে এই মহিলাদের একটি ভোজে আমন্ত্রণ করেছিলেন। সেখানে, তিনি তাদের ফল দিয়ে ছুরি পরিবেশন করেছিলেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/yusuf/cutting fruits.png" 
                                alt="ফল কাটা" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                যখন মহিলারা ফল কাটার সময় আনন্দে চ্যাট করছিল, জুলাইখা ইউসুফকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ডাকলেন। মহিলারা তাকে দেখলেন। এমন দেবদূতীয় সৌন্দর্যে বিস্মিত হয়ে, তারা বুঝতে পারেনি যে তারা তাদের হাত কেটে ফেলেছিল। জুলাইখা মুহূর্তটি কাজে লাগিয়ে ঘোষণা করেছিলেন যে এই ব্যক্তির জন্যই তাকে দোষ দেওয়া হয়েছিল।
                            </p>
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                তিনি তারপর ইউসুফকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সতর্ক করেছিলেন যে যদি তিনি আবার তাকে অস্বীকার করেন, তাহলে তাকে কারাগারে রাখা হবে,
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>যার প্রতি ইউসুফ উত্তর দিয়েছিলেন,</strong><br />
                                <em>"আমার রব, কারাগার আমার কাছে তাদের আমন্ত্রণ করা থেকে বেশি পছন্দনীয়।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ৩৩)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        সেই রাতে, জুলাইখা তার স্বামীকে বোঝালেন যে তার সম্মান এবং তার মর্যাদা রক্ষা করার একমাত্র উপায় হল ইউসুফকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) কারাগারে রাখা। এটি আল-আজিজের জন্য একটি কঠিন সিদ্ধান্ত ছিল। তিনি ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) নির্দোষতা জানতেন এবং তাকে বিশ্বাসযোগ্য বলে বিশ্বাস করেছিলেন, কিন্তু তবুও, তিনি তার স্ত্রীর সাথে সম্মত হয়েছিলেন। <strong><span className="text-amber-600 dark:text-amber-500">এইভাবে, ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) অন্যায়ভাবে কারাগারে রাখা হয়েছিল।</span></strong>
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Years in Prison */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>)</span> কারাগারে বছরগুলো:
                    </h2>

                    <p className="mb-4">
                        ইউসুফের কারাগারে থাকার সময়, তাকে স্বপ্ন ব্যাখ্যা করার ক্ষমতা দেওয়া হয়েছিল। প্রায় একই সময়ে, আরও দুজন পুরুষকে কারাগারে দণ্ডিত করা হয়েছিল। প্রথমজন ছিলেন রাজার পানপাত্রবাহক, এবং অন্যজন ছিলেন রাজার রাঁধুনি।
                    </p>

                    <p className="mb-4">
                        ইউসুফের সহকারী বন্দীরা, তার ধার্মিকতায় মুগ্ধ হয়ে, তাদের স্বপ্ন ব্যাখ্যা করার জন্য তার কাছে এসেছিলেন। একজন স্বপ্ন দেখেছিলেন যে তিনি রাজাকে ওয়াইন পরিবেশন করছেন, এবং অন্যজন তার মাথায় রুটি বহন করছিলেন, যা দুটি পাখি খেয়ে ফেলছিল।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) প্রথমে তাদের আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে ডেকেছিলেন, তারপর ব্যাখ্যা করেছিলেন,</strong>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <em>"হে কারাগারের দুজন সঙ্গী, তোমাদের মধ্যে একজন, সে তার মালিককে ওয়াইন পান করাবে; কিন্তু অন্যজনের জন্য, সে ক্রুশবিদ্ধ হবে, এবং পাখিরা তার মাথা থেকে খাবে। বিষয়টি নির্ধারিত হয়েছে যা তোমরা উভয়েই জিজ্ঞাসা করেছ।"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ৪১)</span>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>এবং তিনি যাকে মুক্ত হবে বলে জানতেন তাকে বলেছিলেন,</strong><br />
                                        <em>"রাজার কাছে আমার কথা উল্লেখ কর।"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ৪২)</span>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong className="text-amber-600 dark:text-amber-500">কিন্তু শয়তান তাকে ভুলিয়ে দিয়েছিল</strong> তার মালিকের কাছে [উল্লেখ] এবং ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) কয়েক বছর ধরে কারাগারে রয়ে গিয়েছিলেন। তবুও, তিনি ধৈর্যকে তার নিজের করেছিলেন এবং সেই বছরগুলো আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) স্মরণে কাটিয়েছিলেন।
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/yusuf/Yusuf talk.png" 
                                alt="ইউসুফ কথা বলছেন" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* The King's Dream */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        রাজার <span className="text-amber-600 dark:text-amber-500">স্বপ্ন:</span>
                    </h2>

                    <img 
                        src="/images/prophet-stories/yusuf/King dream.png" 
                        alt="রাজার স্বপ্ন" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        <strong>একদিন মিশরের রাজার একটি অদ্ভুত স্বপ্ন হয়েছিল। তিনি তার লোকদের ডাকলেন এবং বলেছিলেন,</strong><br />
                        <em>"নিশ্চয়ই, আমি দেখেছি সাতটি মোটা গরুকে সাতটি [যা ছিল] পাতলা দ্বারা খাওয়া হচ্ছে, এবং সাতটি সবুজ শীষ [শস্যের] এবং অন্যগুলো [যা ছিল] শুকনো। হে বিশিষ্ট ব্যক্তিরা, যদি তোমরা স্বপ্ন ব্যাখ্যা কর তবে আমার দর্শন ব্যাখ্যা কর।"</em>
                    </p>

                    <p className="mb-4">
                        পানপাত্রবাহক, যিনি অবিলম্বে কারাগারে তার সঙ্গীকে মনে করেছিলেন, রাজাকে ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এবং তার নিখুঁত স্বপ্ন ব্যাখ্যা সম্পর্কে জানিয়েছিলেন। রাজা তার পানপাত্রবাহককে কারাগারে পাঠিয়েছিলেন ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সাথে দেখা করতে এবং এই অদ্ভুত স্বপ্ন সম্পর্কে জিজ্ঞাসা করতে।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার সঙ্গীকে দেখে অত্যন্ত আনন্দিত হয়েছিলেন এবং জানতেন যে এটি নিশ্চয়ই আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) পরিকল্পনা ছিল।
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>তিনি তাকে বর্ণনা করেছিলেন,</strong><br />
                                <em>"তুমি সাত বছর ধারাবাহিকভাবে চাষ করবে, এবং তুমি যা সংগ্রহ করবে তা তার শীষে রেখে দাও, সামান্য কিছু ছাড়া যা তুমি খাবে। তারপর তার পরে সাতটি কঠিন [বছর] আসবে যা তুমি তাদের জন্য [সংরক্ষিত] অগ্রিম যা খেয়ে ফেলবে, সামান্য কিছু ছাড়া যা তুমি সংরক্ষণ করবে। তারপর তার পরে একটি বছর আসবে যেখানে লোকদের বৃষ্টি দেওয়া হবে এবং যেখানে তারা [জলপাই এবং আঙ্গুর] চাপ দেবে।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ৪৭-৪৯)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <span className="text-amber-600 dark:text-amber-500">নবী ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>),</span> স্বপ্নের ভিত্তিতে, বুঝতে পেরেছিলেন যে সাত বছরে একটি দুর্ভিক্ষ আসবে যা সাত বছর স্থায়ী হবে। তিনি রাজাকে অবিলম্বে পদক্ষেপ নিতে পরামর্শ দিয়েছিলেন ফসল কাটা এবং প্রচুর খাদ্য সরবরাহ সংরক্ষণ শুরু করতে। ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) পরামর্শ দিয়েছিলেন যে এই প্রস্তুতি সবার জন্য পর্যাপ্ত খাদ্য নিশ্চিত করার জন্য গুরুত্বপূর্ণ হবে। তদুপরি, তিনি সুসংবাদ দিয়েছিলেন যে পরের বছরটি হবে প্রাচুর্যের বছর। আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) বৃষ্টি আনবেন যা ফসলকে সমৃদ্ধ করতে দেবে।
                    </p>

                    <p className="mb-4">
                        ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) স্বপ্ন ব্যাখ্যায় বিশ্বাস করে, রাজা তাকে ব্যক্তিগতভাবে দেখা করার নির্দেশ দিয়েছিলেন। যাইহোক, ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার নির্দোষতা প্রতিষ্ঠিত হওয়ার আগে কারাগার ছেড়ে যেতে অস্বীকার করেছিলেন। তিনি তার সম্মান রক্ষার জন্য একটি ন্যায়সঙ্গত বিচার জোর দিয়েছিলেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তাই, রাজা ঘটনায় জড়িত মহিলাকে ডাকলেন। তাদের মধ্যে ছিলেন যারা তাদের হাত কেটেছিল, এবং তারা রাজার সামনে ইউসুফের নির্দোষতা সম্পর্কে বলেছিলেন,</strong><br />
                                <em>"আল্লাহ নিষেধ! আমরা তার সম্পর্কে কোন মন্দ জানি না।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ৫১)</span>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>আল-আজিজের স্ত্রী আটকে পড়েছিলেন। তিনি রাজার কাছে স্বীকার করেছিলেন,</strong><br />
                                <em>"এখন সত্য স্পষ্ট হয়ে গেছে। আমিই তাকে প্রলুব্ধ করার চেষ্টা করেছিলাম, এবং নিশ্চয়ই, তিনি সত্যবাদী।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ৫১)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <strong className="text-amber-600 dark:text-amber-500">এইভাবে, ইউসুফের নির্দোষতা প্রমাণিত হয়েছিল।</strong> কারাগার থেকে মুক্তি পেয়ে, ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) রাজার সামনে দাঁড়িয়েছিলেন তার উদারতার জন্য ধন্যবাদ জানাতে। ইউসুফ রাজাকে অত্যন্ত মুগ্ধ করেছিলেন; তার স্বাধীনতা হারানোর পর এবং অনেক বছর ধরে মিথ্যা কারাগারে থাকার পর, তিনি রাগান্বিত ছিলেন না, প্রতিশোধ চাইছিলেন না। তিনি শান্ত ছিলেন এবং সবচেয়ে মহৎ গুণাবলী দেখিয়েছিলেন। এর কারণে, রাজা ইউসুফকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) একটি উচ্চ পদে নিয়োগ করতে স্বাচ্ছন্দ্য বোধ করেছিলেন।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Storekeeper and Famine */}
                <section className="my-8 md:my-12">
                    <p className="mb-4">
                        ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) জিজ্ঞাসা করেছিলেন যে তাকে তার জমির উপর গুদামগুলির দোকানদার করা যেতে পারে কিনা। তিনি শস্যভাণ্ডারের উপর নিয়ন্ত্রক হতে চেয়েছিলেন যাতে নিশ্চিত করা যায় যে তারা দীর্ঘ দুর্ভিক্ষ সহ্য করার জন্য ভালোভাবে সজ্জিত ছিল। এটি স্বার্থপরতা থেকে নয় বরং একটি ব্যক্তিগত দায়িত্ব যা তিনি অনুভব করেছিলেন যাতে নিশ্চিত করা যায় যে লোকেরা ঘাটতির কারণে মারা যাবে না।
                    </p>

                    <p className="mb-4">
                        <span className="text-amber-600 dark:text-amber-500">ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সাত বছর উর্বরতার সময় ফসল সংগ্রহ এবং সংরক্ষণ করেছিলেন।</span> তারপর, যেমন ভবিষ্যদ্বাণী করা হয়েছিল, দুর্ভিক্ষের বছরগুলো এসেছিল যা কানানে তার পিতা ইয়াকুবের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) পরিবারেও পৌঁছেছিল। ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বিনইয়ামিন ছাড়া তার সমস্ত পুত্রকে সরবরাহ কেনার জন্য মিশরে পাঠিয়েছিলেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/yusuf/Yusuf talk.png" 
                                alt="ইউসুফ" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) অবিলম্বে তার ভাইদের চিনতে পেরেছিলেন এবং তাদের সরবরাহ করেছিলেন, কিন্তু তারা তাকে চিনতে পারেনি। এবং কেন তারা করবে? তাদের কাছে, ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বছর আগে মারা গিয়েছিলেন।
                            </p>
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সাধারণভাবে তাদের পরিবার সম্পর্কে জিজ্ঞাসা করেছিলেন।
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>ভাইয়েরা বলেছিল,</strong><br />
                                <em>"আমরা এগারো ভাই, একজন মহৎ নবীর সন্তান। কনিষ্ঠটি বাড়িতে আমাদের বৃদ্ধ পিতার প্রয়োজনের যত্ন নিচ্ছে।"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                হঠাৎ আবেগের তাড়নায়, ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) চোখে অশ্রু জমা হয়েছিল, তার হৃদয় ভারী হয়ে বাড়িতে তার পিতা এবং ছোট ভাইকে দেখার জন্য আকাঙ্ক্ষা করছিল।
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>তার আত্মসম্মান পুনরুদ্ধারের জন্য সংগ্রাম করে, তিনি জিজ্ঞাসা করতে সক্ষম হয়েছিলেন,</strong><br />
                                <em>"তোমরা কি সত্যবাদী লোক?"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>বিভ্রান্ত হয়ে, তারা উত্তর দিয়েছিল,</strong><br />
                                <em>"আমাদের মিথ্যা বলার কোন কারণ থাকতে পারে?"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তাদের জানিয়েছিলেন যে যদি তারা পরের বার তাদের ভাইকে নিয়ে আসে, তাহলে তিনি তাদের দ্বিগুণ রেশন দিয়ে পুরস্কৃত করবেন। কিন্তু যদি তারা তা করতে ব্যর্থ হয়, তাহলে তিনি তাদের পরিমাণ সীমিত করবেন।
                    </p>

                    <p className="mb-4">
                        তিনি নিশ্চিত করতে চেয়েছিলেন যে তারা তার আদেশ পালন করবে। একটি অতিরিক্ত সতর্কতা হিসাবে, ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার একজন চাকরকে তাদের টাকা তাদের ব্যাগে ফিরিয়ে দেওয়ার নির্দেশ দিয়েছিলেন যাতে তারা বাড়িতে ফিরে আসার পর, তাদের ফিরে আসার এবং আরও কেনার জন্য যথেষ্ট টাকা থাকবে।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>যখন ভাইয়েরা বাড়িতে ফিরে এসেছিল, তারা তাদের পিতাকে বলেছিল,</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <em>"হে আমাদের পিতা! আমাদের [আরও] সরবরাহ অস্বীকার করা হয়েছে। তাই আমাদের ভাইকে আমাদের সাথে পাঠান যাতে আমরা আমাদের পরিমাণ পেতে পারি, এবং আমরা অবশ্যই তার উপর নজর রাখব।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ৬৩)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <span className="text-amber-600 dark:text-amber-500">ইয়াকুব রাগান্বিত হয়েছিলেন।</span> ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সাথে তাকে ভয়াবহভাবে ব্যর্থ করার পর তিনি কীভাবে তাদের বিশ্বাস করতে পারেন? কিছু সময় পর, যাইহোক, তাদের প্রয়োজনের চাপ ইয়াকুবকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) আরও সরবরাহের জন্য বিনইয়ামিনকে তাদের সাথে পাঠাতে বাধ্য করেছিল। তিনি তাদের গুরুতর শপথ নিয়েছিলেন তাকে রক্ষা করার জন্য।
                    </p>

                    <p className="mb-4">
                        ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তারপর তাদের প্রস্থান রক্ষা করার জন্য আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছে প্রার্থনা করেছিলেন,
                    </p>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                فَٱللَّهُ خَيۡرٌ حَٰفِظٗاۖ وَهُوَ أَرۡحَمُ ٱلرَّـٰحِمِينَ
                            </p>
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>রোমানীকরণ:</strong> fal laahu khairun haafizanw wa Huwa arhamur Raahimeen
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>বাংলা অনুবাদ:</strong> "আল্লাহ সর্বোত্তম রক্ষক এবং সর্বদয়ালু।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ ১২:৬৪)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Reunited with Brother */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span> তার ভাইয়ের সাথে পুনর্মিলিত:
                    </h2>

                    <p className="mb-4">
                        ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বিশেষ অতিথিদের স্বাগত জানিয়েছিলেন এবং তাদের একটি ভোজে আমন্ত্রণ করেছিলেন। অত্যন্ত কষ্ট সহকারে, তিনি অবিলম্বে তার ভাইকে আলিঙ্গন করা থেকে বিরত ছিলেন। ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার অতিথিদের তার উপহার এবং আতিথেয়তা দিয়ে স্নান করেছিলেন। পরে, ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বিনইয়ামিনকে তার সাথে একা একটি ঘরে থাকার ব্যবস্থা করেছিলেন যেখানে তিনি প্রকাশ করেছিলেন, "নিশ্চয়ই, আমি তোমার ভাই।" (১২:৬৯)
                    </p>

                    <p className="mb-4">
                        বিনইয়ামিন অত্যন্ত আনন্দিত হয়েছিলেন এবং তার বড় ভাইকে তার বাহু দিয়ে জড়িয়ে ধরেছিলেন।
                    </p>

                    <img 
                        src="/images/prophet-stories/yusuf/King's-golden-bowl.png" 
                        alt="রাজার সোনার বাটি" 
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        <strong>তারা ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তাকে আশ্বস্ত করার চেষ্টা করার আগে একটু কেঁদেছিল,</strong><br />
                        <em>"নিশ্চয়ই, আমি তোমার ভাই, তাই তারা [আমার সাথে] যা করত তার জন্য হতাশ হয়ো না।"</em><br />
                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, ১২:৬৯)</span><br /><br />
                        পরের দিন, ইউসুফ তার ভাইদের ব্যাগে শস্য দিয়ে ভরিয়ে দিয়েছিলেন। তিনি তারপর গোপনে রাজার সোনার বাটি বিনইয়ামিনের ব্যাগে রেখেছিলেন।
                    </p>

                    <p className="mb-4">
                        তারা যাওয়ার সময়, রাজার সৈন্যরা দরজা বন্ধ করেছিল এবং ভাইদের থামিয়েছিল। তারা তাদের জানিয়েছিল যে রাজার কাপ হারিয়ে গেছে। "আল্লাহর কসম, তোমরা নিশ্চয়ই জান যে আমরা দেশে দুর্নীতি সৃষ্টি করতে আসিনি, এবং আমরা চোর ছিলাম না," ভাইয়েরা প্রতিবাদ করেছিল। (১২:৭৩)
                    </p>

                    <p className="mb-4">
                        সৈন্যরা বিষয়টি আরও অনুসন্ধান করে জিজ্ঞাসা করেছিল যে যদি চোর তাদের মধ্যে থাকে তবে কী হবে। আত্মবিশ্বাসের সাথে, ভাইয়েরা উত্তর দিয়েছিল যে যদি তাদের মধ্যে একজনকে দোষী পাওয়া যায়, তাহলে তাদের উচিত চুরি করা কাপের মালিকের কাছে নিজেকে দাস হিসাবে দেওয়া। ভাই বিশ্বাস করেছিল যে এটি ন্যায়সঙ্গত হবে, চোর যেমন তাদের সম্পত্তি নিয়েছিল তেমনি মালিকের কাছে নিজেকে সম্পত্তি হিসাবে দেওয়া।
                    </p>

                    <p className="mb-4">
                        অনুসন্ধানের সময়, বাটিটি বিনইয়ামিনের ব্যাগে পাওয়া গিয়েছিল।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic text-center">
                                <strong>সৈন্যরা চিৎকার করেছিল,</strong><br />
                                <em>"হে কাফেলা, নিশ্চয়ই তোমরা চোর।"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        শক এবং অবিশ্বাস ভাইদের আঘাত করেছিল; বাড়িতে তাদের অসুস্থ পিতার চিন্তা এবং যে কোনও মূল্যে বিনইয়ামিনকে রক্ষা করার তাদের প্রতিশ্রুতি তাদের মনে ঘুরছিল। ভাইয়েরা জানত যে তাদের পিতা বিনইয়ামিনকে খুব বেশি ভালোবাসতেন, এবং তিনি ইউসুফকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) হারানোর পর থেকে একটি উপশমের মাধ্যম ছিলেন। তারা উদ্বিগ্ন ছিল যে বিনইয়ামিনের ক্ষতি তাদের পিতাকে সম্পূর্ণরূপে বিধ্বস্ত করবে।
                    </p>

                    <p className="mb-4">
                        তারা সৈন্যদের তাদের ছোট ভাইকে মুক্তি দিতে এবং তাদের মধ্যে একজনকে নিতে অনুরোধ করেছিল, কিন্তু সৈন্যরা অস্বীকার করেছিল।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>ভাইদের মধ্যে জ্যেষ্ঠ বলেছিলেন,</strong><br />
                                <em>"আমি [এই] জমি ছাড়ব না যতক্ষণ না আমার পিতা আমাকে অনুমতি দেন বা আল্লাহ আমার জন্য সিদ্ধান্ত নেন, এবং তিনি সর্বোত্তম বিচারক।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ৮০)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        তাই, বাকি ভাইয়েরা মিশর ছেড়ে চলে গিয়েছিল, জ্যেষ্ঠকে পিছনে রেখে।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Yaqub Suffers Patiently */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span> ধৈর্য সহকারে ভোগ করেন:
                    </h2>

                    <p className="mb-4">
                        যখন তারা বাড়িতে ফিরে এসেছিল, তারা ইয়াকুবকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) খবর দিয়েছিল, <em>"হে আমাদের পিতা, নিশ্চয়ই তোমার পুত্র চুরি করেছে, এবং আমরা যা জানতাম তা ছাড়া সাক্ষ্য দিইনি। এবং আমরা অদৃশ্যের সাক্ষী ছিলাম না, এবং যে শহরে আমরা ছিলাম এবং যে কাফেলায় আমরা এসেছিলাম তা জিজ্ঞাসা কর – এবং নিশ্চয়ই, আমরা সত্যবাদী"</em> (১২:৮১-৮২)
                    </p>

                    <p className="mb-4">
                        <span className="text-amber-600 dark:text-amber-500">নবী ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) একটি সত্য বিশ্বাসীর অনুগ্রহ সহকারে গুরুতর পরিস্থিতির মুখোমুখি হয়েছিলেন।</span> কোনও শান্তি খুঁজতে, তিনি প্রার্থনার দিকে ফিরে গিয়েছিলেন, আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) পরিকল্পনায় তার বিশ্বাস রেখেছিলেন: <em>"সম্ভবত আল্লাহ তাদের সবাইকে আমার কাছে নিয়ে আসবেন। নিশ্চয়ই তিনিই সর্বজ্ঞ, সর্বজ্ঞ।"</em> (১২:৮৩) তিনি আশা করেছিলেন তার কনিষ্ঠ এবং জ্যেষ্ঠ পুত্রদের নিরাপদ প্রত্যাবর্তনের জন্য, যারা মিশরে আটকে ছিল। তবুও, এই নতুন ক্ষতি ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) জন্য তার স্থায়ী শোককে পুনরুজ্জীবিত করেছিল। দুঃখে মুখ ফিরিয়ে, তিনি কেঁদেছিলেন, <em>"ওহ, ইউসুফের জন্য আমার দুঃখ।"</em> (১২:৮৪)
                    </p>

                    <p className="mb-4">
                        বলা হয় যে তার দুঃখে, তিনি এত বেশি কেঁদেছিলেন যে তার চোখ শোকে সাদা হয়ে গিয়েছিল, যা তার অন্ধত্বের দিকে নিয়ে গিয়েছিল।
                    </p>

                    <p className="mb-4">
                        তার অবস্থা এত খারাপ হয়ে গিয়েছিল যে ভাইয়েরা তার স্বাস্থ্য নিয়ে উদ্বিগ্ন হতে শুরু করেছিল; তারা ইয়াকুবকে (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সতর্ক করেছিল,
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <em>"আল্লাহর কসম, তুমি ইউসুফকে মনে রাখা বন্ধ করবে না যতক্ষণ না তুমি মারাত্মক অসুস্থ হয়ে পড় বা ধ্বংসপ্রাপ্তদের মধ্যে একজন হয়ে যাও।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ৮৫)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        তার অটলতায়, ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার পুত্রদের বলেছিলেন, <em>"আমি কেবল আমার কষ্ট এবং আমার দুঃখের অভিযোগ আল্লাহর কাছে করি, এবং আমি আল্লাহর কাছ থেকে জানি যা তোমরা জানো না।"</em> (১২:৮৬)। ভাষ্যকাররা বিশ্বাস করেন যে এই লাইনটি বলার সময়, "আমি আল্লাহর কাছ থেকে জানি যা তোমরা জানো না," ছিল আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) কাছ থেকে ভালোর প্রতি তার বিশ্বাস প্রকাশ করছিল। তিনি আশা করেন যে ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) এখনও জীবিত এবং তিনি যখন ছোট ছিলেন তখন তাকে যে দর্শন বলেছিলেন তা এখনও সত্য হবে।
                    </p>

                    <p className="mb-4">
                        ইয়াকুব (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তারপর উত্তর দিয়েছিলেন, <em>"হে আমার পুত্রেরা, যাও এবং ইউসুফ এবং তার ভাই সম্পর্কে খুঁজে বের কর এবং আল্লাহর কাছ থেকে উপশমের আশা হারিও না। নিশ্চয়ই, কেউ আল্লাহর কাছ থেকে উপশমের আশা হারায় না কেবল অবিশ্বাসী লোকেরা।"</em> (১২:৮৭)
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Return to Egypt */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">মিশরে</span> প্রত্যাবর্তন
                    </h2>

                    <p className="mb-4">
                        পুত্ররা আবার মিশরে ফিরে এসেছিল। তারা ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সাথে দেখা করেছিল এবং অনুরোধ করেছিল যে তাদের উপর একটি ট্র্যাজেডি ঘটেছে।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/yusuf/Yusuf give shirt.png" 
                                alt="ইউসুফ শার্ট দিচ্ছেন" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তারপর তাদের মাতৃভাষায় তাদের সাথে কথা বলেছিলেন,</strong><br />
                                        <em>"তোমরা কি জান যে তোমরা যখন অজ্ঞ ছিলে তখন ইউসুফ এবং তার ভাইয়ের সাথে কী করেছিলে?"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ৮৯)</span>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        ভাইদের বুঝতে বেশি সময় লাগেনি যে এটি নিশ্চয়ই তাদের দীর্ঘ-হারানো ভাই, এবং তারা ভয়ে কাঁপতে শুরু করেছিল। কিন্তু ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তাদের সান্ত্বনা দিয়েছিলেন, বলছেন,
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <em>"আজ তোমাদের উপর কোন দোষ থাকবে না। আল্লাহ তোমাদের ক্ষমা করবেন; এবং তিনি দয়ালুদের মধ্যে সর্বদয়ালু।"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ৯২)</span>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>তিনি তারপর বলেছিলেন,</strong><br />
                                        <em>"এটি নাও, আমার শার্ট, এবং আমার পিতার মুখের উপর ফেলে দাও; তিনি দেখতে পাবেন। এবং আমার কাছে তোমাদের পরিবার, সবাইকে একসাথে নিয়ে এস।"</em><br />
                                        <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ৯৩)</span>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <p className="mb-4">
                        নির্দেশ অনুযায়ী, <strong>ভাইয়েরা ইউসুফের শার্ট তাদের পিতার মুখের উপর ফেলে দিয়েছিল, এবং <span className="text-amber-600 dark:text-amber-500">আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) অলৌকিকভাবে তার দৃষ্টিশক্তি পুনরুদ্ধার করেছিলেন!</span></strong> তারা তাদের পিতাকে তাদের জন্য আল্লাহর ক্ষমা চাইতে অনুরোধ করেছিল। একসাথে, তারা সবাই মিশরের দিকে রওনা দিয়েছিল, যেখানে ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তাদের উষ্ণভাবে স্বাগত জানিয়েছিলেন।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার বৃদ্ধ পিতাকে সিংহাসনে তুলেছিলেন। তিনি বলেছিলেন,</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <em>"হে আমার পিতা, এটি আগের আমার দর্শনের ব্যাখ্যা। আমার রব এটি বাস্তবতা করেছেন। এবং তিনি নিশ্চয়ই আমার প্রতি ভালো ছিলেন যখন তিনি আমাকে কারাগার থেকে বের করেছিলেন এবং তোমাদের [এখানে] নিয়ে এসেছিলেন বেদুইন জীবন থেকে শয়তানের পর [যা] আমার এবং আমার ভাইদের মধ্যে [বিচ্ছিন্নতা] সৃষ্টি করেছিল। নিশ্চয়ই, আমার রব তিনি যা চান তাতে সূক্ষ্ম। নিশ্চয়ই, তিনিই সর্বজ্ঞ, সর্বজ্ঞ।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ, আয়াত ১০০)</span>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        <strong className="text-amber-600 dark:text-amber-500">আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>), তার অসীম প্রজ্ঞা এবং রহমতে, অনেক বছর বিচ্ছেদের পর পিতা এবং পুত্রের পুনর্মিলন ঘটিয়েছিলেন।</strong>
                    </p>

                    <p className="mb-4">
                        আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) ফরমানের একটি সুন্দর পরিপূর্ণতায়, সূরা, যা ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) নবুওয়তের স্বপ্ন দিয়ে শুরু হয়েছিল, সেই বিন্দুতে পৌঁছেছে যেখানে এটি একটি বাস্তবতা হয়ে ওঠে।
                    </p>

                    <p className="mb-4">
                        ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার সৃষ্টিকর্তার কাছে একটি দুআ করে, তার সমস্ত আশীর্বাদের জন্য ধন্যবাদ জানাচ্ছেন।
                    </p>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                ۞رَبِّ قَدۡ ءَاتَيۡتَنِي مِنَ ٱلۡمُلۡكِ وَعَلَّمۡتَنِي مِن تَأۡوِيلِ ٱلۡأَحَادِيثِۚ فَاطِرَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ أَنتَ وَلِيِّۦ فِي ٱلدُّنۡيَا وَٱلۡأٓخِرَةِۖ تَوَفَّنِي مُسۡلِمٗا وَأَلۡحِقۡنِي بِٱلصَّـٰلِحِينَ
                            </p>
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>রোমানীকরণ:</strong> Rabbi qad aataitanee minal mulki wa 'allamtanee min taaweelil ahaadees; faati ras samaawaati wal ardi Anta waliyyee fid dunyaa wal Aakhirati tawaffanee muslimanw wa alhiqnee bissaaliheen
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>বাংলা অনুবাদ:</strong> "আমার রব, তুমি আমাকে [কিছু] সার্বভৌমত্ব দিয়েছ এবং আমাকে স্বপ্নের ব্যাখ্যা শিখিয়েছ। আসমান এবং জমিনের সৃষ্টিকর্তা, তুমি এই দুনিয়া এবং আখিরাতে আমার রক্ষক। আমাকে মুসলিম হিসাবে মৃত্যু দাও এবং আমাকে সৎকর্মশীলদের সাথে যুক্ত কর।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (সূরা ইউসুফ ১২:১০১)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Brief Summary */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">সংক্ষিপ্ত</span> সারসংক্ষেপ:
                    </h2>

                    <p className="mb-4">
                        <span className="font-medium">নবী ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) তার স্বপ্ন থেকে জানতেন যে তিনি মহত্ত্বের জন্য নির্ধারিত ছিলেন, কিন্তু তার জীবনের প্রতিটি মোড়ে, তিনি কঠিনতা এবং প্রতিকূলতার মুখোমুখি হয়েছিলেন। তিনি তার ভাইদের দ্বারা বিশ্বাসঘাতকতা করেছিলেন, দাস হিসাবে বিক্রি হয়েছিলেন, এবং অন্যায়ভাবে কারাগারে রাখা হয়েছিলেন।</span>
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <strong>ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তিক্ত হতে এবং আল্লাহকে (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) জিজ্ঞাসা করতে বেছে নিতে পারতেন,</strong>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                <em>"আমি ভেবেছিলাম তুমি আমার জন্য মহত্ত্ব নির্ধারণ করেছ।"</em>
                            </p>
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <strong>তিনি সহজেই অভিযোগ করতে পারতেন এবং জিজ্ঞাসা করতে পারতেন,</strong><br />
                                <em>"কেন এই জিনিসগুলো আমার সাথে ঘটতে থাকে।"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <p className="mb-4">
                        কিন্তু তিনি ভালো জানতেন; তিনি জানতেন যে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তার জন্য একটি পরিকল্পনা করেছিলেন, এবং তাকে কেবল বিশ্বাস রাখতে হবে।
                    </p>

                    <p className="mb-4">
                        <span className="font-medium">ইউসুফ (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) তার সেরা হতে ফোকাস করেছিলেন, লোকদের সঠিকভাবে আচরণ করেছিলেন, সম্মান এবং মর্যাদার সাথে, এবং তার কাছ থেকে যা চাওয়া হয়েছিল তার চেয়ে বেশি করেছিলেন। যদি তিনি তার অংশ করতেন, তিনি জানতেন যে আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) তার যত্ন নেবেন। তাকে একটি শিশু হিসাবে নিয়ে যাওয়া হয়েছিল এবং তার পরিবার না জেনে বড় হয়েছিলেন। এবং এই প্রতিকূলতা সত্ত্বেও, তিনি একটি মহৎ মর্যাদার মানুষ হয়ে উঠেছিলেন, যারা তার সাথে দেখা করেছিল তাদের দ্বারা সম্মানিত, আল-আজিজ থেকে মহিলাদের যারা তাদের হাত কেটেছিল এবং রাজা পর্যন্ত - তারা সবাই ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) উৎকৃষ্ট গুণাবলীর জন্য প্রশংসা করেছিল। এটি একটি শিক্ষা যে পরিস্থিতি মানুষ তৈরি করে না। তারা কেবল তাকে নিজের কাছে প্রকাশ করে।</span>
                    </p>

                    <p className="mb-4">
                        এটিও উল্লেখযোগ্য যে নবী ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) গল্প কুরআনে একটি অনন্য স্থান ধারণ করে। তিনি একমাত্র নবী যার গল্প একটি একক সূরা, "সূরা ইউসুফ" শিরোনামে কালানুক্রমিকভাবে বলা হয়েছে। অন্যান্য নবীদের গল্পের সাথে এর বিপরীতে, যা বিভিন্ন সূরায় উল্লিখিত এবং একসাথে জোড়া লাগানোর প্রয়োজন। আমরা পাঠকদের দৃঢ়ভাবে সুপারিশ করি যে তারা সূরা ইউসুফের অনুবাদ শুনুন এবং অনুসরণ করুন, কারণ এটি সুন্দরভাবে নবী ইউসুফের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) যাত্রার সম্পূর্ণতা বর্ণনা করে।
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed text-center italic">
                                "নিশ্চয়ই তাদের গল্পে বোঝার লোকদের জন্য একটি শিক্ষা ছিল। কুরআন কখনই একটি উদ্ভাবিত বর্ণনা ছিল না, কিন্তু যা আগে ছিল তার একটি নিশ্চিতকরণ এবং সমস্ত জিনিসের একটি বিস্তারিত ব্যাখ্যা এবং বিশ্বাসী লোকদের জন্য পথনির্দেশ এবং রহমত।"
                                <br /><br />
                                <strong>(সূরা ইউসুফ আয়াত ১১১)</strong>
                            </p>
                        </CardContent>
                    </Card>
                </section>

            </div>
        </div>
    )
}
