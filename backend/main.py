from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

app = FastAPI(title="CHS Class of 2010 Reunion API")

# CORS middleware for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
async def root():
    return {"message": "CHS Class of 2010 Reunion API"}

@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

# RSVP endpoints
@app.post("/api/rsvp")
async def create_rsvp(rsvp_data: dict):
    # TODO: Implement RSVP creation
    return {"message": "RSVP received", "data": rsvp_data}

@app.get("/api/rsvp")
async def get_rsvps():
    # TODO: Implement RSVP retrieval
    return {"rsvps": []}

# Classmates endpoints
@app.get("/api/classmates")
async def get_classmates():
    # TODO: Implement classmates retrieval
    return {"classmates": []}

# Memories endpoints
@app.get("/api/memories")
async def get_memories():
    # TODO: Implement memories retrieval
    return {"memories": []}

@app.post("/api/memories")
async def create_memory(memory_data: dict):
    # TODO: Implement memory creation
    return {"message": "Memory created", "data": memory_data}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
