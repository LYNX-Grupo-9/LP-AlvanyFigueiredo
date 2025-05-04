export function SchedulingInput({ label, placeholder, type = "text", icon: Icon, ...props }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-white text-sm font-medium ml-4">{label}</label>
      <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
        <input
          {...props}
          type={type}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-black placeholder-gray-400 text-sm"
        />
        {Icon && <Icon className="text-gray-400 ml-2" size={20} />}
      </div>
    </div>
  );

}