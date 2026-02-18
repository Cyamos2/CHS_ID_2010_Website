# Deployment Guide - CHS Class of 2010 Reunion Website

## Quick Start

### Local Development

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```
Visit http://localhost:5173

3. **Start backend (optional):**
```bash
cd backend
pip install -r requirements.txt
python main.py
```
API at http://localhost:8000

### Production Build

```bash
npm run build
```
Output in `dist/` directory - ready to deploy to any static host.

## Deployment Options

### Option 1: Netlify/Vercel (Recommended for Frontend)
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### Option 2: Traditional Web Host
1. Run `npm run build`
2. Upload contents of `dist/` folder to web server
3. Configure server to handle SPA routing (redirect all to index.html)

### Option 3: Full Stack with Backend
- Frontend: Deploy to Netlify/Vercel
- Backend: Deploy to Heroku, Railway, or AWS
- Update `VITE_API_URL` in `.env` with backend URL

## Content Management

### Update Schedule
Edit `src/data/schedule.json`

### Add/Update Classmates
Edit `src/data/classmates.json`

### Add Memorial Tributes
Edit `src/data/inMemoriam.json`:
```json
{
  "id": 2,
  "firstName": "Name",
  "lastName": "LastName",
  "dateOfBirth": "1991-MM-DD",
  "dateOfPassing": "20XX-MM-DD",
  "photoUrl": "/images/class-2010/photo.jpg",
  "biography": "Memorial text...",
  "obituaryUrl": "",
  "tributes": []
}
```

### Change Colors
Edit `tailwind.config.js` - all maroon/silver shades defined there.

### Add Photos
1. Copy images to `public/images/class-2010/` or `public/images/reunion-2030/`
2. Reference as `/images/class-2010/filename.jpg` in JSON files

## Environment Variables

Copy `.env.example` to `.env` and configure:
- `VITE_API_URL` - Backend API URL
- Database credentials (for backend)
- Email settings (for RSVP notifications)

## Support

For questions:
- Check README.md for detailed documentation
- Contact: reunion@chs2010.com

---

**The website is fully functional and ready to use!** 🎓
