import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { CardPokemon, Error, TypesPokemon } from "../../components"
import { getElements, getPokemons } from "../../services/getData"
import ColorStyles from "../../styles/ColorStyles"
import { Container, DamagesContainer } from "./styles"

const Element = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [damages, setDamages] = useState([])
  const [type, setType] = useState()
  const { element } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await getElements(element)
        setType([data])
        setIsLoading(true)
      }

      fetchData()
    } catch (err) {
      console.error(err)
      setIsError(true)
    }
  }, [element])

  useEffect(() => {
    if (type) {
      return setDamages({
        double_damage_from: type[0].damage_relations.double_damage_from.map(
          (damage) => damage.name,
        ),
        double_damage_to: type[0].damage_relations.double_damage_to.map(
          (damage) => damage.name,
        ),
        half_damage_from: type[0].damage_relations.half_damage_from.map(
          (damage) => damage.name,
        ),
        half_damage_to: type[0].damage_relations.half_damage_to.map(
          (damage) => damage.name,
        ),
        no_damage_from: type[0].damage_relations.no_damage_from.map(
          (damage) => damage.name,
        ),
        no_damage_to: type[0].damage_relations.no_damage_to.map(
          (damage) => damage.name,
        ),
      })
    }
  }, [type])

  return (
    <Container>
      {isError ? (
        <Error />
      ) : (
        type && (
          <div className="sub-container">
            <div className="div-element">
              <TypesPokemon types={type} isLoading={isLoading} elementPage />
            </div>

            <DamagesContainer>
              <div className="damages-title">
                <h2>Damages</h2>
              </div>

              {damages && (
                <div className="div-damages">
                  <div className="div-damage">
                    <h2>Double Damage From:</h2>
                    {damages.double_damage_from &&
                      damages.double_damage_from.map((element) => (
                        <p
                          key={element}
                          onClick={() => navigate(`/element/${element}`)}
                          style={{ color: ColorStyles(element) }}
                        >
                          {element}
                        </p>
                      ))}
                  </div>

                  <div className="div-damage">
                    <h2>Double Damage to:</h2>
                    {damages.double_damage_to &&
                      damages.double_damage_to.map((element) => (
                        <p
                          key={element}
                          onClick={() => navigate(`/element/${element}`)}
                          style={{ color: ColorStyles(element) }}
                        >
                          {element}
                        </p>
                      ))}
                  </div>

                  <div className="div-damage">
                    <h2>Half Damage From:</h2>
                    {damages.half_damage_from &&
                      damages.half_damage_from.map((element) => (
                        <p
                          key={element}
                          onClick={() => navigate(`/element/${element}`)}
                          style={{ color: ColorStyles(element) }}
                        >
                          {element}
                        </p>
                      ))}
                  </div>

                  <div className="div-damage">
                    <h2>Half Damage To:</h2>
                    {damages.half_damage_to &&
                      damages.half_damage_to.map((element) => (
                        <p
                          key={element}
                          onClick={() => navigate(`/element/${element}`)}
                          style={{ color: ColorStyles(element) }}
                        >
                          {element}
                        </p>
                      ))}
                  </div>

                  <div className="div-damage">
                    <h2>No Damage From:</h2>
                    {damages.no_damage_from &&
                      damages.no_damage_from.map((element) => (
                        <p
                          key={element}
                          onClick={() => navigate(`/element/${element}`)}
                          style={{ color: ColorStyles(element) }}
                        >
                          {element}
                        </p>
                      ))}
                  </div>

                  <div className="div-damage">
                    <h2>No Damage To:</h2>
                    {damages.no_damage_to &&
                      damages.no_damage_to.map((element) => (
                        <p
                          key={element}
                          onClick={() => navigate(`/element/${element}`)}
                          style={{ color: ColorStyles(element) }}
                        >
                          {element}
                        </p>
                      ))}
                  </div>
                </div>
              )}
            </DamagesContainer>
          </div>
        )
      )}
    </Container>
  )
}

export default Element
