import React, { useState } from 'react';
import './Valentine.css';

const HeartIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const SparklesIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M12 1l3.5 7 7 1-5 5 1 7-6.5-3.5L5.5 21l1-7-5-5 7-1z"/>
  </svg>
);

function ValentineProposal() {
  const [currentStep, setCurrentStep] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [showHearts, setShowHearts] = useState(false);

  const funFacts = [
    "Did you know? My heart beats faster every time I see you 💓",
    "Fun fact: You're the reason I smile at my phone like an idiot 😊",
    "Scientific fact: Being with you increases my happiness by 1000% 📈",
    "True story: I think about you approximately 24/7 🌙",
    "Proven theory: You + Me = Perfect Chemistry ✨",
    "Real talk: You make even boring days feel like an adventure 🌟",
    "Did you know? I save all our silly conversations and read them when I miss you 📱",
    "Fun fact: Your laugh is my favorite sound in the whole world 🎵",
    "Studies show: You're 100% the best thing that ever happened to me 🔬",
    "Breaking news: I'm completely obsessed with you (in a cute way) 📰"
  ];

  const questions = [
    "Will you be my Valentine? 💝",
    "Will you share your snacks with me? 🍟",
    "Will you let me steal your hoodies? 👕",
    "Will you watch my favorite shows with me? 📺",
    "Will you allow me to touch your boobies? 💝",
    "Will you let me have the last slice of pizza? 🍕",
    "Will you hold my hand in public? 🤝",
    "Will you send me good morning texts? ☀️",
    "Will you dance with me in the kitchen? 💃",
    "So... will you officially be my Valentine? 💕"
  ];

  const moveNoButton = () => {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 200;
    setNoButtonPosition({
      x: Math.random() * maxX,
      y: Math.random() * maxY
    });
    setYesButtonSize(prev => Math.min(prev + 0.2, 3));
  };

  const handleYes = () => {
    setShowHearts(true);
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
        setShowHearts(false);
        setYesButtonSize(1);
        setNoButtonPosition({ x: 0, y: 0 });
      } else {
        setCurrentStep(currentStep + 1);
      }
    }, 2000);
  };

  const FloatingHeart = ({ delay }) => (
    <div 
      className="floating-heart"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${3 + Math.random() * 2}s`
      }}
    >
      ❤️
    </div>
  );

  // Celebration Screen
  if (currentStep >= questions.length) {
    return (
      <div className="valentine-container celebration-bg">
        {[...Array(50)].map((_, i) => (
          <FloatingHeart key={i} delay={i * 0.1} />
        ))}
        
        {/* Confetti */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`confetti-${i}`}
            className="confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            {['🎊', '🎉', '⭐', '💫', '✨', '🌟'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
        
        <div className="celebration-content">
          <h1 className="celebration-title">
            YAAAY! 🎉
          </h1>
          <div className="celebration-card">
            <div className="celebration-heart-container">
              <HeartIcon size={100} className="celebration-heart" />
            </div>
            <p className="celebration-message">
              You're My Valentine! 💕
            </p>
            <p className="celebration-subtitle">
              I can't wait to spend this special day with you!
            </p>
            <div className="celebration-quote">
              <p>
                "And yes, you can have all my snacks, hoodies, and pizza! 🍕👕🍟"
              </p>
            </div>
            <div className="celebration-emojis">
              {['✨', '💝', '🌹', '💕', '🎀', '💖'].map((emoji, idx) => (
                <span 
                  key={idx} 
                  className="emoji-bounce"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>
            <div className="celebration-couple">
              💑
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Question Screen
  return (
    <div className="valentine-container">
      {[...Array(20)].map((_, i) => (
        <FloatingHeart key={i} delay={i * 0.5} />
      ))}

      <div className="main-content">
        {/* Progress Bar */}
        <div className="progress-container">
          {questions.map((_, idx) => (
            <div 
              key={idx}
              className={`progress-bar ${idx <= currentStep ? 'progress-active' : 'progress-inactive'}`}
            />
          ))}
        </div>

        {/* Main Card */}
        <div className="card">
          {/* Sparkle Decorations */}
          <div className="sparkle sparkle-top-right">✨</div>
          <div className="sparkle sparkle-top-left">💫</div>
          <div className="sparkle sparkle-bottom-right">⭐</div>
          <div className="sparkle sparkle-bottom-left">✨</div>
          
          {/* Fun Fact Section */}
          <div className="fact-box">
            <SparklesIcon size={40} className="fact-icon" />
            <div className="fact-content">
              <p className="fact-text">
                {funFacts[currentStep]}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="divider">
            <div className="divider-line"></div>
            <HeartIcon size={24} className="divider-heart" />
            <div className="divider-line"></div>
          </div>

          {/* Question */}
          <h2 className="question">
            {questions[currentStep]}
          </h2>

          {/* Buttons */}
          <div className="buttons-container">
            {showHearts && (
              <div className="hearts-explosion">
                {[...Array(30)].map((_, i) => (
                  <FloatingHeart key={i} delay={i * 0.05} />
                ))}
              </div>
            )}
            
            {/* Yes Button */}
            <button
              onClick={handleYes}
              className="yes-button"
              style={{ transform: `scale(${yesButtonSize})` }}
            >
              <span className="button-content">
                Yes! 💕
                <HeartIcon size={24} className="button-heart" />
              </span>
            </button>

            {/* No Button */}
            <button
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              className="no-button"
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`
              }}
            >
              No 😢
            </button>
          </div>

          {/* Hint Text */}
          <div className="hint-box">
            <div className="hint-content">
              <span className="hint-emoji">💡</span>
              <p className="hint-text">
                Psst... The "No" button is playing hard to get!
              </p>
              <span className="hint-emoji">😉</span>
            </div>
          </div>
        </div>

        {/* Bottom Emojis */}
        <div className="bottom-emojis">
          {['💖', '🌹', '💖', '🌹', '💖'].map((emoji, idx) => (
            <span 
              key={idx} 
              className="emoji-bounce"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ValentineProposal;