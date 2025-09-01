import { RouterProvider } from "react-router-dom";
import appRouter from "./routes/AppRouter";
import { persistor, store } from "./redux/features/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={appRouter} />
        </PersistGate>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#0891b2",
              color: "#f0f9ff",
              fontSize: "16px",
            },
          }}
        />
      </Provider>
    </>
  );
}

export default App;
