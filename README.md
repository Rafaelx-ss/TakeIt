
# 🎯 Take IT - Proyecto Web

Bienvenido a **Take IT**, un proyecto web moderno que utiliza **TailwindCSS** para un diseño elegante, minimalista y completamente personalizable. 

## 🚀 Instalación

Sigue los siguientes pasos para instalar y configurar el proyecto:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/take-it.git
   ```
2. Navega a la carpeta del proyecto:
   ```bash
   cd take-it
   ```
3. Instala las dependencias necesarias utilizando **npm**:
   ```bash
   npm install
   ```

## 🎨 Configuración de TailwindCSS

Este proyecto está configurado para utilizar **TailwindCSS** con una paleta de colores personalizada y fuentes elegantes.

- Colores definidos: 
  - `primary`: un elegante negro
  - `secondary`: gris oscuro
  - `accent`: dorado para resaltar
  - `background`: negro profundo para fondos
  - `surface`: negro suave para tarjetas y superficies
  - `text`: blanco, junto con un gris claro `text-light`
  - Colores para éxito (`success`: verde) y error (`error`: rojo) también están incluidos.

### 🖋 Fuentes

El proyecto utiliza la fuente **Poppins** en diferentes grosores para un aspecto limpio y profesional.

## 🌐 Uso de TailwindCSS en el proyecto

Ya que las configuraciones de **Tailwind** están listas, puedes comenzar a usar las clases predefinidas en tus componentes HTML o JSX. Aquí te damos un resumen de algunas clases personalizadas que hemos creado para que empieces fácilmente:

- **Botones**: 
  - `.btn-primary` para botones con el color dorado (accent).
  - `.btn-secondary` para botones con un estilo oscuro.
  - `.btn-outline` para botones con borde dorado y estilo más ligero.
- **Tarjetas**:
  - Usa la clase `.card` para mostrar contenido dentro de tarjetas elegantes con sombra y transiciones.
- **Inputs**:
  - Los campos de entrada utilizan la clase `.input`, ya están diseñados para ajustarse al estilo general de la interfaz.

## ⚙️ Configuración de Tailwind

El archivo `tailwind.config.js` ya está configurado para analizar todos los archivos dentro de las rutas:
- `./index.html`
- `./src/**/*.{js,ts,jsx,tsx}`

Además, hemos extendido el tema con colores y fuentes que se ajustan a las necesidades del proyecto.

## 🛠 Scripts útiles

- Inicia el servidor de desarrollo:
  ```bash
  npm run dev
  ```
- Construye el proyecto para producción:
  ```bash
  npm run build
  ```

¡Listo! Ahora puedes comenzar a personalizar tu proyecto y hacer que **Take IT** sea aún más increíble. 

## 👨‍💻 Autor

Desarrollado por 
- [Rafael Solis](https://github.com/Rafaelx-ss).
- [Kevin Padilla]()
- [Jose Pol Ku]()
- [Hector Mendoza]()
- [Jose Martinez]()
