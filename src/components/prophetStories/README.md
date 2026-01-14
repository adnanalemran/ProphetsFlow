# Prophet Stories Components

This folder contains individual story components for each of the 25 prophets.

## Structure

Each prophet has their own TSX file:
- `AdamStory.tsx` - আদম (আঃ) ✅ (Populated)
- `IdrisStory.tsx` - ইদ্রিস (আঃ)
- `NuhStory.tsx` - নূহ (আঃ)
- `HudStory.tsx` - হুদ (আঃ)
- `SalihStory.tsx` - সালেহ (আঃ)
- `IbrahimStory.tsx` - ইব্রাহিম (আঃ)
- `LutStory.tsx` - লুত (আঃ)
- `IsmailStory.tsx` - ইসমাইল (আঃ)
- `IshaqStory.tsx` - ইসহাক (আঃ)
- `YaqubStory.tsx` - ইয়াকুব (আঃ)
- `YusufStory.tsx` - ইউসুফ (আঃ)
- `AyyubStory.tsx` - আইয়ুব (আঃ)
- `ShuaybStory.tsx` - শুয়াইব (আঃ)
- `MusaStory.tsx` - মুসা (আঃ)
- `HarunStory.tsx` - হারুন (আঃ)
- `DhulKiflStory.tsx` - যুল-কিফল (আঃ)
- `DawudStory.tsx` - দাউদ (আঃ)
- `SulaymanStory.tsx` - সুলাইমান (আঃ)
- `IlyasStory.tsx` - ইলিয়াস (আঃ)
- `AlYasaStory.tsx` - আল-ইয়াসা (আঃ)
- `YunusStory.tsx` - ইউনুস (আঃ)
- `ZakariyaStory.tsx` - জাকারিয়া (আঃ)
- `YahyaStory.tsx` - ইয়াহিয়া (আঃ)
- `IsaStory.tsx` - ঈসা (আঃ)
- `MuhammadStory.tsx` - মুহাম্মদ (সাঃ)

## How to Add a Story

To add a detailed story for a prophet:

1. Open the corresponding TSX file (e.g., `NuhStory.tsx`)
2. Replace the `return null;` with the story component

### Template:

```tsx
export default function NuhStory() {
    return (
        <div className="mb-12 mt-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-amber-500 pl-4">
                বিস্তারিত কাহিনী
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line text-justify font-serif">
                {/* Add your story text here in Bangla */}
                হযরত নূহ (আঃ) এর কাহিনী...
            </div>
        </div>
    );
}
```

## Benefits of This Structure

✅ **Modularity**: Each prophet's story is in its own file, making it easy to manage and update
✅ **Performance**: Only the required story component is loaded for each prophet
✅ **Maintainability**: Easy to add, edit, or remove stories without affecting other components
✅ **Scalability**: Can easily add more content, images, or formatting to individual stories
✅ **Code Organization**: Keeps the main ProphetDetails.tsx clean and focused

## Usage

The stories are automatically loaded in `ProphetDetails.tsx` using the `prophetStories` mapping from `index.tsx`. No additional configuration is needed when adding a new story - just update the corresponding story file!
