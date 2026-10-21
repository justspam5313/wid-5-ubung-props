import logo from "./geoharvester.png";
import data from "./data/tableData";

export default function Header({
  suchbegriff,
  setSuchbegriff,
  serviceTypAuswahl,
  setServiceTypAuswahl,
  kantonAuswahl,
  setKantonAuswahl,
}) {
  const kantone = [...new Set(data.map((item) => item.Kanton))];

  return (
    <header className="App-header">
      <img style={{ height: 40 }} src={logo} alt="logo" />
      <div id="HeaderText">Ein Katalog für Schweizer Geodienste</div>
      <div>
        <input
          placeholder="Suche"
          value={suchbegriff}
          onChange={(e) => setSuchbegriff(e.target.value)}
        />
        <select
          name="services"
          id="services"
          value={serviceTypAuswahl}
          onChange={(e) => setServiceTypAuswahl(e.target.value)}
        >
          <option value="">Alle</option>
          <option value="WMS">WMS </option>
          <option value="WMTS">WMTS </option>
          <option value="WFS">WFS</option>
        </select>
        <select
          name="cantons"
          id="cantons"
          value={kantonAuswahl}
          onChange={(e) => setKantonAuswahl(e.target.value)}
        >
          <option value="">Alle</option>
          {kantone.map((kanton, index) => (
            <option value={kanton} key={index}>
              {kanton}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}
