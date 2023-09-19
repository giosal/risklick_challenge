import Layout from './components/layout'
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LoginPage( {username} ) {
    const router = useRouter()
    const { msg } = router.query
    return (
        <Layout pageTitle="Login">
            <Link href="/blog">Blog</Link><br/>
            {msg ?
                <h3 className="red">{msg}</h3>
                :
                <></>
            }
            <h2>Log in</h2>
            <form action='/login/login' method='POST'>
                <input minLength="3" name="username" id="username" type="text" placeholder='username' required></input><br/>
                <input minLength="5" name="password" id="password" type="password" placeholder='password' required></input><br/>
                <input type="submit" value="Login"/>
            </form>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    const username = getCookie('username', {req, res});
    if (username !== undefined){
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    return { props: {username:false} };
}
