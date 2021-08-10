from flask import Flask
from flask import Response

from http import HTTPStatus

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'


@app.route("/health/")
def health_check():
    return Response(response="", status=HTTPStatus.NO_CONTENT)


if __name__ == '__main__':
    app.run()
