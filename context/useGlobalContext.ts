// Settings Hook - src/hooks/useSettings
import { useContext } from 'react'
import { GlobalContext, GlobalContextInterface } from './index'

const useGlobalContext = (): GlobalContextInterface => {
  const context = useContext(GlobalContext)

  return context
}

export default useGlobalContext
