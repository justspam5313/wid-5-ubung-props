import data from "./data/tableData";

export default function Tabelle({
  suchbegriff,
  kantonAuswahl,
  serviceTypAuswahl,
}) {
  const filteredData = data.filter((item) => {
    const filteredBySuchbegriff =
      !suchbegriff ||
      (item.Beschreibung || "")
        .toLowerCase()
        .includes(suchbegriff.toLowerCase());
    const filteredByKanton = !kantonAuswahl || item.Kanton === kantonAuswahl;
    const filteredByServicetype =
      !serviceTypAuswahl || item.ServiceTyp === serviceTypAuswahl;

    return filteredBySuchbegriff && filteredByKanton && filteredByServicetype;
  });

  return (
    <div className="TableWrapper">
      <table border="1" cellPadding="4">
        <thead id="TableHeader">
          <tr>
            <td>Kanton</td>
            <td>Titel</td>
            <td>Beschreibung</td>
            <td>ServiceTyp</td>
            <td>Score</td>
          </tr>
        </thead>
        <tbody id="TableBody">
          {filteredData.map((row, index) => (
            <tr key={index}>
              <td>{row.Kanton}</td>
              <td>{row.Titel}</td>
              <td>{row.Beschreibung}</td>
              <td>{row.ServiceTyp}</td>
              <td>{row.Score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
