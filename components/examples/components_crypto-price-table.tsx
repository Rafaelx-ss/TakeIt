'use client'

import { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react'

interface CryptoData {
  id: string
  name: string
  symbol: string
  current_price: number
  price_change_percentage_24h: number
}

export function CryptoPriceTable() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // En un escenario real, aquí harías una llamada a una API de criptomonedas
    // Por ahora, usaremos datos de ejemplo
    const mockData: CryptoData[] = [
      { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', current_price: 30000, price_change_percentage_24h: 2.5 },
      { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', current_price: 2000, price_change_percentage_24h: -1.2 },
      { id: 'cardano', name: 'Cardano', symbol: 'ADA', current_price: 0.5, price_change_percentage_24h: 3.7 },
      { id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE', current_price: 0.07, price_change_percentage_24h: -0.8 },
    ]
    setCryptoData(mockData)
  }, [])

  const filteredData = cryptoData.filter(crypto =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <Input
        placeholder="Buscar criptomoneda..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Símbolo</TableHead>
            <TableHead className="text-right">Precio</TableHead>
            <TableHead className="text-right">Cambio 24h</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((crypto) => (
            <TableRow key={crypto.id}>
              <TableCell className="font-medium">{crypto.name}</TableCell>
              <TableCell>{crypto.symbol.toUpperCase()}</TableCell>
              <TableCell className="text-right">${crypto.current_price.toLocaleString()}</TableCell>
              <TableCell className={`text-right ${crypto.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {crypto.price_change_percentage_24h >= 0 ? (
                  <ArrowUpIcon className="inline mr-1 h-4 w-4" />
                ) : (
                  <ArrowDownIcon className="inline mr-1 h-4 w-4" />
                )}
                {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

