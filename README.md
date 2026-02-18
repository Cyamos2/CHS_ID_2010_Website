# CHS Class of 2010 Reunion Website

A web application for the Class of 2010 20-year reunion celebration. Built with React, Tailwind CSS, and Python FastAPI.

## Features

- **Home Page**: Welcome message and event highlights
- **Schedule**: Detailed reunion timeline and activities
- **Directory**: Searchable classmate directory
- **Memories**: Share and view class memories
- **In Memoriam**: Honor classmates no longer with us
- **Venue**: Location and hotel information
- **RSVP**: Online registration form
- **Superlatives**: Fun class awards
- **Contact**: Reach the reunion committee

## Tech Stack

### Frontend
- React 18
- React Router v6
- Tailwind CSS
- Vite

### Backend
- Python FastAPI
- CORS middleware
- Static file serving

## Color Scheme

The site uses the school colors:
- **Maroon**: `#800020` (Primary)
- **Silver**: `#c0c0c0` (Secondary)

## Project Structure

```
class-of-2010-reunion/
├── public/              # Static assets
│   ├── images/          # Image directories
│   └── favicon.ico      # Site favicon
├── src/
│   ├── assets/          # Fonts and icons
│   ├── components/      # Reusable React components
│   ├── pages/           # Page components
│   ├── data/            # JSON data files
│   ├── styles/          # CSS files
│   └── App.jsx          # Main app component
├── backend/
│   ├── api/             # API routes
│   ├── models/          # Data models
│   ├── static/          # Backend static files
│   └── main.py          # FastAPI application
└── Configuration files
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- Python (v3.9+)

### Installation

1. Clone the repository
```bash
git clone https://github.com/Cyamos2/CHS_ID_2010_Website.git
cd CHS_ID_2010_Website
```

2. Install frontend dependencies
```bash
npm install
```

3. Install backend dependencies
```bash
cd backend
pip install -r requirements.txt
```

### Development

1. Start the frontend development server:
```bash
npm run dev
```

2. In a separate terminal, start the backend server:
```bash
cd backend
python main.py
```

The frontend will be available at `http://localhost:5173`
The backend API will be available at `http://localhost:8000`

### Build for Production

```bash
npm run build
```

## Contributing

This is a private reunion website. For questions or to get involved, please contact the reunion committee.

## License

Private - Class of 2010 Reunion Committee