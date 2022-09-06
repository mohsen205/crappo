import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { StyledButton } from "../utils/Button";
import ArrowCircleRight from "../utils/svg/ArrowCircleRight.svg";
import IconButton from "@mui/material/IconButton";

const CryptocurrenciesCards = () => {
  return (
    <Container sx={{ marginTop: "64px" }}>
      <Stack direction="row" justifyContent="space-between" spacing={3.2}>
        <Card
          sx={{
            width: "370px",
            textAlign: "center",
            padding: "48px",
            borderRadius: "16px",
            backgroundColor: "secondary.main",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: "80px",
              width: "80px",
              marginX: "auto",
            }}
            src="/images/bitcoin.png"
            alt="bitcoin"
          />
          <CardContent>
            <Stack
              marginTop={6}
              direction="row"
              justifyContent="center"
              spacing={1}
            >
              <Typography variant="h3" color="white">
                Bitcoin
              </Typography>
              <Typography variant="subtitle2">BTC</Typography>
            </Stack>
            <Typography variant="body1" marginTop={2}>
              Digital currency in which a record of transactions is maintained.
            </Typography>
          </CardContent>
          <CardActions>
            <StyledButton
              variant="contained"
              sx={{
                padding: "16px 16px 16px 24px",
                gap: "24px",
                marginX: "auto",
                marginTop: "25px",
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
                Start mining
              </Typography>
            </StyledButton>
          </CardActions>
        </Card>

        <Card
          sx={{
            width: "370px",
            textAlign: "center",
            padding: "48px",
            borderRadius: "16px",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: "80px",
              width: "80px",
              marginX: "auto",
            }}
            src="/images/ethruim.png"
            alt="bitcoin"
          />
          <CardContent>
            <Stack
              marginTop={6}
              direction="row"
              justifyContent="center"
              spacing={1}
            >
              <Typography variant="h3" color="primary.main">
                Ethereum
              </Typography>
              <Typography variant="subtitle2">ETH</Typography>
            </Stack>
            <Typography variant="body1" marginTop={2} color="grey.300">
              Blockchain technology to create and run decentralized digital
              applications.{" "}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              sx={{
                marginX: "auto",
                marginTop: "25px",
              }}
            >
              <img src="/images/arrow_right.png" alt="arrow_right" />
            </IconButton>
          </CardActions>
        </Card>

        <Card
          sx={{
            width: "370px",
            textAlign: "center",
            padding: "48px",
            borderRadius: "16px",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: "80px",
              width: "80px",
              marginX: "auto",
            }}
            src="/images/litecoin.png"
            alt="bitcoin"
          />
          <CardContent>
            <Stack
              marginTop={6}
              direction="row"
              justifyContent="center"
              spacing={1}
            >
              <Typography variant="h3" color="primary.main">
                Litecoin
              </Typography>
              <Typography variant="subtitle2">LTC</Typography>
            </Stack>
            <Typography variant="body1" marginTop={2} color="grey.300">
              Cryptocurrency that enables instant payments to anyone in the
              world.
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              sx={{
                marginX: "auto",
                marginTop: "25px",
              }}
            >
              <img src="/images/arrow_right.png" alt="arrow_right" />
            </IconButton>
          </CardActions>
        </Card>
      </Stack>
    </Container>
  );
};

export default CryptocurrenciesCards;
