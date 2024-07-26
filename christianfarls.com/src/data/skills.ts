import {
    type IconType,
    SiAmazonaws,
    SiBitbucket,
    SiBootstrap,
    SiC,
    SiCsharp,
    SiCss3,
    SiDjango,
    SiDocker,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiJira,
    SiLinux,
    SiMui,
    SiMysql,
    SiNextdotjs,
    SiNginx,
    SiNodedotjs,
    SiPostman,
    SiPython,
    SiRabbitmq,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVim,
} from '@icons-pack/react-simple-icons'

export type Tier = {
    tier: string;
    backendSkills: { skill: string; icon: IconType }[];
    frontendSkills: { skill: string; icon: IconType }[];
}

const TIERS: Tier[] =
    [
        {
            tier: 'goated',
            backendSkills: [
                {skill: 'python', icon: SiPython},
                {skill: 'C', icon: SiC},
                {skill: 'git', icon: SiGit},
                {skill: 'bitbucket', icon: SiBitbucket},
                {skill: 'jira', icon: SiJira},
            ],
            frontendSkills: [
                {skill: 'react', icon: SiReact},
                {skill: 'typescript', icon: SiTypescript},
                {skill: 'javascript', icon: SiJavascript},
                {skill: 'html', icon: SiHtml5},
                {skill: 'css', icon: SiCss3},
            ]
        },
        {
            tier: 'been there, done that',
            backendSkills:
                [
                    {skill: 'C#', icon: SiCsharp},
                    {skill: 'nodejs', icon: SiNodedotjs},
                    {skill: 'linux', icon: SiLinux},
                    {skill: 'postman', icon: SiPostman},
                ],
            frontendSkills:
                [
                    {skill: 'nextjs', icon: SiNextdotjs},
                    {skill: 'mui', icon: SiMui},
                ]
        },
        {
            tier: 'mid',
            backendSkills:
                [
                    {skill: 'mysql', icon: SiMysql},
                    {skill: 'docker', icon: SiDocker},
                    {skill: 'django', icon: SiDjango},
                    {skill: 'vim', icon: SiVim},
                ],
            frontendSkills:
                [
                    {skill: 'tailwind', icon: SiTailwindcss},
                ]
        },
        {
            tier: 'can carry a convo',
            backendSkills:
                [
                    {skill: 'nginx', icon: SiNginx},
                    {skill: 'rabbitmq', icon: SiRabbitmq},
                    {skill: 'aws', icon: SiAmazonaws},
                ],
            frontendSkills: [
                {skill: 'bootstrap', icon: SiBootstrap},
            ]
        },
    ]

export default TIERS
