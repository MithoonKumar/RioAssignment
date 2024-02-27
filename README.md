# Simple Messenger System

This is a simple peer-to-peer messaging server where users can register with unique usernames and start message threads with other users.

## Installation

1. Clone the repository.
2. There are two approach to start the server in local.
3. First Approach works if you have node installed in your machine: 1. Move to the project folder 2. Run the command `npm install` 3. Run the command `node app.js`
4. Second Approach using docker : 1. Move to the project folder 2. Run the following commands one after another: `docker build -t my-image .`  , `docker run -d -p 8080:8080 --name my-container my-image`


## Postman collection
https://dark-crater-123999.postman.co/workspace/Team-Workspace~275043ee-2aa9-4993-8e03-7276ad1f7791/collection/30059192-a39ce9b9-2d34-4748-9148-252d4f4550c1?action=share&creator=30059192&active-environment=30059192-be58cf30-3c4e-45bd-aeea-c50f445a09b3

## Note 
The send message API needs an Authorization token in the header which is generated in login step
