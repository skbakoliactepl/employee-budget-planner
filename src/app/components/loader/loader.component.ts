import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoaderModule } from '@progress/kendo-angular-indicators';
import { LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, LoaderModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  isLoading$ = this.loaderService.loading$;
  constructor(private loaderService: LoaderService) { }
}
