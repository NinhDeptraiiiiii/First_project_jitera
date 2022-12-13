/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import CommonBtn from "@components/molecules/CommonBtn";
import { useNavigateService } from "@services/navigate";
import { Box } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type Property1activeMoleculeProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
  responsiveVisibility?: string[];
};
function Property1activeMolecule(props: Property1activeMoleculeProps): JSX.Element {
  const navigateService = useNavigateService();

  const handleOnClickCommonbtn1 = async () => {
    try {
      navigateService.navigate("/signup");
    } catch (e: unknown) {}
  };
  return (
    <Box
      className={`${styles.page_container} ${get(props, "className")}`}
      responsiveVisibility={get(props, "responsiveVisibility")}
    >
      <CommonBtn
        className={styles.commonbtn_1}
        label={"Sign Up"}
        onClick={handleOnClickCommonbtn1}
      />
    </Box>
  );
}
export default Property1activeMolecule;
