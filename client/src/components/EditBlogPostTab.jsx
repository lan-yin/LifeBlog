import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Stack,
  Spinner,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
  Flex,
  Button,
} from "@chakra-ui/react";
import {
  getBlogPostsByCategory,
  resetLoaderAndFlags,
  previousPageClick,
  nextPageClick,
} from "../redux/actions/blogPostActions";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import PostEdit from "./PostEdit";

const EditBlogPostTab = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const blogPostInfo = useSelector((state) => state.blogPosts);
  const { blogPosts, loading, error, blogPostUpdated, blogPostRemoved, pageItems, status } = blogPostInfo;

  useEffect(() => {
    dispatch(resetLoaderAndFlags());
    dispatch(getBlogPostsByCategory("all", pageItems));
    if (blogPostUpdated) {
      window.scroll(0, 0);
      toast({
        title: "Blog post saved.",
        description: "Blog post has been updated.",
        status: "success",
        duration: 7000,
        isClosable: true,
      });
    }
    if (blogPostRemoved) {
      window.scroll(0, 0);
      toast({
        title: "Blog post removed.",
        status: "success",
        duration: 7000,
        isClosable: true,
      });
    }
  }, [blogPostRemoved, blogPostUpdated, dispatch, pageItems, status]);

  return (
    <>
      <VStack spacing="30px" size="8xl">
        {error && (
          <Alert status="='error">
            <AlertIcon />
            <AlertTitle>We are sorry!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {loading ? (
          <Stack direction="column" spacing="4" alignItems="center">
            <p as="block">I am not dead. I try my best to mapping data. Please wait. Thank you.</p>
            <Spinner mt="20" thickness="2px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
          </Stack>
        ) : (
          <>
            {blogPosts.map((post) => (
              <PostEdit
                key={post._id}
                _id={post._id}
                title={post.title}
                category={post.category}
                author={post.author}
                createdAt={post.createdAt}
                image={post.image}
                contentOne={post.contentOne}
                contentTwo={post.contentTwo}
              />
            ))}
          </>
        )}
      </VStack>
      <Flex justify='center' mt='20'>
        <Button m="3" isDisabled={pageItems === 0} onClick={() => dispatch(previousPageClick(pageItems))}>
          <ArrowLeftIcon />
        </Button>
        <Button
          m="3"
          isDisabled={status === 201 || blogPosts.length <= 3}
          onClick={() => dispatch(nextPageClick(pageItems))}
        >
          <ArrowRightIcon />
        </Button>
      </Flex>
    </>
  );
};

export default EditBlogPostTab;
