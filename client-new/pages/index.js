import Hero from "../components/UI/Hero/Hero";
import WhatWeDo from "../components/UI/What we do/WhatWeDo";
import Quotes from "../components/UI/quotes/Quotes";
import WorksDone from "../components/UI/WorksDone/WorksDone";
import Layout from "../components/UI/layout";

export default function Home() {
    return (
        <Layout>
            <Hero/>
            <WhatWeDo/>
            <Quotes/>
            <WorksDone/>
        </Layout>
    )
}
