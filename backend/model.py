from pydantic import BaseModel


class Card(BaseModel):
    name: str
    id: str
    uri: str
    type_line: str
    flavor_text: str
    image_uris: object
