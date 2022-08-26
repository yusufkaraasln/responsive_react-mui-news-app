import { FeedOutlined, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase, 
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Feed from "./Feed";


const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: " 0 0.5rem",
  borderRadius: theme.shape.borderRadius,
  width: "35%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: theme.spacing(2),
  alignItems: "center",

  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const AvatarIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",

  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

function Navbar() {
    const [open, setOpen] = React.useState(false);


  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          Medyabar
        </Typography>
        <FeedOutlined
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />
        <Search>
          <InputBase placeholder="Search" />
        </Search>
        <Icons>
          <Badge badgeContent={3} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={3} color="error">
            <Notifications />
          </Badge>
          <Avatar
          onClick={() => setOpen(true)}
            sx={{
              height: 30,
              width: 30,
            }}
            src="https://yt3.ggpht.com/yti/AJo0G0ndf-o7Q03FoWBOo8UnNLZzVeuHGsRDjWKv0IQqjQ=s88-c-k-c0x00ffffff-no-rj-mo"
          />
        </Icons>
        <AvatarIcon>
          <Avatar
          onClick={() => setOpen(true)}

            sx={{
              height: 30,
              width: 30,
            }}
            src="https://yt3.ggpht.com/yti/AJo0G0ndf-o7Q03FoWBOo8UnNLZzVeuHGsRDjWKv0IQqjQ=s88-c-k-c0x00ffffff-no-rj-mo"
          />
          <Typography variant="span">Yusuf</Typography>
        </AvatarIcon>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-label="demo-positioned-menu"
        open={open}
        onClose={(e) => setOpen(false)}

        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
