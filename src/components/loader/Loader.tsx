import React from "react";
import styles from "./styles.module.css"; // CSS 모듈을 불러옴

interface Props {
  // 여러 가지 props를 정의
  size?: number;
}

const Loader: React.FC<Props> = ({ size = 14 }) => {
  const loaderStyle = {
    width: size,
    height: size,
  };

  return <span className={styles["loader"]} style={loaderStyle} />;
};

export default Loader;
