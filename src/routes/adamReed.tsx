import { createFileRoute } from '@tanstack/react-router'
import AdamReedView from '../features/articles/adamReedView'

export const Route = createFileRoute('/adamReed')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AdamReedView />
}
