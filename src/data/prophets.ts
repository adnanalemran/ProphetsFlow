export interface ProphetInfo extends Record<string, unknown> {
    id: string;
    name: string;
    banglaName: string;
    arabicName: string;
    title?: string; // e.g., "Father of Humanity"
    era?: string;   // e.g., "Beginning of Creation"
    description: string;
    fullStory?: string; // Detailed narrative
    quranRefs?: { surah: string; verse: string; text?: string }[];
    hadithRefs?: string[];
    keyEvents?: string[];
    mentioned: number; // Times mentioned in Quran
}

export const prophets: ProphetInfo[] = [
    {
        id: '1',
        name: 'Adam',
        banglaName: 'আদম (আঃ)',
        arabicName: 'آدم',
        title: 'মানবজাতির পিতা (আবুল বাশার)',
        era: 'সৃষ্টির সূচনা',
        description: 'প্রথম মানুষ এবং প্রথম নবী। আল্লাহ তাঁকে মাটি থেকে সৃষ্টি করেছেন এবং তাঁকে সমস্ত জিনিসের নাম শিক্ষা দিয়েছেন।',
        fullStory: `হযরত আদম (আঃ) ছিলেন আল্লাহ তাআলার সৃষ্ট প্রথম মানুষ ও প্রথম নবী। আল্লাহ তাআলা ফেরেশতাদের জানালেন যে তিনি পৃথিবীতে তাঁর প্রতিনিধি বা খলিফা সৃষ্টি করতে চান। ফেরেশতারা প্রশ্ন তুলল, কিন্তু আল্লাহ বললেন, "আমি যা জানি, তোমরা তা জানো না।"

আল্লাহ আদম (আঃ)-কে বিভিন্ন ধরনের মাটি দিয়ে সৃষ্টি করলেন এবং তাঁর মধ্যে রুহ ফুঁকে দিলেন। এরপর আল্লাহ তাঁকে সমস্ত জিনিসের নাম শিক্ষা দিলেন, যা ফেরেশতারা জানত না। আল্লাহ ফেরেশতাদের নির্দেশ দিলেন আদমকে সিজদা করতে। ইবলিস ছাড়া সবাই সিজদা করল। ইবলিস অহংকার করে বলল, "আমি আগুনের তৈরি, আর সে মাটির।" এই অবাধ্যতার কারণে ইবলিস অভিশপ্ত হলো।

আল্লাহ আদম (আঃ)-এর সঙ্গিনী হিসেবে হাওয়া (আঃ)-কে সৃষ্টি করলেন এবং তাঁদের জান্নাতে বসবাসের সুযোগ দিলেন। তবে একটি নির্দিষ্ট গাছের ফল খেতে নিষেধ করলেন। ইবলিসের প্ররোচনায় তাঁরা সেই নিষিদ্ধ ফল ভক্ষণ করেন। ফলে তাঁদের জান্নাত থেকে পৃথিবীতে পাঠিয়ে দেওয়া হলো।

পৃথিবীতে এসে তাঁরা দীর্ঘকাল তওবা ও কান্নাকাটি করেন। অবশেষে আরাফাতের ময়দানে জিলহজ্ব মাসে তাঁদের তওবা কবুল হয়। তাঁরাই মানবজাতির আদি পিতা-মাতা।`,
        quranRefs: [
            { surah: 'সূরা আল-বাকারা', verse: '৩০-৩৮', text: 'আর যখন তোমার রব ফেরেশতাদের বললেন, "নিশ্চয় আমি যমিনে একজন খলিফা সৃষ্টি করছি"...' },
            { surah: 'সূরা আল-আরাফ', verse: '১১-২৫', text: 'আর আমি তো তোমাদের সৃষ্টি করেছি, তারপর তোমাদের আকৃতি দিয়েছি, তারপর ফেরেশতাদের বলেছি, আদমকে সিজদা কর...' }
        ],
        hadithRefs: [
            'রাসূলুল্লাহ (সাঃ) বলেছেন: "তোমাদের মধ্যে সর্বোত্তম দিন হলো জুমআর দিন। এই দিনে আদম (আঃ)-কে সৃষ্টি করা হয়েছে, এই দিনেই তাঁকে জান্নাতে প্রবেশ করানো হয়েছে এবং এই দিনেই তাঁকে সেখান থেকে বের করা হয়েছে।" (সহীহ মুসলিম)',
            'নবী করীম (সাঃ) বলেছেন: "আল্লাহ আদমকে সৃষ্টি করেছেন, তাঁর উচ্চতা ছিল ষাট হাত।" (সহীহ বুখারী)'
        ],
        keyEvents: [
            'আল্লাহর প্রতিনিধি হিসেবে সৃষ্টি',
            'ফেরেশতাদের সিজদা এবং ইবলিসের অমান্যতা',
            'বিবি হাওয়া (আঃ) এর সৃষ্টি',
            'নিষিদ্ধ ফল ভক্ষণ ও জান্নাত থেকে প্রস্থান',
            'পৃথিবীতে আগমন ও তওবা কবুল'
        ],
        mentioned: 25
    },
    {
        id: '2',
        name: 'Idris',
        arabicName: 'إدريس',
        banglaName: 'ইদ্রিস (আঃ)',
        title: 'উচ্চ মর্যাদাবান',
        era: 'মানব ইতিহাসের শুরুর কাল',
        description: 'তার প্রজ্ঞা ও উচ্চ মর্যাদার জন্য পরিচিত।',
        keyEvents: ['প্রথম কলম দিয়ে লিখন', 'উচ্চ মর্যাদায় আসীন'],
        mentioned: 2
    },
    {
        id: '3',
        name: 'Nuh',
        arabicName: 'نوح',
        banglaName: 'নূহ (আঃ)',
        title: 'ধৈর্যশীল নবী',
        era: 'প্রাচীন যুগ',
        description: 'তিনি মহাপ্লাবনের সময় নৌকা তৈরি করে বিশ্বাসীদের রক্ষা করেছিলেন।',
        keyEvents: ['৯৫০ বছর দাওয়াত প্রদান', 'নৌকা নির্মাণ', 'মহাপ্লাবন', 'মানবজাতির নতুন সূচনা'],
        mentioned: 43
    },
    {
        id: '4',
        name: 'Hud',
        arabicName: 'هود',
        banglaName: 'হুদ (আঃ)',
        title: 'আদ জাতির নবী',
        era: 'প্রাচীন আরব',
        description: 'শক্তিশালী আদ জাতির নিকট প্রেরিত নবী।',
        keyEvents: ['আদ জাতিকে সতর্কীকরণ', 'বাতাস দ্বারা আদ জাতির ধ্বংস'],
        mentioned: 7
    },
    {
        id: '5',
        name: 'Salih',
        arabicName: 'صالح',
        banglaName: 'সালেহ (আঃ)',
        title: 'সামুদ জাতির নবী',
        era: 'প্রাচীন আরব',
        description: 'সামুদ জাতির নিকট প্রেরিত, যারা পাহাড় কেটে গৃহ নির্মাণ করত।',
        keyEvents: ['অলৌকিক উটনী', 'সামুদ জাতির ধ্বংস'],
        mentioned: 9
    },
    {
        id: '6',
        name: 'Ibrahim',
        arabicName: 'إبراهيم',
        banglaName: 'ইব্রাহিম (আঃ)',
        title: 'খলিলুল্লাহ (আল্লাহর বন্ধু)',
        era: 'আনুমানিক ২০০০ খ্রিস্টপূর্বাব্দ',
        description: 'নবীদের পিতা, কাবা ঘর পুনর্নির্মাণকারী।',
        keyEvents: ['মূর্তি ভাঙা', 'অগ্নিতে নিক্ষেপ', 'কাবা পুনর্নির্মাণ', 'পুত্র কুরবানি পরীক্ষা', 'ইসমাইল ও ইসহাকের পিতা'],
        mentioned: 69
    },
    {
        id: '7',
        name: 'Lut',
        arabicName: 'لوط',
        banglaName: 'লুত (আঃ)',
        title: 'সদুম জাতির নবী',
        era: 'ইব্রাহিম (আঃ) এর সময়কাল',
        description: 'ইব্রাহিম (আঃ) এর ভাতিজা, সদুম জাতির নিকট প্রেরিত।',
        keyEvents: ['জাতিকে সতর্কীকরণ', 'সদুম ও গোমরাহ নগরীর ধ্বংস'],
        mentioned: 27
    },
    {
        id: '8',
        name: 'Ismail',
        arabicName: 'إسماعيل',
        banglaName: 'ইসমাইল (আঃ)',
        title: 'যবিহুল্লাহ',
        era: 'আনুমানিক ১৯০০ খ্রিস্টপূর্বাব্দ',
        description: 'ইব্রাহিম (আঃ) এর পুত্র, নবী মুহাম্মদ (সাঃ) এর পূর্বপুরুষ।',
        keyEvents: ['মা হাজেরার সাথে মক্কায় বসবাস', 'জমজম কূপ', 'কুরবানি পরীক্ষা', 'কাবা পুনর্নির্মাণে সহায়তা'],
        mentioned: 12
    },
    {
        id: '9',
        name: 'Ishaq',
        arabicName: 'إسحاق',
        banglaName: 'ইসহাক (আঃ)',
        title: 'সুসংবাদপ্রাপ্ত পুত্র',
        era: 'আনুমানিক ১৮৯৬ খ্রিস্টপূর্বাব্দ',
        description: 'ইব্রাহিম (আঃ) এর পুত্র, ইয়াকুব (আঃ) এর পিতা।',
        keyEvents: ['বার্ধক্যে জন্মলাভ', 'ইয়াকুব (আঃ) এর পিতা'],
        mentioned: 17
    },
    {
        id: '10',
        name: 'Yaqub',
        arabicName: 'يعقوب',
        banglaName: 'ইয়াকুব (আঃ)',
        title: 'ইসরাঈল',
        era: 'আনুমানিক ১৮৩৭ খ্রিস্টপূর্বাব্দ',
        description: 'ইসরাঈল নামে পরিচিত, ইউসুফ (আঃ) ও বনী ইসরাঈলের বারো গোত্রের পিতা।',
        keyEvents: ['১২ পুত্রের পিতা', 'ইউসুফ (আঃ) কে হারানো ও পুনর্মিলন'],
        mentioned: 16
    },
    {
        id: '11',
        name: 'Yusuf',
        arabicName: 'يوسف',
        banglaName: 'ইউসুফ (আঃ)',
        title: 'সত্যবাদী',
        era: 'আনুমানিক ১৭৪৫ খ্রিস্টপূর্বাব্দ',
        description: 'তার সৌন্দর্য, ধৈর্য এবং স্বপ্নের ব্যাখ্যার জন্য পরিচিত।',
        keyEvents: ['কূপে নিক্ষিপ্ত', 'প্রলোভন থেকে রক্ষা', ' স্বপ্নের ব্যাখ্যা', 'মিশরের মন্ত্রীত্ব লাভ'],
        mentioned: 27
    },
    {
        id: '12',
        name: 'Ayyub',
        arabicName: 'أيوب',
        banglaName: 'আইয়ুব (আঃ)',
        title: 'ধৈর্যশীল',
        era: 'প্রাচীন যুগ',
        description: 'অসুস্থতা ও কঠিন পরীক্ষার সময় অসীম ধৈর্যের জন্য পরিচিত।',
        keyEvents: ['রোগ ও ক্ষতির পরীক্ষা', 'ধৈর্য ধারণ', 'স্বাস্থ্য ও সম্পদ পুনরুদ্ধার'],
        mentioned: 4
    },
    {
        id: '13',
        name: 'Shuayb',
        arabicName: 'شعيب',
        banglaName: 'শুয়াইব (আঃ)',
        title: 'মাদিয়ানবাসীর নবী',
        era: 'প্রাচীন আরব',
        description: 'মাদিয়ানবাসীদের নিকট প্রেরিত, যারা ব্যবসায় ওজনে কম দিত।',
        keyEvents: ['সৎ ব্যবসার আহ্বান', 'মাদিয়ান ধ্বংস'],
        mentioned: 11
    },
    {
        id: '14',
        name: 'Musa',
        arabicName: 'موسى',
        banglaName: 'মুসা (আঃ)',
        title: 'কালিমুল্লাহ (আল্লাহর সাথে কথোপকথনকারী)',
        era: 'আনুমানিক ১৩৯১-১২৭১ খ্রিস্টপূর্বাব্দ',
        description: 'তাওরাত প্রাপ্ত নবী, বনী ইসরাঈলকে ফেরাউনের কবল থেকে মুক্ত করেছিলেন।',
        keyEvents: ['ফেরাউনের ঘরে লালন-পালন', 'তুর পাহাড়ে কথোপকথন', 'বনী ইসরাঈলকে মুক্ত করা', 'নীল নদ বিভাজন', 'তাওরাত লাভ'],
        mentioned: 136
    },
    {
        id: '15',
        name: 'Harun',
        arabicName: 'هارون',
        banglaName: 'হারুন (আঃ)',
        title: 'সাহায্যকারী',
        era: 'আনুমানিক ১৩৯৪-১২৭৩ খ্রিস্টপূর্বাব্দ',
        description: 'মুসা (আঃ) এর ভাই এবং তার মিশনের সাহায্যকারী।',
        keyEvents: ['মুসা (আঃ) এর সমর্থনে নবুওয়াত', 'বনী ইসরাঈলের নেতৃত্ব'],
        mentioned: 20
    },
    {
        id: '16',
        name: 'Dhul-Kifl',
        arabicName: 'ذو الكفل',
        banglaName: 'যুল-কিফল (আঃ)',
        title: 'জিম্মাদার',
        era: 'প্রাচীন যুগ',
        description: 'তার ধৈর্য ও ন্যায়পরায়ণতার জন্য পরিচিত।',
        keyEvents: ['ধৈর্যের জন্য প্রশংসিত'],
        mentioned: 2
    },
    {
        id: '17',
        name: 'Dawud',
        arabicName: 'داود',
        banglaName: 'দাউদ (আঃ)',
        title: 'খলিফাতুল্লাহ',
        era: 'আনুমানিক ১০৪০-৯৭০ খ্রিস্টপূর্বাব্দ',
        description: 'রাজা ও নবী, যাবুর কিতাব প্রাপ্ত এবং সুমিষ্ট কণ্ঠের অধিকারী।',
        keyEvents: ['জালুতকে পরাজিত করা', 'রাজত্ব লাভ', 'যাবুর প্রাপ্তি', 'লৌহ গলানোর অলৌকিক ক্ষমতা'],
        mentioned: 16
    },
    {
        id: '18',
        name: 'Sulayman',
        arabicName: 'سليمان',
        banglaName: 'সুলাইমান (আঃ)',
        title: 'প্রজ্ঞাবান রাজা',
        era: 'আনুমানিক ৯৯০-৯৩১ খ্রিস্টপূর্বাব্দ',
        description: 'দাউদ (আঃ) এর পুত্র, যাকে বিশাল রাজত্ব এবং জ্বিন ও প্রাণীদের ভাষা বোঝার ক্ষমতা দেয়া হয়েছিল।',
        keyEvents: ['বাতাস ও জ্বিনদের নিয়ন্ত্রণ', 'বাইতুল মুকাদ্দাস নির্মাণ', 'রাণী বিলকিস', 'প্রাণীদের ভাষা বোঝা'],
        mentioned: 17
    },
    {
        id: '19',
        name: 'Ilyas',
        arabicName: 'إلياس',
        banglaName: 'ইলিয়াস (আঃ)',
        title: 'ইলিয়াস',
        era: 'খ্রিস্টপূর্ব ৯ম শতাব্দী',
        description: 'বনী ইসরাঈলকে এক আল্লাহর ইবাদতে ফিরিয়ে আনার জন্য প্রেরিত।',
        keyEvents: ['বাল মূর্তিপূজার বিরোধিতা'],
        mentioned: 2
    },
    {
        id: '20',
        name: 'Al-Yasa',
        arabicName: 'اليسع',
        banglaName: 'আল-ইয়াসা (আঃ)',
        title: 'আল-ইয়াসা',
        era: 'খ্রিস্টপূর্ব ৯ম শতাব্দী',
        description: 'ইলিয়াস (আঃ) এর উত্তরসূরি।',
        keyEvents: ['ইলিয়াস (আঃ) এর মিশন অব্যাহত রাখা'],
        mentioned: 2
    },
    {
        id: '21',
        name: 'Yunus',
        arabicName: 'يونس',
        banglaName: 'ইউনুস (আঃ)',
        title: 'যুন-নুন (মাছওয়ালা)',
        era: 'খ্রিস্টপূর্ব ৮ম শতাব্দী',
        description: 'মাছে গিলে ফেলার পর আল্লাহর কাছে ক্ষমা প্রার্থনার জন্য পরিচিত।',
        keyEvents: ['মাছের পেটে অবস্থান', 'অন্ধকারে প্রার্থনা', 'জাতির ঈমান আনয়ন'],
        mentioned: 4
    },
    {
        id: '22',
        name: 'Zakariya',
        arabicName: 'زكريا',
        banglaName: 'জাকারিয়া (আঃ)',
        title: 'অভিভাবক',
        era: 'খ্রিস্টপূর্ব ১ম শতাব্দী',
        description: 'মারইয়াম (আঃ) এর অভিভাবক ও ইয়াহিয়া (আঃ) এর পিতা।',
        keyEvents: ['বার্ধক্যে সন্তানের জন্য দোয়া', 'ইয়াহিয়া (আঃ) এর জন্ম'],
        mentioned: 7
    },
    {
        id: '23',
        name: 'Yahya',
        arabicName: 'يحيى',
        banglaName: 'ইয়াহিয়া (আঃ)',
        title: 'সংযত নবী',
        era: '১ম শতাব্দী',
        description: 'জাকারিয়া (আঃ) এর পুত্র, শৈশব থেকেই প্রজ্ঞাবান।',
        keyEvents: ['অলৌকিক জন্ম', 'শৈশবে প্রজ্ঞা লাভ', 'সৎকাজের আদেশ'],
        mentioned: 5
    },
    {
        id: '24',
        name: 'Isa',
        arabicName: 'عيسى',
        banglaName: 'ঈসা (আঃ)',
        title: 'আল-মাসিহ',
        era: 'আনুমানিক ৪ খ্রিস্টপূর্ব - ৩০ খ্রিস্টাব্দ',
        description: 'পিতা ছাড়াই মারইয়াম (আঃ) এর গর্ভে জন্ম, আল্লাহর হুকুমে মৃতকে জীবিত করতেন।',
        keyEvents: ['অলৌকিক জন্ম', 'দোলনায় কথা বলা', 'রোগী সুস্থ করা', 'মৃতকে জীবিত করা', 'আকাশে আরোহণ'],
        mentioned: 25
    },
    {
        id: '25',
        name: 'Muhammad',
        arabicName: 'محمد',
        banglaName: 'মুহাম্মদ (সাঃ)',
        title: 'খাতামুন নাবিয়্যিন (সর্বশেষ নবী)',
        era: '৫৭০-৬৩২ খ্রিস্টাব্দ',
        description: 'সর্বশেষ ও সর্বশ্রেষ্ঠ নবী, যার উপর কুরআন নাযিল হয়েছে।',
        keyEvents: ['ওহী লাভ', 'মেরাজ গমন', 'হিজরত', 'মক্কা বিজয়', 'বিদায় হজ'],
        mentioned: 4
    }
];

