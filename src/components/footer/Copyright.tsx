import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
const Copyright = () => {
  return (
    <Container>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body1" color="white">
          ©2021 CRAPPO. All rights reserved
        </Typography>
        <Stack direction="row" spacing={2}>
          <a href="#facebook">
            <FaFacebookF className="icons" />
          </a>
          <a href="#instagram">
            <AiOutlineInstagram className="icons" />
          </a>
          <a href="#youtube">
            <AiFillYoutube className="icons" />
          </a>
          <a href="#twitter">
            <AiOutlineTwitter className="icons" />
          </a>
          <a href="#linkedin">
            <AiFillLinkedin className="icons" />
          </a>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Copyright;
