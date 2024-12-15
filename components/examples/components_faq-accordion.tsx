'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "¿Cuál es el tiempo de entrega?",
    answer: "Nuestro tiempo de entrega estándar es de 3-5 días hábiles. Para pedidos internacionales, puede tomar hasta 14 días."
  },
  {
    question: "¿Ofrecen reembolsos?",
    answer: "Sí, ofrecemos reembolsos completos para productos devueltos en su estado original dentro de los 30 días posteriores a la compra."
  },
  {
    question: "¿Cómo puedo contactar al servicio al cliente?",
    answer: "Puede contactarnos por correo electrónico a support@example.com o por teléfono al 1-800-123-4567, de lunes a viernes de 9am a 5pm."
  }
]

export function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-border rounded-md overflow-hidden">
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-card hover:bg-accent focus:outline-none"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <span className="font-medium">{faq.question}</span>
            <ChevronDown className={`w-5 h-5 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 bg-accent/10">
                  <p>{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

