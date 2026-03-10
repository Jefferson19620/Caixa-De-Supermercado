import { useState } from "react";
import styles from "./DadosdoClientes.module.css";

export function DadosDoCliente({ setNome, setCpfPagamento, setContatoPagamento }) {
  const [contato, setContato] = useState("");
  const [cpf, setCpf] = useState("");

  const formatarContato = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    if (value.length > 15) return;
    setContato(value);
    setContatoPagamento(value);

    setContato(value);
    setContatoPagamento(value);

    localStorage.setItem("contatoCliente", value);
  };

  const formatarCpf = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    if (value.length > 14) return;
    setCpf(value);
    setCpfPagamento(value);

    setCpf(value);
    setCpfPagamento(value);

    localStorage.setItem("cpfCliente", value);
  };

  function quandoDigitarNome(e) {
    const valor = e.target.value;
    setNome(valor);

    localStorage.setItem("nomeCliente", valor);
  }

  return (
    <div className={styles.Container}>
      <h1 className={styles.dados}>Dados do Cliente</h1>

      <input name="nome" placeholder="Nome" onChange={quandoDigitarNome} required className={styles.inputsConteiner} />

      <input name="contato" placeholder="Contato" value={contato} onChange={formatarContato} required className={styles.inputsConteiner} />

      <input name="CPF" placeholder="CPF" value={cpf} onChange={formatarCpf} required className={styles.inputsConteiner} />
    </div>
  );
}