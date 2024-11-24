# FakeNewsDetector
Pd: el token api lo deje asi por si querian correrlo local no tuvieran que crear uno en hugging face
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

Para la detección de noticias falsas, utilizamos el modelo `winterForestStump/Roberta-fake-news-detector`, proporcionado por Hugging Face. Este modelo esta preentrenado con miles de noticias tanto falsas como verdaderas lo que lo hace excelente como herramienta de discriminacion.

## Funcionamiento del Modelo

1. **Entrada del Texto:** El texto del artículo se envía al modelo `winterForestStump/Roberta-fake-news-detector`.
2. **Traducción del Texto:** Si el texto está en español, se traduce al inglés utilizando el modelo `Helsinki-NLP/opus-mt-es-en` ya que el modelo anterior solo funciona en ingles y es el unico que estaba prentrenado para esta tarea y disponible a traves de api.
3. **Análisis del Texto:** El modelo analiza el contenido utilizando técnicas de procesamiento de lenguaje natural.
4. **Detección de Veracidad:** Basado en el análisis, el modelo clasifica el artículo como verdadero o falso.
5. **Resultado:** El resultado se muestra en la interfaz de usuario, permitiendo al usuario verificar la veracidad del artículo.

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
PD: el ApiKey lo deje así por si iban a descargar el programa y ejecutarlo local no tener que crear uno, no crean que haria esas cosas en un entorno real jasj
