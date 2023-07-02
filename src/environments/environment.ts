// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AvailableLanguageCode, Culture, Environment } from "../app/types/environment.type";

export const environment: Environment = {
  production: false,
  transloco: {
    assetsPath: 'assets/i18n',
    availableLanguages: [
      {
        code: AvailableLanguageCode.UK,
        name: 'Українська',
        shortName: 'UK',
        culture: Culture.UK
      },
      {
        code: AvailableLanguageCode.RU,
        name: 'Русский',
        shortName: 'RU',
        culture: Culture.RU
      },
      {
          code: AvailableLanguageCode.EN,
          name: 'English',
          shortName: 'EN',
          culture: Culture.EN
      }
    ],
    reRenderOnLangChange: false,  // 'true' if application support changing language in runtime
    langUK: AvailableLanguageCode.UK,
    langRU: AvailableLanguageCode.RU,
    langEN: AvailableLanguageCode.EN
  },

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
