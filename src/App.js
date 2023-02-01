import { ProSidebarProvider } from 'react-pro-sidebar';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import SidebarComponents from "./scenes/global/Sidebar";
import Dashbord from "./scenes/dashbord";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ProSidebarProvider>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
       <CssBaseline />
        <div className="app">
        <SidebarComponents  isSidebar={isSidebar}  />
        <main className="content">
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashbord/>}/>
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts/>}/>
              <Route path='/invoices' element={<Invoices/>}/>
              <Route path='/form' element={<Form/>}/>
              <Route path='/calendar' element={<Calendar/>}/>
              <Route path='/faq' element={<FAQ/>}/>
              <Route path='/bar' element={<Bar/>}/>
              <Route path='/pie' element={<Pie/>}/>
              <Route path='/line' element={<Line/>}/>
              <Route path='/geography' element={<Geography/>}/>
              

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </ProSidebarProvider>
    
  );
}

export default App;
