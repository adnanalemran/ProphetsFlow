import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function AlYasaStory() {
    return (
        <div className="mb-12 mt-6 md:mt-10">
            {/* Header Image */}
            <div className="w-full mb-8">
                <img 
                    src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/al-yasa/the-story-of-prophet-al-yasa.png" 
                    alt="আল-ইয়াসা (আঃ)-এর গল্প" 
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-10">
                <span className="text-amber-600 dark:text-amber-500">নবী আল-ইয়াসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)</span>-এর গল্প
            </h1>

            <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6 md:space-y-8">
                
                {/* Introduction */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/al-yasa/Al-Yasa%20Calligraphy.png" 
                                alt="আল-ইয়াসার ক্যালিগ্রাফি" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="mb-4">
                                নবী আল-ইয়াসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>), যাকে ইংরেজিতে ইলিশা হিসাবেও উল্লেখ করা হয়, হলেন ইহুদি ধর্ম, খ্রিস্টধর্ম এবং ইসলামে একজন সম্মানিত নবী। আল ইয়াসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) ছিলেন ইসরায়েলের সন্তানদের মধ্যে একজন, ইউসুফ ইবনে ইয়াকুব ইবনে ইসহাক ইবনে ইব্রাহিমের (তাদের সকলের উপর শান্তি বর্ষিত হোক) বংশধর।
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        <span className="text-amber-600 dark:text-amber-500">আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) নবী আল-ইয়াসাকে নবী ইলিয়াসের (ইলিয়াহ) উত্তরসূরি হিসাবে পাঠিয়েছিলেন ইসরায়েলের সন্তানদের পথনির্দেশ করতে সাহায্য করার জন্য।</span> তিনি তার লোকদের মধ্যে বসবাস করতেন এবং তাদের আল্লাহর (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) আইন এবং আদেশ মান্য করতে আহ্বান করেছিলেন।
                    </p>

                    <p className="mb-4">
                        তার জীবন সম্পর্কে খুব বেশি জানা যায় না, কিন্তু কুরআন তাকে যে দুটি আয়াতে উল্লেখ করা হয়েছে সেখানে উচ্চ প্রশংসা করে।
                    </p>
                </section>

                {/* Quranic Verses - Surah Al-An'am */}
                <section className="my-8 md:my-12">
                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                وَوَهَبۡنَا لَهُۥٓ إِسۡحَٰقَ وَيَعۡقُوبَۚ كُلًّا هَدَيۡنَاۚ وَنُوحًا هَدَيۡنَا مِن قَبۡلُۖ وَمِن ذُرِّيَّتِهِۦ دَاوُۥدَ وَسُلَيۡمَٰنَ وَأَيُّوبَ وَيُوسُفَ وَمُوسَىٰ وَهَٰرُونَۚ وَكَذَٰلِكَ نَجۡزِي ٱلۡمُحۡسِنِينَ وَزَكَرِيَّا وَيَحۡيَىٰ وَعِيسَىٰ وَإِلۡيَاسَۖ كُلّٞ مِّنَ ٱلصَّـٰلِحِينَ وَإِسۡمَٰعِيلَ وَٱلۡيَسَعَ وَيُونُسَ وَلُوطٗاۚ وَكُلّٗا فَضَّلۡنَا عَلَى ٱلۡعَٰلَمِينَ وَمِنۡ ءَابَآئِهِمۡ وَذُرِّيَّـٰتِهِمۡ وَإِخۡوَٰنِهِمۡۖ وَٱجۡتَبَيۡنَٰهُمۡ وَهَدَيۡنَٰهُمۡ إِلَىٰ صِرَٰطٖ مُّسۡتَقِيمٖ
                            </p>
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>রোমানীকরণ:</strong> Wa wahabnaa lahoo ishaaqa wa ya'qoob; kullan hadainaa; wa Noohan hadainaa min qablu wa min zurriyyatihee Daawooda wa Sulaimaana wa Ayyooba wa Yoosufa wa Moosaa wa Haaroon; wa kazaalika najzil muhsineen (84) Wa Zakariyyaa wa Yahyaa wa 'Eesaa wa Illyaasa kullum minas saaliheen (85) Wa Ismaa'eela wal Yasa'a wa Yoonusa wa Lootaa; wa kullan faddalnaa 'alal 'aalameen (86) Wa min aabaaa'ihim wa zurriyyaatihim wa ikhwaanihim wajtabainaahum wa hadainaahum ilaa Siraatim Mustaqeem (87)
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>বাংলা অনুবাদ:</strong> "এবং আমরা ইব্রাহিমকে (সন্তান) ইসহাক (আইজাক) এবং ইয়াকুব (জ্যাকব) দান করেছিলাম এবং তাদের প্রত্যেককে আমরা সঠিক পথে পথনির্দেশ করেছিলাম যেমন আমরা আগে নূহকে সঠিক পথে পথনির্দেশ করেছিলাম; এবং (তার বংশধরদের মধ্যে আমরা পথনির্দেশ করেছিলাম) দাউদ (ডেভিড) এবং সুলাইমান (সলোমন), আইয়ুব (জব), ইউসুফ (জোসেফ), মুসা (মোজেস) এবং হারুন (আরন)। এইভাবে আমরা যারা ভাল কাজ করে তাদের পুরস্কৃত করি। (৮৪) (এবং তার বংশধরদের মধ্যে আমরা পথনির্দেশ করেছিলাম) যাকারিয়া (জাকারিয়া), ইয়াহিয়া (জন), ঈসা (যীশু) এবং ইলিয়াস (ইলিয়াস): তাদের প্রত্যেকেই ছিল ধার্মিকদের মধ্যে। (৮৫) (এবং তার বংশধরদের মধ্যে আমরা পথনির্দেশ করেছিলাম) ইসমাঈল (ইসমাঈল), আল-ইয়াসা' (ইলিশা), ইউনুস (জোনাহ), এবং লুত (লট)। এবং তাদের প্রত্যেককে আমরা সমস্ত মানবজাতির উপর শ্রেষ্ঠত্ব দিয়েছিলাম। (৮৬) এবং একইভাবে আমরা আমাদের কাজের জন্য নির্বাচন করেছিলাম এবং তাদের পূর্বপুরুষদের এবং তাদের সন্তানদের এবং তাদের ভাইদের মধ্যে কিছুকে সঠিক পথে পথনির্দেশ করেছিলাম। (৮৭)"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— <a href="https://myislam.org/surah-al-anam/ayat-84/" className="text-blue-600 dark:text-blue-400">সূরা আল-আনআম, আয়াত ৮৪-৮৭</a></span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Quranic Verses - Surah Sad */}
                <section className="my-8 md:my-12">
                    <p className="mb-4">
                        সূরা সাদ আয়াত ৪৮-৫০-এ আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) বলেছেন,
                    </p>

                    <Card className="my-6 md:my-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-base md:text-xl font-arabic text-right leading-relaxed break-words mb-4">
                                وَٱذۡكُرۡ إِسۡمَٰعِيلَ وَٱلۡيَسَعَ وَذَا ٱلۡكِفۡلِۖ وَكُلّٞ مِّنَ ٱلۡأَخۡيَارِ هَٰذَا ذِكۡرٞۚ وَإِنَّ لِلۡمُتَّقِينَ لَحُسۡنَ مَـَٔابٖ جَنَّـٰتِ عَدۡنٖ مُّفَتَّحَةٗ لَّهُمُ ٱلۡأَبۡوَٰبُ
                            </p>
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                <strong>রোমানীকরণ:</strong> Wazkur Ismaa'eela wal Yasa'a wa Zal-Kifli wa kullun minal akhyaar (48) Haazaa zikrun wa inna lil muttaqeena la husna ma aab (49) Jannaati 'adnin mufattahatan lahumul abwaab (50)
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                <strong>বাংলা অনুবাদ:</strong> "এবং স্মরণ কর ইসমাঈল (ইসমাঈল), ইলিশা (আল-ইয়াসা), এবং যুল-কিফলকে। সবাই ছিল শ্রেষ্ঠদের মধ্যে। (৪৮) এটি একটি স্মরণ। আল্লাহভীরুদের জন্য একটি উৎকৃষ্ট প্রত্যাবর্তনস্থল রয়েছে (৪৯) চিরস্থায়ী বাগান যার দরজা তাদের জন্য খোলা থাকবে (৫০)।"<br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— <a href="https://myislam.org/surah-sad/ayat-48/" className="text-blue-600 dark:text-blue-400">সূরা সাদ, আয়াত ৪৮-৫০</a></span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* After Elijah's Passing */}
                <section className="my-8 md:my-12">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="flex-1">
                            <p className="mb-4">
                                <span className="text-amber-600 dark:text-amber-500">ইবনে কাথির বলেছেন যে ইলিয়াহের মৃত্যুর পর</span>, মতবিরোধ বৃদ্ধি পেয়েছিল, ঘটনাগুলি গতি পেয়েছিল, এবং সর্বত্র পাপ বৃদ্ধি পেয়েছিল। <strong>অবশেষে, অত্যাচারীদের সংখ্যা বৃদ্ধি পেয়েছিল এবং নবীদের এবং তাদের বার্তাকে হত্যা করার চেষ্টা করেছিল।</strong>
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/al-yasa/Sword.png" 
                                alt="তরোয়াল" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <img 
                        src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/al-yasa/Prophet%20Ilyas%20&%20Al-Yasa.png" 
                        alt="নবী ইলিয়াস ও আল-ইয়াসা" 
                        className="w-full h-auto rounded-lg shadow-lg my-6"
                    />

                    <p className="mb-4 text-center text-sm italic">
                        কিছু উৎস দাবি করে যে নবী ইয়াসা (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) বাআলাবাকের রাজা থেকে পালাতে কাসিয়ুম পর্বতের একটি গুহায় নবী ইলিয়াসের (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) সাথে লুকিয়ে ছিলেন। যখন ইলিয়াস (<span className="font-arabic">عَلَيْهِ ٱلسَّলَামُ</span>) মারা গিয়েছিলেন, তখন তিনি নবী হিসাবে তার উত্তরসূরি হয়েছিলেন।
                    </p>
                </section>

                {/* Separator */}
                <div className="flex justify-center my-8 md:my-12">
                    <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>

                {/* Al-Yasa's Character */}
                <section className="my-8 md:my-12">
                    <p className="mb-4">
                        আল-ইয়াসার গল্প বাইবেলে আরও বিশদভাবে বলা হয়েছে, কিন্তু সমস্ত পাঠ্যে, একটি জিনিস সামঞ্জস্যপূর্ণ থাকে, যা আমরা শিখতে পারি তা হল আল-ইয়াসার চরিত্র।
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 my-6">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <img 
                                src="https://myislam.sfo3.digitaloceanspaces.com/assets/2024/prophet-stories/al-yasa/prophet-al-yasa-people.png" 
                                alt="নবী আল-ইয়াসা" 
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <p className="mb-4">
                                <strong>তিনি তার লোকদের সঠিক পথে পথনির্দেশ করতে ভালবাসতেন এবং নিবেদিত ছিলেন। তিনি ধার্মিক ছিলেন এবং সর্বদা নম্রতা এবং সঠিক কাজ করার আবেগ দেখিয়েছিলেন, প্রকাশ্যে এবং ব্যক্তিগতভাবে। এটি এমন কিছু যা আমরা সবাই চেষ্টা করতে পারি এবং অনুশীলন করতে পারি।</strong>
                            </p>
                        </div>
                    </div>

                    <p className="mb-4">
                        আল্লাহ (<span className="font-arabic">سُبْحَٰنَهُۥ وَتَعَٰلَىٰ</span>) সূরা বাকারা, আয়াত ১৭৭-এ বলেছেন,
                    </p>

                    <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                            <p className="text-sm md:text-base leading-relaxed">
                                <em>"ধার্মিকতা এ নয় যে তুমি তোমার মুখ পূর্ব বা পশ্চিম দিকে ফিরাও, কিন্তু [সত্য] ধার্মিকতা হল [যে] আল্লাহ, শেষ দিন, ফেরেশতাদের, কিতাব এবং নবীদের উপর বিশ্বাস করে এবং সম্পদ দেয়, ভালবাসা সত্ত্বেও, আত্মীয়স্বজন, এতিম, অভাবী, ভ্রমণকারী, যারা [সাহায্য] চায়, এবং দাসদের মুক্ত করার জন্য; [এবং যে] নামাজ প্রতিষ্ঠা করে এবং যাকাত (বাধ্যতামূলক দান) দেয়; [যারা] তাদের প্রতিশ্রুতি পূরণ করে যখন তারা প্রতিশ্রুতি দেয়; এবং [যারা] দারিদ্র্য এবং অসুস্থতা এবং যুদ্ধের সময় ধৈর্যশীল। তারাই হল যারা সত্য হয়েছে, এবং তারাই হল যারা ধার্মিক।"</em><br />
                                <span className="text-xs text-gray-600 dark:text-gray-400">— (<a href="https://myislam.org/surah-baqarah/ayat-177/" className="text-blue-600 dark:text-blue-400">কুরআন ২:১৭৭</a>)</span>
                            </p>
                        </CardContent>
                    </Card>
                </section>

            </div>
        </div>
    )
}
