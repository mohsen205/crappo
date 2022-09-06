import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  backgroundColor: "transparent",
  color: theme.palette.common.white,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  width: "80px",
  height: "80px",
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto 0px",
}));
const Numbers = () => {
  return (
    <Container>
      <Stack direction="row" justifyContent="space-between">
        <StyledCard>
          <StyledBox>
            <CardMedia
              component="img"
              sx={{ width: "32px", height: "32px" }}
              image="/images/bar_chart.png"
              alt="Digital Currency Exchanged"
            />
          </StyledBox>
          <CardContent>
            <Typography variant="h2" color="white">
              $30B
            </Typography>
            <Typography variant="body1">Digital Currency Exchanged</Typography>
          </CardContent>
        </StyledCard>

        <StyledCard>
          <StyledBox>
            <CardMedia
              component="img"
              sx={{ width: "32px", height: "32px" }}
              image="/images/person.png"
              alt="Trusted Wallets Investor"
            />
          </StyledBox>
          <CardContent>
            <Typography variant="h2" color="white">
              10M+
            </Typography>
            <Typography variant="body1">Trusted Wallets Investor </Typography>
          </CardContent>
        </StyledCard>

        <StyledCard>
          <StyledBox>
            <CardMedia
              component="img"
              sx={{ width: "32px", height: "32px" }}
              image="/images/world.png"
              alt="Countries Supported"
            />
          </StyledBox>
          <CardContent>
            <Typography variant="h2" color="white">
              195
            </Typography>
            <Typography variant="body1">Countries Supported</Typography>
          </CardContent>
        </StyledCard>
      </Stack>
    </Container>
  );
};

export default Numbers;
