import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const Card = ({ title, children }: Props) => {
  return (
    <Box
      width={600}
      border="1px solid #4db6ac"
      borderRadius="5px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Typography
        variant="h1"
        padding="30px"
        fontSize="3.2em"
        fontWeight="500"
        margin="auto"
      >
        {title}
      </Typography>
      <Box padding="30px" minHeight="65px">
        {children}
      </Box>
    </Box>
  );
};

export default Card;
