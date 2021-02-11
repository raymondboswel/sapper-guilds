<script context="module">
  export async function preload(page, session) {
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

    return { organizations: parsed.data };
  }
</script>

<script>
    import List, { Item, Text} from '@smui/list';
    import Card from "@smui/card";
    import { goto } from '@sapper/app';

    export let organizations = [];

    function gotoOrganization(organization) {
      goto(`/home/organizations/${organization.id}`)
    }
    
    
</script>
<Card class="my-auto">
  <h1 class="text-2xl text-center m-4">Your Guilds</h1>
  <ul>
    {#each organizations as org}
    <List class="demo-list">     
      <Item on:SMUI:action={() => gotoOrganization(org)}><Text>{org.name}</Text></Item>
    </List>
    {/each}
  </ul>
</Card>