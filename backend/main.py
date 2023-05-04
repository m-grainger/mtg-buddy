from database import (
    fetch_one_todo,
    fetch_all_todos,
    create_todo,
    update_todo,
    remove_todo
)
from model import Todo
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


# port 3000 for react
origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins="True",
    allow_methods=["*"],
    allow_headers=["*"]
)

# routes


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


@app.get("/api/todo")
async def get_todo():
    response = await fetch_all_todos()
    return response


@app.get("/api/todo{title}", response_model=Todo)
async def get_todo_by_id(title: str):
    response = await fetch_one_todo(title)
    if response:
        return response
    else:
        raise HTTPException(404, f"there is no TODO item with title: {title}")


@app.post("/api/todo", response_model=Todo)
async def post_todo(todo: Todo):
    response = await create_todo(todo.dict())
    if response:
        return response
    else:
        raise HTTPException(400, f"bad request creating {todo.title}")


@app.put("/api/todo{title}", response_model=Todo)
async def put_todo(title: str, description: str):
    response = await update_todo(title, description)
    if response:
        return response
    else:
        raise HTTPException(404, f"unable to update {title}")


@app.delete("/api/todo{title}")
async def delete_todo(title: str):
    response = await remove_todo(title)
    if response:
        return "Successfully deleted todo item"
    else:
        raise HTTPException(404, f"there was an issue removing {title}")
