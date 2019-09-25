# Back-end

# MENTOR ME

Learn from great mentors and apply their knowledge to your journey to entrepreneurship.

## Overview
This API is used as part of the application _MENTOR_ME_ and allows for CRUD operations to be preformed on the Users _ Questions_ and _ Replies. 

This documentation will cover all of the data models and endpoints which can be access via:
> <https://mentorme2019.herokuapp.com/api>

# Endpoints

## Authentication For Entrepreneurs

| Request Type | Endpoint       | Description   |
|:------------:|:--------------:|:-------------:|
| POST         | /ent/register | Creates User  |
| POST         | /ent/login    | Logs In User  |

* JSON Web Tokens Used to Verify Users

### Register

* A __POST__ request to the `/ent/register` endpoint expects to recieve an object as follows: 

```javascript
{
    "email": "email@address.com",
    "password": "password"
}
```

| Field        | Type      | Required   | Unique     |
|:------------:|:---------:|:----------:|:----------:|
| email        | varchar   |  true      | true       |
| password     | varchar   |  true      | false      |

### Login

* A __POST__ request to the `ent/login` endpoint expects to recieve an object as follows: 

```javascript
{
    "email": "email",
    "password": "password",
}
```

| Field        | Type      | Required   | Unique     |
|:------------:|:---------:|:----------:|:----------:|
| email        | varchar   |  true      | true       |
| password     | varchar   |  true      | false      |

### GET USERS

* A __GET__ request to the `ent/all` endpoint ex


| ---------------------------------------------------- |

## Authentication For Mentors

| Request Type | Endpoint       | Description   |
|:------------:|:--------------:|:-------------:|
| POST         | /ment/register | Creates User  |
| POST         | /ment/login    | Logs In User  |

* JSON Web Tokens Used to Verify Users

### Register

* A __POST__ request to the `/ment/register` endpoint expects to recieve an object as follows: 

```javascript
{
    "email": "email@address.com",
    "password": "password"
}
```

| Field        | Type      | Required   | Unique     |
|:------------:|:---------:|:----------:|:----------:|
| email        | varchar   |  true      | true       |
| password     | varchar   |  true      | false      |

### Login

* A __POST__ request to the `ment/login` endpoint expects to recieve an object as follows: 

```javascript
{
    "email": "email",
    "password": "password",
}
```

| Field        | Type      | Required   | Unique     |
|:------------:|:---------:|:----------:|:----------:|
| email        | varchar   |  true      | true       |
| password     | varchar   |  true      | false      |

### GET USERS

* A __GET__ request to the `ment/all` endpoint for all mentors.



## QUESTIONS

| Request Type | Endpoint                    | Description            |
|:------------:|:---------------------------:|:----------------------:|
| GET          | /questions/                 | Gets all Questions     |
| GET          | /questions/:entrepreneur_id | Gets questions by ID   |


### Questions Request

* A __GET__ request to the `/questions/` endpoint expects to receive an object as follows: 

```javascript
{
    "id": "ID of the question",
    "title": "Title of the Question", 
    "question": "The question body", 
    "business_type": "The Type", 
    "entrepreneur_id": "ID of the user posted the question"
}
```

| Field            | Type      | Required   | Unique     |
|:----------------:|:---------:|:----------:|:----------:|
| title            | String    |  true      | false      |
| question         | String    |  true      | false      |
| business_type    | String    |  false     | false      |
| entrepreneur_id  | String    |  true      | false      |


* A __POST__ request to the `/questions/` endpoint expects to receive an object as follows: 

```javascript
{
    "id": "ID of the question",
    "title": "Title of the Question", 
    "question": "The question body", 
    "business_type": "The Type", 
    "entrepreneur_id": "ID of the user posted the question"
}
```

| Field            | Type      | Required   | Unique     |
|:----------------:|:---------:|:----------:|:----------:|
| title            | String    |  true      | false      |
| question         | String    |  true      | false      |
| business_type    | String    |  false     | false      |
| entrepreneur_id  | String    |  true      | false      |

* A __PUT__ request to the `/questions/:id` endpoint expects to receive an object as follows: 

```javascript
{
    "id": "ID of the question",
    "title": "Title of the Question", 
    "question": "The question body", 
    "business_type": "The Type", 
    "entrepreneur_id": "ID of the user posted the question"
}
```

| Field            | Type      | Required   | Unique     |
|:----------------:|:---------:|:----------:|:----------:|
| title            | String    |  true      | false      |
| question         | String    |  true      | false      |
| business_type    | String    |  false     | false      |
| entrepreneur_id  | String    |  true      | false      |

* A __DELETE__ request to the `/questions/:id` endpoint deletes the question that corresponds to that id, this action can not be undone.


## REPLIES

| Request Type | Endpoint               | Description                   |
|:------------:|:----------------------:|:-----------------------------:|
| GET          | /replies/              | Gets all replies              |
| GET          | /question/:question_id | Gets replies of that question |
| GET          | /ment/:mentor_id       | Gets replies of that Mentor   |


### Reply Request

* A __GET__ request to the `/replies/` endpoint expects to receive an object as follows: 

```javascript
{
    "id": "ID of the reply",
    "reply": "The reply body", 
    "question_id": "ID of the question getting answered", 
    "mentor_id": "ID of the mentor writing the reply"
    }
```

| Field            | Type      | Required   | Unique     |
|:----------------:|:---------:|:----------:|:----------:|
| reply            | String    |  false     | false      |
| question_id      | String    |  false     | false      |
| mentor_id        | String    |  false     | false      |


* A __POST__ request to the `/replies/` endpoint expects to receive an object as follows: 

```javascript
{
    "id": "ID of the reply",
    "reply": "The reply body", 
    "question_id": "ID of the question getting answered", 
    "mentor_id": "ID of the mentor writing the reply
}
```

| Field            | Type      | Required   | Unique     |
|:----------------:|:---------:|:----------:|:----------:|
| reply            | String    |  false     | false      |
| question_id      | String    |  false     | false      |
| mentor_id        | String    |  false     | false      |

* A __PUT__ request to the `/replies/:id` endpoint expects to receive an object as follows: 

```javascript
{
    "reply": "The reply body", 
    "question_id": "ID of the question getting answered", 
    "mentor_id": "ID of the mentor writing the reply
}
```

| Field            | Type      | Required   | Unique     |
|:----------------:|:---------:|:----------:|:----------:|
| reply            | String    |  false     | false      |
| question_id      | String    |  false     | false      |
| mentor_id        | String    |  false     | false      |

* A __DELETE__ request to the `/replies/:id` endpoint deletes the reply that corresponds to that id, this action can not be undone.

