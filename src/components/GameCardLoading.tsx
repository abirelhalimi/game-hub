import React from "react";
import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";

const GameCardLoading = () => {
  return (
    <>
      <Card maxW={"sm"} borderRadius={10} overflow={"hidden"}>
        <Skeleton height={200} />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCardLoading;
