import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformExercicioPipe'
})
export class TransformExercicioPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
