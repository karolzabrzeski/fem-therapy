import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import OfferPage from "./pages/OfferPage.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import MetamorphosesPage from "./pages/MetamorphosesPage.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import LegalPage from "./pages/LegalPage.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="o-mnie" element={<AboutPage />} />
        <Route path="oferta" element={<OfferPage />} />
        <Route path="oferta/:slug" element={<ServiceDetail />} />
        <Route path="galeria" element={<MetamorphosesPage />} />
        <Route path="cennik" element={<PricingPage />} />
        <Route path="kontakt" element={<ContactPage />} />
        <Route path="regulamin" element={<LegalPage kind="regulamin" />} />
        <Route
          path="polityka-prywatnosci"
          element={<LegalPage kind="polityka" />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
