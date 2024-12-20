import { useSlideIn } from "@/app/hooks/useSlideIn"
import { Star } from 'lucide-react'

export default function Testimonials() {
  const [ref, isVisible] = useSlideIn()

  const testimonials = [
    { name: 'Sarah L.', role: 'Software Engineer', content: 'AcePrep-AI helped me land my dream job at a top tech company. The AI-powered mock interviews were incredibly realistic!', color: 'bg-yellow-100' },
    { name: 'Michael R.', role: 'Product Manager', content: 'I was skeptical at first, but the personalized feedback I received was invaluable. It really boosted my confidence.', color: 'bg-pink-100' },
    { name: 'Emily T.', role: 'Data Scientist', content: 'The tailored question sets and real-time feedback made my preparation so much more efficient. Highly recommended!', color: 'bg-purple-100' },
  ]

  return (
    <section id="testimonials" ref={ref} className={`py-20 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center  text-gray-800 mb-12 gradient-text">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`${testimonial.color} p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1`}>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-800 mb-4">{testimonial.content}</p>
              <div className="font-semibold text-gray-900">{testimonial.name}</div>
              <div className="text-sm text-gray-700">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

