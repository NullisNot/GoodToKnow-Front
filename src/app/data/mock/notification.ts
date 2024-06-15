
import { Notification } from "../interfaces/notification"
export const notifications:Array<Notification> = [
    {
        building: "Campus norte",
        classroom: "Aula 1",
        subject: undefined,
        startsAt: new Date(2024, 5, 15, 14, 30),
        finishesAt: new Date(2024, 5, 15, 16, 0),
        teacher: undefined,
        link: undefined,
        comments: undefined,
        type: "notification"
    },
    {
        building: undefined,
        classroom: undefined,
        subject: "Base de datos",
        startsAt: new Date(2024, 5, 15, 14, 30),
        finishesAt: new Date(2024, 5, 15, 16, 0),
        teacher: undefined,
        link: undefined,
        comments: undefined,
        type: "reminder"
    }
]

