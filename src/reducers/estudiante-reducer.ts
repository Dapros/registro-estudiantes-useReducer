import { DraftEstudiante, Estudiante } from "../types"
import { v4 as uuidv4 } from 'uuid'

export type EstudianteActions = 
  { type: 'student-form', payload: {estudiante: DraftEstudiante} } |
  { type: 'show-modal' } |
  { type: 'close-modal' } | 
  { type: 'editing-student', payload: {id: Estudiante['id']} } |
  { type: 'update-student', payload: {estudiante: Estudiante} } |
  { type: 'delete-student', payload: {id: Estudiante['id']} } |
  { type: 'clean-all-students' }


export type EstudianteState = {
  estudiante: Estudiante[]
  modal: boolean
  id: string
}

// funciones 

// asignacion de id unico para cada objeto de estudiante
const uniqueId = (draftEstudiante : DraftEstudiante) : Estudiante => {
  return {
    ...draftEstudiante,
    id: uuidv4()
  }
}

//guardar en LocalStorage
const localStorageEstudiante = () : Estudiante[] => {
  const localStorageEstudiante = localStorage.getItem('estudiante')
  return localStorageEstudiante ? JSON.parse(localStorageEstudiante) : []
}

// =========

export const initialState : EstudianteState = {
  estudiante: localStorageEstudiante(),
  modal: false,
  id: ''
}

export const estudianteReducer = (
    state: EstudianteState = initialState,
    action: EstudianteActions
  ) => {

    if(action.type === 'student-form'){
      const EstudianteConId = uniqueId(action.payload.estudiante)

      return {
        ...state,
        estudiante: [...state.estudiante, EstudianteConId],
        modal: false,
        id: ''
      }
    }

    if(action.type === 'show-modal'){
      return {
        ...state,
        modal: true,
        id: ''
      }
    }

    if(action.type === 'close-modal'){
      return {
        ...state,
        modal: false,
        id: ''
      }
    }

    if(action.type === 'editing-student'){
      return {
        ...state,
        id: action.payload.id,
        modal: true
      }
    }

    if(action.type === 'update-student'){
      const updatedStudents = state.estudiante.map(prevEstu => prevEstu.id === action.payload.estudiante.id ? action.payload.estudiante : prevEstu)

      return {
        ...state,
        estudiante: updatedStudents,
        modal: false,
        id: ''
      }
    }

    if(action.type === 'delete-student'){
      const deletedStudent = state.estudiante.filter(estu => estu.id !== action.payload.id)

      return {
        ...state,
        estudiante: deletedStudent
      }
    }

    if(action.type === 'clean-all-students'){
      return {
        ...state,
        estudiante: []
      }
    }

    return state
}