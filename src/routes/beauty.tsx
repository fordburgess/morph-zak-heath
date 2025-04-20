import { createFileRoute } from '@tanstack/react-router'
import BeautyIndexView from '../features/beauty/beauty'

export const Route = createFileRoute('/beauty')({
  component: RouteComponent,
})

function RouteComponent() {
  return <BeautyIndexView />
}
