const Links = () => {
  const items = ["Home", "Usluge", "Nasi Radovi", "Kontakt", "O nama"];
  return (
    <div className="links">
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default Links;
