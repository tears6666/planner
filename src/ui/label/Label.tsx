import type { LabelProps } from '../../app/@types/types'

export const Label = ({title, htmlFor}:LabelProps) =>{
  return <label style={{color: 'blueviolet', fontSize: '20px'}} htmlFor={htmlFor}>{title}</label>
}