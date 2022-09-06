import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
// import styled
const HeaderContent = () => {
  return (
    <Container>
      <Stack direction="row" justifyContent="space-between">
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
              width: "365px",
              height: "40px",
              left: "120px",
              top: "243px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "32px",
            }}
          >
            <Box>xx</Box>
            xx
          </Stack>
        </Box>
        <Box>
          <img src="images/Illustration.png" alt="Illustration" />
        </Box>
      </Stack>
    </Container>
  );
};

export default HeaderContent;
