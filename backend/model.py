from pydantic import BaseModel


class Card(BaseModel):
    uri: str
    oracle_text: str
