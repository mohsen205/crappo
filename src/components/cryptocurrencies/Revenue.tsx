import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Revenue = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "80%", lg: "45%", xl: "31%" },
          padding: "48px",
          backgroundColor: "white",
          borderRadius: "0px 0px 16px 16px",
        }}
      >
        <Typography variant="subtitle2" color="accent.main">
          ESTIMATED 24 HOUR REVENUE:
        </Typography>
        <Stack direction="row" spacing={1}>
          <Typography variant="h3" color="common.black">
            0.055 130 59 ETH
          </Typography>
          <Typography variant="h3" color="accent.main">
            ($1275)
          </Typography>
        </Stack>
        <Typography variant="body1" color="grey.300">
          Revenue will change based on mining difficulty and Ethereum price.
        </Typography>
      </Box>
    </Box>
  );
};

export default Revenue;
