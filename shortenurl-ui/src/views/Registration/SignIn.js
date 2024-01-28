
import Login from "./component/Login"
import Header from "./component/Header"

export default function SignIn(){
    return(
        <>
            <div className="w-2/6 m-auto mt-24 border border-invisible p-4 rounded-lg shadow-2xl">
            <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
            <Login/>
            </div>
        </>
    )
}