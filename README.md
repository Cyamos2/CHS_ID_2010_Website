# CHS Class of 2010 Reunion Website

A website for the CHS Class of 2010 20-Year Reunion, featuring a React frontend with Vite and a FastAPI backend.

## Project Structure

- **Frontend**: React + Vite + TailwindCSS (port 5173)
- **Backend**: FastAPI + Python (port 8000)

## Prerequisites

- Node.js (v18 or higher)
- Python 3.12 or higher
- npm (comes with Node.js)
- pip (comes with Python)

## Setup

### Frontend Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at http://localhost:5173

3. Build for production:
   ```bash
   npm run build
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Start the API server:
   ```bash
   python main.py
   ```
   The API will be available at http://localhost:8000

## Testing

### Frontend Tests

Run all frontend tests:
```bash
npm test
```

Run tests once (CI mode):
```bash
npm run test:run
```

Run tests with UI:
```bash
npm run test:ui
```

### Backend Tests

Run all backend tests:
```bash
cd backend
python -m pytest test_main.py -v
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Available Scripts

### Frontend Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:ui` - Run tests with UI

### Backend Scripts

- `python main.py` - Start API server
- `python -m pytest test_main.py -v` - Run tests

## API Endpoints

- `GET /` - Root endpoint
- `GET /api/health` - Health check
- `GET /api/rsvp` - Get all RSVPs
- `POST /api/rsvp` - Create RSVP
- `GET /api/classmates` - Get classmates directory
- `GET /api/memories` - Get shared memories
- `POST /api/memories` - Create memory

## Features

- **Home Page** - Welcome and overview
- **Schedule** - Event schedule and timeline
- **Directory** - Classmates directory
- **Memories** - Share and view memories
- **In Memoriam** - Remember classmates we've lost
- **Venue** - Event location and details
- **RSVP** - Register for the reunion
- **Contact** - Get in touch with organizers
- **Superlatives** - Vote on class superlatives