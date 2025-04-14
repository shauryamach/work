import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [step, setStep] = useState(0);
  const [typedText, setTypedText] = useState("");
  const entry = storyData[step - 1];

useEffect(() => {
  if (step > 0 && entry) {
    let index = 0;
    const text = entry.text; // ✅ safer to store in a constant
    setTypedText(""); // Clear the typed text when moving to the next step
    const interval = setInterval(() => {
      if (index < text.length) {
        setTypedText((prev) => prev + text.charAt(index)); // ✅ use charAt for safety
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval); // Cleanup the interval
  }
}, [step]);


  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const renderStartPage = () => (
    <div style={styles.startContainer}>
      <h1 style={styles.bigHeader}>Dear Cutieee Singh </h1>
      <p style={styles.subText}>Do you want to see something?</p>
      <div style={styles.buttonRow}>
        <button style={styles.button} onClick={nextStep}>
          Yes 😇
        </button>
        <button style={styles.button} onClick={nextStep}>
          Absolutely Yes 😍
        </button>
      </div>
    </div>
  );

  const renderStoryStep = () => (
    <div
      style={styles.storyPage}
      onClick={(e) => {
        const heart = document.createElement("div");
        heart.textContent = "❤️";
        heart.style.position = "absolute";
        heart.style.left = `${e.clientX}px`;
        heart.style.top = `${e.clientY}px`;
        heart.style.fontSize = "24px";
        heart.style.pointerEvents = "none";
        heart.style.animation = "popHeart 1s ease-out forwards";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
      }}
    >
      {step <= storyData.length ? (
        <>
          <h2 style={styles.title}>{entry.title}</h2>
          <p style={styles.text}>{typedText}</p>
        </>
      ) : (
        <>
          <h2 style={styles.title}>💡 One More Thing...</h2>
          <p style={styles.text}>
  Maybe this is just the beginning of something unexpectedly beautiful. Maybe the universe brought us together for a reason — in stories, reels, late-night calls, and stolen moments in traffic. I don’t know what the future holds, but I do know that thinking about you makes my heart feel a little lighter, and my days a little brighter. Thank you for just being... you. 🌸💖
</p>

          <div style={styles.endNote}>
            feel free to reply it! 💖
            <button
              style={styles.replayButton}
              onClick={() => setStep(0)} // Replay the whole story again
            >
            daba dijeye isko 💌
            </button>
          </div>
        </>
        
      )}
      {step < storyData.length && (
        <button style={styles.nextButton} onClick={nextStep}>
          Next 💌
        </button>
      )}
      {step === storyData.length && (
        <div>
          <button style={styles.nextButton} onClick={nextStep}>
            Do you want to know one more thing? 💭
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes popHeart {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(2);
              opacity: 0;
              top: -50px;
            }
          }

          @keyframes bgPulse {
            0% { background-color: #fff0f5; }
            50% { background-color: #ffe4ec; }
            100% { background-color: #fff0f5; }
          }

          body {
            animation: bgPulse 10s infinite;
          }

          @media (max-width: 600px) {
            .container {
              padding: 15px;
            }

            .bigHeader {
              font-size: 2rem;
            }

            .subText {
              font-size: 1rem;
            }

            .button {
              font-size: 0.9rem;
              padding: 8px 15px;
            }

            .storyPage {
              width: 90%;
              padding: 15px;
            }

            .title {
              font-size: 1.5rem;
            }

            .text {
              font-size: 1rem;
            }

            .nextButton {
              font-size: 0.9rem;
            }

            .replayButton {
              font-size: 1rem;
              padding: 8px 20px;
              border-radius: 20px;
            }
          }
        `}
      </style>
      {step === 0 ? renderStartPage() : renderStoryStep()}
    </div>
  );
};

export default App;

const storyData = [
  {
    title: "✨ Where It All Began ✨",
    text:
      "  It all started on Snapchat 👻 — where you asked me to stalk you on Insta 📸 (how bold of you 😄). I saw you dancing, smiling, radiating joy in your reels 💃, and I was instantly charmed. That jolly nature pulled me in. Soon, we moved to WhatsApp, and the real connection began 💬.",
  },
  {
    title: "📞 Calls That Never End",
    text:
      "  From casual chats to hours of non-stop talking — our calls turned into deep conversations, endless laughter, and midnight confessions 🌙. Your voice? My favorite comfort sound 💕. Time just flew when we talked.",
  },
  {
    title: "🌹 That First Magical Meet",
    text:
      "  You picked me up in your car like the boss girl you are 🚗. I brought flowers 💐 (had to impress, right?). We had the dreamiest basil pesto pasta 🍝 and some delicious shakes 🥤 at the cutest café. And the way you dropped me home — like a true sweetheart 😚.",
  },
  {
    title: "🛵 Scooty Diaries, Day Two",
    text:
      "  As if one magical day wasn’t enough, you came again the very next day — this time on your scooty 🛵. Picked me up, dropped me to the bus stop 🚌, and on the way… a surprise visit from the traffic police 🚨. Felt like we were in a movie scene 🎬.",
  },
  {
    title: "💬 The Vibe Continues...",
    text:
      "  Since then, it's been calls that feel like home, chats that never end, jokes, giggles, and sharing pieces of our little worlds 💞. I don’t know where this story is heading, but it already feels like something beautiful is unfolding 💫.",
  },
];


const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#fff0f5",
    minHeight: "100vh",
    padding: "30px 20px",
    color: "#4b2e83",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    overflow: "hidden",
  },
  startContainer: {
    textAlign: "center",
    maxWidth: "500px",
  },
  bigHeader: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  subText: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "#ffb6c1",
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    transition: "0.3s",
  },
  storyPage: {
    maxWidth: "600px",
    backgroundColor: "#ffe4ec",
    padding: "20px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "15px",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "20px",
    whiteSpace: "pre-line",
  },
  nextButton: {
    padding: "10px 25px",
    backgroundColor: "#ff69b4",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  replayButton: {
    padding: "10px 25px",
    backgroundColor: "#ff69b4",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "15px",
  },
  endNote: {
    fontSize: "1.2rem",
    marginTop: "20px",
    fontStyle: "italic",
    color: "#c2185b",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
