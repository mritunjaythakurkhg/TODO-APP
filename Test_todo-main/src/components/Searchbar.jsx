const Searchbar = ({ inp, setInp }) => {
  return (
    <input type="text" value={inp} onChange={(e) => setInp(e.target.value)} />
  );
};

export default Searchbar;
