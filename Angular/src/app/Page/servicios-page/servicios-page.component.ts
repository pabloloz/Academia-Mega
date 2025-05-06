import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../Service/data.service';
import { HijoServiceComponent } from "../../Components/hijo-service/hijo-service.component";

@Component({
  selector: 'app-servicios-page',
  imports: [FormsModule, HijoServiceComponent],
  templateUrl: './servicios-page.component.html',
  styleUrl: './servicios-page.component.css'
})
export class ServiciosPageComponent {
newMessage = ""

constructor(private dataService: DataService){

}

updateMessage(){
this.dataService.setMessage(this.newMessage)
}
}
