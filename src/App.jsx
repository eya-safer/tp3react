import NavBar from './components/NavBar.jsx'
import Post from './components/Post.jsx'
import Sidebar from './components/Sidebar.jsx'
import { Stories } from './components/Stories.jsx'
import './App.css'

export default function App() {
  return (
    <div className="instagram-app">
      <NavBar />
      <main className="feed-column">
        <div className="mobile-topbar"><span className="wordmark">Instagram</span><span className="mobile-heart">♡</span></div>
        <Stories />
        <Post />
      </main>
      <Sidebar />
    </div>
  )
}