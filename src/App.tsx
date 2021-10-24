import './App.css';
import 'tachyons'
// import { VideoPlayer } from './components/video-player';
import { QueryContainer } from './components/query-container'

function App() {

  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <body className="vh-100">
        <QueryContainer/>
        {/* <VideoPlayer/> */}
      </body>
    </div>
  );
}

export default App;
