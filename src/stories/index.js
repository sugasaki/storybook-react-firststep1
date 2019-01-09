import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import ButtonCustom from "../components/ButtonCustom";
import ButtonCustomBackgroundColor from "../components/ButtonCustomBackgroundColor";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("ButtonCustom", module)
  .add("blue back", () => (
    <ButtonCustom onClick={action("clicked")}>Hello Button</ButtonCustom>
  ))
  .add("red back", () => (
    <ButtonCustomBackgroundColor
      onClick={action("clicked")}
      backgroundColor="#ff0000"
    >
      Button1
    </ButtonCustomBackgroundColor>
  ))
  .add("green back", () => (
    <ButtonCustomBackgroundColor
      onClick={action("clicked")}
      backgroundColor="#00ff00"
    >
      Button2
    </ButtonCustomBackgroundColor>
  ));
