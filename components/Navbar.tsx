export const Navbar = () => {
  return (
    <div className="mx-auto w-4/5">
      <ul className="flex justify-evenly mb-10">
        <li className="text-3xl"><a href="/videos">Videos</a></li>
        <li className="text-3xl"><a href="/concerts">Conciertos</a></li>
        <li className="text-3xl"><a href="/store">Tienda</a></li>
      </ul>
    </div>
  );
};
