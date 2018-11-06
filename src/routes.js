import Videos from "./containers/Videos";
import HomePage from "./containers/HomePage";
import Preview from "./containers/Preview";
import ReadingBooster from "./containers/ReadingBooster";
export default [
  {
    label: "Home Page",
    component: HomePage,
    path: "/home-page"
  },
  {
    label: "Preview",
    component: Preview,
    path: "/video-preview"
  },
  {
    label: "Videos",
    component: Videos,
    path: "/videos"
  },
  {
    label: "Reading Booster",
    component: ReadingBooster,
    path: "/reading-booster"
  },
];
