import { AppComponent } from './app/app.component';
import { NgZone } from '@angular/core';
import { appConfig } from './app/app.config';
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

(async () => {

    const app = await createApplication(appConfig);

    const appElement = createCustomElement(AppComponent, {
      injector: app.injector,
    });

    customElements.define('app-component', appElement);
    app.injector.get(NgZone).run(() => {
      app.bootstrap(AppComponent, 'app-root');
  });

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


  })();
