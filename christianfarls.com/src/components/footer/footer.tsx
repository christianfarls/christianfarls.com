import Links from "./links";

export default function Footer() {
    return (
        <div className="pt-4">
            <div className="fixed bottom-0 left-0 w-full p-2 bg-white/80 dark:bg-black/80 shadow-md flex flex-col">
                <Links />
                <span className="text-sm text-black dark:text-white text-center mt-1">
                    © Copyright 2025 Christian Farls. All rights reserved. Powered by Next.js and Neon. 
                    Styled by shadcn and Tailwind.
                </span>
            </div>
        </div>
    );
}
