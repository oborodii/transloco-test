import { Component, OnInit } from '@angular/core';

import { TranslocoService } from "@ngneat/transloco";

import { environment } from "../../../environments/environment";
import { AvailableLanguage } from "../../types/environment.type";
import { LanguageService } from "../../servises/language.service";


@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {

  get availableLanguages(): AvailableLanguage[] {
    return environment.transloco.availableLanguages;
  }

  get selectedLanguage(): AvailableLanguage {
    return this.languageService.selectedLanguage;
  }

  set selectedLanguage(value: AvailableLanguage) {
    this.languageService.selectedLanguage = value;
  }

  test: string = '';

  user: any = {
    name: "Sasha",
    age: 22
  }


  constructor(private translateService: TranslocoService,
              private languageService: LanguageService) {
  }


  ngOnInit(): void {
    this.translateService.setDefaultLang(this.availableLanguages[0].code);
    this.translateTestVariable();
  }


  changeLanguage(language: AvailableLanguage): void {
    this.languageService.changeLanguage(language);
  }


  private translateTestVariable(): void {
    this.translateService.selectTranslateObject('user')
      .subscribe(() => {
        this.test = '2222 ' + this.translateService.translate('user.languageSwitcher.select.label');
      });
  }

}
