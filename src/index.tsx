import { createRoot } from 'react-dom/client'

const App = () => {
  return(
    <div>まっさら</div>
  )
}

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);