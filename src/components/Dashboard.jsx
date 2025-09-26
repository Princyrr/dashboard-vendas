import { useState } from 'react'
import KPICards from './KPICards'
import SalesChart from './SalesChart'
import ProductsChart from './ProductsChart'
import PaymentChart from './PaymentChart'
import RecentOrders from './RecentOrders'
import PeriodFilter from './PeriodFilter'
import { ChartBar as BarChart3 } from 'lucide-react'

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month')

  return (
    <div className="min-h-screen bg-dark-bg text-white p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-neon-green/20 rounded-lg">
            <BarChart3 className="w-8 h-8 text-neon-green" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard de Vendas(Eletrônicos)</h1>
            <p className="text-gray-400">Desenvolvido por Priscila Ramonna</p>
          </div>
        </div>
        <PeriodFilter selectedPeriod={selectedPeriod} onPeriodChange={setSelectedPeriod} />
      </header>

      {/* KPI Cards */}
      <KPICards selectedPeriod={selectedPeriod} />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        {/* Sales Evolution Chart */}
        <div className="xl:col-span-2">
          <SalesChart selectedPeriod={selectedPeriod} />
        </div>
        
        {/* Products Chart */}
        <div>
          <ProductsChart />
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payment Methods Chart */}
        <div>
          <PaymentChart />
        </div>
        
        {/* Recent Orders */}
        <div className="lg:col-span-2">
          <RecentOrders />
        </div>
      </div>
    </div>
  )
}

export default Dashboard