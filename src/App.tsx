import { Routes, Route } from 'react-router-dom';

import {
  Landing,
  LogIn,
  Dashboard,
  Main,
  Members,
  UpsertMember,
  SocialMedias,
  UpsertSocialMedia,
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
        <Route path='members' element={<Members />}>
          <Route path='add' element={<UpsertMember />} />
          <Route path='edit/:memberId' element={<UpsertMember />} />
        </Route>
        <Route path='social-medias' element={<SocialMedias />}>
          <Route path='add' element={<UpsertSocialMedia />} />
          <Route path='edit/:socialMediaId' element={<UpsertSocialMedia />} />
        </Route>
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
