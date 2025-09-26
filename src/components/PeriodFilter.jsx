import { Calendar, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const PeriodFilter = ({ selectedPeriod, onPeriodChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const periods = [
    { value: 'week', label: 'Esta Semana' },
    { value: 'month', label: 'Este Mês' },
    { value: 'year', label: 'Este Ano' },
  ]

  const selectedLabel = periods.find(p => p.value === selectedPeriod)?.label

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-dark-card px-4 py-2 rounded-lg border border-gray-700 hover:border-neon-green/50 transition-colors text-white"
      >
        <Calendar className="w-4 h-4 text-neon-green" />
        <span>{selectedLabel}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 bg-dark-card border border-gray-700 rounded-lg shadow-neon z-20 min-w-[160px]">
            {periods.map((period) => (
              <button
                key={period.value}
                onClick={() => {
                  onPeriodChange(period.value)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-2 hover:bg-dark-hover transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  selectedPeriod === period.value 
                    ? 'text-neon-green bg-neon-green/10' 
                    : 'text-white'
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default PeriodFilter