import { Link } from "react-router-dom";

export default function FromNotes({ posts }) {
    return (
        <section className="from-notes">
            <h2 className="section-title fade-up">From the Blog</h2>
            <p className="section-subtile fade-up delay-1">
                Recent reflections
            </p>

            <div className="notes-list fade-up delay-2">
                {posts.slice(0, 3).map(post => (
                    <article key={post.id} className="note-item">

                        {post.image && (
                            <div
                                className="note-image"
                                style={{ backgroundImage: `url(${post.image})` }}
                            />
                        )}

                        <div className="note-content">
                            <h3>{post.title}</h3>
                            <p className="note-excerpt">
                                {post.excerpt}
                            </p>
                            <Link to={`/blog/${post.id}`} className="note-link">
                                Read →
                            </Link>
                        </div>

                    </article>
                ))}
            </div>
        </section>
    );
}