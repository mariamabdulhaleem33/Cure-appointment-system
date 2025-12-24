
// import { BrowserRouter } from "react-router-dom"
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import AppRoutes from './routes/index'  

import YourAppointments from "./components/appointments-page/YourAppointments"
// import ReviewCards from "./components/create_booking/ReviewCards"
import ReviewCard from "./components/rating/ReviewCard"

// const queryClient = new QueryClient()

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    //   <BrowserRouter>
    //     <AppRoutes />  
    //   </BrowserRouter>
    //   <ReactQueryDevtools initialIsOpen={false} />
    // </QueryClientProvider>
    <>
    <YourAppointments/>
    {/* <ReviewCard/> */}
    {/* <ReviewCards/> */}
    </>
  )
}

export default App