import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  
  constructor(private domSnitizer : DomSanitizer){
    
  }

  transform(value: string, url?: any): any {
    return this.domSnitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
