declare module DataTypes {

    export interface SupplyPoint {
        id: string;
        name: string;
        address: string;
    }

    export interface RootObject {
        supplyPoint: SupplyPoint;
        period: string;
        type: "advance" | "invoice";
        amount: number;
        currency: string;
        state: "paid" | "processing" | "pending";
        payDueDate: string;
    }
}

export default DataTypes;