import {
  MoreHorizontal,
  Pencil,
  Circle,
  Video,
  VideoOff,
  FileText,
  CalendarDays,
  MessageCircle,
  SmilePlus,
} from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function MainContent() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      {/* Top Bar */}
      <div className="flex h-12 items-center justify-between px-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-px">
            <Button variant="ghost" size="sm" className="gap-1.5 px-2">
              <Avatar className="size-4">
                <AvatarFallback className="bg-muted text-[8px]">T</AvatarFallback>
              </Avatar>
              <span className="text-[13px] font-medium">Trend Micro</span>
            </Button>
            <Button variant="ghost" size="icon-sm">
              <MoreHorizontal className="size-4" />
            </Button>
          </div>
          <Tabs defaultValue="overview">
            <TabsList className="h-7 bg-transparent p-0">
              <TabsTrigger value="overview" className="h-7 rounded-md px-2 text-[13px] data-[state=active]:bg-accent">Overview</TabsTrigger>
              <TabsTrigger value="updates" className="h-7 rounded-md px-2 text-[13px] data-[state=active]:bg-accent">Updates</TabsTrigger>
              <TabsTrigger value="activity" className="h-7 rounded-md px-2 text-[13px] data-[state=active]:bg-accent">Activity</TabsTrigger>
              <TabsTrigger value="related" className="h-7 rounded-md px-2 text-[13px] data-[state=active]:bg-accent">Related</TabsTrigger>
              <TabsTrigger value="pins" className="h-7 rounded-md px-2 text-[13px] data-[state=active]:bg-accent">Pins</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex items-center gap-0.5">
          <Button variant="ghost" size="icon-sm"><Pencil className="size-4" /></Button>
          <Button variant="ghost" size="icon-sm"><MoreHorizontal className="size-4" /></Button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-[680px] px-4 py-6">
          {/* Company Header */}
          <div className="mb-2">
            <div className="flex items-center gap-3 px-2">
              <Avatar className="size-7">
                <AvatarFallback className="bg-muted text-xs font-semibold">T</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold tracking-tight text-foreground">Trend Micro</h1>
            </div>
            <div className="mt-3 px-4">
              <p className="text-sm text-muted-foreground">Add a summary...</p>
            </div>
          </div>

          {/* Open Tasks */}
          <Section title="Open tasks" actionLabel="See all" extraAction={
            <Button variant="ghost" size="xs" className="text-muted-foreground">
              <span className="text-xs">+ Assigned to me</span>
            </Button>
          }>
            <div className="flex flex-col">
              <TaskRow
                icon={<Circle className="size-4 fill-destructive/20 text-destructive" />}
                label="Configure customer procurement strategy"
                avatar="DH"
                avatarColor="bg-amber-500"
              />
              <TaskRow
                icon={<Circle className="size-4 text-muted-foreground" />}
                label="Schedule 1:1 with Ashley"
                avatar="AK"
                avatarColor="bg-emerald-500"
              />
              <TaskRow
                icon={<Circle className="size-4 text-muted-foreground" />}
                label="Send updated agreement to Sales Department"
                avatar="SM"
                avatarColor="bg-orange-400"
              />
            </div>
          </Section>

          {/* Upcoming Meetings */}
          <Section title="Upcoming meetings" actionLabel="See all">
            <div className="flex flex-col">
              <MeetingRow
                title="Fredrik <> Jonatan (Q4 Renewal Session)"
                date="Feb 18"
                hasRecording={false}
              />
              <MeetingRow
                title="Acme Corp Introduction Call"
                date="Feb 22"
                hasRecording
              />
            </div>
          </Section>

          {/* Latest Update */}
          <Section title="Latest update" actionLabel="See all">
            <div className="rounded-lg border border-border bg-background p-4">
              <div className="mb-3">
                <Badge variant="outline" className="border-amber-300 bg-amber-50 text-amber-700 text-xs">Decision</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Avatar className="size-5">
                  <AvatarFallback className="bg-foreground text-background text-[8px]">DH</AvatarFallback>
                </Avatar>
                <span className="font-medium text-foreground">Daniel Henriksson</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground">Today at 14:40</span>
              </div>
              <p className="mt-2 text-sm text-foreground">
                Customer procurement approved revised pricing and requested updated contract.
              </p>
              <Separator className="my-3" />
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="xs" className="gap-1.5 text-muted-foreground">
                  <MessageCircle className="size-3.5" />
                  <span className="text-xs">8 replies</span>
                </Button>
                <Button variant="ghost" size="icon-xs">
                  <SmilePlus className="size-3.5 text-muted-foreground" />
                </Button>
              </div>
            </div>
          </Section>

          {/* Recent Activity */}
          <Section title="Recent activity" actionLabel="See all">
            <div className="flex flex-col">
              <ActivityRow
                icon={<Avatar className="size-4"><AvatarFallback className="bg-foreground text-background text-[7px]">D</AvatarFallback></Avatar>}
                text="Daniel changed contract term to 36 months"
                time="Just now"
              />
              <ActivityRow
                icon={<FileText className="size-4 text-muted-foreground" />}
                text="Contract value recalculated after Sofia updated renewal value"
                time="20m ago"
              />
              <ActivityRow
                icon={<Avatar className="size-4"><AvatarFallback className="bg-foreground text-background text-[7px]">S</AvatarFallback></Avatar>}
                text={<>Sofia updated renewal value from 420k <span className="text-muted-foreground">&rarr;</span> 480k</>}
                time="20m ago"
              />
              <ActivityRow
                icon={<CalendarDays className="size-4 text-muted-foreground" />}
                text="Renewal value updated after discount approval by Sofia"
                time="6d ago"
              />
              <ActivityRow
                icon={<FileText className="size-4 text-muted-foreground" />}
                text="Contract terms updated to reflect new agreement period"
                time="6d ago"
              />
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}

