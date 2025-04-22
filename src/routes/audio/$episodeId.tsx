import { createFileRoute } from '@tanstack/react-router'
import EpisodeView from '../../features/audio/episodeView'

export const Route = createFileRoute('/audio/$episodeId')({
  component: EpisodeView,
})
