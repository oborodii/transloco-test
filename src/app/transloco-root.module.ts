import {HttpClient} from '@angular/common/http';
import {Injectable, NgModule} from '@angular/core';
import {Observable} from 'rxjs';

import {
  TRANSLOCO_LOADER,
  TRANSLOCO_CONFIG,
  Translation,
  TranslocoLoader,
  translocoConfig,
  TranslocoModule
} from '@ngneat/transloco';
import { environment } from "../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class TranslocoHttpLoader implements TranslocoLoader {

  constructor(private http: HttpClient) {
  }

  getTranslation(lang: string): Observable<Translation> {
    const langJsonName: string = lang + `.json`;
    return this.http.get<Translation>(environment.transloco.assetsPath + `/` + langJsonName);
  }
}


@NgModule({
  exports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        // The available languages in your application
        availableLangs: [
          environment.transloco.availableLanguages[0].code,
          environment.transloco.availableLanguages[1].code,
          environment.transloco.availableLanguages[2].code,
        ],

        // Sets the default language
        defaultLang: environment.transloco.availableLanguages[0].code,

        // Remove this option if your application doesn't support changing language in runtime
        reRenderOnLangChange: environment.transloco.reRenderOnLangChange,

        // How many times should Transloco retry to load translation files,
        // in case of a load failure (defaults to 2)
        failedRetries: 3,

        // Whether the application runs in production mode.
        // When enabled, Transloco will disable all console warnings.
        prodMode: environment.production
      })
    },
    {
      provide: TRANSLOCO_LOADER,
      useClass: TranslocoHttpLoader
    }
  ]
})
export class TranslocoRootModule {
}
