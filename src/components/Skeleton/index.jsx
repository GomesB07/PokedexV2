import { Skeleton } from "@mui/material"
import React from "react"

export const Skelet = ({ width, height }) => {
  return <Skeleton animation="wave" width={width} height={height} />
}
