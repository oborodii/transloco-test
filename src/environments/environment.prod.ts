import { AvailableLanguageCode, Culture, Environment } from "../app/types/environment.type";

export const environment: Environment = {
  production: true,
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
  }

};
