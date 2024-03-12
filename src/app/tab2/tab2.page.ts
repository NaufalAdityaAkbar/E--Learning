import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public inputMessage: string = '';

  public messages: string[] = [];

  public allData: any = [];

  showSecondElement1: boolean = false;
  showPopUp1: boolean = true;
  showPopUp2: boolean = false;


  handleRefresh(event: any) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  constructor() {
    this.create();
  }

  async create() {
    const res: any = await axios.get('https://praktikum-cpanel-unbin.com/Ap_Opang/get_data1.php');
    const res2: any = await axios.get('https://praktikum-cpanel-unbin.com/Ap_Opang/get_data2.php');
    const res3: any = await axios.get('https://praktikum-cpanel-unbin.com/Ap_Opang/get_data3.php');
    const res4: any = await axios.get('https://praktikum-cpanel-unbin.com/Ap_Opang/get_data4.php');
    const res5: any = await axios.get('https://praktikum-cpanel-unbin.com/Ap_Opang/get_data5.php');

    if (this.inputMessage == 'Senin' || this.inputMessage == 'senin') {
      console.log(res.data);
      this.allData = res.data.result;
      this.messages =[this.inputMessage];
      this.showSecondElement1 = true;
      this.showPopUp1 = true;  
      this.showPopUp2 = false;
      this.inputMessage = '';
    }else if (this.inputMessage == 'Selasa'|| this.inputMessage== 'selasa') {
      this.messages =[this.inputMessage];  
      this.showSecondElement1 = true; 
      this.showPopUp1 = false;  
      this.showPopUp2 = true;
      this.inputMessage = '';
    }else if (this.inputMessage === 'Rabu' || this.inputMessage == 'rabu') {
      console.log(res3.data);
      this.allData = res3.data.result;
      this.messages =[this.inputMessage]; 
      this.showSecondElement1 = true;
      this.showPopUp1 = true;  
      this.showPopUp2 = false;
      this.inputMessage = '';
    }else if (this.inputMessage === 'Kamis' || this.inputMessage == 'kamis') {
      console.log(res4.data);
      this.allData = res4.data.result;
      this.messages =[this.inputMessage];
      this.showSecondElement1 = true;
      this.showPopUp1 = true;  
      this.showPopUp2 = false;
      this.inputMessage = '';
    }else if (this.inputMessage === 'Jumat' || this.inputMessage == 'jumat') {
      console.log(res2.data);
      this.allData =res2.data.result;
      this.messages =[this.inputMessage] 
       this.showSecondElement1 = true;
      this.inputMessage = '';
    }else if (this.inputMessage === 'Sabtu' || this. inputMessage == 'sabtu') {
      console.log(res5.data);
      this.allData = res5.data.result;
      this.messages =[this.inputMessage]
      this.showSecondElement1 = true;
      this.showPopUp1 = true;  
      this.showPopUp2 = false;
      this.inputMessage = '';
    }
  }
  sendMessage() {
    this.create();
  }
}
