import React, { useState} from "react";

const Categories = () =>{
    return(
        <section className="mb-12">
        <h2 className="font-bold text-xl">Eventos Destacados</h2>
        <div className="flex items-center">
            <div className=" rounded-lg p-2 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-yellow-300 hover:bg-yellow-400 text-black font-sans py-2 px-4">Todos</button>
            </div>
            <div className=" rounded-lg p-2 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-zinc-800 hover:bg-yellow-300 text-black font-sans py-2 px-4">Música</button>
            </div>
            <div className=" rounded-lg p-2 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-zinc-800 hover:bg-yellow-300 text-black font-sans py-2 px-4">Deportes</button>
            </div>
            <div className=" rounded-lg p-2 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-zinc-800 hover:bg-yellow-300 text-black font-sans py-2 px-4">Arte</button>
            </div>
            <div className=" rounded-lg p-2 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-zinc-800 hover:bg-yellow-300 text-black font-sans py-2 px-4">Tecnología</button>
            </div>
            <div className=" rounded-lg p-2 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-zinc-800 hover:bg-yellow-300 text-black font-sans py-2 px-4">Negocios</button>
            </div>
            <div className=" rounded-lg p-2 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-zinc-800 hover:bg-yellow-300 text-black font-sans py-2 px-4">Moda</button>
            </div>
        </div>
        </section>
    )

}
export default Categories;