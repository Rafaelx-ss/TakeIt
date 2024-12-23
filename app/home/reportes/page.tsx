"use client";
import { 
    UsersIcon, 
    DollarSignIcon, 
    HandHeartIcon,
    Medal,
    ChartNoAxesColumnIncreasing
} from 'lucide-react';
import { MetricCard } from '@/components/patrocinadores/metric-card';
import { SponsorCard } from "@/components/patrocinadores/sponsorcard";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Search, Pencil, Trash } from "lucide-react";
import { ProductCard } from "@/components/ui/product-card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Skeleton } from "@/components/ui/skeleton";

export default function ReportesPage() {
  const [isLoading, setIsLoading] = useState(true);



  return (
    <div className="p-6 bg-background text-text">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4 text-foreground">Resumen</h1>
      <div className="p-6 bg-background">
          {/* Stats Section */}

          <div className="grid grid-cols-3 gap-4 mb-8">
              <MetricCard
              title="Participantes totales"
              value="1442"
              description="Total de participantes en todos los eventos"
              icon={UsersIcon}
              />

              <MetricCard
              title="Reportes totales"
              value="5"
              description="Conteo de todos los reportes recibidos"
              icon={Medal}
              />

              <MetricCard
              title="Experiencia de usuario"
              value="98%"
              description="Porcentaje de satisfacción total"
              icon={ChartNoAxesColumnIncreasing}
              />
          </div>
      </div>
      <h1 className="text-2xl font-bold mb-4 text-foreground">Reportes</h1>

    </div>
  );
}
