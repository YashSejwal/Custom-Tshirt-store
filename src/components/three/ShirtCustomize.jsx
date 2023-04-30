import React from "react";
import { Box } from "@mui/material";

import { Overlay } from "./Overlay";
import './styles.css'
import {CanvasBase} from "./CanvasBase";
const ShirtCustomize = () => {
  return (
    <>
      <Box m="90px auto" width="100%" height="100vh">
        <CanvasBase/>
        <Overlay/>
      </Box>
    
    </>
  );
};

export default ShirtCustomize;
