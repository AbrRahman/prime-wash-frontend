import { RouterProvider } from "react-router-dom";
import appRouter from "./routes/AppRouter";
import { persistor, store } from "./redux/features/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={appRouter} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
