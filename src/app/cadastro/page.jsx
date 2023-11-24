"use client";
import { useState } from "react";
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

  const adicionarPacientesPreCadastrados = () => {
    const pacientesPreCadastrados = [
      { NM_PACIENTE: "Eduardo", cpf: "12345678901", USER_NAME: "eduardo@gmail.com", senha: "1234" },
      { NM_PACIENTE: "Vinicius", cpf: "98765432101", USER_NAME: "vinicius@gmail.com", senha: "12345" },
      { NM_PACIENTE: "Luiz", cpf: "56789012345", USER_NAME: "luiz@gmail.com", senha: "123456" },
    ];

    pacientesPreCadastrados.forEach((paciente) => salvarNoSessionStorage(paciente));
  };

  useEffect(() => {
    adicionarPacientesPreCadastrados();
  }, []);

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

  const currentPath = "/cadastro";

  return (
    <main>
      <Cabecalho currentPath={currentPath} />

      <div className={styles.container}>
        <h1 className={styles.title}>Cadastro de Paciente</h1>
        <form className={styles.form}>
          {/* ... (campos do formulário) */}

          <div className={styles.buttonContainer}>
            <button className={styles.button} type="button" onClick={cadastrar}>
              Cadastrar
            </button>
            <button
              className={styles.button}
              type="button"
              onClick={limparCampos}
            >
              Limpar Dados
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Cadastro;