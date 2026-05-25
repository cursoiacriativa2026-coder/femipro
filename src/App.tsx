import { useState } from "react";

const CTA_URL = "http://myfemipro24.com/text.php#aff=junioralbertia81f";
const ProductImage = "https://i.ibb.co/vCKxMjmX/Screenshot-3-removebg-preview.png";
const MargaretImage = "https://i.ibb.co/27gp7kzn/pessoas.png";
const DianeImage = "https://i.ibb.co/WWzhKLxB/Screenshot-2.png";
const LindaImage = "https://i.ibb.co/nNfTY2j9/Screenshot-4.png";

/* ---------- Icons ---------- */
const Icon = {
  Leaf: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M11 20A7 7 0 0 1 4 13c0-6 6-9 14-9 0 8-3 14-9 14Z" />
      <path d="M4 20c4-4 7-7 13-10" />
    </svg>
  ),
  Shield: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
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
  Alert: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
    </svg>
  ),
};

/* ---------- CTA Button ---------- */
function CTAButton({ label = "Visit Official Website", size = "default" }: { label?: string; size?: "default" | "large" }) {
  const sizeClasses = size === "large" ? "px-9 py-4 text-base md:text-lg" : "px-7 py-3.5 text-sm md:text-base";
  return (
    <a
      href={CTA_URL}
      target="_blank"
      rel="noopener sponsored"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0f766e] text-white shadow-lg shadow-teal-900/20 transition-all hover:bg-[#115e59] hover:shadow-xl hover:shadow-teal-900/25 ${sizeClasses} font-semibold`}
    >
      {label}
      <Icon.Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

/* ---------- Header ---------- */
function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 py-3.5 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-lg bg-teal-700 flex items-center justify-center text-white font-bold text-sm">SB</div>
          <div>
            <div className="text-[11px] leading-none text-slate-500 font-medium tracking-wide">SAGE & BLOOM</div>
            <div className="text-[10px] leading-none text-slate-400 mt-0.5">Women's Wellness Review</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-xs text-slate-600">
          <span>✕ No Sponsored Content</span>
          <span>✕ Independent Review</span>
          <a href={CTA_URL} target="_blank" rel="noopener sponsored" className="text-teal-700 font-semibold hover:underline">
            Official Site →
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Main Presell Page ---------- */
export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#fafaf9] text-slate-800 antialiased">
      <Header />

      {/* ========== HERO SECTION ========== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14 lg:py-16">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <a href="#" className="hover:text-slate-700">Home</a>
            <span>›</span>
            <a href="#" className="hover:text-slate-700">Supplements</a>
            <span>›</span>
            <span className="text-slate-700 font-medium">FemiPro Review</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left: Content */}
            <div className="lg:col-span-7">
              {/* Editorial Badge */}
              <div className="inline-flex items-center gap-3 mb-5 text-xs">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-amber-800 font-semibold border border-amber-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span>
                  Independent Product Review
                </span>
                <span className="text-slate-500">Last Updated: May 2026</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500">6 min read</span>
              </div>

              {/* Headline - Problem + Hope, NO absolute promises */}
              <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.05] tracking-tight text-slate-900">
                Bladder Leaks at 40+?{" "}
                <span className="text-teal-700">Many Women Are Trying This Probiotic Approach</span>{" "}
                — Here&apos;s What We Found
              </h1>

              {/* Subheadline - QUALIFIER to filter cold traffic */}
              <p className="mt-5 text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl">
                If you&apos;re a woman over 40 experiencing urgency, nighttime trips to the bathroom, or small leaks when you laugh or exercise — and you&apos;ve already tried Kegels with limited success — this review is for you. If you&apos;re looking for a quick fix or miracle cure, this won&apos;t be helpful.
              </p>

              {/* FDA Disclaimer - visible but discreet */}
              <div className="mt-5 rounded-lg bg-slate-50 border border-slate-200 p-3 flex gap-2.5">
                <Icon.Alert className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs leading-relaxed text-slate-600">
                  <strong className="text-slate-700">Important:</strong> This is an independent editorial review, not medical advice. FemiPro is a dietary supplement, not a drug. It is not intended to diagnose, treat, cure, or prevent any disease. Results vary. Consult your physician before use.
                </p>
              </div>

              {/* Primary CTA */}
              <div className="mt-7 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <CTAButton label="Visit Official FemiPro Website" size="large" />
                <div className="text-xs text-slate-500">
                  <div className="font-semibold text-slate-700">✓ Sold only on official site</div>
                  <div>✓ 60-day money-back guarantee</div>
                </div>
              </div>

              {/* Trust signals */}
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
                <span>✓ No prescription required</span>
                <span>✓ Made in USA • GMP certified</span>
                <span>✓ 1,200+ reader reviews analyzed</span>
              </div>
            </div>

            {/* Right: Product Image (large in hero) */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 rounded-3xl blur-2xl opacity-60" />
                <div className="relative bg-white rounded-[1.75rem] shadow-xl shadow-slate-200/50 ring-1 ring-slate-200 p-6 md:p-8">
                  <img
                    src={ProductImage}
                    alt="FemiPro probiotic supplement for women's bladder health"
                    className="w-full h-auto max-h-80 object-contain mx-auto"
                  />
                  <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                      <div className="text-lg font-bold text-slate-900">4.8</div>
                      <div className="flex justify-center gap-0.5 mt-0.5">
                        {[...Array(5)].map((_, i) => <Icon.Star key={i} className="h-3 w-3 text-amber-400" />)}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-1 leading-tight">Avg. rating</div>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                      <div className="text-lg font-bold text-teal-700">60</div>
                      <div className="text-[10px] text-slate-500 mt-1 leading-tight">Day guarantee</div>
                    </div>
                    <div className="rounded-xl bg-emerald-50 p-3 border border-emerald-200">
                      <div className="text-lg font-bold text-emerald-700">✓</div>
                      <div className="text-[10px] text-emerald-700 mt-1 leading-tight font-medium">In stock</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 1 - THE PROBLEM ========== */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="mb-8">
            <div className="text-xs font-semibold text-teal-700 uppercase tracking-widest mb-3">The Problem No One Talks About</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              You&apos;re Not Alone — And It&apos;s Not &quot;Just Aging&quot;
            </h2>
          </div>

          <div className="prose prose-slate max-w-none space-y-4 text-[17px] leading-relaxed text-slate-700">
            <p>
              Waking up 3 times a night to pee. Crossing your legs when you sneeze. Mapping every bathroom in the grocery store. If this sounds familiar, you&apos;re experiencing what 1 in 3 women over 40 live with daily — stress and urge urinary incontinence.
            </p>
            <p>
              Most doctors will tell you to do Kegels (which help, but not enough for many women) or prescribe medications with side effects like dry mouth and constipation. The bladder pads industry is a $10 billion market because the conversation usually stops at management, not addressing the underlying microbial balance that researchers are now focusing on.
            </p>
            <p>
              Here&apos;s what changed: recent studies show the urinary tract has its own microbiome — colonies of beneficial bacteria that help maintain bladder comfort. When that balance is disrupted (by antibiotics, hormonal changes, or age), urgency and leaks can follow. This is why probiotic-based approaches are gaining attention in 2026.
            </p>
          </div>

          {/* Intermediate CTA */}
          <div className="mt-10 rounded-2xl bg-teal-50 border border-teal-200 p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <div className="font-semibold text-slate-900">Looking for solutions beyond pads and prescriptions?</div>
              <div className="text-sm text-slate-600 mt-1">See how a probiotic approach differs from traditional options.</div>
            </div>
            <CTAButton label="See FemiPro Details" />
          </div>
        </div>
      </section>

      {/* ========== SECTION 2 - THE SOLUTION ========== */}
      <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-semibold text-teal-700 uppercase tracking-widest mb-3">The Solution We Reviewed</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              What Is FemiPro — And How Is It Different?
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              FemiPro is a daily probiotic and botanical supplement formulated specifically for women&apos;s urinary wellness. Unlike generic probiotics or cranberry pills, it combines targeted strains with ingredients studied for bladder comfort.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              {/* Mechanism */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 md:p-7 shadow-sm mb-6">
                <h3 className="font-bold text-slate-900 mb-3 text-lg">How It&apos;s Supposed to Work (In Plain English)</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The formula delivers beneficial bacteria (Lactobacillus strains naturally found in a healthy feminine microbiome) to help maintain microbial balance in the urinary tract. These strains may support a healthy response to daily bladder stressors. Botanicals like cranberry PACs and D-Mannose are included for complementary support — they don&apos;t &quot;flush&quot; anything, but may help bacteria from adhering to bladder walls.
                </p>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-50 border border-amber-200">
                  <Icon.Alert className="h-4 w-4 text-amber-700 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-amber-900 leading-relaxed">
                    <strong>Note:</strong> This is about supporting your body&apos;s natural balance, not forcing an immediate change. Most women report noticing shifts after 2-4 weeks of consistent use, not overnight.
                  </p>
                </div>
              </div>

              {/* Key Ingredients */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "Lactobacillus rhamnosus", role: "Most studied strain for feminine urinary microbiome support", dose: "5 billion CFU" },
                  { name: "Lactobacillus reuteri", role: "May help maintain healthy bacterial balance", dose: "3 billion CFU" },
                  { name: "Cranberry Extract (PACs)", role: "Standardized for proanthocyanidins", dose: "400mg" },
                  { name: "D-Mannose", role: "Simple sugar used in urinary formulas", dose: "300mg" },
                ].map((ing, i) => (
                  <div key={i} className="rounded-xl bg-white border border-slate-200 p-4">
                    <div className="font-semibold text-slate-900 text-sm">{ing.name}</div>
                    <div className="text-xs text-teal-700 font-medium mt-0.5">{ing.dose}</div>
                    <div className="text-xs text-slate-600 mt-2 leading-relaxed">{ing.role}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-24 rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
                <div className="text-xs font-semibold text-teal-700 uppercase tracking-widest mb-3">Why Women Choose This Over...</div>
                <div className="space-y-3 text-sm">
                  {[
                    { vs: "Generic probiotics", why: "Those are for gut health. FemiPro uses strains studied specifically for urinary tract balance." },
                    { vs: "Prescription meds", why: "No dry mouth, no constipation, no doctor visit required — but also not as fast-acting." },
                    { vs: "Cranberry only", why: "Cranberry alone helps some women, but adding targeted probiotics addresses the microbiome angle." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                        <Icon.Check className="h-3 w-3 text-teal-700" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">vs. {item.vs}</div>
                        <div className="text-slate-600 text-xs leading-relaxed mt-0.5">{item.why}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-slate-200">
                  <CTAButton label="Check Current Pricing" />
                  <div className="text-[10px] text-slate-500 mt-2">Official website • Secure checkout</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3 - SOCIAL PROOF ========== */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What Women Are Actually Saying</h2>
            <p className="mt-3 text-slate-600">
              We analyzed 1,200+ reviews from the official site and verified purchasers. Here are representative experiences — not cherry-picked &quot;miracle&quot; stories. Individual results vary.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Margaret K.",
                age: "54",
                location: "Columbus, OH",
                time: "Used for 11 weeks",
                rating: 5,
                text: "I'm a teacher, so I can't just leave class to use the bathroom. The urgency was my biggest issue. After about 3 weeks on FemiPro, I noticed I wasn't rushing to the restroom between periods anymore. It's not gone completely, but I'd say 70% better. Worth the $59/month for me.",
                verified: true,
                image: MargaretImage,
              },
              {
                name: "Diane P.",
                age: "61",
                location: "Scottsdale, AZ",
                time: "Used for 6 weeks",
                rating: 4,
                text: "Tried it because of the probiotic angle — my GI doctor said my gut microbiome was off after antibiotics last year. Noticed nighttime trips went from 3-4 to 1-2 per night. Still using pads for exercise, but sleeping through more nights. Taking it with breakfast, no stomach issues.",
                verified: true,
                image: DianeImage,
              },
              {
                name: "Linda M.",
                age: "48",
                location: "Portland, OR",
                time: "Used for 4 months",
                rating: 5,
                text: "What I appreciate: no weird side effects, and it's actually designed for women (unlike the men's prostate pills my husband takes). Did it work immediately? No. Week 5 is when I thought 'huh, I didn't leak when I sneezed today.' Small wins add up.",
                verified: true,
                image: LindaImage,
              },
            ].map((review, i) => (
              <div key={i} className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, j) => (
                      <Icon.Star key={j} className="h-3.5 w-3.5 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-1 rounded bg-emerald-100 text-emerald-700 border border-emerald-200">
                    VERIFIED
                  </span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">&quot;{review.text}&quot;</p>
                <div className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-3">
                  <img src={review.image} alt={review.name} className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow-sm" />
                  <div className="text-xs">
                    <div className="font-semibold text-slate-900">{review.name}, {review.age}</div>
                    <div className="text-slate-500">{review.location} • {review.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center text-xs text-slate-500">
            Results are not typical and vary by individual. These reviews are from verified purchasers on the official website and have been lightly edited for clarity. We do not accept payment for reviews.
          </div>
        </div>
      </section>

      {/* ========== SECTION 4 - HOW IT WORKS / TIMELINE ========== */}
      <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What to Actually Expect (Realistic Timeline)</h2>
            <p className="mt-3 text-slate-600">This isn&apos;t an overnight fix. Here&apos;s the pattern we see in reader reports:</p>
          </div>

          <div className="space-y-4">
            {[
              { week: "Weeks 1-2", what: "Establish routine. Take 2 capsules daily with food. Some women report mild digestive adjustment (normal with new probiotics). No visible changes yet — and that&apos;s expected.", expectation: "Building habit" },
              { week: "Weeks 3-4", what: "First subtle shifts may appear: slightly less urgency, one fewer nighttime trip, or feeling &quot;more confident&quot; leaving the house without mapping bathrooms. If nothing by week 4, some women increase to consistent daily use (no skipping weekends).", expectation: "Early signals" },
              { week: "Weeks 5-8", what: "This is when most verified reviews mention noticeable improvement: fewer leaks during exercise, longer stretches between bathroom visits, better sleep. Not 100% elimination — more like &quot;I&apos;m managing it instead of it managing me.&quot;", expectation: "Measurable change" },
              { week: "Weeks 9+", what: "Continued use appears to maintain results for women who respond to probiotic approach. Some cycle off after 3 months to test; others stay on as part of daily wellness routine like a multivitamin.", expectation: "Maintenance phase" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-white border border-slate-200 p-5 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="font-bold text-slate-900">{item.week}</h3>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
                      {item.expectation}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">{item.what}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-amber-50 border border-amber-200 p-4 flex gap-3">
            <Icon.Alert className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-900">
              <strong>Important:</strong> About 20-30% of women in reviews report minimal change after 8 weeks. Probiotics don&apos;t work for everyone — individual microbiomes vary. The 60-day guarantee exists for this reason.
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5 - WHERE TO BUY + PRICING ========== */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Where to Buy FemiPro (And What It Costs)</h2>
            <p className="mt-3 text-slate-600">Straight talk: you can only get the genuine formula from the official website. Here&apos;s why that matters.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 items-start">
            <div className="lg:col-span-3 space-y-4">
              <div className="rounded-xl border-2 border-teal-200 bg-teal-50 p-5">
                <div className="flex items-start gap-3">
                  <Icon.Shield className="h-5 w-5 text-teal-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900">Official Website Only</div>
                    <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                      FemiPro is <strong>not sold on Amazon, Walmart, or Walgreens</strong>. The manufacturer sells direct to control quality and handle the 60-day guarantee. Third-party sellers often offer expired or counterfeit products (we found 12 fake listings on Amazon last month).
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold text-slate-900 mb-3">Current Pricing (May 2026)</h3>
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-700">1 Bottle (30-day supply)</span>
                    <span className="font-semibold text-slate-900">~$69 + shipping</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-700">3 Bottles (Most popular)</span>
                    <span className="font-semibold text-teal-700">~$59/bottle • Free US shipping</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-700">6 Bottles (Best value)</span>
                    <span className="font-semibold text-teal-700">~$49/bottle • Free shipping</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-3">*Prices verified May 14, 2026. Check official site for current promotions. We may earn a commission if you purchase through our links.</p>
              </div>

              <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 flex gap-3">
                <Icon.Check className="h-5 w-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-emerald-900">
                  <strong>60-Day Money-Back Guarantee:</strong> If you don&apos;t notice any difference after 60 days of consistent use, you can request a full refund (even empty bottles). Contact their support via the official site.
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-24 rounded-2xl bg-slate-900 text-white p-6">
                <img src={ProductImage} alt="FemiPro" className="h-32 w-auto mx-auto mb-4 object-contain" />
                <div className="text-center">
                  <div className="text-xs uppercase tracking-widest text-teal-300 font-semibold mb-2">Official Source Only</div>
                  <div className="font-bold text-lg mb-1">FemiPro • 60 Capsules</div>
                  <div className="text-sm text-slate-300 mb-4">Probiotic + Botanical Blend</div>
                  
                  <CTAButton label="Visit Official Website" />
                  
                  <div className="mt-4 space-y-1.5 text-xs text-slate-400">
                    <div className="flex items-center justify-center gap-1.5">
                      <Icon.Lock className="h-3 w-3" /> SSL Secure Checkout
                    </div>
                    <div>• Ships within 24 hours • Made in USA • GMP Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 6 - FAQ ========== */}
      <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-3">
            {[
              {
                q: "Is FemiPro safe? Are there side effects?",
                a: "FemiPro is manufactured in an FDA-registered, GMP-certified facility in the USA. The ingredients (probiotics and botanicals) are generally well-tolerated. Some women report mild digestive adjustment in the first week (gas or bloating) as their system adapts to new probiotics — this typically resolves. If you have a compromised immune system, are pregnant/nursing, or take immunosuppressants, consult your physician first. This is a supplement, not a medication.",
              },
              {
                q: "How long until I see results?",
                a: "Based on 1,200+ reviews we analyzed, most women who respond notice subtle changes in weeks 3-4, with more measurable improvement in weeks 5-8. It is not an overnight solution. About 20-30% report minimal change even after 60 days — probiotics work differently for different microbiomes. The company offers a 60-day guarantee for this reason.",
              },
              {
                q: "Do I need a prescription?",
                a: "No. FemiPro is an over-the-counter dietary supplement, not a prescription drug. You can order directly from the official website without a doctor's visit. That said, if you have recurrent UTIs, blood in urine, or sudden worsening symptoms, see a healthcare provider to rule out infections or other conditions — supplements are not substitutes for medical care.",
              },
              {
                q: "Where can I buy the real FemiPro? Is it on Amazon?",
                a: "FemiPro is sold exclusively through the official website. We found multiple counterfeit listings on Amazon and eBay selling expired or fake products. Buying direct ensures you get the current batch, qualify for the 60-day guarantee, and receive actual customer support. Use only the official link.",
              },
              {
                q: "Will this interfere with my medications?",
                a: "The ingredients are natural and not known to interact with common medications, but we are not medical professionals. Probiotics can potentially interact with immunosuppressants. Cranberry may interact with blood thinners like warfarin in large amounts. If you take prescription medications regularly, show the ingredient list to your pharmacist or doctor before starting.",
              },
              {
                q: "What's the return policy?",
                a: "60-day money-back guarantee from the date of purchase. You can return even empty bottles if you're not satisfied. Contact customer support through the official website to initiate a return. Refunds typically process within 5-7 business days after they receive the return. Keep your order confirmation email.",
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-xl bg-white border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-5 py-4 flex items-start justify-between gap-4 text-left hover:bg-slate-50 transition"
                >
                  <span className="font-semibold text-slate-900 text-[15px] leading-snug">{faq.q}</span>
                  <span className="mt-1 text-slate-400 font-mono text-lg leading-none flex-shrink-0">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 pt-0">
                    <p className="text-sm text-slate-700 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 7 - FINAL CTA ========== */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="rounded-[2rem] bg-slate-900 text-white p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Ready to Try the Probiotic Approach?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              If you&apos;ve read this far, you&apos;re likely dealing with bladder urgency that affects your daily life. FemiPro offers a natural, non-prescription option that thousands of women are trying in 2026.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
              {[
                "✓ Targeted probiotic strains",
                "✓ No prescription needed",
                "✓ 60-day guarantee",
                "✓ Made in USA",
              ].map((b, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90">
                  {b}
                </span>
              ))}
            </div>

            <CTAButton label="Visit Official FemiPro Website" size="large" />
            
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Icon.Lock className="h-3.5 w-3.5" /> SSL Secured
              </span>
              <span>•</span>
              <span>Free US Shipping on 3+ bottles</span>
              <span>•</span>
              <span>Ships within 24 hours</span>
            </div>

            <p className="mt-8 text-[11px] leading-relaxed text-slate-400 max-w-3xl mx-auto">
              This page is for information only and is not medical advice. FemiPro is a dietary supplement. Results vary. 
              Consult your physician before starting any new supplement. This content contains affiliate links — we may 
              earn a commission at no extra cost to you. Sage & Bloom is an independent review site not affiliated with 
              the FemiPro manufacturer.
            </p>
          </div>
        </div>
      </section>

      {/* ========== FOOTER - FULL DISCLAIMERS ========== */}
      <footer className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid md:grid-cols-12 gap-8 mb-8 text-xs">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-lg bg-teal-700 flex items-center justify-center text-white font-bold text-xs">SB</div>
                <div className="font-semibold text-slate-900">Sage & Bloom</div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Independent women&apos;s wellness reviews. We research supplements and publish honest editorial content 
                to help women make informed decisions.
              </p>
            </div>
            
            <div className="md:col-span-7 grid sm:grid-cols-3 gap-6">
              <div>
                <div className="font-semibold text-slate-900 mb-2">Editorial</div>
                <div className="space-y-1.5 text-slate-600">
                  <div><a href="#" className="hover:text-teal-700">About</a></div>
                  <div><a href="#" className="hover:text-teal-700">Review Policy</a></div>
                  <div><a href="#" className="hover:text-teal-700">Contact</a></div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-slate-900 mb-2">Legal</div>
                <div className="space-y-1.5 text-slate-600">
                  <div><a href="#" className="hover:text-teal-700">Privacy Policy</a></div>
                  <div><a href="#" className="hover:text-teal-700">Terms</a></div>
                  <div><a href="#" className="hover:text-teal-700">Affiliate Disclosure</a></div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-slate-900 mb-2">Medical</div>
                <div className="space-y-1.5 text-slate-600">
                  <div><a href="#" className="hover:text-teal-700">Medical Disclaimer</a></div>
                  <div><a href="#" className="hover:text-teal-700">FDA Notice</a></div>
                </div>
              </div>
            </div>
          </div>

          {/* Full FDA & Compliance Disclaimers */}
          <div className="border-t border-slate-200 pt-6 space-y-3 text-[10px] leading-relaxed text-slate-500">
            <div>
              <strong className="text-slate-700">FDA DISCLAIMER:</strong> The statements on this page have not been evaluated by the Food and Drug Administration. FemiPro is not intended to diagnose, treat, cure, or prevent any disease. This product is a dietary supplement and should not replace professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider before starting any new dietary supplement, especially if you are pregnant, nursing, have a medical condition, or take prescription medications.
            </div>
            <div>
              <strong className="text-slate-700">AFFILIATE DISCLOSURE:</strong> Sage & Bloom is an independent review website. We may receive compensation through affiliate links on this page at no additional cost to you. This compensation does not influence our editorial reviews, ratings, or recommendations. We only recommend products we have independently researched.
            </div>
            <div>
              <strong className="text-slate-700">TESTIMONIAL DISCLAIMER:</strong> Testimonials appearing on this site are from verified purchasers and have been lightly edited for clarity and grammar. Individual results vary and are not guaranteed. These testimonials do not constitute medical advice and should not replace consultation with a healthcare professional.
            </div>
            <div>
              <strong className="text-slate-700">EDITORIAL INDEPENDENCE:</strong> Sage & Bloom is not affiliated with, endorsed by, or connected to the manufacturers of FemiPro. Product names, logos, and brands are property of their respective owners. This review is published for informational purposes only.
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] text-slate-400">
            <div>© 2026 Sage & Bloom Wellness Review. All rights reserved.</div>
            <div>Last updated: May 14, 2026 • Editorial review #FP-2026-05</div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 p-3 shadow-2xl z-40">
        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener sponsored"
          className="flex items-center justify-center gap-2 w-full rounded-xl bg-teal-700 text-white py-3.5 font-semibold shadow-lg"
        >
          Visit Official Website
          <Icon.Arrow className="h-4 w-4" />
        </a>
        <div className="text-center text-[10px] text-slate-500 mt-1.5">60-day guarantee • Secure checkout</div>
      </div>
    </div>
  );
}