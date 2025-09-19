import { Suspense } from "react";
import Profile from "../constants/profileSettings/Profile";

const anotherRoutes = [
  {
    path: "/profile",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Profile />
      </Suspense>
    ),
  },
];

export default anotherRoutes;
