
import "./App.css";
import imagem from "./assets/jenistock.png";

function App() {
  return (
    <div className="pagina">
      <header>
        <h1>🌸 JeniStock</h1>
        <p>Controle de Estoque de Perfumes</p>
      </header>

      <main>
        <img
          src={imagem}
          alt="Página inicial JeniStock com perfumes e rosas"
          className="imagem-principal"
        />
      </main>
    </div>
  );
}

export default App;
