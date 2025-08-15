# Level‑Up Gamer — Tienda Online

## 📌 Descripción

Proyecto académico para desarrollar una tienda online dirigida a la comunidad gamer en Chile. Incluye un catálogo de productos, carrito de compras, sistema de reseñas y programa de referidos. El frontend se realizará con **HTML, CSS y JavaScript**. Las tecnologías para backend y base de datos se definirán más adelante.

---

## 🗂️ Arquitectura del proyecto

```
level-up-gamer/
├─ frontend/        # HTML, CSS, JavaScript
├─ backend/         # Tecnología por definir
├─ database/        # Motor por definir
├─ docs/            # Documentación
└─ README.md
```

---

## 💻 Guía detallada para manejar Git & GitHub

### 1. Clonar el repositorio

Este comando copia el repositorio remoto a tu computador.

```bash
git clone https://github.com/xDaniel-R/Tienda-LEVEL-UP-GAMER.git
cd Tienda-LEVEL-UP-GAMER
```

> **Tip:** Haz esto solo la primera vez que descargues el proyecto. Después, para actualizar, usa `git pull`.

---

### 2. Crear una nueva rama

Siempre crea una rama para cada nueva funcionalidad o corrección. Esto evita romper el código en `main`.

```bash
git checkout main       # Asegúrate de estar en main
git pull origin main    # Actualiza tu main local
git checkout -b feature/nombre-de-la-tarea # Este comando crea la rama y automaticamente te mueve a ella.
```

> Ejemplo: `git checkout -b feature/catalogo-productos`

---

### 3. Moverse entre ramas

```bash
git branch              # Lista todas las ramas
git checkout nombre-de-rama   # Cambia a la rama especificada
```

> **Tip:** Guarda siempre tus cambios antes de cambiar de rama para evitar conflictos.

---

### 4. Guardar cambios

**Agregar archivos al área de preparación (staging):**

```bash
git add .               # Agrega todos los cambios
```

**Crear un commit con mensaje descriptivo:**

```bash
git commit -m "feat: agrega filtros al catálogo"
```

> Usa mensajes claros siguiendo buenas prácticas, por ejemplo: `feat` (nueva función), `fix` (corrección de bug), `docs` (documentación).

---

### 5. Subir tu rama al repositorio remoto

```bash
git push -u origin nombre-de-rama
```

> La primera vez usa `-u` para establecer el seguimiento con el remoto.

---

### 6. Mantener tu rama actualizada con `main`

Antes de hacer un Pull Request, sincroniza tu rama con los últimos cambios de `main`:

```bash
git fetch origin
git merge origin/main   # Une main a tu rama actual
```

O bien, para un historial más limpio:

```bash
git fetch origin
git rebase origin/main
```

> Si hay conflictos, resuélvelos, guarda y continúa con `git rebase --continue`.

---

### 7. Subir cambios a `main` siguiendo buenas prácticas

1. Sube tu rama con `git push`.
2. En GitHub, abre un **Pull Request** hacia `main`.
3. Pide revisión a un compañero.
4. Una vez aprobado, haz **merge** (de preferencia *Squash and Merge*).
5. Elimina la rama tanto en remoto como local:

```bash
git branch -d nombre-de-rama        # Local
git push origin --delete nombre-de-rama   # Remoto
```
