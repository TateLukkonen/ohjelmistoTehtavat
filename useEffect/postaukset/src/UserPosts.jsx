import { useEffect, useState } from "react";

function UserPosts() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const userResponse = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
        );

        const postsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        );

        if (!userResponse.ok || !postsResponse.ok) {
          throw new Error("Datan haku epäonnistui");
        }

        const userData = await userResponse.json();
        const postsData = await postsResponse.json();

        setUser(userData);
        setPosts(postsData);
      } catch (error) {
        setError(error.message);
        setUser(null);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [userId]);

  function edellinen() {
    if (userId > 1) {
      setUserId(userId - 1);
    }
  }

  function seuraava() {
    if (userId < 10) {
      setUserId(userId + 1);
    }
  }

  return (
    <div>
      <h2>Käyttäjän tiedot ja postaukset</h2>

      <button onClick={edellinen}>Edellinen</button>
      <button onClick={seuraava}>Seuraava</button>

      {loading && <p>Ladataan...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && user && (
        <div>
          <h3>{user.name}</h3>
          <p>Kaupunki: {user.address.city}</p>

          <h3>Postaukset</h3>
          <ul>
            {posts.slice(0, 10).map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserPosts;
