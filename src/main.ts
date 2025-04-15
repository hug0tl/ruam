import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/*
bootstrapApplication(AppComponent, {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ]
})
.catch(err => console.error(err));
*/

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  // bootstrapApplication(AppComponent, {
  //   providers: [
  //     provideFirebaseApp(() => initializeApp(environment.firebase)),
  //     provideFirestore(() => getFirestore())
  //   ]
  // }).catch(err => console.error(err));