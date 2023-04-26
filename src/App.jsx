import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Section from "./components/Section/Section";

function App() {

  return (<>
      <Header />
      <main>
        <Hero />
        <Section title="Open your new possibilities" subtitle="We recommend that you choose one of the featured courses. If you
            don't find anything for you here, search for courses in detail on
            the courses page.">
              Djeca
            </Section>
      </main>
    </>
  ) 
  
}

export default App;
