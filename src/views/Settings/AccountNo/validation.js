import * as Yup from 'yup'

export default Yup.object().shape({
  number: Yup.string()
    .required()
    .matches(/^\d{1,6}$/),
  name: Yup.string().required(),
  type: Yup.string().required()
})
