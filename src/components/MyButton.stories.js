import { MyButton } from "./MyButton";
export default {
  title: "MyButton",
  component: MyButton,
  argTypes: {
    type: {
      type: "string",
      description: "Выбор внешнего вида кнопки",
      control: {
        type: "radio",
      },
      options: ["primary", "secondary"],
    },
    isDisabled: {
      control: { type: "boolean" },
    },
    text: {
      type: "string",
      description: "Текст кнопки",
      defaultValue: "Войти",
    },
  },
};

const Template = (arg) => <MyButton {...arg} />;
export const Default = Template.bind({});
Default.args = {
  type: "primary",
  text: "Войти",
  isDisabled: false,
};
