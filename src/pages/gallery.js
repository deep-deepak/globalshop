import PageHeading from '@/common/PageHeading'
import Seo from '@/common/Seo'
import GallerySection  from '@/common/CommonGallery'
import Layout from '@/layout/Layout'
import React from 'react'

export default function Gallery() {
    return (
        <>
            <Layout>
                <Seo title={"gallery"} descrption={"gallery"} />
                <PageHeading title={"Gallery"} image={"images/gallery112.jpg"} />
                 <GallerySection />
            </Layout>

        </>
    )
}
