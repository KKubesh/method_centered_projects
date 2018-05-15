# Method Centered Projects Application

<img src="documentation/images/Landing_Page.gif" width ="800px" alt=".gif of landing page">

Method Centered Projects is currently in the beginning phase. This application was built to serve the purpose of managing Methods from [The Field Guide for Human Centered Design Methods](http://www.designkit.org/resources/1) by [IDEO.org](https://www.ideo.org). The application has two primary user roles Admin and User.

* Admin side of the application allows of adding, editing, and removing the method content to the user interface as needed.

<img src="documentation/images/Admin_Side.gif" width ="800px" alt=".gif of admin page">

* User side of the application allows for the user to add and remove projects. From the projects the user can add and revmoved the methods they will be using on the project.

<img src="documentation/images/Project_Navigation.gif" width ="800px" alt=".gif of project navigation">

<img src="documentation/images/Add_Methods_Projects.gif" width ="800px" alt=".gif of adding methods to projects">

## The Problem

[The Field Guide for Human Centered Design Methods](https:www.designkit.org/) has been carried with me for a few years, wearing down the pages and filling it with many post-it notes.

## The Solution

Method Centered Projects Application where the methods from this book can be documented and managed. While allowing for users to manage the methods for each individual project.

## Design & Functionality

The project is meant for designers therefore design had a high priority in the functionality of the project. Please note that the visual side of the project is meant to remain consistently from page to page, while the functionality of each component changed as the admin and user navigated through the application.

Each page is meant to serve as funnel to draw the user in before asking them to commit to creating an account. Once the user logs in functionality is introduced page by page.

The application is design to be reactive making web and mobile friendly.

## Additional Views

<img src="documentation/images/Sign_In.gif" width ="800px" alt=".gif of signing in">
(Sign-In Functionality)

## Technologies Used

React.js
Material-UI
Node.js
Express
PostgreSQL
Passport

## Future Updates to Inlcude:

* Steps as List Items
* User Favorites Tab
* User Method Documentation and Insights
* User Export of Documentation and Insights
* User's Submit Personal HCD Methodologies

## Getting Started

### Required
Node.js
PostgreSQL Database

### SQL
```
CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);

CREATE TABLE method (
	id SERIAL PRIMARY KEY,
	title varchar(40) NOT NULL,
	statements varchar(700) NOT NULL,
	description varchar(3000) NOT NULL,
	time_amount varchar(60) NOT NULL,
	diffculty varchar(20) NOT NULL,
	need varchar(80) NOT NULL,
	participants varchar(100) NOT NULL,
	steps varchar(3000) NOT NULL,
	image varchar(200) NOT NULL
);

CREATE TABLE favorites (
	id SERIAL PRIMARY KEY,
	methods INT NOT NULL,
	person_id INT NOT NULL,
);

CREATE TABLE project_methods (
	id SERIAL PRIMARY KEY,
	method_id INT NOT NULL,
	project_id INT NOT NULL
);

CREATE TABLE project (
	id SERIAL PRIMARY KEY,
	person_id INT NOT NULL,
	project_title VARCHAR(240) NOT NULL,
	description VARCHAR(3000) NOT NULL
);
```

### Commands to Run
* npm install
* npm run server
* npm run client

## Authors
#### Kam Kubesh

## What Did I Learn
* First project created in React
* Material UI 
    * Dialogs
    * Snackbar
    * Grids
    * Themes
* Intergrating similar components without losing consistency
* Navigation based on user generated items