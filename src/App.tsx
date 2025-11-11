import NavBar from "./components/ui/NavBar"
import Footer from "./components/ui/Footer"
import AppRouter from "./routes/AppRouter"
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
       <AppRouter />
      </main>
      <Footer />
    </div>
  )
}

export default App
