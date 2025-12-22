type titleProps = {
    title:string
}

const AuthFormHeading = ({title}:titleProps) => {
  return (
    <>
      <h2 className="font-georgia text-secondry text-[32px] text-center">{title}</h2>
    </>
  )
}

export default AuthFormHeading
