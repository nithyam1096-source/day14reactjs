// import useCounter from "./Hooks/useCounter";
// import useToggle from "./Hooks/useToggle";
// import useLocalStorage from "./Hooks/useLocalStorage";
// import useFetch from "./Hooks/useFetch";
// import useInput from "./Hooks/useInput";
// import useDebounce from "./Hooks/useDebounce";
// import usePrevious from "./Hooks/usePrevious";
// import useHover from "./Hooks/useHover";
// import useTitle from "./Hooks/useTitle";
// import useTimeout from "./Hooks/useTimeout";
// import useClipboard from "./Hooks/useClipboard";
// import useMediaQuery from "./Hooks/useMediaQuery";
// import useOnlineStatus from "./Hooks/useOnlineStatus";

// function App() {
//   const { count, increment, decrement, reset } = useCounter();
//   const [isOpen, toggle] = useToggle();
//   const [theme, setTheme] = useLocalStorage("theme", "dark");
//   const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/1");
//   const name = useInput("");
//   const debouncedName = useDebounce(name.value, 500);
//   const prevName = usePrevious(name.value);
//   const [hovered, ref] = useHover();
//   const { copy } = useClipboard();
//   const isMobile = useMediaQuery("(max-width:768px)");
//   const online = useOnlineStatus();

//   useTitle("Custom Hooks App");
//   useTimeout(() => console.log("Timeout triggered"), 3000);

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Custom Hooks Demo</h1>

//       <p>Counter: {count}</p>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//       <button onClick={reset}>Reset</button>

//       <hr />

//       <button onClick={toggle}>{isOpen ? "Close" : "Open"}</button>

//       <hr />

//       <p>Theme: {theme}</p>
//       <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
//         Toggle Theme
//       </button>

//       <hr />

//       <input placeholder="Type name" {...name} />
//       <p>Current: {name.value}</p>
//       <p>Previous: {prevName}</p>
//       <p>Debounced: {debouncedName}</p>

//       <hr />

//       <div ref={ref} style={{ padding: 20, background: hovered ? "lightgreen" : "#ccc" }}>
//         Hover Me
//       </div>

//       <hr />

//       <button onClick={() => copy("Copied!")}>Copy Text</button>

//       <hr />

//       <p>{isMobile ? "Mobile View" : "Desktop View"}</p>
//       <p>Status: {online ? "Online" : "Offline"}</p>

//       <hr />

//       {loading ? "Loading..." : data?.title}
//     </div>
//   );
// }

// export default App;
// import { Intro } from "./Components/Intro";
// import { BasicInput } from "./Components/BasicInput";
// import { MultipleInputs } from "./Components/MultipleInputs";
// import { TextareaInput } from "./Components/TextareaInput";
// import { SelectInput } from "./Components/SelectInput";
// import { CheckboxInput } from "./Components/CheckboxInput";
// import { RadioGroup } from "./Components/RadioGroup";
// import { SubmitForm } from "./Components/SubmitForm";
// import { ValidationForm } from "./Components/ValidationForm";
// import { DynamicFields } from "./Components/DynamicFields";
// import { ResetForm } from "./Components/ResetForm";
// import { FocusForm } from "./Components/FocusForm";
// import { LoginForm } from "./Components/LoginForm";
// import { TodoList } from "./Components/TodoList";
// import { ContactForm } from "./Components/ContactForm";
// import { SubscriptionForm } from "./Components/SubscriptionForm";
// import { ThemeProvider } from "./Blog/ThemeContext";
// import { BlogApp } from "./Blog/BlogApp";
// import { TodoApp } from "./Todo/TodoApp";
// import { WeatherApp } from "./Weather/WeatherApp";
// import { UserApp } from "./Users/UserApp";
// import { ProductApp } from "./ecommerce/ProductApp";
// export default function App() {
//   return (
//     <>
//     <h1>day14 tasks</h1>
//       <Intro />
//       <BasicInput />
//        <MultipleInputs />
//       <TextareaInput />
//       <SelectInput />
//       <CheckboxInput />
//       <RadioGroup />
//       <SubmitForm />
//       <ValidationForm />
//       <DynamicFields />
//       <ResetForm />
//       <FocusForm />
//       <h1>day14 Miniprojects</h1>
//         <LoginForm />
//        <TodoList />
//        <ContactForm />
//       <SubscriptionForm />
//       <h1>day14 Main projects</h1>
//        <ThemeProvider>
//       <BlogApp />
//       <hr />
//       <TodoApp />
//       <hr />
//       <WeatherApp />
//       <hr />
//       <UserApp />
//       <hr />
//       <ProductApp />
//     </ThemeProvider>
//          </>
//   );
// }
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
 
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Profile from "./pages/Profile";
// import Settings from "./pages/Settings";
// import NotFound from "./pages/NotFound";
 
// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
 
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
 
//         {/* Nested Route */}
//         <Route path="/profile" element={<Profile />}>
//           <Route path="settings" element={<Settings />} />
//         </Route>
 
//         {/* Redirect / 404 */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };
 
// export default App;
import { Routes, Route, NavLink } from "react-router-dom";

/* Portfolio */
import PortfolioHome from "./pages/PortfolioHome";
import PortfolioAbout from "./pages/PortfolioAbout";
import PortfolioContact from "./pages/PortfolioContact";

/* Navigation App */
import NavHome from "./pages/NavHome";
import Services from "./pages/Services";
import NavContact from "./pages/NavContact";

/* Blog */
import BlogHome from "./pages/BlogHome";
import Posts from "./pages/Posts";
import BlogAbout from "./pages/BlogAbout";

/* Store */
import StoreHome from "./pages/StoreHome";
import Products from "./pages/Products";
import StoreContact from "./pages/StoreContact";

function App() {
  return (
    <>
      {/* MAIN NAVBAR */}
      <nav style={{ marginBottom: "20px" }}>
        <NavLink to="/" end>Portfolio</NavLink> |{" "}
        <NavLink to="/nav">Navigation</NavLink> |{" "}
        <NavLink to="/blog">Blog</NavLink> |{" "}
        <NavLink to="/store">Store</NavLink>
      </nav>

      <Routes>
        {/* PORTFOLIO */}
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/portfolio/about" element={<PortfolioAbout />} />
        <Route path="/portfolio/contact" element={<PortfolioContact />} />

        {/* NAVIGATION APP */}
        <Route path="/nav" element={<NavHome />} />
        <Route path="/nav/services" element={<Services />} />
        <Route path="/nav/contact" element={<NavContact />} />

        {/* BLOG */}
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/blog/posts" element={<Posts />} />
        <Route path="/blog/about" element={<BlogAbout />} />

        {/* STORE */}
        <Route path="/store" element={<StoreHome />} />
        <Route path="/store/products" element={<Products />} />
        <Route path="/store/contact" element={<StoreContact />} />
      </Routes>
    </>
  );
}

export default App;