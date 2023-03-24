import { TypeTest } from "../core/enum"

export class createTestDTO {
    name: string
    type: TypeTest
    questionURL: string
    answerURL: string
    startDate: Date
    time: number
    teacherId: number
    classId: number
}