// Define relationships between prophets
export interface ProphetRelationship {
    source: string;
    target: string;
    type: 'father-son' | 'brothers' | 'uncle-nephew' | 'chronological' | 'same-era';
    label?: string;
}

export const relationships: ProphetRelationship[] = [
    // Direct lineage
    { source: '1', target: '2', type: 'chronological' },
    { source: '2', target: '3', type: 'chronological' },
    { source: '3', target: '4', type: 'chronological' },
    { source: '4', target: '5', type: 'chronological' },
    { source: '5', target: '6', type: 'chronological' },

    // Ibrahim's family
    { source: '6', target: '7', type: 'uncle-nephew', label: 'চাচা-ভাতিজা' },
    { source: '6', target: '8', type: 'father-son', label: 'পিতা-পুত্র' },
    { source: '6', target: '9', type: 'father-son', label: 'পিতা-পুত্র' },

    // Ishaq's lineage
    { source: '9', target: '10', type: 'father-son', label: 'পিতা-পুত্র' },
    { source: '10', target: '11', type: 'father-son', label: 'পিতা-পুত্র' },

    // Parallel prophets
    { source: '11', target: '12', type: 'same-era' },
    { source: '12', target: '13', type: 'chronological' },
    { source: '13', target: '14', type: 'chronological' },

    // Musa and Harun
    { source: '14', target: '15', type: 'brothers', label: 'ভাই' },

    // Continuation
    { source: '15', target: '16', type: 'chronological' },
    { source: '16', target: '17', type: 'chronological' },

    // Dawud and Sulayman
    { source: '17', target: '18', type: 'father-son', label: 'পিতা-পুত্র' },

    // Later prophets
    { source: '18', target: '19', type: 'chronological' },
    { source: '19', target: '20', type: 'chronological' },
    { source: '20', target: '21', type: 'chronological' },
    { source: '21', target: '22', type: 'chronological' },

    // Zakariya and Yahya
    { source: '22', target: '23', type: 'father-son', label: 'পিতা-পুত্র' },

    // Final prophets
    { source: '23', target: '24', type: 'chronological' },
    { source: '24', target: '25', type: 'chronological' },

    // Ismail to Muhammad lineage (ancestral)
    { source: '8', target: '25', type: 'chronological', label: 'পূর্বপুরুষ' }
];
