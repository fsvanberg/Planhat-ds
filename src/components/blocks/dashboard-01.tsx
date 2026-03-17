import * as React from 'react'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import {
  TrendingUpIcon,
  TrendingDownIcon,
  MailIcon,
  ActivityIcon,
  BarChart3Icon,
  FolderIcon,
  UsersIcon,
  DatabaseIcon,
  FileTextIcon,
  SparklesIcon,
  SettingsIcon,
  HelpCircleIcon,
  SearchIcon,
  MoonIcon,
  GithubIcon,
  ChevronDownIcon,
  ColumnsIcon,
  PlusIcon,
  GripVerticalIcon,
  CircleCheckIcon,
  LoaderCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  MoreVerticalIcon,
  ChevronUpIcon,
  ZapIcon,
  PlusCircleIcon,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

// ─── Data ─────────────────────────────────────────────────────────────────────

const visitorData = [
  { date: 'Mar 3',  primary: 1800, secondary: 800  },
  { date: 'Mar 10', primary: 3200, secondary: 1100 },
  { date: 'Mar 17', primary: 5800, secondary: 1900 },
  { date: 'Mar 24', primary: 3600, secondary: 1400 },
  { date: 'Mar 31', primary: 7200, secondary: 2600 },
  { date: 'Apr 7',  primary: 5000, secondary: 2000 },
  { date: 'Apr 14', primary: 8800, secondary: 3200 },
  { date: 'Apr 21', primary: 7400, secondary: 2800 },
  { date: 'Apr 28', primary: 9600, secondary: 3800 },
  { date: 'May 5',  primary: 8200, secondary: 3200 },
  { date: 'May 12', primary: 10800, secondary: 4200 },
  { date: 'May 19', primary: 9400, secondary: 3600 },
]

const chartConfig = {
  primary:   { label: 'Visitors',  color: 'var(--foreground)' },
  secondary: { label: 'Returning', color: 'var(--muted-foreground)' },
} satisfies ChartConfig

const kpiCards = [
  {
    title: 'Total Revenue',
    value: '$15,231.89',
    trend: '+12.5%',
    up: true,
    desc1: 'Trending up this month',
    icon1: TrendingUpIcon,
    desc2: 'Visitors for the last 6 months',
  },
  {
    title: 'New Customers',
    value: '1,234',
    trend: '-20%',
    up: false,
    desc1: 'Down 20% this period',
    icon1: TrendingDownIcon,
    desc2: 'Acquisition needs attention',
  },
  {
    title: 'Active Accounts',
    value: '45,678',
    trend: '+12.5%',
    up: true,
    desc1: 'Strong user retention',
    icon1: TrendingUpIcon,
    desc2: 'Engagement exceed targets',
  },
  {
    title: 'Growth Rate',
    value: '4.5%',
    trend: '+4.5%',
    up: true,
    desc1: 'Steady performance increase',
    icon1: TrendingUpIcon,
    desc2: 'Meets growth projections',
  },
]

type TableRowData = {
  id: string
  header: string
  type: string
  status: string
  target: number
  limit: number
  reviewer: string
}

const initialRows: TableRowData[] = [
  { id: '1',  header: 'Cover Page',              type: 'Cover Page',        status: 'In Process', target: 23, limit: 32, reviewer: 'Jamik Tashpulatov' },
  { id: '2',  header: 'Table of contents',       type: 'Table of Contents', status: 'Done',       target: 45, limit: 8,  reviewer: 'Jamik Tashpulatov' },
  { id: '3',  header: 'Executive summary',       type: 'Technical Content', status: 'Done',       target: 45, limit: 45, reviewer: 'Jamik Tashpulatov' },
  { id: '4',  header: 'Technical approach',      type: 'Cover Page',        status: 'In Process', target: 45, limit: 45, reviewer: 'Eddie Lake' },
  { id: '5',  header: 'Design',                  type: 'Cover Page',        status: 'In Process', target: 23, limit: 23, reviewer: 'Eddie Lake' },
  { id: '6',  header: 'Capabilities',            type: 'Narrative',         status: 'Done',       target: 23, limit: 23, reviewer: 'Eddie Lake' },
  { id: '7',  header: 'Integration with exist.', type: 'Technical Content', status: 'In Process', target: 23, limit: 23, reviewer: 'Eddie Lake' },
  { id: '8',  header: 'Innovation and Advan.',   type: 'Table of Contents', status: 'Done',       target: 8,  limit: 45, reviewer: '' },
  { id: '9',  header: "Overview of EMR's In.",   type: 'Narrative',         status: 'Done',       target: 23, limit: 23, reviewer: '' },
  { id: '10', header: 'Advanced Algorithms.',    type: 'Table of Contents', status: 'In Process', target: 89, limit: 23, reviewer: '' },
]

const navMain = [
  { label: 'Playground', icon: ZapIcon },
  { label: 'Lifecycle',  icon: ActivityIcon },
  { label: 'Analytics',  icon: BarChart3Icon },
  { label: 'Projects',   icon: FolderIcon },
  { label: 'Team',       icon: UsersIcon },
]

const navDocuments = [
  { label: 'Data Library',   icon: DatabaseIcon },
  { label: 'Reports',        icon: FileTextIcon },
  { label: 'Word Assistant', icon: SparklesIcon },
]

// ─── Sortable row ─────────────────────────────────────────────────────────────

function SortableRow({ row }: { row: TableRowData }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: row.id })

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
    position: isDragging ? 'relative' : undefined,
    zIndex: isDragging ? 1 : undefined,
  }

  return (
    <TableRow ref={setNodeRef} style={style} {...attributes}>
      {/* Drag handle — Figma icon-sm = our size="icon" = 28×28 */}
      <TableCell className="w-8 pr-0 text-muted-foreground/40">
        <GripVerticalIcon
          className="size-4 cursor-grab active:cursor-grabbing"
          {...listeners}
        />
      </TableCell>
      <TableCell className="w-8">
        <Checkbox />
      </TableCell>
      <TableCell className="font-medium">{row.header}</TableCell>
      <TableCell className="text-muted-foreground">{row.type}</TableCell>
      <TableCell>
        {row.status === 'Done' ? (
          <span className="flex items-center gap-1.5 text-sm text-emerald-600">
            <CircleCheckIcon className="size-3.5" />
            Done
          </span>
        ) : (
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <LoaderCircleIcon className="size-3.5" />
            In Process
          </span>
        )}
      </TableCell>
      <TableCell>{row.target}</TableCell>
      <TableCell>{row.limit}</TableCell>
      <TableCell>
        {row.reviewer ? (
          <span className="text-sm">{row.reviewer}</span>
        ) : (
          // Figma sm = our default (28px)
          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground px-2">
            Assign reviewer
            <ChevronDownIcon className="size-3.5" />
          </Button>
        )}
      </TableCell>
      {/* Row action — Figma icon-sm = our size="icon" (28×28) */}
      <TableCell className="w-8">
        <Button variant="ghost" size="icon-sm">
          <MoreVerticalIcon className="size-4" />
        </Button>
      </TableCell>
    </TableRow>
  )
}

