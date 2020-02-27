import { Component, OnInit } from '@angular/core';
import { MutantesService } from "../../services/mutantes.service";

@Component({
  selector: 'app-detectar',
  templateUrl: './detectar.component.html',
  styleUrls: ['./detectar.component.css'],
  providers: [MutantesService]
})
export class DetectarComponent implements OnInit {

  adn: Number = 6;
  adnGenerado: String[];
  respuesta: String

  constructor(private service: MutantesService) {
  }

  ngOnInit() {
    
  }

 
  generator(adn:Number, adnGenerado:String[]) {

    let adnFinish = []
        function generadorADN(adnFinish, adn) {
            let length = adn
            let adn2 = 'ACGT'
            let random = ''
            
            function randomAdn(adn2) {
                
                let cadena = []
                let random = ''

                for (let i = 0; i < length; i++) {
                    random += adn2.charAt(Math.floor(Math.random() * adn2.length))
                }

                return random
            }
            for (let i = 0; i < length; i++) {
                let cadenaAdn = randomAdn(adn2)
                adnFinish.push(cadenaAdn)
            }
            
        }
        generadorADN(adnFinish,adn);
        this.adnGenerado = adnFinish;

    return adnFinish;
  }
  save(adnGenerado){
    this.service.adn(adnGenerado).subscribe(
      response => {
        if (response.Registro.mutante == false) {
          this.respuesta = 'El ADN registrado pertenece a un HUMANO'
        }
        else{
          this.respuesta = 'El ADN registrado pertenece a un MUTANTE'
        }
      },
      error => {
        console.log(error)
      }
    )
    
  }



}
