import { createRoot } from 'react-dom/client'

/**Parts */
import { TweetBox } from './parts/TweetBox';

const App = () => {
  return(
    <TweetBox/>
  )
}

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);