import { Injectable } from '@angular/core';

import { TranslocoService } from "@ngneat/transloco";

import { environment } from "../../environments/environment";
import { AvailableLanguage } from "../types/environment.type";


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  get availableLanguages(): AvailableLanguage[] {
    return environment.transloco.availableLanguages;
  }

  selectedLanguage: AvailableLanguage = environment.transloco.availableLanguages[1];


  constructor(private translateService: TranslocoService) {
  }


  changeLanguage(language: AvailableLanguage): void {
    for (let i = 0; i < this.availableLanguages.length; i++) {
      if (this.availableLanguages[i].code === language.code) {
        this.selectedLanguage = this.availableLanguages[i];
        this.translateService.setActiveLang(this.selectedLanguage.code);
        break;
      }
    }
  }

}
