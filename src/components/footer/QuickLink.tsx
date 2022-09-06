import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
const QuickLink = () => {
  return (
    <Box>
      <Stack>
        <Typography
          variant="subtitle2"
          color="white"
          sx={{ marginBottom: "24px" }}
        >
          Quick Link
        </Typography>
        <Typography variant="body1" color="grey.600">
          Home
        </Typography>
        <Typography variant="body1" color="grey.600">
          Products
        </Typography>
        <Typography variant="body1" color="grey.600">
          About
        </Typography>
        <Typography variant="body1" color="grey.600">
          Features
        </Typography>
        <Typography variant="body1" color="grey.600">
          Contact
        </Typography>
      </Stack>
    </Box>
  );
};

export default QuickLink;
