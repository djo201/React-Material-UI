import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import theme from './ui/Theme';
import Header from './ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div>Home</div>}></Route>
          <Route path="/services" element={<div>Services</div>}></Route>
          <Route path="/customsoftware" element={<div>Custom Software</div>}></Route>
          <Route path="/mobileapps" element={<div>Mobile Apps</div>}></Route>
          <Route path="/websites" element={<div>Websites</div>}></Route>
          <Route path="/revolution" element={<div>The Revolution</div>}></Route>
          <Route path="/about" element={<div>About Us</div>}></Route>
          <Route path="/contact" element={<div>Contact Us</div>}></Route>
          <Route path="/estimate" element={<div>Estimate</div>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
