import { Routes, Route } from 'react-router-dom';

import {
  Landing,
  LogIn,
  Dashboard,
  Main,
  Members,
  SocialMedias,
  About,
} from 'pages';

const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/:memberId' element={<Landing />} />
      <Route path='/dashboard' element={<Dashboard />}>
        <Route index element={<Main />} />
        <Route path='members' element={<Members />} />
        <Route path='social-medias' element={<SocialMedias />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
