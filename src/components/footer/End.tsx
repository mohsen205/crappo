import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const End = () => {
  return (
    <Box>
      <Typography
        variant="subtitle1"
        color="white"
        sx={{
          width: "355px",
        }}
      >
        We accept following payment systems
      </Typography>
      <Stack direction="row" spacing={3}>
        <img src="images/visa_card.png" alt="Visa card" />
        <img src="images/mastercard_card.png" alt="Mastercard card" />
        <img src="images/bitcoin_card.png" alt="Bitcoin card" />
      </Stack>
    </Box>
  );
};

export default End;
