'use client'

import { useState } from 'react'
import Editor from '@monaco-editor/react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const languages = ['javascript', 'typescript', 'python', 'html', 'css']

export function CodeEditor() {
  const [language, setLanguage] = useState('javascript')
  const [code, setCode] = useState('// Escribe tu código aquí')

  const handleLanguageChange = (value: string) => {
    setLanguage(value)
    // Aquí podrías agregar lógica para cambiar el código de ejemplo según el lenguaje
  }

  const handleCodeChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value)
    }
  }

  const handleRunCode = () => {
    // Aquí implementarías la lógica para ejecutar el código
    console.log('Ejecutando código:', code)
    // En un escenario real, podrías enviar el código a un backend para su ejecución
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Select onValueChange={handleLanguageChange} value={language}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecciona un lenguaje" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang} value={lang}>
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={handleRunCode}>Ejecutar Código</Button>
      </div>
      <Editor
        height="400px"
        language={language}
        value={code}
        onChange={handleCodeChange}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
        }}
      />
    </div>
  )
}

