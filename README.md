# F5 Login App

A React-based login application built with Vite.

## Tech Stack

- React 18
- Vite 6
- Nginx (production)

## Development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Production Build

```bash
npm run build
npm run preview
```

## Docker

```bash
# Build
docker build -t f5-login-app .

# Run
docker run -p 8080:80 f5-login-app
```

The app will be available at `http://localhost:8080`.
