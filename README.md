# FakeNewsDetector
Pd: el token api lo deje asi por si querian correrlo local no tuvieran que crear uno en hugging face
FakeNewsDetector es una herramienta diseñada para ayudar a identificar y analizar noticias falsas utilizando técnicas avanzadas de procesamiento de lenguaje natural y aprendizaje automático, el link del despliegue proyecto esta adjunto

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

1. **Entrada del Texto:** El texto del artículo se envía al modelo `winterForestStump/Roberta-fake-news-detector` que es un FineTuning basado en el LLm
Roberta de Facebook con mas de 8000 mil noticias de  https://euvsdisinfo.eu/.
2. **Análisis del Texto:** El modelo analiza el contenido utilizando técnicas de procesamiento de lenguaje natural, el modelo se basa en parametros como el tipo del lenguaje en que fue escrita 
la noticia asi como la mencion de fuentes confiables y diferentes parametros.
3. **Detección de Veracidad:** Basado en el análisis, el modelo clasifica el artículo como verdadero o falso.
4. **Resultado:** El resultado se muestra en la interfaz de usuario, permitiendo al usuario verificar la veracidad del artículo.

## Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/ELperrocode/FakeNewsDetector.git
-- Instalar dependencias:
-- cd FakeNewsDetector
-- npm install
-- Ejecutar la aplicación:
-- npm start
-- Visitar en el navegador:
-- Abre http://localhost:3000 en tu navegador para ver la aplicación en funcionamiento.
