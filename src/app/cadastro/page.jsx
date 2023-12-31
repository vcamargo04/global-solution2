"use client";
import { useState, useEffect } from "react";
import styles from "../../styles/cadastro.module.css";
import Cabecalho from "../../components/Cabecalho/Cabecalho";

const Cadastro = () => {
  const [cadastroData, setCadastroData] = useState({
    NM_PACIENTE: "",
    cpf: "",
    USER_NAME: "",
    senha: "",
  });

  const salvarNoSessionStorage = (paciente) => {
    const pacientesCadastrados = JSON.parse(sessionStorage.getItem("pacientes")) || [];
    pacientesCadastrados.push(paciente);
    sessionStorage.setItem("pacientes", JSON.stringify(pacientesCadastrados));
  };

  const handleChange = (e, field) => {
    const value = e.target.value;
    setCadastroData((prevCadastroData) => ({
      ...prevCadastroData,
      [field]: value,
    }));
  };

  const cadastrar = async () => {
    if (
      !cadastroData.NM_PACIENTE ||
      !cadastroData.cpf ||
      !cadastroData.USER_NAME ||
      !cadastroData.senha
    ) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    if (!/^\d+$/.test(cadastroData.cpf) || cadastroData.cpf.length !== 11) {
      alert("CPF inválido. Deve conter apenas números e ter 11 caracteres.");
      return;
    }

    try {
      const responseCadastro = await fetch("http://127.0.0.1:8080/paciente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cadastroData),
      });

      if (responseCadastro.ok) {
        salvarNoSessionStorage(cadastroData);
        alert("Cadastro realizado com sucesso!");
        limparCampos();
      } else {
        alert(
          "Erro ao cadastrar paciente. Verifique os dados e tente novamente."
        );
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
      alert("Erro ao realizar a operação. Tente novamente mais tarde.");
    }
  };

  const limparCampos = () => {
    setCadastroData({ NM_PACIENTE: "", cpf: "", USER_NAME: "", senha: "" });
  };

  const adicionarPacientesPreCadastrados = () => {
    const pacientesPreCadastrados = [
      { NM_PACIENTE: "Eduardo", cpf: "12345678901", USER_NAME: "eduardo@gmail.com", senha: "1234" },
      { NM_PACIENTE: "Vinicius", cpf: "23456789012", USER_NAME: "vinicius@gmail.com", senha: "12345" },
      { NM_PACIENTE: "Luiz", cpf: "34567890123", USER_NAME: "luiz@gmail.com", senha: "123456" },
    ];

    pacientesPreCadastrados.forEach(salvarNoSessionStorage);
  };

  useEffect(() => {
    adicionarPacientesPreCadastrados();
  }, []);

  const currentPath = "/cadastro";

  return (
    <main>
      <Cabecalho currentPath={currentPath} />

      <div className={styles.container}>
        <h1 className={styles.title}>Cadastro de Paciente</h1>
        <form className={styles.form}>
          <label className={styles.label} htmlFor="NM_PACIENTE">
            Nome:
          </label>
          <input
            className={styles.input}
            type="text"
            id="NM_PACIENTE"
            value={cadastroData.NM_PACIENTE}
            onChange={(e) => handleChange(e, "NM_PACIENTE")}
          />

          <label className={styles.label} htmlFor="cpf">
            CPF:
          </label>
          <input
            className={styles.input}
            type="text"
            id="cpf"
            value={cadastroData.cpf}
            onChange={(e) => handleChange(e, "cpf")}
          />

          <label className={styles.label} htmlFor="USER_NAME">
            Email:
          </label>
          <input
            className={styles.input}
            type="text"
            id="USER_NAME"
            value={cadastroData.USER_NAME}
            onChange={(e) => handleChange(e, "USER_NAME")}
          />

          <label className={styles.label} htmlFor="senha">
            Senha:
          </label>
          <input
            className={styles.input}
            type="password"
            id="senha"
            value={cadastroData.senha}
            onChange={(e) => handleChange(e, "senha")}
          />

          <div className={styles.buttonContainer}>
            <button className={styles.button} type="button" onClick={cadastrar}>
              Cadastrar
            </button>
            <button
              className={styles.button}
              type="button"
              onClick={limparCampos}>
              Limpar Dados
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Cadastro;
