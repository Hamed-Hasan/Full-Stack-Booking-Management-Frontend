import Link from "next/link";
import Login from "@/images/auth/login.png"
import Image from "next/image";
function LoginPage() {
  return (
    <>
      <section className="contact-page flex items-center justify-center h-screen ">
        <div className="container contact-container">
          <div className="contact-div mt-12">
            <div className="contact-div__text">
                <Image src={Login} width={600} height={600} alt="Login"/>
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
                  <Link className="font-bold text-xl text-slate-400" href="/signup">Create New Account</Link>
                  <Link className="font-bold text-xl text-slate-400" href="/">Forget Password</Link>
                </div>
                
                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; 
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
     
      </section>
    </>
  );
}

export default LoginPage;
