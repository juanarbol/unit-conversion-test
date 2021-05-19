export type TempetureTypes = 'F' | 'C'

export function temperuteConversion (temperature: number, desiredUnit: TempetureTypes): string {
  let answer = 0;

  switch (desiredUnit) {
    case 'C':
      answer = (temperature - 32) * (5/9)
      break;
    case 'F':
      answer =  (9/5 * temperature) + 32
      break;
    default:
      throw new Error('Provide a valid type, don\'t be like that with us!')
  }

  return `${answer}${desiredUnit}°`
}

export function doesNotConversion(): string {
  return 'Noop'
}
