export interface Notification {
    subject: string | undefined;
    teacher: string | undefined;
    building: string | undefined;
    classroom: string | undefined;
    startsAt: string | undefined;
    finishesAt: string | undefined;
    link: string | undefined;
    comments: string | undefined;
    type: string;
}
