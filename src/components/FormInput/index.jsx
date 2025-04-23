export function FormInput({ label = "Nome", placeholder = "Digite seu nome..." ,...props}) {
    return (
        <div className="">
            <label 
                htmlFor="input" 
                className="block text-white text-sm font-medium mb-1"
            >
                {label}
            </label>
            <input 
                {...props}
                type="text" 
                id="input" 
                placeholder={placeholder}
                className="w-full px-3 py-1 border-4 border-[var(--golden-yellow)] rounded focus:outline-none focus:border-[var(--accent-yellow)] bg-white transition duration-200"
            />
        </div>
    );
}