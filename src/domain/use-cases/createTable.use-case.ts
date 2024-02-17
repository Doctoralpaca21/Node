export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string
}

export interface CreateTableOptions {
    base: number;
    limit?: number
}
export class CreateTable implements CreateTableUseCase{
    constructor(){}

    execute({base, limit = 10}: CreateTableOptions){
        let output = '';
        for (let index = 0; index < limit; index++) {
            output+= `${base} x ${index} = ${index*base} \n`
            
        }
        return output;
    }
}