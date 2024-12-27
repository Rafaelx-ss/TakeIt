'use client'

import { useState, useEffect } from 'react'
import { Users, DollarSign, ShoppingBag, TrendingUp } from 'lucide-react'
import { Navigation } from '@/components/examples/components_navigation'
import { DataTable } from '@/components/examples/components_data-table'
import { BarChartComponent } from '@/components/examples/components_bar-chart'
import { TestimonialCarousel } from '@/components/examples/components_testimonial-carousel'
import { ProductCard } from '@/components/examples/components_product-card'
import { FAQAccordion } from '@/components/examples/components_faq-accordion'
import { MultiLineChart } from '@/components/examples/components_multi-line-chart' 
import { StatCard } from '@/components/examples/components_stat-card'
import { UserProfileCard } from '@/components/examples/components_user-profile-card'
import { TaskList } from '@/components/examples/components_task-list'
import { ImageCarousel } from '@/components/examples/components_image-carousel'
import { StepProgress } from '@/components/examples/components_step-progress'
import { PricingCard } from '@/components/examples/components_pricing-card'
import { NestedComments } from '@/components/examples/components_nested-comments'
import { ImageGallery } from '@/components/examples/components_image-gallery'
import { Stopwatch } from '@/components/examples/components_stopwatch'
import { WeatherCard } from '@/components/examples/components_weather-card'
import { CircularProgress } from '@/components/examples/components_circular-progress'
import { TeamCard } from '@/components/examples/components_team-card'
import { Leaderboard } from '@/components/examples/components_leaderboard'
import { RadarChartComponent } from '@/components/examples/components_radar-chart'
import { NotificationList } from '@/components/examples/components_notification-list'
import { ExpandableProfileCard } from '@/components/examples/components_expandable-profile-card'
import { BubbleChart } from '@/components/examples/components_bubble-chart'
import { AreaChartComponent } from '@/components/examples/components_area-chart'
import { ActivityFeed } from '@/components/examples/components_activity-feed'
import { ProjectCard } from '@/components/examples/components_project-card'
import { FileList } from '@/components/examples/components_file-list'
import { HeatMapCalendar } from '@/components/examples/components_heat-map-calendar'
import { MetricCard } from '@/components/examples/components_metric-card'
import { CandlestickChartComponent } from '@/components/examples/components_candlestick-chart'
import { CryptoPriceTable } from '@/components/examples/components_crypto-price-table'
import { CodeEditor } from '@/components/examples/components_code-editor'
import { TreemapChart } from '@/components/examples/components_treemap-chart'

