export const decorateSkills = (skills) => {
  return strToArray(skills).join(' • ')
}

export const strToArray = (str) => {
  return (str || '').split(',').map(i => i.trim())
}