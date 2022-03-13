import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    width={42.931}
    height={42.931}
  >
    <defs>
      <linearGradient
        id="a"
        x1={34.879}
        y1={4.546}
        x2={9.796}
        y2={41.096}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f6921e" />
        <stop offset={0.293} stopColor="#f4801f" />
        <stop offset={0.881} stopColor="#ef5022" />
        <stop offset={1} stopColor="#ee4623" />
      </linearGradient>
    </defs>
    <title>{"logo_icon"}</title>
    <path
      d="M21.09 15.575a1.201 1.201 0 0 0 0 1.701l.304.305 6.092 6.092.305.304a6.595 6.595 0 1 1-9.328 9.327l-8.368-8.368L7.1 21.939l6.807-.817 8.368 8.369a1.202 1.202 0 1 0 1.7-1.701l-.302-.304-6.092-6.091-.304-.305a6.595 6.595 0 1 1 9.325-9.328l8.37 8.37L43.2 28.36a21.473 21.473 0 1 0-2.312 5.313L22.791 15.575a1.205 1.205 0 0 0-1.701 0Zm-12.21.52 2.995 2.994-6.807.818Z"
      transform="translate(-1.069 -1.07)"
      style={{
        fill: "url(#a)",
      }}
    />
  </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}

