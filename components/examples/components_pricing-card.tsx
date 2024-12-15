import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface PricingCardProps {
  title: string
  price: number
  description: string
  features: string[]
  isPopular?: boolean
}

export function PricingCard({ title, price, description, features, isPopular }: PricingCardProps) {
  return (
    <Card className={`w-[300px] ${isPopular ? 'border-primary' : ''}`}>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {title}
          {isPopular && (
            <span className="px-2 py-1 text-xs font-semibold text-primary-foreground bg-primary rounded-full">
              Popular
            </span>
          )}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold mb-4">${price}<span className="text-lg font-normal">/mes</span></div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={isPopular ? 'default' : 'outline'}>
          Elegir plan
        </Button>
      </CardFooter>
    </Card>
  )
}

