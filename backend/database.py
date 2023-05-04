from model import Todo
import traceback

# MongoDB driver
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient("mongodb://localhost:27017")
database = client.TodoList
collection = database.todo


def db_error_handler(err, func_name):
    print(
        f"Error was thrown from {func_name} and resulted in error of {err}")


async def fetch_one_todo(title):
    try:
        document = await collection.find_one({"title": title})
    except Exception as err:
        tb_str = traceback.extract_tb(err.__traceback__).as_list()
        func_name = tb_str[-1][2]
        db_error_handler(err, func_name)

    return document


async def fetch_all_todos():
    todos = []
    try:
        cursor = collection.find()
        async for document in cursor:
            todos.append(Todo(**document))
    except Exception as err:
        tb_str = traceback.extract_tb(err.__traceback__).as_list()
        func_name = tb_str[-1][2]
        db_error_handler(err, func_name)
    return todos


async def create_todo(todo):
    document = todo
    try:
        result = await collection.insert_one(document)
    except Exception as err:
        tb_str = traceback.extract_tb(err.__traceback__).as_list()
        func_name = tb_str[-1][2]
        db_error_handler(err, func_name)

    return result


async def update_todo(title, description):
    try:
        await collection.update_one({"title": title}, {"$set": {"description": description}})
        document = await collection.find_one({"title": title})
    except Exception as err:
        tb_str = traceback.extract_tb(err.__traceback__).as_list()
        func_name = tb_str[-1][2]
        db_error_handler(err, func_name)
    return document


async def remove_todo(title):
    try:
        await collection.delete_one({"title": title})
    except Exception as err:
        tb_str = traceback.extract_tb(err.__traceback__).as_list()
        func_name = tb_str[-1][2]
        db_error_handler(err, func_name)
    return True
