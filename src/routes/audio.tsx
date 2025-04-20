import { createFileRoute } from '@tanstack/react-router'
import AudioIndexView from '../features/audio/audioIndex'

export const Route = createFileRoute('/audio')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AudioIndexView />
}
