
<!-- <script context="module">
	export async function preload(page, session) {
    // let { token } = session;
    // console.log("token", token);
		// if (!token) {
		//     return this.redirect(302, '/login');
		// }
	}
</script> -->

<script context="module">
  export async function preload(page, session) {
    console.log(session);
    const { token } = session;

    if (!token) {
      return this.redirect(302, "login");
    }

    const response = await this.fetch(`http://localhost:4100/api/organizations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    const parsed = await response.json();

    if (parsed.error) {
      return this.error(response.status, parsed.error);
    }

    console.log(parsed);

    return { organizations: parsed.data };
  }
</script>

<script>
    
    export let organizations = [];
    // 
    // const { preloading, page, session } = stores();
    // let token;
    // const unsubscribe= session.subscribe(sesh => {
    //   token = sesh.token;
    // })
    // let token
    // authStore.subscribe(t => {
    //   console.log("Got token value", t);
    //   token = t;
    //   })
    
</script>
<div>
  <h1>Home:</h1>
  <ul>
    {#each organizations as org}
    <li>{org.name}</li>
    {/each}
  </ul>
</div>