import jwt
from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel


SECRET_KEY = "my_secret_key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 800

dummy_user = {
    "username": "user1234",
    "password": "secret1234"
}

app = FastAPI()


class LoginItem(BaseModel):
    username: str
    password: str


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/login")
async def login_user(login_item: LoginItem):
    data = jsonable_encoder(login_item)
    if dummy_user["username"] == data["username"] and dummy_user["password"] == data["password"]:
        encoded_jwt = jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)
        return {'token': encoded_jwt}
    else:
        return {'message': 'Login failed'}
