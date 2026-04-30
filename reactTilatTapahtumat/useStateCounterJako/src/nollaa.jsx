function Nollaa({ setCount }) {
  return (
    <div>
      <button onClick={() => setCount((prev) => prev - prev)}>
        Nollaa Lukemaa
      </button>
    </div>
  );
}

export default Nollaa;
