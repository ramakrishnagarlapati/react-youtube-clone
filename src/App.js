import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  Navbar,
} from "./components";
function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000", color: "white" }}>
        <Navbar />
        <Routes>
          <Route path="/react-youtube-clone" element={<Feed />} />
          <Route
            path="/react-youtube-clone/video/:id"
            element={<VideoDetail />}
          />
          <Route
            path="/react-youtube-clone/channel/:id"
            element={<ChannelDetail />}
          />
          <Route
            path="/react-youtube-clone/search/:searchTerm"
            element={<SearchFeed />}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
