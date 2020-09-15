import React from 'react';
import styled from 'styled-components';
import EventName from '../atoms/event/eventName';
import EventTime from '../atoms/event/eventTime';
import formattedDate from '../atoms/date';

export type TEvent = {
  name: string,
  from: number,
  to: number,
  location: string,
}

export const EventSchedule = ({ item }: { item: TEvent }) => {
  return <EventCard>
    <EventName>{item.name}</EventName>
    <EventTime>{formattedDate(new Date(item.from))} - {formattedDate(new Date(item.to), 'HH:mm')}</EventTime>
  </EventCard>
}

const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.2rem;
  margin: 0.3rem;
  text-align: center;
  background-color: none;
`;

// const EventLeft = styled.div`
//   display: flex;
//   align-self: center;
//   width: 20%;
// `;

// const EventRight = styled.div`
//   display: flex;
//   align-self: flex-end;
//   flex-direction: column;
//   width: 80%;
// `;