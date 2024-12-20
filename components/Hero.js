/* eslint-disable @next/next/no-img-element */
import { useSlideIn } from "@/app/hooks/useSlideIn"
import { ArrowRight } from 'lucide-react'
import TypingAnimation from "./ui/typing-animation"
import { RainbowButton } from "./ui/rainbow-button"

export default function Hero() {
  const [ref, isVisible] = useSlideIn()

  return (
    <section ref={ref} className={`min-h-screen flex items-center justify-center relative overflow-hidden py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-black to-yellow-200 opacity-50"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl font-serif md:text-7xl font-bold mb-6 gradient-text">
            <TypingAnimation className='text-5xl'>
                Ace your Interview Prep
            </TypingAnimation>
        </h1>
        <p className="text-xl md:text-2xl text-purple-800 mb-8 max-w-2xl mx-auto">Prepare smarter, not harder. Let AI guide your interview success with personalized coaching and real-time feedback.</p>
        <a href="#features" className=" m-5">
         <RainbowButton>
            Get Started
         </RainbowButton>
          <ArrowRight className="ml-2" size={20} />
        </a>
        <div className="mt-12 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <img src="/placeholder.svg?height=300&width=600" alt="AI Interview Preparation" className="mx-auto relative z-10 rounded-lg shadow-2xl colorful-shadow" />
        </div>
      </div>
    </section>
  )
}

