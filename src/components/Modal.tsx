import { Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useEstudiante } from '../hooks/useEstudiante'
import EstudianteForm from './EstudianteForm'

export default function Modal() {

  const {state, dispatch, setEstudiante} = useEstudiante()
  const initialEstudiante = {
    cc: 0,
    name: '',
    age: 0,
    mail: '',
    date: new Date(),
    materia: ''
  }

  useEffect(()=> {
    if(!state.modal){
      setEstudiante(initialEstudiante)
    }
  }, [state.modal, setEstudiante])

  return (
    <>
      <Transition appear show={state.modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => dispatch({type: 'close-modal'})}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                
                  {/* mostrar el expense form */}
                  <EstudianteForm />
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
