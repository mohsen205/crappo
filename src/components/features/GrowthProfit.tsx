import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { StyledButton } from "../utils/Button";

const GrowthProfit = () => {
  return (
    <Container sx={{ marginBottom: "200px" }}>
      <Stack direction="row" justifyContent="space-between">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "6rem",
          }}
        >
          <Box>
            <Typography variant="h3" color="white" marginBottom={3}>
              Grow your profit and track your investments
            </Typography>
            <Typography variant="body1" marginBottom={6}>
              Use advanced analytical tools. Clear TradingView charts let you
              track current and historical profit investments.
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
        <Box paddingTop={5}>
          <img src="images/table.png" alt="table" />
        </Box>
      </Stack>
    </Container>
  );
};

export default GrowthProfit;
