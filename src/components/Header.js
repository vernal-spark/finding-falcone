import { Box, Typography } from "@mui/material";

import logo from "../assets/falcone.png";

const Header = () => {
  return (
    <Box>
      <Typography className="heading" variant="h2">
        Finding Falc
        <img className="image" src={logo} alt="falcone" />
        ne
      </Typography>
    </Box>
  );
};
export default Header;