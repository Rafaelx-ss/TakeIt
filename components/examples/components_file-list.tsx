'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FileIcon, FolderIcon, DownloadIcon, TrashIcon } from 'lucide-react'

interface File {
  id: string
  name: string
  type: 'file' | 'folder'
  size: string
  lastModified: string
}

interface FileListProps {
  files: File[]
  onDownload: (file: File) => void
  onDelete: (file: File) => void
}

export function FileList({ files: initialFiles, onDownload, onDelete }: FileListProps) {
  const [files, setFiles] = useState(initialFiles)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <Input
        placeholder="Buscar archivos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Tamaño</TableHead>
            <TableHead>Última modificación</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredFiles.map((file) => (
            <TableRow key={file.id}>
              <TableCell className="font-medium">
                <div className="flex items-center">
                  {file.type === 'folder' ? <FolderIcon className="mr-2 h-4 w-4" /> : <FileIcon className="mr-2 h-4 w-4" />}
                  {file.name}
                </div>
              </TableCell>
              <TableCell>{file.size}</TableCell>
              <TableCell>{file.lastModified}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => onDownload(file)}>
                    <DownloadIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => onDelete(file)}>
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

