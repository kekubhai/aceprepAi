import { useSlideIn } from "@/app/hooks/useSlideIn"
import { Check } from 'lucide-react'

export default function Pricing() {
  const [ref, isVisible] = useSlideIn()

  const plans = [
    {
      name: 'Basic',
      price: '$19',
      features: ['5 AI Mock Interviews', 'Basic Performance Analytics', 'Email Support'],
      cta: 'Get Started',
      color: 'bg-yellow-100 hover:bg-yellow-200',
      textColor: 'text-yellow-800',
    },
    {
      name: 'Pro',
      price: '$49',
      features: ['Unlimited AI Mock Interviews', 'Advanced Performance Analytics', 'Priority Email Support', 'Personalized Learning Path'],
      cta: 'Go Pro',
      highlighted: true,
      color: 'bg-purple-600 hover:bg-purple-700',
      textColor: 'text-white',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Custom AI Training', 'Dedicated Account Manager', 'API Access', 'Custom Integrations'],
      cta: 'Contact Sales',
      color: 'bg-pink-100 hover:bg-pink-200',
      textColor: 'text-pink-800',
    },
  ]

  return (
    <section id="pricing" ref={ref} className={`py-20 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`${plan.color} p-6 rounded-lg shadow-md ${plan.highlighted ? 'ring-2 ring-purple-500 shadow-xl transform scale-105' : ''} transition-all duration-300`}>
              <h3 className={`text-2xl font-bold mb-4 ${plan.textColor}`}>{plan.name}</h3>
              <p className={`text-4xl font-bold mb-6 ${plan.textColor}`}>{plan.price}<span className="text-base font-normal">/month</span></p>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <Check size={20} className={`${plan.textColor} mr-2`} />
                    <span className={plan.textColor}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2 px-4 rounded-full font-semibold ${plan.highlighted ? 'bg-white text-purple-600' : `${plan.textColor} bg-opacity-20`} transition-colors duration-300`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

