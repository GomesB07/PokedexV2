const ColorStyles = (color) => {
  const colorsType = {
    grass: `rgba(38, 203, 80, 1)`,
    electric: `rgba(207,210,1,1)`,
    fire: `rgba(255,91,1)`,
    water: `rgba(0,183,255,1)`,
    bug: `rgba(84,255,0,1)`,
    flying: `rgba(0,191,212,1)`,
    normal: `rgba(145,154,162,1)`,
    poison: `rgba(126,0,255,1)`,
    ground: `rgba(217,120,69,1)`,
    fairy: `rgba(233,18,104,1)`,
    fighting: `rgba(205,65,106,1)`,
    psychic: `rgba(250,113,121,1)`,
    rock: `rgba(197,182,140,1)`,
    ghost: `rgba(82,104,173,1)`,
    ice: `rgba(114,206,192,1)`,
    dragon: `rgba(10,108,195,1)`,
    dark: `rgba(90,84,101,1)`,
    steel: `rgba(90,142,162,1)`,
  }
  if (color && colorsType[color]) {
    return colorsType[color]
  }
}
export default ColorStyles

export const ColorsGraph = (color) => {
  const colors = {
    grass: "green",
    electric: `rgb(158, 158, 6)`,
    fire: "orange",
    water: "blue",
    bug: "yellowgreen",
    flying: "blue",
    normal: "grey",
    poison: "purple",
    ground: "orange",
    fairy: `rgb(233, 83, 108)`,
    fighting: "red",
    psychic: `rgb(224, 43, 43)`,
    rock: `rgb(176, 176, 122)`,
    ghost: "blue",
    ice: "watergreen",
    dragon: "blue",
    dark: "grey",
    steel: "green",
  }

  if (colors && colors[color]) {
    return colors[color]
  }
}
