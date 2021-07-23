export type TError = {
  apiVersion: string
  error: string
  requestId: string
  statusCode: number
  success: boolean
  timestamp: string
  message?: string[]
}

export type TErrorState = {
  errorObj: TError | null
}
