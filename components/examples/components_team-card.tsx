import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TeamMember {
  name: string
  role: string
  avatar: string
}

interface TeamCardProps {
  teamName: string
  description: string
  members: TeamMember[]
}

export function TeamCard({ teamName, description, members }: TeamCardProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{teamName}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {members.map((member, index) => (
            <Badge key={index} variant="secondary">
              {member.name}
            </Badge>
          ))}
        </div>
        <div className="flex -space-x-4">
          {members.map((member, index) => (
            <Avatar key={index} className="border-2 border-background">
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

