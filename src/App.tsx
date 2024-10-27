import React from 'react';
import Header from './Components/Header';
import EventSearch from './Components/EventSearch'
import Categories from './Components/Categories'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header/>
      <main className="flex-grow container mx-auto px-4 py-8">
        <EventSearch/>
        <Categories/>
        <Cards/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App