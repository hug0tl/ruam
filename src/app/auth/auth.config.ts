import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from '../../environments/environment';

const app = initializeApp(environment.firebase);

// Opcional, si usas Analytics
if (typeof window !== 'undefined') {
  getAnalytics(app);
}

export { app };
