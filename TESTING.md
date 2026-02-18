# Quick Testing Guide

This guide provides quick commands to test the CHS Class of 2010 Reunion Website.

## Automated Test Suite

Run the complete test suite:

```bash
./test-website.sh
```

This will:
- Install all dependencies
- Build the frontend
- Test the backend API
- Start both servers
- Verify all endpoints
- Provide a summary report

## Manual Testing

### Frontend Testing

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Linter:**
   ```bash
   npm run lint
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

4. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Then visit: http://localhost:5173

### Backend Testing

1. **Setup Virtual Environment:**
   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Create Static Directory:**
   ```bash
   mkdir -p static
   ```

4. **Start Server:**
   ```bash
   python main.py
   # Or with uvicorn:
   uvicorn main:app --reload
   ```
   API will be at: http://localhost:8000

### API Endpoint Testing

**Test Root Endpoint:**
```bash
curl http://localhost:8000/
```

**Test GET Endpoints:**
```bash
curl http://localhost:8000/api/classmates
curl http://localhost:8000/api/memories
curl http://localhost:8000/api/rsvp
```

**Test RSVP Submission:**
```bash
curl -X POST http://localhost:8000/api/rsvp \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "attending": "yes",
    "plusOne": false
  }'
```

**Test Contact Form:**
```bash
curl -X POST http://localhost:8000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Question",
    "message": "Test message"
  }'
```

## Browser Testing

### Pages to Test

Visit each page and verify content loads correctly:

- http://localhost:5173/ - Homepage
- http://localhost:5173/schedule - Event Schedule
- http://localhost:5173/directory - Classmate Directory
- http://localhost:5173/memories - Photo Memories
- http://localhost:5173/in-memoriam - In Memoriam
- http://localhost:5173/venue - Venue & Hotels
- http://localhost:5173/rsvp - RSVP Form
- http://localhost:5173/superlatives - Superlatives
- http://localhost:5173/contact - Contact Form

### Form Testing

1. **RSVP Form** (http://localhost:5173/rsvp)
   - Fill in all fields
   - Test validation
   - Submit form
   - Check browser console for errors

2. **Contact Form** (http://localhost:5173/contact)
   - Fill in all fields
   - Submit form
   - Check browser console for errors

## Troubleshooting

### Frontend Issues

**Port 5173 already in use:**
```bash
# Kill the process using the port
lsof -ti:5173 | xargs kill -9
# Or use a different port
npm run dev -- --port 3000
```

**Build fails:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Backend Issues

**Port 8000 already in use:**
```bash
# Kill the process using the port
lsof -ti:8000 | xargs kill -9
```

**Import errors:**
```bash
# Ensure virtual environment is activated
source backend/venv/bin/activate
# Reinstall dependencies
pip install -r backend/requirements.txt
```

**Static directory error:**
```bash
# Create the static directory
mkdir -p backend/static
```

## Continuous Testing

For development, run both servers in separate terminals:

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
cd backend
source venv/bin/activate
python main.py
```

Then test changes in real-time by visiting http://localhost:5173

## Test Results

For detailed test results, see [TEST_RESULTS.md](./TEST_RESULTS.md)

## Reporting Issues

When reporting issues, include:
1. What you were testing
2. Expected behavior
3. Actual behavior
4. Error messages (from browser console and terminal)
5. Steps to reproduce

---

**Last Updated:** 2026-02-18
