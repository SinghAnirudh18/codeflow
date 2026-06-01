# CodeFlow

A collaborative code review and bug bounty platform.

## Project Structure

This is a monorepo setup containing:
- `be/` - The FastAPI backend.

*(The frontend will be added in the `fe/` folder later).*

## Getting Started (Backend)

1. Navigate to the backend directory:
   ```bash
   cd be
   ```

2. **Docker Setup (Recommended)**
   If you have Docker Desktop installed, you can spin up the entire API, MongoDB, and Redis with one command:
   ```bash
   docker compose up -d --build
   ```

3. **Manual Local Setup**
   If you are running MongoDB and Redis locally on your machine instead:
   ```bash
   # Install dependencies
   pip install -r requirements.txt
   
   # Start the API server
   python -m uvicorn app.main:app --reload
   ```

4. Go to **http://localhost:8000/docs** to view the interactive API documentation and test the GitHub Login flow!
