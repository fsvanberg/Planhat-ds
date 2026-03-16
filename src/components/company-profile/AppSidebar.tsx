import {
  Home,
  MessageSquare,
  Calendar,
  BarChart3,
  MoreHorizontal,
  Search,
  Settings,
  ClipboardList,
  Star,
  FolderOpen,
  TrendingUp,
  Target,
  Pencil,
  FileText,
  ChevronRight,
  ChevronDown,
} from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function AppSidebar() {
  return (
    <div className="flex h-full">
      {/* Icon Rail */}
      <div className="flex w-12 flex-col items-center justify-between border-r border-border bg-background py-3">
        <div className="flex flex-col items-center gap-1.5">
          <Avatar className="size-6 text-[10px]">
            <AvatarFallback className="bg-primary text-primary-foreground text-[10px]">P</AvatarFallback>
          </Avatar>
          <Button variant="ghost" size="icon-xs"><Home className="size-4" /></Button>
          <Button variant="ghost" size="icon-xs"><MessageSquare className="size-4" /></Button>
          <Button variant="ghost" size="icon-xs"><Calendar className="size-4" /></Button>
          <Separator className="my-1 w-4" />
          <Button variant="ghost" size="icon-xs"><BarChart3 className="size-4" /></Button>
          <Button variant="ghost" size="icon-xs"><MoreHorizontal className="size-4" /></Button>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <Button variant="ghost" size="icon-xs"><Search className="size-4" /></Button>
          <Button variant="ghost" size="icon-xs"><Settings className="size-4" /></Button>
          <Avatar className="size-4 text-[8px]">
            <AvatarFallback className="bg-primary text-primary-foreground text-[8px]">F</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Menu Panel */}
      <div className="flex w-[250px] flex-col border-r border-border bg-background">
        {/* Header */}
        <div className="flex h-12 items-center px-3">
          <span className="text-sm font-medium text-foreground">Planhat demo</span>
          <ChevronDown className="ml-1 size-3 text-muted-foreground" />
          <div className="flex-1" />
          <Button variant="ghost" size="icon-xs"><ClipboardList className="size-4" /></Button>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-0.5 px-3">
          <SidebarItem icon={<MessageSquare className="size-4" />} label="New chat" />
          <SidebarItem icon={<Calendar className="size-4" />} label="Calendar" />
          <SidebarItem icon={<BarChart3 className="size-4" />} label="Data explorer" active />
          <SidebarItem icon={<MoreHorizontal className="size-4" />} label="More" />
        </div>

        <div className="mt-4 flex flex-col gap-0.5 px-3">
          <SectionTitle>Favorites</SectionTitle>
          <SidebarItem icon={<BarChart3 className="size-4" />} label="Design Sprints" />
          <SidebarItem icon={<Calendar className="size-4" />} label="Upcoming" />
          <SidebarItem icon={<Target className="size-4" />} label="Meeting tracker" />
          <SidebarItem icon={<Pencil className="size-4" />} label="Meeting notes" />
        </div>

        <div className="mt-4 flex flex-col gap-0.5 px-3">
          <SectionTitle>Sections</SectionTitle>
          <SidebarItem
            icon={<span className="size-2 rounded-full bg-violet-500" />}
            label="Private"
            trailing={<ChevronRight className="size-3 text-muted-foreground" />}
          />
          <SidebarItem
            icon={<span className="size-2 rounded-full bg-pink-500" />}
            label="Management"
            trailing={<ChevronDown className="size-3 text-muted-foreground" />}
          />
          <SidebarItem icon={<ClipboardList className="size-4" />} label="Team weekly" indent />
          <SidebarItem icon={<FolderOpen className="size-4" />} label="Upcoming projects" />
          <SidebarItem icon={<Star className="size-4" />} label="North star" />
          <SidebarItem icon={<TrendingUp className="size-4" />} label="P2 Usage" />
        </div>

        <div className="mt-4 flex flex-col gap-0.5 px-3">
          <SectionTitle>
            Key segments <ChevronRight className="ml-1 inline size-3" />
          </SectionTitle>
          <SectionTitle>
            Inbound <ChevronRight className="ml-1 inline size-3" />
          </SectionTitle>
        </div>

        <div className="mt-4 flex flex-col gap-0.5 px-3">
          <SectionTitle>Recent</SectionTitle>
          {[1, 2, 3, 4].map((i) => (
            <SidebarItem key={i} icon={<FileText className="size-4" />} label="Example" />
          ))}
        </div>
      </div>
    </div>
  )
}

function SidebarItem({
  icon,
  label,
  active,
  indent,
  trailing,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
  indent?: boolean
  trailing?: React.ReactNode
}) {
  return (
    <button
      className={`flex h-7 items-center gap-2 rounded-md px-2 text-[13px] font-medium transition-colors ${
        indent ? 'ml-4' : ''
      } ${
        active
          ? 'bg-accent text-accent-foreground'
          : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
      }`}
    >
      <span className="flex size-4 items-center justify-center">{icon}</span>
      <span className="flex-1 truncate text-left">{label}</span>
      {trailing}
    </button>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center px-2 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
      {children}
    </div>
  )
}
