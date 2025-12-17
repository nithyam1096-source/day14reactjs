import { useEffect, useContext } from "react";
import { BlogForm } from "./BlogForm";
import { BlogList } from "./BlogList";
import { ThemeContext } from "./ThemeContext";
import { useLocalStorage } from "./useLocalStorage";

export const BlogApp = () => {
  const [posts, setPosts] = useLocalStorage("posts", []);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = posts[posts.length - 1] || "Blog";
  }, [posts]);

  return (
    <div className={theme}>
      <h2>Blog</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
      <BlogForm addPost={(t) => setPosts([...posts, t])} />
      <BlogList posts={posts} />
    </div>
  );
};
