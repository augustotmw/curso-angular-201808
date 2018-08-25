import { Pipe, PipeTransform } from "@angular/core";
import { FotoComponent } from "./foto.component";



@Pipe({
    name: 'filtroTitulo'
})
export class FiltroTitulo implements PipeTransform {
    transform(fotos:FotoComponent[], digitado:string=''):any {
        console.table(fotos);
        console.log(digitado);
        
        digitado = digitado.toLowerCase();
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado));
    }
}