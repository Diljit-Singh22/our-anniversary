import { useNavigate } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

const HEARTS = ["❤️", "💕", "💖", "🌸", "💗", "✨", "🌹", "💝"];

type HeartItem = {
  id: string;
  heart: string;
  left: string;
  duration: string;
  delay: string;
  size: string;
};

const HEART_ITEMS: HeartItem[] = Array.from({ length: 18 }, (_, i) => ({
  id: `h${i}-${(i * 5.5 + 3).toFixed(1)}`,
  heart: HEARTS[i % HEARTS.length],
  left: `${(i * 5.5 + 3) % 97}%`,
  duration: `${6 + (i % 6) * 1.5}s`,
  delay: `${(i * 0.9) % 8}s`,
  size: `${0.8 + (i % 4) * 0.35}rem`,
}));

function FloatingHearts() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {HEART_ITEMS.map((item) => (
        <span
          key={item.id}
          className="floating-heart"
          style={{
            left: item.left,
            bottom: "-10%",
            fontSize: item.size,
            animationDuration: item.duration,
            animationDelay: item.delay,
          }}
        >
          {item.heart}
        </span>
      ))}
    </div>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const letterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        }
      },
      { threshold: 0.12 },
    );
    const els = letterRef.current?.querySelectorAll(".fade-in");
    if (els) {
      for (const el of Array.from(els)) {
        observer.observe(el);
      }
    }
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-background text-foreground">
      {/* ── HERO SECTION ── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/romantic-bg.dim_1600x900.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />

        <FloatingHearts />

        <div className="relative z-10 flex flex-col items-center gap-6 px-4">
          <div className="polaroid w-72 sm:w-80" data-ocid="hero.card">
            <div
              className="w-full aspect-square bg-gradient-to-br from-rose-100 to-amber-50 flex flex-col items-center justify-center gap-3 rounded-sm"
              style={{ minHeight: "280px" }}
            >
              <span style={{ fontSize: "3.5rem" }}>📷</span>
              <p
                className="text-center px-4"
                style={{
                  fontFamily: '"Lato", sans-serif',
                  color: "#6F625A",
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                }}
              >
                Add Your Photo Here
              </p>
            </div>
            <p
              className="text-center mt-3 italic"
              style={{
                fontFamily: '"Dancing Script", cursive',
                color: "#6F625A",
                fontSize: "1.1rem",
              }}
            >
              Us, always &amp; forever 💕
            </p>
          </div>

          <div className="text-center">
            <h1
              style={{
                fontFamily: '"Dancing Script", cursive',
                fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
                color: "#fff",
                textShadow: "0 2px 16px rgba(47,36,30,0.55)",
                lineHeight: 1.2,
              }}
            >
              You are my everything 💖
            </h1>
            <p
              className="mt-2 italic"
              style={{
                fontFamily: '"Playfair Display", serif',
                color: "rgba(255,255,255,0.88)",
                fontSize: "clamp(0.9rem, 2.2vw, 1.15rem)",
                textShadow: "0 1px 8px rgba(0,0,0,0.3)",
              }}
            >
              Scroll down for something special ↓
            </p>
          </div>
        </div>
      </section>

      {/* ── LOVE LETTER SECTION ── */}
      <section
        ref={letterRef}
        className="py-24 px-4"
        style={{ background: "oklch(0.97 0.012 78)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700">
            <p
              style={{
                fontFamily: '"Dancing Script", cursive',
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                color: "#2F241E",
                lineHeight: 1.3,
                marginBottom: "0.5rem",
              }}
            >
              My Dearest Love,
            </p>
            <div
              className="mx-auto mb-10"
              style={{
                width: "80px",
                height: "2px",
                background:
                  "linear-gradient(to right, transparent, #C7AB73, transparent)",
              }}
            />
          </div>

          <div
            className="fade-in opacity-0 translate-y-8 transition-all duration-700 delay-150 text-left leading-relaxed space-y-5"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(1.05rem, 2.1vw, 1.22rem)",
              color: "#3a2e26",
              maxWidth: "65ch",
              margin: "0 auto",
            }}
          >
            <p>
              There are moments in life that redefine everything you thought you
              knew — and then there is you. From the very first time I saw you,
              something shifted inside me, quietly and completely, like the
              world had finally decided to make sense. You walked in and every
              room became warmer, every ordinary day became something worth
              remembering.
            </p>
            <p>
              Your laugh — oh, your laugh. It is the most beautiful sound I have
              ever heard. It is unguarded and genuine and it lights up your
              entire face, and it lights up mine too. Whenever you laugh, I find
              myself smiling before I even know why, because your joy is
              contagious and your happiness is my happiness. I would spend every
              day of the rest of my life finding new ways to make you laugh.
            </p>
            <p>
              You are not just my partner — you are my best friend, my safe
              place, the person I want to tell everything to the moment
              something happens. You are the first person I think of when I wake
              up and the last thought I carry into sleep. Being with you feels
              like coming home, every single day, no matter where we are.
            </p>
            <p>
              You have a kind of strength that quietly amazes me. The way you
              care for the people around you, the way you pour love into
              everything you do, the way you see beauty in small things — it
              makes me want to be a better person. You inspire me without even
              trying. You make me want to be worthy of the love you so freely
              give.
            </p>
            <p>
              I think about how lucky I am — not in a passive way, but in a way
              that catches me off guard sometimes. I will be doing something
              completely ordinary, and it will hit me: <em>she chose me.</em>{" "}
              She is here, and she is real, and she is mine. And I get to hold
              your hand, and hear about your day, and be the person you come to.
              What a privilege. What an extraordinary, undeserved gift.
            </p>
            <p>
              This anniversary is not just a date on a calendar. It is a
              milestone of everything we have built together — every inside
              joke, every late-night conversation, every hard day we got through
              side by side, every quiet Sunday morning that felt perfect just
              because you were there. It is the beginning of everything that is
              still to come.
            </p>
            <p>
              I want to keep choosing you — in all the small moments and all the
              big ones. I want to keep growing with you, keep learning you, keep
              falling more in love with you the way I do every single day. You
              are my whole world wrapped up in one person, and I would not trade
              this — not for anything.
            </p>
            <p>
              Thank you for being exactly who you are. Thank you for loving me.
              Thank you for every moment we have shared and for every moment
              still ahead of us. I love you more than words can hold, more than
              I will ever be able to fully say — but I will spend a lifetime
              trying.
            </p>
          </div>

          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700 delay-300 mt-10">
            <p
              style={{
                fontFamily: '"Dancing Script", cursive',
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                color: "#2F241E",
              }}
            >
              Forever yours, ❤️
            </p>
          </div>

          <div
            className="fade-in opacity-0 translate-y-8 transition-all duration-700 delay-[400ms] mx-auto my-14"
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, #E2D6C6, transparent)",
            }}
          />

          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700 delay-500">
            <button
              type="button"
              data-ocid="home.primary_button"
              className="cta-btn inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-semibold tracking-wide shadow-lg"
              style={{
                background: "linear-gradient(135deg, #B07B6B, #c49080)",
                color: "#FAF7F2",
                fontFamily: '"Playfair Display", serif',
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => navigate({ to: "/anniversary" })}
            >
              Open Your Surprise 🐱💕
            </button>
          </div>
        </div>
      </section>

      <footer
        className="text-center py-6 text-sm"
        style={{ background: "oklch(0.93 0.014 72)", color: "#6F625A" }}
      >
        <p>
          © {new Date().getFullYear()}. Built with{" "}
          <span style={{ color: "#B07B6B" }}>♥</span> using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#B07B6B", textDecoration: "underline" }}
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </main>
  );
}
