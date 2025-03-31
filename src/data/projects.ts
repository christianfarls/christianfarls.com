const PROJECTS: {
  name: string;
  description: string;
  previewImage: string;
  repoUrl: string;
  liveLink?: string;
  tags: string[];
  date: string;
}[] = [
  {
    name: 'StudyChat',
    description: 'A distributed, peer-to-peer messaging system with a minimal naming server for room coordination, ' +
        'leveraging UDP communication, vector clocks, and message logs to ensure high availability, eventual ' +
        'consistency, and robust failure recovery.',
    liveLink: 'https://docs.google.com/document/d/1AdUmk_XD2TNF-lMiXTPveDVo2H6abwEFPXYFhO2NHP4/edit?usp=sharing',
    previewImage: '/projects/study-chat.png',
    repoUrl: 'https://github.com/tkusak27/p2p-messenger',
    tags: ['Python', 'Distributed Systems'],
    date: '2024-12-01T00:00:00'
  },
  {
    name: 'GearShifter',
    description: 'An interactive racing game using Arduino and C, where players use two buttons to shift gears at ' +
        'optimal times, demonstrating expertise in embedded systems and real-time programming.',
    previewImage: '/projects/gear-shifter.png',
    repoUrl: 'https://github.com/tkusak27/GearShifter',
    tags: ['C', 'Arduino'],
    date: '2024-09-01T00:00:00'
  },
  {
    name: 'InternAI',
    description: 'A Python-based virtual assistant using the OpenAI GPT-3.5 API to help users find suitable internship ' +
        'opportunities based on position, location, and preferences by integrating external job boards using ' +
        'web-scraping to provide real-time listings.',
    previewImage: '/projects/intern-ai.png',
    repoUrl: 'https://github.com/christianfarls/introAIInternshipHelper',
    tags: ['Python', 'Artificial Intelligence'],
    date: '2023-12-01T00:00:00'
  },
  {
    name: 'Corby Chart',
    description: 'An open-source online database for friends to keep statistics on competitions. Tracks individual ' +
        'performance of specific games over time and clearly displays this information to the user through a simple UI.',
    previewImage: '/projects/corby-chart.png',
    repoUrl: 'https://github.com/christianfarls/corby-chart',
    tags: ['React.js', 'Docker', 'Python', 'PostgreSQL'],
    date: '2024-12-01T00:00:00'
  },
  {
    name: 'Categories',
    description: 'A New York Times-style word game built in Go, containerized in Docker, and deployed through AWS.',
    previewImage: '/projects/categories.png',
    repoUrl: 'https://github.com/tkusak27/project02',
    tags: ['Go', 'Docker', 'AWS'],
    date: '2024-10-01T00:00:00'
  },
  {
    name: 'Parking Lot Simulator',
    description: 'This Verilog module simulates a parking lot with functionalities for entering and exiting a parking ' +
        'lot. It uses a FSM to control the gates, validate passcodes, and maintain car count.',
    previewImage: '/projects/parking-lot.png',
    repoUrl: 'https://github.com/christianfarls/cmz25_final_project',
    tags: ['Verilog'],
    date: '2024-12-01T00:00:00'
  },
];

export default PROJECTS;
