import Header from "./components/Header"
import Hero from "./components/Hero"
import FeaturedPosts from "./components/FeaturedPosts"
import Footer from "./components/Footer"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <FeaturedPosts />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default App