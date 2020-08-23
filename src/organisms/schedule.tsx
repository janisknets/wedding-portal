import React from 'react';
import { EventSchedule, TEvent } from '../molecules/scheduleEvent';

export default () => {

  const [schedule, setSchedule] = useState([
    {
      time: Date.parse('2020-09-19T10:30:00.000+03:00'),
      name: 'Ierašanās',
    }
  ]);
  return <>
    {schedule.map((item: TEvent) => <EventSchedule item={item} />)}
  </>
}
