import React, { useEffect, useState } from "react"

import { TypesPokemon, Error, Skelet } from "../../components"
import { getElements } from "../../services/getData"

const Elements = () => {
  const [elements, setElements] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await getElements(19)
        setElements(data)
        setIsLoading(true)
      }

      fetchData()
    } catch (err) {
      console.error(err)
      setIsError(true)
    }
  }, [])

  return isError ? (
    <Error />
  ) : isLoading ? (
    <TypesPokemon types={elements} pagElements isLoading={isLoading} />
  ) : (
    <Skelet />
  )
}

export default Elements
