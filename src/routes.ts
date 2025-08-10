import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { Home, About } from '@/pages'

const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        {
          path: "/", // ✅ відносний шлях
          Component: Home
        },
        {
          path: "about", // ✅ відносний шлях
          Component: About
        },
      ]
    },
  ]);

export default router