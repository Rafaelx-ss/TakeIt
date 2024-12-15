'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Mail, Phone, MapPin } from 'lucide-react'

interface ExpandableProfileCardProps {
  name: string
  title: string
  avatar: string
  email: string
  phone: string
  location: string
  bio: string
}

export function ExpandableProfileCard({
  name,
  title,
  avatar,
  email,
  phone,
  location,
  bio
}: ExpandableProfileCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{title}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-2 mt-4">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>{email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{location}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{bio}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-2" /> Menos información
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-2" /> Más información
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

