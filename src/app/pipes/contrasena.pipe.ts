import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, show: boolean = true): string {
    if(show){
      let returnValue : string = "";
      for(let i = 0 ; i < value.length ; i++ ) returnValue+="*";
      console.log(value, show, returnValue);
      return returnValue;
    }else{
      return value;
    }
    
  }

}
