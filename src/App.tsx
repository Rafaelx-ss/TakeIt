import React from 'react'
import Header from './components/Header'
import EventSearch from './components/EventSearch'

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <EventSearch />
      </main>
    </div>
  )
}

export default App