import { useContext } from "react"
import { AgeStore } from "../Context"


const Gchild = () => {
  const store =  useContext(AgeStore)
  console.log(store)
  return (
    <div className="gchild">
      gchild {store.age} {store.name}
    </div>
  )
}

export default Gchild
