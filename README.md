# GovHack-2021


## Installing the Application (First Time):

#### PREREQUISITES:
Applications required:
- Docker
- NPM
- Git
- Terminal

#### 0. Getting the Resources
Clone this git repository

Make sure that the branch is pointed at 'example-app'

#### 1. Create the additional folders
Open Terminal

run: <code>bash init_folders.sh</code>

#### 2. Build the react app
change directory into xample/client/webapp

run: <code>npm install</code>

run: <code>npm run watch</code>

#### 3. Create the images and run
From a new terminal

run: <code>docker-compose up --build</code>

#### 4. Open application
On a browser, direct to http://127.0.0.1:8080


## How to Stop:
run: <code>docker-compose down</code>


## How to Restart:
run: <code>docker-compose up</code>
