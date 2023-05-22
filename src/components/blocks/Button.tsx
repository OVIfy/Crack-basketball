type prop = {
    children : string
    className? : string
    inactive?
}
const Button = ({children, className, inactive}: prop) => {
  return (
    <button className={`button transition-colors hover:cursor-default text-[#333333]  uppercase px-6 py-4 lg:px-8 lg:py-5 bg-white font-bold tracking-[5px] text-[10px] ${className} ${!inactive && 'hover:bg-[#333333] hover:text-white border-[1px] hover:border-white  focus:bg-neutral-color hover:cursor-pointer mouse-change'}`}>{children}</button>
  )
}

export default Button