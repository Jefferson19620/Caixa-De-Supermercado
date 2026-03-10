import { useState } from "react";
import styles from "./ValorRecebido.module.css";

export function ValorRecebido({ totalVenda, setValorRecebido }) {
  const [valorInput, setValorInput] = useState("");
  const [valorNumerico, setValorNumerico] = useState(0); // Guardamos o número puro para cálculo

  const formatarDinheiro = (e) => {
    let rawValue = e.target.value.replace(/\D/g, "");
    let numberValue = Number(rawValue) / 100;

    const result = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(numberValue);

    setValorInput(rawValue ? result : "");
    setValorNumerico(numberValue); 
    setValorRecebido(numberValue);
  };

  const troco = valorNumerico > totalVenda ? valorNumerico - totalVenda : 0;

  const formatarMoeda = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div className={styles.teste}>
      <h1 className={styles.titulo}>Valor Recebido:</h1>
      
      <input 
        name="valorT" 
        placeholder="R$ 0,00" 
        className={styles.valor} 
        value={valorInput} 
        onChange={formatarDinheiro}
      />

      <h1 className={styles.tituloTroco}>Troco</h1>
      <h1 className={styles.valorTroco}>{formatarMoeda(troco)}</h1>
    </div>
  );
}