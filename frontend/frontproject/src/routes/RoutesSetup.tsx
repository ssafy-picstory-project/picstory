import { Routes, Route } from 'react-router-dom'
import Main from '../components/main/main'
import StoryCreatePage from '../pages/storyCreatePage'
import Loading from '../components/storyCreate/loading'
export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/storyCreatePage" element={<StoryCreatePage />}></Route>
      <Route path="/Loading" element={<Loading />}></Route>
    </Routes>
  )
}
