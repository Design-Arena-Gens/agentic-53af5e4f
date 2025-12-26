const beats = [
  {
    title: 'Morning Mayhem',
    description:
      'Spud the porcupine invents a “Popcorn Pillow” that pops every time he sneezes. Chaos erupts as fluffy kernels bounce across the burrow.'
  },
  {
    title: 'Elevator Surprise',
    description:
      'The gang takes a leaf-powered elevator that only speaks in knock-knock jokes. They must finish the punchline bevor they reach each floor.'
  },
  {
    title: 'Gadget Gone Wild',
    description:
      'Pippa accidentally supercharges a bubble wand, filling the town square with zero-gravity bubbles and floating llamas in top hats.'
  },
  {
    title: 'Dance-Off Finale',
    description:
      'The llamas challenge the heroes to a dance battle. The fate of the popcorn supply rests on who can floss while juggling marshmallows.'
  }
];

const dialogue = [
  {
    character: 'Spud',
    line: "Note to self: never sneeze near experimental snacks. Unless it's hilarious, then keep sneezing!"
  },
  {
    character: 'Pippa',
    line: 'Good news! My bubble wand now doubles as a llama lifter. Bad news… the llamas have Wi-Fi.'
  },
  {
    character: 'Lana the Llama',
    line: 'We only duel in interpretive dance. Prepare your jazz hooves!'
  },
  {
    character: 'Narrator',
    line: 'And so, with popcorn raining from the ceiling, our heroes realized that friendship is the best insurance policy for accidental llama levitation.'
  }
];

const taglines = [
  'Because every cartoon deserves a bubble-powered backup plan.',
  'Warning: Contains contagious giggles and airborne snacks.',
  'Perfect for animated shorts, classroom skits, or impromptu puppet shows.'
];

export default function HomePage() {
  return (
    <main>
      <span className="badge">
        <SparkleIcon /> Laugh Track Locked &amp; Loaded
      </span>
      <h1>Cartoon Script: &quot;Popcorn Panic!&quot;</h1>
      <p>
        Join Spud the inventive porcupine, Pippa the gadget guru, and Lana the top-hatted llama in a fizzy, fast-paced short where every sneeze rewrites the rules of gravity.
      </p>

      <section className="section-card">
        <div className="section-content">
          <h2>The Cast</h2>
          <div className="grid">
            <div className="panel">
              <h3>Spud the Porcupine</h3>
              <p>
                Quills full of curiosity. Accident-prone inventor whose allergies usually trigger the plot twist.
              </p>
            </div>
            <div className="panel">
              <h3>Pippa the Squirrel</h3>
              <p>
                Hyper-focused tinkerer with a backpack of improbable gadgets and zero patience for boring Mondays.
              </p>
            </div>
            <div className="panel">
              <h3>Lana the Llama</h3>
              <p>
                Floating fashionista. Speaks in rhymes whenever jazz music plays within a five-mile radius.
              </p>
            </div>
            <div className="panel">
              <h3>The Narrator</h3>
              <p>
                Sarcastic and supportive, breaking the fourth wall to remind viewers that safety goggles are cute.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="section-content">
          <h2>Episode Beats</h2>
          <ul className="beat-list">
            {beats.map((beat, index) => (
              <li key={beat.title} className="beat">
                <span className="beat-icon">{index + 1}</span>
                <div>
                  <h3>{beat.title}</h3>
                  <p>{beat.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-card">
        <div className="section-content">
          <h2>Sample Dialogue</h2>
          <div className="dialogue">
            {dialogue.map((line) => (
              <div key={line.character} className="dialogue-line">
                <span className="character">{line.character}</span>
                <span>{line.line}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="section-content">
          <h2>Taglines &amp; Uses</h2>
          <div className="grid">
            {taglines.map((line) => (
              <div key={line} className="panel">
                <p className="alternative">{line}</p>
              </div>
            ))}
          </div>
          <a href="#" className="cta">
            <SparkleIcon /> Download Script PDF
          </a>
        </div>
      </section>

      <footer>© {new Date().getFullYear()} Popcorn Panic Writers Room. Bring snacks.</footer>
    </main>
  );
}

function SparkleIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L13.6 8.4L20 10L13.6 11.6L12 18L10.4 11.6L4 10L10.4 8.4L12 2Z"
        fill="#ed6fad"
      />
      <path
        d="M5 14L5.8 16.8L8.5 17.5L5.8 18.2L5 21L4.2 18.2L1.5 17.5L4.2 16.8L5 14Z"
        fill="#ffd76f"
      />
      <path
        d="M19 14L19.6 16.2L22 16.8L19.6 17.4L19 19.5L18.4 17.4L16 16.8L18.4 16.2L19 14Z"
        fill="#a653c6"
      />
    </svg>
  );
}
