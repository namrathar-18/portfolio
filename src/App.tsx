import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useLenis } from "@/hooks/use-lenis";

const App = () => {
  useLenis();

  return (
    <>
      <Toaster theme="dark" position="bottom-right" />
      <BrowserRouter
        basename={import.meta.env.BASE_URL.replace(/\/$/, "")}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
