import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Resources = () => {
  return (
    <Box>
      <Stack>
        <Typography
          variant="subtitle2"
          color="white"
          sx={{ marginBottom: "24px" }}
        >
          Resources
        </Typography>
        <Typography variant="body1" color="grey.600">
          Download Whitepapper
        </Typography>
        <Typography variant="body1" color="grey.600">
          Smart Token
        </Typography>
        <Typography variant="body1" color="grey.600">
          Blockchain Explorer
        </Typography>
        <Typography variant="body1" color="grey.600">
          Crypto API
        </Typography>
        <Typography variant="body1" color="grey.600">
          Interest
        </Typography>
      </Stack>
    </Box>
  );
};

export default Resources;
