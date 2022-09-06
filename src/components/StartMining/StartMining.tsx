import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { StyledButton } from "../utils/Button";

const StartMining = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #2B076E 0%, #0D0D2B 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingY: "88px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#3671E9",
          borderRadius: "16px",
          padding: "48px",
        }}
      >
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <Box>
            <Typography variant="h3" color="white">
              Start mining now
            </Typography>
            <Typography
              variant="body1"
              color="white"
              sx={{
                width: "348px",
              }}
            >
              Join now with CRAPPO to get the latest news and start mining now
            </Typography>
          </Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={2}
            sx={{
              alignItems: "center",
            }}
          >
            <TextField
              sx={{
                width: "374px",
                color: "white",
              }}
              id="email-id"
              label="Enter your email"
              type="email"
              variant="standard"
            />
            <Box>
              <StyledButton
                variant="contained"
                sx={{
                  padding: "16px 16px 16px 24px",
                  gap: "24px",
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "primary.main",
                    TextAlign: "center",
                  }}
                >
                  Subscribe
                </Typography>
              </StyledButton>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default StartMining;
