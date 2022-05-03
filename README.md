### Progress Log:
1. 4th February 2022: Brainstorm the functionality and Create ERD (in Visual Paradigm)
2. 16th February 2022: Scrape Chinese Food Data using Requests and BeautifulSoup (in Python), Generate Fake Data for Master Tables using Faker and Pandas (in Python), and Edit the ERD accordingly.
3. 17th February 2022: Generate Fake Data for some Transaction Tables using Random (in Python)
4. 11th March 2022: Generate database using Knex.js (in Javascript)
5. 12th March 2022: Generate Models to access the database using Objection.js (in Javascript)
6. 13th March 2022: Remove Staff related things, change functionality plan into that of a Restaurant Website instead of Restaurant Management Application
7. 15th March 2022: Make Low Fidelity Design for Main Page
8. 16th March 2022: Add some attributes to the database for better functionality

### In Local folder:
1. Start postgres server, create database
In terminal 1: pg_ctl start -D "path ke data folder PostgreSQL"
In terminal 2: 
-> psql postgres postgres
-> Insert password yang dibuat di awal
-> CREATE DATABASE <database_name>;
2. Create .env file and fill it with DATABASE_URL
3. In terminal: npm init (until there is a package)
4. In terminal: npm install
5. In terminal: npm run migrate
6. In terminal: npm run seed
7. In terminal: npm run dev