import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Location} from "@angular/common";

// import { map } from 'rxjs/operators';
import { map, filter } from 'rxjs/operators';
import { shareReplay, takeUntil } from "rxjs/operators";
import { environment } from '../../../environments/environment';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RestService {
  public httpOptions:any;
  // public token:string= (localStorage.getItem('token')?localStorage.getItem('token'):"sasasa");

  constructor(private http: HttpClient,private location: Location) {
  //   if (localStorage.getItem('token')&&localStorage.getItem('id')) {
      
  //  }
  //  else{
  //    return false;
  //   httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':'application/json; charset=utf-8',
  //       'charset':'utf-8',
  //       'Authorization': "asadf" ,
  //       'id':"lol"
  //     })
  //   };
  //  }


  }

  get<T>(url: string, requestHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'text/plain'})): Observable<T | ErrorInfo | any> {
    return this.http.get(url, {
      headers: requestHeaders
    }).pipe(map(
      res => res,
      err => this.handleError(err)
    ));
  }

  delete<T>(url: string, requestHeaders: HttpHeaders = new HttpHeaders()): Observable<T | ErrorInfo | any> {
    return this.http.delete(url, {
      headers: requestHeaders
    }).pipe(map(
      res => res,
      err => this.handleError(err)
    ));
  }

  post<T>(url: string, body: T, requestHeaders: HttpHeaders = new HttpHeaders()): Observable<T | ErrorInfo | any> {
    return this.http.post(url, body, {
      headers: requestHeaders
    }).pipe(map(
      res => res,
      err => this.handleError(err)
    ));
  }

  private handleError(responseError: HttpErrorResponse): Observable<ErrorInfo> {
    //console..log(responseError);
    const errInfo: ErrorInfo = {
      errorMessage: this.getErrorContent(responseError),
      httpStatus: responseError.status,
      httpStatusText: responseError.statusText,
    };
    return throwError(errInfo);
  }

  private getErrorContent(err: HttpErrorResponse): string {
    if (err.error instanceof Error) {
      return err.message;
    } else {
      return err.error.message;
    }
  }
  public getPOJSON() {
    let URL=this.location.prepareExternalUrl('assets/testPO.json')
    return this.http.get('assets/testPO.json') .pipe(
      // filter((items) => items === 2),
      map(
        response => {
          return response;
        },
        error => error)
    );
                    

}
// public nodeAPI="http://localhost:1505/api/";
public nodeAPI=environment.nodeAPI;


public getBankName() {

  let URL = this.nodeAPI + "listbankName";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };

  return this.http.get(URL, httpOptions)
}
public getTransactionList(val) {
  let URL = this.nodeAPI + "listtransaction";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };
  let obj = {
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate
  }
  return this.http.post(URL, obj, httpOptions).pipe(map(response => response));
}
public getERPdata(val) {
  let obj = {
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate
  }
  //console..log("data",obj,httpOptions)
  let URL = this.nodeAPI + "listERP";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };

  return this.http.post(URL, obj, httpOptions).pipe(map(response => response));
}

public getBankdata(val) {
  let obj = {
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate
  }
  let URL = this.nodeAPI + "listBank";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };
  return this.http.post(URL, obj, httpOptions).pipe(map(response => response));
}

public getOPenitemsERPdata(val) {
  let obj = {
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate
  }
  let URL = this.nodeAPI + "listOpenERP";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };

  return this.http.post(URL, obj, httpOptions).pipe(map(response => response));
}

public getOPenItemsBankdata(val) {
  let obj = {
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate
  }
  let URL = this.nodeAPI + "listOpenBank";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };
  return this.http.post(URL, obj, httpOptions).pipe(map(response => response));
}

public getOPenitemsAgingERPdata(val) {
  let obj = {
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate
  }
  let URL = this.nodeAPI + "listOpenAgingERPdata";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };

  return this.http.post(URL, obj, httpOptions).pipe(map(response => response));
}

public getOPenItemsAgingBankdata(val) {
  let obj = {
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate
  }
  let URL = this.nodeAPI + "listOpenAgingBankdata";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };
  return this.http.post(URL, obj, httpOptions).pipe(map(response => response));
}

public getIndividualOpenitemsAgingERPdata(val) {
  let obj = {
    input1: val.input1,
    input2: val.input2,
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate
  }
  let URL = this.nodeAPI + "listIndividualOpenAgingERPdata";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };

  return this.http.post < any > (URL, obj, httpOptions).pipe(map(response => response));
}

public getoverviewdiffer(val) {
  let obj = {
    input1: val.input1,
    input2: val.input2,
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate
  }
  let URL = this.nodeAPI + "overviewDifferdata";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };

  return this.http.post < any > (URL, obj, httpOptions).pipe(map(response => response));
}

