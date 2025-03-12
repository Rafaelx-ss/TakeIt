'use client';

import React from 'react';

const About = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[rgb(223,181,72)] mb-4">Acerca de Take It!</h2>
        <p className="text-lg text-gray-300 mb-6">
          En la actualidad, la organización y promoción de eventos recreativos como
          competencias de videojuegos, torneos deportivos, conciertos y actividades
          culturales enfrenta varios desafíos. La falta de una plataforma centralizada
          dificulta la gestión eficiente de los eventos y limita la facilidad con la que
          los participantes pueden descubrir y registrarse en actividades de su interés.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          Take It! surge como una solución innovadora que permite a los organizadores
          gestionar eventos de manera sencilla y eficaz, brindando herramientas para
          la planificación, promoción y administración de cada actividad. Al mismo
          tiempo, ofrece a los participantes una experiencia intuitiva y accesible
          para encontrar y unirse a eventos fácilmente.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          Con Take It!, los usuarios pueden recibir notificaciones en tiempo real,
          visualizar estadísticas detalladas y administrar archivos relevantes
          dentro de una plataforma moderna y funcional, optimizando cada aspecto
          del proceso de organización de eventos.
        </p>
        <h3 className="text-3xl font-semibold text-[rgb(223,181,72)] mt-8 mb-4">Nuestra Misión</h3>
        <p className="text-lg text-gray-300 mb-6">
          Nuestra misión es revolucionar la gestión de eventos proporcionando una
          plataforma eficiente, accesible y fácil de usar. Queremos ayudar a los
          organizadores a mejorar la planificación y ejecución de sus actividades,
          y al mismo tiempo, ofrecer a los participantes una experiencia fluida y
          enriquecedora.
        </p>
        <h3 className="text-3xl font-semibold text-[rgb(223,181,72)] mt-8 mb-4">Nuestra Visión</h3>
        <p className="text-lg text-gray-300 mb-6">
          Buscamos convertirnos en la plataforma líder en la gestión de eventos,
          expandiendo nuestras capacidades para abarcar más tipos de actividades
          y facilitando la interacción entre organizadores y asistentes en un
          ecosistema digital completo.
        </p>
        <h3 className="text-3xl font-semibold text-[rgb(223,181,72)] mt-8 mb-4">¿Por qué elegir Take It!?</h3>
        <ul className="text-lg text-gray-300 mb-6 list-disc list-inside">
          <li>📌 Interfaz intuitiva y moderna.</li>
          <li>📊 Estadísticas en tiempo real para un mejor análisis.</li>
          <li>🔔 Notificaciones instantáneas para organizadores y participantes.</li>
          <li>📅 Gestión eficiente de eventos en un solo lugar.</li>
          <li>📤 Carga y administración de documentos relacionados con cada evento.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
