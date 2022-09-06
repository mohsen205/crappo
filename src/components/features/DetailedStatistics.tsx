import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { StyledButton } from "../utils/Button";

const DetailedStatistics = () => {
  return (
    <Container sx={{ marginBottom: "200px" }}>
      <Stack direction="row" justifyContent="space-between">
        <Box
          paddingTop={5}
          sx={{
            position: "absolute",
            left: "0px",
          }}
        >
          <img src="images/statistic.png" alt="statistic" />
        </Box>
        <Box width="100%" height="100%"></Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "6rem",
          }}
        >
          <Box>
            <Typography variant="h3" color="white" marginBottom={3}>
              Detailed Statistics
            </Typography>
            <Typography variant="body1" marginBottom={6}>
              View all mining related information in realtime, at any point at
              any location and decide which polls you want to mine in.
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

export default DetailedStatistics;