public getdifferERPdata(val) {
  let obj = {
    input1: val.input1,
    input2: val.input2,
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate
  }
  let URL = this.nodeAPI + "listDifferOpeAgingnERPdata";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };

  return this.http.post < any > (URL, obj, httpOptions).pipe(map(response => response));
}
public getdifferBankdata(val) {
  let obj = {
    input1: val.input1,
    input2: val.input2,
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate
  }
  let URL = this.nodeAPI + "listDifferOpeAgingnBANKdata";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };

  return this.http.post < any > (URL, obj, httpOptions).pipe(map(response => response));
}
public getIndividualOpenitemsAgingBankdata(val) {
  let obj = {
    input1: val.input1,
    input2: val.input2,
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate
  }
  let URL = this.nodeAPI + "listIndividualOpenAgingBankdata";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };

  return this.http.post < any > (URL, obj, httpOptions).pipe(map(response => response));
}

public getTransactionAgingERPdata(val) {
  let obj = {
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate
  }
  let URL = this.nodeAPI + "listTransactionAgingERPdata";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };

  return this.http.post < any > (URL, obj, httpOptions).pipe(map(response => response));
}

public getTransactionAgingBankdata(val) {
  let obj = {
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate
  }
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };
  let URL = this.nodeAPI + "listTransactionAgingBankdata";
  return this.http.post < any > (URL, obj, httpOptions).pipe(map(response => response));
}

public getBalancesheet(val) {
  let obj = {
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate
  }
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };
  let URL = this.nodeAPI + "listbalancesheet";
  return this.http.post < any > (URL, obj, httpOptions).pipe(map(response => response));
}
public getJobExecutionPercentage(val) {
  let obj = {
    jobId: val.bankid

  }
  // fromdate:val.fromdate,
  // todate:val.todate
  let URL = this.nodeAPI + "GettingJobExectionPercentagedata";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };
  return this.http.post < any > (URL, obj, httpOptions).pipe(map(response => response));;
}

public listtransactioncount(val) {
  let obj = {
    relationId: val.bankid

  }
  // fromdate:val.fromdate,
  // todate:val.todate
  let URL = this.nodeAPI + "listtransactioncount";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };
  return this.http.post < any > (URL, obj, httpOptions).pipe(map(response => response));;
}
public RecoMatchedSideBySide(val) {
  let obj = {
    relationId: val.bankid

  }
  // fromdate:val.fromdate,
  // todate:val.todate
  let URL = this.nodeAPI + "RecoMatchedSideBySide";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };
  return this.http.post < any > (URL, obj, httpOptions).pipe(map(response => response));

}
public listIndividualOpenAgingtransaction(val) {
  let obj = {
    input1: val.input1,
    input2: val.input2,
    relationId: val.bankid

  }
  // fromdate:val.fromdate,
  // todate:val.todate
  let URL = this.nodeAPI + "listIndividualOpenAgingtransaction";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };

  return this.http.post < any > (URL, obj, httpOptions).pipe(map(response => response));
  // .pipe(
  //   // filter((items) => items === 2),
  //   map(
  //     response => {
  //       return response;
  //     },
  //     error => error)
  // );
}
public login(val): Observable<any> {
  // console.log("data",val)
  let obj = {UserId: val.UserId, Password: val.Password}
  // fromdate:val.fromdate,
  // todate:val.todate
  let URL = this.nodeAPI + "login";
  return this.http.post(URL, obj)
  .pipe(map((user:any) => {
    // login successful if there's a jwt token in the response
    if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('token', "ADVENT "+user.token);
        localStorage.setItem('id', user.data.userId);
    }

    return user;
}));
  

}

public listEXCELBankdata(val): Observable < any > {
  let obj = {
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate,
    key: val.key
  }
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };
  let URL = this.nodeAPI + "listEXCELBankdata";

  return this.http.post < any > (URL, obj, httpOptions).pipe(map(response => response));
}

public listEXCELERPdata(val) {
  let obj = {
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate,
    key: val.key
  }
  let URL = this.nodeAPI + "listEXCELERPdata";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };

  return this.http.post < any > (URL, obj, httpOptions).pipe(map(response => response));

}


public BRSData(val) {
  let obj = {
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate,
    key: val.key
  }
  let URL = this.nodeAPI + "BRSData";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };

  return this.http.post < any > (URL, obj, httpOptions).pipe(map(response => response));

}
public ExcelBRSData(val) {
  let obj = {
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate,
    key: val.key
  }
  let URL = this.nodeAPI + "ExcelBRSData";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };

  return this.http.post < any > (URL, obj, httpOptions).pipe(map(response => response));

}


public openbalance(val) {
  let obj = {
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate,
    key: val.key
  }
  let URL = this.nodeAPI + "openBalance";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };

  return this.http.post < any > (URL, obj, httpOptions).pipe(map(response => response), map(response => response));

}

public closebalace(val) {
  let obj = {
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate,
    key: val.key
  }
  let URL = this.nodeAPI + "closeBalance";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };
  return this.http.post < any > (URL, obj, httpOptions).pipe(map(response => response));

}
public balancesummary(val) {
  let obj = {
    relationId: val.bankid,
    fromdate: val.fromdate,
    todate: val.todate,
    key: val.key
  }
  let URL = this.nodeAPI + "balancesummary";
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token'),
      'id':localStorage.getItem('id')
    })
  };

  return this.http.post < any > (URL, obj, httpOptions).pipe(map(response => response));

}


}


export class ErrorInfo < T = string > {
  errorMessage: T;
  httpStatus: number;
  httpStatusText ? : string;
}
