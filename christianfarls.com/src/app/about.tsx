"use client";

// About Me component for landing page
import {Link} from "next-view-transitions";

export default function About() {

    return (
        <div className="text-base sm:text-md flex-col space-y-4">
            <h1 className="mb-4 text-4xl font-heading sm:text-2xl">About Me</h1>
            <div className="flex items-center space-x-4">
                <img
                    src="/about-me/stanley-cup.jpeg"
                    alt="Farls Family with the Stanley Cup"
                    className="w-48 h-full object-cover rounded-lg transition-transform duration-300 hover:scale-150"
                />
                <p className="ml-4 flex-1">
                    Born and raised in <b>Pittsburgh, PA</b>, I'm a fan of all things between and surrounding the three
                    rivers. When at home, I can often be found catching a Steelers game with my family, stopping by
                    Labriola's to chat with old coworkers, or spending time in Schenley Park with friends.
                </p>
            </div>
            <div className="flex flex-row-reverse items-center space-x-4">
                <img
                    src="/about-me/droids.jpeg"
                    alt="Not the Droids You're Looking For"
                    className="w-48 h-full object-cover rounded-lg transition-transform duration-300 hover:scale-150"
                />
                <p className="mr-4 flex-1">
                    My love for technology began when I was asked to join a friend's FLL (First Lego League) robotics
                    team in 2011. As an inaugural member of 
                    <a 
                        href="https://flltutorials.com/en/halloffame/2018/06/07/Droids.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 hover:font-bold ml-1"
                    >
                        Not the Droids You're Looking For
                    </a>
                    , I learned the basics of drag-and-drop programming, robot design, and late-night debugging sessions.
                </p>
            </div>
            <div className="flex items-center space-x-4">
                <img
                    src="/about-me/apple-camp.jpeg"
                    alt="Farls Family with the Stanley Cup"
                    className="w-32 h-full object-cover rounded-lg transition-transform duration-300 hover:scale-150"
                />
                <p className="ml-4 flex-1">
                    Throughout middle school, I attended summer camps and tutoring sessions to learn the basics of Java
                    and C++. Some of my core childhood memories include creating simple platformers, modding
                    Minecraft, and installing more RAM on my mom's old Macbook Pro. From 2015-2017, I was invited to 
                    work as an instructor at 
                    <a
                        href="https://www.mystemacademy.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-700 hover:font-bold ml-1"
                    >
                        MySTEM Academy
                    </a>
                    . This is where I began to learn how to simplify and effectively communicate technical concepts to
                    individuals with no background.
                </p>
            </div>
            <div className="flex flex-row-reverse items-center space-x-4">
                <img
                    src="/about-me/spot.jpeg"
                    alt="Not the Droids You're Looking For"
                    className="w-48 h-full object-cover rounded-lg transition-transform duration-300 hover:scale-150"
                />
                <p className="mr-4 flex-1">
                    I've tried to diversify my undergraduate education as much as possible, taking courses in all areas
                    of the discipline. Some of my favorites have been <b>Distributed Systems</b>, <b>Intro to Artificial
                    Intelligence</b>, and <b>Hackers in the Bazaar</b>. These have taught me core, emerging, and 
                    historical principles that are important to know as a software engineer.
                </p>
            </div>
            <div className="flex pt-2 pb-2">
                <p className="text-lg ml-4 flex-1 text-center">
                    To learn more about my work, check out my{" "}
                    <Link href="/experience" className="font-bold text-blue-300 hover:underline">
                        Experience
                    </Link>{" "}
                    and{" "}
                    <Link href="/projects" className="font-bold text-blue-300 hover:underline">
                        Projects
                    </Link>{" "}
                    pages!
                </p>
            </div>
        </div>
    );
}
