import { formatDate } from "../helpers"
import { useEstudiante } from "../hooks/useEstudiante"
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline'

export default function EstudianteList() {

  const {state, dispatch} = useEstudiante()

  return (
    <>
    <div className="my-10 w-full overflow-x-auto">
      {state.estudiante.length !== 0 ?
          <table className="w-full text-sm text-left rtl:text-right text-slate-700">
            <thead className="text-xs uppercase">
              <tr>
                <th className="px-4 py-2">Cedula</th>
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Edad</th>
                <th className="px-4 py-2">Correo</th>
                <th className="px-4 py-2">Materia</th>
                <th className="px-4 py-2">Fecha de ingreso</th>
                <th className="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {state.estudiante.map(prevEstudiante => (
                <tr key={prevEstudiante.id} className="border-b border-slate-100">
                  <th className="px-4 py-2">{prevEstudiante.cc}</th>
                  <th className="px-4 py-2">{prevEstudiante.name}</th>
                  <th className="px-4 py-2">{prevEstudiante.age}</th>
                  <th className="px-4 py-2">{prevEstudiante.mail}</th>
                  <th className="px-4 py-2">{prevEstudiante.materia}</th>
                  <th className="px-4 py-2">{formatDate(prevEstudiante.date!.toString())}</th>
                  <th className="px-4 py-2 space-x-2">
                    <button
                      onClick={() => dispatch({type: 'editing-student', payload: {id: prevEstudiante.id}})}
                      className="hover:bg-blue-500 hover:text-white rounded text-blue-500"
                    >
                      <PencilSquareIcon 
                        width={25}
                      />
                    </button>
                    <button
                      onClick={()=>dispatch({type: 'delete-student', payload: {id: prevEstudiante.id}})}
                      className="hover:bg-red-500 hover:text-white rounded text-red-500"
                    >
                      <TrashIcon
                        width={25}
                      />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table> :
          <p className="w-full text-center font-bold text-lg text-slate-700 hover:text-black">No hay estudiantes registrados aun!</p>
        }
    </div>
      
    </>
  )
}
