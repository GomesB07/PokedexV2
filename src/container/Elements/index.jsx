import React, { useEffect, useState } from "react"

import { TypesPokemon, Error, Skelet } from "../../components"
import { getElements } from "../../services/getData"

const Elements = () => {
  const [elements, setElements] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const elementsArray = []
        for (let i = 1; i < 19; i++) {
          const { data } = await getElements(i)
          elementsArray.push(data)
        }
        setElements(elementsArray)
        setIsLoading(true)
      } catch (err) {
        console.error(err)
        setIsError(true)
      }
    }

    fetchData()
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
