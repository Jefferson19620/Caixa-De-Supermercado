import { useState } from "react";
import styles from "./Pagamento.module.css";
import { useNavigate } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { DadosDoCliente } from "./components/DadosdoClientes.jsx";
import { ValorRecebido } from "./components/ValorRecebido.jsx";
import { ListaProdutos } from "./components/ListaProdutos.jsx";
import { Estoque } from "./components/Estoque.jsx";
import { GerarNota } from "./components/ListaProdutos.jsx";

export function Pagamento() {
  const [nome, setNome] = useState("");
  const [cpf, setCpfPagamento] = useState("");
  const [contato, setContatoPagamento] = useState("");
  const [totalVenda, setTotalVenda] = useState(0);
  const [valorRecebido, setValorRecebido] = useState(0);
  const [carrinho, setCarrinhoTotal] = useState([]);
  const navigate = useNavigate();


  const finalizarVenda = () => {
    if (!nome) {
      return alert("Digite o nome!");
    }
    if (cpf.length < 14) {
      return alert("CPF inválido!");
    } 
    if (contato.length < 15){
      return alert("Número inválido")
    }
    if (carrinho.length < 1) {
      return alert("Não há nada adicionado no carrinho")
    }
    if (valorRecebido < totalVenda){
      return alert("Dinheiro insuficiente!");
    }

    alert("✅ Venda finalizada!");
    GerarNota(navigate);
  };


  return (
    <div>
      <div className={styles.container}>
        <Header />
        <main className={styles.mainContent}>
          <div className={styles.sidebar}>
            <DadosDoCliente setNome={setNome} setCpfPagamento={setCpfPagamento} setContatoPagamento={setContatoPagamento}/>
            <ValorRecebido totalVenda={totalVenda} setValorRecebido={setValorRecebido} />
          </div>

          <div className={styles.content}>
            <ListaProdutos setTotalVenda={setTotalVenda} setCarrinhoTotal={setCarrinhoTotal}
              finalizarVenda={finalizarVenda} />
          </div>
          <div className={styles.content2}>
            <Estoque />
          </div>
        </main>
      </div>
    </div>
  );
}
