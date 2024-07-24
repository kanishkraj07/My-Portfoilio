const DetailsBox = ({name, icon}) => {

    return (
        <div className="flex flex-col place-items-center border border-[#1f1f1f] p-7 gap-3 max-w-30 max-h-40 rounded-md hover:border-slate-300">
            <img className='w-full h-full size-10 object-cover max-h-10 max-w-10' src={icon}></img>
            <div className='text-base text-white font-primaryRegular'>{name}</div>
        </div>
    )
}

export default DetailsBox;