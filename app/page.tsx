'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="text-white min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900">
          {Array(20).fill('').map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full opacity-20 bg-blue-500"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className={`fixed w-full z-30 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80 shadow-xl' : ''}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-white">
              <span className="text-blue-500">HD</span>TTV
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/channels" className="hover:text-blue-400 transition">Channel List</Link>
            <Link href="/reseller" className="hover:text-blue-400 transition">Reseller</Link>
            <Link href="/setup" className="hover:text-blue-400 transition">Setup Guide</Link>
          </nav>
          <div className="md:hidden">
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-40 pb-20 z-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Premium IPTV For <span className="text-blue-500">Ultimate Streaming</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Instant access to 23,000+ live channels and 140,000+ movies & shows worldwide
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Scrolling Content */}
      <section className="relative z-10 py-10 overflow-hidden">
        <div className="flex space-x-8 animate-scroll">
          {/* Replace with actual movie/show images */}
          {Array(10).fill('').map((_, i) => (
            <div key={i} className="flex-shrink-0 h-40 w-64 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-lg">Movie {i+1}</span>
            </div>
          ))}
        </div>
        
        <div className="flex space-x-8 animate-scroll-reverse mt-6">
          {/* Replace with actual channel logos */}
          {Array(10).fill('').map((_, i) => (
            <div key={i} className="flex-shrink-0 h-20 w-20 bg-gray-800 rounded-full flex items-center justify-center">
              <span>Ch {i+1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Plans Section */}
      <section className="relative z-10 py-10 bg-black bg-opacity-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-2 border-blue-500 pb-2">Choose Your Plan</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1 Month Plan */}
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">1 Month</h3>
                <div className="text-3xl font-bold mb-4">$9</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    23,000+ Live Channels
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    140K+ Movies & Series
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    4K/UHD/HD Quality
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                  Buy Now
                </button>
              </div>
            </div>

            {/* 6 Month Plan */}
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">6 Months</h3>
                <div className="text-3xl font-bold mb-4">$29</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    23,000+ Live Channels
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    140K+ Movies & Series
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    4K/UHD/HD Quality
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                  Buy Now
                </button>
              </div>
            </div>

            {/* 1 Year Plan */}
            <div className="bg-gradient-to-b from-blue-900 to-blue-800 rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105 relative">
              <div className="absolute top-0 right-0 bg-yellow-500 text-black font-bold py-1 px-4 text-sm">
                BEST DEAL
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">1 Year</h3>
                <div className="text-3xl font-bold mb-4">$49</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    23,000+ Live Channels
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    140K+ Movies & Series
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    4K/UHD/HD Quality
                  </li>
                </ul>
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg">
                  Buy Now
                </button>
              </div>
            </div>

            {/* 2 Years Plan */}
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">2 Years</h3>
                <div className="text-3xl font-bold mb-4">$79</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    23,000+ Live Channels
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    140K+ Movies & Series
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    4K/UHD/HD Quality
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-2 border-blue-500 pb-2">Premium Services</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black bg-opacity-40 p-6 rounded-xl text-center transform transition hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">All Devices</h3>
              <p>Stream on any device - Smart TVs, phones, tablets, boxes</p>
            </div>
            
            <div className="bg-black bg-opacity-40 p-6 rounded-xl text-center transform transition hover:scale-105">  
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">99.9% Uptime</h3>
              <p>Ultra-stable servers for uninterrupted streaming</p>
            </div>
            
            <div className="bg-black bg-opacity-40 p-6 rounded-xl text-center transform transition hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p>Expert help available anytime via live chat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="relative z-10 py-16 bg-blue-900 bg-opacity-30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Premium Sports Coverage</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Watch NFL, NBA, NHL, MLB, ESPN+, Football, F1, Cricket and more in HD
          </p>
          
          <div className="flex justify-center space-x-6 flex-wrap">
            {['NFL', 'NBA', 'NHL', 'MLB', 'Football', 'F1'].map((sport) => (
              <div key={sport} className="bg-black bg-opacity-40 py-2 px-4 rounded-full mb-4">
                {sport}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-2 border-blue-500 pb-2">Customer Reviews</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Alex M.", text: "Best streaming service I've used. No buffering issues!" },
              { name: "Sarah K.", text: "Amazing channel selection. The sports coverage is unbeatable." },
              { name: "David R.", text: "Easy setup and works perfectly on all my devices." }
            ].map((testimonial, i) => (
              <div key={i} className="bg-black bg-opacity-40 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-700 mr-4"></div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <div className="flex">
                      {Array(5).fill('').map((_, i) => (
                        <svg key={i} className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p>{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-16 bg-black bg-opacity-40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-2 border-blue-500 pb-2">FAQ</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {[
              { q: "How many channels do I get?", a: "Over 23,000 live channels and 140,000+ movies and shows." },
              { q: "What devices are supported?", a: "All devices including Smart TVs, Android, iOS, MAG, Enigma, and more." },
              { q: "How will I receive my subscription?", a: "Login details will be emailed to you immediately after payment." },
              { q: "Can I cancel my subscription?", a: "Yes, cancel anytime with no contracts or hidden fees." }
            ].map((faq, i) => (
              <div key={i} className="mb-4 bg-gray-900 bg-opacity-60 rounded-lg">
                <button className="flex justify-between items-center w-full p-4 text-left">
                  <span className="font-bold">{faq.q}</span>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="p-4 pt-0">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Viewing Experience?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers streaming their favorite content worldwide.
          </p>
          <button className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105">
            Get Started Now
          </button>
          
          <div className="mt-10 flex items-center justify-center">
            <svg className="h-6 w-6 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>24/7 Live Chat Support Available</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black bg-opacity-80 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h1 className="text-2xl font-bold text-white">
                <span className="text-blue-500">HD</span>TTV
              </h1>
              <p className="mt-2 text-gray-400">Premium IPTV Service Worldwide</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/channels" className="hover:text-blue-400 transition">Channel List</Link>
              <Link href="/reseller" className="hover:text-blue-400 transition">Reseller</Link>
              <Link href="/setup" className="hover:text-blue-400 transition">Setup Guide</Link>
              <Link href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link>
              <Link href="/refund" className="hover:text-blue-400 transition">Refund Policy</Link>
              <Link href="/contact" className="hover:text-blue-400 transition">Contact Us</Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} HDTTV. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: calc(250px * 10);
        }
        
        .animate-scroll-reverse {
          animation: scroll 25s linear infinite reverse;
          width: calc(120px * 10);
        }
      `}</style>
    </div>
  );
}