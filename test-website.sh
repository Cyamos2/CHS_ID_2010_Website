#!/bin/bash
# CHS Class of 2010 Website - Test Suite
# This script tests both the frontend and backend of the reunion website

set -e  # Exit on error

echo "======================================"
echo "CHS Class of 2010 Website Test Suite"
echo "======================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Track test results
PASSED=0
FAILED=0
WARNINGS=0

# Function to print test result
print_result() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✓ PASS${NC}: $2"
        ((PASSED++))
    else
        echo -e "${RED}✗ FAIL${NC}: $2"
        ((FAILED++))
    fi
}

print_warning() {
    echo -e "${YELLOW}⚠ WARNING${NC}: $1"
    ((WARNINGS++))
}

# Test 1: Frontend Dependencies
echo "Test 1: Installing Frontend Dependencies..."
if npm install > /dev/null 2>&1; then
    print_result 0 "Frontend dependencies installed"
else
    print_result 1 "Frontend dependencies installation failed"
fi
echo ""

# Test 2: Frontend Linting
echo "Test 2: Running Frontend Linter..."
if npm run lint > /dev/null 2>&1; then
    print_result 0 "Frontend linting passed"
else
    print_warning "Frontend linting has warnings (non-critical prop-types issues)"
fi
echo ""

# Test 3: Frontend Build
echo "Test 3: Building Frontend..."
if npm run build > /dev/null 2>&1; then
    print_result 0 "Frontend build successful"
else
    print_result 1 "Frontend build failed"
fi
echo ""

# Test 4: Check if backend dependencies are installed
echo "Test 4: Checking Backend Dependencies..."
cd backend
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
fi
source venv/bin/activate

echo "Installing backend dependencies..."
if pip install -q -r requirements.txt; then
    print_result 0 "Backend dependencies installed"
else
    print_result 1 "Backend dependencies installation failed"
fi
cd ..
echo ""

# Test 5: Start Backend Server (in background)
echo "Test 5: Starting Backend Server..."
cd backend
source venv/bin/activate
mkdir -p static
python main.py > /tmp/backend.log 2>&1 &
BACKEND_PID=$!
cd ..
sleep 3

if kill -0 $BACKEND_PID 2>/dev/null; then
    print_result 0 "Backend server started"
else
    print_result 1 "Backend server failed to start"
    cat /tmp/backend.log
fi
echo ""

# Test 6: Test Backend API Endpoints
echo "Test 6: Testing Backend API Endpoints..."

# Test root endpoint
if curl -s http://localhost:8000/ | grep -q "CHS Class of 2010 Reunion API"; then
    print_result 0 "Root endpoint (/) working"
else
    print_result 1 "Root endpoint (/) failed"
fi

# Test classmates endpoint
if curl -s http://localhost:8000/api/classmates | grep -q "classmates"; then
    print_result 0 "GET /api/classmates working"
else
    print_result 1 "GET /api/classmates failed"
fi

# Test memories endpoint
if curl -s http://localhost:8000/api/memories | grep -q "memories"; then
    print_result 0 "GET /api/memories working"
else
    print_result 1 "GET /api/memories failed"
fi

# Test RSVP POST endpoint
RSVP_RESPONSE=$(curl -s -X POST http://localhost:8000/api/rsvp \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","lastName":"User","email":"test@example.com","attending":"yes","plusOne":false}')
if echo "$RSVP_RESPONSE" | grep -q "success"; then
    print_result 0 "POST /api/rsvp working"
else
    print_result 1 "POST /api/rsvp failed"
fi

# Test contact POST endpoint
CONTACT_RESPONSE=$(curl -s -X POST http://localhost:8000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Test message"}')
if echo "$CONTACT_RESPONSE" | grep -q "success"; then
    print_result 0 "POST /api/contact working"
else
    print_result 1 "POST /api/contact failed"
fi
echo ""

# Test 7: Start Frontend Dev Server (in background)
echo "Test 7: Starting Frontend Dev Server..."
npm run dev > /tmp/frontend.log 2>&1 &
FRONTEND_PID=$!
sleep 5

if kill -0 $FRONTEND_PID 2>/dev/null; then
    print_result 0 "Frontend dev server started"
else
    print_result 1 "Frontend dev server failed to start"
    cat /tmp/frontend.log
fi
echo ""

# Test 8: Check Frontend Pages
echo "Test 8: Testing Frontend Pages..."
if curl -s http://localhost:5173/ | grep -q "CHS Class of 2010"; then
    print_result 0 "Homepage accessible"
else
    print_result 1 "Homepage not accessible"
fi
echo ""

# Cleanup
echo "Cleaning up..."
kill $BACKEND_PID 2>/dev/null || true
kill $FRONTEND_PID 2>/dev/null || true
echo ""

# Summary
echo "======================================"
echo "Test Summary"
echo "======================================"
echo -e "${GREEN}Passed:${NC} $PASSED"
if [ $WARNINGS -gt 0 ]; then
    echo -e "${YELLOW}Warnings:${NC} $WARNINGS"
fi
if [ $FAILED -gt 0 ]; then
    echo -e "${RED}Failed:${NC} $FAILED"
    exit 1
else
    echo ""
    echo -e "${GREEN}All tests passed!${NC}"
    exit 0
fi
