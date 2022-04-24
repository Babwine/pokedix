export class Pokemon {
    name!: string;
    generation!: number;
    type1!: string;
    type2!: string;
    height!: number;
    weight!: number;

    constructor(name: string, generation: number, type1: string, type2: string, height: number, weight: number) {
        this.generation = generation;
        this.type1 = type1;
        this.type2 = type2;
        this.height = height;
        this.weight = weight;
    }   

}