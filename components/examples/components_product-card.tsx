'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'

interface ProductCardProps {
  name: string
  price: number
  image: string
}

export function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative h-48">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-dorado font-bold">${price.toFixed(2)}</p>
        <button className="mt-4 w-full bg-primary text-primary-foreground py-2 px-4 rounded-md flex items-center justify-center hover:bg-primary/90 transition-colors">
          <ShoppingCart className="w-5 h-5 mr-2" />
          Agregar al carrito
        </button>
      </div>
    </motion.div>
  )
}

