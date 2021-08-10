export FLASK_ENV=development
export FLASK_APP=app

gunicorn --bind 0.0.0.0:80 wsgi:app
