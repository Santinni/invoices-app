declare module DataTypes {

    export interface SupplyPoint {
        id: string;
        name: string;
        address: string;
    }

    export interface RootObject {
        supplyPoint: SupplyPoint;
        period: string;
        type: string;
        amount: number;
        currency: string;
        state: string;
        payDueDate: string;
    }
}

export default DataTypes;