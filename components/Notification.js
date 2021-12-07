import {
  Badge,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Notification() {
  const [notificationAnchorEl, setNotificationAnchorEl] = React.useState(null);
  const notificationExpand = Boolean(notificationAnchorEl);

  const handleNotificatioClick = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };
  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

  return (
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
          <Typography variant="">5 New Notifications</Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleNotificationClose}>
          <Typography variant="h5">Notification one</Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleNotificationClose}>
          <Typography variant="h5">Notification two</Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleNotificationClose}>
          <Typography variant="h5"> Notification three</Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Typography variant="">See All Notifications</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
