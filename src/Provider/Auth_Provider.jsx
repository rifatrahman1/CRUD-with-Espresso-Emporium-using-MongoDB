import React, { createContext, useState } from 'react';
import auth from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const Auth_Context = createContext(null);

const Auth_Provider = ({children}) => {
      const [user, set_user] = useState(null);
      const [loading, set_loading] = useState(true); 
      const create_user = (email, password) => {
            set_loading(true);
            return createUserWithEmailAndPassword (auth, email, password);
      }
      const signin_user = (email, password) => {
            set_loading(true);
            return signInWithEmailAndPassword(auth, email, password);
      }
      const auth_info = {
            user,
            loading,
            create_user,
            signin_user
      }
      return (
            <Auth_Context.Provider value={auth_info}>
                  {children}
            </Auth_Context.Provider>
      );
};

export default Auth_Provider;