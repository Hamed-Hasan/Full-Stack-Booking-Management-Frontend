// src/firebase/firebase.auth.ts

import { getAuth } from "firebase/auth";
import app from "./firebase.config";  // Adjust the import path if needed

const auth = getAuth(app);

export default auth;
