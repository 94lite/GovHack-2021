# Pull base image (Python 3.9)
FROM python:3.9

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Copy Requirements file and install
COPY requirements.txt /requirements.txt
RUN python -m pip install -r requirements.txt && python -m pip install gevent && python -m pip install gunicorn && python -m pip install psycopg2-binary

# Create work directory and copy project files
RUN mkdir -p /app
WORKDIR /app
ADD . /app

# Open port 80
EXPOSE 80

# Set health check
HEALTHCHECK --interval=30s --timeout=5s CMD curl -if http://127.0.0.1/health/ || exit 1

# Launch server
ENTRYPOINT sh run.sh
