// react
import React from "react";

// formik
import { FieldProps, getIn } from "formik";

const TextArea: React.FC<
  FieldProps & { label: string; required?: boolean; type?: string }
> = ({ field, form, label, required, type, ...props }) => {
  const error =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <div className="flex flex-col gap-1 justify-start items-start">
      <textarea
        className={`w-full border-2 ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-lg px-4 py-2 text-lg`}
        placeholder={label}
        required={required}
        {...field}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default TextArea;
