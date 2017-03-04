export class Machine {
    private _id : string;
    private _name : string;
    private _totalAmount: number;
    private _acceptCoinText : string;
    private _acceptCoin: string[];

    public get id() : string {
        return this._id;
    }
    
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }
    
    public get TotalAmount(): number {
        return this._totalAmount;
    }
    public set TotalAmount(v: number) {
        this._totalAmount = v;
    }

    public get acceptCoinText() : string {
        return this._acceptCoinText;
    }
    public set acceptCoinText(v : string) {
        this._acceptCoinText = v;
        this._acceptCoin = v.split(',');
    }

    public get acceptCoin() : string[] {
        return this._acceptCoin;
    }
    public set acceptCoin(v : string[]) {
        this._acceptCoin = v;
    }
    
    
    /**
     *
     */
    public constructor(data: any = {}) {
        this._id = data.id || '';
        this.name = data.name || '';
        this._totalAmount = data.totalAmount || 0;
    }

    public addCoin(v: number) {
        this._totalAmount = parseInt(this._totalAmount.toString()) + parseInt(v.toString());
    }

    public clearCoin(){
        this._totalAmount = 0;
    }
}
