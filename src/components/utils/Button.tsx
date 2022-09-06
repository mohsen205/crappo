import Button from "@mui/material/Button";
import { styled } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.accent.main,
  textTransform: "capitalize",
  borderRadius: "32px",
  padding: "10px 23px 10px 23px",
  "&:hover": {
    backgroundColor: theme.palette.accent.main,
  },
}));
