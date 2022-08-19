import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardBlogLayout from "../layout/cardBlogLayout";
import CardBlogItemLayout from "../layout/cardBlogItemLayout";
export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardBlogLayout />} />
        <Route path="/blogs" element={<CardBlogItemLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
