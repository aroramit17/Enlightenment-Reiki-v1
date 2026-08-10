import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enlightenment Reiki | Traditional Reiki with Sally Littleton",
  description:
    "Explore traditional Japanese Reiki therapy, training, and certification with Sally Littleton, PhD and Reiki Shihan.",
};

const offerings = [
  {
    number: "01",
    title: "Experience Reiki",
    subtitle: "Private Reiki sessions",
    copy: "A quiet, supportive space to receive Reiki in person or at a distance, reconnect with yourself, and notice what your own experience has to offer.",
    link: "#sessions",
  },
  {
    number: "02",
    title: "Learn Reiki",
    subtitle: "Training and courses",
    copy: "Begin a personal practice through patient, step-by-step teaching that leaves room for questions, experience, and gradual integration.",
    link: "#journey",
  },
  {
    number: "03",
    title: "Deepen Your Practice",
    subtitle: "Certification pathway",
    copy: "Continue from foundational practice through practitioner and teacher-level study in traditional Japanese Reiki lineages.",
    link: "#journey",
  },
];

const levels = [
  {
    step: "I",
    japanese: "Shoden",
    title: "Begin",
    copy: "Build a foundation in Reiki principles, meditation, and hands-on practice for yourself and others.",
  },
  {
    step: "II",
    japanese: "Okuden",
    title: "Deepen",
    copy: "Explore symbols, kotodama, distance practice, and a more intuitive relationship with Reiki.",
  },
  {
    step: "III",
    japanese: "Shinpiden",
    title: "Embody",
    copy: "Move beyond technique and allow Reiki to become a more integrated part of how you live and practice.",
  },
  {
    step: "IV",
    japanese: "Gokuikaiden",
    title: "Teach",
    copy: "Prepare to share the practice with others through advanced study, reiju, and teacher-level development.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Enlightenment Reiki home">
          <span className="brand-mark" aria-hidden="true">光</span>
          <span>
            <strong>Enlightenment</strong>
            <small>Reiki</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#about">About Sally</a>
          <a href="#sessions">Reiki Therapy</a>
          <a href="#journey">Training</a>
          <a href="#tapping">Reiki Tapping</a>
        </div>
        <a className="nav-cta" href="https://enlightenmentreiki.com/contact/">
          Contact Sally <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Traditional Japanese Reiki · Traverse City &amp; Online</p>
          <h1>A lifetime of Reiki.<br />A practice you can <em>make your own.</em></h1>
          <p className="hero-lede">
            Learn traditional Japanese Reiki with Sally Littleton, PhD, a Reiki Shihan whose work with energy practices spans more than five decades.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#journey">Explore Reiki training <span aria-hidden="true">→</span></a>
            <a className="text-link" href="#about">Meet Sally <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-trust" aria-label="Sally's experience">
            <div><strong>50+</strong><span>years exploring<br />energy work</span></div>
            <i />
            <div><strong>30</strong><span>years as a Reiki<br />Master Teacher</span></div>
            <i />
            <div><strong>2</strong><span>traditional Japanese<br />teaching lineages</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            <img
              src="/sally-littleton.jpg"
              alt="Sally Littleton, Reiki Shihan and founder of Enlightenment Reiki"
            />
          </div>
          <div className="portrait-note">
            <span className="note-symbol">光</span>
            <p><strong>Sally Littleton, PhD</strong><br />Reiki Shihan · Teacher · Mentor</p>
          </div>
          <p className="vertical-note">PRACTICE · EXPERIENCE · INTEGRATE</p>
        </div>
      </section>

      <section className="offerings" id="sessions">
        <div className="section-intro">
          <p className="eyebrow"><span /> Find your way into Reiki</p>
          <h2>Begin where you are.</h2>
          <p>You do not have to know exactly where the path will lead. Choose the experience that feels right for you now.</p>
        </div>
        <div className="offering-grid">
          {offerings.map((item) => (
            <a className="offering-card" href={item.link} key={item.number}>
              <span className="card-number">{item.number}</span>
              <div className="card-rule" />
              <p className="card-subtitle">{item.subtitle}</p>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <span className="card-link">Explore this path <b aria-hidden="true">↗</b></span>
            </a>
          ))}
        </div>
      </section>

      <section className="philosophy">
        <div className="philosophy-mark" aria-hidden="true">
          <span>霊</span><span>気</span>
        </div>
        <div className="philosophy-copy">
          <p className="eyebrow light"><span /> A gentler way to learn</p>
          <blockquote>
            “There is no reason to rush. Reiki becomes more meaningful when you give yourself time to practice, integrate what you are learning, and discover how the work resonates with you.”
          </blockquote>
          <div className="practice-rhythm" aria-label="Sally's teaching rhythm">
            <span>Learn</span><i>→</i><span>Practice</span><i>→</i><span>Experience</span><i>→</i><span>Integrate</span>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-art" aria-hidden="true">
          <div className="sun-ring"><span>光</span></div>
          <p>THE GREAT BRIGHT LIGHT</p>
        </div>
        <div className="about-copy">
          <p className="eyebrow"><span /> Meet your teacher</p>
          <h2>Experience carried with humility.</h2>
          <p className="about-lede">
            Sally Littleton is a former PhD psychotherapist, Reiki Shihan, and lifelong student of energy practices. She began exploring energy work in the 1970s and found Reiki in the early 1990s while seeking support for her own health and spiritual growth.
          </p>
          <p>
            Over the decades, Sally has studied one-on-one with respected teachers across several traditions. Today, she teaches from both Gendai Reiki Ho and Usui Reiki Ryoho lineages, combining deep knowledge with a warm, exploratory approach.
          </p>
          <p>
            She will share what she has learned, while always leaving room for you to notice what Reiki feels like in your own life.
          </p>
          <a className="text-link dark" href="https://enlightenmentreiki.com/about-me/">Read Sally’s story <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="journey" id="journey">
        <div className="journey-heading">
          <p className="eyebrow"><span /> Your Reiki journey</p>
          <h2>Learn gradually.<br /><em>Grow naturally.</em></h2>
          <p>Each level builds upon the last, giving you time to practice, ask questions, and let the teachings become familiar.</p>
        </div>
        <div className="level-list">
          {levels.map((level) => (
            <article className="level" key={level.step}>
              <span className="level-step">{level.step}</span>
              <div>
                <p>{level.japanese}</p>
                <h3>{level.title}</h3>
              </div>
              <p>{level.copy}</p>
              <span className="level-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="tapping" id="tapping">
        <div className="tapping-copy">
          <p className="eyebrow light"><span /> Reiki + EFT</p>
          <h2>When energy work meets practical support.</h2>
          <p>
            Sally’s work with Reiki Tapping brings together her background in psychotherapy, Emotional Freedom Technique, and decades of energy practice. Sessions offer a grounded way to explore stress, emotional patterns, and a greater sense of balance.
          </p>
          <p className="disclaimer">Reiki and EFT are complementary practices and do not replace medical care or psychotherapy.</p>
          <a className="button button-light" href="https://enlightenmentreiki.com/energy-medicine/">Explore Reiki Tapping <span aria-hidden="true">→</span></a>
        </div>
        <div className="tapping-visual" aria-hidden="true">
          <div className="ripple r1" /><div className="ripple r2" /><div className="ripple r3" />
          <span>心</span>
        </div>
      </section>

      <section className="closing" id="contact">
        <p className="eyebrow centered"><span /> Your next step</p>
        <h2>You do not have to understand<br />all of it <em>immediately.</em></h2>
        <p>Begin with a conversation. Sally can help you decide whether a private session, Reiki training, or another path is the right place to start.</p>
        <a className="button button-primary" href="https://enlightenmentreiki.com/contact/">Start a conversation with Sally <span aria-hidden="true">→</span></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true">光</span>
          <span><strong>Enlightenment</strong><small>Reiki</small></span>
        </a>
        <p>Traditional Reiki therapy, training, and certification<br />Traverse City, Michigan · Online</p>
        <div className="footer-links">
          <a href="#about">About</a><a href="#sessions">Therapy</a><a href="#journey">Training</a><a href="https://enlightenmentreiki.com/contact/">Contact</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Enlightenment Reiki</p>
      </footer>
    </main>
  );
}
