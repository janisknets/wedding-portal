import React from 'react';
import styled from 'styled-components';
import EventName from '../atoms/event/eventName';
import EventTime from '../atoms/event/eventTime';

export type TEvent = {
  name: string,
  from: number,
  to: number,
  location: string,
}

export const EventSchedule = ({ item }: { item: TEvent }) => {
  return <EventCard>
    <EventName>{item.name}</EventName>
    <EventTime>{new Date(item.from).toDateString()} - {new Date(item.to).toDateString()}</EventTime>
  </EventCard>
}

const EventCard = styled.div`
  display: flex-box;
  flex-direction: column;
  width:100%;
  text-align: center;
  padding: 1rem;
  margin: 1rem;
  background-color: rgba(255, 255, 255, 0.5);
  &:hover {
    border: 1px solid black ;
  }
`;
