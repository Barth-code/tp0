const Header = () => {
  return (
    <div className="header">
      <h1>React Cook</h1>
      <form>
        <input
          type="text"
          placeholder="Tapez le nom d'un aliment (en anglais)"
        />
      </form>
    </div>
  );
};

export default Header;
