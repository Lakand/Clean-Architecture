import { Email } from './email'

describe('Email validation', () => {
  test('should not accept null strings', () => {
    const email = null
    expect(Email.validade(email)).toBeFalsy()
  })

  test('should not accept empty strings', () => {
    const email = ''
    expect(Email.validade(email)).toBeFalsy()
  })

  test('should accept valid email', () => {
    const email = 'any@mail.com'
    expect(Email.validade(email)).toBeTruthy()
  })
})
