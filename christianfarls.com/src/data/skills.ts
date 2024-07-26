import {
    type IconType,
    SiAstro,
    SiBootstrap,
    SiCss3,
    SiDocker,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNginx,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiRedis,
    SiRubyonrails,
    SiSass,
    SiTailwindcss,
} from '@icons-pack/react-simple-icons'

export type Tier = {
    tier: string;
    skills: { skill: string; icon: IconType }[];
}

const TIERS: Tier[] =
    [
        {
            tier: 'goated',
            skills: [
                {skill: 'html', icon: SiHtml5},
                {skill: 'css', icon: SiCss3},
                {skill: 'javascript', icon: SiJavascript},
                {skill: 'react', icon: SiReact},
                {skill: 'sass', icon: SiSass},
                {skill: 'tailwind', icon: SiTailwindcss},
                {skill: 'nextjs', icon: SiNextdotjs},
                {skill: 'astro', icon: SiAstro},
                {
                    skill: 'bootstrap',
                    icon: SiBootstrap,
                },
            ],
        },
        {
            tier: 'been there, done that',
            skills:
                [
                    {
                        skill: 'nodejs',
                        icon: SiNodedotjs,
                    },
                    {
                        skill: 'ruby on rails',
                        icon: SiRubyonrails,
                    },
                    {
                        skill: 'redis',
                        icon: SiRedis,
                    },
                    {
                        skill: 'postgresql',
                        icon: SiPostgresql,
                    },
                    {
                        skill: 'mongodb',
                        icon: SiMongodb,
                    },
                    {
                        skill: 'mysql',
                        icon: SiMysql,
                    },
                    {
                        skill: 'nginx',
                        icon: SiNginx,
                    },
                    {
                        skill: 'docker',
                        icon: SiDocker,
                    },
                ],
        }
        ,
        {
            tier: 'mid',
            skills:
                [
                    {
                        skill: 'nodejs',
                        icon: SiNodedotjs,
                    },
                    {
                        skill: 'ruby on rails',
                        icon: SiRubyonrails,
                    },
                    {
                        skill: 'redis',
                        icon: SiRedis,
                    },
                    {
                        skill: 'postgresql',
                        icon: SiPostgresql,
                    },
                    {
                        skill: 'mongodb',
                        icon: SiMongodb,
                    },
                    {
                        skill: 'mysql',
                        icon: SiMysql,
                    },
                    {
                        skill: 'nginx',
                        icon: SiNginx,
                    },
                    {
                        skill: 'docker',
                        icon: SiDocker,
                    },
                ],
        }
        ,
        {
            tier: 'can carry a convo',
            skills:
                [
                    {
                        skill: 'nodejs',
                        icon: SiNodedotjs,
                    },
                    {
                        skill: 'ruby on rails',
                        icon: SiRubyonrails,
                    },
                    {
                        skill: 'redis',
                        icon: SiRedis,
                    },
                    {
                        skill: 'postgresql',
                        icon: SiPostgresql,
                    },
                    {
                        skill: 'mongodb',
                        icon: SiMongodb,
                    },
                    {
                        skill: 'mysql',
                        icon: SiMysql,
                    },
                    {
                        skill: 'nginx',
                        icon: SiNginx,
                    },
                    {
                        skill: 'docker',
                        icon: SiDocker,
                    },
                ],
        }
        ,
    ]

export default TIERS
