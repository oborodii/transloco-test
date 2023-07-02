import { Injectable } from '@angular/core';

import { TranslocoService } from "@ngneat/transloco";

import { environment } from "../../environments/environment";
import { AvailableLanguage, AvailableLanguageCode } from "../types/environment.type";


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  get availableLanguages(): AvailableLanguage[] {
    return environment.transloco.availableLanguages;
  }

  selectedLanguage: AvailableLanguage = environment.transloco.availableLanguages[0];


  constructor(private translateService: TranslocoService) {
  }


  changeLanguage(language: AvailableLanguage): void {
    this.setSelectedLangByCode(language.code);
    this.translateService.setActiveLang(language.code);
  }


  private setSelectedLangByCode(langCode: AvailableLanguageCode): void {
    for (let i = 0; i < this.availableLanguages.length; i++) {
      if (this.availableLanguages[i].code === langCode) {
        this.selectedLanguage = this.availableLanguages[i];
        this.translateService.setActiveLang(this.selectedLanguage.code);
        break;
      }
    }
  }


}
