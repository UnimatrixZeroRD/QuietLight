import type { BaseContent } from "./content-types";

export type DailyLightEntry = BaseContent & {
  volume?: string;
  volumeTitle?: string;
  day?: number;
  theme?: string;
  oldTestamentReading?: string;
  newTestamentReading?: string;
  keyVerseReference?: string;
  keyVerseText?: string;
  scriptureReference?: string;
  scriptureText?: string;
  reflection: string;
  prayer?: string;
  reflectionQuestion?: string;
  todayPractice?: string;
  closingThought?: string;
  publishedOn?: string;
};

export const dailyLightEntries: DailyLightEntry[] = [
  {
    id: "daily-light-day-1-in-the-beginning",
    slug: "day-1-in-the-beginning",
    title: "In the Beginning",
    summary: "The Way of Quiet Light begins where all things begin: with God, the Creator who spoke light into darkness and calls His people to reflect the light of Christ.",
    accessLevel: "public",
    status: "published",
    volume: "Volume One",
    volumeTitle: "Walking in the Light",
    day: 1,
    theme: "The Beginning of All Things",
    oldTestamentReading: "Genesis 1:1-5",
    newTestamentReading: "John 1:1-5",
    keyVerseReference: "John 1:1",
    keyVerseText: "In the beginning was the Word, and the Word was with God, and the Word was God.",
    scriptureReference: "John 1:1",
    scriptureText: "In the beginning was the Word, and the Word was with God, and the Word was God.",
    publishedOn: "2026-07-01",
    reflection: `Every journey begins somewhere. Our journey begins where all things begin—with God.

Before there were mountains, oceans, stars, or even time itself, God already was. Nothing existed apart from Him. The opening words of Genesis reveal God as the Creator who spoke light into darkness. The opening words of John's Gospel reveal that the One through whom creation came into being was the eternal Word, Jesus Christ.

The same voice that declared, "Let there be light," is the voice that still calls men and women out of darkness and into His marvelous light.

The world often tells us that life is an accident and that our purpose is something we must invent for ourselves. Scripture teaches something entirely different. We were created intentionally, lovingly, and for the glory of God. Our identity is not found in our accomplishments, possessions, or reputation, but in the One who made us.

The Way of Quiet Light begins with this simple truth: we are not the source of the light. We are its keepers. Just as the moon reflects the light of the sun, we are called to reflect the light of Christ into a world that often walks in darkness.

When we remember that God is the beginning of everything, pride loses its grip upon us. We no longer strive to become the center of our own story. Instead, we become willing servants in His greater story.

Today, pause before the busyness begins. Remember that your life is not sustained by your own strength but by the Creator who continues to uphold all things by His power. Walk quietly before Him, knowing that every breath is a gift and every opportunity is an invitation to glorify Him.

The Light did not begin with us, nor will it end with us. Our privilege is simply to carry it faithfully for as long as God entrusts it to our hands.`,
    prayer: `Heavenly Father,

You are the Creator of heaven and earth, the Author of life, and the source of every good thing. Thank You for calling me out of darkness into Your marvelous light through Jesus Christ. Teach me to walk humbly today, remembering that I am not the light, but only its keeper. Let my thoughts, words, and actions reflect Your goodness so that others may see Your light shining through me. Keep my heart fixed upon You from the beginning of this day until its end.

In the name of Jesus Christ, Amen.`,
    reflectionQuestion: "What area of my life have I placed at the center that rightly belongs to God?",
    todayPractice: "Before beginning your work, spend five quiet minutes thanking God simply for who He is, not merely for what He has given.",
    closingThought: "The One who spoke light into creation is the same Lord who speaks hope into every faithful heart.",
  },
];
