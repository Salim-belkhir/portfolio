import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/*function myFunction() {
  var header = document.getElementById("MyHeader");
  // @ts-ignore
  var sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    // @ts-ignore
    header.classList.add("stic  ky");
  } else {
    // @ts-ignore
    header.classList.remove("sticky");
  }
}

window.onscroll= function (){myFunction();}*/
