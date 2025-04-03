import Layout from '@/layout/Layout';
import areaData from '../../data/area.json'; // Import the area data from api.json
import Area from '../../components/Area';

export async function getStaticPaths() {
    // Generate paths for all areas based on the data in api.json
    const paths = Object.keys(areaData).map((areaName) => ({
        params: { area: areaName },
    }));

    return {
        paths,
        fallback: false, // Return 404 for any unknown paths
    };
}

export async function getStaticProps({ params }) {
    const areaName = params.area;  // Dynamic area name (e.g., 'area1')
    console.log("areNAme",areaName)
    const data = areaData[areaName]; // Get area data from api.json
    console.log("area data:", data);

    // If the area is not found, return a 404
    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            areaData: data,
            areaName,
        },
    };
}

const AreaPage = ({ areaData, areaName }) => {
    return (
        <Layout>
            <Area data={areaData} areaName={areaName} />
        </Layout>
    );
};

export default AreaPage;
