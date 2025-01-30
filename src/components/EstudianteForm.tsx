import { ChangeEvent, FormEvent, useEffect, useMemo } from "react"
import { materias } from "../data/materias"
import { Value } from "../types"
import { useEstudiante } from "../hooks/useEstudiante"
// dependencia DatePicker
import DatePicker from "react-date-picker"
//estilo del calendario de react
import 'react-calendar/dist/Calendar.css'
// hoja de estilos de 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css'

export default function EstudianteForm() {

  const {state, dispatch, estudiante, setEstudiante} = useEstudiante()
  
  // editando estudiante del reducer
  useEffect(() => {
    if(state.id){
      console.log("Ya hay algo en id")
      const editingEstudiante = state.estudiante.filter(currentEstudiante => currentEstudiante.id === state.id)[0]
      setEstudiante(editingEstudiante)
    }
  }, [state.id])
  
  const handleChangeData = (value : Value) => {
    setEstudiante({
      ...estudiante,
      date: value
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = e.target
    const isNumberField = ['cc', 'age'].includes(name)

    setEstudiante({
      ...estudiante,
      [name]: isNumberField ? +value : value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(state.id){
      //si existe el estudiante lo edita
      dispatch({type: 'update-student', payload: {estudiante: {id: state.id, ...estudiante}}})
      //sino lo agrega
    } else {
      dispatch({type: 'student-form', payload: {estudiante: estudiante}})
    }
    dispatch({type: 'close-modal'})
  }

  // validacion del formulario
  const isFormValid = useMemo(()=> {
    return(
      estudiante.cc !== 0 &&
      estudiante.name.trim() !== '' &&
      estudiante.age !== 0 &&
      estudiante.mail.trim() !== '' &&
      // expresion para correos electronicos con javascript
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(estudiante.mail) &&
      estudiante.materia !== '' &&
      estudiante.date instanceof Date
    )
  }, [estudiante])


  return (
    <>
      <div className="px-5 py-2">
        <form
          onSubmit={handleSubmit}
          className="space-y-2"
        >

          <div className="flex flex-col ">
            <label htmlFor="cc" className="text-xl font-bold">Cedula</label>
            <input 
              id="cc"
              type="number" 
              placeholder="Escribe tu cedula aqui"
              className="w-full p-2 bg-white border-b outline-none"
              name="cc"
              value={estudiante.cc}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-xl font-bold">Nombre</label>
            <input
              id="name"
              type="text"
              placeholder="Escribe nombre completo: ej, juancho perez..."
              className="w-full p-2 bg-white border-b outline-none"
              name="name"
              value={estudiante.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="age" className="text-xl font-bold">Edad</label>
            <input 
              id="age"
              type="number"
              placeholder="Escribe en numero la edad: ej, 15..."
              className="w-full p-2 bg-white border-b outline-none"
              name="age"
              value={estudiante.age}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="mail" className="text-xl font-bold">Correo Electronico</label>
            <input 
              id="mail"
              type="text" 
              placeholder="escribe tu correo electronico: ej, example@gmail.com"
              className="w-full p-2 bg-white border-b outline-none"
              name="mail"
              value={estudiante.mail}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="materia" className="text-xl font-bold">Materia</label>
            <select 
              name="materia"
              id="materia"
              className="w-full p-2 bg-white border-b outline-none"
              value={estudiante.materia}
              onChange={handleChange}
            >
              <option value="">-- Seleccione --</option>
              {materias.map(prevMat => (
                <option 
                  key={prevMat.id}
                  value={prevMat.materia}
                >{prevMat.materia}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="date" className="text-xl font-bold">Fecha de ingreso</label>
            <DatePicker 
              value={estudiante.date}
              
              className="w-full pt-2 bg-white outline-none"
              onChange={handleChangeData}
            />
          </div>

          <input 
            type="submit" 
            value={state.id ? 'Actualizar Estudiante' :'Agregar Estudiante'}
            className="w-full p-2 font-black uppercase bg-blue-100 text-slate-700 mt-5 hover:text-black hover:shadow disabled:opacity-10"
            disabled={!isFormValid}
          />
          
        </form>
      </div>
    </>
  )
}
