
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebaseConfig";

// signing in with popup
export const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
  
    try {
      const result = await signInWithPopup(auth, provider);
      // User info
      const user = result.user;
      console.log("User Info:", user);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
};