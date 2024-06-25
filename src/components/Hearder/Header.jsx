import img from "../../assets/react-core-concepts.png";
import "./Header.css";
const rdes = ["Fundamental", "Crucial", "Core"];
function genran(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Head() {
  const des = rdes[genran(2)];
  return (
    <header>
      <img src={img} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {des} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
