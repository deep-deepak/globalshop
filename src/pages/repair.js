import React from 'react'
import About from '../components/repair/About'
import Layout from "@/layout/Layout";
import Seo from "@/common/Seo";
import PageHeading from "@/common/PageHeading";
import RollerShutterCTA from "@/common/RollerShutterCTA";
import Service from '../components/repair/Service';
import Gallery from '../common/CommonGallery';

export default function Repair() {
  return (
    <Layout>
        <Seo title="repair service" description="repair service"/>
        <PageHeading title="roller shutters repair service" image=""/>
      <About/>
      <RollerShutterCTA/>
      <Service/>
      <Gallery/>
    </Layout>
  )
}
