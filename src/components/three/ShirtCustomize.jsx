import React from "react";
import { Box } from "@mui/material";

import { Overlay } from "./Overlay";
import './styles.css'
import {CanvasBase} from "./CanvasBase";
const ShirtCustomize = () => {
  return (
    <>
      <Box m="0" width="100%" height="90vh">
        <CanvasBase/>
        <Overlay/>
      </Box>
    
    </>
  );
};

export default ShirtCustomize;
