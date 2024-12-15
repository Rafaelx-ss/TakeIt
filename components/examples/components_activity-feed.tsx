import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Activity {
  id: number
  user: {
    name: string
    avatar: string
  }
  action: string
  timestamp: string
}

interface ActivityFeedProps {
  activities: Activity[]
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <ScrollArea className="h-[400px] w-full rounded-md border p-4">
      <h3 className="font-semibold mb-4">Actividad Reciente</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
              <AvatarFallback>{activity.user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                <span className="font-semibold">{activity.user.name}</span> {activity.action}
              </p>
              <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

