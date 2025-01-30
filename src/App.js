import React, { useState } from 'react';
import { ArrowRight, Code, Smartphone, Zap, Check, Star } from 'lucide-react';

// Hero Section Component
const Hero = () => (
  <div className="relative bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Transform your app idea</span>
              <span className="block text-blue-600">into reality in minutes</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Answer a few questions, get a preview of your app, and generate real screens instantly.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="#signup" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                  Get Early Access
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
);

// How It Works Component
const HowItWorks = () => {
  const steps = [
    {
      title: "Answer Questions",
      description: "Tell us about your app idea through simple questions",
      icon: <Code className="w-12 h-12 text-blue-600" />
    },
    {
      title: "Preview Instantly",
      description: "See your app come to life with real-time previews",
      icon: <Smartphone className="w-12 h-12 text-blue-600" />
    },
    {
      title: "Refine & Generate",
      description: "Iterate on your idea and generate new screens instantly",
      icon: <Zap className="w-12 h-12 text-blue-600" />
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center">{step.icon}</div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">{step.title}</h3>
                <p className="mt-2 text-base text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Features Component
const Features = () => {
  const features = [
    "Quick setup: No code, just questions",
    "Real code generation for a working MVP",
    "User-friendly interface to test your app idea",
    "Save time and money before development"
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">Features & Benefits</h2>
        <div className="mt-10">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="w-6 h-6 text-green-500 mr-2" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      text: "This tool saved us weeks of development time. We could validate our idea before writing a single line of code.",
      author: "Sarah J., Startup Founder"
    },
    {
      text: "The interface is incredibly intuitive. It helped us refine our app concept in real-time.",
      author: "Michael R., Product Manager"
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">What People Are Saying</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
              <p className="text-gray-900 font-medium">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Email Signup Component
const EmailSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log("Email submitted:", email);
  };

  return (
    <div id="signup" className="bg-blue-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">Get Notified When We Launch</h2>
          <p className="mt-4 text-lg text-blue-100">
            Join our waitlist to be among the first to try our app visualization tool.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 sm:flex justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:max-w-xs px-5 py-3 border border-transparent rounded-md text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            required
          />
          <button
            type="submit"
            className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
          >
            Join Waitlist
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gray-800">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <nav className="flex flex-wrap justify-center space-x-6">
        <a href="#" className="text-gray-400 hover:text-gray-300">About</a>
        <a href="#" className="text-gray-400 hover:text-gray-300">Privacy</a>
        <a href="#" className="text-gray-400 hover:text-gray-300">Terms</a>
        <a href="#" className="text-gray-400 hover:text-gray-300">Contact</a>
      </nav>
      <div className="mt-8 flex justify-center space-x-6">
        <a href="#" className="text-gray-400 hover:text-gray-300">
          <span className="sr-only">Twitter</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-300">
          <span className="sr-only">GitHub</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
      <p className="mt-8 text-center text-base text-gray-400">
        &copy; 2025 App Visualizer. All rights reserved.
      </p>
    </div>
  </footer>
);

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default App;