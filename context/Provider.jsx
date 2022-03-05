import { useState, useContext, useEffect } from 'react';

import MyContext from './myContext';

function Provider({ children }) {
  const [userName, setUserName] = useState('SP-Sam');
  const [userImage, setUserImage] = useState('https://avatars.githubusercontent.com/u/72403810?v=4');

  return (
    <MyContext.Provider value={{
      userName,
      setUserName,
      userImage,
      setUserImage,
    }}>
      {children}
    </MyContext.Provider>
  )
}

export default Provider;