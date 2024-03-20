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
  const [dataPokemons, setDataPokemons] = useState([])
  const [pokemons, setPokemons] = useState([])
  const { element } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await getElements(element)
        setType([data])
        setDataPokemons(data.pokemon)
        setIsLoading(true)
      }
      fetchData()
    } catch (err) {
      console.error(err)
      setIsError(true)
    }
  }, [element])

  useEffect(() => {
    try {
      const fetchPokemons = async () => {
        const namePokemons = dataPokemons.map((pokemon) => pokemon.pokemon.name)

        const data = await getPokemons(namePokemons)
        console.log(data)
      }

      fetchPokemons()
    } catch (error) {
      console.error(error)
    }
  }, [dataPokemons])

  useEffect(() => {
    if (type) {
      const calculateDamages = () => {
        const damageKeys = [
          "double_damage_from",
          "double_damage_to",
          "half_damage_from",
          "half_damage_to",
          "no_damage_from",
          "no_damage_to",
        ]

        const newDamages = {}
        damageKeys.forEach((key) => {
          newDamages[key] = type[0].damage_relations[key].map(
            (damage) => damage.name,
          )
        })
        setDamages(newDamages)
      }

      calculateDamages()
    }
  }, [type])

  const renderDamageCategory = (title, category) => (
    <div className="div-damage">
      <h2>{title}</h2>
      {damages[category] &&
        damages[category].map((element) => (
          <p
            key={element}
            onClick={() => navigate(`/element/${element}`)}
            style={{ color: ColorStyles(element) }}
          >
            {element}
          </p>
        ))}
    </div>
  )

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

            <DamagesContainer color={ColorStyles(element)}>
              <div className="damages-title">
                <h2>Damages</h2>
              </div>

              <div className="div-damages">
                {renderDamageCategory(
                  "Double Damage From:",
                  "double_damage_from",
                )}
                {renderDamageCategory("Double Damage To:", "double_damage_to")}
                {renderDamageCategory("Half Damage From:", "half_damage_from")}
                {renderDamageCategory("Half Damage To:", "half_damage_to")}
                {renderDamageCategory("No Damage From:", "no_damage_from")}
                {renderDamageCategory("No Damage To:", "no_damage_to")}
              </div>
            </DamagesContainer>
          </div>
        )
      )}
    </Container>
  )
}

export default Element
