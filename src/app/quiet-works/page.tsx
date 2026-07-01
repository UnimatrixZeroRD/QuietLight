import Image from "next/image";
import Link from "next/link";

const quietWorks = [
  {
    title: "The Keeper's Table",
    description:
      "A local food support initiative that gathers contributions, stretches them through surplus and food-waste reduction sources, and helps provide fresh produce and practical nourishment to local partners and neighbours.",
    status: "First Quiet Works initiative",
    image: {
      src: "/images/quiet-works/keepers-table-card.webp",
      alt: "A lantern beside a basket of produce and food support boxes for The Keeper's Table.",
    },
  },
  {
    title: "Future Works",
    description:
      "Additional works of mercy, service, and community care can be added here as the Order of the Lanterns grows.",
    status: "Coming later",
    image: {
      src: "/images/quiet-works/future-works-card.webp",
      alt: "A quiet lantern-lit path representing future Quiet Works initiatives.",
    },
  },
];

const keeperTableDonationSlots = [
  {
    title: "Sponsor Produce Bags",
    description: "Add a donation button here for supporters who want to fund one or more produce bags for The Keeper's Table.",
  },
  {
    title: "Support Local Families",
    description: "Add a donation button here for gifts directed toward low-income families who need access to fresh fruits and vegetables.",
  },
  {
    title: "Help Cover Collection Costs",
    description: "Add a donation button here for support that helps offset travel, pickup, and delivery expenses across Nova Scotia.",
  },
];

export default function QuietWorksPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <section className="lantern-panel grid gap-8 rounded-3xl p-6 md:grid-cols-[1fr_0.9fr] md:p-12">
        <div>
          <p className="gold-text uppercase tracking-[0.3em]">Quiet Works</p>
          <h1 className="mt-4 text-5xl md:text-7xl">Faith made visible through service.</h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
            Quiet Works is the service arm of Quiet Light Ministries: humble, practical acts of mercy carried out without spectacle, rooted in stillness, compassion, and care for the local community.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-[rgba(216,168,79,0.36)] bg-[var(--midnight)] shadow-[0_0_48px_rgba(216,168,79,0.18)]">
          <Image
            src="/images/quiet-works/quiet-works-hero.webp"
            alt="Lantern-lit Quiet Works table with produce and practical support imagery."
            width={1600}
            height={900}
            priority
            sizes="(min-width: 768px) 42vw, 100vw"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2" aria-label="Quiet Works initiatives">
        {quietWorks.map((work) => (
          <article className="lantern-panel overflow-hidden rounded-3xl" key={work.title}>
            <div className="border-b border-[rgba(216,168,79,0.24)] bg-[var(--midnight)]">
              <Image
                src={work.image.src}
                alt={work.image.alt}
                width={1200}
                height={800}
                sizes="(min-width: 768px) 42vw, 100vw"
                className="h-auto w-full"
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="gold-text text-xs uppercase tracking-[0.24em]">{work.status}</p>
              <h2 className="mt-4 text-3xl md:text-4xl">{work.title}</h2>
              <p className="mt-5 leading-8 text-[var(--muted-silver)]">{work.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-12 lantern-panel rounded-3xl p-6 md:p-10">
        <p className="gold-text uppercase tracking-[0.24em]">The Keeper&apos;s Table</p>
        <h2 className="mt-4 text-3xl md:text-5xl">Fresh produce for food banks and families.</h2>

        <div className="mt-8 space-y-5 text-lg leading-9 text-[var(--muted-silver)]">
          <p>
            The Keeper&apos;s Table is a Quiet Works program created to help supply local food banks and low-income families with access to fruits and vegetables. The goal is simple: help place good food where it is needed while reducing the amount of fresh food that is wasted through spoilage.
          </p>
          <p>
            The program will make use of services such as Flashfood to purchase discounted produce bags from participating stores. These bags often contain useful fruits and vegetables that can still serve families, neighbours, and food support partners when they are collected and distributed with care.
          </p>
          <p>
            Supporters who wish to contribute will be able to choose how many produce bags they would like to help purchase. Produce bags generally range from $4 to $6, and the program amount may also include the platform-specific charge for using the app, along with a small additional amount to help offset the cost of travelling to collect and distribute the bags.
          </p>
          <p>
            The Keeper&apos;s Table is beginning in Nova Scotia, with the Annapolis Valley as the first main area of operation. As the work grows, Quiet Light Ministries would like to connect with supporters across Nova Scotia and throughout Canada so this program can eventually serve communities in other provinces as well.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-[rgba(216,168,79,0.28)] bg-[rgba(7,17,31,0.42)] p-6 md:p-8">
          <p className="gold-text uppercase tracking-[0.24em]">Flashfood Referral</p>
          <h3 className="mt-3 text-2xl md:text-3xl">Help reduce waste and support the table.</h3>
          <p className="mt-5 leading-8 text-[var(--muted-silver)]">
            Anyone who would like to use Flashfood for their own family can sign up with the referral code <span className="font-mono text-[var(--soft-gold)]">JOSH7KW9Y</span>. If their first purchase is over $15, they can receive $5 off through the referral program.
          </p>
          <p className="mt-4 leading-8 text-[var(--muted-silver)]">
            Any referral rewards generated through this link will be directed back into The Keeper&apos;s Table to help purchase more produce bags for local food banks and low-income families.
          </p>
          <Link className="gold-text mt-6 inline-block rounded-full border border-[rgba(216,168,79,0.5)] px-6 py-3 text-sm uppercase tracking-[0.18em] transition hover:bg-[rgba(216,168,79,0.1)]" href="https://flashfood.onelink.me/yAxk/referral" target="_blank" rel="noopener noreferrer">
            Download Flashfood
          </Link>
        </div>

        <div className="mt-10">
          <p className="gold-text uppercase tracking-[0.24em]">Keeper&apos;s Table Donations</p>
          <h3 className="mt-3 text-2xl md:text-3xl">Donation buttons can be added here.</h3>
          <p className="mt-4 max-w-3xl leading-8 text-[var(--muted-silver)]">
            These three spaces are reserved for dedicated Keeper&apos;s Table donation buttons, so supporters can direct their gifts specifically toward produce bags, family support, and collection costs.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {keeperTableDonationSlots.map((slot) => (
              <div className="rounded-2xl border border-[var(--lantern-gold)] p-5" key={slot.title}>
                <p className="gold-text text-xl">{slot.title}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted-silver)]">{slot.description}</p>
                <p className="gold-text mt-5 text-xs uppercase tracking-[0.2em]">Button Placeholder</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
