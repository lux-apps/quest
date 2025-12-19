import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          LUX Quest
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl">
          Learn and Earn
        </p>
        <p className="text-lg text-gray-400 max-w-2xl">
          Complete quests to learn about Web3 and earn rewards.
        </p>
      </section>

      {/* Feature Sections */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Educational Quests</h2>
          <p className="text-lg text-gray-400">Learn about blockchain technology through interactive tutorials.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Earn Rewards</h2>
          <p className="text-lg text-gray-400">Complete quests to earn tokens, NFTs, and other digital rewards.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Track Progress</h2>
          <p className="text-lg text-gray-400">Build your on-chain reputation as you complete more quests.</p>
        </div>
      </section>

    </main>
  )
}
