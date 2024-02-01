import { Paper, Stack } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <Paper
      square
      sx={{
        minWidth: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack spacing={5}>
        {children}
      </Stack>
    </Paper>
  );
};

export default AppLayout;
