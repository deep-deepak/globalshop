import React from 'react'
import ServicePage from '../components/ServiceGallery'
import Layout from '@/layout/Layout'
// import PageHeading from '@/common/PageHeading

export default function Service() {
    return (
        <Layout>
            {/* <PageHeading title={"Services"} image={"/images/gall8.jpg"} /> */}
            <ServicePage />
        </Layout>
    )
}
