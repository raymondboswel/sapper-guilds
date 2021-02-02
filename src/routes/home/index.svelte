
<!-- <script context="module">
	export async function preload(page, session) {
    // let { token } = session;
    // console.log("token", token);
		// if (!token) {
		//     return this.redirect(302, '/login');
		// }
	}
</script> -->

<script>
    import { stores } from '@sapper/app';
   
    import { authStore } from './stores/auth-store';
    // 
    // const { preloading, page, session } = stores();
    // let token;
    // const unsubscribe= session.subscribe(sesh => {
    //   token = sesh.token;
    // })
    let token
    authStore.subscribe(t => {
      console.log("Got token value", t);
      token = t;
      })
</script>
<div>
  <h1>Home: {token}</h1>

</div>