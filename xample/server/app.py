from flask import Flask
from flask import Response, request, jsonify
from http import HTTPStatus
from datetime import datetime

app = Flask(__name__)


@app.route('/api/')
def hello_world():  # put application's code here
    print("accessed /api/")
    return 'Hello World!'


@app.route('/api/time', methods=['GET'])
def api_time():
    if request.method == 'GET':
        return jsonify({
            'success': True,
            'time': str(datetime.now())
        })
    return jsonify(success=False)


@app.route("/health/")
def health_check():
    return Response(response="", status=HTTPStatus.NO_CONTENT)


if __name__ == '__main__':
    app.run()
