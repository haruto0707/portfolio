import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexPage } from "./pages/index";
import { IntroPage } from "./pages/introduction";
import { ProductPage } from "./pages/products";
import { BlogPage } from "./pages/blog";
import { SocialPage } from "./pages/social";
import { ContactPage } from "./pages/contact";

export const App = () => {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/introduction" element={<IntroPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};