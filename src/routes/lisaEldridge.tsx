import { createFileRoute } from '@tanstack/react-router'
import LisaEldridgeView from '../features/articles/lisaEldridgeView'

export const Route = createFileRoute('/lisaEldridge')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LisaEldridgeView />
}
