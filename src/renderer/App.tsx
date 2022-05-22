import { NavBar } from "./components/nav-bar/nav-bar.component";
import TitleBar from "./components/title-bar/title-bar.component";
import { Routes, Route } from "react-router-dom";
import { AvailableVersionsList } from "./pages/available-versions-list.components";
import { VersionViewer } from "./pages/version-viewer.component";
import { Modal } from "./components/modal/modal.component";

export default function App() {
  
  return (
    <div className="relative w-screen h-screen overflow-hidden flex dark:bg-main-color-1 z-0">
      <Modal/>
      <NavBar/>
      <div className="flex flex-col grow">
        <TitleBar/>
        <div className="bg-main-color-2 relative rounded-tl-lg grow overflow-hidden">
          <Routes>
            <Route path={"/bs-version/:versionNumber"} element={<VersionViewer/>}/>
            <Route path="*" element={<AvailableVersionsList/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}
