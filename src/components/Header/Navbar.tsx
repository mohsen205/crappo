import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.accent.main,
  textTransform: "capitalize",
  borderRadius: "32px",
  padding: "10px 23px 10px 23px",
  "&:hover": {
    backgroundColor: theme.palette.accent.main,
  },
}));
const Navbar = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <img src="images/logo.png" alt="logo of crappo" />
          </Box>
          <Stack direction="row" alignItems="center">
            <Stack direction="row" spacing={4} marginRight="70px">
              <a href="#products" className="nav-link">
                Products
              </a>
              <a href="#features" className="nav-link">
                Features
              </a>
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <a href="#login" className="nav-link">
                Login
              </a>
              <Divider
                orientation="vertical"
                variant="middle"
                sx={{
                  backgroundColor: "grey.600",
                  height: "24px",
                }}
              />
              <StyledButton variant="contained">Register</StyledButton>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
