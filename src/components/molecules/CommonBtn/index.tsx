/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import { Box, Text } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type CommonBtnMoleculeProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
  responsiveVisibility?: string[];
  label?: string;
  onClick?: () => any;
};
function CommonBtnMolecule(props: CommonBtnMoleculeProps): JSX.Element {
  const handleBox2 = async () => {
    try {
      const { onClick } = props;
      return onClick && onClick();
    } catch (e: unknown) {}
  };
  return (
    <Box
      className={`${styles.molecule} ${get(props, "className")}`}
      responsiveVisibility={get(props, "responsiveVisibility")}
    >
      <Box className={styles.box_2} onClick={handleBox2}>
        <Text className={styles.text_2} textType={"Text"}>
          {get(props, "label")}
        </Text>
      </Box>
    </Box>
  );
}
export default CommonBtnMolecule;
