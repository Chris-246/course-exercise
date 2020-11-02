import React from "react";
import "./App.css";
import Job from "./components/Job";
import Title from "./components/Title";

function App() {
  return (
    <div className="container">
      <header className="header">
        <Title bigTitle="The Job Board" className="titleHeader"></Title>
      </header>
      <main className="main">
        <div className="mainJob">
          <Job
            title="Full Time Sales Associate - Sydney Boutique"
            contractType="CDI"
            country="Australie"
            city="Sydney"
            className="redbox"
          ></Job>
          <Job
            title="Agent de Sécurité - Pantin"
            contractType="CDI"
            country="France"
            city="Pantin"
            className="greenbox"
          ></Job>
          <Job
            title="Responsable d'Atelier (H/F)"
            contractType="CDD"
            country="France"
            city="Paris"
            className="yellowbox"
          ></Job>
          <Job
            title="Chef de Projets"
            contractType="CDD"
            country="France"
            city="Paris"
            className="bluebox"
          ></Job>
          <Job
            title="Développeur React.js"
            contractType="CDI"
            country="France"
            city="Paris"
            className="chairbox"
          ></Job>
          <Job
            title="Sales Associate Stockholm"
            contractType="CDI"
            country="Suède"
            city="Stockholm"
            className="redbox"
          ></Job>
          <Job
            title="Vendeur/se - Crans Montana"
            contractType="CDI"
            country="Suisse"
            city="Crans-Montana"
            className="greenbox"
          ></Job>
          <Job
            title="CRM and Data Quality Analyst"
            contractType="CDI"
            country="USA"
            city="New-York"
            className="yellowbox"
          ></Job>
          <Job
            title="Infirmier (H/F)"
            contractType="CDI"
            country="France"
            city="Pantin"
            className="bluebox"
          ></Job>
        </div>
      </main>
      <footer className="footer">
        <div className="textFooter">
          Made with <span className="span">React</span> at{" "}
          <span className="span">Le Reacteur</span> by{" "}
          <span className="span">Chris</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
