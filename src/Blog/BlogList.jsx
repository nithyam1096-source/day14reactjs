export const BlogList = ({ posts }) => (
  <ul>
    {posts.map((p, i) => <li key={i}>{p}</li>)}
  </ul>
);