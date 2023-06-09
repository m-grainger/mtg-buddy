import json
from fastapi import FastAPI, HTTPException
from model import Card
from database import (
    fetch_one_card,
    fetch_all_cards,
)


from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

origins = [
    "http://localhost:3000",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def read_root():
    return {"Hello": "World"}


@app.get("/api/card")
async def get_card():
    response = await fetch_all_cards()
    return response


@app.get("/api/card/{cardName}", response_model=Card)
async def get_card_by_title(cardName):
    print(f"check card name: {cardName}")
    response = await fetch_one_card(cardName)
    for stuff in response:
        print(stuff)
    if response:
        return response
    raise HTTPException(404, f"There is no card with the title {cardName}")
