import React from 'react';
import { Filter } from 'lucide-react';

const FilterButton: React.FC = () => {
    return (
        <div className="flex justify-center items-center gap-2">
            <div className="bg-gradient-to-b from-yellow-300/40 to-transparent p-[4px] rounded-[16px]">
                <button className="group p-[3px] rounded-[12px] bg-gradient-to-b from-yellow-400 to-yellow-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995]">
                    <div className="bg-gradient-to-b from-yellow-200/40 to-yellow-100/80 rounded-[8px] px-3.5 py-1">
                        <div className="flex gap-2 items-center">
                            <Filter className="text-background" />
                            <span className="text-background">Filtrar</span>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default FilterButton;