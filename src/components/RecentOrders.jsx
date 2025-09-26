import { Clock, CircleCheck as CheckCircle, Truck } from 'lucide-react'

const RecentOrders = () => {
  const orders = [
    {
      id: '#12847',
      customer: 'João Silva',
      product: 'iPhone 14 Pro',
      value: 6499.00,
      status: 'pago',
      date: '2025-01-15',
      time: '14:30'
    },
    {
      id: '#12846',
      customer: 'Maria Santos',
      product: 'MacBook Air M2',
      value: 8999.00,
      status: 'enviado',
      date: '2025-01-15',
      time: '13:15'
    },
    {
      id: '#12845',
      customer: 'Pedro Oliveira',
      product: 'AirPods Pro',
      value: 2199.00,
      status: 'pendente',
      date: '2025-01-15',
      time: '12:45'
    },
    {
      id: '#12844',
      customer: 'Ana Costa',
      product: 'iPad Pro 12.9"',
      value: 7299.00,
      status: 'pago',
      date: '2025-01-15',
      time: '11:20'
    },
    {
      id: '#12843',
      customer: 'Carlos Rodrigues',
      product: 'Apple Watch Ultra',
      value: 4399.00,
      status: 'enviado',
      date: '2025-01-15',
      time: '10:10'
    },
  ]

  const getStatusConfig = (status) => {
    switch (status) {
      case 'pendente':
        return {
          icon: Clock,
          color: 'text-yellow-400',
          bg: 'bg-yellow-400/10',
          border: 'border-yellow-400/20',
          label: 'Pendente'
        }
      case 'pago':
        return {
          icon: CheckCircle,
          color: 'text-neon-green',
          bg: 'bg-neon-green/10',
          border: 'border-neon-green/20',
          label: 'Pago'
        }
      case 'enviado':
        return {
          icon: Truck,
          color: 'text-blue-400',
          bg: 'bg-blue-400/10',
          border: 'border-blue-400/20',
          label: 'Enviado'
        }
      default:
        return {
          icon: Clock,
          color: 'text-gray-400',
          bg: 'bg-gray-400/10',
          border: 'border-gray-400/20',
          label: status
        }
    }
  }

  return (
    <div className="bg-dark-card p-6 rounded-xl border border-gray-700">
      <h2 className="text-xl font-semibold mb-6 text-white">Pedidos Recentes</h2>
      <div className="space-y-4">
        {orders.map((order) => {
          const statusConfig = getStatusConfig(order.status)
          const StatusIcon = statusConfig.icon
          
          return (
            <div 
              key={order.id}
              className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-600/30 hover:border-neon-green/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${statusConfig.bg} border ${statusConfig.border}`}>
                  <StatusIcon className={`w-5 h-5 ${statusConfig.color}`} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-medium text-white">{order.id}</span>
                    <span className="text-gray-400 text-sm">{order.customer}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{order.product}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-semibold text-white mb-1">
                  R$ {order.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${statusConfig.bg} ${statusConfig.color} border ${statusConfig.border}`}>
                    {statusConfig.label}
                  </span>
                  <span className="text-xs text-gray-400">{order.time}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RecentOrders