from flask import Flask
from flask import Response, request, jsonify
from http import HTTPStatus
import json
import redis
import uuid
from datetime import datetime
from . import db_utils as pgdb

# ____________________
# I N I T  A P P
print("starting")
app = Flask(__name__)

# ____________________
# I N I T  R E D I S

REDIS_DB = redis.StrictRedis(host='redis')
REDIS_Q = 'task_queue'

# ____________________
# A P I

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
        REDIS_DB.rpush(REDIS_Q, json.dumps(task))
        return jsonify({
            'success': True,
            'id': taskID
        })


@app.route("/health/")
def health_check():
    return Response(response="", status=HTTPStatus.NO_CONTENT)

# ____________________
# M A I N

if __name__ == '__main__':
    app.run()
