const PAST_ROLES: {
    company: string
    role: string
    description: string
    startDate: string
    endDate: string
}[] = [
    {
        company: 'Mitsubishi Electric Power Products',
        role: 'Full Stack Software Engineer Intern',
        description:
            'Influenced clients to choose our service over competitors by redesigning the UI of a critical Inspection ' +
            'module using React and TypeScript, adding a new feature that garnered positive feedback from a potential ' +
            'customer during a demo. Improved user import accessibility and increased system performance by ' +
            'reengineering the drone data import job into modular services in C#, adding on-demand flight data ' +
            'retrieval and reducing local storage usage. Enhanced software functionality and contributed to a ' +
            'successful new release by implementing valuable features from the backlog such as extracting location data ' +
            'from imagery and plotting pins on a map.',
        startDate: 'May 2024',
        endDate: 'August 2024',
    },
    {
        company: 'Mitsubishi Electric Power Products',
        role: 'Frontend Engineer Intern',
        description:
            'Developed a page to display hardware details--including device IP addresses, connection statuses, and logs' +
            '--utilizing database information to offer essential insights on payloads used in inspection analysis. ' +
            'Utilized Label Studio to annotate raw video, producing JSON datasets which were used to train a new ' +
            'computer vision model for detecting and analyzing substation assets.',
        startDate: 'May 2023',
        endDate: 'August 2023',
    },
    {
        company: 'Notre Dame Center for Research Computing',
        role: 'Summer Research and Development Intern',
        description:
            'Proactively self-taught React, TypeScript, HTML, and CSS to develop and evaluate chat functionalities of ' +
            'a game engine library, contributing to the creation of a functional prototype. Collaborated with senior ' +
            'developers to clarify project objectives, enhancing research effectiveness. Developed documentation and ' +
            'presented findings to the team, facilitating informed decision-making for future development.',
        startDate: 'June 2022',
        endDate: 'August 2022',
    },
]

export default PAST_ROLES
