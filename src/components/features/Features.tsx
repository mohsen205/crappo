import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DetailedStatistics from "./DetailedStatistics";
import GrowthProfit from "./GrowthProfit";
import InvestSmart from "./InvestSmart";
const Features = () => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        paddingY: "100px",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "80%", lg: "45%", xl: "40%" },
          textAlign: "center",
          marginX: "auto",
          marginBottom: "100px",
        }}
      >
        <Typography variant="h2" color="white">
          Market sentiments, portfolio, and run the infrastructure of your
          choice
        </Typography>
      </Box>
      <InvestSmart />
      <DetailedStatistics />
      <GrowthProfit />
    </Box>
  );
};

export default Features;
