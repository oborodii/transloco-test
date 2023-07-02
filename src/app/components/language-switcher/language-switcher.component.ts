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

  test: string = '';

  get availableLanguages(): AvailableLanguage[] {
    return environment.transloco.availableLanguages;
  }

  get selectedLanguage(): AvailableLanguage {
    return this.languageService.selectedLanguage;
  }

  set selectedLanguage(value: AvailableLanguage) {
    this.languageService.selectedLanguage = value;
  }

  user: any = {
    name: "Sasha",
    age: 22
  }


  constructor(private translateService: TranslocoService,
              private languageService: LanguageService) {
    console.log(`user =`);
    console.log(this.user);
  }


  ngOnInit(): void {
    this.init();
    this.selectedLanguage = this.availableLanguages[0];
  }


  changeLanguage(language: AvailableLanguage): void {
    this.languageService.changeLanguage(language);
  }

  private init(): void {
    this.translateService.selectTranslateObject('user')
      .subscribe(() => {
        this.test = '2222' + this.translateService.translate('user.languageSwitcher.select.label4');
      });
  }

}
