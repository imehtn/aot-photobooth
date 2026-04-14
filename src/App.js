import './App.css';
import React from "react";
import PhotoBooth from "./components/photobooth"
import "./styles/global.css"

//lconst logoSrc = ""

function App() {
  return (
    <div className="App" style={{
      minHeihgt: "100vh",
      display: "flex", 
      flexDirection: "column",
      alignItems: "center"
    }}>
      <div style = {{
        width: "100%", 
        maxWidth: 1200, 
        display: "flex",
        alignItems: "center", 
        gap: 12, 
        padding: "20px 32px"
      }}>
      {/* <img src={logoSrc} alt="JiggleDuo Logo" style={{ width: 50 }} />*/}
       <h1 style={{
          fontFamily: "AOT",
          color: "#41713e",
          margin: "50px auto",
          textAlign: "center",
          fontSize: "3.5rem",
          width: "100%"
        }}>
          AttackOnTitan Booth
        </h1> 
      </div>

      <div style={{
        flex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "40px"
      }}
      >

      <PhotoBooth />
      </div>
    </div>
  );
}

export default App;
