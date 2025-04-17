'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initialize animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="text-white min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-indigo-950">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-950 to-indigo-950">
          {/* Glowing orbs */}
          {Array(20).fill('').map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full blur-xl opacity-40"
              style={{
                background: `radial-gradient(circle, ${['#ff00cc', '#3300ff', '#ff00dd', '#00ccff', '#8a2be2'][i % 5]} 0%, transparent 70%)`,
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 20}s ease-in-out infinite, pulse ${Math.random() * 5 + 5}s ease-in-out infinite alternate`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>

      {/* Header */}
      <header className={`fixed w-full z-30 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md shadow-xl shadow-purple-950/30' : ''}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-white flex items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">HD</span>
              <span className="relative">
                TTV
                <span className="absolute -top-1 -right-4 w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 animate-pulse"></span>
              </span>
            </h1>
          </div>
          
          <nav className={`hidden md:flex space-x-8`}>
            <Link href="/channels" className="relative group">
              <span className="pb-1 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 to-purple-500">
                Channel List
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link href="/reseller" className="relative group">
              <span className="pb-1 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 to-purple-500">
                Reseller
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link href="/setup" className="relative group">
              <span className="pb-1 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 to-purple-500">
                Setup Guide
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 px-5 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-600/30">
              Sign In
            </button>
          </nav>
          
          <div className="md:hidden">
            <button 
              className="p-2 transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full bg-black/90 backdrop-blur-md transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-64 py-4 shadow-2xl' : 'max-h-0'}`}>
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            <Link href="/channels" className="py-2 hover:text-pink-400 transition-colors">Channel List</Link>
            <Link href="/reseller" className="py-2 hover:text-pink-400 transition-colors">Reseller</Link>
            <Link href="/setup" className="py-2 hover:text-pink-400 transition-colors">Setup Guide</Link>
            <button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 py-2 rounded-full font-medium transition-all shadow-lg shadow-pink-600/30">
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 md:pt-40 pb-20 z-10 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-300">
              Ultimate
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500"> Streaming </span>
              Experience
            </h1>
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          </div>
          
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-500">
            Instant access to <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">23,000+</span> live channels and <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">140,000+</span> movies & shows worldwide
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-700">
            <button className="relative bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-pink-600/30 group overflow-hidden">
              <span className="relative z-10">Get Started Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </button>
            
            <button className="relative bg-transparent border border-white/30 backdrop-blur-sm hover:border-white/60 text-white font-bold py-4 px-10 rounded-full text-lg transition-all">
              View Plans
            </button>
          </div>
          
          {/* Floating devices mockup */}
          <div className="relative mt-16 md:mt-24 h-64 md:h-96 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-900">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              {/* TV */}
              <div className="relative rounded-lg bg-black shadow-2xl shadow-purple-900/30 w-64 md:w-96 h-36 md:h-56 border-2 border-gray-800 transform -rotate-12 transition-all duration-700 hover:rotate-0 hover:scale-105">
                <div className="absolute inset-2 bg-gradient-to-br from-indigo-600 to-purple-800 opacity-90 rounded overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-white font-bold">
                    HD Stream
                  </div>
                </div>
              </div>
              
              {/* Phone */}
              <div className="absolute -right-4 md:right-16 bottom-0 w-16 md:w-24 h-28 md:h-40 bg-black rounded-xl border-2 border-gray-800 overflow-hidden shadow-xl shadow-purple-900/30 transform rotate-6 transition-all duration-700 hover:rotate-0 hover:scale-105">
                <div className="absolute inset-1 bg-gradient-to-br from-pink-600 to-purple-800 opacity-90 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-white text-xs md:text-sm font-bold">
                    Mobile
                  </div>
                </div>
              </div>
              
              {/* Tablet */}
              <div className="absolute -left-6 md:left-16 -bottom-4 w-24 md:w-36 h-16 md:h-28 bg-black rounded-lg border-2 border-gray-800 overflow-hidden shadow-xl shadow-purple-900/30 transform -rotate-12 transition-all duration-700 hover:rotate-0 hover:scale-105">
                <div className="absolute inset-1 bg-gradient-to-br from-violet-600 to-indigo-800 opacity-90 rounded overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-white text-xs md:text-sm font-bold">
                    Tablet
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Banner */}
      <section className="relative z-10 py-8 overflow-hidden backdrop-blur-sm bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="animate-scroll">
          {Array(15).fill('').map((_, i) => (
            <div key={i} className="inline-flex items-center mx-4">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
              <span className="mx-3 text-lg font-medium">
                {[
                  "4K Ultra HD", "No Buffering", "23,000+ Channels", "Sports & PPV Events", 
                  "140,000+ Movies & Shows", "24/7 Support", "Regular Updates", "Multi-Device"
                ][i % 8]}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Plans Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-black/40">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Choose Your Plan</span>
          </h2>
          <p className="text-center text-lg text-gray-300 mb-12 max-w-2xl mx-auto animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-200">
            Select the perfect streaming package for your entertainment needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1 Month Plan */}
            <div className="bg-gradient-to-br from-gray-900/70 to-purple-950/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg shadow-purple-900/20 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-pink-800/20 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-300">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">1 Month</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-gray-400 ml-1">/month</span>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent my-4"></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="w-5 h-5 mr-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-xs">✓</span>
                    23,000+ Live Channels
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 mr-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-xs">✓</span>
                    140K+ Movies & Series
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 mr-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-xs">✓</span>
                    4K/UHD/HD Quality
                  </li>
                </ul>
                <button className="w-full relative overflow-hidden group bg-gray-800 hover:bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300">
                  <span className="relative z-10">Buy Now</span>
                </button>
              </div>
            </div>

            {/* 6 Month Plan */}
            <div className="bg-gradient-to-br from-gray-900/70 to-purple-950/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg shadow-purple-900/20 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-pink-800/20 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-400">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">6 Months</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-400 ml-1">/6 months</span>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent my-4"></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="w-5 h-5 mr-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-xs">✓</span>
                    23,000+ Live Channels
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 mr-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-xs">✓</span>
                    140K+ Movies & Series
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 mr-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-xs">✓</span>
                    4K/UHD/HD Quality
                  </li>
                </ul>
                <button className="w-full relative overflow-hidden group bg-gray-800 hover:bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300">
                  <span className="relative z-10">Buy Now</span>
                </button>
              </div>
            </div>

            {/* 1 Year Plan */}
            <div className="bg-gradient-to-br from-gray-800/90 to-pink-950/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl shadow-pink-900/30 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-pink-800/40 relative animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-500">
              <div className="absolute -top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-1 px-6 rounded-full text-sm shadow-lg transform rotate-2">
                BEST DEAL
              </div>
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-30 blur-xl"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">1 Year</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-gray-400 ml-1">/year</span>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent my-4"></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="w-5 h-5 mr-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-xs">✓</span>
                    23,000+ Live Channels
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 mr-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-xs">✓</span>
                    140K+ Movies & Series
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 mr-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-xs">✓</span>
                    4K/UHD/HD Quality
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 mr-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-xs">✓</span>
                    Priority Support
                  </li>
                </ul>
                <button className="w-full relative overflow-hidden group bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-pink-600/30">
                  <span className="relative z-10">Buy Now</span>
                </button>
              </div>
            </div>

            {/* 2 Years Plan */}
            <div className="bg-gradient-to-br from-gray-900/70 to-purple-950/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg shadow-purple-900/20 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-pink-800/20 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-600">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">2 Years</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">$79</span>
                  <span className="text-gray-400 ml-1">/2 years</span>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent my-4"></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="w-5 h-5 mr-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-xs">✓</span>
                    23,000+ Live Channels
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 mr-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-xs">✓</span>
                    140K+ Movies & Series
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 mr-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-xs">✓</span>
                    4K/UHD/HD Quality
                  </li>
                </ul>
                <button className="w-full relative overflow-hidden group bg-gray-800 hover:bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300">
                  <span className="relative z-10">Buy Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Premium Experience</span>
          </h2>
          <p className="text-center text-lg text-gray-300 mb-12 max-w-2xl mx-auto animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-200">
            Advanced features designed for the ultimate entertainment experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900/50 to-purple-950/50 backdrop-blur-sm p-8 rounded-2xl text-center transform transition-all duration-500 hover:scale-105 group animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-300">
              <div className="relative w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-all duration-500"></div>
                <div className="absolute inset-0.5 bg-gray-900 rounded-xl flex items-center justify-center">
                  <svg className="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Multi-Device Streaming</h3>
              <p className="text-gray-300">Stream seamlessly on Smart TVs, phones, tablets, laptops and more</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-purple-950/50 backdrop-blur-sm p-8 rounded-2xl text-center transform transition-all duration-500 hover:scale-105 group animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-400">  
              <div className="relative w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-all duration-500"></div>
                <div className="absolute inset-0.5 bg-gray-900 rounded-xl flex items-center justify-center">
                  <svg className="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Ultra-Fast Servers</h3>
              <p className="text-gray-300">99.9% uptime with advanced server technology for buffer-free streaming</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-purple-950/50 backdrop-blur-sm p-8 rounded-2xl text-center transform transition-all duration-500 hover:scale-105 group animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-500">
              <div className="relative w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-all duration-500"></div>
                <div className="absolute inset-0.5 bg-gray-900 rounded-xl flex items-center justify-center">
                  <svg className="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Premium Support</h3>
              <p className="text-gray-300">Dedicated live chat support team available around the clock</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Showcase */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black/30 via-purple-950/20 to-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Explore Our Library</span>
          </h2>
          
          <div className="relative">
            {/* Content carousel */}
            <div className="overflow-hidden py-8">
              <div className="flex space-x-6 animate-carousel">
                {Array(8).fill('').map((_, i) => (
                  <div key={i} className="flex-shrink-0 w-48 h-64 rounded-xl overflow-hidden shadow-lg shadow-purple-900/20 transform transition-all hover:scale-105 relative group">
                    <div className="absolute inset-0 bg-gradient-to-b from-pink-600/80 via-purple-600/80 to-indigo-800/80 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="font-bold text-lg">Featured Content {i+1}</p>
                      <p className="text-sm text-gray-300">Premium Entertainment</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Second carousel - opposite direction */}
            <div className="overflow-hidden py-8">
              <div className="flex space-x-6 animate-carousel-reverse">
                {Array(8).fill('').map((_, i) => (
                  <div key={i} className="flex-shrink-0 w-48 h-32 rounded-xl overflow-hidden shadow-lg shadow-purple-900/20 transform transition-all hover:scale-105 relative group">
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/80 via-purple-600/80 to-pink-800/80 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="font-bold">Channel {i+1}</p>
                      <p className="text-xs text-gray-300">Live TV</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-black/30 to-indigo-950/30 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Sports background elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-600 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
        </div>
      
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-4 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Premium Sports</span>
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-200">
            Never miss a game with our comprehensive sports package
          </p>
          
          <div className="relative py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-300">
          {['NFL', 'NBA', 'NHL', 'MLB', 'Football', 'F1', 'UFC', 'Golf', 'Tennis', 'Cricket', 'Rugby', 'Boxing'].map(sport => (
            <div key={sport} className="group">
                <div className="relative bg-gradient-to-br from-gray-900/80 to-purple-950/80 backdrop-blur-sm p-4 rounded-xl shadow-lg shadow-purple-900/20 transform transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-pink-800/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/0 to-purple-600/0 rounded-xl group-hover:from-pink-600/30 group-hover:to-purple-600/30 transition-all duration-500"></div>
                  <div className="font-bold text-lg relative">
                    {sport}
                    <div className="w-full h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="mt-10 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-pink-600/30 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-500">
            View Sports Channels
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Customer Feedback</span>
          </h2>
          <p className="text-center text-lg text-gray-300 mb-12 max-w-2xl mx-auto animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-200">
            See what our subscribers have to say about our service
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alex M.", text: "Best streaming service I've used. No buffering issues, incredible channel selection, and the 4K quality is outstanding!" },
              { name: "Sarah K.", text: "The sports package is unbeatable. I never miss any games now, and the picture quality is crystal clear even during fast-paced action." },
              { name: "David R.", text: "Setup was incredibly easy on all my devices. Customer support is responsive and helpful whenever I need assistance." }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900/60 to-purple-950/60 backdrop-blur-sm p-6 rounded-2xl relative group transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-pink-800/20 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000" style={{ transitionDelay: `${300 + i * 100}ms` }}>
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.29 18.7a1 1 0 01-1.58-.12L1 12l3.71-6.58a1 1 0 011.58-.12l1.42 1.58a1 1 0 01.07 1.32L6 11h5V7a1 1 0 011-1h2a1 1 0 011 1v10a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4H6l1.78 2.8a1 1 0 01-.07 1.32l-1.42 1.58z"/>
                  </svg>
                </div>
                <div className="mb-6">
                  {Array(5).fill('').map((_, i) => (
                    <svg key={i} className="inline-block h-5 w-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 mr-4 flex items-center justify-center font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-black/30 to-indigo-950/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">FAQ</span>
          </h2>
          <p className="text-center text-lg text-gray-300 mb-12 max-w-2xl mx-auto animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-200">
            Everything you need to know about our service
          </p>
          
          <div className="max-w-3xl mx-auto animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-300">
            {[
              { q: "How many channels do I get?", a: "Over 23,000 live channels and 140,000+ movies and shows from around the world, including premium content, sports, and exclusive entertainment." },
              { q: "What devices are supported?", a: "Our service works on virtually all streaming devices, including Smart TVs, Android/iOS phones and tablets, Fire Stick, Apple TV, Android TV, MAG boxes, Enigma, and more." },
              { q: "How will I receive my subscription?", a: "Login details will be emailed to you immediately after payment confirmation. You can start streaming within minutes of your purchase." },
              { q: "Can I cancel my subscription?", a: "Yes, you can cancel anytime with no contracts or hidden fees. We offer a simple, hassle-free subscription model." }
            ].map((faq, i) => (
              <div key={i} className="mb-4 bg-gradient-to-br from-gray-900/70 to-purple-950/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg group">
                <button className="flex justify-between items-center w-full p-6 text-left group-hover:bg-black/20 transition-all duration-300">
                  <span className="font-bold text-lg">{faq.q}</span>
                  <span className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white transform group-hover:rotate-180 transition-transform duration-500">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div className="p-6 pt-0">
                  <p className="text-gray-300">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 bg-gradient-to-r from-pink-950/40 to-purple-950/40 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-600 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
            Ready For <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Premium Entertainment?</span>
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-200">
            Join thousands of satisfied customers streaming their favorite content worldwide.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-400">
            <button className="relative overflow-hidden group bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-pink-600/30">
              <span className="relative z-10">Start Streaming Now</span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-white/20 transition-all duration-300 group-hover:h-full"></span>
            </button>
            
            <button className="bg-transparent border border-white/30 hover:border-white/60 backdrop-blur-sm text-white font-bold py-4 px-10 rounded-xl transition-all">
              View Plans
            </button>
          </div>
          
          <div className="mt-12 inline-flex items-center justify-center bg-black/40 backdrop-blur-sm py-3 px-6 rounded-full animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-600">
            <svg className="h-5 w-5 mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>24/7 Live Support Available</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/80 backdrop-blur-md py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h1 className="text-3xl font-bold text-white flex items-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">HD</span>
                <span className="relative">
                  TTV
                  <span className="absolute -top-1 -right-4 w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 animate-pulse"></span>
                </span>
              </h1>
              <p className="mt-2 text-gray-400">Premium IPTV Service Worldwide</p>
              
              <div className="mt-4 flex space-x-4">
                <a href="#" className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 transition-all">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 transition-all">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zm2.99 6c-.24 0-.48.08-.67.23a.996.996 0 00-.33.74c0 .28.12.52.32.7.21.18.46.28.73.28.26 0 .51-.1.71-.28.2-.19.3-.42.3-.7 0-.28-.1-.52-.3-.71-.2-.2-.44-.29-.71-.29l-.05.03zm-6.54.02c-.25.05-.47.17-.65.35-.17.17-.29.39-.34.64-.05.26-.03.51.06.75.1.25.24.45.44.61.2.16.43.27.68.3.27.04.52.01.77-.08.24-.09.45-.23.6-.44.17-.2.27-.44.3-.71.03-.26 0-.51-.1-.75-.09-.24-.23-.45-.42-.61-.19-.16-.42-.27-.67-.3a1.5 1.5 0 00-.74.08c-.03.01-.06.03-.08.04l.05.02zm8.4 1.42c-.21.01-.4.07-.58.18-.18.1-.33.25-.43.43-.1.18-.16.38-.17.6-.01.21.03.41.1.6a1.5 1.5 0 001.05.84c.2.04.4.02.6-.04.2-.06.38-.16.52-.3.15-.14.26-.32.33-.52.07-.2.1-.4.08-.62a1.5 1.5 0 00-.93-1.17c-.19-.07-.39-.09-.59-.08l.02.08zM9 9.5c.61 0 1.12.21 1.53.62.42.41.62.92.62 1.53v2.62a3.77 3.77 0 01-.1.95c-.06.3-.18.6-.33.86a3.32 3.32 0 01-1.32 1.3c-.57.31-1.23.47-1.98.47a5.3 5.3 0 01-1.91-.36 5.05 5.05 0 01-1.64-1.08l1.6-1.6c.24.26.54.46.88.59.35.12.7.18 1.07.18.38 0 .7-.1.96-.3.27-.21.4-.5.4-.89v-.24c-.38.29-.82.43-1.33.43-.45 0-.87-.1-1.27-.32a2.43 2.43 0 01-.94-.92c-.23-.4-.35-.85-.35-1.34 0-.5.11-.95.34-1.34.22-.4.53-.71.94-.92.4-.21.82-.32 1.28-.32zm9.81 1.11v3.93h-1.9v-3.93h-1.59V8.71h5.08v1.9h-1.59zm-9.4.59a1.42 1.42 0 00-.7.18 1.3 1.3 0 00-.49.47c-.12.19-.17.4-.17.64 0 .35.13.65.38.9.25.25.57.38.94.38.35 0 .66-.13.91-.38.25-.25.38-.55.38-.9 0-.36-.13-.66-.38-.9a1.25 1.25 0 00-.91-.38h.04z"/>
                  </svg>
                </a>
                <a href="#" className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 transition-all">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                  </svg>
                </a>
                <a href="#" className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 transition-all">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 08.224 8.224 0 01-2.605.996A4.107 4.107 0 0016.616 4c-2.266 0-4.103 1.837-4.103 4.103 0 .322.036.635.106.935-3.41-.171-6.435-1.805-8.457-4.29a4.068 4.068 0 00-.556 2.065c0 1.425.725 2.681 1.826 3.419a4.092 4.092 0 01-1.858-.513v.051c0 1.99 1.415 3.648 3.292 4.024a4.105 4.105 0 01-1.852.07c.523 1.63 2.04 2.817 3.835 2.85a8.233 8.233 0 01-5.096 1.757c-.331 0-.657-.019-.98-.056a11.615 11.615 0 006.29 1.845"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} HDTTV. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
  
}