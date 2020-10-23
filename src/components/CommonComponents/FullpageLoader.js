import React, { Fragment } from "react";
import { LinearProgress, Box,Button,
  ButtonGroup, } from "@material-ui/core";

import { Save, Delete } from '@material-ui/icons';

export default function FullpageLoader() {
  return (
    <Fragment>
      <Box
        position="fixed"
        top="0"
        left="0"
        height="100vh"
        width="100vw"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: "99" }}
      ></Box>
      <Box
        position="fixed"
        top="50%"
        left="50%"
        style={{ transform: "translate(-50%, -50%)", zIndex: "100" }}
      >
        <LinearProgress color="secondary" />
      </Box>
      <Box height={300}></Box>
      <ButtonGroup>
        <Button
          variant='contained'
          color='primary'
          size='large'
          startIcon={<Save />}
        >
          Save
        </Button>
        <Button
          variant='contained'
          color='secondary'
          size='large'
          startIcon={<Delete />}
        >
          Discard
        </Button>
      </ButtonGroup>
    </Fragment>
  );
}
