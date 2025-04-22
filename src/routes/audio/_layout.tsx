import { createFileRoute, Outlet } from '@tanstack/react-router'
import AudioIndexView from '../../features/audio/audioIndex'

export const Route = createFileRoute('/audio/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AudioIndexView><Outlet /></AudioIndexView>
}