// Primero define la interfaz para los datos de la tabla
interface TableData {
  id: number;
  nombre: string;
  email: string;
  rol: string;
}

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<{
    tableData: TableData[];
    carouselImages: any[];
    progressSteps: string[];
    comments: any[];
    galleryImages: any[];
    teamMembers: any[];
    events: any[];
    leaderboardEntries: any[];
    radarChartData: any[];
    notifications: any[];
    bubbleChartData: any[];
    areaChartData: any[];
    activities: any[];
    projectMembers: any[];
    files: any[];
    heatMapData: any[];
  }>({
    tableData: [],
    carouselImages: [],
    progressSteps: [],
    comments: [],
    galleryImages: [],
    teamMembers: [],
    events: [],
    leaderboardEntries: [],
    radarChartData: [],
    notifications: [],
    bubbleChartData: [],
    areaChartData: [],
    activities: [],
    projectMembers: [],
    files: [],
    heatMapData: []
  })

  useEffect(() => {
    // Simulating data fetching
    setTimeout(() => {
      setData({
        tableData: [
          { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', rol: 'Admin' },
          { id: 2, nombre: 'María García', email: 'maria@example.com', rol: 'Usuario' },
          { id: 3, nombre: 'Carlos López', email: 'carlos@example.com', rol: 'Editor' },
          { id: 4, nombre: 'Ana Martínez', email: 'ana@example.com', rol: 'Usuario' },
          { id: 5, nombre: 'Pedro Sánchez', email: 'pedro@example.com', rol: 'Admin' },
          { id: 6, nombre: 'Laura Rodríguez', email: 'laura@example.com', rol: 'Editor' },
        ],
        carouselImages: [
          '/placeholder.svg?height=400&width=600',
          '/placeholder.svg?height=400&width=600',
          '/placeholder.svg?height=400&width=600',
        ],
        progressSteps: ['Información', 'Pago', 'Confirmación'],
        comments: [
          {
            id: 1,
            author: 'Alice Johnson',
            avatar: '/placeholder.svg?height=40&width=40',
            content: '¡Gran artículo! Me encantó la perspectiva que ofreces.',
            timestamp: '2 horas atrás',
            replies: [
              {
                id: 2,
                author: 'Bob Smith',
                avatar: '/placeholder.svg?height=40&width=40',
                content: 'Estoy de acuerdo, Alice. El autor realmente profundizó en el tema.',
                timestamp: '1 hora atrás',
              },
            ],
          },
          {
            id: 3,
            author: 'Charlie Brown',
            avatar: '/placeholder.svg?height=40&width=40',
            content: 'Interesante punto de vista. Me gustaría ver más contenido como este.',
            timestamp: '30 minutos atrás',
          },
        ],
        galleryImages: [
          { src: '/placeholder.svg?height=300&width=400', alt: 'Imagen 1' },
          { src: '/placeholder.svg?height=300&width=400', alt: 'Imagen 2' },
          { src: '/placeholder.svg?height=300&width=400', alt: 'Imagen 3' },
          { src: '/placeholder.svg?height=300&width=400', alt: 'Imagen 4' },
          { src: '/placeholder.svg?height=300&width=400', alt: 'Imagen 5' },
          { src: '/placeholder.svg?height=300&width=400', alt: 'Imagen 6' },
        ],
        teamMembers: [
          { name: 'Ana García', role: 'Diseñadora UX', avatar: '/placeholder.svg?height=50&width=50' },
          { name: 'Carlos Rodríguez', role: 'Desarrollador Frontend', avatar: '/placeholder.svg?height=50&width=50' },
          { name: 'Elena Martínez', role: 'Product Manager', avatar: '/placeholder.svg?height=50&width=50' },
        ],
        events: [
          { date: new Date(2023, 5, 15), title: 'Reunión de equipo', type: 'work' },
          { date: new Date(2023, 5, 20), title: 'Lanzamiento de producto', type: 'work' },
          { date: new Date(2023, 5, 25), title: 'Cumpleaños de Ana', type: 'personal' },
          { date: new Date(2023, 6, 1), title: 'Día festivo', type: 'holiday' },
        ],
        leaderboardEntries: [
          { rank: 1, name: 'John Doe', score: 1000, avatar: '/placeholder.svg?height=40&width=40' },
          { rank: 2, name: 'Jane Smith', score: 950, avatar: '/placeholder.svg?height=40&width=40' },
          { rank: 3, name: 'Bob Johnson', score: 900, avatar: '/placeholder.svg?height=40&width=40' },
          { rank: 4, name: 'Alice Williams', score: 850, avatar: '/placeholder.svg?height=40&width=40' },
          { rank: 5, name: 'Charlie Brown', score: 800, avatar: '/placeholder.svg?height=40&width=40' },
        ],
        radarChartData: [
          { subject: 'Matemáticas', A: 120, B: 110, fullMark: 150 },
          { subject: 'Ciencias', A: 98, B: 130, fullMark: 150 },
          { subject: 'Literatura', A: 86, B: 130, fullMark: 150 },
          { subject: 'Historia', A: 99, B: 100, fullMark: 150 },
          { subject: 'Arte', A: 85, B: 90, fullMark: 150 },
          { subject: 'Música', A: 65, B: 85, fullMark: 150 },
        ],
        notifications: [
          { id: 1, title: 'Nuevo mensaje', description: 'Tienes un nuevo mensaje de Juan', time: '5 min ago', read: false },
          { id: 2, title: 'Recordatorio', description: 'Reunión de equipo a las 3 PM', time: '1 hora ago', read: true },
          { id: 3, title: 'Actualización', description: 'Nueva versión del software disponible', time: '2 horas ago', read: false },
        ],
        bubbleChartData: [
          { name: 'Grupo A', x: 100, y: 200, z: 200 },
          { name: 'Grupo B', x: 120, y: 100, z: 260 },
          { name: 'Grupo C', x: 170, y: 300, z: 400 },
          { name: 'Grupo D', x: 140, y: 250, z: 280 },
          { name: 'Grupo E', x: 150, y: 400, z: 500 },
          { name: 'Grupo F', x: 110, y: 280, z: 200 },
        ],
        areaChartData: [
          { name: 'Ene', uv: 4000, pv: 2400, amt: 2400 },
          { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
          { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
          { name: 'Abr', uv: 2780, pv: 3908, amt: 2000 },
          { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
          { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
          { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
        ],
        activities: [
          { id: 1, user: { name: 'Juan Pérez', avatar: '/placeholder.svg?height=40&width=40' }, action: 'comentó en el proyecto A', timestamp: 'Hace 5 minutos' },
          { id: 2, user: { name: 'María García', avatar: '/placeholder.svg?height=40&width=40' }, action: 'subió un nuevo archivo', timestamp: 'Hace 1 hora' },
          { id: 3, user: { name: 'Carlos López', avatar: '/placeholder.svg?height=40&width=40' }, action: 'completó una tarea', timestamp: 'Hace 2 horas' },
        ],
        projectMembers: [
          { name: 'Ana García', avatar: '/placeholder.svg?height=40&width=40' },
          { name: 'Carlos Rodríguez', avatar: '/placeholder.svg?height=40&width=40' },
          { name: 'Elena Martínez', avatar: '/placeholder.svg?height=40&width=40' },
        ],
        files: [
          { id: '1', name: 'documento.pdf', type: 'file', size: '2.5 MB', lastModified: '2023-06-15' },
          { id: '2', name: 'imágenes', type: 'folder', size: '-- MB', lastModified: '2023-06-14' },
          { id: '3', name: 'presentacion.pptx', type: 'file', size: '5.8 MB', lastModified: '2023-06-13' },
        ],
        heatMapData: Array.from({ length: 365 }, (_, i) => ({
          date: new Date(2023, 0, i + 1),
          value: Math.floor(Math.random() * 10),
        })),
      })
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Cargando...</div>
  }

  const columns = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'nombre', label: 'Nombre', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'rol', label: 'Rol', sortable: true },
  ]

  const candlestickData = [
    { date: '2023-01-01', open: 50, high: 55, low: 45, close: 52 },
    { date: '2023-01-02', open: 52, high: 57, low: 51, close: 56 },
    { date: '2023-01-03', open: 56, high: 59, low: 54, close: 57 },
    { date: '2023-01-04', open: 57, high: 60, low: 55, close: 59 },
    { date: '2023-01-05', open: 59, high: 62, low: 57, close: 60 },
  ]

  const treemapData = [
    {
      name: 'Axis',
      children: [
        { name: 'Axes', size: 1302 },
        { name: 'Axis', size: 24593 },
        { name: 'AxisGridLine', size: 652 },
        { name: 'AxisLabel', size: 636 },
        { name: 'CartesianAxes', size: 6703 },
      ],
    },
    {
      name: 'Controls',
      children: [
        { name: 'AnchorControl', size: 2138 },
        { name: 'ClickControl', size: 3824 },
        { name: 'Control', size: 1353 },
        { name: 'ControlList', size: 4665 },
        { name: 'DragControl', size: 2649 },
        { name: 'ExpandControl', size: 2832 },
        { name: 'HoverControl', size: 4896 },
        { name: 'IControl', size: 763 },
        { name: 'PanZoomControl', size: 5222 },
        { name: 'SelectionControl', size: 7862 },
        { name: 'TooltipControl', size: 8435 },
      ],
    },
    {
      name: 'Data',
      children: [
        { name: 'Data', size: 20544 },
        { name: 'DataList', size: 19788 },
        { name: 'DataSprite', size: 10349 },
        { name: 'EdgeSprite', size: 3301 },
        { name: 'NodeSprite', size: 19382 },
        {
          name: 'render',
          children: [
            { name: 'ArrowType', size: 698 },
            { name: 'EdgeRenderer', size: 5569 },
            { name: 'IRenderer', size: 353 },
            { name: 'ShapeRenderer', size: 2247 },
          ],
        },
        { name: 'ScaleBinding', size: 11275 },
        { name: 'Tree', size: 7147 },
        { name: 'TreeBuilder', size: 9930 },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto p-4 space-y-8">
        <h1 className="text-3xl font-bold text-dorado">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Usuarios Totales"
            value="1,234"
            description="Total de usuarios registrados"
            change={5.6}
            trend="up"
          />
          <MetricCard
            title="Ingresos"
            value="$45,678"
            description="Ingresos totales este mes"
            change={2.3}
            trend="up"
          />
          <MetricCard
            title="Pedidos"
            value="89"
            description="Pedidos realizados hoy"
            change={1.5}
            trend="down"
          />
          <MetricCard
            title="Tasa de Conversión"
            value="3.2%"
            description="Conversión de visitantes a clientes"
            change={0.8}
            trend="up"
          />
        </div>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Gráfico de Ventas</h2>
          <MultiLineChart />
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Productos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProductCard name="Producto 1" price={29.99} image="/placeholder.svg?height=200&width=200" />
            <ProductCard name="Producto 2" price={39.99} image="/placeholder.svg?height=200&width=200" />
            <ProductCard name="Producto 3" price={49.99} image="/placeholder.svg?height=200&width=200" />
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tabla de Usuarios</h2>
          <DataTable data={data.tableData} columns={columns as Array<{key: keyof TableData; label: string; sortable?: boolean}>} />
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Testimonios</h2>
          <TestimonialCarousel />
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Usuarios Totales</h2>
          <StatCard title="Usuarios Totales" value={1234} icon={<Users />} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Preguntas Frecuentes</h2>
          <FAQAccordion />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Gráfico de Barras</h2>
          <BarChartComponent />
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Perfil de Usuario</h2>
          <UserProfileCard
            name="John Doe"
            role="Desarrollador Senior"
            avatar="/placeholder.svg?height=100&width=100"
            bio="Apasionado por la tecnología y el desarrollo web. Siempre buscando aprender algo nuevo."
            skills={['React', 'Node.js', 'TypeScript', 'GraphQL']}
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Lista de Tareas</h2>
          <TaskList />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Carrusel de Imágenes</h2>
          <ImageCarousel images={data.carouselImages} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Progreso de Pasos</h2>
          <StepProgress steps={data.progressSteps} currentStep={1} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Planes de Precios</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <PricingCard
              title="Básico"
              price={9.99}
              description="Perfecto para empezar"
              features={['1 usuario', '10 GB de almacenamiento', 'Soporte por email']}
            />
            <PricingCard
              title="Pro"
              price={19.99}
              description="Para equipos en crecimiento"
              features={['5 usuarios', '50 GB de almacenamiento', 'Soporte prioritario']}
              isPopular
            />
            <PricingCard
              title="Empresa"
              price={49.99}
              description="Solución completa para grandes equipos"
              features={['Usuarios ilimitados', '500 GB de almacenamiento', 'Soporte 24/7']}
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Comentarios</h2>
          <NestedComments comments={data.comments} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Galería de Imágenes</h2>
          <ImageGallery images={data.galleryImages} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cronómetro</h2>
          <Stopwatch />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Clima</h2>
          <WeatherCard
            city="Madrid"
            temperature={22}
            condition="sunny"
            humidity={60}
            windSpeed={10}
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Progreso Circular</h2>
          <div className="flex justify-center">
            <CircularProgress progress={75} />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Equipo</h2>
          <TeamCard
            teamName="Equipo de Desarrollo"
            description="Nuestro equipo de expertos en desarrollo de software"
            members={data.teamMembers}
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Tabla de Clasificación</h2>
          <Leaderboard entries={data.leaderboardEntries} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Gráfico de Radar</h2>
          <RadarChartComponent data={data.radarChartData} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Notificaciones</h2>
          <NotificationList
            notifications={data.notifications}
            onMarkAsRead={(id) => console.log(`Marcar como leída: ${id}`)}
            onDismiss={(id) => console.log(`Descartar: ${id}`)}
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Perfil Expandible</h2>
          <ExpandableProfileCard
            name="Jane Doe"
            title="Diseñadora UX"
            avatar="/placeholder.svg?height=100&width=100"
            email="jane@example.com"
            phone="+1 234 567 8901"
            location="San Francisco, CA"
            bio="Diseñadora UX apasionada por crear experiencias digitales intuitivas y atractivas. Con más de 5 años de experiencia en el campo del diseño centrado en el usuario."
          />
        </section>


        <section>
          <h2 className="text-2xl font-semibold mb-4">Gráfico de Burbujas</h2>
          <BubbleChart data={data.bubbleChartData} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Gráfico de Área</h2>
          <AreaChartComponent data={data.areaChartData} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Actividad Reciente</h2>
          <ActivityFeed activities={data.activities} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Tarjeta de Proyecto</h2>
          <ProjectCard
            title="Proyecto A"
            description="Desarrollo de una nueva aplicación móvil"
            progress={65}
            dueDate="2023-07-30"
            status="En progreso"
            members={data.projectMembers}
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Lista de Archivos</h2>
          <FileList
            files={data.files}
            onDownload={(file) => console.log(`Descargando: ${file.name}`)}
            onDelete={(file) => console.log(`Eliminando: ${file.name}`)}
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Calendario de Calor</h2>
          <HeatMapCalendar data={data.heatMapData} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Gráfico de Velas</h2>
          <CandlestickChartComponent data={candlestickData} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Precios de Criptomonedas</h2>
          <CryptoPriceTable />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Editor de Código</h2>
          <CodeEditor />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Gráfico de Árbol</h2>
          <TreemapChart data={treemapData.map(item => ({
            name: item.name,
            size: !('children' in item) ? (item as { size: number }).size : 0,
            children: 'children' in item ? (item as { children: { name: string, size: number }[] }).children.map(child => ({
              name: child.name,
              size: (child as { size?: number }).size || 0
            })) : undefined
          }))} />
        </section>
      </div>
    </div>
  )
}

