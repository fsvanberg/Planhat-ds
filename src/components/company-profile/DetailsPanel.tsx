import { ChevronDown, Video, VideoOff } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function DetailsPanel() {
  return (
    <div className="flex w-[400px] flex-col border-l border-border bg-secondary/30">
      {/* Company Details */}
      <div className="px-3 pt-px pb-3">
        <DetailsSectionHeader title="Company details" collapsible />
        <div className="flex flex-col">
          <FieldRow label="Name" value="Acme Corp" />
          <FieldRow label="Phase" value="Set phase" placeholder />
          <FieldRow label="Industry" value={
            <div className="flex gap-1.5">
              <Badge variant="outline" className="border-amber-300 bg-amber-50 text-amber-700 text-xs h-5">Software</Badge>
              <Badge variant="outline" className="border-sky-300 bg-sky-50 text-sky-700 text-xs h-5">Engineering</Badge>
            </div>
          } />
          <FieldRow label="Employees" value="251-500" />
          <FieldRow label="Website" value="acmecorp.com" />
          <FieldRow label="Last touch" value="20m ago" />
        </div>
        <Button variant="ghost" size="xs" className="mt-1 gap-1 text-xs text-muted-foreground">
          See more <ChevronDown className="size-3" />
        </Button>
      </div>

      <Separator />

      {/* Workflows */}
      <div className="px-3 py-1">
        <DetailsSectionHeader title="Workflows" actionLabel="See all" />
        <p className="px-2 py-1 text-sm text-muted-foreground">No workflows</p>
      </div>

      <Separator />

      {/* Notes */}
      <div className="px-3 py-1">
        <DetailsSectionHeader title="Notes" actionLabel="See all" />
        <p className="px-2 py-1 text-sm text-muted-foreground">No notes</p>
      </div>

      <Separator />

      {/* Meetings */}
      <div className="px-3 py-1">
        <DetailsSectionHeader title="Meetings" actionLabel="See all" />
        <div className="flex flex-col">
          <DetailsMeetingRow
            title="Fredrik <> Jonatan (Q4 Renewal)"
            date="Feb 18"
            hasRecording={false}
          />
          <DetailsMeetingRow
            title="Acme <> Planhat Intro"
            date="Mar 10"
            hasRecording={false}
          />
          <DetailsMeetingRow
            title="Acme Corp Introduction Call"
            date="Feb 22"
            hasRecording
          />
        </div>
      </div>
    </div>
  )
}

function DetailsSectionHeader({
  title,
  actionLabel,
  collapsible,
}: {
  title: string
  actionLabel?: string
  collapsible?: boolean
}) {
  return (
    <div className="flex h-12 items-center justify-between">
      <h3 className="text-[15px] font-medium text-foreground">{title}</h3>
      <div className="flex items-center gap-1">
        {actionLabel && (
          <Button variant="ghost" size="xs" className="text-xs text-muted-foreground">
            {actionLabel}
          </Button>
        )}
        {collapsible && (
          <Button variant="ghost" size="icon-xs">
            <ChevronDown className="size-3 text-muted-foreground" />
          </Button>
        )}
      </div>
    </div>
  )
}

function FieldRow({
  label,
  value,
  placeholder,
}: {
  label: string
  value: React.ReactNode
  placeholder?: boolean
}) {
  return (
    <div className="grid h-8 grid-cols-[1fr_2fr] items-center rounded-md px-2">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <span className={`text-sm ${placeholder ? 'text-muted-foreground' : 'text-foreground'}`}>
        {value}
      </span>
    </div>
  )
}

function DetailsMeetingRow({
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
