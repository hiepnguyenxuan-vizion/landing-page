import { FieldProps } from 'formik';
import React from 'react';
import PhoneInput, { CountryData } from 'react-phone-input-2';

export interface PhoneInputCustomProps extends FieldProps {}

const PhoneInputCustom: React.FC<PhoneInputCustomProps> = ({
  field: { onChange, name },
  form: { errors },
}) => {
  // methods
  const handleChange = (
    value: string,
    data: {} | CountryData,
    evt: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange && onChange(evt);
  };

  return (
    <>
      <PhoneInput
        specialLabel=""
        inputClass="vz-contact--input"
        placeholder=""
        onChange={handleChange}
      />
      <div className="text-vz-red">{errors?.[name]}</div>
    </>
  );
};

export default PhoneInputCustom;
