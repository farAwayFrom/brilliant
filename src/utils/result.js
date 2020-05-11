export default {
  success: (data) => {
    return {
      'code': 200,
      'message': 'success',
      data,
      success: 1
    }
  },
  error: (msg, code) => {
    return {
      code,
      'message': msg
    }
  }
}
