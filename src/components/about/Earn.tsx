import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Earn = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        marginBottom: "64px",
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "80%", lg: "45%", xl: "31%" } }}>
        <Typography variant="h2" color="white" margin="0" marginBottom={3}>
          Check how much you can earn
        </Typography>
        <Typography variant="body1" fontSize="18px">
          Let's check your hash rate to see how much you will earn today,
          Exercitation veniam consequat sunt nostrud amet.
        </Typography>
      </Box>
    </Box>
  );
};

export default Earn;
