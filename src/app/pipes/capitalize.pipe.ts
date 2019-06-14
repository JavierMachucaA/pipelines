import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string , all: boolean=false): any {
    let cutString : string[] = value.split(" ");
    let finalValue  : string = "";
    console.log(cutString);
    if(all){
      for(let i = 0 ; i < cutString.length ; i ++ ){
        cutString[i] = cutString[i][0].toLocaleUpperCase() + cutString[i].substr(1);
      }
    }else{
      cutString[0] = cutString[0][0].toLocaleUpperCase() + cutString[0].substr(1);
    }
    
    return cutString.join(" ");
  }

}
