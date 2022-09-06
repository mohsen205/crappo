import Box from "@mui/material/Box";
import Content from "./Content";
import Earn from "./Earn";
import Hashrate from "./Hashrate";
import Numbers from "./Numbers";

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "common.white",
        paddingTop: "167px",
      }}
    >
      <Numbers />
      <Content />
      <Earn />
      <Hashrate />
    </Box>
  );
};

export default About;
