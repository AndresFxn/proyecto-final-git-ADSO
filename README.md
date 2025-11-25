# Proyecto Final Git – ADSO

## Objetivo del proyecto
El objetivo de este proyecto es demostrar el uso correcto de Git y GitHub para el control de versiones. Incluye la creación de un repositorio, manejo de ramas, solución de problemas comunes, aplicación de comandos básicos y subida de cambios al repositorio remoto. También busca evidenciar el flujo de trabajo profesional utilizado en proyectos reales.

## Integrante
- Andrés Felipe Forero Lopez

## Fecha
24 de noviembre de 2025

## ¿Qué es Git? (mínimo 8 líneas)
Git es un sistema de control de versiones que permite guardar el historial de cambios de un proyecto. Con Git puedes ver quién modificó qué, cuándo y por qué. También facilita trabajar en equipo porque cada persona puede crear ramas independientes sin dañar el proyecto principal. Git permite regresar a versiones anteriores si algo se daña. Además, ayuda a mantener el código organizado, documentado y seguro. Hoy en día es una herramienta fundamental en el desarrollo de software. Gracias a Git, los proyectos pueden crecer sin perder el control.

## 10 comandos de Git explicados

1. **git init** – Inicializa un repositorio en una carpeta.
2. **git add .** – Agrega todos los archivos al área de preparación.
3. **git commit -m "mensaje"** – Guarda un punto en el historial con un mensaje.
4. **git status** – Muestra el estado actual del repositorio.
5. **git log** – Muestra los commits realizados.
6. **git branch** – Lista o crea ramas nuevas.
7. **git checkout rama** – Cambia de una rama a otra.
8. **git merge rama** – Fusiona una rama dentro de la rama actual.
9. **git push** – Envía los cambios al repositorio remoto (GitHub).
10. **git pull** – Trae los cambios que están en GitHub al PC.

## Flujo de trabajo recomendado
1. Crear o modificar archivos.  
2. Ejecutar `git add` para preparar los cambios.  
3. Ejecutar `git commit` para guardar el cambio.  
4. Ejecutar `git push` para subirlo a GitHub.  
5. Crear ramas para nuevas funcionalidades.  
6. Hacer merge cuando todo esté listo.  

## Problemas encontrados hoy
- El repositorio comenzó vacío.
- Aparecía el mensaje “nothing to commit, working tree clean”.
- Tocó configurar Git de nuevo.
- Hubo dudas sobre cómo subir el proyecto desde el Escritorio.
- Se solucionó todo usando `git init`, `git remote add` y `git push -u origin main`.

## Conclusión del día
Hoy aprendí a inicializar un repositorio, conectarlo a GitHub, hacer commits, subir cambios, manejar ramas y resolver errores básicos de Git. Ya entiendo cómo funciona el flujo completo y puedo seguir avanzando en el proyecto.

## Problemas del día
- Algunos conflictos al hacer merge
- Archivos ocultos no detectados por Git

## ¿Qué aprendí hoy?
- Uso completo de ramas y pull requests
- Cómo manejar archivos ignorados (.gitignore)
- Buenas prácticas de commits y documentación

## Lo más difícil
- Resolver conflictos y asegurar que todo se mantenga limpio
- Organizar tareas y estado de las mismas

## Conclusión del taller
Este ejercicio simula un flujo profesional real, integrando ramas, PRs, merges y documentación. Es muy útil para preparar un flujo de trabajo profesional en proyectos colaborativos.
