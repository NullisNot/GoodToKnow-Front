export interface Notification {
    subject: string | undefined;
    teacher: string | undefined;
    building: string | undefined;
    classroom: string | undefined;
    startsAt: any | undefined;
    finishesAt: any | undefined;
    link: string | undefined;
    comments: string | undefined;
    type: string;
}
