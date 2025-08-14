const GenderCheckbox = () => {
    return (
        <div className="flex py-1">
            <div className='form-control p-1'>
                <label className="label gap-1 cursor-pointer">
                    <input type='checkbox' className='checkbox checkbox-primary border-slate-400'></input>
                    <span className='label-text'>Male</span>

                </label>
            </div>

            <div className='form-control p-1'>
                <label className="label gap-1 cursor-pointer mx-3">
                    <input type='checkbox' className='checkbox checkbox-primary border-slate-400'></input>
                    <span className='label-text'>Female</span>

                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox
