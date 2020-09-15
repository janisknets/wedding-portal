import React from 'react';
import styled from 'styled-components';

import Direction from '../atoms/direction';
import Request from '../atoms/request';
import Header from '../atoms/InformationHeader';
import Contact from '../atoms/contact';

const directions = [
  {
    text: "Sv. Meinarda Sala",
    link: "https://www.waze.com/ul?ll=56.82161571%2C24.50180769&navigate=yes",
    icon: ""
  },
  {
    text: "Brandīns",
    link: "https://www.waze.com/ul?ll=56.8232479%2C24.49893236&navigate=yes",
    icon: ""
  },
  {
    text: "Liepupes Muiža",
    link: "https://www.waze.com/ul?ll=57.46341930%2C24.47095520&navigate=yes",
    icon: ""
  }
];

const requests = [
  {
    text: "Mīļā ģimene un draugi,\nLūdzam būt ar mums klātesošiem un nefotografēt ceremonijas laikā, atstāsim šo profesionāļu rokās.\nBūsim iepriecināti, ja izmantosiet iespēju iemūžināt šo svētku dienu lūdzot foto mūsu fotogrāfam Billijam.\nLūdzam nepublicēt savus foto ar jauno pāri sociālajos tīklos.",
  }
]

const contacts = [
  {
    name: "Laima Krasta",
    phone: "+37126398154",
  },
  {
    name: "Māris  Krasts",
    phone: "+37127533947",
  },
  {
    name: "Jānis Sniķers",
    phone: "+37129638888",
  }
]

export default () => {
  return <>
    <InfoBlock>
      <Header>Jaunā pāra lūgumi</Header>
      {requests.map((request, idx) => <Request key={idx} {...request} /> )}
    </InfoBlock>
    <InfoBlock>
      <Header>Kā nokļūt</Header>
      {directions.map((direction, idx) => <Direction key={idx} {...direction} /> )}
    </InfoBlock>
    <InfoBlock>
      <Header>Kontakti</Header>
      {contacts.map((contact, idx) => <Contact key={idx} {...contact} /> )}
    </InfoBlock>
  </>
}

const InfoBlock = styled.div`
  display: flex; 
  flex-direction: column;
  width: 100%;
  flex-wrap: nowrap;
`;