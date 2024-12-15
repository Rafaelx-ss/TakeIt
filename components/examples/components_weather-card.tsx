import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface WeatherCardProps {
  city: string
  temperature: number
  condition: 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'stormy'
  humidity: number
  windSpeed: number
}

const weatherIcons = {
  sunny: Sun,
  cloudy: Cloud,
  rainy: CloudRain,
  snowy: CloudSnow,
  stormy: CloudLightning,
}

export function WeatherCard({ city, temperature, condition, humidity, windSpeed }: WeatherCardProps) {
  const WeatherIcon = weatherIcons[condition]

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{city}</span>
          <WeatherIcon className="h-6 w-6" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold mb-4">{temperature}°C</div>
        <div className="flex justify-between text-sm">
          <span>Humedad: {humidity}%</span>
          <span>Viento: {windSpeed} km/h</span>
        </div>
      </CardContent>
    </Card>
  )
}

