export interface IneternalAccount {
    Id: number;
    AccounName: string;
}


export interface IneternalAccountRecord {
    IneternalAccounts:  IneternalAccount[];
    RefNum: string;
}
