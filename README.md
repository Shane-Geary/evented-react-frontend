A Web based application with React.js for the frontend functionality as well as Redux.js handling state with a Rails API for the backend.

Users can create an account to create “groups” that prefer a certain type of live event and create “events” that they have attended to keep logs of.

<img width="1280" alt="Screen Shot 2021-07-16 at 11 27 53 AM" src="https://user-images.githubusercontent.com/59372986/125986316-c744c5a4-8be3-43fb-9d67-6918622b2151.png">

Explore: | [Blog:] (https://shaneg25.github.io/react-_final_project-_evented) | [Backend:] (https://github.com/ShaneG25/evented-api)

Demo:


https://user-images.githubusercontent.com/59372986/126039484-794e694d-166c-4881-9b89-d2d2a1c4029c.mp4



Tech Stack

This Web App was built with the following:

- Ruby [2.6.1]
- Rails [~> 6.0.3] - Custom API
- React components and Redux handling state
- Custom CSS

Backend installation:

- Clone this repo to your local machine git clone
- run bundle install to install required dependencies
- run rails db:create to create a database locally.
- run rails db:migrate to create tables into the database.
- run rails db:seed to create seed data.
- run rails s to run the server.

Frontend installation:

- Clone frontend repo to your local machine git clone
- Ensure transit-backend is running locally
- run yarn install 
- run yarn start
