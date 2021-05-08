import React from "react";
import { actions } from "@storybook/addon-actions";
import Button from "./Button";
import { Toolbar } from "./styles";

export default {
  title: "Components/Atoms/Button",
  component: Button,
};

const events = actions({ onClick: "clicked" });

export const usage = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button {...events} color="default">
        Default
      </Button>
      <Button color="primary" {...events}>
        Primary
      </Button>
      <Button color="error" {...events}>
        Error
      </Button>
    </Toolbar>
    <p>Desabled:</p>
    <Toolbar>
      <Button disabled {...events} color="default">
        Default
      </Button>
      <Button disabled color="primary" {...events}>
        Primary
      </Button>
      <Button disabled color="error" {...events}>
        Error
      </Button>
    </Toolbar>
  </div>
);

export const outlined = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button {...events} variant="outlined">
        Default
      </Button>
      <Button color="primary" {...events} variant="outlined">
        Primary
      </Button>
      <Button color="error" {...events} variant="outlined">
        Error
      </Button>
    </Toolbar>
    <p>Desabled:</p>
    <Toolbar>
      <Button disabled {...events} variant="outlined">
        Default
      </Button>
      <Button disabled color="primary" {...events} variant="outlined">
        Primary
      </Button>
      <Button disabled color="error" {...events} variant="outlined">
        Error
      </Button>
    </Toolbar>
  </div>
);

export const link = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button {...events} variant="link">
        Default
      </Button>
      <Button color="primary" {...events} variant="link">
        Primary
      </Button>
      <Button color="error" {...events} variant="link">
        Error
      </Button>
    </Toolbar>
    <p>Desabled:</p>
    <Toolbar>
      <Button disabled {...events} variant="link">
        Default
      </Button>
      <Button disabled color="primary" {...events} variant="link">
        Primary
      </Button>
      <Button disabled color="error" {...events} variant="link">
        Error
      </Button>
    </Toolbar>
  </div>
);
