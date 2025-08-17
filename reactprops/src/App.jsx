import "./App.css";
import Card from "./components/card";
function App() {
  // const detail = {
  //   monthlySubs: "Rs 2000",
  //   products: "100",
  //   title: "Cigrate aur React",
  // };
  return (
    <>
      <Card />
      {/* <Card mycard={detail} /> */}
      <Card monthlySubs="Rs 2000" products="100" title="Cigrate aur react" />
    </>
  );
}

export default App;
