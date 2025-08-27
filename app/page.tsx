'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, Users, Zap, Play } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{
      background: `linear-gradient(135deg, #5C4D7D 0%, #1FAB89 100%)`
    }}>
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          TasteSpace
        </div>
        <div className="flex gap-4">
          <Link 
            href="/app"
            className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors"
            style={{ color: '#5C4D7D' }}
          >
            Open App
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Explore the world's flavors digitally while learning sustainable food practices.
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Experience the future of micro-moment culinary exploration and sustainable living with our innovative platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/app"
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2"
              style={{ color: '#5C4D7D' }}
            >
              <Play className="w-5 h-5" />
              Try Now - It's Free
            </Link>
            
            <Link
              href="#demo"
              className="text-white border border-white/30 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="demo" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What You Can Do
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center"
          >
            <div className="mb-6">
              <Star className="w-12 h-12 text-white mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              - AI-powered Global Flavor Map
            </h3>
            <p className="text-white/80">
              Exploring different regional flavors using AI sensory digital data about ingredients, preparation techniques, pairings, etc.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center"
          >
            <div className="mb-6">
              <Users className="w-12 h-12 text-white mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              - Virtual Cooking Lessons
            </h3>
            <p className="text-white/80">
              Live virtual cooking sessions with chefs from around the globe teaching traditional dishes and nutrition information of local ingredients.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center"
          >
            <div className="mb-6">
              <Zap className="w-12 h-12 text-white mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              - Sustainability Score
            </h3>
            <p className="text-white/80">
              Each recipe will have a 'sustainability score' based on ingredient sourcing impact, seasonality, waste produced, etc., encouraging more conscious decisions.
            </p>
          </motion.div>
        </div>

        <div className="text-center">
          <Link
            href="/app"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            style={{ color: '#5C4D7D' }}
          >
            Start Using TasteSpace
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center border-t border-white/10">
        <p className="text-white/60">
          © 2024 TasteSpace. Built with Go To Factory.
        </p>
      </footer>
    </div>
  )
}