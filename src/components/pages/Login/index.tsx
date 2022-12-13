/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import Background from "@components/molecules/Background";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuthenticationService } from "@services/authentication";
import { useNavigateService } from "@services/navigate";
import { Page, Box, Text, Row, Col, Input, Button, Toast } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type LoginPageProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
};
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Form1FormData {
  input_1: string;
  input_0: string;
}
function LoginPage(props: LoginPageProps): JSX.Element {
  const authenticationService = useAuthenticationService();
  const navigateService = useNavigateService();
  const validationForm1Schema = useMemo(
    () =>
      yup.object().shape({
        input_1: yup.string().email().required("input_1 is a required field"),
        input_0: yup.string().required("input_0 is a required field"),
      }),
    []
  );
  const formForm1 = useForm<Form1FormData>({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    resolver: yupResolver(validationForm1Schema),
    shouldFocusError: true,
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const { errors: formForm1Errors } = formForm1.formState;

  const handleButton1 = async (values?: Form1FormData) => {
    try {
      await authenticationService.loginWithEmail("users", {
        email: get(values, "input_1", ""),
        password: get(values, "input_0", ""),
      });
      navigateService.navigate("/home");
    } catch (e: unknown) {
      Toast.error("Login failed");
    }
  };
  const handleText7 = async (values?: Form1FormData) => {
    try {
      navigateService.navigate("/login");
    } catch (e: unknown) {}
  };
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
            <Row align={"top"} gutter={[30, 30]} justify={"start"} className={styles.row_1}>
              <Col md={Number(24)} xl={Number(24)} xs={Number(24)}>
                <Box className={styles.form_1}>
                  <Box className={styles.box_5}>
                    <Box className={styles.box_0}>
                      <Text className={styles.text_4} textType={"Text"}>
                        Email
                      </Text>
                      <Text className={styles.text_0} textType={"Text"}>
                        *
                      </Text>
                    </Box>
                    <Controller
                      control={formForm1.control}
                      render={({
                        field: { onChange, onBlur, value },
                        fieldState: { isTouched, error },
                      }: any) => {
                        return (
                          <Input
                            inputStyle={styles.input_1_input}
                            placeholder={"Please input Email"}
                            className={styles.input_1}
                            onChange={onChange}
                            value={value}
                          />
                        );
                      }}
                      name="input_1"
                    />
                    <Box className={styles.box_2}>
                      <Text className={styles.text_2} textType={"Text"}>
                        {get(formForm1Errors, "Email_input.message")}
                      </Text>
                    </Box>
                  </Box>
                  <Box className={styles.box_3}>
                    <Box className={styles.box_4}>
                      <Text className={styles.text_3} textType={"Text"}>
                        Password
                      </Text>
                      <Text className={styles.text_4} textType={"Text"}>
                        *
                      </Text>
                    </Box>
                    <Controller
                      control={formForm1.control}
                      render={({
                        field: { onChange, onBlur, value },
                        fieldState: { isTouched, error },
                      }: any) => {
                        return (
                          <Input
                            inputStyle={styles.input_0_input}
                            isPasswordField
                            placeholder={"Please input password"}
                            className={styles.input_0}
                            onChange={onChange}
                            value={value}
                          />
                        );
                      }}
                      name="input_0"
                    />
                    <Box className={styles.box_5}>
                      <Text className={styles.text_5} textType={"Text"}>
                        {get(formForm1Errors, "password_input.message")}
                      </Text>
                      <Text className={styles.text_6} textType={"Text"}>
                        By registering, you agree to the privacy policy and membership agreement.
                      </Text>
                      <Button
                        buttonType={"primary"}
                        className={styles.button_1}
                        onClick={formForm1.handleSubmit(handleButton1)}
                      >
                        Log in
                      </Button>
                      <Text
                        className={styles.text_7}
                        textType={"Text"}
                        onClick={formForm1.handleSubmit(handleText7)}
                      >
                        Already a member? Log in
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Col>
            </Row>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
export default LoginPage;
