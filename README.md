PROJECT TITLE : URL Shortener

DESCRIPTION

Hii! Akash here, and I Welcome you to the MERN Stack based URL Shortener project!
This project is a full-stack web application that allows users to shorten long URLs into shorter and more manageable links, and to keep the count of the number of clicks. It is built using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. This README file will guide you through the setup and usage of the application.

PRE-REQUISITES

Before getting started, make sure you have the following software installed on your machine:
1. Node.js (v12 or above) 
2. npm (Node Package Manager)
3. MongoDB

DEPENDENCIES

1. "ejs": "^3.1.9",
2. "express": "^4.18.2",
3. "mongoose": "^7.3.0",
4. "shortid": "^2.2.16"
5. "devDependencies": {
    "nodemon": "^2.0.22"
  }
6. "scripts": {
    "urlshortener": "nodemon server.js"
  }

you can find these dependencies in the file package.json

INSTALLATION

In the terminal type
1. "npm init" -> to initialize the npm and generate JSONs file.
2. "npm i express" to install the express in our server
3. "npm i mongoose" for creating database
4. "npm i ejs" to geerate an ejs file
5. "npm i --save-dev nodemon" to make the server automatically refresh while creating changes
6. After performing these actions and installing the required files, go to the terminal and type 
"npm run urlshortener" to setup the server at port 5000.
7. Go to "http://localhost:5000/" to check the website.

WORKING

1. The website uses node pacakage (from the NPM) "shortid" to shorten the links for the provided long URLs.
2. MongoDB is used to create the database for storing the information of the shortened URLs and to keep the track of the number of times the corresponding website is visited.
3. EJS file is used to write the embedded javascript itself along with the HTML.
4. Bootstrap is used to improve the styling of the website.
5. The server.js file is built with expressJS and nodeJS.

LEARNING TAKEAWAYS

1. While working on this project, got to know more about MERN stack development.
2. How to store the data on the mongoose database.
3. How to use npm for the pre-defined packages.
4. async and await function in javascript.
5. Got to know about static deployment and dynamic deployment.

REFERENCES USED

1. https://www.geeksforgeeks.org/async-await-function-in-javascript/
2. https://www.npmjs.com/package/shortid
3. Tutorials by Angela Yu to learn about MERN stack development : https://www.udemy.com/course/the-complete-web-development-bootcamp/

PREVIEW

Here is a preview on how the website looks like :)


<img width="959" alt="preview_urlshortener" src="https://github.com/Akashh26/url_shortener/assets/98978949/1a99110e-b888-43bb-ab5b-f9692fe956ae">


