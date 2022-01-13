import Hero from "../components/UI/Hero/Hero";
import WhatWeDo from "../components/UI/What we do/WhatWeDo";
import Quotes from "../components/UI/quotes/Quotes";
import WorksDone from "../components/UI/WorksDone/WorksDone";
import Layout from "../components/UI/layout";
import React from "react";

export default function Home() {
    return (
        <Layout title={'Blood Bank- Donate blood and save people'} description={"You don\'t have to be a doctor to save lives!"}>
            <Hero/>
            <WhatWeDo/>
            <Quotes/>
            <WorksDone/>
        </Layout>
    )
}
