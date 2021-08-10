# Pull base image (Python 3.9)
FROM python:3.9

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Copy Requirements file and install
COPY requirements.txt /requirements.txt
RUN python -m pip install -r requirements.txt

# Create work directory and copy project files
RUN mkdir -p /src
WORKDIR /src
ADD . /src/

CMD ["python", "-u", "/src/main.py"]
