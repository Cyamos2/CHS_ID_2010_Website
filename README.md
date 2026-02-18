# CHS Class of 2010 Reunion Website

A modern, responsive website for the Coeur d'Alene High School Class of 2010 20-year reunion. Built with React, Tailwind CSS, and FastAPI.

## 🎨 Design

**School Colors:** Maroon (#941d43) and Silver (#d1d5db)

The website features a clean, modern design with the school's official colors prominently displayed throughout. The color scheme is centrally managed in `tailwind.config.js` for easy updates.

## 📁 Project Structure

```
class-of-2010-reunion/
├── public/                  # Static assets
│   ├── images/
│   │   ├── class-2010/     # High school photos
│   │   ├── reunion-2030/   # Reunion event photos
│   │   └── logos/          # School logos and branding
│   └── favicon.ico
│
├── src/                     # React frontend
│   ├── assets/
│   │   ├── fonts/          # Custom fonts
│   │   └── icons/          # Icon assets
│   ├── components/         # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── RSVPForm.jsx
│   │   ├── MemoryCard.jsx
│   │   ├── TributeCard.jsx
│   │   └── ClassmateCard.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── Schedule.jsx
│   │   ├── Directory.jsx
│   │   ├── Memories.jsx
│   │   ├── InMemoriam.jsx
│   │   ├── Venue.jsx
│   │   ├── RSVP.jsx
│   │   ├── Contact.jsx
│   │   └── Superlatives.jsx
│   ├── data/               # JSON data files
│   │   ├── classmates.json
│   │   ├── schedule.json
│   │   ├── memories.json
│   │   ├── inMemoriam.json
│   │   └── hotels.json
│   ├── styles/
│   │   ├── global.css      # Global styles and Tailwind
│   │   └── theme.css       # Theme configuration
│   └── App.jsx
│
├── backend/                 # FastAPI backend
│   ├── api/                # API route handlers
│   ├── models/             # Database models
│   ├── static/             # Static files for backend
│   └── main.py             # FastAPI application
│
├── .env                     # Environment variables (not in git)
├── .env.example            # Environment template
├── package.json
└── tailwind.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Python 3.9+
- PostgreSQL (optional, for production)

### Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

1. Create a virtual environment:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. Copy `.env.example` to `.env` and configure your environment variables

4. Start the backend server:
```bash
python main.py
# Or with uvicorn:
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`

## 🎨 Customizing the Theme

### Changing Colors

All colors are defined in `tailwind.config.js`. To update the school colors:

1. Open `tailwind.config.js`
2. Modify the `maroon` and `silver` color palettes
3. The changes will automatically apply throughout the site

Example:
```javascript
colors: {
  maroon: {
    700: '#b01f4a',  // Primary maroon
    800: '#941d43',  // Headings
    900: '#7f1c3e',  // Navbar
  },
  // ... more shades
}
```

### Common Color Usage

- **Maroon**
  - `maroon-700`: Primary buttons, links
  - `maroon-800`: Headings, important text
  - `maroon-900`: Navbar, footer

- **Silver**
  - `silver-50`, `silver-100`: Light backgrounds
  - `silver-300`: Borders, secondary buttons
  - `silver-600`: Secondary text

## 📝 Managing Content

### Adding/Updating Classmates

Edit `src/data/classmates.json`:

```json
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "nickname": "JD",
  "email": "john@example.com",
  "city": "Boise",
  "state": "ID",
  "occupation": "Software Engineer",
  "isAttending": true
}
```

### Managing Schedule

Edit `src/data/schedule.json` to add or modify events.

### Adding Memories

Edit `src/data/memories.json` or implement the upload functionality via the backend API.

### In Memoriam Updates

**Important:** When adding tributes for classmates who have passed away:

1. Edit `src/data/inMemoriam.json`
2. Add a new entry with their information:

```json
{
  "id": 1,
  "firstName": "Name",
  "lastName": "LastName",
  "dateOfBirth": "1991-MM-DD",
  "dateOfPassing": "20XX-MM-DD",
  "photoUrl": "/images/class-2010/photo.jpg",
  "biography": "Memorial text here...",
  "obituaryUrl": "https://...",
  "tributes": []
}
```

3. Classmates can add tributes through the Contact form

## 🛠️ Development

### Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Linting

```bash
npm run lint
```

## 📧 Features

- **RSVP Management**: Online RSVP with dietary restrictions and plus-one support
- **Classmate Directory**: Searchable directory with attendance status
- **Photo Memories**: Share and view photos from high school
- **In Memoriam**: Honor classmates who have passed
- **Event Schedule**: Detailed schedule of reunion activities
- **Venue Information**: Hotel blocks and location details
- **Contact Form**: Easy communication with organizers
- **Superlatives**: View original class superlatives and vote on new ones

## 🔐 Security

- Environment variables for sensitive data
- CORS configured for API security
- Input validation on forms
- Prepared for authentication/authorization implementation

## 🤝 Contributing

To add features or fix issues:

1. Make your changes
2. Test thoroughly
3. Update documentation if needed
4. Submit changes to the organizing committee

## 📞 Support

For questions or issues with the website:
- Email: reunion@chs2010.com
- Facebook Group: CHS Class of 2010 Reunion

## 📄 License

This project is private and for use by the CHS Class of 2010 only.

---

**Go Centennial Patriots! 🏈**
