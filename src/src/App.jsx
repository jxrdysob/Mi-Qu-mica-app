import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
      <h1>🔬 Mi App de Química</h1>
      <p>Escribe el nombre de un compuesto y verás su estructura.</p>
      <button 
        onClick={() => alert("Ejemplo: m-dicloro benceno → estructura")}
        style={{ padding: "10px 20px", fontSize: "16px", marginTop: "20px" }}
      >
        Ver Ejemplo
      </button>
    </div>
  );
}

export default App;
