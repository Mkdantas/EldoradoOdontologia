import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import './styles.css';
import { formatDate } from '@fullcalendar/react';

let str = formatDate(new Date(), {
  month: 'long',
  year: 'numeric',
  day: 'numeric'
});

console.log(str);

function Schedule() {
  return (
    <div id="page-schedule">
        <FullCalendar
          plugins={[ timeGridPlugin ]}
          initialView="timeGridDay"
          nowIndicator={true}
          slotLabelFormat={{
              hour: 'numeric',
              minute: '2-digit'
          }
          }
          slotMinTime={
            '09:00:00'
          }
          slotMaxTime={
            '19:00:00'
          }

          allDaySlot={false}
          hiddenDays={
            [0]
          }
          buttonText={{
            today:    'Hoje',
            month:    'Mês',
            week:     'Semana',
            day:      'Dia',
            list:     'lista'
          }}
          events={[
            { title: 'Marcelo', start: '2020-10-20T13:00:00', end: '2020-10-20T13:30:00' },
            { title: 'Jean', start: '2020-10-20T11:00:00', end: '2020-10-20T11:30:00'  }
          ]}
          businessHours={{
            daysOfWeek: [ 1, 2, 3, 4, 5, 6 ],
            startTime: '09:00', 
            endTime: '18:00',
          }}
          locale={'pt-br'}
          slotDuration={'00:15:00'}
          />
    </div>
  );
}

export default Schedule;