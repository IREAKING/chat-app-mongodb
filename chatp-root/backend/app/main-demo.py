from fastapi import FastAPI
from app.services.worker.tasks import send_account_activation_email
from celery.result import AsyncResult

app = FastAPI()

@app.post("/send-email")
async def send_email(recipient_email: str):
    result = send_account_activation_email.delay(recipient_email)
    
    return {"message": "Task triggered", "task_id": result.id}