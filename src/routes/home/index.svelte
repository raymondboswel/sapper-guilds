
<script context="module">
	export async function preload(page, session) {
		let { token } = session;
		if (!token) {
		    return this.redirect(302, '/login');
		}
	}
</script>

<script>
    import { stores } from '@sapper/app';
    const { preloading, page, session } = stores();
    let token;
    const unsubscribe= session.subscribe(sesh => {
      token = sesh.token;
    })
</script>
<div>
  <h1>Home</h1>
  {token}
</div>