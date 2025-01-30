import { useContext } from "react"
import { EstudianteContext } from "../context/EstudianteContext"

export const useEstudiante = () => {
  const context  = useContext(EstudianteContext)

  if(!context){
    throw new Error('useEstudiante must be used within a EstudianteProvider')
  }

  return context
}