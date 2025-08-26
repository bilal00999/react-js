import "./App.css";
import config from "./config/config";

function App() {
  console.log(config.appWriteUrl);
  return (
    <>
      <h1 className="bg-orange-400 text-3xl p-4">blog app with appwrite</h1>
    </>
  );
}

export default App;
