# FakeNewsDetector

FakeNewsDetector es una herramienta diseñada para ayudar a identificar y analizar noticias falsas utilizando técnicas avanzadas de procesamiento de lenguaje natural y aprendizaje automático.

## Descripción

Este proyecto tiene como objetivo proporcionar una solución eficaz para detectar noticias falsas en múltiples fuentes de información. Utiliza TypeScript como lenguaje principal y se despliega en la web para facilitar su acceso y uso.

## Características

- **Detección de noticias falsas:** Analiza el contenido de artículos para determinar su veracidad.
- **Interfaz de usuario intuitiva:** Proporciona una interfaz amigable para que los usuarios puedan verificar noticias fácilmente.
- **Actualizaciones en tiempo real:** Mantiene la base de datos actualizada con las últimas noticias y análisis.

## Tecnologías Utilizadas

- **TypeScript:** Para el desarrollo del backend y frontend.
- **JavaScript, HTML, CSS:** Para la construcción de la interfaz de usuario.
- **Vercel:** Para el despliegue del proyecto.

## Modelo Utilizado
Para la detección de noticias falsas, utilizamos el modelo BART Large MNLI de Facebook, proporcionado por Hugging Face. Este modelo es conocido por su capacidad de entender y analizar el lenguaje natural, lo que lo hace ideal para nuestro propósito de identificar noticias falsas.

Funcionamiento del Modelo
Entrada del Texto: El texto del artículo se envía al modelo BART Large MNLI.
Análisis del Texto: El modelo analiza el contenido utilizando técnicas de procesamiento de lenguaje natural.
Detección de Veracidad: Basado en el análisis, el modelo clasifica el artículo como verdadero o falso.
Resultado: El resultado se muestra en la interfaz de usuario, permitiendo al usuario verificar la veracidad del artículo.

## Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/ELperrocode/FakeNewsDetector.git
Instalar dependencias:
cd FakeNewsDetector
npm install
Ejecutar la aplicación:
npm start
Visitar en el navegador:
Abre http://localhost:3000 en tu navegador para ver la aplicación en funcionamiento.
