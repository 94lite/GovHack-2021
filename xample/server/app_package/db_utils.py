import os
import psycopg2
from psycopg2.extras import RealDictCursor
import time
import urllib

# ____________________
# I N I T  C O N S T
POSTGRES_URI = (
    "postgresql://" 
    + os.environ["POSTGRES_USER"] + ":" 
    + urllib.parse.quote_plus(os.environ["POSTGRES_PASSWORD"]) 
    + "@postgres:5432/"
    + os.environ["POSTGRES_DB"]
)

# ____________________
# U T I L I T I E S

def getPGConn():
    return psycopg2.connect(POSTGRES_URI)


def getPGCur(conn):
    return conn.cursor(cursor_factory=RealDictCursor)

# ____________________
# I N I T  P O S T G R E S

def test_conn():
    try:
        with getPGConn() as conn:
            TEST_QUERY = """
                SELECT * FROM information_schema.tables
            """
            cur = getPGCur(conn)
            cur.execute(TEST_QUERY)
            data = cur.fetchone()
        print(data)
        print("successful connection")
    except Exception as e:
        print(f"error occurred: {e}, retrying in 10 seconds")
        time.sleep(10)
        test_conn()
    return

test_conn()
