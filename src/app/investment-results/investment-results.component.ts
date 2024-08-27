import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentResult } from '../models/investment-results.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  annualInvestmentResults = input<InvestmentResult[]>();
  //@Input() annualInvestmentResults?: InvestmentResult[];
}
