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
  {
    id: "daily-light-day-2-the-god-who-sees",
    slug: "day-2-the-god-who-sees",
    title: "The God Who Sees",
    summary: "God sees the faithful heart even when the world overlooks it, calling His children to rest in His compassionate presence rather than the approval of others.",
    accessLevel: "public",
    status: "published",
    volume: "Volume One",
    volumeTitle: "Walking in the Light",
    day: 2,
    theme: "God's Faithful Presence",
    oldTestamentReading: "Genesis 16:7-14",
    newTestamentReading: "Matthew 6:25-34",
    keyVerseReference: "Genesis 16:13",
    keyVerseText: "Thou God seest me.",
    scriptureReference: "Genesis 16:13",
    scriptureText: "Thou God seest me.",
    publishedOn: "2026-07-02",
    reflection: `There are moments in every life when we feel forgotten.

Perhaps our prayers seem unanswered. Perhaps our burdens are carried in silence, unseen by those around us. In such seasons, it is easy to believe that we have been overlooked. Yet Scripture reminds us of a profound truth: the God who created the heavens also sees the individual heart.

Hagar fled into the wilderness believing she had been abandoned. Alone, weary, and uncertain of what lay ahead, she encountered the Angel of the Lord. In that sacred moment she declared, "Thou God seest me." Her circumstances did not change immediately, but her understanding did. She discovered that she was never beyond God's sight.

Centuries later, Jesus taught His disciples not to be consumed by worry. The heavenly Father knows what we need before we ask Him. He clothes the lilies of the field with beauty and feeds the birds of the air without fail. If He cares for His creation with such tenderness, how much more does He care for those made in His image?

The Way of Quiet Light reminds us that faith is often lived in places unseen by the world. Many of the greatest acts of obedience happen without applause or recognition. Yet every quiet prayer, every hidden act of kindness, and every faithful step is fully known to God.

When others fail to notice your efforts, remember that your purpose is not to be seen by people but to walk faithfully before the One who sees all things. His approval is of greater value than the praise of the world.

Walk today with quiet confidence. You are neither forgotten nor alone. The Lord who watched over Hagar in the wilderness continues to watch over His children. His eyes are upon you—not with condemnation, but with compassion, wisdom, and unfailing love.`,
    prayer: `Heavenly Father,

Thank You for knowing me completely and loving me perfectly. When I feel unseen or discouraged, remind me that Your eyes are always upon me. Help me to trust Your care instead of giving in to fear or anxiety. Teach me to live for Your approval alone, finding peace in Your constant presence. May I faithfully walk before You today, knowing that nothing escapes Your loving gaze.

In the name of Jesus Christ, Amen.`,
    reflectionQuestion: "Where have I been seeking the approval of others instead of resting in the knowledge that God already sees and knows me?",
    todayPractice: "Perform one act of kindness today without telling anyone. Let it be an offering of worship to God alone.",
    closingThought: "The world may overlook the faithful servant, but the Lord never overlooks a heart that quietly seeks Him.",
  },
  {
    id: "daily-light-day-3-walking-by-faith",
    slug: "day-3-walking-by-faith",
    title: "Walking by Faith",
    summary: "Faith trusts the character of God beyond what can be seen, taking the next obedient step even when the full path has not yet been revealed.",
    accessLevel: "public",
    status: "published",
    volume: "Volume One",
    volumeTitle: "Walking in the Light",
    day: 3,
    theme: "Trusting God Beyond What We Can See",
    oldTestamentReading: "Genesis 12:1-9",
    newTestamentReading: "Hebrews 11:1-10",
    keyVerseReference: "Hebrews 11:1",
    keyVerseText: "Now faith is the substance of things hoped for, the evidence of things not seen.",
    scriptureReference: "Hebrews 11:1",
    scriptureText: "Now faith is the substance of things hoped for, the evidence of things not seen.",
    publishedOn: "2026-07-03",
    reflection: `Faith is not the absence of questions; it is the decision to trust God even when every answer has not yet been revealed.

When the Lord called Abram to leave his homeland, He did not provide a detailed map of the journey ahead. He simply gave a promise and a command: "Go." Abram obeyed, not because he knew every destination along the way, but because he knew the One who was leading him.

The Christian life is much the same. We often desire certainty before we take our next step. We ask God to show us the entire path before we are willing to move. Yet throughout Scripture, God usually reveals His will one faithful step at a time.

Faith is not blind optimism or wishful thinking. It is confidence in the character of God. We trust Him because He has proven Himself faithful throughout history and throughout our own lives. The God who parted the Red Sea, sustained Elijah in the wilderness, raised Christ from the dead, and fulfilled every promise concerning the Messiah has not changed.

The Way of Quiet Light reminds us that most faithful steps are small and unseen. Rarely does God ask us to accomplish extraordinary things overnight. More often, He calls us to ordinary obedience—offering forgiveness, speaking truth with love, serving quietly, praying faithfully, and trusting Him in seasons of uncertainty.

Every act of obedience becomes another testimony that our confidence rests not in ourselves, but in God.

You may not know what tomorrow holds. You may not understand why certain doors remain closed while others unexpectedly open. Yet faith does not require complete understanding. It requires a willing heart that says, "Lord, wherever You lead, I will follow."

Walk today with confidence, not because your path is perfectly visible, but because your Guide is perfectly faithful.`,
    prayer: `Heavenly Father,

Strengthen my faith when fear and uncertainty seek to overwhelm me. Help me to trust Your wisdom even when I cannot see the road ahead. Give me the courage to obey Your voice, knowing that every step taken in faith is held securely in Your hands. May my life bear witness to Your faithfulness, and may I follow Christ with a willing and obedient heart.

In the name of Jesus Christ, Amen.`,
    reflectionQuestion: "Is there an area of my life where I have been waiting for complete certainty instead of taking the next faithful step that God has already shown me?",
    todayPractice: "Identify one act of obedience you have been delaying. Commit it to prayer, and if it is within your ability today, take that first step in faith.",
    closingThought: "Faith does not illuminate the entire journey; it provides enough light for the next faithful step.",
  },
];
