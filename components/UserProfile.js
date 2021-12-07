import { Avatar, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import React from 'react';

export default function UserProfile() {
  const [profileAnchorEl, setAnchorEl] = React.useState(null);
  const profileExpand = Boolean(profileAnchorEl);
  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  return (
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
  );
}
