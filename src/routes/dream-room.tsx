import { createFileRoute } from '@tanstack/react-router'
import DreamRoomView from '../features/dreamRoom/dreamRoomIndex'

export const Route = createFileRoute('/dream-room')({
  component: RouteComponent,
})

function RouteComponent() {
  return <DreamRoomView />
}
