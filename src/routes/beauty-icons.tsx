import { createFileRoute } from '@tanstack/react-router'
import BeautyIndexView from '../features/beauty/beautyIndex'

export const Route = createFileRoute('/beauty-icons')({
  component: RouteComponent,
})

function RouteComponent() {
  return <BeautyIndexView />
}
