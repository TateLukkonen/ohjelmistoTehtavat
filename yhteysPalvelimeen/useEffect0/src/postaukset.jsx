import { useState, useEffect } from "react";

function Postaukset() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        if (!response.ok) throw new Error(`HTTP-virhe: ${response.status}`);

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Ladataan...</p>;
  if (error) return <p style={{ color: "red" }}>Virhe: {error}</p>;

  return (
    <div>
      <h2>Postaukset</h2>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Postaukset