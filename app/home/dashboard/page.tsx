
import Header from '@/components/dashboard/Header';

import GRAFICA from '@/components/dashboard/Graficadas';

import Footer from '@/components/dashboard/Footer';
import { MetricCard } from '@/components/examples/components_metric-card'


export default function Dashboard() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <GRAFICA/>
            {/* <Footer/> */}
        </div>    
    );
}

