import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function DhulKiflStory() {
    return (
        <div className="mb-12 mt-6 md:mt-10">
            {/* Header Image */}
            <div className="w-full mb-8">
                <img 
                    src="/images/prophet-stories/dhul-kifl/story-of-prophet-dhul-kifl-as.png" 
                    alt="যুল-কিফল (আঃ)-এর গল্প" 
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4 md:mb-6">
                <span className="text-amber-600 dark:text-amber-500">নবী যুল-কিফল (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর গল্প
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-10 uppercase">
                <span className="text-amber-600 dark:text-amber-500">নবী যুল-কিফল <span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span></span> কে?
            </p>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6 md:space-y-8">
                
                {/* Introduction */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/dhul-kifl/Dhul-Kifl Calligraphy.png" 
                                alt="নবী যুল-কিফলের ক্যালিগ্রাফি" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="mb-4">
                                যুল-কিফলের (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) গল্প কিছুটা রহস্যময়।
                            </p>
                        </div>
                    </div>
                </section>

                {/* Meaning of the Name */}
                <section className="my-8 md:my-12">
                    <p className="mb-4">
                        "যুল-কিফল" নামের আক্ষরিক অর্থ হল "ভাঁজের অধিকারী" বা "দ্বিগুণ প্রতিদান বা অংশের অধিকারী বা প্রদানকারী।" এই নামটি নির্দেশ করে যে তিনি এমন একজন নবী ছিলেন যিনি তার কাছ থেকে যা প্রয়োজন ছিল তার চেয়ে বেশি দিয়েছিলেন। তিনি তার প্রার্থনা, উপাসনা এবং কাজে "দ্বিগুণ" বা গুণিতক দিয়েছিলেন। তার কাছ থেকে যা প্রয়োজন ছিল, তিনি আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সন্তুষ্টির জন্য আরও বেশি করেছিলেন।
                    </p>

                    <p className="mb-4">
                        আরেকটি সম্ভাব্য ব্যাখ্যা হল যে আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) একজন নবী হিসাবে, তিনি দ্বিগুণ দায়িত্ব বহন করেছিলেন। উদাহরণস্বরূপ, একটি বিবরণ পরামর্শ দেয় যে তিনি দিনে রোজা রাখা, রাতে নিজেকে প্রার্থনা এবং উপাসনায় নিবেদিত করা, এবং মানুষের মধ্যে একজন বিচারক হওয়ার জন্য দায়ী ছিলেন। এর জন্য তার আবেগের উপর সম্পূর্ণ নিয়ন্ত্রণ থাকা এবং রাগের লক্ষণ দেখানো এড়ানো প্রয়োজন ছিল।
                    </p>

                    <p className="mb-4">
                        মনে রাখবেন যে যুল-কিফলের ভূমিকার সঠিক প্রকৃতি বা এই উপাধির পিছনে কারণটি এখনও অনুমানের বিষয়। তবুও, যুল-কিফল সম্পর্কে যা জানা যায় তা কুরআনের নিম্নলিখিত দুটি আয়াত থেকে আসে।
                    </p>
                </section>

                {/* Quranic Verses - Surah Al-Anbiya */}
                <section className="my-8 md:my-12">
                    <p className="mb-4">
                        সূরা আল-আনবিয়া, আয়াত ৮৫-৮৬-এ,
                    </p>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                وَإِسۡمَٰعِيلَ وَإِدۡرِيسَ وَذَا ٱلۡكِفۡلِۖ كُلّٞ مِّنَ ٱلصَّـٰبِرِينَ وَأَدۡخَلۡنَٰهُمۡ فِي رَحۡمَتِنَآۖ إِنَّهُم مِّنَ ٱلصَّـٰلِحِينَ
                            </p>
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>রোমানীকরণ:</strong> Wa Ismaa'eela wa Idreesa wa Zal Kifli kullum minas saabireen (85) Wa adkhalnaahum fee rahmatinaa innahum minas saaliheen (86)
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>বাংলা অনুবাদ:</strong> "এবং (আমরা একই অনুগ্রহ প্রদান করেছি) ইসমাঈল, ইদ্রিস এবং যুল-কিফলের উপর, কারণ তারা সবাই ধৈর্যশীল ছিল। (৮৫) এবং আমরা তাদের আমাদের রহমতে প্রবেশ করিয়েছি, কারণ তারা ছিল ধার্মিকদের মধ্যে। (৮৬)"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (কুরআন ২১:৮৫-৮৬)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Quranic Verses - Surah Sad */}
                <section className="my-8 md:my-12">
                    <p className="mb-4">
                        কুরআনে দ্বিতীয় উল্লেখটি সূরা সাদ আয়াত ৪৮-৫২ থেকে:
                    </p>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                وَٱذۡكُرۡ إِسۡمَٰعِيلَ وَٱلۡيَسَعَ وَذَا ٱلۡكِفۡلِۖ وَكُلّٞ مِّنَ ٱلۡأَخۡيَارِ هَٰذَا ذِكۡرٞۚ وَإِنَّ لِلۡمُتَّقِينَ لَحُسۡنَ مَـَٔابٖ جَنَّـٰتِ عَدۡنٖ مُّفَتَّحَةٗ لَّهُمُ ٱلۡأَبۡوَٰبُ مُتَّكِـِٔينَ فِيهَا يَدۡعُونَ فِيهَا بِفَٰكِهَةٖ كَثِيرَةٖ وَشَرَابٖ ۞وَعِندَهُمۡ قَٰصِرَٰتُ ٱلطَّرۡفِ أَتۡرَابٌ
                            </p>
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>রোমানীকরণ:</strong> Wazkur Ismaa'eela wal Yasa'a wa Zal-Kifli wa kullun minal akhyaar (48) Haazaa zikrun wa inna lil muttaqeena la husna ma aab (49) Jannaati 'adnin mufattahatan lahumul abwaab (50) Muttaki'eena feehaa yad'oona feehaa bifaakihatin kaseeratinw wa sharaab (51) Wa 'indahum qaasiraatut tarfi atraab (52)
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>বাংলা অনুবাদ:</strong> "এবং স্মরণ কর ইসমাঈল, আল-ইয়াসা এবং যুল-কিফলকে। সবাই ছিল শ্রেষ্ঠদের মধ্যে। (৪৮) এটি একটি স্মরণ। আল্লাহভীরুদের জন্য একটি উৎকৃষ্ট প্রত্যাবর্তনস্থল রয়েছে (৪৯) চিরস্থায়ী বাগান যার দরজা তাদের জন্য প্রশস্ত খোলা রয়েছে (৫০) যেখানে তারা হেলান দিয়ে বসবে, যেখানে তারা প্রচুর ফল এবং পানীয় চাইবে, (৫১) এবং যেখানে তাদের সাথে থাকবে সুসঙ্গত, লজ্জাশীল সঙ্গিনী। (৫২)"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (কুরআন ৩৮:৪৮-৫২)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Was Dhul-Kifl a Prophet? */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        যুল-কিফল কি <span className="text-amber-600 dark:text-amber-500">একজন নবী</span> ছিলেন?
                    </h2>

                    <p className="mb-4">
                        কুরআনের দুটি আয়াত, যুল-কিফলকে সম্মান করার সময়, তার সম্পর্কে সীমিত তথ্য প্রদান করে, যা তার সঠিক অবস্থা সম্পর্কে বিভিন্ন মতামতের দিকে নিয়ে যায়। পণ্ডিতরা বিতর্ক করেন যে যুল-কিফল আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) একজন নবী (নবী) ছিলেন না একজন সাধু ছিলেন। একটি তত্ত্ব হল যে যুল-কিফল বাইবেলের নবী ইজেকিয়েল হতে পারেন। যাইহোক, এই সংযোগটি প্রমাণিত নয়।
                    </p>

                    <div className="flex justify-center my-6">
                        <img 
                            src="/images/prophet-stories/dhul-kifl/Prophet-Names.png" 
                            alt="নবী নাম" 
                            className="w-full max-w-md h-auto rounded-lg"
                        />
                    </div>

                    <p className="mb-4 text-center text-sm italic">
                        সবচেয়ে শক্তিশালী মতামত হল যে যুল-কিফল আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) একজন নবী, প্রদত্ত আয়াত যেখানে তাকে ইসমাঈল (<span className="font-arabic">عَلَيْهِ السَّلَامُ</span>) এবং ইদ্রিস (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) এর পাশাপাশি উল্লেখ করা হয়েছে। যৌক্তিক সিদ্ধান্ত হবে যে যেহেতু তার নাম অন্যান্য নবীদের সাথে তালিকাভুক্ত করা হয়েছে, তিনিও অবশ্যই একজন নবী। আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সর্বোত্তম জানেন।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Story by Ibn Jarir */}
                <section className="my-8 md:my-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4 text-center">
                        <span className="text-amber-600 dark:text-amber-500">ইবনে জারির</span> দ্বারা নবী যুল-কিফলের গল্প
                    </h2>

                    <p className="mb-4">
                        ইমাম ইবনে জারির বর্ণনা করেছেন যে তিনি একজন নবী ছিলেন না বরং একজন ধার্মিক ব্যক্তি ছিলেন এবং নবীর জীবনের আরও অন্তর্দৃষ্টি প্রদান করেছিলেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                যখন নবী আল-ইয়াসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) (ইলিশা) বৃদ্ধ হয়ে উঠেছিলেন, তিনি একজন উত্তরসূরি নিয়োগ করতে চাচ্ছিলেন যিনি ইসরায়েলীদের পথনির্দেশ করতে সাহায্য করতে পারবেন এবং এমন কাউকে প্রয়োজন ছিল যার শান্ত স্বভাব এবং পরিষ্কার মন রয়েছে। তিনি সঙ্গীদের একটি দল একত্রিত করেছিলেন এবং তিনটি শর্ত নির্ধারণ করেছিলেন যা তিনি বিশ্বাস করেছিলেন যে একজন মহান নেতার প্রমাণ হবে:
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/dhul-kifl/Prophet Ilyasa.png" 
                                alt="নবী ইলিয়াসা" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed italic">
                                <em>"যে ব্যক্তি আমার প্রতিস্থাপনের জন্য বিবেচনা করা হবে সে হল এমন একজন যে সারা বছর দিনে রোজা রাখে, রাত জুড়ে প্রার্থনায় আল্লাহকে স্মরণ করে, এবং কখনই তার রাগ হারাতে পারে না।"</em>
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/dhul-kifl/Unknow person stood up.png" 
                                alt="অজানা ব্যক্তি উঠে দাঁড়িয়েছে" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                <strong className="text-amber-600 dark:text-amber-500">একজন অপেক্ষাকৃত অজানা ব্যক্তি যাকে লোকেরা অবজ্ঞা করত তিনি উঠে দাঁড়িয়েছিলেন এবং নিজেকে কাজের জন্য প্রস্তাব করেছিলেন।</strong> নবী ইয়াসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) তাকে জিজ্ঞাসা করেছিলেন যে এই তিনটি শর্ত পূরণ হয়েছে কিনা। লোকটি তিনটির সবকটিতে হ্যাঁ উত্তর দিয়েছিল, কিন্তু ইয়াসা তার দাবিতে বিশ্বাস করেননি এবং যেকোনো কারণে তাকে প্রত্যাখ্যান করেছিলেন।
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        আরও কয়েক দিন কেটে যাওয়ার পর, ইয়াসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>) আবার দলটিকে একত্রিত করেছিলেন এবং পুনরাবৃত্তি করেছিলেন যে তার শর্তগুলি পূরণ হয়েছে কিনা। <strong>সবাই একই লোকের পাশে বসে রইল।</strong> ইয়াসা, তার অধ্যবসায় দেখে, লোকটিকে তার ডেপুটি হিসাবে কাজ করার জন্য নিয়োগ করেছিলেন।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/dhul-kifl/Satan.png" 
                                alt="শয়তান" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                কিন্তু লোকটির ইচ্ছাকে সত্যিই পরীক্ষা করার জন্য, তিনি কয়েকজন লোককে অনুরোধ করেছিলেন লোকটিকে এমন কিছু করতে প্ররোচিত করার চেষ্টা করতে যা তাকে তার ডেপুটি থেকে সরিয়ে দেওয়ার ফলাফল দেবে।
                            </p>

                            <p className="mb-4">
                                তারা সবাই চেষ্টা করেছিল, এবং তারা সবাই ব্যর্থ হয়েছিল।
                            </p>

                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>তারপর ইবলিস (শয়তান) আল-ইয়াসার কাছে তার সেবা প্রদান করেছিল,</strong><br />
                                        <em>"তাকে আমার কাছে ছেড়ে দিন। আমি তার যত্ন নেব।"</em>
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

                {/* The Man's Routine */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/dhul-kifl/3 Routine.png" 
                                alt="৩টি রুটিন" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="mb-4">
                                এই মুহূর্তে, লোকটি একটি রুটিন তৈরি করেছিল যার মধ্যে ছিল <strong>দিনে রোজা রাখা, প্রার্থনা করা, এবং রাত জুড়ে আল্লাহকে স্মরণ করা। <span className="text-amber-600 dark:text-amber-500">দুপুরে, তিনি নিজেকে পুনরুজ্জীবিত করার জন্য একটি ছোট ঘুম নিতেন।</span></strong>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Iblis's Attempts */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="/images/prophet-stories/dhul-kifl/Iblis disguise as old man.png" 
                                alt="ইবলিস বৃদ্ধ ব্যক্তি হিসাবে ছদ্মবেশ" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>ইবলিস তার দুপুরের ঘুমের ঠিক আগে লোকটিকে বিরক্ত করার সিদ্ধান্ত নিয়েছিল দরজায় কড়া নাড়িয়ে এবং ভিতরে আসতে দেওয়ার জন্য অনুরোধ করে, বলছিল,</strong>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <em>"আমি একজন বৃদ্ধ নির্যাতিত মানুষ।"</em>
                                    </p>
                                </CardContent>
                            </Card>

                            <p className="mb-4">
                                ইবলিসকে স্বাগত জানানো হয়েছিল এবং সে যে নিষ্ঠুরতা এবং অবিচারের শিকার হয়েছিল সে সম্পর্কে বকবক করা শুরু করেছিল। <strong className="text-amber-600 dark:text-amber-500">সে গল্পটি এত দীর্ঘ করেছিল যে লোকটির দৈনিক ঘুমের জন্য কোন সময় বাকি ছিল না।</strong> লোকটি পরের দিন তার আদালতে ইবলিসকে দেখার প্রস্তাব করেছিল যাতে তার জন্য ন্যায়বিচার করা হয়।
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        লোকটি পরের দিন ইবলিসের জন্য অপেক্ষা করেছিল, কিন্তু সে আসেনি। পরের সকালে, সে ইবলিসের ফিরে আসার জন্য অপেক্ষা করেছিল, কিন্তু আবারও, সে আসেনি। <strong>অবশেষে, <span className="text-amber-600 dark:text-amber-500">লোকটি তার নিয়মিত ঘুম নেওয়ার ঠিক আগে,</span> ইবলিস এসেছিল এবং দরজায় আঘাত করা শুরু করেছিল।</strong>
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <Card className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500">
                                <CardContent className="pt-6">
                                    <p className="text-sm md:text-base leading-relaxed italic mb-4">
                                        <strong>লোকটি, এখনও শান্ত, তাকে প্রশ্ন করেছিল,</strong><br />
                                        <em>"আমি কি তোমাকে গতকাল আমার আদালতে আসতে বলিনি, কিন্তু তুমি আসতে ব্যর্থ হয়েছ, এবং তুমি আজ সকালেও আসনি?"</em>
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed italic">
                                        <strong>এতে ইবলিস উত্তর দিয়েছিল,</strong><br />
                                        <em>"স্যার, আমার শত্রুরা খুব দুষ্ট লোক; যখন তারা জানতে পারল যে আপনি আপনার আদালতে বসে আছেন এবং তাদের আমাকে যা পাওনা তা ফিরিয়ে দিতে বাধ্য করবেন, তারা আদালতের বাইরে বিষয়টি নিষ্পত্তি করতে সম্মত হয়েছিল। কিন্তু যত তাড়াতাড়ি আপনি আপনার আদালত ছেড়ে গেছেন, তারা তাদের প্রতিশ্রুতি থেকে ফিরে গেছে।"</em>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="/images/prophet-stories/dhul-kifl/Iblis Visit Home.png" 
                                alt="ইবলিস বাড়িতে পরিদর্শন" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <p className="mb-4">
                        কথোপকথনটি দীর্ঘ সময় ধরে চলতে থাকে, এবং যখন সে তার স্বাভাবিক ঘুম হারিয়ে ফেলেছিল, লোকটি বিষয়গুলি নিষ্পত্তি করার জন্য ইবলিসকে তার আদালতে আবার দেখার জন্য অনুরোধ করেছিল। <strong>আবারও, লোকটি ধৈর্য সহকারে আদালতে অপেক্ষা করেছিল, কিন্তু ইবলিস আসেনি।</strong> সেই দিন সে বাড়িতে ফিরে এসে ঘুমের অভাবের কারণে ক্লান্ত বোধ করেছিল। সে পরিবারকে বলেছিল যে কাউকে দরজায় কড়া নাড়তে দেবে না।
                    </p>

                    <p className="mb-4">
                        <strong>ইবলিস আবারও তার ঘুমকে বিরক্ত করার চেষ্টা করেছিল</strong> যাতে সে রোজা রাখতে এবং প্রার্থনা করতে না পারে এবং আশা করেছিল যে সে রাগান্বিত হবে, কিন্তু যখন সে দরজায় কড়া নাড়ার চেষ্টা করেছিল, লোকটির পরিবারের সদস্যরা তাকে থামিয়েছিল। ইবলিস দৃঢ়প্রতিজ্ঞ ছিল; সে লোকটির বাড়িতে অন্য উপায়ে প্রবেশ করেছিল এবং তার ঘরের দরজায় কড়া নাড়া শুরু করেছিল।
                    </p>

                    <div className="flex justify-center my-6">
                        <img 
                            src="/images/prophet-stories/dhul-kifl/Iblis.png" 
                            alt="ইবলিস" 
                            className="w-full max-w-md h-auto rounded-lg"
                        />
                    </div>

                    <p className="mb-4 text-center text-sm italic">
                        <strong>লোকটি দেখেছিল যে ইবলিস বাড়ির ভিতরে এসেছে যখন দরজা বন্ধ ছিল।</strong>
                    </p>

                    <p className="mb-4">
                        তারপর সে হঠাৎ সচেতন হয়ে উঠেছিল যে ইবলিস তার সামনে দাঁড়িয়ে থাকা লোকটি এবং তাকে জিজ্ঞাসা করেছিল,<br />
                        <em>"তুমি কি আল্লাহর শত্রু?"</em>
                    </p>

                    <p className="mb-4">
                        সে স্বীকার করেছিল যে সে ইবলিস এবং মন্তব্য করেছিল,<br />
                        <em>"তুমি আমার সমস্ত পরিকল্পনা ব্যর্থ করেছ এবং আমার নকশায় তোমাকে প্রলুব্ধ করার জন্য আমার সমস্ত প্রচেষ্টা হতাশ করেছ। আমার উদ্দেশ্য ছিল কোনোভাবে তোমাকে রাগান্বিত করা, যাতে ইয়াসার সামনে তোমার দাবিগুলির মধ্যে একটি মিথ্যা প্রমাণিত হতে পারে।"</em>
                    </p>
                </section>

                {/* Conclusion */}
                <section className="my-8 md:my-12">
                    <p className="mb-4">
                        ইমাম ইবনে জারিরের মতামত ছিল যে যুল-কিফল একটি নাম ছিল না বরং এই পর্বের কারণে এই লোকটিকে দেওয়া একটি উপাধি ছিল। নবীর প্রকৃত নাম অজানা রয়ে গেছে।
                    </p>
                </section>

            </div>
        </div>
    )
}
