/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import { Box, Text } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type NoteItemMoleculeProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
  responsiveVisibility?: string[];
  Content?: string;
  onClickDetail?: (Id?: number) => any;
  Id?: number;
};
function NoteItemMolecule(props: NoteItemMoleculeProps): JSX.Element {
  const handleBox2 = async () => {
    try {
      const { onClickDetail, Id } = props;
      return onClickDetail && onClickDetail(Id);
    } catch (e: unknown) {}
  };
  return (
    <Box
      className={`${styles.molecule} ${get(props, "className")}`}
      responsiveVisibility={get(props, "responsiveVisibility")}
    >
      <Box className={styles.box_2} onClick={handleBox2}>
        <Text className={styles.text_2} textType={"Text"}>
          {get(props, "Content")}
        </Text>
      </Box>
    </Box>
  );
}
export default NoteItemMolecule;
