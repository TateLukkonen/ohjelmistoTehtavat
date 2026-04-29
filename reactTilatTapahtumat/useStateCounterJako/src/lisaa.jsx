function Lisaa({ setCount }) {
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Kasvata Lukemaa
      </button>
    </div>
  );
}

export default Lisaa;
