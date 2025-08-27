import { RouterProvider } from "react-router-dom";
import appRouter from "./routes/AppRouter";
import { store } from "./redux/features/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
