import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { StyledButton } from "../utils/Button";

const Content = () => {
  return (
    <Container sx={{ marginBottom: "200px" }}>
      <Stack direction="row" justifyContent="space-between">
        <Box paddingTop={5}>
          <img src="images/Illustrations_2.png" alt="Illustration" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h2" color="white" marginBottom={3}>
              Why you should choose CRAPPO
            </Typography>
            <Typography variant="body1" marginBottom={3}>
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </Typography>
            <StyledButton
              variant="contained"
              sx={{
                padding: "16px 16px 16px 24px",
                gap: "24px",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#FFFFFF",
                  TextAlign: "center",
                }}
              >
                Learn More
              </Typography>
            </StyledButton>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Content;
