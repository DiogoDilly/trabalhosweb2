//import { useNavigate } from "react-router";
import { Header } from "../../components/header";
import "./style.css";

export function Checkout() {
  //const navigate = useNavigate();

  //function handleNavigate() {
  //navigate("/home");
  //}

  return (
    <>
      <Header />
      <h1>Complete seu pedido </h1>
      <div className="container">
        <h1>Endereço de Entrega</h1>
        <p>Informe o endereço onde deseja receber seu pedido</p>
        <form action="">
          <input type="number" name="cep" placeholder="CEP" />
          <input type="text" name="rua" placeholder="Rua" />
          <input type="text" name="" placeholder="" />
          <input type="text" name="" placeholder="" />
          <input type="text" name="" placeholder="" />
          <input type="text" name="" placeholder="" />
          <input type="text" name="" placeholder="UF" />
        </form>
      </div>
    </>
  );
}
