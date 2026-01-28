import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import post1 from "./posts/what-is-in-your-hands.md?raw";
import post2 from "./posts/the-power-of-teamwork.md?raw";

const posts = [
  { id: "what-is-in-your-hands", title: "What Is in Your Hands?", content: post1 },
  { id: "the-power-of-teamwork", title: "The Power of Teamwork", content: post2 },
];

function App() {
  return (
    <Router basename="/my-react-blog">
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<PostWrapper posts={posts} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

import { useParams } from "react-router-dom";
function PostWrapper() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);
  return <Post post={post} />;
}

export default App;