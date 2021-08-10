from flask import Flask
from flask import Response, request, jsonify
from http import HTTPStatus
from datetime import datetime
import json
import redis
import uuid

print("starting")
app = Flask(__name__)

redis_db = redis.StrictRedis(host='redis')
redis_q = 'task_queue'


@app.route('/api/')
def hello_world():  # put application's code here
    print('accessed /api/')
    return 'Hello World!'


@app.route('/api/time', methods=['GET'])
def api_time():
    print('accessed /api/time')
    if request.method == 'GET':
        return jsonify({
            'success': True,
            'time': str(datetime.now())
        })
    return jsonify(success=False)


@app.route('/api/long_work', methods=['GET', 'POST'])
def api_longWork():
    print('accessed /api/long_work')
    if request.method == 'GET':
        pass
    elif request.method == 'POST':
        taskID = str(uuid.uuid4())
        task = {
            'id': taskID,
            'topic': 'long_work'
        }
        redis_db.rpush(redis_q, json.dumps(task))
        return jsonify({
            'success': True,
            'id': taskID
        })


@app.route("/health/")
def health_check():
    return Response(response="", status=HTTPStatus.NO_CONTENT)


if __name__ == '__main__':
    app.run()
