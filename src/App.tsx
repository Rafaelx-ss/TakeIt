import React from "react";
import Header from "./components/header/Header";
import { events } from "./data/events"; 
import Card from "./components/Card"; 
import BarraGeneral from "./components/BarraBusqueda/BarraGeneral"; 
import Footer from "./components/footer/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-background min-h-screen text-text font-poppins">
      <Header/>
      <div className="p-6">
        <BarraGeneral/> 
        <h2 className="text-4xl font-bold text-primary mt-6 mb-6">Eventos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 sm:px-4 lg:px-1">
          {events.map(event => (
            <Card key={event.id} event={event}/>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
