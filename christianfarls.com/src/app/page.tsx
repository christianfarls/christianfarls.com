"use client";

import About from "../app/about";
import Section from "../components/section";
import Footer from "../components/footer/footer";
import Contact from "../app/contact/page";

export default function Home() {
    return (
        <div className="flex flex-col space-y-2">
            {/* Row for Landing Info and Picture */}
            <div className="flex items-start space-x-4">
                {/* Landing Info Text */}
                <div className="font-base max-w-md">
                    <Section>
                        <h1 className="text-xl font-heading sm:text-3xl pb-3">Christian Farls</h1>
                        <p className="text-lg sm:text-2xl">Software Engineer</p>  
                        <div className="mt-2 text-base sm:text-md flex flex-col space-y-4">
                            <p>
                                I'm an undergraduate at the <b>University of Notre Dame</b> working towards my Bachelors of Science
                                in <b>Computer Science</b>.
                            </p>
                            <p>
                                I’m passionate about everything <b>full-stack</b>. I love exploring the modern frameworks and 
                                libraries that help developers build intuitive, high-performing applications, with particular
                                interests in <b>distributed systems</b>, <b>front-end frameworks</b>, and <b>artificial
                                intelligence</b>.
                            </p>
                        </div>
                    </Section>
                </div>
    
                {/* Image */}
                <div className="shrink-0">
                    <img
                        src="/website-headshot.jpeg"
                        alt="Christian Farls"
                        className="w-48 h-64 object-cover rounded-lg"
                    />
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-sm font-semibold">Christian Farls</p>
                        <p className="text-sm font-semibold">Pittsburgh, PA</p>
                        <p className="text-sm font-semibold">cfarls@nd.edu</p>
                    </div>
                </div>
            </div>
            
            <Section>
                <About/>
            </Section>
  
            <Section>
                <Contact/>
            </Section>

            <Footer />
        </div>
    )
}
