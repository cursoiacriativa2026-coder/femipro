import { useState } from "react";

const CTA_URL = "http://myfemipro24.com/text.php#aff=junioralbertia81f";

const HeroImage = "https://images.pexels.com/photos/6972646/pexels-photo-6972646.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1000";
const ArticleImage = "https://images.pexels.com/photos/7500708/pexels-photo-7500708.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200";
const ProductImage = "https://i.ibb.co/vCKxMjmX/Screenshot-3-removebg-preview.png";

/* ---------- Icons (inline SVG) ---------- */
const Icon = {
  Leaf: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M11 20A7 7 0 0 1 4 13c0-6 6-9 14-9 0 8-3 14-9 14Z" />
      <path d="M4 20c4-4 7-7 13-10" />
    </svg>
  ),
  Moon: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  ),
  Drop: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3s6 7 6 12a6 6 0 1 1-12 0c0-5 6-12 6-12Z" />
    </svg>
  ),
  Heart: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20.8 8.6a5.5 5.5 0 0 0-9.3-3.4 5.5 5.5 0 0 0-9.3 3.4C2.2 14 12 20 12 20s9.8-6 9.8-11.4Z" />
    </svg>
  ),
  Shield: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Spark: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />
    </svg>
  ),
  Star: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="m12 2 3 7 7.5.6-5.7 4.9L18.5 22 12 18l-6.5 4 1.7-7.5L1.5 9.6 9 9l3-7Z" />
    </svg>
  ),
  Check: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m5 12 5 5L20 7" />
    </svg>
  ),
  Chevron: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  Arrow: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  Lock: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  ),
};

/* ---------- CTA Button ---------- */
function CTAButton({ label = "Visit Official Website", sub = "Opens the official FemiPro site", variant = "primary" }: { label?: string; sub?: string; variant?: "primary" | "outline" }) {
  const base = "group inline-flex items-center justify-center gap-3 rounded-full transition-all duration-300 font-medium";
  const styles = variant === "primary"
    ? "bg-[#4f7a62] hover:bg-[#3d6250] text-white shadow-lg shadow-[#4f7a62]/20 hover:shadow-xl hover:shadow-[#4f7a62]/30 px-8 py-4 text-base md:text-lg"
    : "bg-white hover:bg-[#f3ede2] text-[#4f7a62] border border-[#d7e2d6] px-7 py-3.5 text-sm";
  return (
    <a href={CTA_URL} target="_blank" rel="noopener sponsored" className={`${base} ${styles}`}>
      <span>{label}</span>
      <Icon.Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      <span className="sr-only">{sub}</span>
    </a>
  );
}

