import { Bell, Check, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Notification {
  id: number
  title: string
  description: string
  time: string
  read: boolean
}

interface NotificationListProps {
  notifications: Notification[]
  onMarkAsRead: (id: number) => void
  onDismiss: (id: number) => void
}

export function NotificationList({ notifications, onMarkAsRead, onDismiss }: NotificationListProps) {
  return (
    <ScrollArea className="h-[300px] w-[350px] rounded-md border p-4">
      <h3 className="font-semibold mb-4">Notificaciones</h3>
      {notifications.map((notification) => (
        <div key={notification.id} className={`mb-4 p-3 rounded-lg ${notification.read ? 'bg-secondary' : 'bg-primary/10'}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">{notification.title}</span>
            <span className="text-xs text-muted-foreground">{notification.time}</span>
          </div>
          <p className="text-sm mb-2">{notification.description}</p>
          <div className="flex justify-end space-x-2">
            {!notification.read && (
              <Button variant="outline" size="sm" onClick={() => onMarkAsRead(notification.id)}>
                <Check className="h-4 w-4 mr-1" /> Marcar como leída
              </Button>
            )}
            <Button variant="outline" size="sm" onClick={() => onDismiss(notification.id)}>
              <X className="h-4 w-4 mr-1" /> Descartar
            </Button>
          </div>
        </div>
      ))}
    </ScrollArea>
  )
}

