import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;