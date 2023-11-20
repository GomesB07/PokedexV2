import api from "./api"

export const allPokemons = async () => {
  const results = await api.get("?limit=100000&offset=0")
  return results
}
