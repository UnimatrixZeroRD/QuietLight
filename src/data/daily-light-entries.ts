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
  {
    id: "daily-light-day-4-the-promise-of-redemption",
    slug: "day-4-the-promise-of-redemption",
    title: "The Promise of Redemption",
    summary: "Even in the tragedy of the fall, God gave the first promise of redemption, pointing forward to Christ and the grace that restores what sin has broken.",
    accessLevel: "public",
    status: "published",
    volume: "Volume One",
    volumeTitle: "Walking in the Light",
    day: 4,
    theme: "Hope in the Midst of the Fall",
    oldTestamentReading: "Genesis 3:14-24",
    newTestamentReading: "Romans 5:6-11",
    keyVerseReference: "Romans 5:8",
    keyVerseText: "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.",
    scriptureReference: "Romans 5:8",
    scriptureText: "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.",
    publishedOn: "2026-07-04",
    reflection: `The first pages of Scripture reveal both humanity's greatest tragedy and God's first promise of hope.

Adam and Eve were created to live in perfect fellowship with their Creator. Yet through disobedience, sin entered the world, bringing shame, suffering, and death. The harmony of Eden was broken, and mankind was separated from the God who had lovingly formed them from the dust.

If the story ended there, there would be no hope.

But before Adam and Eve were sent from the garden, God spoke words that echoed throughout history. In His judgment upon the serpent was a promise that one day the offspring of the woman would crush the serpent's head. Though wounded Himself, the coming Redeemer would ultimately defeat sin, death, and Satan forever.

This promise pointed forward to Jesus Christ.

From the very beginning, redemption was not an afterthought. God did not abandon His creation when it fell. Instead, He began unfolding His plan of salvation—a plan that would culminate at the cross and the empty tomb.

Every believer knows something of Eden's loss. We experience temptation, failure, grief, and the consequences of living in a broken world. Yet we also know something Adam and Eve could only anticipate: the promised Redeemer has come.

Because of Christ, our failures do not have the final word. Grace speaks louder than guilt. Mercy triumphs over condemnation. Through faith in Him, what was broken can be restored.

The Way of Quiet Light reminds us that redemption often begins quietly. God usually works in hearts before He changes circumstances. He heals the soul before He heals the world. Every act of repentance is evidence that His restoring work has already begun.

Today, remember that no failure is beyond God's ability to redeem. Bring your burdens honestly before Him. The same Lord who promised salvation in the Garden continues His work of restoration in every heart surrendered to Him.`,
    prayer: `Heavenly Father,

Thank You for Your mercy that reaches even into my failures. When I stumble, remind me that Your grace is greater than my sin and that Jesus Christ has secured my redemption through His sacrifice. Help me to turn from temptation, trust in Your forgiveness, and walk each day in the new life You have given me. Restore what sin has damaged, and teach me to live in grateful obedience.

In the name of Jesus Christ, Amen.`,
    reflectionQuestion: "Is there an area of my life where I have allowed guilt to overshadow God's promise of forgiveness?",
    todayPractice: "Spend time thanking God specifically for His grace rather than focusing only on your shortcomings.",
    closingThought: "Where sin entered quietly, God's redemption arrived with greater power.",
  },
  {
    id: "daily-light-day-5-a-heart-that-hears",
    slug: "day-5-a-heart-that-hears",
    title: "A Heart That Hears",
    summary: "A heart that hears learns to quiet the noise of the world, listen for the Shepherd's voice, and obey the Word of God with humility.",
    accessLevel: "public",
    status: "published",
    volume: "Volume One",
    volumeTitle: "Walking in the Light",
    day: 5,
    theme: "Listening for the Voice of God",
    oldTestamentReading: "1 Samuel 3:1-10",
    newTestamentReading: "John 10:1-18",
    keyVerseReference: "1 Samuel 3:10",
    keyVerseText: "Speak; for thy servant heareth.",
    scriptureReference: "1 Samuel 3:10",
    scriptureText: "Speak; for thy servant heareth.",
    publishedOn: "2026-07-05",
    reflection: `The world is full of voices.

Every day we are surrounded by opinions, advertisements, entertainment, fears, and distractions that compete for our attention. In such constant noise, it becomes difficult to recognize the quiet voice of the Lord.

Young Samuel experienced this firsthand. When God called his name during the night, Samuel assumed it was Eli speaking. Only after repeated calls did Eli realize that the Lord Himself was speaking to the boy. Samuel's simple reply became one of the most beautiful prayers in all of Scripture: "Speak; for thy servant heareth."

Centuries later, Jesus described Himself as the Good Shepherd whose sheep know His voice. They follow Him because they have learned to recognize the Shepherd who loves them, protects them, and leads them into abundant life.

Learning to hear God's voice is not about seeking dramatic signs or extraordinary experiences. Most often, God speaks through His written Word, through prayer, through the conviction of the Holy Spirit, and through the wisdom of faithful believers. His voice never contradicts His character or His Scriptures.

The Way of Quiet Light encourages a life that intentionally creates space for God to speak. Silence is not emptiness; it is an invitation. When we quiet our own ambitions, fears, and constant activity, we become more attentive to the gentle leading of our Shepherd.

This kind of listening requires humility. It asks us to approach God not with demands but with open hands. Instead of saying, "Lord, bless my plans," we learn to pray, "Lord, show me Yours."

As you begin today, resist the temptation to fill every quiet moment with distraction. Open the Scriptures. Pray sincerely. Listen patiently. The Shepherd still calls His sheep by name, and He remains faithful to lead those who are willing to follow.`,
    prayer: `Heavenly Father,

Teach me to recognize Your voice above every distraction. Quiet the noise within my heart and help me to delight in Your Word. Give me a servant's spirit that eagerly listens and willingly obeys. Lead me by Your Holy Spirit, and grant me wisdom to follow wherever Christ calls me.

In the name of Jesus Christ, Amen.`,
    reflectionQuestion: "What voices have I allowed to become louder than God's voice in my daily life?",
    todayPractice: "Spend at least fifteen uninterrupted minutes reading Scripture in silence before beginning your regular routine. Ask only one question: \"Lord, what would You have me learn today?\"",
    closingThought: "God often speaks most clearly when we have finally become quiet enough to listen.",
  },
  {
    id: "daily-light-day-6-the-fear-of-the-lord",
    slug: "day-6-the-fear-of-the-lord",
    title: "The Fear of the Lord",
    summary: "True wisdom begins with holy reverence for God, shaping not only what we know but how we live, serve, speak, and obey.",
    accessLevel: "public",
    status: "published",
    volume: "Volume One",
    volumeTitle: "Walking in the Light",
    day: 6,
    theme: "The Beginning of Wisdom",
    oldTestamentReading: "Proverbs 1:1-7",
    newTestamentReading: "James 3:13-18",
    keyVerseReference: "Proverbs 1:7",
    keyVerseText: "The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction.",
    scriptureReference: "Proverbs 1:7",
    scriptureText: "The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction.",
    publishedOn: "2026-07-06",
    reflection: `In today's world, wisdom is often confused with intelligence. A person may possess remarkable knowledge, academic achievement, or practical skill and yet remain spiritually unwise. Scripture teaches that true wisdom begins in an entirely different place—it begins with the fear of the Lord.

The fear of the Lord is not a terror that drives us away from God. Rather, it is a holy reverence that draws us nearer to Him. It is the humble recognition that God alone is perfectly holy, perfectly just, and perfectly wise. When we understand who He is, pride begins to fade, and our hearts become teachable.

King Solomon, renowned for his wisdom, understood that knowledge apart from God can easily become arrogance. James echoes this truth by distinguishing earthly wisdom from heavenly wisdom. Earthly wisdom seeks personal gain, recognition, and power. Heavenly wisdom is "pure, peaceable, gentle, and easy to be entreated, full of mercy and good fruits."

The Way of Quiet Light encourages believers to pursue wisdom not as a means of elevating themselves, but as a way of serving God and others more faithfully. Wisdom is revealed not merely in what we know, but in how we live. A gentle answer, an honest confession, a patient spirit, and a forgiving heart often display greater wisdom than the most eloquent speech.

Our generation has access to more information than any before it, yet information alone cannot transform the heart. Only God can do that. As we submit ourselves to His Word and allow His Spirit to shape our lives, we begin to see the world through His eyes rather than our own.

Ask yourself today not, "How can I appear wiser?" but rather, "How can I become more faithful?" The truly wise person does not seek admiration; they seek obedience. In doing so, they discover a wisdom that neither time nor circumstance can take away.`,
    prayer: `Heavenly Father,

Teach me to walk in true wisdom. Remove every trace of pride from my heart and replace it with humble reverence for You. Help me to seek understanding through Your Word rather than through my own opinions. May my thoughts, words, and actions reflect the wisdom that comes from above, bringing peace to those around me and glory to Your name.

In the name of Jesus Christ, Amen.`,
    reflectionQuestion: "Do I seek wisdom to honor God, or do I seek knowledge merely to impress others?",
    todayPractice: "Before making an important decision today, pause and ask, \"Lord, what choice would most glorify You?\"",
    closingThought: "Wisdom begins the moment we stop trusting ourselves and begin trusting God.",
  },
  {
    id: "daily-light-day-7-rest-for-the-soul",
    slug: "day-7-rest-for-the-soul",
    title: "Rest for the Soul",
    summary: "Christ offers rest for the soul, calling the weary to lay down their burdens and return to the Shepherd who restores and strengthens them.",
    accessLevel: "public",
    status: "published",
    volume: "Volume One",
    volumeTitle: "Walking in the Light",
    day: 7,
    theme: "Finding Peace in Christ",
    oldTestamentReading: "Psalm 23",
    newTestamentReading: "Matthew 11:28-30",
    keyVerseReference: "Matthew 11:28",
    keyVerseText: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
    scriptureReference: "Matthew 11:28",
    scriptureText: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
    publishedOn: "2026-07-07",
    reflection: `The pace of modern life often leaves little room for rest. We hurry from one responsibility to another, carrying burdens that seem to grow heavier with each passing day. We strive to accomplish more, fix more, and worry more, believing that peace will finally arrive when every problem has been solved.

Yet Christ offers something the world cannot provide.

He does not merely promise a lighter schedule or easier circumstances. He promises rest for the soul.

David understood this long before Jesus walked the earth. In Psalm 23 he describes the Lord as a Shepherd who leads His sheep beside still waters and restores their souls. Even while walking through the valley of the shadow of death, David speaks with confidence rather than fear because the Shepherd remains near.

Jesus reveals Himself as that Good Shepherd. He invites the weary, the anxious, and the discouraged to come to Him—not after they have solved every difficulty, but precisely because they cannot carry those burdens alone.

The Way of Quiet Light reminds us that rest is not laziness. It is an act of trust. When we intentionally pause to pray, worship, and reflect upon God's goodness, we acknowledge that the world continues because God sustains it—not because we never stop working.

Quiet moments with God renew our strength in ways that constant activity never can. They remind us that our identity is not found in our productivity but in our relationship with our Heavenly Father.

Perhaps your burdens today are invisible to others. Perhaps they are physical pain, emotional exhaustion, uncertainty about the future, or grief that words cannot express. Christ knows each one. He does not ask you to pretend they do not exist. He simply says, "Come."

The Shepherd still leads beside still waters. His peace is available today, even in the midst of life's storms. Lay your burdens before Him and discover the quiet strength that only His presence can provide.`,
    prayer: `Heavenly Father,

Thank You for being my Shepherd and my refuge. When my heart grows weary and my mind becomes anxious, remind me to come to Christ, who alone gives lasting rest. Help me to trust You with every burden I carry and to find peace in Your presence rather than in my circumstances. Restore my soul and strengthen me to walk faithfully in Your ways.

In the name of Jesus Christ, Amen.`,
    reflectionQuestion: "What burden have I continued to carry that I need to surrender to Christ today?",
    todayPractice: "Set aside twenty uninterrupted minutes today to be alone with God. Read Psalm 23 slowly, pray through its words, and allow yourself to rest quietly in His presence.",
    closingThought: "The strongest soul is not the one that never grows weary, but the one that continually returns to the Shepherd for rest.",
  },
  {
    id: "daily-light-day-8-the-shepherds-care",
    slug: "day-8-the-shepherds-care",
    title: "The Shepherd's Care",
    summary: "Christ, the Good Shepherd, seeks, guides, restores, and protects His sheep, calling believers to remain close and trust His faithful care.",
    accessLevel: "public",
    status: "published",
    volume: "Volume One",
    volumeTitle: "Walking in the Light",
    day: 8,
    theme: "Trusting the Shepherd's Guidance",
    oldTestamentReading: "Ezekiel 34:11-16",
    newTestamentReading: "John 10:11-18",
    keyVerseReference: "John 10:11",
    keyVerseText: "I am the good shepherd: the good shepherd giveth his life for the sheep.",
    scriptureReference: "John 10:11",
    scriptureText: "I am the good shepherd: the good shepherd giveth his life for the sheep.",
    publishedOn: "2026-07-08",
    reflection: `There is a profound comfort in knowing that we do not walk through life alone. Scripture repeatedly describes God's people as sheep—not because we are weak or insignificant, but because sheep were never intended to find their way without a shepherd.

Throughout the Old Testament, the Lord rebuked shepherds who cared more for themselves than for the flock. They neglected the weak, ignored the wounded, and scattered those entrusted to them. Yet God promised that He Himself would seek His sheep, gather the lost, bind up the broken, and strengthen the weak.

That promise finds its fulfillment in Jesus Christ.

He is not merely another shepherd among many. He is the Good Shepherd who willingly laid down His life for His sheep. Unlike a hired servant who flees when danger comes, Christ remains faithful even unto death. His love is measured not by words alone, but by the cross.

The Way of Quiet Light reminds us that following Christ is not simply about believing certain truths—it is about learning to trust His guidance day by day. The Shepherd often leads His flock along paths they would never choose for themselves. Some roads pass through green pastures, while others wind through dark valleys. Yet every step is watched over by the One who sees the end from the beginning.

There may be moments when you question where God is leading you. The path may seem uncertain or even difficult. Resist the temptation to run ahead or wander away. The safest place is always near the Shepherd.

As you grow in faith, you will discover that His guidance is not driven by haste but by wisdom. He knows when to lead, when to restore, when to correct, and when to carry those who have grown weary.

Walk closely with Him today. The Shepherd never loses sight of His sheep, and those who remain near Him need never fear that they have been forgotten.`,
    prayer: `Heavenly Father,

Thank You for sending Jesus, the Good Shepherd, to seek and save those who were lost. Help me to trust His guidance, even when I cannot understand the path before me. Keep my heart close to Him, protect me from wandering, and teach me to rest in His faithful care. May I follow wherever He leads, knowing that His way is always good.

In the name of Jesus Christ, Amen.`,
    reflectionQuestion: "Am I following the Shepherd's voice, or have I been trying to find my own way?",
    todayPractice: "Before making an important decision today, pause and ask, \"Lord, where are You leading me?\" Spend time in prayer before acting.",
    closingThought: "The safest path is not always the easiest, but it is always the one walked with the Shepherd.",
  },
  {
    id: "daily-light-day-9-the-light-shines",
    slug: "day-9-the-light-shines",
    title: "The Light Shines",
    summary: "Christ is the Light of the World, and His people are called to carry His light with humility so others may be guided toward Him.",
    accessLevel: "public",
    status: "published",
    volume: "Volume One",
    volumeTitle: "Walking in the Light",
    day: 9,
    theme: "Christ, the Light of the World",
    oldTestamentReading: "Isaiah 9:1-7",
    newTestamentReading: "John 8:12",
    keyVerseReference: "John 8:12",
    keyVerseText: "Then spake Jesus again unto them, saying, I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.",
    scriptureReference: "John 8:12",
    scriptureText: "Then spake Jesus again unto them, saying, I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.",
    publishedOn: "2026-07-09",
    reflection: `From the opening chapter of Genesis to the final pages of Revelation, light is one of Scripture's most enduring images of God's presence.

Before the sun and moon were created, God spoke light into existence. Throughout Israel's history, His glory appeared as fire by night, guiding His people through the wilderness. The prophets looked forward to a day when a great Light would dawn upon those who sat in darkness.

That Light is Jesus Christ.

When Jesus declared, "I am the light of the world," He was making one of the most remarkable claims in all of Scripture. He was not merely offering good advice or a better philosophy of life. He was revealing Himself as the very source of truth, hope, life, and salvation.

Darkness cannot overcome light. Even the smallest flame pushes back the darkness surrounding it. In the same way, one faithful life surrendered to Christ can become a testimony that points others toward Him.

The Way of Quiet Light is built upon this truth. We do not create the light, nor do we possess it by our own strength. We simply carry the light that Christ has placed within us. Like a lantern in the night, our purpose is not to draw attention to ourselves but to illuminate the path toward the Savior.

This calling requires humility. A lantern fulfills its purpose only when its light shines outward. If we seek recognition for ourselves, we obscure the very light we were meant to display. But when Christ is lifted high, His light reaches farther than we could ever imagine.

Perhaps today you feel surrounded by darkness—whether through discouragement, uncertainty, grief, or temptation. Remember that darkness is not the absence of God's power. It is simply the place where His light shines most clearly.

Walk confidently today, not because you are strong, but because Christ, the Light of the World, goes before you. His light has never failed, and it never will.`,
    prayer: `Heavenly Father,

Thank You for sending Your Son to be the Light of the world. Let His light shine brightly within me so that others may see Your love, truth, and grace. Guard me against pride, and remind me that I am only a servant entrusted with reflecting Christ's light. May my words and actions point others toward Him today.

In the name of Jesus Christ, Amen.`,
    reflectionQuestion: "Does my life draw attention to Christ, or does it seek attention for myself?",
    todayPractice: "Intentionally encourage someone today with words that point them toward God's faithfulness rather than your own accomplishments.",
    closingThought: "The lantern has no light of its own; it fulfills its purpose only by carrying the flame entrusted to it.",
  },
];
