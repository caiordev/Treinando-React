import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { UsuarioLogadoContext } from "../../shared/contexts";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const { nomeDoUsuario } = useContext(UsuarioLogadoContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const emailLength = useMemo(() => {
    return email.length;
  }, [email.length]);

  useEffect(() => {
    if (window.confirm("Voce é homem?")) {
      console.log("homem");
    } else {
      console.log("mulher");
    }
  }, []);

  useEffect(() => {
    console.log(email);
    console.log(senha);
  }, [email, senha]);

  //assim que inicia ele não faz logo pq ela é chamada apenas com o click.
  const handleEntrar = useCallback(() => {
    console.log(email);
    console.log(senha);
  }, [email, senha]);

  return (
    <div>
      <form action="">
        <p>Quantidade de caracteres do email: {emailLength}</p>
        <p>{nomeDoUsuario}</p>

        <InputLogin
          label="Email"
          value={email}
          onChange={(newValue) => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />
        <InputLogin
          ref={inputPasswordRef}
          type="password"
          label="Senha"
          value={senha}
          onChange={(newValue) => setSenha(newValue)}
        />

        {/* <label htmlFor="">
          <span>Email</span>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" ? inputPasswordRef.current?.focus() : undefined
            }
          />
        </label>

        <label htmlFor="">
          <span>Senha</span>
          <input
            type="password"
            value={senha}
            ref={inputPasswordRef}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label> */}

        {/* <button type="button" onClick={handleEntrar}>
          Entrar
        </button> */}

        <ButtonLogin type="button" onClick={handleEntrar} />
        <ButtonLogin type="button" onClick={handleEntrar}>
          Cadastrar-se
        </ButtonLogin>
      </form>
    </div>
  );
};
