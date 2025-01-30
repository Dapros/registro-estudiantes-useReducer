import { createContext, Dispatch, ReactNode, useReducer, useState } from "react";
import { EstudianteActions, estudianteReducer, EstudianteState, initialState } from "../reducers/estudiante-reducer";
import { DraftEstudiante } from "../types";

type EstudianteContextProps = {
  state: EstudianteState
  dispatch: Dispatch<EstudianteActions>
  estudiante: DraftEstudiante
  setEstudiante: Dispatch<React.SetStateAction<DraftEstudiante>>
}

type EstudianteProviderProps = {
  children: ReactNode
}

// context
export const EstudianteContext = createContext<EstudianteContextProps>(null!)

// Provider
export const EstudianteProvider = ({children}: EstudianteProviderProps) => {
  
  const [state, dispatch] = useReducer(estudianteReducer, initialState)

  const [estudiante, setEstudiante] = useState<DraftEstudiante>({
      cc: 0,
      name: '',
      age: 0,
      mail: '',
      date: new Date(),
      materia: ''
    })

  return (
    <EstudianteContext.Provider
      value={{
        state,
        dispatch,
        estudiante,
        setEstudiante
      }}
    >
      {children}
    </EstudianteContext.Provider>
  )
}