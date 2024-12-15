'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface Comment {
  id: number
  author: string
  avatar: string
  content: string
  timestamp: string
  replies?: Comment[]
}

interface CommentProps {
  comment: Comment
  level: number
}

function CommentComponent({ comment, level }: CommentProps) {
  const [isReplying, setIsReplying] = useState(false)
  const [replyContent, setReplyContent] = useState('')

  const handleReply = () => {
    // Aquí iría la lógica para enviar la respuesta al servidor
    console.log('Respuesta enviada:', replyContent)
    setIsReplying(false)
    setReplyContent('')
  }

  return (
    <div className={`mb-4 ${level > 0 ? 'ml-8' : ''}`}>
      <div className="flex items-start space-x-4">
        <Avatar>
          <AvatarImage src={comment.avatar} alt={comment.author} />
          <AvatarFallback>{comment.author[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center mb-1">
            <span className="font-semibold mr-2">{comment.author}</span>
            <span className="text-sm text-muted-foreground">{comment.timestamp}</span>
          </div>
          <p className="text-sm mb-2">{comment.content}</p>
          <Button variant="link" size="sm" onClick={() => setIsReplying(!isReplying)}>
            Responder
          </Button>
          {isReplying && (
            <div className="mt-2">
              <Textarea
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder="Escribe tu respuesta..."
                className="mb-2"
              />
              <Button size="sm" onClick={handleReply}>Enviar respuesta</Button>
            </div>
          )}
        </div>
      </div>
      {comment.replies && comment.replies.map(reply => (
        <CommentComponent key={reply.id} comment={reply} level={level + 1} />
      ))}
    </div>
  )
}

interface NestedCommentsProps {
  comments: Comment[]
}

export function NestedComments({ comments }: NestedCommentsProps) {
  return (
    <div className="space-y-4">
      {comments.map(comment => (
        <CommentComponent key={comment.id} comment={comment} level={0} />
      ))}
    </div>
  )
}

