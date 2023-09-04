import { useRef } from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const counterRef = useRef({ counter: 0 });

  return (
    <div>
      <p>Dashboard</p>

      <p>Contador: {counterRef.current.counter}</p>

      <button onClick={() => counterRef.current.counter++}>Somar +1</button>

      <Link to="/entrar">Login</Link>
    </div>
  );
};
