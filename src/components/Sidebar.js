import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import logo from "../assets/logo.png";
import { Button, IconButton } from "@mui/material";

import MoreIcon from "@mui/icons-material/MoreVert";
import dashboardIcon from "../assets/element-4.png";
import diagramIcon from "../assets/diagram.png";
import avatarIcon from "../assets/Vector.png";
import folderCloud from "../assets/folder-cloud.png";
import peopleIcon from "../assets/people.png";
import profile2 from "../assets/profile-2user.png";
import userAdd from "../assets/user-add.png";
import vector from "../assets/Vector.png";
import vector2 from "../assets/Vector2.png";
import vector5 from "../assets/vector-5.png";
import userSearch from "../assets/user-search.png";
import search from "../assets/Search.png";
import Content from "./Content/Content";

const drawerWidth = 280;



export default function ClippedDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ backgroundColor: "#fff", color: "#4A74EA" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          ></IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <img src={logo} alt="" />
          </Typography>
          
          <Box sx={{marginLeft:"50px", marginTop:"20px", width:"700px"}} >
          <div class="input-group mb-3">
          <button type="button" class="btn bg-light">
            <img src={search} alt="" />
          </button>
            <input type="text" class="form-control bg-light border-0" placeholder="Search your favorite player " aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button style={{backgroundColor:"#4A74EA",color:"#fff"}} class="btn" type="button" id="button-addon2">Search</button>
          </div>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button sx={{marginRight:"18px", backgroundColor:"#4A74EA"}} variant="contained">Login</Button>
          <Button sx={{color:"#4A74EA"}} variant="outlined">Sign Up</Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" aria-label="show more" color="inherit">
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", padding: "20px" }}>
          
          <List
            sx={{
              backgroundColor: "#4A74EA",
              color: "#fff",
              borderRadius: "10px",
            }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={dashboardIcon} alt="" />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </List>
          <List
            sx={{color:"#848FAC", marginTop:"10px", fontWeight:"700"}}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={avatarIcon} alt="" />
                </ListItemIcon>
                <ListItemText primary="Name" />
              </ListItemButton>
            </ListItem>
          </List>
          <List
            sx={{color:"#848FAC", marginTop:"10px", fontWeight:"700"}}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={diagramIcon} alt="" />
                </ListItemIcon>
                <ListItemText primary="Metric" />
              </ListItemButton>
            </ListItem>
          </List>
          <List
            sx={{color:"#848FAC", marginTop:"10px", fontWeight:"700"}}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={profile2} alt="" />
                </ListItemIcon>
                <ListItemText primary="Create Team" />
              </ListItemButton>
            </ListItem>
          </List>
          <List
            sx={{color:"#848FAC", marginTop:"10px", fontWeight:"700"}}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={vector5} alt="" />
                </ListItemIcon>
                <ListItemText primary="Player Market" />
              </ListItemButton>
            </ListItem>
          </List>
          <List
            sx={{color:"#848FAC", marginTop:"10px", fontWeight:"700"}}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={userSearch} alt="" />
                </ListItemIcon>
                <ListItemText primary="Player Comparision" />
              </ListItemButton>
            </ListItem>
          </List>
          <List
            sx={{color:"#848FAC", marginTop:"10px", fontWeight:"700"}}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={userAdd} alt="" />
                </ListItemIcon>
                <ListItemText primary="Similar Player" />
              </ListItemButton>
            </ListItem>
          </List>
          <List
            sx={{color:"#848FAC", marginTop:"10px", fontWeight:"700"}}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={folderCloud} alt="" />
                </ListItemIcon>
                <ListItemText primary="GK Search" />
              </ListItemButton>
            </ListItem>
          </List>
          <List
            sx={{color:"#848FAC", marginTop:"10px", fontWeight:"700"}}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={peopleIcon} alt="" />
                </ListItemIcon>
                <ListItemText primary="Team Plot" />
              </ListItemButton>
            </ListItem>
          </List>
          <List
            sx={{color:"#848FAC", marginTop:"10px", fontWeight:"700"}}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={vector2} alt="" />
                </ListItemIcon>
                <ListItemText primary="Coach" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, marginTop:"25px"}}>
        <Toolbar />
        <Content/>
      </Box>
    </Box>
  );
}
