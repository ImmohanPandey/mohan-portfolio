# Revamp notes

## What changed

This is a full visual rebuild rather than a theme swap. The portfolio now behaves like a developer interface / operating system, while staying on the original Next.js + Framer Motion stack.

### New interaction layer
- One-per-session boot sequence
- `Cmd/Ctrl + K` command palette
- Active-section navigation
- Mobile full-screen navigation
- Mouse-reactive portrait scene
- Cursor lighting on fine-pointer devices
- Scanlines, rails, orbits, terminal states and code-window motion
- Reduced-motion fallback

### New presentation architecture
- Cinematic hero built around Mohan's portrait and developer console
- Animated technology ticker
- Builder manifesto instead of a generic bio block
- Engineering-lane breakdown across frontend, mobile, backend, data and cloud
- Project case studies with system views rather than generic cards
- Runtime / deployment-oriented experience section
- Terminal-style contact finale

## Editing content

Most portfolio project/stack content lives in:

`app/data.js`

Change project names, descriptions, technology tags and system labels there without touching the presentation code.

## Deployment

No new runtime dependencies were introduced. Existing Vercel deployment flow remains the same.
