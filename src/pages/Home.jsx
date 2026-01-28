import { Link } from "react-router-dom";
import FromNotes from "../components/FromNotes";
import FeaturedPost from "../components/FeaturedPost";
import { posts } from "../posts";


export default function Home() {
    return (
        <div className="blog-container">


            <section className="hero">
                <h1 className="hero-title fade-up">
                    Amen,<br />
                    Let Me Write That Down.
                </h1>

                <p className="hero-subtitle fade-up delay-1">
                    A collection of sermon notes, reflections and reminders.
                </p>
            </section>

            <FeaturedPost posts={posts} />

            <FromNotes posts={posts} />

            <section className="closing-line fade-up">
                <p className="closing-text">
                    These notes are written to be practiced, not just remembered.
                </p>

                <span className="closing-signature">
                   — Janu 
                </span>
            </section>
            
        </div>
    );
}