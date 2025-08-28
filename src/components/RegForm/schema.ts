import * as yup from 'yup'

const redExpEmail = new RegExp(/^\S+@\S+\.\S+$/)
export const schema = yup.object().shape({
  email: yup.string().trim().required('Email is required').matches(redExpEmail, 'Not Avaible'),
  password: yup.string().trim().required('Password is required').min(6)
})