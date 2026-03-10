import styles from "./NotaFiscal.module.css";
import { useNavigate } from "react-router-dom";

export function NotaFiscal() {
  const nome = localStorage.getItem("nomeCliente");
  const cpf = localStorage.getItem("cpfCliente");
  const contato = localStorage.getItem("contatoCliente");
  const navigate = useNavigate();
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const total = localStorage.getItem("total");

  const data = new Date().toLocaleDateString("pt-BR");

  const formatarMoeda = (valor) => {
    return Number(valor).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const imprimirNota = () => {
    document.getElementById("botaoImprimir").style = "display: none";
    window.print();
    navigate("/");
  }

  return (
    <div className={styles.containerNotaFiscal}>
      <div className={styles.notaFiscal}>
        <h1>Nota Fiscal</h1>

        <div>
          <h2>Dados do Cliente</h2>
          <p>
            <strong>Nome:</strong> {nome}
          </p>
          <p>
            <strong>CPF:</strong> {cpf}
          </p>
          <p>
            <strong>Contato:</strong> {contato}
          </p>
          <p>
            <strong>Data:</strong> {data}
          </p>
        </div>

        <div>
          <h2>Produtos</h2>

          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Valor Unitário</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {carrinho.map((item, index) => (
                <tr key={index}>
                  <td>{item.produto}</td>
                  <td>{item.quantidade}</td>
                  <td>{formatarMoeda(item.valor)}</td>
                  <td>{formatarMoeda(item.valor * item.quantidade)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h2>Total da Compra</h2>
          <p>{formatarMoeda(total)}</p>
        </div>

        <div>
          <button onClick={imprimirNota} id="botaoImprimir">Imprimir Nota</button>
        </div>
      </div>
    </div>
  );
}
