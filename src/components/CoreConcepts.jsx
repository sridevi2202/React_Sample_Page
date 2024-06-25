export default function CoreConcepts({ title, img, des }) {
  return (
    <li>
      <img src={img} alt="error" />
      <h3>{title}</h3>
      <p>{des}</p>
    </li>
  );
}
