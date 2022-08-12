import React from 'react';
import { InputProps } from 'reactstrap';

export interface FormInputProps extends InputProps {
  label?: string;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({ label, required }) => {
  return <></>;
};

export default FormInput;
