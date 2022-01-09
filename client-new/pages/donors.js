import React from 'react';
import Layout from "../components/UI/layout";
import DonorsSection from "../components/UI/Requests/Donors/Donors";
const Donors = () => {
    return (
        <Layout title={"Public Donors | BloodBank"} description={"Our Public donors, all at the same place"}>
            <DonorsSection/>
        </Layout>
    );
};

export default Donors;