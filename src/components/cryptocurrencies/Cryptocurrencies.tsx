import Box from "@mui/material/Box";
import Revenue from "./Revenue";
import Typography from "@mui/material/Typography";
import CryptocurrenciesCards from "./CryptocurrenciesCards";
const Cryptocurrencies = () => {
  return (
    <Box
      sx={{
        color: "common.white",
        marginBottom: "100px",
      }}
    >
      <Revenue />
      <Box
        sx={{
          width: { xs: "100%", md: "80%", lg: "45%", xl: "40%" },
          textAlign: "center",
          marginX: "auto",
          marginTop: "100px",
        }}
      >
        <Typography variant="h2" color="primary.main">
          Trade securely and market the high growth cryptocurrencies.
        </Typography>
      </Box>
      <CryptocurrenciesCards />
    </Box>
  );
};

export default Cryptocurrencies;
