import {
    Info,
    Contact,
    Server,
    License,
    Parameter,
    Paths,
    Operation
} from "openapi-specification";

// test cases: https://spec.openapis.org/oas/latest.html#license-object

let info: Info = {
    "title": "Sample Pet Store App",
    "summary": "A pet store manager.",
    "description": "This is a sample server for a pet store.",
    "termsOfService": "https://example.com/terms/",
    "contact": {
        "name": "API Support",
        "url": "https://www.example.com/support",
        "email": "support@example.com"
    },
    "license": {
        "name": "Apache 2.0",
        "url": "https://www.apache.org/licenses/LICENSE-2.0.html"
    },
    "version": "1.0.1"
}

let contact: Contact = {
    "name": "API Support",
    "url": "https://www.example.com/support",
    "email": "support@example.com"
}

let license: License = {
    "name": "Apache 2.0",
    "identifier": "Apache-2.0"
}

let server: Server = {
    url: 'http://server.com',
    variables: {
        auth: {
            default: 'auth_server'
        }
    }
}

let paths: Paths = {
    "/pets": {
        "get": {
            "description": "Returns all pets from the system that the user has access to",
            "responses": {
                "200": {
                    "description": "A list of pets.",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/pet"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}



let parameter: Parameter = {
    name: 'parameter',
    in: 'query',
    schema: {}
}

let parameterWithConntent: Parameter = {
    name: 'parameterWithConntent',
    in: 'query',
    content: {}
}