function Section({
  title,
  actionLabel,
  extraAction,
  children,
}: {
  title: string
  actionLabel?: string
  extraAction?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="mt-2">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <h2 className="text-[15px] font-medium text-foreground">{title}</h2>
          {extraAction}
        </div>
        {actionLabel && (
          <Button variant="ghost" size="xs" className="text-xs text-muted-foreground">
            {actionLabel}
          </Button>
        )}
      </div>
      <div className="px-4">{children}</div>
    </div>
  )
}

function TaskRow({
  icon,
  label,
  avatar,
  avatarColor,
}: {
  icon: React.ReactNode
  label: string
  avatar: string
  avatarColor: string
}) {
  return (
    <div className="flex h-8 items-center justify-between rounded-md px-2 hover:bg-accent">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-sm text-foreground">{label}</span>
      </div>
      <Avatar className="size-3.5">
        <AvatarFallback className={`${avatarColor} text-[6px] text-white`}>{avatar}</AvatarFallback>
      </Avatar>
    </div>
  )
}

function MeetingRow({
  title,
  date,
  hasRecording,
}: {
  title: string
  date: string
  hasRecording: boolean
}) {
  return (
    <div className="flex h-8 items-center justify-between rounded-md px-2 hover:bg-accent">
      <div className="flex items-center gap-2">
        <div className="flex h-4 w-[3px] items-center">
          <div className="h-full w-[3px] rounded-full bg-primary" />
        </div>
        <span className="text-sm text-foreground">{title}</span>
        {hasRecording ? (
          <Video className="size-4 text-muted-foreground" />
        ) : (
          <VideoOff className="size-4 text-muted-foreground" />
        )}
      </div>
      <span className="text-xs text-muted-foreground">{date}</span>
    </div>
  )
}

function ActivityRow({
  icon,
  text,
  time,
}: {
  icon: React.ReactNode
  text: React.ReactNode
  time: string
}) {
  return (
    <div className="flex items-center gap-3 py-[5px]">
      <div className="flex flex-col items-center">
        {icon}
      </div>
      <div className="flex flex-1 items-baseline gap-1.5 text-sm">
        <span className="text-foreground">{text}</span>
        <span className="text-muted-foreground">·</span>
        <span className="shrink-0 text-xs text-muted-foreground">{time}</span>
      </div>
    </div>
  )
}
