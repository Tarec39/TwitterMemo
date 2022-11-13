import { createRoot } from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from 'react-router-dom'
  
/**Parts */
import { Home } from './components/Home';
import { ThreadText } from './components/ThreadText';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}>
          <Route path='compose/tweet' element={<ThreadText/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);