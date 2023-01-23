
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import AppBar from "components/AppBar/AppBar";

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet/>
      </Suspense>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  )
}