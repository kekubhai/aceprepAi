import { useState } from 'react'
import { useSlideIn } from '@/app/hooks/useSlideIn'
import { validateEmail } from '@/app/utils/validateEmail'
import { Send } from 'lucide-react'

export default function Contact() {
  const [ref, isVisible] = useSlideIn()
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setStatus('Please enter a valid email address.')
      return
    }
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { email, message })
    setStatus('Thank you for your message. We\'ll get back to you soon!')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" ref={ref} className={`py-20 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-200 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md colorful-shadow">
          <div className="mb-4">
            <label htmlFor="email" className="block text-purple-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-purple-700 mb-2">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center">
            Send Message
            <Send size={20} className="ml-2" />
          </button>
          {status && <p className="mt-4 text-center text-purple-600">{status}</p>}
        </form>
      </div>
    </section>
  )
}

