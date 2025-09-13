import { Suspense } from "react";
import About from "../pages/about/About";

const anotherRoutes = [
  {
    path: "/about",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <About />
      </Suspense>
    ),
  },
];

export default anotherRoutes;
