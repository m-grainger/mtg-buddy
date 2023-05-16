import motor.motor_asyncio
import traceback
from model import Card

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017/')
database = client.mtg
collection = database.cards


def db_error_handler(err, func_name):
    print(
        f"Error was thrown from {func_name} and resulted in error of {err}")


async def fetch_one_card(cardName):
    try:
        print(f"\n\n\ninside fetch_one_card {cardName}\n\n\n")
        # document = await collection.find_one({"name": "Fury Sliver"})
        document = await collection.find_one({"name": cardName})
        return document
    except Exception as err:
        tb_str = traceback.extract_tb(err.__traceback__).as_list()
        func_name = tb_str[-1][2]
        db_error_handler(err, func_name)


async def fetch_all_cards():
    cards = []
    try:
        cursor = collection.find({})
        async for document in cursor:
            cards.append(Card(**document))
        return cards
    except Exception as err:
        tb_str = traceback.extract_tb(err.__traceback__).as_list()
        func_name = tb_str[-1][2]
        db_error_handler(err, func_name)