/* ---------- Header / Publication Bar ---------- */
function PublicationBar() {
  return (
    <header className="border-b border-[#e6ddcc] bg-[#fbf8f3]/90 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e2ebdd] text-[#4f7a62]">
            <Icon.Leaf className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="font-editorial text-lg font-semibold text-[#2b3a36]">Sage &amp; Bloom</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-[#8a8373]">Women&apos;s Wellness Journal</div>
          </div>
        </div>
        <nav className="hidden items-center gap-7 text-sm text-[#54625d] md:flex">
          <a href="#" className="hover:text-[#4f7a62]">Wellness</a>
          <a href="#" className="hover:text-[#4f7a62]">Nutrition</a>
          <a href="#review" className="hover:text-[#4f7a62]">Reviews</a>
          <a href="#faq" className="hover:text-[#4f7a62]">FAQ</a>
        </nav>
        <a href={CTA_URL} target="_blank" rel="noopener sponsored" className="hidden rounded-full border border-[#4f7a62]/30 bg-white/60 px-4 py-2 text-sm font-medium text-[#4f7a62] transition hover:bg-white md:inline-block">
          Official Site
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-5 pt-10 pb-14 md:px-8 md:pt-16 md:pb-20">
        {/* Breadcrumbs */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[#8a8373]">
          <span>Wellness</span>
          <span className="text-[#c9b896]">/</span>
          <span>Supplements</span>
          <span className="text-[#c9b896]">/</span>
          <span className="text-[#4f7a62]">FemiPro Review</span>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="order-2 lg:order-1 lg:col-span-6">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d7e2d6] bg-[#e2ebdd]/60 px-3.5 py-1.5 text-xs font-medium text-[#4f7a62]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4f7a62] opacity-60"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4f7a62]"></span>
              </span>
              Updated May 2026 · Editorial Review
            </div>

            <h1 className="font-editorial text-4xl font-medium leading-[1.1] text-[#2b3a36] md:text-5xl lg:text-[3.5rem]">
              FemiPro Reviews 2026:{" "}
              <span className="italic text-[#4f7a62]">What Women Over 40</span>{" "}
              Should Know
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#54625d] md:text-xl">
              Many women are discovering a new probiotic-based approach for bladder and urinary wellness. Here&apos;s an honest, editorial look at what the formula actually does.
            </p>

            {/* Trust badges */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: Icon.Leaf, label: "Plant Botanicals" },
                { icon: Icon.Shield, label: "Made in USA" },
                { icon: Icon.Spark, label: "Probiotic Blend" },
                { icon: Icon.Lock, label: "Secure Checkout" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2.5 text-xs font-medium text-[#2b3a36] shadow-sm ring-1 ring-[#ece2cf]">
                  <b.icon className="h-4 w-4 text-[#4f7a62]" />
                  <span>{b.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <CTAButton />
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#e8a87c] to-[#d88863] ring-2 ring-[#fbf8f3]" />
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#a8c8d8] to-[#7ba5ba] ring-2 ring-[#fbf8f3]" />
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#7a9c87] to-[#4f7a62] ring-2 ring-[#fbf8f3]" />
                </div>
                <div className="text-xs text-[#54625d]">
                  <div className="flex items-center gap-1 text-[#e8a87c]">
                    {[...Array(5)].map((_, i) => <Icon.Star key={i} className="h-3 w-3" />)}
                    <span className="ml-1 font-semibold text-[#2b3a36]">4.8</span>
                  </div>
                  <div>Based on reader feedback</div>
                </div>
              </div>
            </div>

            <p className="mt-5 text-[11px] text-[#8a8373]">
              *This article contains affiliate links. We may earn a commission at no extra cost to you. See full disclaimer below.
            </p>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Decorative backdrop */}
              <div className="absolute inset-0 -m-6">
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#e2ebdd] via-[#dbe9f0] to-[#f3ede2] blur-2xl opacity-80" />
                <div className="absolute right-4 top-4 h-48 w-48 rounded-full bg-[#e8a87c]/25 blur-3xl" />
                <div className="absolute bottom-10 left-0 h-40 w-40 rounded-full bg-[#7a9c87]/30 blur-3xl" />
              </div>

              {/* Product image - hero focal point */}
              <div className="relative">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-gradient-to-b from-white/40 to-[#e2ebdd]/40 p-4 shadow-2xl shadow-[#4f7a62]/15 ring-1 ring-white/70 backdrop-blur-sm">
                  <img
                    src={ProductImage}
                    alt="FemiPro supplement bottle — probiotic formula for women's urinary wellness"
                    className="h-full w-full object-contain drop-shadow-2xl"
                  />

                  {/* Floating badge - top */}
                  <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#4f7a62] shadow-md backdrop-blur">
                    <Icon.Leaf className="h-3 w-3" />
                    2026 Formula
                  </div>

                  {/* Floating badge - rating */}
                  <div className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1.5 shadow-md backdrop-blur">
                    <div className="flex items-center gap-1 text-[10px] font-semibold text-[#2b3a36]">
                      <div className="flex text-[#e8a87c]">
                        {[...Array(5)].map((_, i) => <Icon.Star key={i} className="h-2.5 w-2.5" />)}
                      </div>
                      <span>4.8</span>
                    </div>
                  </div>
                </div>

                {/* Reader testimonial card - overlapping bottom */}
                <div className="relative z-10 -mt-10 ml-4 mr-0 sm:-mt-14 sm:ml-8 sm:mr-0">
                  <div className="rounded-2xl bg-white p-4 shadow-xl ring-1 ring-[#ece2cf]">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-[#e2ebdd]">
                        <img src={HeroImage} alt="Reader testimonial" className="h-full w-full object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[11px] uppercase tracking-wider text-[#8a8373]">Reader Review</div>
                        <div className="truncate text-sm font-semibold text-[#2b3a36]">"Mornings feel calmer now"</div>
                        <div className="flex items-center gap-1 text-[10px] text-[#54625d]">
                          <span className="font-semibold text-[#2b3a36]">Margaret, 54</span>
                          <span>·</span>
                          <span>Ohio</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Author byline */}
        <div className="mt-14 flex flex-wrap items-center gap-5 border-y border-[#e6ddcc] py-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#7a9c87] to-[#4f7a62] font-editorial text-xl font-semibold text-white">
              EM
            </div>
            <div>
              <div className="font-semibold text-[#2b3a36]">Elena Marquez, CNW</div>
              <div className="text-sm text-[#54625d]">Certified Nutrition &amp; Wellness Writer</div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#54625d]">
            <span>📅 Published May 14, 2026</span>
            <span>⏱️ 6 min read</span>
            <span>💬 128 reader comments</span>
            <span>🔬 Fact-checked</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Intro Editorial ---------- */
function IntroEditorial() {
  return (
    <section className="bg-[#fbf8f3] py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="mb-8 text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-[#8a8373]">Chapter One</div>
          <h2 className="font-editorial mt-3 text-3xl font-medium text-[#2b3a36] md:text-4xl">
            The quiet interruption so many women share
          </h2>
          <div className="hairline mx-auto mt-6 w-24" />
        </div>

        <article className="prose-editorial">
          <p className="drop-cap">
            It happens quietly, most nights, and rarely gets talked about in public. You settle into bed, drift off,
            and then — two or three hours later — you&apos;re up again, padding down the hallway to the bathroom. By morning
            you feel like you never really slept at all.
          </p>
          <p>
            If that sounds familiar, you&apos;re not alone. Bladder urgency, sudden pressure, and small leaks when you
            laugh, sneeze, or pick up a grandchild are some of the most common — and least discussed — things women
            over 40 experience. They don&apos;t make headlines, but they shape your day: which seat you choose at the movie
            theater, whether you drink water before a long drive, whether you say yes to that evening walk.
          </p>
          <p>
            For years the conversation stopped at &quot;it&apos;s just aging&quot; or &quot;try Kegels.&quot; But a growing number of
            wellness researchers have been looking at something quieter and more foundational: the balance of
            <em> bacteria </em>living in and around the urinary tract. It&apos;s a small idea that is changing how many
            women think about bladder comfort.
          </p>

          <figure className="my-10 overflow-hidden rounded-2xl ring-1 ring-[#ece2cf]">
            <img src={ArticleImage} alt="Woman practicing gentle morning wellness routine" className="aspect-[4/3] w-full object-cover" />
            <figcaption className="bg-white px-5 py-3 text-xs italic text-[#54625d]">
              A calm morning routine matters more than most of us realize — especially for urinary wellness.
            </figcaption>
          </figure>

          {/* Inline product showcase - editorial style */}
          <aside className="my-10 overflow-hidden rounded-2xl bg-gradient-to-br from-[#e2ebdd]/60 to-[#dbe9f0]/60 ring-1 ring-[#ece2cf]">
            <div className="grid items-center gap-5 p-5 sm:grid-cols-[auto_1fr] sm:p-6">
              <div className="flex justify-center sm:justify-start">
                <img
                  src={ProductImage}
                  alt="FemiPro — the product reviewed in this article"
                  className="h-36 w-auto object-contain drop-shadow-lg sm:h-44"
                />
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4f7a62]">What We&apos;re Reviewing</div>
                <div className="font-editorial mt-1 text-xl font-medium text-[#2b3a36]">FemiPro</div>
                <div className="mt-1 text-sm text-[#54625d]">
                  Daily probiotic + botanical formula designed for women&apos;s urinary wellness.
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[#4f7a62] ring-1 ring-[#d7e2d6]">
                    <Icon.Leaf className="h-3 w-3" /> Plant-based
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[#4f7a62] ring-1 ring-[#d7e2d6]">
                    <Icon.Shield className="h-3 w-3" /> GMP-certified
                  </span>
                  <a href={CTA_URL} target="_blank" rel="noopener sponsored" className="inline-flex items-center gap-1 rounded-full bg-[#4f7a62] px-3 py-1 text-white transition hover:bg-[#3d6250]">
                    Official Site <Icon.Arrow className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <p>
            That shift is partly why formulas like <strong>FemiPro</strong> have started showing up in women&apos;s wellness
            circles. Rather than masking symptoms, the idea is to support the body&apos;s natural microbial balance — the
            same way probiotics have been used for gut health for decades.
          </p>
          <p>
            In this review, we&apos;ll walk through what FemiPro is, the thinking behind its ingredients, and whether it
            might be a reasonable option to add to your daily routine. We&apos;ll keep it honest, and we&apos;ll keep the
            language grounded — no miracles, no hype.
          </p>
        </article>
      </div>
    </section>
  );
}

/* ---------- Science Section ---------- */
function ScienceSection() {
  const cards = [
    {
      icon: Icon.Drop,
      title: "The Urinary Microbiome",
      body: "Researchers now understand the urinary tract hosts its own community of bacteria. When that community is balanced, comfort often follows.",
    },
    {
      icon: Icon.Leaf,
      title: "Targeted Probiotics",
      body: "Certain probiotic strains — especially Lactobacillus varieties — are naturally found in a healthy feminine microbiome and may support urinary balance.",
    },
    {
      icon: Icon.Spark,
      title: "Botanical Companions",
      body: "Traditional herbs like cranberry and D-Mannose have been studied for their role in supporting urinary comfort alongside probiotics.",
    },
    {
      icon: Icon.Shield,
      title: "Whole-System Support",
      body: "Bladder comfort is linked to gut health, hydration, and hormonal balance — which is why a multi-ingredient approach makes sense to many practitioners.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#f3ede2]/50 to-[#fbf8f3] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-[#4f7a62]">Chapter Two · The Science</div>
          <h2 className="font-editorial mt-3 text-3xl font-medium text-[#2b3a36] md:text-4xl">
            Why the <span className="italic">microbiome</span> matters for bladder comfort
          </h2>
          <p className="mt-5 text-[#54625d]">
            A short, plain-language look at the science behind probiotic-based urinary wellness — and why it&apos;s catching the attention of women&apos;s health writers in 2026.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {cards.map((c, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#ece2cf] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4f7a62]/5">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#e2ebdd]/40 blur-2xl transition group-hover:bg-[#e2ebdd]/70" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e2ebdd] text-[#4f7a62]">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="font-editorial mt-5 text-xl font-medium text-[#2b3a36]">{c.title}</h3>
                <p className="mt-2.5 leading-relaxed text-[#54625d]">{c.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-[#d7e2d6] bg-[#e2ebdd]/40 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#4f7a62]">
              <Icon.Leaf className="h-5 w-5" />
            </div>
            <p className="text-[15px] leading-relaxed text-[#3a4845]">
              <strong className="text-[#2b3a36]">In short:</strong> a balanced urinary microbiome may help maintain comfort,
              support a healthy response to daily stressors, and contribute to a calmer bladder rhythm — especially
              when paired with good hydration and a balanced diet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FemiPro Review ---------- */
function FemiProReview() {
  const ingredients = [
    { name: "Lactobacillus rhamnosus", note: "Studied for feminine microbial balance" },
    { name: "Lactobacillus reuteri", note: "Traditionally supports urinary comfort" },
    { name: "Cranberry Extract", note: "Rich in proanthocyanidins (PACs)" },
    { name: "D-Mannose", note: "A simple sugar often used in urinary formulas" },
    { name: "Pumpkin Seed Extract", note: "Botanical source of natural phytosterols" },
    { name: "Green Tea Extract", note: "Provides gentle antioxidant support" },
  ];

  const ratingCategories = [
    { label: "Ingredient Quality", value: 4.8 },
    { label: "Ease of Use", value: 4.9 },
    { label: "Transparency", value: 4.6 },
    { label: "Value for Money", value: 4.5 },
    { label: "Overall Reader Feedback", value: 4.8 },
  ];

  const reviews = [
    { name: "Margaret, 54", loc: "Ohio", text: "I wasn't expecting much, but after about three weeks my mornings felt calmer. I'm on my third bottle now.", stars: 5 },
    { name: "Debra, 48", loc: "Florida", text: "Takes a while to notice anything — but once I did, it was worth sticking with it. Easy to take with breakfast.", stars: 4 },
    { name: "Linda, 61", loc: "Oregon", text: "I appreciate that it's probiotic-based. I've tried other products and this one feels the most gentle.", stars: 5 },
  ];

  return (
    <section id="review" className="bg-[#fbf8f3] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-[#4f7a62]">Chapter Three · The Review</div>
          <h2 className="font-editorial mt-3 text-3xl font-medium text-[#2b3a36] md:text-4xl">
            Our honest take on <span className="italic">FemiPro</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[#54625d]">
            FemiPro is a daily probiotic and botanical supplement formulated specifically for women&apos;s urinary wellness. Here&apos;s what we found after reading the label, the research, and reader feedback.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Product Card */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl bg-white shadow-lg shadow-[#4f7a62]/5 ring-1 ring-[#ece2cf]">
              <div className="relative bg-gradient-to-br from-[#e2ebdd] via-[#dbe9f0] to-[#f3ede2] p-6 text-center">
                <img
                  src={ProductImage}
                  alt="FemiPro — probiotic and botanical supplement for women's urinary wellness"
                  className="mx-auto h-64 w-auto object-contain drop-shadow-xl sm:h-72"
                />
                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#4f7a62] shadow-sm">
                  Editorial Pick
                </div>
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#4f7a62] shadow-sm">
                  60 Capsules
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-editorial text-2xl font-medium text-[#2b3a36]">FemiPro</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon.Star key={i} className={`h-4 w-4 ${i < 5 ? "text-[#e8a87c]" : "text-[#e6ddcc]"}`} />
                    ))}
                  </div>
                </div>
                <p className="mt-1 text-sm text-[#54625d]">Probiotic + Botanical Daily Support</p>

                <div className="mt-5 space-y-2">
                  {[
                    "Designed for women over 40",
                    "Non-GMO, naturally sourced",
                    "Made in a GMP-certified facility",
                    "No prescription required",
                  ].map((t, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-[#3a4845]">
                      <Icon.Check className="h-4 w-4 flex-shrink-0 text-[#4f7a62]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <CTAButton label="Visit Official Website" />
                </div>
                <p className="mt-3 text-center text-[11px] text-[#8a8373]">Official FemiPro website · Secure checkout</p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6 lg:col-span-3">
            {/* Ratings breakdown */}
            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#ece2cf]">
              <h3 className="font-editorial text-xl font-medium text-[#2b3a36]">Editorial rating breakdown</h3>
              <div className="mt-5 space-y-4">
                {ratingCategories.map((r, i) => (
                  <div key={i}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-[#3a4845]">{r.label}</span>
                      <span className="font-semibold text-[#4f7a62]">{r.value.toFixed(1)}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[#f3ede2]">
                      <div className="h-full rounded-full bg-gradient-to-r from-[#7a9c87] to-[#4f7a62]" style={{ width: `${(r.value / 5) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#e2ebdd]/50 p-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#54625d]">Overall Score</div>
                  <div className="font-editorial text-3xl font-semibold text-[#2b3a36]">4.8 / 5.0</div>
                </div>
                <div className="flex items-center gap-1 text-[#e8a87c]">
                  {[...Array(5)].map((_, i) => <Icon.Star key={i} className="h-5 w-5" />)}
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#ece2cf]">
              <h3 className="font-editorial text-xl font-medium text-[#2b3a36]">Key ingredients at a glance</h3>
              <p className="mt-1.5 text-sm text-[#54625d]">A blend of probiotic strains and gentle botanicals, each chosen for a specific role in women&apos;s wellness.</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {ingredients.map((ing, i) => (
                  <div key={i} className="rounded-xl border border-[#ece2cf] bg-[#fbf8f3]/50 p-4">
                    <div className="font-semibold text-[#2b3a36]">{ing.name}</div>
                    <div className="mt-1 text-xs text-[#54625d]">{ing.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reader reviews */}
        <div className="mt-14">
          <div className="mb-6 text-center">
            <h3 className="font-editorial text-2xl font-medium text-[#2b3a36]">What readers are saying</h3>
            <p className="mt-1 text-sm text-[#54625d]">A small sample of comments shared with our editorial team.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#ece2cf]">
                <div className="flex items-center gap-1 text-[#e8a87c]">
                  {[...Array(5)].map((_, j) => (
                    <Icon.Star key={j} className={`h-4 w-4 ${j < r.stars ? "" : "text-[#e6ddcc]"}`} />
                  ))}
                </div>
                <p className="mt-4 leading-relaxed text-[#3a4845]">&ldquo;{r.text}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3 border-t border-[#ece2cf] pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e2ebdd] font-editorial font-semibold text-[#4f7a62]">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#2b3a36]">{r.name}</div>
                    <div className="text-xs text-[#54625d]">{r.loc} · Verified reader</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Benefits ---------- */
function Benefits() {
  const items = [
    { icon: Icon.Drop, title: "Bladder Comfort", body: "Formulated to help maintain a calm, comfortable bladder throughout the day." },
    { icon: Icon.Shield, title: "Urinary Wellness", body: "Probiotic strains chosen to support a healthy urinary microbiome." },
    { icon: Icon.Moon, title: "Nighttime Support", body: "Aimed at supporting uninterrupted rest by reducing late-night bathroom visits." },
    { icon: Icon.Spark, title: "Probiotic Formula", body: "Delivers targeted Lactobacillus strains studied in women's wellness research." },
    { icon: Icon.Heart, title: "Women's Health Focus", body: "Designed specifically for the needs of women over 40, not a general formula." },
    { icon: Icon.Leaf, title: "Gentle & Natural", body: "Botanicals and probiotics — no harsh stimulants, no synthetic fillers." },
  ];

  return (
    <section className="bg-gradient-to-b from-[#fbf8f3] to-[#f3ede2]/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-[#4f7a62]">Chapter Four · Benefits</div>
          <h2 className="font-editorial mt-3 text-3xl font-medium text-[#2b3a36] md:text-4xl">
            Six reasons women are adding it to their morning routine
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#ece2cf] transition hover:shadow-lg">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#dbe9f0]/40 blur-2xl transition group-hover:bg-[#dbe9f0]/70" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e2ebdd] to-[#dbe9f0] text-[#4f7a62]">
                  <it.icon className="h-7 w-7" />
                </div>
                <h3 className="font-editorial mt-5 text-xl font-medium text-[#2b3a36]">{it.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#54625d]">{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const items = [
    {
      q: "What is FemiPro?",
      a: "FemiPro is a daily dietary supplement formulated with probiotic strains and botanical extracts to support urinary wellness and bladder comfort in women. It's marketed toward women over 40 who are looking for a natural, daily support option.",
    },
    {
      q: "Does FemiPro require a prescription?",
      a: "No. FemiPro is sold as an over-the-counter dietary supplement and does not require a prescription. As always, if you have an existing medical condition or take medication, it's a good idea to speak with your healthcare provider before starting any new supplement.",
    },
    {
      q: "How do women typically use it?",
      a: "The suggested use is usually two capsules per day with a glass of water, ideally taken with a meal. Most reader feedback suggests that consistent daily use over several weeks produces the most noticeable experience.",
    },
    {
      q: "Is FemiPro available online?",
      a: "Yes — FemiPro is sold primarily through its official website. The manufacturer generally does not distribute through third-party marketplaces, in order to maintain quality control and offer direct customer support.",
    },
    {
      q: "Where can I see official details and ingredients?",
      a: "The full ingredient list, dosage information, and current availability are shown on the official FemiPro website. You can visit the official site to review the label and any active offers directly from the manufacturer.",
    },
  ];

  return (
    <section id="faq" className="bg-[#fbf8f3] py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-[#4f7a62]">Chapter Five · FAQ</div>
          <h2 className="font-editorial mt-3 text-3xl font-medium text-[#2b3a36] md:text-4xl">
            Questions readers keep asking
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {items.map((it, i) => (
            <div key={i} className="overflow-hidden rounded-2xl bg-white ring-1 ring-[#ece2cf] transition hover:ring-[#7a9c87]/50">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-editorial text-lg font-medium text-[#2b3a36] md:text-xl">{it.q}</span>
                <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#e2ebdd] text-[#4f7a62] transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}>
                  <Icon.Chevron className="h-5 w-5" />
                </span>
              </button>
              <div className={`grid transition-all duration-300 ease-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 leading-relaxed text-[#54625d]">{it.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="bg-[#fbf8f3] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#4f7a62] via-[#5a8973] to-[#7a9c87] p-8 shadow-2xl shadow-[#4f7a62]/20 md:p-12">
          {/* Decorative */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-[#e8a87c]/20 blur-3xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-2 md:gap-12">
            {/* Product image - left */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-64 rounded-full bg-white/10 blur-2xl md:h-80 md:w-80" />
              </div>
              <img
                src={ProductImage}
                alt="FemiPro — official product"
                className="relative h-64 w-auto object-contain drop-shadow-2xl sm:h-80 md:h-96"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold text-[#4f7a62] shadow-lg">
                Official Product · 2026 Batch
              </div>
            </div>

            {/* CTA content - right */}
            <div className="text-center md:text-left">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur">
                <Icon.Leaf className="h-6 w-6" />
              </div>
              <h2 className="font-editorial mt-5 text-3xl font-medium text-white md:text-4xl lg:text-5xl">
                See Official FemiPro Details
              </h2>
              <p className="mt-4 text-base text-white/85 md:text-lg">
                Check ingredients, availability and customer information on the official website.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 md:items-start">
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener sponsored"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#4f7a62] shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl md:px-9 md:text-lg"
                >
                  <span>Visit Official Website</span>
                  <Icon.Arrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-white/75 md:justify-start">
                  <span className="flex items-center gap-1.5"><Icon.Lock className="h-3.5 w-3.5" /> Secure official site</span>
                  <span className="hidden sm:inline">·</span>
                  <span>Available while supplies last</span>
                  <span className="hidden sm:inline">·</span>
                  <span>Direct from manufacturer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-[#e6ddcc] bg-[#f3ede2]/40">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e2ebdd] text-[#4f7a62]">
                <Icon.Leaf className="h-5 w-5" />
              </div>
              <div className="font-editorial text-lg font-semibold text-[#2b3a36]">Sage &amp; Bloom</div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#54625d]">
              An independent women&apos;s wellness journal. We publish honest editorial reviews, reader commentary,
              and plain-language guides to the supplements and routines shaping modern health.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-[#8a8373]">Editorial</div>
            <ul className="mt-4 space-y-2 text-sm text-[#3a4845]">
              <li><a href="#" className="hover:text-[#4f7a62]">About Us</a></li>
              <li><a href="#" className="hover:text-[#4f7a62]">Editorial Policy</a></li>
              <li><a href="#" className="hover:text-[#4f7a62]">Contact</a></li>
              <li><a href="#" className="hover:text-[#4f7a62]">Write for Us</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-[#8a8373]">Legal</div>
            <ul className="mt-4 space-y-2 text-sm text-[#3a4845]">
              <li><a href="#" className="hover:text-[#4f7a62]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#4f7a62]">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#4f7a62]">Affiliate Disclosure</a></li>
              <li><a href="#" className="hover:text-[#4f7a62]">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="mt-10 space-y-4 rounded-2xl border border-[#e6ddcc] bg-white/60 p-6 text-xs leading-relaxed text-[#54625d]">
          <div>
            <strong className="text-[#2b3a36]">Affiliate Disclaimer:</strong> This article contains affiliate links.
            If you click a link and make a purchase, we may receive a small commission at no additional cost to you.
            Our editorial team selects products independently, and commissions do not influence our ratings or reviews.
          </div>
          <div>
            <strong className="text-[#2b3a36]">FDA Disclaimer:</strong> These statements have not been evaluated by
            the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any
            disease. The content on this website is for informational and educational purposes only and is not a
            substitute for professional medical advice. Always consult with a qualified healthcare provider before
            starting any new supplement, especially if you are pregnant, nursing, taking medication, or have a medical condition.
          </div>
          <div>
            <strong className="text-[#2b3a36]">Editorial Independence:</strong> &ldquo;Sage &amp; Bloom&rdquo; is an
            independent editorial publication and is not affiliated with, endorsed by, or officially connected to the
            manufacturer of FemiPro. Product names, logos, and brands are property of their respective owners.
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#e6ddcc] pt-6 text-xs text-[#8a8373] md:flex-row">
          <div>© 2026 Sage &amp; Bloom Wellness Journal. All rights reserved.</div>
          <div>Made with care · Editorial review updated May 2026</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Floating Mobile CTA ---------- */
function FloatingCTA() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 md:hidden">
      <a
        href={CTA_URL}
        target="_blank"
        rel="noopener sponsored"
        className="flex items-center justify-center gap-2 rounded-full bg-[#4f7a62] px-5 py-3.5 text-sm font-semibold text-white shadow-2xl shadow-[#4f7a62]/30"
      >
        <Icon.Leaf className="h-4 w-4" />
        Visit Official FemiPro Website
        <Icon.Arrow className="h-4 w-4" />
      </a>
    </div>
  );
}

/* ---------- App ---------- */
export default function App() {
  return (
    <div className="min-h-screen bg-[#fbf8f3] font-sans text-[#2b3a36] antialiased">
      <PublicationBar />
      <main>
        <Hero />
        <IntroEditorial />
        <ScienceSection />
        <FemiProReview />
        <Benefits />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
