"use client";
import React, { useState, useEffect } from 'react';
import { Download, Play, MessageCircle, Facebook, Send, X, Sparkles, Star, Zap, Crown, Gem, Award, Trophy, Target, Dice1, Gift, Diamond } from 'lucide-react';

const CasinoApp = () => {
  const [showContact, setShowContact] = useState(false);
  const [showAgentPopup, setShowAgentPopup] = useState(false);
  const [selectedGame, setSelectedGame] = useState('');
  const [sparkles, setSparkles] = useState([{ id: 1, x: 10, y: 20, size: 5, delay: 1 },
  ]);

  // Casino games data
  const games = [
    {
      id: 1,
      name: "Orion Stars",
      description: "Experience the cosmos of winning with stellar jackpots and cosmic rewards",
      downloadUrl: "http://www.orions.cc/download",
      icon: Star,
      gradient: "from-purple-400 to-pink-400"
    },
    {
      id: 2,
      name: "Vegas Sweep",
      description: "Sweep your way to Vegas-style wins with premium slot experiences",
      downloadUrl: "https://m.lasvegassweeps.com/",
      icon: Sparkles,
      gradient: "from-red-400 to-orange-400"
    },
    {
      id: 3,
      name: "Milkyway",
      description: "Journey through the galaxy of fortune with astronomical payouts",
      downloadUrl: "https://milkywayapp.xyz/",
      icon: Zap,
      gradient: "from-blue-400 to-purple-400"
    },
    {
      id: 4,
      name: "GameVault",
      description: "Unlock the vault of endless gaming possibilities and treasures",
      downloadUrl: "https://download.gamevault999.com/",
      icon: Crown,
      gradient: "from-yellow-400 to-orange-400"
    },
    {
      id: 5,
      name: "Juwa",
      description: "Dive into premium gaming with exceptional rewards and bonuses",
      downloadUrl: "http://dl.juwa777.com",
      icon: Gem,
      gradient: "from-green-400 to-blue-400"
    },
    {
      id: 6,
      name: "Fire Kirin",
      description: "Ignite your winning streak with blazing jackpots and fire rewards",
      downloadUrl: "http://firekirin.xyz:8580/index.html",
      icon: Award,
      gradient: "from-red-500 to-yellow-400"
    },
    {
      id: 7,
      name: "Mafia",
      description: "Enter the underground world of high-stakes gaming and big wins",
      downloadUrl: "http://www.mafia77777.com",
      icon: Trophy,
      gradient: "from-gray-400 to-red-400"
    },
    {
      id: 8,
      name: "Vblink",
      description: "Blink and you might miss these incredible winning opportunities",
      downloadUrl: "https://www.vblink777.club/",
      icon: Target,
      gradient: "from-pink-400 to-purple-400"
    },
    {
      id: 9,
      name: "Gameroom",
      description: "Step into the ultimate gameroom experience with premium entertainment",
      downloadUrl: "https://www.gameroom777.com/m",
      icon: Dice1,
      gradient: "from-indigo-400 to-pink-400"
    },
    {
      id: 10,
      name: "Panda Master",
      description: "Master the art of winning with this adorable yet powerful gaming platform",
      downloadUrl: "https://pandamaster.vip:8888/",
      icon: Gift,
      gradient: "from-green-400 to-teal-400"
    },
    {
      id: 11,
      name: "Cash Machine",
      description: "Turn the machine and watch the cash flow with every spin and play",
      downloadUrl: "https://www.cashmachine777.com/",
      icon: Diamond,
      gradient: "from-yellow-400 to-green-400"
    }
  ];

  // Generate random sparkles
  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 2
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDownload = (gameName, url) => {
    // Only open download link, no popup
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handlePlay = (gameName) => {
    setSelectedGame(gameName);
    setShowAgentPopup(true);
  };

  const ContactPopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 max-w-md w-full border border-white border-opacity-20 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-yellow-400" />
            Contact Our Agents
          </h3>
          <button
            onClick={() => setShowContact(false)}
            className="text-white hover:text-yellow-400 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          <a
            href="https://wa.me/15753595056"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-green-500 bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 hover:bg-opacity-30 transition-all duration-300 border border-green-400 border-opacity-30"
          >
            <MessageCircle className="w-8 h-8 text-green-400" />
            <div>
              <div className="text-white font-semibold">WhatsApp Business</div>
              <div className="text-green-300 text-sm">+1 575 359 5056</div>
            </div>
          </a>

          <a
            href="https://www.facebook.com/epicwinnersx1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-blue-500 bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 hover:bg-opacity-30 transition-all duration-300 border border-blue-400 border-opacity-30"
          >
            <Facebook className="w-8 h-8 text-blue-400" />
            <div>
              <div className="text-white font-semibold">Facebook Page</div>
              <div className="text-blue-300 text-sm">epicwinnersx</div>
            </div>
          </a>

          <a
            href="https://t.me/Juwa999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-sky-500 bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 hover:bg-opacity-30 transition-all duration-300 border border-sky-400 border-opacity-30"
          >
            <Send className="w-8 h-8 text-sky-400" />
            <div>
              <div className="text-white font-semibold">Telegram Channel</div>
              <div className="text-sky-300 text-sm">countrygaming</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );

  const AgentPopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 max-w-md w-full border border-white border-opacity-20 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <Crown className="w-6 h-6 text-yellow-400" />
            Connect with Agent
          </h3>
          <button
            onClick={() => setShowAgentPopup(false)}
            className="text-white hover:text-yellow-400 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center mb-6">
          <p className="text-white text-lg mb-2">Ready to play <span className="text-yellow-400 font-bold">{selectedGame}</span>?</p>
          <p className="text-gray-300">Connect with our premium gaming agents for exclusive access and bonuses!</p>
        </div>

        <div className="space-y-4">
          <a
            href="https://wa.me/15753595056"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-500 bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 hover:bg-opacity-30 transition-all duration-300 border border-green-400 border-opacity-30 w-full"
          >
            <MessageCircle className="w-6 h-6 text-green-400" />
            <span className="text-white font-semibold">WhatsApp Agent</span>
          </a>

          <a
            href="https://www.facebook.com/epicwinnersx1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-blue-500 bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 hover:bg-opacity-30 transition-all duration-300 border border-blue-400 border-opacity-30 w-full"
          >
            <Facebook className="w-6 h-6 text-blue-400" />
            <span className="text-white font-semibold">Facebook Agent</span>
          </a>

          <a
            href="https://t.me/countrygaming"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-sky-500 bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 hover:bg-opacity-30 transition-all duration-300 border border-sky-400 border-opacity-30 w-full"
          >
            <Send className="w-6 h-6 text-sky-400" />
            <span className="text-white font-semibold">Telegram Agent</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,215,0,0.05)_25%,rgba(255,215,0,0.05)_50%,transparent_50%,transparent_75%,rgba(255,215,0,0.05)_75%)] bg-[length:20px_20px]"></div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Casino Chips */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-16 h-16 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-full shadow-2xl animate-float opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            <div className="w-full h-full rounded-full border-4 border-white border-opacity-40 flex items-center justify-center text-white font-bold text-lg shadow-inner">
              💰
            </div>
          </div>
        ))}

        {/* Sparkles */}
        {sparkles.map(sparkle => (
          <div
            key={sparkle.id}
            className="absolute animate-ping"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              animationDelay: `${sparkle.delay}s`
            }}
          >
            <Sparkles
              className="text-yellow-400 opacity-60"
              size={sparkle.size}
            />
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent mb-6 tracking-tight leading-tight drop-shadow-2xl">
              PREMIUM SLOTS
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-8 rounded-full shadow-lg"></div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-wide">
              🎰 CERTIFIED GAMING EXCELLENCE 🎰
            </h2>

            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-yellow-400 border-opacity-30 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-3">🏆</div>
                  <h3 className="text-yellow-300 font-bold text-lg mb-2">LICENSED & SECURE</h3>
                  <p className="text-gray-200 text-sm">Fully regulated gaming with bank-level security</p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-3">💎</div>
                  <h3 className="text-yellow-300 font-bold text-lg mb-2">PREMIUM REWARDS</h3>
                  <p className="text-gray-200 text-sm">Exclusive bonuses and VIP treatment guaranteed</p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="text-yellow-300 font-bold text-lg mb-2">INSTANT PAYOUTS</h3>
                  <p className="text-gray-200 text-sm">Lightning-fast withdrawals, no delays</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-xl md:text-2xl text-gray-100 font-medium mb-4">
                Join <span className="text-yellow-400 font-bold">50,000+</span> Premium Players Worldwide
              </p>
              <div className="flex justify-center items-center gap-2 text-yellow-400">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <span className="text-white font-semibold">4.9/5 Player Rating</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Games Grid */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🎮 <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">PREMIUM GAME COLLECTION</span> 🎮
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hand-picked selection of the most trusted and rewarding casino games. Each game is verified, secure, and offers exclusive bonuses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game) => {
            const IconComponent = game.icon;
            return (
              <div
                key={game.id}
                className="group bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6 border border-white border-opacity-20 shadow-2xl hover:bg-opacity-20 hover:scale-105 transition-all duration-300 hover:shadow-yellow-400/20"
              >
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${game.gradient} p-4 mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {game.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {game.description}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleDownload(game.name, game.downloadUrl)}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-4 rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:shadow-green-500/30 group-hover:scale-105 border border-green-400 border-opacity-30"
                  >
                    <Download className="w-5 h-5" />
                    Download
                  </button>

                  <button
                    onClick={() => handlePlay(game.name)}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-violet-600 text-white font-bold py-3 px-4 rounded-2xl hover:from-purple-600 hover:to-violet-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 group-hover:scale-105 border border-purple-400 border-opacity-30"
                  >
                    <Play className="w-5 h-5" />
                    Load
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Floating Contact Button */}
      <button
        onClick={() => setShowContact(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce z-40"
      >
        <MessageCircle className="w-8 h-8" />
      </button>

      {/* Popups */}
      {showContact && <ContactPopup />}
      {showAgentPopup && <AgentPopup />}
    </div>
  );
};

export default CasinoApp;
