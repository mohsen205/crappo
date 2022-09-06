import Box from "@mui/material/Box";
import Copyright from "./Copyright";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import QuickLink from "./QuickLink";
import Resources from "./Resources";
import End from "./End";
const Index = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        paddingY: "80px",
      }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ paddingBottom: "80px" }}
        >
          <Box>
            <img src="images/logo.png" alt="logo of crappo" />
          </Box>
          <QuickLink />
          <Resources />
          <End />
        </Stack>
      </Container>
      <Copyright />
    </Box>
  );
};

export default Index;
