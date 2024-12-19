import React from 'react'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
    currentPage: number
    totalItems: number
    itemsPerPage: number
    onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }: PaginationProps) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const getPageNumbers = () => {
        const pageNumbers = []
        const maxVisiblePages = 7 

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i)
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 5; i++) {
                    pageNumbers.push(i)
                }
                pageNumbers.push('...')
                pageNumbers.push(totalPages)
            } else if (currentPage >= totalPages - 2) {
                pageNumbers.push(1)
                pageNumbers.push('...')
                for (let i = totalPages - 4; i <= totalPages; i++) {
                    pageNumbers.push(i)
                }
            } else {
                pageNumbers.push(1)
                pageNumbers.push('...')
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pageNumbers.push(i)
                }
                pageNumbers.push('...')
                pageNumbers.push(totalPages)
            }
        }

        return pageNumbers
    }

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    return (
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div>
                <p className="text-sm text-secondary">
                    Mostrando <span className="font-medium">{startItem}</span> a <span className="font-medium">{endItem}</span> de{' '}
                    <span className="font-medium">{totalItems}</span> resultados
                </p>
            </div>
            {totalPages > 1 && (
                <div className="flex flex-1 justify-between sm:justify-end">
                    <nav className="isolate inline-flex space-x-2 rounded-md shadow-sm" aria-label="Pagination">
                        <Button
                            onClick={() => onPageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            variant="outline"
                            size="icon"
                            className="rounded-l-md"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        {getPageNumbers().map((number, index) => (
                            number === '...' ? (
                                <span key={`ellipsis-${index}`} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                                    ...
                                </span>
                            ) : (
                                <Button
                                    key={number}
                                    onClick={() => onPageChange(number as number)}
                                    variant={currentPage === number ? "default" : "outline"}
                                    size="icon"
                                    className={`${currentPage === number ? 'z-10' : ''} focus:z-20`}
                                >
                                    {number}
                                </Button>
                            )
                        ))}
                        <Button
                            onClick={() => onPageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            variant="outline"
                            size="icon"
                            className="rounded-r-md"
                        >
                            <ChevronRight className="h-4 w-4"/>
                        </Button>
                    </nav>
                </div>
            )}
        </div>
    )
}