# Configuración Global — Daniel Malpica

## Identidad del desarrollador
- Stack principal: Node.js, Astro, React, Tailwind CSS v4, shadcn/ui
- Proyectos frecuentes: sitios para PyMEs mexicanas, dashboards, automatizaciones n8n
- Idioma de trabajo: español (código en inglés, comentarios en español)
- Deploy: Cloudflare Pages / Vercel
- Estilo de respuesta: directo, estructurado, sin relleno

---

## Reglas universales

- Antes de implementar cualquier cosa: explorar el codebase
- Planear antes de codear en tareas complejas
- Nunca hacer commit de API keys, credenciales o `.env`
- Commits en inglés, concisos y atómicos
- Preguntar antes de cambios arquitectónicos
- Preferir soluciones sin dependencias extra cuando sea posible

---

## Detección de proyecto y skills a instalar

Al iniciar un proyecto nuevo, detecta el tipo y activa lo correspondiente:

### Sitio web / landing / portfolio
**Instalar:**
- `bitjaru/styleseed` → reglas de diseño no genérico
- shadcn/ui skill (`npx shadcn skill`) → si el proyecto usa shadcn
- `brandmd` (`npx brandmd <url-del-cliente>`) → si hay referencia visual del cliente

**Aplicar:**
- Usa skins de Stripe/Linear/Vercel como base si no hay brief de diseño
- DESIGN.md en raíz del proyecto con tokens de la marca

### Dashboard / admin panel
**Instalar:**
- shadcn/ui skill
- styleseed (skin: Notion o Linear)
- MCP Playwright si se requiere testing visual

**Aplicar:**
- Componentes de tabla, chart y formulario primero
- Dark mode por defecto

### Automatización / n8n / backend
**No instalar** skills de diseño.
**Instalar:**
- Hook de seguridad (bloquear `rm -rf`, force-push a main)
- `/commit-smart` command si no existe

### WordPress / sitio cliente legacy
**Instalar:**
- Solo DESIGN.md con tokens extraídos del sitio existente
- No instalar styleseed (conflicto de stack)

### API / microservicio
**No instalar** skills visuales.
**Aplicar:**
- Tipos estrictos en todas las funciones
- Documentar cada endpoint en el CLAUDE.md del proyecto

---

## Plugins globales activos (ya instalados)

Estos están disponibles en todos los proyectos sin reinstalar:

| Plugin/Comando | Función |
|---|---|
| `/commit` | Commit atómico con mensaje claro |
| `/debug` | Debug sistemático paso a paso |
| `/refactor` | Limpieza de código con análisis |
| `/review` | Code review antes de PR |
| `/setup-repo` | Scaffold inicial de proyecto nuevo |

---

## MCPs globales configurados

- **Playwright MCP** → testing visual, disponible si el proyecto lo requiere
- **GitHub MCP** → gestión de PRs e issues

---

## Al iniciar sesión en un proyecto nuevo

1. Detectar tipo de proyecto (leer `package.json`, estructura de carpetas)
2. Verificar si existe `CLAUDE.md` local → si no, generarlo con `/setup-repo`
3. Instalar skills según la tabla de detección arriba
4. Si es sitio web: verificar si hay brief o URL de referencia del cliente
5. Reportar qué se instaló y qué comandos están disponibles

---

## Notas de stack

- Tailwind v4 (no v3): sintaxis CSS nativa, sin `tailwind.config.js`
- React 18 + TypeScript estricto
- Astro para sitios estáticos → no usar React innecesariamente
- Cloudflare Pages: no usar APIs de Node.js no soportadas en Workers
