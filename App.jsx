import { useState } from 'react';
import './App.css';

const story = [
  "We met in Roblox Brookhaven 🏡",
  "From digital chats to real feelings 💬❤️",
  "You became more than a friend...",
  "Dimpu, you're my whole world 💫",
  "This is me, asking you something special..."
];

export default function App() {
  const [step, setStep] = useState(0);
  const [showProposal, setShowProposal] = useState(false);

  const next = () => {
    if (step < story.length - 1) setStep(step + 1);
    else setShowProposal(true);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-pink-50 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
          <h1 className="text-3xl font-bold text-pink-600">Hi Dimpu 💖</h1>
          {!showProposal ? (
            <>
              <p className="text-lg text-gray-700">{story[step]}</p>
              <button onClick={next} className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-xl shadow">
                {step === story.length - 1 ? 'Reveal...' : 'Next'}
              </button>
            </>
          ) : (
            <div>
              <h2 className="text-2xl text-pink-500 font-semibold">Will you marry me again? 💍</h2>
              <div className="flex justify-center gap-4 mt-4">
                <button className="bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-xl">Yes!</button>
                <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-xl">Obviously Yes!</button>
              </div>
            </div>
          )}
        </div>
        <div className="bg-pink-100 rounded-2xl shadow-inner p-8 text-center flex flex-col justify-center">
          <p className="text-2xl text-pink-700 font-cursive mb-4">To the girl I met in a game,</p>
          <p className="text-xl text-pink-600">You've made every world feel like home 🌍💗</p>
        </div>
      </div>
    </div>
  );
}
