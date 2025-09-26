import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const PaymentChart = () => {
  const data = [
    { name: 'PIX', value: 45, color: '#00ff88' },
    { name: 'Cartão Crédito', value: 30, color: '#10b981' },
    { name: 'Cartão Débito', value: 15, color: '#34d399' },
    { name: 'Boleto', value: 10, color: '#6ee7b7' },
  ]

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-dark-card p-3 rounded-lg border border-neon-green/20 shadow-neon">
          <p className="text-white font-medium">{payload[0].name}</p>
          <p className="text-neon-green">{`${payload[0].value}%`}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-dark-card p-6 rounded-xl border border-gray-700 h-full">
      <h2 className="text-xl font-semibold mb-6 text-white">Formas de Pagamento</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-gray-300">{item.name}</span>
            </div>
            <span className="text-white font-medium">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PaymentChart