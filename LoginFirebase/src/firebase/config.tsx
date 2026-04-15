import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_CeD4FemyXyKxyVUJvf7-Gg4LMRNbeEc",
  authDomain: "claseejemplo-53406.firebaseapp.com",
  projectId: "claseejemplo-53406",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);