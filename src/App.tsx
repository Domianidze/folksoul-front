import { Routes, Route } from 'react-router-dom';

import { Landing, LogIn } from 'pages';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/login' element={<LogIn />} />
      <Route path='/:memberId' element={<Landing />} />
      <Route index element={<Landing />} />
    </Routes>
  );
};

export default App;
