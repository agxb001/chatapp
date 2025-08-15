const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div className="flex py-1">
            <div className='form-control p-1'>
                <label className="label gap-1 cursor-pointer">
                    <input type='checkbox' className='checkbox checkbox-primary h-4 w-4 border-slate-400'
                        checked={selectedGender === "male"}
                        onChange={() => onCheckboxChange("male")}
                    />
                    <span className='label-text'>Male</span>

                </label>
            </div>

            <div className='form-control p-1'>
                <label className="label gap-1 cursor-pointer mx-3">
                    <input type='checkbox' className='checkbox checkbox-primary h-4 w-4 border-slate-400'
                        checked={selectedGender === "female"}
                        onChange={() => onCheckboxChange("female")}
                    />
                    <span className='label-text'>Female</span>

                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox
