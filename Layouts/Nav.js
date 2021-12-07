import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import Chart from './Chart';
import NextLink from 'next/link';
import { Collapse, ListItemButton, Menu, MenuItem } from '@mui/material';
import { Tooltip, Link } from '@mui/material';
import { green, purple } from '@mui/material/colors';
import {
  Add,
  Business,
  Dashboard,
  ExpandLess,
  ExpandMore,
  ListAlt,
  ManageAccountsOutlined,
  Pages,
  People,
  PersonAdd,
  Report,
  Settings,
} from '@mui/icons-material';
import Notification from '../components/Notification';
import UserProfile from '../components/UserProfile';
import dashboardContainer from './dashboardContainer';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function Nav(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [userCollapse, setUserCollapse] = React.useState(false);
  const [merchantCollapse, setMerchantCollapse] = React.useState(false);
  const [catagoryCollapse, setCatagoryCollapse] = React.useState(false);

  // const handleClick = (x, y) => {
  //   y(!x);
  // };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', padding: 10 }}>
      <CssBaseline />
      <AppBar position="absolute" open={open} sx={{ background: purple }}>
        <Toolbar sx={{}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>

          <Notification />
          <UserProfile />
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          <ListItem>
            <Tooltip title="Dashboard">
              <ListItemIcon>
                <NextLink href="/" passHref>
                  <Link underline="none" color="inherit" passHref="">
                    {' '}
                    <Dashboard />
                  </Link>
                </NextLink>
              </ListItemIcon>
            </Tooltip>
            <ListItemText>
              <NextLink href="/" passHref>
                <Link underline="none" color="inherit" passHref="">
                  Dashboard
                </Link>
              </NextLink>
            </ListItemText>
          </ListItem>

          <ListItemButton
            onClick={() => {
              setUserCollapse(!userCollapse);
            }}
          >
            <Tooltip titl="Users">
              <ListItemIcon>
                <People />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary="Users" />
            {userCollapse ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={userCollapse} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <NextLink href="/NewUser" passHref>
                    <Link underline="none" color="inherit">
                      <PersonAdd />{' '}
                    </Link>
                  </NextLink>
                </ListItemIcon>
                <ListItemText>
                  <NextLink href="/NewUser" passHref>
                    <Link underline="none" color="inherit">
                      New User
                    </Link>
                  </NextLink>
                </ListItemText>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <NextLink href="/ManageUsers" passHref>
                    <Link underline="none" color="inherit">
                      <ManageAccountsOutlined />
                    </Link>
                  </NextLink>
                </ListItemIcon>
                <ListItemText>
                  <NextLink href="/ManageUsers" passHref>
                    <Link underline="none" color="inherit">
                      Manage Users
                    </Link>
                  </NextLink>
                </ListItemText>
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton
            onClick={() => {
              setMerchantCollapse(!merchantCollapse);
            }}
          >
            <Tooltip title="Merchant">
              <ListItemIcon>
                <Business />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary="Merchants" />
            {merchantCollapse ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={merchantCollapse} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <NextLink href="/NewMerchant" passHref>
                    <Link underline="none" color="inherit">
                      <Add />
                    </Link>
                  </NextLink>
                </ListItemIcon>
                <ListItemText>
                  <NextLink href="/NewMerchant" passHref>
                    <Link underline="none" color="inherit">
                      New Merchant
                    </Link>
                  </NextLink>
                </ListItemText>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <NextLink href="/ManageMerchant" passHref>
                    <Link underline="none" color="inherit">
                      <Business />
                    </Link>
                  </NextLink>
                </ListItemIcon>
                <ListItemText>
                  <NextLink href="/ManageMerchant" passHref>
                    <Link underline="none" color="inherit">
                      Manage Merchants
                    </Link>
                  </NextLink>
                </ListItemText>
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton
            onClick={() => {
              setCatagoryCollapse(!catagoryCollapse);
            }}
          >
            <Tooltip title="Catagory">
              <ListItemIcon>
                <ListAlt />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary="Catagories" />
            {catagoryCollapse ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={catagoryCollapse} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Tooltip title="New Catagory">
                  <ListItemIcon>
                    <NextLink href="/NewCatagory" passHref>
                      <Link underline="none" color="inherit">
                        <Add />
                      </Link>
                    </NextLink>
                  </ListItemIcon>
                </Tooltip>
                <ListItemText>
                  <NextLink href="/NewCatagory" passHref>
                    <Link underline="none" color="inherit">
                      New Catagory
                    </Link>
                  </NextLink>
                </ListItemText>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <Tooltip title="Manage Account">
                  <ListItemIcon>
                    <NextLink href="/ManageCatagory" passHref>
                      <Link underline="none" color="inherit">
                        <ManageAccountsOutlined />
                      </Link>
                    </NextLink>
                  </ListItemIcon>
                </Tooltip>
                <ListItemText>
                  <NextLink href="/ManageCatagory" passHref>
                    <Link underline="none" color="inherit">
                      Manage Catagory
                    </Link>
                  </NextLink>
                </ListItemText>
              </ListItemButton>
            </List>
          </Collapse>

          <ListItem sx={{}}>
            <Tooltip title="Report">
              <ListItemIcon>
                <NextLink href="/Report" passHref>
                  <Link underline="none" color="inherit">
                    <Report />
                  </Link>
                </NextLink>
              </ListItemIcon>
            </Tooltip>
            <ListItemText color="secondary">
              <NextLink href="/Report" passHref>
                <Link underline="none" color="inherit">
                  Report
                </Link>
              </NextLink>
            </ListItemText>
          </ListItem>
        </List>

        <Divider />
        <List>
          <ListItem>
            <Tooltip title="Settings">
              <ListItemIcon>
                <NextLink href="/" passHref>
                  <Link underline="none" color="inherit">
                    <Settings />
                  </Link>
                </NextLink>
              </ListItemIcon>
            </Tooltip>
            <ListItemText>
              <NextLink href="/" passHref>
                <Link underline="none" color="inherit">
                  Settings
                </Link>
              </NextLink>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      {/* <DrawerHeader /> */}
      {<props.pages />}
    </Box>
  );
}
