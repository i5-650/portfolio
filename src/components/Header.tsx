import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ borderRadius: '16px' }}
        position="static"
      >
        <Toolbar >
          <LibraryBooksIcon sx={{ color: "white", margin: 1 }} />
          <a
            href="https://blog.i5-650.systems/"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            My blog
          </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
