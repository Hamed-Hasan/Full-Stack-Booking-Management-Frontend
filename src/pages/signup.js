import Link from "next/link";
import Signup from "@/images/auth/signup.png"
import Image from "next/image";
function SignUpPage() {
  return (
    <>
      <section className="contact-page flex items-center justify-center h-screen ">
        <div className="container contact-container">
          <div className="contact-div mt-12">
            <div className="contact-div__text">
                <Image src={Signup} width={600} height={600} alt="Login"/>
            </div>
            <div className="contact-div__form">
              <form>
              <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Password <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"'></input>
                <div className="flex items-center justify-between py-3 ">
                  <Link className="font-bold text-xl text-slate-400" href="/signin">Remember Me</Link>
                  <Link className="font-bold text-xl text-slate-400" href="/">Forget Password</Link>
                </div>
                
                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; 
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
     
      </section>
    </>
  );
}

export default SignUpPage;
