"use client";

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

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);



  return (

    <div className="p-6 bg-background">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-foreground">Reportes</h1>
        </div>
    </div>
    
  );
}
