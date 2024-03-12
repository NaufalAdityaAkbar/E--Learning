import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  public input: string = '';
  public allData: any = [];

  handleRefresh(event: any) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  constructor() {
    // Form Load GetData
    this.GetData();
  }

  async GetData(npm?: string) {
      const apiUrl = 'https://praktikum-cpanel-unbin.com/Ap_Opang/get_data.php';

      const npmValue = npm || this.input;

      const params = { npm: npmValue };

      const res: any = await axios.get(apiUrl, { params });

      console.log(res.data);
      this.allData = res.data.result;
  }

  inputt() {
    this.GetData(this.input);
  }
}
