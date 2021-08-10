import json
import time
import redis

redis_db = redis.StrictRedis(host='redis')
redis_q = 'task_queue'

while True:
    print("hello world")
    try:
        with redis_db.pipeline() as pipe:
            pipe.lrange(redis_q, 0, 0)
            pipe.ltrim(redis_q, 1, -1)
            queue, _ = pipe.execute()
        for task in queue:
            print(task.decode('utf-8'))
    except Exception as e:
        print(e)
    time.sleep(5)