import { useState } from 'react';
import PostDetail from './components/postDetail';
import Sidebar from './components/sidebar';
import Home from './pages/home';

function App() {
  const [active, setActive] = useState(true);
  return (
    <div className="App">
      <Sidebar />
      <Home active={active} setActive={setActive} />
      <PostDetail isActive={active}/>
    </div>
  );
}

export default App;
