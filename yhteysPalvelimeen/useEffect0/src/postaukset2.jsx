import { useState, useEffect } from "react";

function KayttajanPostaukset() {
  const [userId, setUserId] = useState(1);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        );

        if (!response.ok) {
          throw new Error(
            `Virhe haussa: ${response.status} ${response.statusText}`,
          );
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [userId]);

  return (
    <div>
      <h2>Käyttäjän {userId} postaukset</h2>

      <select
        onChange={(e) => setUserId(Number(e.target.value))}
        value={userId}
      >
        <option value="1">Käyttäjä 1</option>
        <option value="2">Käyttäjä 2</option>
        <option value="3">Käyttäjä 3</option>
      </select>

      {loading && <p>Ladataan...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default KayttajanPostaukset