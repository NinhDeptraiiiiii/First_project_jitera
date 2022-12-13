/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import Background from "@components/molecules/Background";
import Wrapper from "@components/molecules/Wrapper";
import Property1active from "@components/molecules/Property1active";
import { Page, Box, Text } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type LoginPageProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
};
function LoginPage(props: LoginPageProps): JSX.Element {
  return (
    <Page className={styles.page_container}>
      <Background className={styles.background1} />
      <Box className={styles.container7}>
        <Box className={styles.wrapper7}>
          <Text className={styles.text4} textType={"Text"}>
            Welcome back!
          </Text>
          <Box className={styles.card7}>
            <Text className={styles.text6} textType={"Text"}>
              Login
            </Text>
            <Box className={styles.login_form7}>
              <Wrapper className={styles.text_field1} />
              <Wrapper className={styles.text_field2} />
              <Property1active className={styles.common_button1} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
export default LoginPage;
