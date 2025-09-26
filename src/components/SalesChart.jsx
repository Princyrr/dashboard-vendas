import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const SalesChart = ({ selectedPeriod }) => {
  const data = {
    week: [
      { name: 'Seg', value: 2400 },
      { name: 'Ter', value: 1398 },
      { name: 'Qua', value: 9800 },
      { name: 'Qui', value: 3908 },
      { name: 'Sex', value: 4800 },
      { name: 'Sáb', value: 3800 },
      { name: 'Dom', value: 4300 },
    ],
    month: [
      { name: 'Sem 1', value: 12400 },
      { name: 'Sem 2', value: 15398 },
      { name: 'Sem 3', value: 18800 },
      { name: 'Sem 4', value: 23908 },
    ],
    year: [
      { name: 'Jan', value: 65000 },
      { name: 'Fev', value: 59000 },
      { name: 'Mar', value: 80000 },
      { name: 'Abr', value: 81000 },
      { name: 'Mai', value: 56000 },
      { name: 'Jun', value: 78000 },
      { name: 'Jul', value: 89000 },
      { name: 'Ago', value: 95000 },
      { name: 'Set', value: 87000 },
      { name: 'Out', value: 92000 },
      { name: 'Nov', value: 98000 },
      { name: 'Dez', value: 105000 },
    ]
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-dark-card p-3 rounded-lg border border-neon-green/20 shadow-neon">
          <p className="text-white font-medium">{`${label}`}</p>
          <p className="text-neon-green">
            {`Vendas: R$ ${payload[0].value.toLocaleString('pt-BR')}`}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-dark-card p-6 rounded-xl border border-gray-700">
      <h2 className="text-xl font-semibold mb-6 text-white">Evolução de Vendas</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data[selectedPeriod]}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="name" 
              stroke="#9CA3AF"
              fontSize={12}
            />
            <YAxis 
              stroke="#9CA3AF"
              fontSize={12}
              tickFormatter={(value) => `R$ ${(value/1000).toFixed(0)}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#00ff88" 
              strokeWidth={3}
              dot={{ fill: '#00ff88', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, stroke: '#00ff88', strokeWidth: 2, fill: '#0f172a' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default SalesChart