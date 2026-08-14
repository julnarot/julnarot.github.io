# [Analytics] Rastrear eventos personalizados en GA4

## Contexto

El tracking base de Google Analytics (GA4) ya está configurado en `index.html`
con el Measurement ID `G-QPYBS8SFGX` (inyectado vía `VITE_GA4_ID`). Este issue
cubre el rastreo de interacciones específicas del portfolio para entender cómo
los usuarios usan el contenido.

## Eventos a implementar

### 1. Cambio de idioma
- **Evento**: `language_changed`
- **Lugar**: `src/components/features/popupLanguageSelector.jsx`
- **Parámetros**: `{ language: 'en' | 'es' }`
- **Cuándo**: al seleccionar un idioma en el popup Language

### 2. Apertura de detalle de proyecto
- **Evento**: `project_open`
- **Lugar**: `src/App.jsx` (función `toggle`)
- **Parámetros**: `{ company, project }`
- **Cuándo**: al hacer clic en un proyecto de Work Experience

### 3. Click en redes/contacto
- **Evento**: `contact_click`
- **Lugar**: `src/components/features/contact.jsx`
- **Parámetros**: `{ network: 'linkedin' | 'github' | 'twitter' | 'email' }`
- **Cuándo**: al hacer clic en cada enlace del panel Contact
- **Nota**: si **Enhanced Measurement** está habilitado en el Data Stream, los clics
  salientes (LinkedIn/GitHub/X) ya se rastrean automáticamente como *outbound
  clicks*. Este evento solo aportaría el parámetro `network` y el caso del email
  (mailto). Evaluar si vale la pena duplicar el tracking.

### 4. Descarga de CV (PDF)
- **Evento**: `download_cv`
- **Lugar**: `src/constants/popup.js` (acción File > Print)
- **Parámetros**: `{ language: 'en' | 'es' }`
- **Cuándo**: al descargar el PDF del perfil

### 5. Apertura de About
- **Evento**: `about_open`
- **Lugar**: `src/App.jsx` (submenú About)
- **Parámetros**: ninguno
- **Cuándo**: al abrir Help > About

## Implementación

- Crear utilidad `src/services/analytics.js` con helper `trackEvent(name, params)`
  que llame a `window.gtag`.
- Integrar la llamada en cada punto indicado.
- Verificar en GA4 > Realtime que los eventos aparezcan.

## Criterios de aceptación

- [ ] Helper `trackEvent` en `src/services/analytics.js`
- [ ] `language_changed` con parámetro `language`
- [ ] `project_open` con `company` y `project`
- [ ] `contact_click` con `network`
- [ ] `download_cv` con `language`
- [ ] `about_open`
- [ ] Eventos visibles en GA4 Realtime tras deploy
