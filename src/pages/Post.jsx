import ReactMarkdown from "react-markdown";
import { useParams, Link } from "react-router-dom";
import { posts } from "../posts";

export default function Post() {
  const { id } = useParams();
  const post = posts.find(p => p.id ===id);

  if (!post) return <p>Post not found</p>;

  return (
    <div className="post-page">
      {post.image && (
        <div
          className="post-hero"
          style={{ backgroundImage: `url(${post.image})` }}  
        />
      )}

      <article className="post-content fade-up">
        <ReactMarkdown>{post.content}</ReactMarkdown>

        <div className="post-back">
           <Link className="blog-link" to="/blog">← Back to Blog</Link>
        </div>
      </article>
    </div>
  );
}