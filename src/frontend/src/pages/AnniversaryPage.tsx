import { useNavigate } from "@tanstack/react-router";

const CAT_EMOJIS = ["🐱", "💕", "🐾", "✨", "🌸", "💖", "😻", "🌷"];

type CatItem = {
  id: string;
  emoji: string;
  left: string;
  duration: string;
  delay: string;
  size: string;
};

const CAT_ITEMS: CatItem[] = Array.from({ length: 20 }, (_, i) => ({
  id: `cat-pos-${(i * 5 + 2) % 96}`,
  emoji: CAT_EMOJIS[i % CAT_EMOJIS.length],
  left: `${(i * 5 + 2) % 96}%`,
  duration: `${5 + (i % 6) * 1.4}s`,
  delay: `${(i * 0.7) % 9}s`,
  size: `${0.9 + (i % 4) * 0.3}rem`,
}));

function FloatingCatHearts() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
      aria-hidden="true"
    >
      {CAT_ITEMS.map((item) => (
        <span
          key={item.id}
          className="confetti-piece"
          style={{
            left: item.left,
            top: "-5%",
            fontSize: item.size,
            animationDuration: item.duration,
            animationDelay: item.delay,
          }}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
}

export default function AnniversaryPage() {
  const navigate = useNavigate();

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #fce4ec 0%, #f8bbd0 25%, #e1bee7 55%, #d1c4e9 100%)",
        fontFamily: '"Lato", sans-serif',
      }}
    >
      <FloatingCatHearts />

      <div className="relative z-10 flex flex-col items-center justify-start px-4 py-16 gap-10">
        <div className="text-center" data-ocid="anniversary.section">
          <p
            className="shimmer-text font-bold tracking-wide"
            style={{
              fontFamily: '"Dancing Script", cursive',
              fontSize: "clamp(2.6rem, 8vw, 5.5rem)",
              lineHeight: 1.15,
            }}
          >
            Happy Anniversary!
          </p>
          <div className="mt-1">
            <span className="paw-pulse text-4xl">🐾</span>
          </div>
        </div>

        <div className="text-center">
          <img
            src="/assets/generated/cat-couple-transparent.dim_600x400.png"
            alt="Us as cats — a couple illustration"
            className="mx-auto drop-shadow-xl"
            style={{ maxWidth: "min(500px, 90vw)", height: "auto" }}
          />
        </div>

        <div
          className="max-w-2xl mx-auto text-center"
          style={{
            fontFamily: '"Playfair Display", serif',
            color: "#3a2534",
          }}
        >
          <h2
            style={{
              fontFamily: '"Dancing Script", cursive',
              fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
              color: "#7b3f6e",
              marginBottom: "1.2rem",
            }}
          >
            You are my purrfect person 🐱💕
          </h2>
          <div
            className="space-y-4 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "#4a2e4a" }}
          >
            <p>
              On this paw-some day, I want you to know — I am completely,
              hopelessly, fur-ever yours. From the moment you wandered into my
              life, I knew I was totally claw-ver to have found someone as
              amazing as you. You make every day feel like a warm sunbeam to nap
              in.
            </p>
            <p>
              Life with you is the purr-fect adventure. You are my favourite
              human, my cozy corner, my reason to knead with joy. No matter how
              many tails — I mean <em>tales</em> — we collect on this journey, I
              know that every single one of them will be better because you are
              in it.
            </p>
            <p>
              You had me at &quot;meow&quot; 😻 — and I plan to keep falling for
              you, whisker by whisker, day by day. Thank you for being my home.
              Thank you for being you.
            </p>
            <p
              style={{
                fontFamily: '"Dancing Script", cursive',
                fontSize: "clamp(1.3rem, 3vw, 1.9rem)",
                color: "#7b3f6e",
              }}
            >
              Here&apos;s to us, now and fur-ever after 🌸🐾
            </p>
          </div>
        </div>

        <div className="cat-float">
          <img
            src="/assets/generated/cat-love-transparent.dim_400x400.png"
            alt="A cute cat holding a heart"
            className="mx-auto drop-shadow-lg"
            style={{ maxWidth: "min(260px, 70vw)", height: "auto" }}
          />
        </div>

        <div
          className="text-center text-3xl tracking-widest select-none"
          aria-hidden="true"
        >
          🌸 🐾 💕 😻 🌷 💖 🐱 ✨
        </div>

        <button
          type="button"
          data-ocid="anniversary.secondary_button"
          className="cta-btn inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold shadow-lg"
          style={{
            background: "linear-gradient(135deg, #9c5e8c, #b07ac4)",
            color: "#fff",
            fontFamily: '"Playfair Display", serif',
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => navigate({ to: "/" })}
        >
          Back to the beginning 💕
        </button>

        <footer
          className="text-center text-sm mt-4"
          style={{ color: "#7b5a7e" }}
        >
          <p>
            © {new Date().getFullYear()}. Built with{" "}
            <span style={{ color: "#b07b6b" }}>♥</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#9c5e8c", textDecoration: "underline" }}
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
