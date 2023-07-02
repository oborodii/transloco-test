export interface Environment {
  production: boolean;
  transloco: TranslocoEnvironment;
}

export interface TranslocoEnvironment {
  assetsPath: string;
  availableLanguages: AvailableLanguage[];
  reRenderOnLangChange: boolean;
  langUK: AvailableLanguageCode;
  langRU: AvailableLanguageCode;
  langEN?: AvailableLanguageCode;
}

export interface AvailableLanguage {
  code: AvailableLanguageCode;
  name: string;
  shortName: string;
  culture: Culture;
}

export enum AvailableLanguageCode {
  UK = 'uk',
  RU = 'ru',
  EN = 'en'
}

export enum Culture {
  UK = "uk-UA",
  RU = "ru-RU",
  EN = "en-US"
}
