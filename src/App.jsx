import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/index';
import Home from './components/Home/index';
import Layout from './components/Layout/index';
import Gaming from './components/Gaming/index';
import Trending from './components/Trending/index';
import VideoItemDetails from './components/VideoItemDetails';
import SavedVideos from './components/SavedVideos';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route
        path="/*"
        element={
          <ProtectedRoute
            element={
              <Layout>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/gaming" element={<Gaming />} />
                  <Route exact path="/trending" element={<Trending />} />
                  <Route
                    exact
                    path="/videos/:id"
                    element={<VideoItemDetails />}
                  />
                  <Route exact path="/savedvideos" element={<SavedVideos />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            }
          />
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
