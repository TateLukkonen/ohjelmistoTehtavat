function Vahenna({ setCount }) {
  return (
    <div>
      <button onClick={() => setCount((prev) => prev - 1)}>
        Vähennä Lukemaa
      </button>
    </div>
  );
}

export default Vahenna;