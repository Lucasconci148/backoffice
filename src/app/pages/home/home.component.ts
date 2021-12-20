import { Component } from '@angular/core';
import Web3 from 'web3';
import { TokenService } from '../../shared/services/token.service';

export interface moviments {
  name: string;
  cant: number;
}

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  public displayedColumns: string[] = ['name', 'cant'];
  public dataSource: moviments[] = [
    { name: '0x74ef0e9D....0BCBce1', cant: 9},
    { name: '0x74ef0e9D....0BCBce1', cant: 1},
    { name: '0x74ef0e9D....0BCBce1', cant: 90},
    { name: '0x74ef0e9D....0BCBce1', cant: 34},
    { name: '0x74ef0e9D....0BCBce1', cant: 2}
  ];

  public selectedValue!: string;
  public walletId!: string;

  public foods: Food[] = [
    { value: '0x74ef0e9D4f053f9Ef4F2cc03Debf798790BCBce1', viewValue: 'Usuario 1'},
    { value: '0x74ef0e9D4f053f9Ef4F2cc03Debf798790BCBce1', viewValue: 'Usuario 2'},
    { value: '0x74ef0e9D4f053f9Ef4F2cc03Debf798790BCBce1', viewValue: 'Usuario 3'},
  ];

  constructor(
    private _tokenService: TokenService
  ) { }

  ngOnInit(): void { }

  conectToAccount() {
    this._tokenService.conectWallet()
    .subscribe((account) => {
      const web3 = new Web3(window.ethereum);
      this.walletId = account[0];
    },(err) => { console.log(err)})
  }

}
