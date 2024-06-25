export interface Event {
  building: string;
  classroom: string;
  comments: string;
  startsAt: string;
  finishesAt: string;
  link: string;
  subject: string;
  teacher: string;
  date: string;
}

export interface EventIn {
  building: string;
  classroom: string;
  comments: string;
  startsAt: string;
  finishesAt: string;
  link: string;
  subject: string;
  teacher: string;
  notification: boolean;
}

export interface UserCredentials {
  username: string;
  password: string;
}
