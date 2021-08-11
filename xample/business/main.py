import json
import time
import redis

REDIS_DB = redis.StrictRedis(host='redis')
REDIS_Q = 'task_queue'

while True:
    print("hello world")
    try:
        with REDIS_DB.pipeline() as pipe:
            pipe.lrange(REDIS_Q, 0, 0)
            pipe.ltrim(REDIS_Q, 1, -1)
            queue, _ = pipe.execute()
        for task in queue:
            print(task.decode('utf-8'))
    except Exception as e:
        print(e)
    time.sleep(5)