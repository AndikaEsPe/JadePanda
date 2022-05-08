### Tools and Technologies:
##### Data Generation
- Beautiful Soup = Python Web Scraping Library
- Faker = Python Fake Data Generator Library
- Pandas = Python Data Manipulation Library
- Requests = Python HTTP Library
##### Prototyping
- Visual Paradigm = Database Design
- Excalidraw = Website Sketch
##### Web Development
- React.js = Frontend JS Framework
- Tailwind.css = Frontend CSS Framework
- Objection.js = ORM for Node.js
- Knex.js = SQL Query Builder
- Express.js = Backend JS Framework

### Progress Log:
- 4th February 2022: Brainstorm the functionality and Create ERD (in Visual Paradigm)
- 16th February 2022: Scrape Chinese Food Data using Requests and BeautifulSoup (in Python), Generate Fake Data for Master Tables using Faker and Pandas (in Python), and Edit the ERD accordingly.
- 17th February 2022: Generate Fake Data for some Transaction Tables using Random (in Python)
- 11th March 2022: Generate database using Knex.js (in Javascript)
- 12th March 2022: Generate Models to access the database using Objection.js (in Javascript)
- 13th March 2022: Remove Staff related things, change functionality plan into that of a Restaurant Website instead of Restaurant Management Application
- 15th March 2022: Make Low Fidelity Design for Main Page
- 16th March 2022: Add some attributes to the database for better functionality
- 4th May 2022: Added views folder using create-react-app
- 5th May 2022: Trial connection between views and controllers
- 6th - 8th May 2022: Restructure database and design API in controllers

### In Local folder:
1. Start postgres server, create database
- In terminal 1: pg_ctl start -D "path to data folder PostgreSQL"
- In terminal 2: psql postgres postgres -> CREATE DATABASE database_name;
2. Create .env file and fill it with DATABASE_URL
3. npm init (until there is a package)
4. npm install
5. npm run migrate
6. npm run seed
7. npm run apiDev
8. cd views
9. npm start