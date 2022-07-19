
import './App.scss';

import {Video} from "./components/video/video";
import {Header} from "./components/header/header";
import {User} from "./components/user/user";

function App() {
  return (
      <div className={'container'}>
        <Header/>
    <main>
<Video/>
<User/>
    </main>
<footer/>
      </div>

  );
}

export default App;