// ─── AppSidebar ───────────────────────────────────────────────────────────────

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b px-3 py-3">
        <div className="flex items-center gap-2 px-1">
          <div className="flex size-6 shrink-0 items-center justify-center rounded bg-foreground text-background text-xs font-bold">
            A
          </div>
          <span className="font-semibold text-sm">Acme Inc.</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Quick Create row — both buttons Figma default = our lg = 32px */}
        <div className="flex items-center gap-2 px-3 pt-3 pb-1">
          <Button size="default" className="flex-1 justify-start gap-2">
            <PlusCircleIcon className="size-4" />
            Quick Create
          </Button>
          {/* Mail — Figma icon (32×32) = our icon-lg */}
          <Button variant="secondary" size="icon" aria-label="Inbox">
            <MailIcon className="size-4" />
          </Button>
        </div>

        {/* Main nav */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navMain.map(item => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton>
                    <item.icon className="size-4" />
                    {item.label}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Documents */}
        <SidebarGroup>
          <SidebarGroupLabel>Documents</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navDocuments.map(item => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton>
                    <item.icon className="size-4" />
                    {item.label}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton className="text-muted-foreground">
                  <span>···</span>
                  <span>More</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t pb-0">
        <SidebarMenu>
          {[
            { label: 'Settings', icon: SettingsIcon },
            { label: 'Get Help', icon: HelpCircleIcon },
            { label: 'Search',   icon: SearchIcon },
          ].map(item => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton>
                <item.icon className="size-4" />
                {item.label}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton className="justify-between">
              <span className="flex items-center gap-2">
                <MoonIcon className="size-4" />
                Dark Mode
              </span>
              <Switch />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <Separator />

        <div className="flex items-center gap-2 px-2 py-3">
          <Avatar className="size-7 shrink-0">
            <AvatarFallback className="text-xs">SC</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium truncate">shadcn</div>
            <div className="text-xs text-muted-foreground truncate">m@example.com</div>
          </div>
          <ChevronUpIcon className="size-4 text-muted-foreground shrink-0" />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function Dashboard01() {
  const [period, setPeriod] = React.useState<'3m' | '30d' | '7d'>('3m')
  const [rows, setRows] = React.useState(initialRows)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (over && active.id !== over.id) {
      setRows(items => {
        const oldIndex = items.findIndex(i => i.id === active.id)
        const newIndex = items.findIndex(i => i.id === over.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        {/* Top bar — header height 48px (h-12) */}
        <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Documents</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="ml-auto flex items-center gap-2">
            {/* GitHub — Figma default = our lg (32px) */}
            <Button variant="ghost" size="default" className="gap-2">
              <GithubIcon className="size-4" />
              GitHub
            </Button>
            {/* Theme selector — Figma default = our lg (32px) */}
            <Button variant="outline" size="default" className="gap-2">
              Select a theme: Default
              <ChevronDownIcon className="size-4" />
            </Button>
            {/* Moon — Figma variant=secondary size=icon (32×32) = our secondary icon-lg */}
            <Button variant="secondary" size="icon" aria-label="Toggle dark mode">
              <MoonIcon className="size-4" />
            </Button>
          </div>
        </header>

        {/* Page content — p-6 (24px) matching Figma card padding */}
        <div className="flex flex-col gap-4 p-6">

          {/* KPI cards — Figma card padding 24px = p-6 */}
          <div className="grid grid-cols-4 gap-4">
            {kpiCards.map(card => {
              const Icon1 = card.icon1
              return (
                <Card key={card.title}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2">
                      <CardDescription className="text-sm">{card.title}</CardDescription>
                      <Badge
                        variant="outline"
                        className={`gap-1 text-xs shrink-0 ${card.up ? 'text-emerald-600' : 'text-destructive'}`}
                      >
                        {card.up
                          ? <TrendingUpIcon className="size-3" />
                          : <TrendingDownIcon className="size-3" />}
                        {card.trend}
                      </Badge>
                    </div>
                    {/* Figma: text-3xl/font-size=30px, font-weight=semibold */}
                    <CardTitle className="text-3xl font-semibold tabular-nums">
                      {card.value}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm flex items-center gap-1.5">
                      <Icon1 className="size-3.5 shrink-0" />
                      {card.desc1}
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5">{card.desc2}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Visitor chart */}
          <Card>
            <CardHeader className="pb-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-base">Total Visitors</CardTitle>
                  <CardDescription>Total for the last 3 months</CardDescription>
                </div>
                {/* Period buttons — Figma sm = our default (28px) */}
                <div className="flex gap-1 shrink-0">
                  {(['3m', '30d', '7d'] as const).map(p => (
                    <Button
                      key={p}
                      variant={period === p ? 'outline' : 'ghost'}
                      size="sm"
                      onClick={() => setPeriod(p)}
                    >
                      {p === '3m' ? 'Last 3 months' : p === '30d' ? 'Last 30 days' : 'Last 7 days'}
                    </Button>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <ChartContainer config={chartConfig} className="h-52 w-full">
                <AreaChart data={visitorData} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="gradPrimary" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stopColor="var(--foreground)" stopOpacity={0.14} />
                      <stop offset="100%" stopColor="var(--foreground)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="gradSecondary" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stopColor="var(--muted-foreground)" stopOpacity={0.18} />
                      <stop offset="100%" stopColor="var(--muted-foreground)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} stroke="var(--border)" />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="secondary" stroke="var(--muted-foreground)" strokeWidth={1.5} fill="url(#gradSecondary)" dot={false} />
                  <Area type="monotone" dataKey="primary"   stroke="var(--foreground)"       strokeWidth={1.5} fill="url(#gradPrimary)"   dot={false} />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Table section */}
          <div>
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-2">
              <Tabs defaultValue="outline">
                <TabsList variant="line">
                  <TabsTrigger value="outline">Outline</TabsTrigger>
                  <TabsTrigger value="past">
                    Past Performance
                    <Badge variant="secondary" className="ml-1.5 h-4 min-w-4 px-1 text-xs">3</Badge>
                  </TabsTrigger>
                  <TabsTrigger value="key">
                    Key Personnel
                    <Badge variant="secondary" className="ml-1.5 h-4 min-w-4 px-1 text-xs">2</Badge>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              {/* Toolbar buttons — Figma default = our lg (32px) */}
              <div className="flex items-center gap-2">
                <Button variant="outline" size="default" className="gap-2">
                  <ColumnsIcon className="size-4" />
                  Customize Columns
                </Button>
                <Button size="default" className="gap-2">
                  <PlusIcon className="size-4" />
                  Add Section
                </Button>
              </div>
            </div>

            {/* Draggable table */}
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-8" />
                    <TableHead className="w-8">
                      <Checkbox />
                    </TableHead>
                    <TableHead>Header</TableHead>
                    <TableHead>Section Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Target</TableHead>
                    <TableHead>Limit</TableHead>
                    <TableHead>Reviewer</TableHead>
                    <TableHead className="w-8" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                  >
                    <SortableContext items={rows} strategy={verticalListSortingStrategy}>
                      {rows.map(row => (
                        <SortableRow key={row.id} row={row} />
                      ))}
                    </SortableContext>
                  </DndContext>
                </TableBody>
              </Table>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-1 pt-3 text-sm text-muted-foreground">
              <span>0 of 68 row(s) selected.</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span>Rows per page</span>
                  <Select defaultValue="10">
                    <SelectTrigger className="h-8 w-16 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <span className="whitespace-nowrap">Page 1 of 7</span>
                {/* Pagination — Figma icon (32×32) = our icon-lg */}
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="icon" disabled>
                    <ChevronsLeftIcon className="size-4" />
                  </Button>
                  <Button variant="outline" size="icon" disabled>
                    <ChevronLeftIcon className="size-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRightIcon className="size-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronsRightIcon className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
