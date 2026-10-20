# 🎓 EduAnimates Academy
> Plataforma Educativa Virtual y Laboratorio Interactivo de Animación Web

![EduAnimates Banner](https://img.shields.io/badge/Estado-Finalizado-success?style=for-the-badge)
![Licencia](https://img.shields.io/badge/Licencia-MIT-blue?style=for-the-badge)
![Bootstrap](https://img.shields.io/badge/Bootstrap-v5.3-purple?style=for-the-badge)
![GSAP](https://img.shields.io/badge/GSAP-v3.12-green?style=for-the-badge)

**EduAnimates Academy** es una aplicación web interactiva desarrollada para la unidad didáctica de **Animación Web** e **Ilustración Grafica**. La plataforma combina una Landing Page moderna y optimizada para la conversión de estudiantes con un **Laboratorio Interactivo** donde se demuestran visualmente los conceptos clave del sílabo oficial (timing, easing, keyframes, transformaciones 2D/3D, manipulación del DOM y librerías como GSAP).

---

## 🚀 Características Principales

- **Diseño Moderno y UI/UX Intuitivo**: Paleta de colores suave en tonos pastel y modo oscuro/atenuado (*Soft Dark*), tarjetas con sombras sutiles y efectos hover.
- **Totalmente Responsive**: Adaptable a dispositivos móviles, tablets y monitores de alta resolución gracias a Bootstrap 5 y CSS Grid/Flexbox.
- **Laboratorio del Sílabo Interactivo**:
  - ⏱️ **Timing & Easing**: Pruebas en tiempo real de curvas de aceleración (`ease-in-out`, `cubic-bezier`).
  - 🔄 **Transformaciones 2D/3D**: Tarjeta interactiva con efecto *3D Flip* en 180°.
  - 🎬 **Keyframes & Microinteracciones**: *Loaders* animados y fotogramas clave en CSS.
  - 🖱️ **Interacciones JS & DOM**: Detector dinámico de posición de cursor (coordenadas X/Y).
  - 🎨 **GSAP & Animaciones SVG**: Dibujo de trazo vectorial en tiempo real mediante GreenSock.
  - ⚡ **Optimización 60 FPS**: Indicador visual de aceleración por hardware (`will-change`, `transform`, `opacity`).
- **Filtro de Cursos Dinámico**: Navegación por categorías (Programación, Diseño, IA, Web) sin recargas de página.
- **Componentes Interactivos**: Carrusel de testimonios, formulario modal con notificación Toast, navegación *Sticky* con efecto *Glassmorphism* y botón de retorno al inicio.
- **Accesibilidad**: Sorteo de animaciones respetando `@media (prefers-reduced-motion: reduce)`.

---

## 🛠️ Stack Tecnológico

- **Estructura**: HTML5 Semántico.
- **Estilos y Maquetación**: CSS3 (Variables Custom, Flexbox, CSS Grid) y [Bootstrap 5.3](https://getbootstrap.com/).
- **Iconografía**: [FontAwesome 6](https://fontawesome.com/) y Bootstrap Icons.
- **Interactividad**: JavaScript vainilla (ES6+) para manipulación del DOM y eventos.
- **Librería de Animación**: [GSAP 3 (GreenSock)](https://greensock.com/gsap/) para animaciones SVG complejas.

---

## 📂 Estructura del Proyecto

```text
Proyecto/
│
├── HTML/  
│   ├── index.html          # Código fuente de la aplicación (Single-Page App)
├── CSS/  
│   ├── estilos.css         # Estilos y animaciónes
├── JS/  
│   ├── script.js  
├── Media/                  # Recursos multimedia
│   ├── LOGO.png            # Insignia institucional
│   └── imagen1.jpg
│   └── imagen2.jpg
│   └── imagen3.jpg
├── README.md               # Documentación del proyecto
