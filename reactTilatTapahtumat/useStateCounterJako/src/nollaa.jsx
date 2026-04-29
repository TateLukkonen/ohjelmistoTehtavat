function Nollaa({ setCount }) {
  return (
    <div>
      <button onClick={() => setCount((prev) => prev - prev)}>
        Kasvata Lukemaa
      </button>
    </div>
  );
}

export default Nollaa;
