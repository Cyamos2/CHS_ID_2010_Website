"""
FastAPI Backend for CHS Class of 2010 Reunion Website

This backend provides API endpoints for:
- RSVP submissions
- Classmate directory management
- Memory uploads and management
- In Memoriam tributes
- Contact form submissions

To run: uvicorn main:app --reload
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

app = FastAPI(
    title="CHS 2010 Reunion API",
    description="API for the Class of 2010 reunion website",
    version="1.0.0"
)

# CORS middleware to allow requests from React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve static files
app.mount("/static", StaticFiles(directory="static"), name="static")


# Pydantic models for request/response
class RSVPSubmission(BaseModel):
    firstName: str
    lastName: str
    email: str
    phone: Optional[str] = None
    attending: str
    plusOne: bool = False
    plusOneName: Optional[str] = None
    dietaryRestrictions: Optional[str] = None
    comments: Optional[str] = None
    submittedAt: Optional[datetime] = None


class ContactSubmission(BaseModel):
    name: str
    email: str
    subject: str
    message: str
    submittedAt: Optional[datetime] = None


class MemoryUpload(BaseModel):
    title: str
    description: str
    author: str
    tags: List[str] = []
    imageUrl: Optional[str] = None


# Root endpoint
@app.get("/")
def read_root():
    return {
        "message": "CHS Class of 2010 Reunion API",
        "version": "1.0.0",
        "endpoints": {
            "rsvp": "/api/rsvp",
            "contact": "/api/contact",
            "memories": "/api/memories",
            "classmates": "/api/classmates"
        }
    }


# RSVP endpoints
@app.post("/api/rsvp")
def submit_rsvp(rsvp: RSVPSubmission):
    """
    Submit RSVP for reunion attendance.
    TODO: Save to database and send confirmation email
    """
    rsvp.submittedAt = datetime.now()
    
    # TODO: Implement database storage
    # TODO: Send confirmation email
    
    return {
        "success": True,
        "message": "RSVP submitted successfully",
        "data": rsvp
    }


@app.get("/api/rsvp")
def get_rsvps():
    """
    Get all RSVP submissions (admin only)
    TODO: Add authentication
    """
    # TODO: Fetch from database
    return {"rsvps": []}


# Contact form endpoint
@app.post("/api/contact")
def submit_contact(contact: ContactSubmission):
    """
    Submit contact form message
    TODO: Save to database and send notification email
    """
    contact.submittedAt = datetime.now()
    
    # TODO: Implement database storage
    # TODO: Send notification email to organizers
    
    return {
        "success": True,
        "message": "Message sent successfully"
    }


# Memory endpoints
@app.get("/api/memories")
def get_memories():
    """
    Get all shared memories
    TODO: Fetch from database
    """
    # TODO: Fetch from database
    return {"memories": []}


@app.post("/api/memories")
def upload_memory(memory: MemoryUpload):
    """
    Upload a new memory
    TODO: Handle image upload and save to database
    """
    # TODO: Implement file upload handling
    # TODO: Save to database
    
    return {
        "success": True,
        "message": "Memory uploaded successfully",
        "data": memory
    }


# Classmate endpoints
@app.get("/api/classmates")
def get_classmates():
    """
    Get classmate directory
    TODO: Fetch from database
    """
    # TODO: Fetch from database
    return {"classmates": []}


@app.put("/api/classmates/{classmate_id}")
def update_classmate(classmate_id: int, data: dict):
    """
    Update classmate information
    TODO: Add authentication and database update
    """
    # TODO: Verify authentication
    # TODO: Update database
    
    return {
        "success": True,
        "message": "Profile updated successfully"
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
