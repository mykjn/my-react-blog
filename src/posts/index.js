import post1 from "./what-is-in-your-hands.md?raw";
import post2 from "./the-power-of-teamwork.md?raw";
import post3 from "./be-doers-of-gods-word.md?raw";

export const posts = [
    {
        id: "what-is-in-your-hands",
        title: "What Is in Your Hands",
        excerpt: "God has always used what was already there.",
        image: `${import.meta.env.BASE_URL}images/what-is-in-your-hands.jpg`,
        content: post1,
    },
    {
        id: "the-power-of-teamwork",
        title: "The Power of Teamwork",
        excerpt: "Ministry grows best when no one insists on doing it alone.",
        image: `${import.meta.env.BASE_URL}images/the-power-of-teamwork.jpg`,
        content: post2,
    },
    {
        id: "be-doers-of-gods-word",
        title: "Be Doers of God's Word",
        excerpt: "Faith was never meant to stay theoretical.",
        image: `${import.meta.env.BASE_URL}images/be-doers-of-gods-word.jpg`,
        content: post3,
    },
];