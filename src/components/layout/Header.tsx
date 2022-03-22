import { signOut } from "firebase/auth";
import Head from "next/head";
import Link from "next/link";
import { ReactNode, VFC } from "react";
import { auth } from "../../firebase/firebaseConfig";
// import { useAuthState } from "react-firebase-hooks/auth";

type Props = {
  children: ReactNode;
  title?: string;
};

export const Header: VFC<Props> = ({ title, children }) => {
  // const [user] = useAuthState(auth);

  return (
    <>
      <Head>{title}</Head>
      <div className="flex justify-center text-white bg-primary-blue">
        <div className="flex justify-between items-center w-3/4 h-20">
          <Link href="/home">
            <a className="text-3xl cursor-pointer">My best book</a>
          </Link>
          <Link href="/login">
            <a className="text-3xl cursor-pointer">LogIn</a>
          </Link>
          <Link href="/signup">
            <a className="text-3xl cursor-pointer">SignUp</a>
          </Link>
          <button onClick={() => signOut(auth)}>LogOut</button>

          {/* {user ? (
            <div>
              <Link href="/signin">
                <a>
                  <img
                    src={auth.currentUser.photoURL}
                    alt="UserIcon"
                    className="rounded-full w-9 ring-1 ring-orange-500 "
                  />
                </a>
              </Link>
            </div>
          ) : (
            <></>
          )} */}
        </div>
      </div>
      <main>{children}</main>
    </>
  );
};
