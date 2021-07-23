import { TError } from 'store/modules/errors/types'

export const convert = (error: string) => {
  switch (error) {
    case 'Invalid credentials':
      return 'Введен неправильный email или пароль'
    case 'Validation Error':
      return 'Validation Error'
    case 'Users email already registered in system':
      return 'Пользователь с такой электронной почтой уже зарегистрирован'
    case 'Internal Server Error':
      return 'Что то пошло не так...'
    case 'Unauthorized':
      return 'Пользователь не авторизован'
    case 'User not found':
      return 'Пользователь с таким email не зарегистрирован'
    default:
      return error
  }
}

export const convertErrorsMessages = (errorObj: TError) => {
  let str = ''
  if (errorObj.message && errorObj.message.length !== 0) {
    errorObj.message.forEach((m) => {
      switch (m) {
        case 'email must be an email':
          m = 'Введен некорректный email'
      }
      str += `${m}. `
    })
    return str
  }

  if (!errorObj.message) {
    return convert(errorObj.error)
  }
}
