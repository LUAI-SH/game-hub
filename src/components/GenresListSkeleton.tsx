import { List, ListItem, Flex, Skeleton, Spacer } from "@chakra-ui/react";

export default function GenresListSkeleton() {
  const skeletons = [...Array(12).keys()];
  return (
    <Flex height='100vh' direction="column" justifyContent='space-between'>
      {skeletons.map((skeleton) => (
        <Flex key={skeleton} alignItems='center'>
          <Skeleton  margin='12px 0' height="40px" width="30%" />
          <Spacer />
          <Skeleton flexGrow='1' height="20px" width="50%" />
        </Flex>
      ))}
    </Flex>
  );
}
