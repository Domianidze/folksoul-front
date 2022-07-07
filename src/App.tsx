import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthContext } from 'state';
import {
  PageNotFound,
  Landing,
  LogIn,
  Dashboard,
  Main,
  Members,
  UpsertMember,
  SocialMedias,
  UpsertSocialMedia,
  Band,
} from 'pages';

const App: React.FC = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Routes>
      <Route path='/login' element={<LogIn />} />
      {authCtx.isLoggedIn && (
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='members' element={<Members />}>
            <Route path='add' element={<UpsertMember />} />
            <Route path='edit/:memberId' element={<UpsertMember />} />
          </Route>
          <Route path='social-medias' element={<SocialMedias />}>
            <Route path='add' element={<UpsertSocialMedia />} />
            <Route path='edit/:socialMediaId' element={<UpsertSocialMedia />} />
          </Route>
          <Route path='band' element={<Band />} />
          <Route index element={<Main />} />
        </Route>
      )}
      <Route path='*' element={<PageNotFound />} />
      <Route index element={<Landing />} />
    </Routes>
  );
};

export default App;
