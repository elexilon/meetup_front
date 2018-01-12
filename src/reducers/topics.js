import { UPDATE_TOPICS } from '../actions/topics/UpdateTopics'

const topics = [
    {
      topic: '11111111',
      count: 4,
    },
    {
      topic: '22222222',
      count: 3,
    },
    {
      topic: '33333333',
      count: 2,
    },
    {
      topic: '44444444',
      count: 1,
    },
  ]

export default function (state = topics, { type, payload } = {}) {
	switch (type) {
    case UPDATE_TOPICS:
      return state
      // return state.map((player) => {
      //   if (player.id !== action.payload) return player
      //   return { ...player, score: player.score+1 }
      // })
    default:
      return state
	}
}
