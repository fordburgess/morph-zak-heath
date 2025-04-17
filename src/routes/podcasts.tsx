import { createFileRoute } from '@tanstack/react-router'
import PodcastIndexView from '../features/podcasts/podcastIndex'

export const Route = createFileRoute('/podcasts')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PodcastIndexView />
}
