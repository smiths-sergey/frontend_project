import classNames from "classnames";
import styles from "./MyButton.module.css";
export const MyButton = ({
  isDisabled = false,
  type = "primary",
  text = "Войти",
}) => {
  const className = classNames(styles["btn"], {
    [styles["primary"]]: type === "primary",
    [styles["secondary"]]: type === "secondary",
    [styles["is-disabled"]]: isDisabled,
  });

  return (
    <button className={className} disabled={isDisabled}>
      {text}
    </button>
  );
};
