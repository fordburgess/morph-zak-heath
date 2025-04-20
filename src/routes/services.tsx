import { createFileRoute } from '@tanstack/react-router'
import ServicesView from '../features/services/servicesIndex'

export const Route = createFileRoute('/services')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ServicesView />
}
