import MainLayout from "./components/layout/MainLayout";
// import MainLayout from "./components/layout/MainLayout"
import AppRoutes from "./routes";

const App = () => {
  return (
    <div className="min-h-screen px-8 py-4 bg-white">
      {/* <MainLayout /> */}
      <AppRoutes />
    </div>
  );
};

export default App;
