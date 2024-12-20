import { useSlideIn } from "@/app/hooks/useSlideIn"
import { BookOpen, Users, Zap, BarChart } from 'lucide-react'
import GradualSpacing from "./ui/gradual-spacing"

export default function Features() {
  const [ref, isVisible] = useSlideIn()

  const features = [
    { icon: <BookOpen size={40} />, title: 'Personalized Learning', description: 'Tailored interview preparation based on your skills and target roles.', color: 'bg-yellow-100 text-yellow-800' },
    { icon: <Users size={40} />, title: 'AI Mock Interviews', description: 'Practice with AI-powered interviewers to boost your confidence.', color: 'bg-pink-100 text-pink-800' },
    { icon: <Zap size={40} />, title: 'Real-time Feedback', description: 'Get instant feedback on your responses to improve quickly.', color: 'bg-purple-100 text-purple-800' },
    { icon: <BarChart size={40} />, title: 'Progress Tracking', description: 'Monitor your improvement with detailed analytics and insights.', color: 'bg-cyan-100 text-cyan-800' },
  ]

  return (
    <section id="features" ref={ref} className={`py-20 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl text-gray-700 md:text-5xl font-bold text-center mb-12 gradient-text">
            <GradualSpacing text={'Why Choose AcePrep AI ?'}>
                Why Choose AcePrep AI?
            </GradualSpacing>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`${feature.color} p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1`}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

