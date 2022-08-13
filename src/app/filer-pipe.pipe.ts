import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filerPipe'
})
export class FilerPipePipe implements PipeTransform {

  transform(value : any[], search: string, id:string): any[] {
    let result:any =[];
    value.forEach((i:any)=>{
      if(i[id].trim().toLowerCase().includes(search.toLowerCase())){
        result.push(i);
      }
    });
    return result;
  }

}
