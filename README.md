# Back-end

# MENTOR ME

Learn from great mentors and apply their knowledge to your journey to entrepreneurship.

## Overview
This API is used as part of the application _MENTOR_ME_ and allows for CRUD operations to be preformed on the Users _ Questions_ and _ Replies. 

This documentation will cover all of the data models and endpoints which can be access via:
> <The Herokuapp URL HERE>

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

