# QuickSurveys

QuickSurveys is a web application that allows users to create and manage surveys, and collect responses from participants. The application is built using Angular, Node.js with Express.js, and MongoDB for the backend. Project management is done using Trello, and the source code is hosted on GitHub.

## Features

- Survey Creation: Users can create customized surveys by providing a title, description, and questions. They can define different types of questions, such as multiple-choice, open-ended, or rating questions.

- Survey Distribution: Once a survey is created, users can share the survey link with participants through various channels like email, social media, or direct messaging. Participants can access and complete the survey online.

- Response Collection: QuickSurveys automatically collects and stores responses from participants. Users can view and analyze the collected data in real-time, with options for filtering and exporting the data for further analysis.

- Survey Management: Users can easily manage their surveys, including editing, duplicating, or deleting surveys. They can also track the number of responses received and set closing dates for surveys.

## Tech Stack

- Angular
- Node.js
- Express.js
- MongoDB
- Trello
- GitHub

## Installation and Setup

To install and run QuickSurveys, follow the steps below:

1. Clone the GitHub repository to your local machine:

   ```shell
   git clone https://github.com/YourUsername/QuickSurveys.git

## Navigate to the project directory:

cd QuickSurveys


## Install the required dependencies for the frontend and backend:
```
cd client
npm install
```
```
cd server
npm install
```
## Set up the MongoDB database:

Install MongoDB and ensure it is running on your machine.
Create a new database named "quicksurveys" in MongoDB.
Configure the backend:

In the backend directory, create a .env file.

Add the following environment variables to the .env file:


```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/quicksurveys
```
Replace mongodb://localhost:27017/quicksurveys with your MongoDB connection URI if necessary.

## Start the application:

## In the frontend directory, run the following command:

```
ng serve
In the backend directory, run the following command:
```

```
npm start
```
Open your web browser and visit http://localhost:8081 to access QuickSurveys.

## Contributing
We welcome contributions to QuickSurveys! If you would like to contribute, please follow these steps:

Fork the repository on GitHub.
Create a new branch with a descriptive name for your feature or bug fix.
Make the necessary changes and commit them to your branch.
Push your branch to your forked repository on GitHub.
Open a new pull request from your branch to the main repository's master branch.
Provide a clear and concise description of your changes in the pull request, including any relevant information or context.
Wait for the project maintainers to review your pull request. They may provide feedback or request further changes.
Make the necessary updates or address any feedback provided.
Once your pull request is approved, it will be merged into the main repository.
Thank you for considering contributing to QuickSurveys! We appreciate your time and effort in making the application
