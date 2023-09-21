![BarraGit](https://github.com/Gandara247/gandara247/assets/120376565/00602970-43b6-4555-b548-00e87c512ad4)
# API Documentation
This API provides endpoints to retrieve information about professors. In this example of a server developed during the class, we can explore both route parameters and request parameters.

## Base URL
⁠http://localhost:3000

## Endpoints

### GET /professores/:id
Retrieves a professor with the specified ID.

#### Request Parameters
| Parameter | Type   | Required | Description                      |
|-----------|--------|----------|----------------------------------|
| id        | number | Yes      | The ID of the professor to retrieve. |

#### Response
If a professor with the specified ID is found, the response will be a JSON object with the following properties:

| Property | Type   | Description                      |
|----------|--------|----------------------------------|
| id       | number | The ID of the professor.         |
| nome     | string | The name of the professor.       |
| stack    | string | The stack of the professor.      |

If no professor with the specified ID is found, the response will be a 404 error with the following message:

`Professor não encontrado. ID's válidos: [list of valid IDs].`

### GET /professores
Retrieves a list of professors.

#### Query Parameters
| Parameter | Type   | Required | Description                      |
|-----------|--------|----------|----------------------------------|
| stack     | string | No       | The stack of the professors to retrieve. |

#### Response
If the stack parameter is not specified, the response will be a JSON array containing all the professors.

If the stack parameter is specified, the response will be a JSON array containing all the professors with the specified stack. If no professors with the specified stack are found, the response will be a 404 error with the following message:

`Professor não encontrado com a stack [stack]. Stack's válidos: [list of valid stacks].`

### Example Usage

#### Retrieve a professor by ID
GET http://localhost:3000/professores/1

Response:
```json
{
    "id": 1,
    "nome": "José",
    "stack": "Backend"
}
```

#### Retrieve professors by stack
GET http://localhost:3000/professores?stack=Frontend

Response:
```json
[
    {
        "id": 2,
        "nome": "João",
        "stack": "Frontend"
    },
    {
        "id": 6,
        "nome": "Jão",
        "stack": "Frontend"
    }
]
```

#### Retrieve all professors
GET http://localhost:3000/professores

Response:
```json
[
    {
        "id": 1,
        "nome": "José",
        "stack": "Backend"
    },
    {
        "id": 2,
        "nome": "João",
        "stack": "Frontend"
    },
    {
        "id": 3,
        "nome": "Maria",
        "stack": "DevOps"
    },
    {
        "id": 4,
        "nome": "Ana",
        "stack": "UX"
    },
    {
        "id": 5,
        "nome": "Francisco",
        "stack": "QA"
    },
    {
        "id": 6,
        "nome": "Jão",
        "stack": "Frontend"
    }
]
```

## Code Structure
The project is structured as follows:
```
.
├── dataBase
│   └── db.js
├── node_modules
│   └── ...
├── routes
│   └── professoresRoute.js
├── .gitignore
├── index.js
├── package-lock.json
└── package.json
```
The `dataBase` directory contains a JavaScript file `db.js` that exports an array of professors.

The `routes` directory contains a JavaScript file `professoresRoute.js` that defines the endpoints for the API.