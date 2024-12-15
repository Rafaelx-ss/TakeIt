'use client'

import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'

interface Task {
  id: string
  content: string
}

interface Column {
  id: string
  title: string
  tasks: Task[]
}

const initialColumns: Column[] = [
  {
    id: 'todo',
    title: 'Por hacer',
    tasks: [
      { id: 'task-1', content: 'Crear diseño de la página de inicio' },
      { id: 'task-2', content: 'Implementar autenticación de usuarios' },
    ],
  },
  {
    id: 'inProgress',
    title: 'En progreso',
    tasks: [
      { id: 'task-3', content: 'Desarrollar API RESTful' },
    ],
  },
  {
    id: 'done',
    title: 'Completado',
    tasks: [
      { id: 'task-4', content: 'Configurar entorno de desarrollo' },
    ],
  },
]

export function KanbanBoard() {
  const [columns, setColumns] = useState(initialColumns)

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const sourceColumn = columns.find(col => col.id === source.droppableId)
    const destColumn = columns.find(col => col.id === destination.droppableId)
    const draggedTask = sourceColumn.tasks.find(task => task.id === draggableId)

    const newColumns = columns.map(col => {
      if (col.id === source.droppableId) {
        col.tasks.splice(source.index, 1)
      }
      if (col.id === destination.droppableId) {
        col.tasks.splice(destination.index, 0, draggedTask)
      }
      return col
    })

    setColumns(newColumns)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {columns.map(column => (
          <div key={column.id} className="flex-shrink-0 w-72">
            <Card>
              <CardHeader>
                <CardTitle>{column.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Droppable droppableId={column.id}>
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="space-y-2"
                    >
                      {column.tasks.map((task, index) => (
                        <Draggable key={task.id} draggableId={task.id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="bg-card p-2 rounded-md shadow-sm"
                            >
                              {task.content}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
                <Button className="w-full mt-2" variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" /> Agregar tarea
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </DragDropContext>
  )
}

