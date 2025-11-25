import {BrowserRouter,Routes,Route,useParams} from 'react-router-dom';

function Home(){
    return(
        <>
            <h1>This is Home Page</h1>
        </>
    )
}

function About(){
    return(
        <>
            <h1>This is About Page</h1>
        </>
    )
}

function Contact(){
    return(
        <h1>This is Contact Page</h1>
    )
}

function Blog(){
    const { id,name } = useParams();

    return(
        <>
            <h1>This is Blog Page</h1>
            <h1>ID : {id}</h1>
            <h1>Name : {name}</h1>
        </>
    )
}

function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/blog/:id/:name" element={<Blog />}/>
                </Routes>
            </BrowserRouter>           
        </>
    )
}

export default App;
