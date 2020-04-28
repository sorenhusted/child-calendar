import React from 'react';
import './App.css';
import Timeline from './Timeline';

const data = [
  {
    name: 'Difteri-tetanus-kighoste-polio-Hib 1^ og PCV-1',
    when: {
      months: 3,
    },
    type: 'vaccine',
    where: 'Praktiserende læge',
    description: 'stuff stuff stuff',
    links: ''
  },
  {
    name: 'Difteri-tetanus-kighoste-polio-Hib 2^ og PCV-2',
    when: {
      months: 5,
    },
    type: 'vaccine',
    where: 'Praktiserende læge',
    description: 'stuff stuff stuff',
    links: ''
  },
  {
    name: 'Difteri-tetanus-kighoste-polio-Hib 3^ og PCV-3',
    when: {
      months: 12,
    },
    type: 'vaccine',
    where: 'Praktiserende læge',
    description: 'stuff stuff stuff',
    links: ''
  },
  {
    name: '	MFR1',
    when: {
      months: 15,
    },
    type: 'vaccine',
    where: 'Praktiserende læge',
    description: 'stuff stuff stuff',
    links: ''
  },
  {
    name: '	MFR2',
    when: {
      years: 4
    },
    type: 'vaccine',
    where: 'Praktiserende læge',
    description: 'stuff stuff stuff',
    links: ''
  },
  {
    name: 'Difteri-tetanus-kighoste-polio revaccination',
    when: {
      years: 5,
    },
    type: 'vaccine',
    where: 'Praktiserende læge',
    description: 'stuff stuff stuff',
    links: ''
  },
  {
    name: 'HPV1 og HPV2',
    when: {
      years: 12,
    },
    type: 'vaccine',
    where: 'Praktiserende læge',
    description: 'stuff stuff stuff',
    links: ''
  },
];

export const TimeLineContext = React.createContext(data);

function App() {
  return (
    <div className="App">
      <h1>Børnekalender</h1>
      <Timeline />
    </div>
  );
}

export default App;
