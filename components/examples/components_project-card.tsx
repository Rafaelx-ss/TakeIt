import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface ProjectMember {
  name: string
  avatar: string
}

interface ProjectCardProps {
  title: string
  description: string
  progress: number
  dueDate: string
  status: 'En progreso' | 'Completado' | 'Retrasado'
  members: ProjectMember[]
}

export function ProjectCard({ title, description, progress, dueDate, status, members }: ProjectCardProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2 text-sm">
              <span>Progreso</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Fecha límite: {dueDate}</span>
            <Badge variant={status === 'En progreso' ? 'default' : status === 'Completado' ? 'secondary' : 'destructive'}>
              {status}
            </Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex -space-x-2 overflow-hidden">
          {members.map((member, index) => (
            <Avatar key={index} className="inline-block border-2 border-background">
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback>{member.name[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}

