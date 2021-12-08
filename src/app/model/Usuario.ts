import { RotinaDTO } from "./RotinaDTO"


export class UsuarioDTO{
    rotina!: RotinaDTO[]
    _id!: string
    nome!: string
    senha!: string
    idade!: number
    peso!:number
    sexo!: string
    role!: string
}