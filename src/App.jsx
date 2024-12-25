import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/index';
import Home from './components/Home/index';
import Layout from './components/Layout/index';
import Gaming from './components/Gaming/index';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route
        path="*"
        element={
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/gaming" element={<Gaming />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
