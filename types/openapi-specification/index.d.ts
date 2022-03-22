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

export type Contact = Partial<{
    name: string
    url: string
    email: string
}>
// oneOf required: identifier or url
export type License = OneOfRequiredKey<{
    name: string
    identifier: string
    url: string
}, 'url' | 'identifier'>

type ServerVariable = PartialExcludeKeys<{
    enum: string[]
    default: string
    description: string
}, 'default'>

export type Server = RequiredByKeys<{
    url: string
    description: string
    variables: Record<string, ServerVariable>
}, 'url'>
type RequestMethod = 'get' | 'put' | 'post' | 'delete' | 'options' | 'head' | 'patch' | 'trace'
export type Paths = Record<string, PathItem>

type PathItem = RequiredByKeys<{
    $ref: string
    summary: string
    description: string
    servers: Server[]
    parameters: ParameterOrReference[]
}, '$ref'> | OneOfRequiredKey<Record<RequestMethod, Operation>, RequestMethod>
// https://spec.openapis.org/oas/latest.html#style-examples
type StyleValues = 'matrix' | 'label' | 'form' | 'simple' | 'spaceDelimited' | 'pipeDelimited' | 'deepObject'
export type Parameter= RequiredByKeys<{
    name: string
    in: 'query' |'header' | 'path' | 'cookie'
    description: string
    required: boolean
    deprecated: boolean
    allowEmptyValue: boolean
    style: StyleValues
    explode: boolean
    allowReserved: boolean
    examples: Record<string, Example | Reference>
}, 'name' | 'in'> & OneOfRequiredKey<{
    content: Content
    schema: Schema
}, 'content'| 'schema'>

type OneOfRequiredKey<T, P extends keyof T> = P extends string ?  RequiredByKeys<T, P> : never
export type Schema = {
}
export type Content = {
}

export type Example = {
    summary: string
    description: string
    value: any
    externalValue: string
}

export type Reference = Partial<{
    $ref: string
    summary: string
    description: string
}>

export type RefObject =  {
    $ref: string
    [key: string]: any
}

export type ParameterOrReference = Parameter | RefObject | Reference


export type Operation = Partial<{
    tags: string[]
    summary: string
    description: string
    externalDocs: ExternalDocumentation
    operationId: string
    parameters: Array<Parameter | Reference>
    requestBody: RequestBody | RefObject | Reference
    responses: Responses
    callbacks: Record<string, Callbacks | Reference>
    deprecated: boolean
    security: SecurityRequirement[]
    servers: Server[]
}>

export type SecurityRequirement = Record<string, string[]>

export type RequestBody = {

}
export type Responses = {

}

export type Callbacks = {

}

export type ExternalDocumentation = {
    description?: string
    url: string
}

export type OpenAPI = {
    openapi: string
    info: Info
    jsonSchemaDialect: string
    servers: Server[]
    paths: Paths

}





