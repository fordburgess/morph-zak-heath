import { createFileRoute } from '@tanstack/react-router'
import FeaturedView from '../features/featured/featuredView'

export const Route = createFileRoute('/featured')({
  component: RouteComponent,
})

function RouteComponent() {
  return <FeaturedView />
}
