import ReduxProvider from "./redux/Provider";
import { Router } from "./routes/Router";

function App() {
  return (
    <ReduxProvider>
      <Router />
    </ReduxProvider>
  );
}

export default App;
