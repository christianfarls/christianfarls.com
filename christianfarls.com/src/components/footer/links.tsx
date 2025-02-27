import {IconType, SiGithub, SiGmail, SiLinkedin, SiX,} from '@icons-pack/react-simple-icons'

export default function Links() {
    const links: { icon: IconType; href: string }[] = [
        {
            icon: SiGmail,
            href: 'mailto:cfarls@nd.edu',
        },
        {
            icon: SiGithub,
            href: 'https://github.com/christianfarls',
        },
        {
            icon: SiLinkedin,
            href: 'https://www.linkedin.com/in/christianfarls/',
        },
        {
            icon: SiX,
            href: 'https://x.com/@christianfarls',
        },
    ]

    return (
        <div className="mt-2 flex w-full flex-wrap items-center justify-center gap-10">
            {links.map((link, id) => {
                return (
                    <a target="_blank" key={id} href={link.href}>
                        <link.icon title=""/>
                    </a>
                )
            })}
        </div>
    )
}
