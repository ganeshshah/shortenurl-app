import Header from "./component/Header";
import SignUp from "./component/SignUp";

export default function SignupPage(){
    return(
        <>
        <div class="w-2/6 m-auto mt-24 border border-invisible p-4 rounded-lg shadow-2xl">
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <SignUp/>
            </div>
        </>
    )
}