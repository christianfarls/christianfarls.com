import Links from "./links";

export default function Footer() {
    return (
        <div className="pt-4">
            <div className="fixed bottom-0 left-0 w-full p-2 bg-white/80 shadow-md flex flex-col">
                <Links />
                <span className="text-sm text-gray-700 text-center mt-1">
                    © Copyright 2025 Christian Farls. All rights reserved. Powered by Next.js and Tailwind. Styled by shadcn.
                </span>
            </div>
        </div>
    );
}
