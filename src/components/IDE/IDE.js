function IDE({ url, name }) {
  return (
    <figure>
      <img src={url} alt={`Logo ${name}`} width={150} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default IDE;
