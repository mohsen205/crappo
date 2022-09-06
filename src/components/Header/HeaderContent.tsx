import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { styled, Typography } from "@mui/material";
import { StyledButton } from "../utils/Button";
import ArrowCircleRight from "../utils/svg/ArrowCircleRight.svg";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: "4px 16px",
  color: theme.palette.common.black,
  gap: "10px",
  borderRadius: "32px",
  height: "32px",
  display: "flex",
  alignItems: "center",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Rubik",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "28px",
  letterSpacing: "0.01em",
}));
const HeaderContent = () => {
  return (
    <Container>
      <Stack direction="row" justifyContent="space-between">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{
                padding: "5px",
                width: "365px",
                height: "40px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "32px",
                marginBottom: "24px",
              }}
            >
              <StyledBox>
                <Typography variant="subtitle2" color="primary.main">
                  75% SAVE
                </Typography>
              </StyledBox>
              <StyledTypography variant="body1">
                For the Black Friday weekend
              </StyledTypography>
            </Stack>
            <Typography variant="h1" color="white" marginBottom="24px">
              Fastest & secure platform to invest in crypto
            </Typography>
            <Typography variant="body1" marginBottom="24px">
              Buy and sell cryptocurrencies, trusted by 10M wallets with over
              $30 billion in transactions.
            </Typography>
            <StyledButton
              variant="contained"
              sx={{
                padding: "16px 16px 16px 24px",
                gap: "24px",
              }}
              endIcon={
                <img src={ArrowCircleRight} alt="ArrowCircleRightIcon " />
              }
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#FFFFFF",
                  TextAlign: "center",
                }}
              >
                Try for FREE
              </Typography>
            </StyledButton>
          </Box>
        </Box>
        <Box paddingTop={5}>
          <img src="images/Illustration.png" alt="Illustration" />
        </Box>
      </Stack>
    </Container>
  );
};

export default HeaderContent;
