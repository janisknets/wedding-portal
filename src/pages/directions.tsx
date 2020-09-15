import React from 'react';
import styled from 'styled-components';

import Direction from '../atoms/direction';
import Request from '../atoms/request';
import Header from '../atoms/InformationHeader';
import Contact from '../atoms/contact';

const directions = [
  {
    text: "Sv. Meinarda Sala",
    link: "https://www.waze.com/ul?to=place.ChIJT67NkKov6UYRiLrmU2VBsq0",
    icon: ""
  },
  {
    text: "Brandīns",
    link: "https://www.waze.com/ul?to=place.ChIJyfk6t1Mu6UYR8rtSvTRmkFw",
    icon: ""
  },
  {
    text: "Liepupes Muiža",
    link: "https://www.waze.com/ul?to=ll.57.46326927%2C24.47135925",
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
      {requests.map(request => <Request {...request} /> )}
    </InfoBlock>
    <InfoBlock>
      <Header>Kā nokļūt</Header>
      {directions.map(direction => <Direction {...direction} /> )}
    </InfoBlock>
    <InfoBlock>
      <Header>Kontakti</Header>
      {contacts.map(contact => <Contact {...contact} /> )}
    </InfoBlock>
  </>
}

const InfoBlock = styled.div`
  display: flex; 
  flex-direction: column;
  width: 100%;
  flex-wrap: nowrap;
`;