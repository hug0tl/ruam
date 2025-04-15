import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth } from 'firebase/auth';
import { provideAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())],
  bootstrap: []
})
export class AppModule { 
}
