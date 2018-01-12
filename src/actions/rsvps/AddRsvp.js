export const ADD_RSVP = 'ADD_RSVP'

export default (rsvpId) => {
  return {
    type: ADD_RSVP,
    payload: rsvpId
  }
}
