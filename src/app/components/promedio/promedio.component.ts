import { Component, OnInit } from '@angular/core';
import { MutantesService } from "../../services/mutantes.service";

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.component.html',
  styleUrls: ['./promedio.component.css'],
  providers: [MutantesService]
})
export class PromedioComponent implements OnInit {
  public promedio = {
    Total_Registrado: 0,
    Mutantes_Detectados: 0,
    Radio: ''
  }
  public humanos
  
  constructor(private service: MutantesService) { 
    
  }

  ngOnInit() {
    this.getPromedio();
    
  }

  test(){
    this.service.test()
  }
  getPromedio(){
    this.service.promedio().subscribe(
      (data) => {
        this.promedio = data
        console.log(this.promedio)
        this.humanos = this.promedio.Total_Registrado - this.promedio.Mutantes_Detectados
        
      },
      error => {
        console.log(error)
      }
    )
  }
  
}
