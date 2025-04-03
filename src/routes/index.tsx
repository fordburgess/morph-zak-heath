import { createFileRoute } from '@tanstack/react-router'
import IndexView from '../features/index/indexView'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <IndexView />
}
