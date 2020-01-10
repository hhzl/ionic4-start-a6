import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private selectedLanguageNo : number = 2;
  public selectedLanguage : string;


  public language : Array<string> = ['English','Dagbani','Mampruli','Kusaal'];
  public languageAbreviation : Array<string> = ['en','dag','mam','kus'];
 

  constructor() { }


  setSelectedLanguageNo(n : number) {
    // determines which of the languages will be set by the next call to
    // setSelectedLangauge(lang)
    this.selectedLanguageNo = n;
    this.selectedLanguage = this.language[n];
    console.log('settings.service setSelectedLanguage: ' + n + ' ' + this.selectedLanguage);
  }


  setSelectedLanguage(lang) {
    console.log('settings.service setSelectedLanguage');
    this.selectedLanguage = lang;

    this.language[this.selectedLanguageNo] = lang; 
    this.languageAbreviation[this.selectedLanguageNo] = this.getSelectedLanguageAbbreviation(); 
    localStorage.setItem('a4-language'+this.selectedLanguageNo,JSON.stringify(lang));

    console.log('settings.service language was set to: ' + lang + '; language: ' +this.language);

  }


   getSelectedLanguageAbbreviation() {
    if (this.selectedLanguage == 'Dagbani') {return 'dag'}
    if (this.selectedLanguage == 'French') {return 'fr'}
    if (this.selectedLanguage == 'German') {return 'ge'}
    if (this.selectedLanguage == 'Italian') {return 'it'}

    if (this.selectedLanguage == 'Gurene') {return 'gur'}
    if (this.selectedLanguage == 'Kusaal') {return 'kus'}
    if (this.selectedLanguage == 'Adele') {return 'ade'}
    if (this.selectedLanguage == 'Gikyode') {return 'acd'} 

    if (this.selectedLanguage == 'Hanga') {return 'hag'} 
    if (this.selectedLanguage == 'Bimoba') {return 'bim'} 
    if (this.selectedLanguage == 'Birifor') {return 'biv'} 
    if (this.selectedLanguage == 'Tampulma') {return 'tpm'} 
    if (this.selectedLanguage == 'Sisaala') {return 'sil'} 
    if (this.selectedLanguage == 'Gonja') {return 'gjn'}  

    // below : get proper codes.
     if (this.selectedLanguage == 'Akuapem Twi') {return 'akuapem'}  
     if (this.selectedLanguage == 'Buli') {return 'buli'}  
    if (this.selectedLanguage == 'Ewe') {return 'ewe'}  
 
    return null; 

  }






}
