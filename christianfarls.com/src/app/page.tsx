"use client";

import Links from '@/components/links'

export default function Home() {
    return (
        <div className="font-base">
            <h1 className="text-2xl font-heading sm:text-6xl pb-3">Christian Farls</h1>
            <p className="mt-2 text-lg sm:text-3xl">Software Engineer</p>
            <div className="mt-8 text-base sm:text-lg">
                <p>
                    Welcome to my site! I'm a senior at the University of Notre Dame studying computer science. Feel
                    free to check out the other tabs until my landing page is finished.
                </p>
                <br/>
            </div>

            <Links/>
        </div>
    )
}
