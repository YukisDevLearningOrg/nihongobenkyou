import { Outlet } from "react-router"
import Header from "./components/Header.tsx";
import type {NavBarItem} from "./types/navigation.ts";
import Footer from "./components/Footer.tsx";


const navBarItems: NavBarItem[] = [
    {id: 1, text: "Home", url:"/"},
    {id: 2, text: "Kanji", url:"/kanji"},
    {id: 3, text: "Vocabulary", url:"/vocab"},
]

function App() {
  return (
    <>
      <header>
          <Header navBarItems={navBarItems}/>
      </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </>
  )
}

export default App
