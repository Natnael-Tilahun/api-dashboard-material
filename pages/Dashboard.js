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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Chart from './components/chart';
import { Collapse, Link, ListItemButton, Menu, MenuItem } from '@mui/material';
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Paper,
  Tooltip,
} from '@mui/material';
import { green } from '@mui/material/colors';
import {
  AccountCircle,
  Add,
  Alarm,
  Business,
  Dashboard,
  ExpandLess,
  ExpandMore,
  ListAlt,
  LockClock,
  ManageAccounts,
  ManageAccountsOutlined,
  People,
  PeopleSharp,
  Person,
  PersonAdd,
  Report,
  Settings,
  StarBorder,
} from '@mui/icons-material';

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

const handleOpenUserMenu = (event) => {
  setAnchorElUser(event.currentTarget);
};

const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [notificationAnchorEl, setNotificationAnchorEl] = React.useState(null);
  const [profileAnchorEl, setAnchorEl] = React.useState(null);

  const notificationExpand = Boolean(notificationAnchorEl);
  const profileExpand = Boolean(profileAnchorEl);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const handleNotificatioClick = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };
  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

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
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
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

          <div>
            <Tooltip title="Open Notification">
              <IconButton
                color="inherit"
                size="large"
                onClick={handleNotificatioClick}
                id="noification-button"
                aria-controls="notification-menu"
                aria-haspopup="true"
                aria-expanded={notificationExpand ? 'true' : undefined}
              >
                <Badge badgeContent={3} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Menu
              id="notification-menu"
              anchorEl={notificationAnchorEl}
              open={notificationExpand}
              onClose={handleNotificationClose}
              MenuListProps={{ 'aria-labelledby': 'notification-menu' }}
              sx={{ paddingInline: 5 }}
            >
              <MenuItem onClick={handleNotificationClose}>
                Notification one
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleNotificationClose}>
                Notification two
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleNotificationClose}>
                Notification three
              </MenuItem>
              <Divider />
              <MenuItem>See All Notifications</MenuItem>
            </Menu>
          </div>
          <div>
            <Tooltip title="Open Profile">
              <IconButton
                color="inherit"
                size="small"
                sx={{ ml: 3 }}
                onClick={handleProfileClick}
                id="avater-button"
                aria-controls="profile-menu"
                aria-haspopup="true"
                aria-expanded={profileExpand ? 'true' : undefined}
              >
                <Avatar src="https://www.google.com/search?q=profile+image&tbm=isch&source=iu&ictx=1&fir=B3G4vEo9lSBh0M%252CFvQHUVZ-cx81xM%252C_%253BifTSkpz9J2bh_M%252CbNcOzSNtObF5xM%252C_%253BH6pHpB03ZEAgeM%252Cwg0CyFWNfK7o5M%252C_%253Bc4DKZX1IkCpVhM%252Cb5C9ViMmmhpq-M%252C_%253BSsGCLunXgu6i1M%252Cb5C9ViMmmhpq-M%252C_%253BgRmIHR3owD_V0M%252CpmE0x0RqkiBF7M%252C_%253BeHQKa74ZnnpTfM%252CSixlWtBpRVa7SM%252C_%253Blcjtk8drNcGL8M%252COgWk3wP_2xVHMM%252C_%253BrMVkyDiYx1I2xM%252C5us-DyGB0J4o-M%252C_%253B6LZBULRxg_WfYM%252Cb5C9ViMmmhpq-M%252C_%253BTUPxmKQ-sparcM%252CFvQHUVZ-cx81xM%252C_%253BjAbbSdWZuoI5VM%252CbNcOzSNtObF5xM%252C_%253BS2NNOWEtx4Sh8M%252C9DRWIkHC4pkATM%252C_%253B-h20Jdis7Qx6mM%252C1OYXNPk0ZutdDM%252C_%253Bbn2FhB9xAX_09M%252Chv8ztA9-GtKh5M%252C_%253BC7pA_LYt9qMKyM%252CMG0JGB0B8kPXNM%252C_%253BWgJP1HLvsHDWSM%252Cb5C9ViMmmhpq-M%252C_&vet=1&usg=AI4_-kQwVSZxntM5Wuu8fKuRJu2vGZ_LSA&sa=X&ved=2ahUKEwjf6tz8oM_0AhUHy4UKHbXsD0YQ9QF6BAgdEAE#imgrc=ifTSkpz9J2bh_M" />
              </IconButton>
            </Tooltip>
            <Menu
              id="profile-menu"
              anchorEl={profileAnchorEl}
              open={profileExpand}
              onClose={handleProfileClose}
              MenuListProps={{ 'aria-labelledby': 'profile-menu' }}
            >
              <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
              <MenuItem onClick={handleProfileClose}>My Account</MenuItem>
              <MenuItem onClick={handleProfileClose}>Logout</MenuItem>
            </Menu>
          </div>
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
                <Link href="/" underline="none" color="inherit">
                  <Dashboard />
                </Link>
              </ListItemIcon>
            </Tooltip>
            <ListItemText>
              <Link href="/" underline="none" color="inherit">
                <a>Dashboard</a>
              </Link>
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
                  <Link href="/" underline="none" color="inherit">
                    <PersonAdd />{' '}
                  </Link>
                </ListItemIcon>
                <ListItemText>
                  <Link href="/" underline="none" color="inherit">
                    <a>New User</a>
                  </Link>
                </ListItemText>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Link href="/" underline="none" color="inherit">
                    <ManageAccountsOutlined />
                  </Link>
                </ListItemIcon>
                <ListItemText>
                  <Link href="/" underline="none" color="inherit">
                    <a>Manage Users</a>
                  </Link>
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
                  <Link href="/" underline="none" color="inherit">
                    <Add />
                  </Link>
                </ListItemIcon>
                <ListItemText>
                  <Link href="/" underline="none" color="inherit">
                    <a>New Merchant</a>
                  </Link>
                </ListItemText>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Link href="/" underline="none" color="inherit">
                    <Business />
                  </Link>
                </ListItemIcon>
                <ListItemText>
                  <Link href="/" underline="none" color="inherit">
                    <a>Manage Merchants</a>
                  </Link>
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
                    <Link href="/" underline="none" color="inherit">
                      <Add />
                    </Link>
                  </ListItemIcon>
                </Tooltip>
                <ListItemText>
                  <Link href="/" underline="none" color="inherit">
                    <a>New Catagory</a>
                  </Link>
                </ListItemText>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <Tooltip title="Manage Account">
                  <ListItemIcon>
                    <Link href="/" underline="none" color="inherit">
                      <ManageAccountsOutlined />
                    </Link>
                  </ListItemIcon>
                </Tooltip>
                <ListItemText>
                  <Link href="/" underline="none" color="inherit">
                    <a>Manage Catagory</a>
                  </Link>
                </ListItemText>
              </ListItemButton>
            </List>
          </Collapse>

          <ListItem sx={{}}>
            <Tooltip title="Report">
              <ListItemIcon>
                <Link href="/" underline="none" color="inherit">
                  <Report />
                </Link>
              </ListItemIcon>
            </Tooltip>
            <ListItemText color="secondary">
              <Link href="/" underline="none" color="inherit">
                <a>Report</a>
              </Link>
            </ListItemText>
          </ListItem>
        </List>

        <Divider />
        <List>
          <ListItem>
            <Tooltip title="Settings">
              <ListItemIcon>
                <Link href="/" underline="none" color="inherit">
                  <Settings />
                </Link>
              </ListItemIcon>
            </Tooltip>
            <ListItemText>
              <Link href="/" underline="none" color="inherit">
                <a>Settings</a>
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        lg={{ flexGrow: 1, px: 30, py: 10 }}
        sx={{ px: 25, py: 10, flexGrow: 1 }}
      >
        <DrawerHeader />
        <Grid container spacing={2} columnSpacing={0} sx={{}}>
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ width: 400, boxShadow: 8 }}>
              <CardContent>
                {' '}
                <Typography variant="h4">
                  Services{' '}
                  <Badge
                    badgeContent="23"
                    color="info"
                    sx={{ paddingInline: 1 }}
                  ></Badge>
                </Typography>
                <Typography>We have 23 service providers</Typography>
              </CardContent>
              <CardActions>
                <Button>View</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ width: 400, boxShadow: 8 }}>
              <CardContent>
                {' '}
                <Typography variant="h4">
                  Utilities{' '}
                  <Badge
                    badgeContent="40"
                    color="info"
                    sx={{ paddingInline: 1 }}
                  ></Badge>
                </Typography>
                <Typography>We have 40 utilites</Typography>
              </CardContent>
              <CardActions>
                <Button>View</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ width: 400, boxShadow: 8 }}>
              <CardContent>
                {' '}
                <Typography variant="h4">
                  Fintechs{' '}
                  <Badge
                    badgeContent="20"
                    color="info"
                    sx={{ paddingInline: 1 }}
                  ></Badge>
                </Typography>
                <Typography>We have 20 fintechs</Typography>
              </CardContent>
              <CardActions>
                <Button>View</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid container columnSpacing={3} sx={{ marginTop: 10, boxShadow: 8 }}>
          <Grid item xs={12} md={8} lg={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 350,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
