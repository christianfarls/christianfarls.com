"use client";

import Experience from './../../components/sections/experience'
import Skills from './../../components/sections/skills'
import {SiX} from "@icons-pack/react-simple-icons";

export default function Work() {

    const link = {icon: SiX, href: 'https://x.com/@christianfarls'};
    return (
        <div className="font-base">
            <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Experience</h1>
            <Skills/>
            <Experience/>

        </div>
    )
}
