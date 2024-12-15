'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    content: "Este producto ha cambiado completamente mi flujo de trabajo. ¡Increíble!",
    author: "María García",
    role: "Diseñadora UX"
  },
  {
    id: 2,
    content: "Nunca había experimentado un servicio al cliente tan excepcional. Altamente recomendado.",
    author: "Juan Pérez",
    role: "Gerente de Proyecto"
  },
  {
    id: 3,
    content: "La calidad y la atención al detalle son incomparables. Definitivamente volveré a comprar.",
    author: "Ana Rodríguez",
    role: "Desarrolladora Frontend"
  }
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden bg-card text-card-foreground p-8 rounded-lg shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg mb-4">&ldquo;{testimonials[currentIndex].content}&rdquo;</p>
          <p className="font-semibold">{testimonials[currentIndex].author}</p>
          <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevTestimonial}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-2"
        aria-label="Testimonio anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-2"
        aria-label="Siguiente testimonio"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

