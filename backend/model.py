from pydantic import BaseModel
from typing import Optional


class Card(BaseModel):
    name: str
    id: str
    uri: str
    type_line: str
    flavor_text: Optional[str]
    image_uris: object
