// import { BarLoader } from "react-spinners";

const loadingQuotes: string[] = [
    "Loading... Please wait. And wait. And wait...",
    "Creating a black hole for temporary storage...",
    "Summoning the spirits of ancient programmers...",
    "Spinning up a hamster wheel for processing power...",
    "Converting caffeine into code...",
    "Unleashing the monkeys to write the code...",
    "Searching for the meaning of life, the universe, and JavaScript errors...",
    "Assembling the Avengers of programming...",
    "Performing a Vulcan mind meld...",
    "Attempting to build a TARDIS from spare parts...",
    "Preparing to make the Kessel Run in less than 12 parsecs...",
    "Generating random excuses for software bugs...",
    "Infusing code with magical properties...",
    "Running out of witty loading quotes...",
    "Waiting for a groundbreaking scientific discovery...",
    "Finding the perfect balance between art and debugging...",
    "Learning to speak Klingon...",
    "Consulting the ancient scrolls of programming wisdom...",
    "Rebooting the Matrix...",
];

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function LoadingPage() {
    return <section className="app-bg w-screen h-screen flex flex-col items-center justify-center">
        <h2 className="text-[#45C98A] font-bold mb-5 text-lg max-w-[90vw] text-center">{loadingQuotes[getRandomInt(0, loadingQuotes.length - 1)]}</h2>
        {/* <BarLoader color="#45C98A" /> */}
    </section>
}