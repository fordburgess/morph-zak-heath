import { createFileRoute } from '@tanstack/react-router'
import LisaEldridgeView from '../features/articles/lisaEldridgeView'

export const Route = createFileRoute('/lisa-eldridge')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LisaEldridgeView />
}
