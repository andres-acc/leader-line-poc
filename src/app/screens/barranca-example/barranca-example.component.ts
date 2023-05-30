import { Component } from '@angular/core';
import { barrancaMockLevel1 } from 'src/app/constants/data.mock';

@Component({
  selector: 'app-barranca-example',
  templateUrl: './barranca-example.component.html',
  styleUrls: ['./barranca-example.component.scss']
})
export class BarrancaExampleComponent {
  barrancaMockLevel1 = barrancaMockLevel1;
}
