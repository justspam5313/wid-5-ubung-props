export default function Footer({
  setSuchbegriff,
  setServiceTypAuswahl,
  setKantonAuswahl,
}) {
  return (
    <footer>
      <button
        id="ResetButton"
        onClick={() => {
          setSuchbegriff("");
          setServiceTypAuswahl("");
          setKantonAuswahl("");
        }}
      >
        Reset
      </button>
    </footer>
  );
}
