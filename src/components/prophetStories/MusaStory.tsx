import {
  Card,
  CardContent,
} from "@/components/ui/card"

export default function MusaStory() {
  return (
    <div className="mb-12 mt-6 md:mt-10">

      {/* Header Image */}
      <div className="w-full mb-8">
        <img
          src="/images/prophet-stories/musa/story-of-prophet-musa-as.png"
          alt="মূসা (আঃ)-এর গল্প"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
        <span className="text-amber-600 dark:text-amber-500">
          নবী মূসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)
        </span>–এর গল্প
      </h1>

      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-10">
        ফেরাউন-এর বিরুদ্ধে সত্যের সংগ্রাম
      </p>

      <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-none text-justify space-y-8">

        {/* Birth */}
        <section>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img
                src="/images/prophet-stories/musa/baby-musa.png"
                alt="শিশু মূসা"
                className="rounded-lg"
              />
            </div>
            <div className="flex-1">
              <p>
                নবী মূসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)
                জন্মগ্রহণ করেন মিসরে, যখন ফেরাউন বনী ইসরাঈলের নবজাতক পুত্রদের হত্যা করছিল।
                আল্লাহর আদেশে, তাঁর মা তাঁকে একটি ঝুড়িতে রেখে নদীতে ভাসিয়ে দেন।
              </p>
            </div>
          </div>
        </section>

        {/* Palace */}
        <Card className="border-l-4 border-amber-500">
          <CardContent className="pt-6">
            <p className="italic">
              আল্লাহ শিশুটিকে ফেরাউনের প্রাসাদে পৌঁছে দেন।
              ফেরাউনের স্ত্রী আসিয়া তাঁকে লালন-পালন করেন।
            </p>
          </CardContent>
        </Card>

        {/* Madyan */}
        <section>
          <p>
            যুবক অবস্থায় এক দুর্ঘটনায় একজন কিবতী নিহত হলে,
            মূসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)
            মাদইয়ানে পালিয়ে যান। সেখানে তিনি একজন নবীর কন্যাকে বিয়ে করেন
            এবং বহু বছর মেষপালক হিসেবে জীবনযাপন করেন।
          </p>
        </section>

        {/* Prophethood */}
        <section>
          <img
            src="/images/prophet-stories/musa/mount-sinai.png"
            alt="তূর পাহাড়"
            className="rounded-lg my-6"
          />
          <p>
            তূর পাহাড়ে আল্লাহ সরাসরি তাঁর সঙ্গে কথা বলেন এবং তাঁকে নবী হিসেবে নির্বাচন করেন।
            আল্লাহ তাঁকে লাঠি ও উজ্জ্বল হাতের মুজিযা প্রদান করেন।
          </p>
        </section>

        {/* Pharaoh */}
        <Card className="border-l-4 border-amber-500">
          <CardContent className="pt-6">
            <p className="italic">
              “ফেরাউনের কাছে যাও, সে সীমালঙ্ঘন করেছে”
              <br />
              <span className="text-xs">— সূরা তাহা</span>
            </p>
          </CardContent>
        </Card>

        {/* Red Sea */}
        <section>
          <img
            src="/images/prophet-stories/musa/red-sea.png"
            alt="লাল সাগর বিভক্ত"
            className="rounded-lg my-6"
          />
          <p>
            আল্লাহর আদেশে লাল সাগর দ্বিখণ্ডিত হয়।
            বনী ইসরাঈল রক্ষা পায় এবং ফেরাউন তার সেনাবাহিনীসহ ধ্বংস হয়।
          </p>
        </section>

        {/* Tawrat */}
        <section>
          <p>
            পরবর্তীতে আল্লাহ নবী মূসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)
            -কে তাওরাত দান করেন।
            তিনি ধৈর্য ও দৃঢ়তার সঙ্গে জাতিকে পথনির্দেশ দেন।
          </p>
        </section>

        {/* End */}
        <Card className="border-l-4 border-amber-500">
          <CardContent className="pt-6">
            <p className="italic text-center">
              নবী মূসা (<span className="font-arabic">عَلَيْهِ ٱلسَّلَامُ</span>)
              ছিলেন সত্য, সাহস ও আল্লাহর উপর পরিপূর্ণ ভরসার প্রতীক।
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
