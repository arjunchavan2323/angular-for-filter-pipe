
import { Pipe, PipeTransform } from "@angular/core";





@Pipe({
    name:'sumary'
    
})





export class sumarypipe implements PipeTransform{
    transform(value: string, limit:number=50) {
        console.log(value)
     
        // return value.slice(0, 50)+'...'
        return value.slice(0, limit)+'...'

       
    }

}