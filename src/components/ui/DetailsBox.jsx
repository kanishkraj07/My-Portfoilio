const DetailsBox = ({name, icon}) => {

    return (
        <div className="flex flex-col place-items-center border border-[#1f1f1f] p-7 gap-3 rounded-md hover:border-slate-300">
            <img className='w-full h-full size-8 object-cover max-h-8 max-w-8' src={icon}></img>
            <div className='text-base text-white font-primaryRegular'>{name}</div>
        </div>
    )
}

export default DetailsBox;