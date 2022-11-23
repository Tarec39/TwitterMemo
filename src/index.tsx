import { createRoot } from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from 'react-router-dom'
  
/**Parts */
import { Home } from './components/Home';
import { ThreadBody } from './components/Thread/ThreadBody';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='compose/tweet' element={<ThreadBody/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);