import { Pipe, PipeTransform } from '@angular/core';
import { iplayer } from './shared/component/model/model';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform {

  transform(value: iplayer[], seachtext: string): iplayer []{
    if(!value){
      return []
    }if(!seachtext){
      return value
    }
    let filterpipe=value.filter(eleobj=>{
      return eleobj.country.toLowerCase().startsWith(seachtext)
    })
    return filterpipe
  }

}
