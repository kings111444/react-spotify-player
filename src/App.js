import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import Dashboard from './Dashboard';
import Emotion_Detect from './emotion_detection';



const code = new URLSearchParams(window.location.search).get("code")

function App() {
  // return code ? <Dashboard code= {code} />:<Login />;
  return <Emotion_Detect/>
}

export default App;
