export class Equipments {
    id: number;
    equipment_name: string; 
    date_of_supply:string;
    number_of_equipments: number;
    unit_price: number;
    usage_rate: number;
    clinic_name: string;


    constructor(id, equipment_name, date_of_supply, number_of_equipments, unit_price, usage_rate, clinic_name){
        this.id=id;
        this.equipment_name = equipment_name;
        this.date_of_supply = date_of_supply;
        this.number_of_equipments = number_of_equipments;
        this.unit_price = unit_price;
        this.usage_rate = usage_rate;
        this.clinic_name = clinic_name;
    }
}
