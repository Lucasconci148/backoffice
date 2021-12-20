import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import Web3 from 'web3';
import { abiContract, contractAddres } from '../../shared/models/contract';

@Injectable({
  providedIn: 'root',
})
export class TokenService {

  private web3Provider!: any;
  private web3!: Web3;
  private loteryContract: any;
  private account!: any;

  constructor(private router: Router) { }

  conectWallet(): Observable<any>{
    if(window.ethereum) {
      this.web3Provider = window.ethereum;
      return  from(window.ethereum.enable());
    } else {
      return of('No tienes una billetera en tu navegador!');
    }

    // this.loteryContract = new web3.eth.Contract(abiContract, contractAddres);
  }

  // redirect to contract page
  goToContract() {
    window.open('', "_blank");
  }

  // Example read function
  // getTicketValue() {
  //   this.loteryContract.methods.ticketValue().call().then((value: any) => {
  //     this.ticketValue = this.web3.utils.fromWei(value, 'ether');
  //     this.ticketPrice = value;
  //   });
  // }

  // Example write function
  // playLotery() {
  //   this.loteryContract.methods.play().
  //   send({ from: this.account[0], value: this.ticketPrice })
  //   .then(() => {
  //       this.showBtn = !this.showBtn;
  //   })
  //   .catch( (e:any) => { 
  //     this.showBtn = !this.showBtn;
  //     console.log('Error in transaction', e);
  //   });
  // }
}
