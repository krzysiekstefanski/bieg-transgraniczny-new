import { useEffect, useRef } from "react"
import ReactDOM from "react-dom"

const Portal = ({ children }) => {
  const portalRoot =
    typeof document !== `undefined` ? document.getElementById("portal") : null
  const el = useRef(
    typeof document !== `undefined` ? document.createElement("div") : null
  )

  useEffect(() => {
    const portalElement = el.current

    if (portalRoot) {
      portalRoot.appendChild(portalElement)
    }

    return () => {
      if (portalRoot && portalElement) {
        portalRoot.removeChild(portalElement)
      }
    }
  }, [])

  if (el.current) {
    return ReactDOM.createPortal(children, el.current)
  } else {
    return null
  }
}

export default Portal
