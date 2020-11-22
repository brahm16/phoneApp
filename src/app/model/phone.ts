export class Phone{
    age:number;
    quantity:number;
    id:string;
    imageUrl:string;
    name:string;
    snippet:string;
    android: {
        os: string, 
        ui: string
    }
    battery: {
        standbyTime: string, 
        talkTime: string, 
        type: string
    }
    connectivity: {
        bluetooth: string, 
        cell: string, 
        gps: true, 
        infrared: false, 
        wifi: string
    }
    display: {
        screenResolution: string, 
        screenSize: string, 
        touchScreen: boolean
    }
    constructor(){}  
}