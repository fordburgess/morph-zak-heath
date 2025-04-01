import { createFileRoute } from '@tanstack/react-router'
import TestView from '../features/test/testView'

export const Route = createFileRoute('/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TestView />
}
