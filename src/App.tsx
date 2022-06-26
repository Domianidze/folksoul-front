import { Routes, Route } from 'react-router-dom';

import { Landing } from 'pages';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/:memberId' element={<Landing />} />
      <Route index element={<Landing />} />
    </Routes>
  );
};

export default App;
