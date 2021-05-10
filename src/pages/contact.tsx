import Layout from "../components/Layout";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Text,
  Textarea,
  useToast,
  Link,
} from "@chakra-ui/react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  useFormik,
} from "formik";
import { useForm, ValidationError } from "@formspree/react";
import { SiLetsencrypt } from "react-icons/si";
const ContactPage = () => {
  const toast = useToast();
  const [state, handleSubmit] = useForm("mqkweyqn");
  return (
    <Layout>
      <Flex
        direction="column"
        w="100%"
        justifyContent="center"
        alignItems="center"
        maxHeight="none"
        p={5}
      >
        <Box w={{ base: "95%", sm: "95%", md: "80%", lg: "80%" }} h="100%">
          <Box w={{ base: "95%", sm: "95%", md: "80%", lg: "80%" }} h="100%">
            <Flex
              direction="column"
              h="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Box>
                <Heading color="purple.500" size="4xl">
                  Contact Me!
                </Heading>
                <Text color="purple.200">
                  Feel free to send me a message if you're interested in
                  working with me or have any questions!
                </Text>
                <Formik
                  initialValues={{ name: "", email: "" }}
                  onSubmit={(values, actions) => {
                    if (localStorage.getItem("contactTimeout")) {
                      let lastSubmit = new Date(
                        localStorage.getItem("contactTimeout")
                      );
                      let diff = Date.now() - lastSubmit.getMilliseconds();
                      if (diff > 24 * 3600) {
                        handleSubmit(values);
                        toast({
                          title: "Email Sent!",
                          description:
                            "An email has been sent. I'll try to get back to you as soon as possible! Thank you!",
                          status: "success",
                          duration: 9000,
                          isClosable: true,
                        });
                        actions.resetForm();
                      } else {
                        toast({
                          title: "Email not sent :(",
                          description: (
                            <Text>
                              You have already sent an email through this form.
                              If you need to contact me again, please wait or
                              email me <Link href="mailto:trevor.rice260@gmail.com?subject=trevrr.dev" color="whiteAlpha.800">here</Link>
                            </Text>
                          ),
                          status: "error",
                          duration: 9000,
                          isClosable: true,
                        });
                      }
                    } else {
                      localStorage.setItem(
                        "contactTimeout",
                        Date.now().toString()
                      );
                      toast({
                        title: "Email Sent!",
                        description:
                          "An email has been sent. I'll try to get back to you as soon as possible! Thank you!",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                      });
                      handleSubmit(values);
                      actions.resetForm();
                    }
                    actions.setSubmitting(false);
                  }}
                >
                  {(props) => (
                    <Form action="https://formspree.io/f/mqkweyqn">
                      <Field name="name" validate={() => null}>
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={form.errors.name && form.touched.name}
                          >
                            <FormLabel htmlFor="name"> name</FormLabel>
                            <Input {...field} id="name" placeholder="name" />
                            <FormErrorMessage>
                              {form.errors.name}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field name="email" validate={() => null}>
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={form.errors.email && form.touched.email}
                          >
                            <FormLabel htmlFor="email">email</FormLabel>
                            <Input {...field} id="email" placeholder="email" />
                            <FormErrorMessage>
                              {form.errors.email}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field name="message" validate={() => null}>
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={
                              form.errors.message && form.touched.message
                            }
                          >
                            <FormLabel htmlFor="message">message</FormLabel>
                            <Textarea
                              {...field}
                              id="message"
                              placeholder="message"
                            />
                            <FormErrorMessage>
                              {form.errors.message}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Button
                        mt={4}
                        colorScheme="purple"
                        isLoading={props.isSubmitting}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default ContactPage;
