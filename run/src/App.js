import { useState } from 'react';

import Register from './Components/Register';
import Login from './Components/Login';

import './index.scss';

function App() {
  const [isRegister, setIsRegister] = useState(true);
  return <div className='App'>{isRegister ? <Register /> : <Login />}</div>;
}

export default App;
