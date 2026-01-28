import { Link } from "react-router-dom";
import { posts } from "../posts";

export default function Blog() {
  return (
    <div className="blog-feed">
      <h1 className="blog-feed-title fade-up">Blog</h1>

      <div className="blog-feed-grid">
        {posts.map((post) => (
          
          <Link 
            key={post.id}
            to={`/blog/${post.id}`}
            className="blog-feed-item fade-up delay-1"
            style={{ backgroundImage: `url(${post.image})` }}
          >
            <div className="blog-feed-overlay">
              <h2>{post.title}</h2>
            </div>
          </Link>
          
        ))}
      </div>
    </div>
  );
}
