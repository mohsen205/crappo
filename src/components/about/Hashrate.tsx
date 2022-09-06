import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select"; // { SelectChangeEvent }
import { StyledButton } from "../utils/Button";

const Hashrate = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "80%", lg: "45%", xl: "31%" },
          backgroundColor: "#FBFCFE",
          borderRadius: "16px 16px 0px 0px",
          padding: "62px 48px 48px 48px",
        }}
      >
        <Stack direction="row" justifyContent="space-between" spacing={6}>
          <TextField
            id="hash-rate"
            label="Enter your hash rate"
            variant="standard"
            sx={{
              width: "403px",
            }}
          />
          <FormControl
            variant="standard"
            sx={{
              width: "200px",
            }}
          >
            <InputLabel id="yh-s-label">TH/s</InputLabel>
            <Select labelId="th-s-id" id="th-s" label="th-s">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <StyledButton
            variant="contained"
            sx={{
              padding: "16px 16px 16px 24px",
              gap: "24px",
              width: "175px",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: "#FFFFFF",
                TextAlign: "center",
              }}
            >
              Calculate
            </Typography>
          </StyledButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hashrate;
