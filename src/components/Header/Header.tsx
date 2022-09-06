import "./styles.css";
import Box from "@mui/material/Box";
import HeaderContent from "./HeaderContent";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <Box
      sx={{ backgroundColor: "primary.main", color: "common.white" }}
      className="header"
    >
      <Navbar />
      <HeaderContent />
    </Box>
  );
};

export default Header;
