import { DataTable } from "@/components/ui/data-table"

type User = {
  id: number
  name: string
  email: string
  role: string
}

const data: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
]

const columns: { header: string; accessorKey: keyof User }[] = [
  { header: "ID", accessorKey: "id" },
  { header: "Nombre", accessorKey: "name" },
  { header: "Email", accessorKey: "email" },
  { header: "Rol", accessorKey: "role" },
]

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Tabla de Usuarios</h1>
      <DataTable data={data} columns={columns} />
    </div>
  )
}

