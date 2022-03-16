// Type definitions for openapi-factory 4.2
// Project: null
// Definitions by: Dylan.zeng <https://github.com/diveDylan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0

// default openapi specification: 3.1
// https://github.com/OAI/OpenAPI-Specification/blob/main/schemas/v3.1/schema.json
type PartialExcludeKeys<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>

type RequiredByKeys<T, K extends keyof T > = Partial<Omit<T, K>> & Required<Pick<T, K>>


export type Info = PartialExcludeKeys<{
    title: string
    summary: string
    description: string
    termsOfService: string
    contact: Contact
    license: License
    version: string
}, 'title' | 'version' >

type Contact = Partial<{
    name: string
    url: string
    email: string
}>
// oneOf required: identifier or url
type License = {
    name: string
    identifier: string
    url?: string
} | {
    name: string
    identifier?: string
    url: string
}

type ServerVariable = PartialExcludeKeys<{
    enum: string[]
    default: string
    description: string
}, 'default'>

export type Server = {
    url: string
    description: string
    variables: Record<string, ServerVariable>
}
type RequestMethod = 'get' | 'put' | 'post' | 'delete' | 'options' | 'head' | 'patch' | 'trace'
export type Paths = Record<string, Record<RequestMethod, PathItem>>

type PathItem = {
    summary: string
    description: string
    servers: Server[]
    parameters: Array<Parameter | Reference>
}

export type Parameter = {}

export type Reference = {}


export type OpenAPI = {
    openapi: string
    info: Info
    jsonSchemaDialect: string
    servers: Server[]
    paths: Paths

}





