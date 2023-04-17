import emailjs from "emailjs-com";
import { Formik, Field } from "formik";
import {
  Input,
  Textarea,
  Button,
  VStack,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Container,
  Heading,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const ContactScreen = () => {
  const [emailjsInfo, setEmailjsInfo] = useState(null);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    const credentials = async () => {
      const { data } = await axios.get("/api/config/emailjs");
      // console.log(data);
      setEmailjsInfo(data);
    };
    credentials();
    // console.log(emailjsInfo);
  }, []); // 無限迴圈 [emailjsInfo]

  const sendEmail = (values, reset) => {
    emailjs
      .send(emailjsInfo.service_id, emailjsInfo.template_id, values, emailjsInfo.public_key)
      .then((res) => {
        toast({
          title: "Email send.",
          description: "Thanks! I will come back to you soon.",
          status: "success",
          duration: 7000,
          isClosable: true,
        });
        // console.log(emailjsInfo);
        reset();
        setTimeout(() => {
          navigate("/", { replace: true });
        }, "1000");
      })
      .catch((error) => {
        toast({
          title: "Whoops!",
          description: "Something went wrong. Please try again later.",
          status: "error",
          duration: 7000,
          isClosable: true,
        });
      });
  };

  // 測試有沒有收到 values
  // const testValues = (values, reset) => {
  //   console.log(values);
  //   reset()
  // }

  // 在網路上找的 email validation
  const isValidEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  return (
    <Container maxW="5xl" minH="100vh" mt="20">
      {/* {emailjs && <Text>{emailjs.template_id}</Text>} */}
      <Heading textAlign="center">Get in Touch</Heading>
      {/*  Formik can keep track for our form */}
      <Formik
        initialValues={{
          email: "",
          name: "",
          text: "",
        }}
        onSubmit={(values, actions) => {
          sendEmail(values, actions.resetForm);
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing="5">
              <FormControl isInvalid={!!errors.email && touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  variant="filled"
                  validate={(value) => {
                    let error;

                    if (!isValidEmail(value)) {
                      error = "The email address must be valid.";
                    }
                    return error;
                  }}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.name && touched.name}>
                <FormLabel htmlFor="text">Name</FormLabel>
                <Field
                  as={Input}
                  id="name"
                  name="name"
                  type="text"
                  variant="filled"
                  validate={(value) => {
                    let error;

                    if (value.length < 1) {
                      error = "Name must contain at least 1 character.";
                    }
                    return error;
                  }}
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.text && touched.text}>
                <FormLabel htmlFor="text">Message</FormLabel>
                <Field
                  as={Textarea}
                  id="text"
                  name="text"
                  type="text"
                  variant="filled"
                  validate={(value) => {
                    let error;

                    if (value.length < 10) {
                      error = "Message must contain at least 10 character.";
                    }
                    return error;
                  }}
                />
                <FormErrorMessage>{errors.text}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default ContactScreen;
