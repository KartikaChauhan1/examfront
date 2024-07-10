import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { SignupComponent } from './app/pages/signup/signup.component'; // Ensure this path is correct

bootstrapApplication(SignupComponent, {
  providers: [
    provideHttpClient(), // Provide HttpClient globally
  ],
}).catch(err => console.error(err));
