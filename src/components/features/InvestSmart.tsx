import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { StyledButton } from "../utils/Button";

const InvestSmart = () => {
  return (
    <Container sx={{ marginBottom: "200px" }}>
      <Stack direction="row" justifyContent="space-between">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h3" color="white" marginBottom={3}>
              Invest Smart
            </Typography>
            <Typography
              variant="body1"
              marginBottom={6}
              sx={{
                width: "400px",
              }}
            >
              Get full statistic information about the behaviour of buyers and
              sellers will help you to make the decision.
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
          <img src="images/chart.png" alt="chart" />
        </Box>
      </Stack>
    </Container>
  );
};

export default InvestSmart;
