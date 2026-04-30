function Tupla({ setCount }) {
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 2)}>
        Kertaa Lukemaa kahdella
      </button>
    </div>
  );
}

export default Tupla;
