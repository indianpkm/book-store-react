import { Box } from "@mui/material";
import React, { Suspense } from "react";

const LagyBook = React.lazy(() => import("./BookStoreStructure"));

const BookSection = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LagyBook />
    </Suspense>
  );
};

export default BookSection;
