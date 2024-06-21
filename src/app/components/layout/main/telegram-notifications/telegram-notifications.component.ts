import { Component, Input } from '@angular/core';
import { TelegramService } from '../../../../services/telegram/telegram-service.service';
import { CommonModule } from '@angular/common';
import { EventStructure } from '../calendar/eventStructure';

@Component({
  selector: 'app-telegram-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './telegram-notifications.component.html',
  styleUrl: './telegram-notifications.component.css',
})
export class TelegramNotificationsComponent {
  @Input() eventToNotify: EventStructure = {
    building: '',
    classroom: '',
    comments: '',
    startsAt: new Date(),
    finishesAt: new Date(),
    link: '',
    subject: '',
    teacher: '',
    id: 0,
    start: '',
    finish: '',
    date: '',
  };

  constructor(private telegramService: TelegramService) {}

  notifyEvent() {
    if (
      confirm(
        '¿Estás seguro de que quieres enviar un recordatorio de este evento?'
      )
    ) {
      const message = this.bulidMessage(this.eventToNotify);
      this.telegramService.notifyEvent(message).subscribe({
        next: () => {
          alert('Evento notificado');
        },
        error: (error) => {
          console.error('Error sending notification', error);
        },
      });
    }
  }

  bulidMessage(eventToNotify: EventStructure): string {
    let date = this.eventToNotify.startsAt.toString().split('T')[0];
    const message = `🔔 ¡Recordatorio de evento! 🔔\n\n
    📌 Día: ${date}
    📚 Asignatura: ${eventToNotify.subject}
    👨‍🏫 Docente: ${eventToNotify.teacher}
    🕓 Horario: ${eventToNotify.start}/${eventToNotify.finish}
    🏢 Ubicación: ${eventToNotify.building}, ${eventToNotify.classroom}
    🔗 Enlace: ${eventToNotify.link}
    📝 Comentarios: ${eventToNotify.comments}`;
    return message;
  }
}
