import { TrendingUp, DollarSign, Users, ShoppingBag } from 'lucide-react'

const KPICards = ({ selectedPeriod }) => {
  const kpiData = {
    week: {
      dailySales: { value: 47, change: +12.5 },
      monthlyRevenue: { value: 89420, change: +8.2 },
      avgTicket: { value: 187.50, change: -2.1 },
      newCustomers: { value: 23, change: +15.8 }
    },
    month: {
      dailySales: { value: 152, change: +18.3 },
      monthlyRevenue: { value: 324680, change: +22.4 },
      avgTicket: { value: 213.75, change: +5.6 },
      newCustomers: { value: 89, change: +28.7 }
    },
    year: {
      dailySales: { value: 1847, change: +32.1 },
      monthlyRevenue: { value: 4567890, change: +41.8 },
      avgTicket: { value: 247.30, change: +12.4 },
      newCustomers: { value: 1256, change: +38.9 }
    }
  }

  const currentData = kpiData[selectedPeriod]

  const cards = [
    {
      title: 'Vendas do Dia',
      value: currentData.dailySales.value,
      change: currentData.dailySales.change,
      icon: ShoppingBag,
      suffix: ''
    },
    {
      title: 'Faturamento Mensal',
      value: currentData.monthlyRevenue.value,
      change: currentData.monthlyRevenue.change,
      icon: DollarSign,
      prefix: 'R$ ',
      format: 'currency'
    },
    {
      title: 'Ticket Médio',
      value: currentData.avgTicket.value,
      change: currentData.avgTicket.change,
      icon: TrendingUp,
      prefix: 'R$ '
    },
    {
      title: 'Clientes Novos',
      value: currentData.newCustomers.value,
      change: currentData.newCustomers.change,
      icon: Users,
      suffix: ''
    }
  ]

  const formatValue = (value, format, prefix = '', suffix = '') => {
    if (format === 'currency') {
      return `${prefix}${value.toLocaleString('pt-BR')}`
    }
    return `${prefix}${value}${suffix}`
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => (
        <div 
          key={index}
          className="bg-dark-card p-6 rounded-xl border border-gray-700 hover:border-neon-green/50 transition-all duration-300 hover:shadow-neon group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-neon-green/20 rounded-lg group-hover:bg-neon-green/30 transition-colors">
              <card.icon className="w-6 h-6 text-neon-green" />
            </div>
            <span className={`text-sm font-medium px-2 py-1 rounded-full ${
              card.change >= 0 
                ? 'text-neon-green bg-neon-green/10' 
                : 'text-red-400 bg-red-400/10'
            }`}>
              {card.change >= 0 ? '+' : ''}{card.change}%
            </span>
          </div>
          
          <h3 className="text-gray-400 text-sm font-medium mb-2">{card.title}</h3>
          <p className="text-2xl font-bold text-white">
            {formatValue(card.value, card.format, card.prefix, card.suffix)}
          </p>
        </div>
      ))}
    </div>
  )
}

export default KPICards