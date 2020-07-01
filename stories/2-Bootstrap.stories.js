import ButtonsGroup from "../components/ButtonsGroup/ButtonsGroup";
import { withA11y } from "@storybook/addon-a11y";

export default {
  title: "Bootstrap Buttons",
  decorators: [withA11y],
};

export const Button = () => ({
  template: `<b-button>Button</b-button>`,
});

export const SuccessButton = () => ({
  template: `<b-button variant="success">Button</b-button>`,
});

export const DangerButton = () => ({
  template: `<b-button variant="danger">Button</b-button>`,
});

export const BootstrapButtonsGroup = () => ({
  components: { ButtonsGroup },
  template: `<buttons-group />`,
});
