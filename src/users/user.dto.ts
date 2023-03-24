import { Roles } from "../core/enum"

export class CreateUserDTO {
    fullname: string
    email: string
    password: string
    numberPhone: string
    role: Roles
    birthDay: Date
}

export class LoginDTO {
    email: string
    password: string
}

export class UpdateUserDTO {
    password: string
}

export class AddUserProjectDTO {
    userId: number[]
    projectId: number
}

export class AddUserTaskDTO {
    userId: number[]
    taskId: number
}