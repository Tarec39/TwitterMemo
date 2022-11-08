import { createRoot } from 'react-dom/client'

/**Parts */
import { TweetBox } from './parts/TweetBox';
import { Feed } from './parts/Feed';

const App = () => {
  return(
    <>
      <h3>TweetBox</h3>
      <TweetBox/>
      
      <h3>Feed</h3>
      <Feed/>
    </>
  )
}

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);