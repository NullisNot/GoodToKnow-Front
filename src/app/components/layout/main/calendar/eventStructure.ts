export interface EventStructure {
  building: string;
  classroom: string;
  comments: string;
  id: number;
  startsAt: Date;
  finishesAt: Date;
  link: string;
  subject: string;
  teacher: string;
  start: string;
  finish: string;
  date?: string;
}

export interface EventToEdit {
  building: string;
  classroom: string;
  comments: string;
  id: number;
  startsAt: string;
  finishesAt: string;
  link: string;
  subject: string;
  teacher: string;
  start?: string;
  finish?: string;
  date?: string;
}
