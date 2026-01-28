import { Link } from "react-router-dom";
import { useMemo } from "react";

export default function FeaturedPost({ posts }) {
    const featured = useMemo(() => {
        return posts[Math.floor(Math.random() * posts.length)];
    }, [posts]);

    return (
        <section className="featured-post fade-up">
            <div
                className="featured-image"
                style={{ backgroundImage: `url(${featured.image})` }}
            />

            <div className="featured-content">
                <span className="featured-label">Featured</span>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>

                <Link to={`/blog/${featured.id}`} className="featured-link">
                    Read this →
                </Link>
            </div>
        </section>
    );
}