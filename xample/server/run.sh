#!/bin/bash

#####
##
## Launch script
##
#####

# Migrate DB
echo "Migrating changes to database..."

if python manage.py makemigrations --noinput; then
  if python manage.py migrate --noinput; then
    echo "Successfully migrated database."
  else
    echo "Failed to migrate changes to databases."
    exit 1
  fi
else
    echo "Failed to make database migrations."
    exit 1
fi

printf "\n"

echo "Creating superuser..."
if python3 manage.py shell < init_superuser.py; then
  echo "Superuser has been created."
else  # As super user is not an essential thing, keep going.
  echo "Failed to create superuser."
fi

printf "\n"


# Generate shared django secret key for session stability
DJANGO_SECRET_KEY=$(openssl rand -base64 256)
export DJANGO_SECRET_KEY


# And run server
gunicorn GovHack2021.wsgi:application -b 0.0.0.0:80 \
                                      --log-level=DEBUG \
                                      --timeout=30 \
                                      --graceful-timeout=20 \
                                      --worker-class=gevent \
                                      --workers=3 \
                                      --threads=2 \
                                      --worker-connections=1000 \
                                      --max-requests=1500 \
                                      --max-requests-jitter=2100
