import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crypto',
  templateUrl: './apicrypto.component.html',
  styleUrls: ['./apicrypto.component.css']
})
export class ApicryptoComponent {
  searchQuery: string = '';
  cryptoData: any;
  noDataFound: boolean = false;
  btcPriceInEUR: number | null= null;
  btcPriceInUSD: number | null= null;
  isLoadding: boolean = false;

  constructor(private http: HttpClient) {}

  getCryptoData(): void {
    this.isLoadding = true;
    this.http.get(`http://localhost:5000/api/crypto/${this.searchQuery.toLowerCase()}`).subscribe(data => {
      if(data && Object.keys(data).length > 0) {
        console.log(data);
      this.cryptoData = data;
      this.btcPriceInEUR = this.findPriceInCurrency('EUR');
      this.btcPriceInUSD = this.findPriceInCurrency('USD');
      this.isLoadding = false;
      } else {

        this.isLoadding = false;
        this.resetSearch();
      }
    }, error => {
      this.resetSearch();
      console.error('Erreur lors de la récupération des données: ', error);
    });
  }
  private findPriceInCurrency(currency: string): number | null {
    const cryptoSymbol = this.cryptoData.symbol.toUpperCase();

    const ticker = this.cryptoData.tickers.find((t: any) => t.base === cryptoSymbol && t.target === currency);
    return ticker ? ticker.last : null;
  }



  onSearchInput(): void {
    if (this.searchQuery.length === 0 || this.searchQuery.length > 0) {
      this.resetSearch();
    }
  }

  resetSearch(): void {
    this.noDataFound = false;
    this.cryptoData = null;
    this.btcPriceInEUR = null;
    this.btcPriceInUSD = null;
  }
}
