import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export function SchedulingInput({
  label,
  placeholder,
  type = "text",
  icon: Icon,
  isSelect = false,
  isPhone = false,
  options = [],
  ...props
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-white text-sm font-medium ml-4">{label}</label>
      <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
        {isSelect ? (
          <select
            {...props}
            className="flex-1 bg-transparent outline-none text-black placeholder-gray-400 text-sm"
          >
            <option value="" disabled selected hidden>{placeholder}</option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : isPhone ? (
          <PhoneInput
            country={'br'}
            inputProps={{
              name: 'phone',
              required: true,
              placeholder: placeholder
            }}
            inputStyle={{
              width: '100%',
              borderRadius: '9999px',
              border: 'none'
            }}
            buttonStyle={{
              border: 'none',
              background: 'transparent',
              borderRadius: '9999px',
              marginLeft: '0.25rem'
            }}
            containerStyle={{ flex: 1, }}
            {...props}
          />
        ) : (
          <input
            {...props}
            type={type}
            placeholder={placeholder}
            className="flex-1 bg-transparent outline-none text-black placeholder-gray-400 text-sm"
          />
        )}
        {Icon && <Icon className="text-gray-400 ml-2" size={20} />}
      </div>
    </div>
  );
}