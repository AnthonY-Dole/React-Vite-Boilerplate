import React from "react";
import { Meta } from "@storybook/react";
import Button from "../Component/Button";
export default {
  component: Button,
  title: "Button",
} as Meta;
export const Primary = () => <Button>Primary Button</Button>;
export const Secondary = () => (
  <Button variant="ghost">Secondary Button</Button>
);
