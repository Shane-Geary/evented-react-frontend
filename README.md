A JavaScript SPA with a Rails API on the back end. Lets users create and read logs of live events they have attended.

The application includes the functionality of creating new ticket objects with a form on the same page where the newly created ticket will be displayed, 
as well as a drop down bar for options in the form.

Explore: | [Demo:] (https://www.youtube.com/watch?v=CLh15CuzXPw&t=1s) | [Blog:] (https://shaneg25.github.io/javascript_project-_live_events) |
[Backend:] (https://github.com/ShaneG25/live_events_backend) 

Tech Stack

This Web App is built with the following:

- Ruby [2.6.1]
- Rails [~> 6.0.3] - Custom API
- JavaScript to build a frontend SPA(single page application)
- Custom CSS

Backend installation:

- Clone this repo to your local machine git clone <this-repo-url>
- run bundle install to install required dependencies
- run rails db:create to create a database locally.
- run rails db:migrate to create tables into the database.
- run rails db:seed to create seed data.
- run rails s to run the server.

Frontend installation:

- Clone frontend repo to your local machine git clone <frontend-repo-url>
- Ensure transit-backend is running locally 
- run open index.html
