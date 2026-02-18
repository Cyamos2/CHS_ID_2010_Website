import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_read_root():
    """Test the root endpoint"""
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "CHS Class of 2010 Reunion API"}


def test_health_check():
    """Test the health check endpoint"""
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json() == {"status": "healthy"}


def test_get_rsvps():
    """Test getting RSVPs"""
    response = client.get("/api/rsvp")
    assert response.status_code == 200
    assert "rsvps" in response.json()


def test_create_rsvp():
    """Test creating an RSVP"""
    rsvp_data = {
        "name": "John Doe",
        "email": "john@example.com",
        "attending": True
    }
    response = client.post("/api/rsvp", json=rsvp_data)
    assert response.status_code == 200
    assert "message" in response.json()
    assert response.json()["message"] == "RSVP received"


def test_get_classmates():
    """Test getting classmates"""
    response = client.get("/api/classmates")
    assert response.status_code == 200
    assert "classmates" in response.json()


def test_get_memories():
    """Test getting memories"""
    response = client.get("/api/memories")
    assert response.status_code == 200
    assert "memories" in response.json()


def test_create_memory():
    """Test creating a memory"""
    memory_data = {
        "title": "Great times",
        "description": "Had a great time at CHS",
        "author": "John Doe"
    }
    response = client.post("/api/memories", json=memory_data)
    assert response.status_code == 200
    assert "message" in response.json()
    assert response.json()["message"] == "Memory created"
