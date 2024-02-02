import React from "react"

import { Skeleton } from "@mui/material"

export const Skelet = ({ width, height }) => {
  return <Skeleton animation="wave" width={width} height={height} />
}
