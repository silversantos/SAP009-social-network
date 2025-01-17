import {
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from 'firebase/auth';
import { app } from './configuration.js';

const auth = getAuth(app);

const loginToFeed = (email, password) => signInWithEmailAndPassword(auth, email, password);

function loginWithGoogle() {
  const providerGoogle = new GoogleAuthProvider();
  const authGoogle = getAuth(app);
  return signInWithPopup(authGoogle, providerGoogle);
}
const register = async (name, email, password) => {
  const authenticateRegister = getAuth(app);
  await createUserWithEmailAndPassword(authenticateRegister, email, password);

  return updateProfile(authenticateRegister.currentUser, {
    displayName: name,
  });
};

const resetPassword = (email) => sendPasswordResetEmail(auth, email);

const logout = async () => signOut(auth);

const isUserLogged = (callback) => onAuthStateChanged(auth, callback);

export {
  register,
  loginToFeed,
  loginWithGoogle,
  resetPassword,
  logout,
  isUserLogged,
};
