import React from 'react';
import Layout from "../components/UI/layout";
import DonateSection from "../components/UI/Donate/Donate";
const Donate = () => {
    return (
        <Layout title={"Donation | BloodBank"} description={"Help BloodBank to go even bigger"}>
            <DonateSection/>
        </Layout>
    );
};

export default Donate;