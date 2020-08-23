import React from 'react';
import EventName from '../atoms/event/eventName';
import EventTime from '../atoms/event/eventTime';

export type TEvent = {
  name: string,
  time: string,
}

export const EventSchedule = ({ item: TEvent }) => {
  return <div>
    <EventName>{item.name}</EventName>
    <EventTime>{item.time}</EventTime>
  </div>
}
