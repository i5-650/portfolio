import { Box } from "@mui/material";
import Whoami from "../components/Whoami";
import Experiences from "../components/Experiences";


export default function Home() {
  return (
    <Box>
      <h1>
        Main Page
      </h1>
      <Whoami />
      <Experiences />
    </Box>
  );
}
