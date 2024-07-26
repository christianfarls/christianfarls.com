"use client";

import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'
import {SiX} from "@icons-pack/react-simple-icons";

export default function Work() {

    const link = {icon: SiX, href: 'https://x.com/@christianfarls'};
    return (
        <div className="font-base">
            <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Work</h1>

            <div className="mb-10 text-base sm:text-lg">
                <p>Through internships, side projects, and tips I'll read between Steelers roster updates
                    on&nbsp;
                    <s>twitter</s>
                    &nbsp;
                    <a target="_blank"
                       href={link.href}
                       style={{display: "inline-block"}}>
                        <link.icon title=""/>
                    </a>
                    , I've strived to learn everything I can about how to build and maintain a system. This only problem
                    is...that ain't easy. Plus everyone has to be unique. Why can't we all just agree on a framework.
                </p>
                <br/>
                <p>Anyway...here's what I know (and what I don't).</p>
            </div>

            <Skills/>
            <Experience/>

        </div>
    )
}
