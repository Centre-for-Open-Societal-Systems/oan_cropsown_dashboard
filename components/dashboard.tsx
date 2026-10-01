"use client"

// The page body: the shared shell around this registry's view.
// One of the files that differ between the per-registry dashboard repos.
import { DashboardShell } from "@/components/dashboard-shell"
import { CropSownDashboard } from "@/components/crop-sown-dashboard"

export function Dashboard() {
  return (
    <DashboardShell>
      {(filters, onMapFilterChange) => <CropSownDashboard filters={filters} onMapFilterChange={onMapFilterChange} />}
    </DashboardShell>
  )
}
