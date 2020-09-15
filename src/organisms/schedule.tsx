import React, { useState } from 'react';
import { EventSchedule, TEvent } from '../molecules/scheduleEvent';

export default () => {
  const [schedule] = useState([
    {
      from: Date.parse('2020-09-19T10:30:00.000+03:00'),
      to: Date.parse('2020-09-19T11:00:00.000+03:00'),
      name: 'Ierašanās',
      location: 'Īkšķele, sv. Meinarda Sala',
    },
    {
      from: Date.parse('2020-09-19T11:00:00.000+03:00'),
      to: Date.parse('2020-09-19T11:45:00.000+03:00'),
      name: 'Laulību ceremonija',
      location: 'Īkšķele, sv. Meinarda Sala',
    },
    {
      from: Date.parse('2020-09-19T11:45:00.000+03:00'),
      to: Date.parse('2020-09-19T12:30:00.000+03:00'),
      name: 'Foto ar jauno pāri uz salas',
      location: 'Īkšķele, sv. Meinarda Sala',
    },
    {
      from: Date.parse('2020-09-19T12:30:00.000+03:00'),
      to: Date.parse('2020-09-19T13:00:00.000+03:00'),
      name: 'Pārvietošanās uz krastu ar plostu',
      location: 'Īkšķele, sv. Meinarda Sala',
    },
    {
      from: Date.parse('2020-09-19T13:00:00.000+03:00'),
      to: Date.parse('2020-09-19T14:30:00.000+03:00'),
      name: 'Pirmā saskandināšana',
      location: 'Īkšķele, Brandīns',
    },
    {
      from: Date.parse('2020-09-19T13:45:00.000+03:00'),
      to: Date.parse('2020-09-19T15:00:00.000+03:00'),
      name: 'Viesi dodās uz Liepupes Muižu',
      location: 'Liepupe, Liepupes Muižā',
    },
    {
      from: Date.parse('2020-09-19T15:15:00.000+03:00'),
      to: Date.parse('2020-09-19T16:00:00.000+03:00'),
      name: 'Ierašanās un ievākšanās istabās',
      location: 'Liepupe, Liepupes Muižā',
    },
    {
      from: Date.parse('2020-09-19T16:00:00.000+03:00'),
      to: Date.parse('2020-09-19T18:00:00.000+03:00'),
      name: 'Izklaides viesiem',
      location: 'Liepupe, Liepupes Muižā',
    },
	// 16:00 - 18:00 
	// 	Diskgolfs
	// 	Glezna
	// 	Click-Click Foto Būda,
    {
      from: Date.parse('2020-09-19T17:30:00.000+03:00'),
      to: Date.parse('2020-09-19T18:00:00.000+03:00'),
      name: 'Jaunā pāra ierašanās',
      location: 'Liepupe, Liepupes Muižā',
    },
    {
      from: Date.parse('2020-09-19T18:00:00.000+03:00'),
      to: Date.parse('2020-09-19T20:30:00.000+03:00'),
      name: 'Vakariņas',
      location: 'Liepupe, Liepupes Muižā',
    },
    {
      from: Date.parse('2020-09-19T21:00:00.000+03:00'),
      to: Date.parse('2020-09-19T21:30:00.000+03:00'),
      name: 'Kūka un Kafija',
      location: 'Liepupe, Liepupes Muižā',
    },
    {
      from: Date.parse('2020-09-19T21:30:00.000+03:00'),
      to: Date.parse('2020-09-19T21:45:00.000+03:00'),
      name: 'Pārsteigums :)',
      location: 'Liepupe, Liepupes Muižā',
    },
    {
      from: Date.parse('2020-09-19T22:00:00.000+03:00'),
      to: Date.parse('2020-09-19T22:05:00.000+03:00'),
      name: 'Jaunā pāra pirmā deja',
      location: 'Liepupe, Liepupes Muižā',
    },
    {
      from: Date.parse('2020-09-19T22:00:00.000+03:00'),
      to: Date.parse('2020-09-19T01:00:00.000+03:00'),
      name: 'Uzstājās grupa Colt',
      location: 'Liepupe, Liepupes Muižā',
    },
    {
      from: Date.parse('2020-09-20T02:00:00.000+03:00'),
      to: Date.parse('2020-09-20T04:00:00.000+03:00'),
      name: 'Ballīte līdz rītam',
      location: 'Liepupe, Liepupes Muižā',
    },
    {
      from: Date.parse('2020-09-20T11:00:00.000+03:00'),
      to: Date.parse('2020-09-20T13:00:00.000+03:00'),
      name: 'Brokastis',
      location: 'Liepupe, Liepupes Muižā',
    },
    {
      from: Date.parse('2020-09-20T13:00:00.000+03:00'),
      to: Date.parse('2020-09-20T13:00:00.000+03:00'),
      name: 'Viesi izrakstās no istabiņām un atvadas',
      location: 'Liepupe, Liepupes Muižā',
    }

  ]);
  return <>
    {schedule.map((item: TEvent, idx: number) => <EventSchedule key={idx} item={item} /> )}
  </>
}
