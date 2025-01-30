
export type Estudiante = {
  id: string
  cc: number
  name: string
  age: number
  mail: string
  date: Value
  materia: string
}

export type DraftEstudiante = Omit<Estudiante, 'id'>

type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece]


export type Materia = {
  id: string
  materia: string
}