import { Star } from "lucide-react";

const reviews = [
  {
    text: "I had such a great experience with Legacy garage door company! From the very first call, everyone was super nice and easy to work with. The installers showed up right on time, got straight to work, and honestly made the whole thing look effortless. They were friendly, answered all my random questions, and made sure everything worked perfectly before they left.",
    name: "Cory A.",
    initials: "CA",
  },
  {
    text: "I have used other garage door company's in the past but Legacy Garage Doors is by far the best. The owner Seth and his employee Benjamin completed the work I needed and were extremely professional. They took the time to explain their processes and what I needed to do to maintain my garage door and opener in the future. The price was more than competitive and very fair.",
    name: "Lowell P.",
    initials: "LP",
  },
  {
    text: "Appointment scheduled within 24 hours and door was fixed the same day. Very timely and reasonably priced. Would recommend and will use again if needed.",
    name: "Michelle J.",
    initials: "MJ",
  },
  {
    text: "They answered my call right away, and the tech was here in 2 hours. He checked my unit and saw that it was no longer able to be repaired as it was too old. We are very satisfied with the new unit and thanks for the fast service.",
    name: "Durel S.",
    initials: "DS",
  },
  {
    text: "Great service, on time, fixed the problem and really fair pricing!! Definitely recommend Legacy Doors!",
    name: "Kristin M.",
    initials: "KM",
  },
];

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="flex-shrink-0 w-[380px] bg-[var(--color-surface)] border border-white/[0.06] rounded-2xl p-6 flex flex-col">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="text-[var(--color-brand)] fill-[var(--color-brand)]" />
        ))}
      </div>
      <p className="text-sm text-white/60 leading-relaxed flex-1 mb-5 font-light line-clamp-4">
        &quot;{review.text}&quot;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[var(--color-brand)]/20 flex items-center justify-center text-[var(--color-brand)] text-xs font-semibold flex-shrink-0">
          {review.initials}
        </div>
        <div>
          <div className="text-sm font-medium text-white">{review.name}</div>
          <div className="text-xs text-white/30">Google Review</div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewMarquee() {
  const doubled = [...reviews, ...reviews];

  return (
    <section className="py-20 overflow-hidden">
      <div className="section-wrap mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand)] mb-3">
          Reviews
        </p>
        <div className="flex items-baseline justify-between flex-wrap gap-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            5.0★ on Google — Hear It From Them.
          </h2>
          <a
            href="https://g.co/kgs/Legacy-Garage-Doors"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-brand)] font-medium hover:underline"
          >
            See all 13 reviews →
          </a>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="review-marquee-track">
          {doubled.map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
