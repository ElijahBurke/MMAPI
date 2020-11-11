#Plan
My original idea was to use a ML library to predict results of fights. However, it's hard to find the data for this in a useful format, and I've found multiple threads online of people complaining about the same thing. The UFC used to have an API but it has since been discontinued. It would be useful to store this information in a database so that at a later date I can attempty to create a ML model to predict results.

##What I want to do

Create an API for previous UFC fights by scraping the stats from a stats website. Save this data in a SQL database. Allow for this data to be customisably queried using GraphQL, potentially having a playground on the website for people to see exactly what data they would be able to get back. The data would be rather extensive (so that it can be later used for ML model) so it would be neccesary to implement graphQL to extract specific data.

###MVP
The MVP would be just having the REST api that can be queried for information with simple endpoints, e.g:
/fight/:id would get information about a fight.
/fighter/:id would get information about a fighter.
/event/:id would get information about an event.
/weightclass/:name would get information about a certain weightclass.

###Additional Features
Add a graphQL playground on website which gives custom queries, which returns only the exact information someone wants.
Machine learning model that predicts results of upcoming fights.
Frontend that displays upcoming events with predictions.
Make an NPM package that uses the database and allows people to use commands in their code to get information, e.g: const fight = require('SoloProject').fight({id: 1});

##Database
I feel a relational database would be best suited to this so that I can store data using many relations, e.g weight class, by event, by fighter. I was thinking having one table which contains all fights with unique IDs and stats for the fights.
I would then have other tables such as:
Weight Class - 
  different weight classes with information about the classes (e.g current champion, weight limit, fights, fighters)
Events -
  information about individual events (e.g location, name, fights, fighters)
fighters - 
  information about fighters (e.g win/loss, weight class, opponents)

###What should I get out of this project?
My expected outcome would be to at least finish the API and GraphQL playground, anything else would just be a bonus. I like this project because it gives me a chance to use a SQL database, which at the moment I'm not particularly comfortable with. There is also alot of room for continual improvement if I have extra time, or to continue my learning after the course. In particular I very much like the idea of ML and this would be a fun basis for me to practice this in the future.

##Other ideas

###Multiple people queueing Spotify songs
Allow multiple people to connect to an app and queue spotify songs. I kind of like this idea, but there is not really any backend which I would quite like to work with, and I feel like i'll waste alot of time trying to get spotify authentication to work.

###Auto Router
NPM package that generates some basic router functions for a backend (uses the generate koa app for example, but then adds some additional stuff). Would read collections in a database and then have basic functions for getting/posting/deleting/updating documents from that collection using the ID. I'm guessing this would be quite difficult but might be a fun excercise. Not sure how useful it would be, presumbaly most people who have an existing database would have some kind of backend set up already.




