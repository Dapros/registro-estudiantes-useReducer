import { useEffect } from "react"
import EstudianteList from "./components/EstudianteList"
import Modal from "./components/Modal"
import { useEstudiante } from "./hooks/useEstudiante"
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline'

function App() {

  const {state, dispatch} = useEstudiante()

  //Guardar en local Storage
  useEffect(() => {
    localStorage.setItem('estudiante', JSON.stringify(state.estudiante))
  }, [state])

  return (
    <>
      <header className="py-5 bg-blue-100 ">
        <div className="w-2/3 mx-auto flex items-center justify-start lg:justify-center space-x-2">
          <img src="/public/IconoRegistroEstudiantes.svg" alt="icono" className="w-20" />
          <div>
            <h1 className="font-bold text-4xl uppercase text-slate-700 text-center">Registro de estudiantes</h1>
            <p className="text-xs lg:text-center text-slate-700">Agregar - Actualizar - Eliminar</p>
          </div>
          
        </div>
      </header>

      <main className="w-2/3 mx-auto">
        <article>
          <div className="mt-10 border-b pb-5 flex space-x-4">
            <button
              onClick={()=>dispatch({type: 'show-modal'})}
              className="flex items-center justify-center rounded px-5 py-2 transition-all border border-slate-700 text-slate-700 hover:text-green-400 hover:border-green-400"
            >
              <PlusIcon
                width={25}
              />
              <p>Agregar estudiante</p>
            </button>

            {state.estudiante.length > 2 && (
              <button
              onClick={()=>dispatch({type: 'clean-all-students'})}
              className="flex items-center justify-center rounded px-5 py-2 transition-all border border-slate-700 text-slate-700 hover:text-red-400 hover:border-red-400"
              >
                <XMarkIcon
                  width={25}
                />
                <p>Limpiar estudiantes </p>
              </button>
            )}
          </div>
        </article>

        <article>
          <Modal />
          <div>
            <EstudianteList />
          </div>
        </article>
      </main>
    </>
  )
}

export default App
