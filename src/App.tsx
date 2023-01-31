import { ApolloProvider } from "@apollo/client";
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Services } from "./components/Services";
import { Work } from "./components/Work";

import { Toaster } from "react-hot-toast";
import { client } from "./lib/apollo";

export function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <ApolloProvider client={client}>
        <Toaster />
        <Header />
        <Banner />
        <Nav />
        <About />
        <Services />
        <Work />
        <Contact />
      </ApolloProvider>
    </div>
  )
}
