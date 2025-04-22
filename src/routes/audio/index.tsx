import { createFileRoute, Outlet } from '@tanstack/react-router'
import AudioIndexView from '../../features/audio/audioIndex'

export const Route = createFileRoute('/audio/')({
  component: AudioLanding,
})

function AudioLanding() {
  return <AudioIndexView><Outlet /></AudioIndexView>
}
